<template>
    <div class="qq_music" id="home">
        <Playlist :playlists="playlists" />
        <NewSong :newsongs="newsongs" />
        <Banner :banners="banners" />
        <Album :albums="albums" />
        <MV :mvs="mvs" />
    </div>
</template>

<script>
import Playlist from '@/components/home/Playlist.vue'
import NewSong from '@/components/home/NewSong.vue'
import Banner from '@/components/home/Banner.vue'
import Album from '@/components/home/Album.vue'
import MV from '@/components/home/MV.vue'

import {getHomeBanner, getHomePlaylist, getNewSong, getHomeAlbum, getHomeMV} from '@/assets/js/api'
import {spliceArray, formatCount} from '@/assets/js/util'



export default {
    components: {
        Banner,
        Playlist,
        NewSong,
        Album: resolve => require(['@/components/home/Album.vue'], resolve),
        MV: resolve => require(['@/components/home/MV.vue'], resolve)
    },
    data() {
        return {
            banners: [],
            playlists: [],
            newsongs: [],
            albums: [],
            mvs: []
        }
    },
    async asyncData (ctx) {
        let [bannersData, playlistsData, newsongsData, albumsData, mvsData] = await Promise.all([
            getHomeBanner(),
            getHomePlaylist(),
            getNewSong(),
            getHomeAlbum(),
            getHomeMV()
        ])

        return {
            banners: spliceArray(bannersData.banners, 2),
            playlists: spliceArray(playlistsData.playlists, 5),
            newsongs: spliceArray(newsongsData.data.splice(0, 36), 9),
            albums: albumsData.albums.splice(0, 10),
            mvs: spliceArray(mvsData.data, 10)
        }
    }
}
</script>