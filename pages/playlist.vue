<template>
    <div class="qq_music" id="playlist">
        <div class="section-inner">
            <h3 class="mod_types-title">
                <span class="tit-icon icon-star-l tit-icon-l"></span><em>歌</em>／<em>单</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-star-r tit-icon-r"></span>
            </h3>
            <Category :cats="cats"/>
            <Order />
            <List :propPlaylist="playlists" :propTotal="total"/>
        </div>
        
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import Category from '@/components/playlist/Category'
import List from '@/components/playlist/List'
import Order from '@/components/playlist/Order'

import {getPlaylistTag, getPlaylist} from '@/assets/js/api'
import {formatPlaylistTag} from '@/assets/js/util'
export default {
    data () {
        return {
            cats: [],
            playlists: [],
            total: 0
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
    components: {
        Category,
        List,
        Order
    },
}
</script>

<style>

</style>