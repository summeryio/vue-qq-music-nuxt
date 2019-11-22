<template>
    <div class="qq_music" id="home">
        <Banner :banners="banners" />
        <Playlist :playlists="playlists" />
    </div>
</template>

<script>
import Playlist from '@/components/home/Playlist.vue'
import Banner from '@/components/home/Banner.vue'

import {getHomeBanner, getHomePlaylist} from '@/assets/js/api'
import {spliceArray, formatCount} from '@/assets/js/util'

export default {
    components: {
        Banner,
        Playlist
    },
    data() {
        return {
            banners: [],
            playlists: []
        }
    },
    async asyncData (ctx) {
        /* return getHomePlaylist('全部').then(res => {
            console.log(res.playlists);
            return {
                playlists: spliceArray(res.playlists, 5)
            }
        })
        
        return getHomeBanner().then(res => {
            return { banners: spliceArray(res.banners, 2) }
        }) */

        let [bannersData] = await Promise.all([
            getHomeBanner(),
        ])

        return {
            banners: spliceArray(bannersData.banners, 2)
        }
    }
}
</script>