<template>
    <div class="card card-recommend mod_slider_box">
        <div class="section-inner">
            <h3 class="types-title">
                <span class="tit-icon icon-skill-l tit-icon-l"></span><em>新</em>／<em>碟</em>／<em>首</em>／<em>发</em><span class="tit-icon icon-skill-r tit-icon-r"></span>
            </h3>
            <ul class="mod_playlist_box">
                <li v-for="album in albums" :key="album.id">
                    <div class="wrapper">
                        <a href="/" class="pic mod_cover">
                            <img v-lazy="album.picUrl + '?param=300y300'" >
                            <i class="mask mod_mask"></i>
                            <i class="play mod_icon_play"></i>
                        </a>
                        <div class="intro">
                            <a href="/" class="name">{{album.name}}</a>
                            <SingerName :artists="album.artists"></SingerName>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {getHomeAlbum} from '@/assets/js/api'
import {formatCount} from '@/assets/js/util'
import SingerName from '@/components/SingerName'

export default {
    components: {
        SingerName
    },
    data () {
        return {
            albums: [],
            tags: [],
            mark: 'recommend'
        }
    },
    mounted() {
        getHomeAlbum().then(res => {
            this.albums = res.albums.splice(0, 10)
        })
    },
    methods: {
    }
}
</script>
