<template>
    <div class="qq_music" id="playlist">
        <div class="section-inner">
            <h3 class="mod_types-title">
                <span class="tit-icon icon-star-l tit-icon-l"></span><em>歌</em>／<em>单</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-star-r tit-icon-r"></span>
            </h3>
            <Category :cats="cats"/>
            <Order />
            <List :playlists="playlists"/>
        </div>
        <div class="mod_pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                :current-page.sync="curPage"
                @current-change="handlePage"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import Category from '@/components/playlist/Category'
import List from '@/components/playlist/List'
import Order from '@/components/playlist/Order'

import {getPlaylistTag, getPlaylist} from '@/assets/js/api'
import {formatPlaylistTag, formatCount} from '@/assets/js/util'
export default {
    data () {
        return {
            cats: [],
            playlists: [],
            total: 0,
            pageSize: 20,
            curPage: 1,
            
            selectedTag: '',
            order: 'hot'
        }
    },
    async asyncData(ctx) {
        let [playlistsTag, playlistsData] = await Promise.all([
            getPlaylistTag(),
            getPlaylist()
        ])

        return {
            cats: formatPlaylistTag(playlistsTag),
            playlists: playlistsData.playlists,
            total: playlistsData.total
        }
    },
    computed: {
        ...mapGetters([
            'playlistSelectedTag',
            'playlistOrder'
        ])
    },
    methods: {
        handlePage(page) {
            this._getPlaylistData(page)
        },

        _getPlaylistData(page) {
            let _page = page || 1
            
            getPlaylist(this.selectedTag, _page, this.pageSize, this.playlistOrder).then(res => {
                this.playlists = res.playlists
                this.total = res.total
            })
        },

        formatCount(count) {
            return formatCount(count)
        },

        ...mapMutations({
            setPlaylistOrder: 'SET_PLAYLISTY_ORDER'
        })
    },
    components: {
        Category,
        List,
        Order
    },
    watch: {
        playlistSelectedTag(newTag) {
            this.selectedTag = newTag
            this.curPage = 1
            
            this.order = 'hot'
            this.setPlaylistOrder('hot')
            this._getPlaylistData()
        },
        playlistOrder(newOrder) {
            if (this.order === newOrder) return
            
            this.order = newOrder
            this.curPage = 1
            this._getPlaylistData()
        }
    }
}
</script>

<style>

</style>