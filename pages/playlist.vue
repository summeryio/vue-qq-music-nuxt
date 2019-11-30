<template>
  <div class="qq_music" id="playlist">
      <div class="section-inner">
            <h3 class="mod_types-title">
                <span class="tit-icon icon-star-l tit-icon-l"></span><em>歌</em>／<em>单</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-star-r tit-icon-r"></span>
            </h3>
            <Category :cats="cats"/>
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
import Category from '@/components/playlist/Category'
import List from '@/components/playlist/List'
import {getPlaylistTag, getPlaylist} from '@/assets/js/api'
import {formatPlaylistTag, formatCount} from '@/assets/js/util'
export default {
    data () {
        return {
            cats: [], // 分类列表
            playlists: [],
            total: 0,
            pageSize: 20,
            curPage: 1,
            
            selectedTag: ''
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
    methods: {
        handlePage(page) {
            this._getPlaylistData(page)
        },

        _getPlaylistData(page) {
            let _page = page || 1
            
            getPlaylist(this.selectedTag, _page, this.pageSize).then(res => {
                this.playlists = res.playlists
                this.total = res.total
            })
        },

        formatCount(count) {
            return formatCount(count)
        },
    },
    components: {
        Category,
        List
    }
}
</script>

<style>

</style>