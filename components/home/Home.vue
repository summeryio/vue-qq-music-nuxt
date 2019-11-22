<template>
    <div class="qq_music" id="home">
        <Playlist></Playlist>
        <NewSong></NewSong>
        <Banner></Banner>
        <Album></Album>
        <MV></MV>
    </div>
</template>

<script>
import MHeader from '@/components/m-header/MHeader'
import Playlist from './Playlist'
import Album from './Album'
import NewSong from './NewSong'
import Banner from './Banner'
// import MV from './MV'

export default {
    components: {
        Playlist,
        Album,
        NewSong,
        Banner,
        MV: resolve => require(['./MV'], resolve) // 组件懒加载
    },
    data () {
        return {
        }
    },
    mounted() {
        
    },
    methods: {},
}
</script>
