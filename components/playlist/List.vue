<template>
    <div>
        <ul class="mod_playlist_box">
            <li v-for="p in playlists" :key="p.id">
                <div class="wrapper">
                    <a href="/" class="pic mod_cover">
                        <img v-lazy="p.coverImgUrl + '?param=300y300'" >
                        <i class="mask mod_mask"></i>
                        <i class="play mod_icon_play"></i>
                    </a>
                    <div class="intro">
                        <a href="/" class="name">{{p.name}}</a>
                        <a href="/" class="creator">{{p.creator.nickname}}</a>
                        <p class="count">播放量：{{formatCount(p.playCount)}}</p>
                    </div>
                </div>
            </li>
        </ul>
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
import {getPlaylist} from '@/assets/js/api'
import {formatCount} from '@/assets/js/util'

export default {
    props: {
        propPlaylist: {
            type: Array,
            default: () => {}
        },
        propTotal: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            playlists: this.propPlaylist,
            total: this.propTotal,
            pageSize: 20,
            curPage: 1,
            
            selectedTag: '',
            order: 'hot'
        }
    },
    methods: {
        formatCount(count) {
            return formatCount(count)
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