<template>
    <div class="card card-mv mod_slider_box">
        <h3 class="mod_types-title">
            <span class="tit-icon icon-shizhan-l tit-icon-l"></span><em>最</em>／<em>新</em>／<em>M</em>／<em>V</em><span class="tit-icon icon-shizhan-r tit-icon-r"></span>
        </h3>
        <Slider :tags="tags" @select="changeTag" :mark="mark">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(slide, i) in datas" :key="i">
                    <ul class="mod_mv_list">
                        <li v-for="item in slide" :key="item.id">
                            <div class="wrapper">
                                <a href="/" class="pic mod_cover">
                                    <img v-lazy="item.cover + '?param=640y360'">
                                    <i class="mask mod_mask"></i>
                                    <i class="play mod_icon_play"></i>
                                </a>
                                <div class="intro">
                                    <a href="/" class="name">{{item.name}}</a>
                                    <SingerName :artists="item.artists"></SingerName>
                                    <p class="count">播放量：{{formatCount(item.playCount)}}</p>
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
import {getHomeMV} from '@/assets/js/api'
import {spliceArray, formatCount} from '@/assets/js/util'
import SingerName from '@/components/SingerName'
import Slider from './Slider'

const TAGS = [
    {
        id: '',
        name: '全部'
    },
    {
        id: '内地',
        name: '内地'
    },
    {
        id: '港台',
        name: '港台'
    },
    {
        id: '欧美',
        name: '欧美'
    },
    {
        id: '日本',
        name: '日本'
    },
    {
        id: '韩国',
        name: '韩国'
    }
]

export default {
    components: {
        Slider,
        SingerName
    },
    props: {
        mvs: {
            type: [Object, Array],
            default: () => {}
        }
    },
    data () {
        return {
            datas: this.mvs,
            tags: TAGS,
            mark: 'mv'
        }
    },
    mounted() {
    },
    methods: {
        _getHomeMV(tag, mySwiper) {
            getHomeMV(tag).then(res => {
                this.datas = spliceArray(res.data, 10)

                mySwiper && mySwiper.slideTo(0, false)
            })
        },
        formatCount(count) {
            return formatCount(count)
        },
        changeTag(tag, mySwiper) {
            this._getHomeMV(tag, mySwiper)
        }
    }
}
</script>
