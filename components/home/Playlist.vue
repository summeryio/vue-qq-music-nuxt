<template>
    <div class="card card-playlist mod_slider_box">
        <h3 class="types-title">
            <span class="tit-icon icon-star-l tit-icon-l"></span><em>歌</em>／<em>单</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-star-r tit-icon-r"></span>
        </h3>
        <Slider :tags="tags" @select="changeTag" :mark="mark">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(slide, i) in playlists" :key="i">
                    <ul class="mod_playlist_box">
                        <li v-for="item in slide" :key="item.id">
                            <div class="wrapper">
                                <a href="/" class="pic mod_cover">
                                    <img v-lazy="item.coverImgUrl + '?param=300y300'">
                                    <i class="mask mod_mask"></i>
                                    <i class="play mod_icon_play"></i>
                                </a>
                                <div class="intro">
                                    <a href="/" class="name">{{item.name}}</a>
                                    <!-- <p class="count">播放量：{{formatCount(item.playCount)}}</p> -->
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </Slider>
    </div>
</template>

<script>
import {getHomePlaylist} from '@/assets/js/api'
import {spliceArray, formatCount} from '@/assets/js/util'
import Slider from './Slider'

const TAGS = [
    {
        id: '全部',
        name: '全部'
    },
    {
        id: '华语',
        name: '华语'
    },
    {
        id: '流行',
        name: '流行'
    },
    {
        id: '摇滚',
        name: '摇滚'
    },
    {
        id: '民谣',
        name: '民谣'
    },
    {
        id: '电子',
        name: '电子'
    }
]

export default {
    components: {
        Slider
    },
    props: {
        playlists: {
            type: [Object, Array],
            default: () => {}
        }
    },
    data () {
        return {
            // playlists: [],
            tags: TAGS,
            mark: 'recommend'
        }
    },
    mounted() {
        // this.getPlaylist('全部', 0)

        console.log(this.playlists);
    },
    methods: {
        /* getPlaylist(tag, mySwiper) {
            getHomePlaylist(tag).then(res => {
                this.playlists = spliceArray(res.playlists, 5)

                mySwiper && mySwiper.slideTo(0, false)
            })
        },
        formatCount(count) {
            return formatCount(count)
        },
        changeTag(tag, mySwiper) { // 切换tag
            this.getPlaylist(tag, mySwiper)
        } */
    }
}
</script>
