<template>
    <div class="card card-newsong mod_slider_box">
        <h3 class="types-title">
            <span class="tit-icon icon-new-l tit-icon-l"></span><em>新</em>／<em>歌</em>／<em>首</em>／<em>发</em><span class="tit-icon icon-new-r tit-icon-r"></span>
        </h3>
        <Slider :tags="tags" @select="changeTag"  :mark="mark">
            <swiperSlide v-for="(slide, i) in newsongs" :key="i">
                <el-row class="newsong-list">
                    <el-col class="item" :span="8" v-for="item in slide" :key="item.id">
                        <div class="wrapper">
                            <a href="/" class="pic mod_cover">
                                <img v-lazy="item.album.blurPicUrl + '?param=150y150'">
                                <i class="mask mod_mask"></i>
                                <i class="play mod_icon_play"></i>
                            </a>
                            <h6 class="name"><a href="/">{{item.name}}</a></h6>
                            <SingerName :artists="item.artists"></SingerName>
                            <p class="time">02:58</p>
                        </div>
                    </el-col>
                </el-row>
            </swiperSlide>
        </Slider>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getNewSong} from '@/assets/js/api'
import {formatCount, spliceArray} from '@/assets/js/util'
import SingerName from '@/components/SingerName'
import Slider from './Slider'

const TAGS = [
    {
        id: 0,
        name: '全部'
    },
    {
        id: 7,
        name: '华语'
    },
    {
        id: 96,
        name: '欧美'
    },
    {
        id: 8,
        name: '日本'
    },
    {
        id: 16,
        name: '韩国'
    }
]

export default {
    components: {
        swiper,
        swiperSlide,
        Slider,
        SingerName
    },
    data () {
        return {
            newsongs: [],
            tags: TAGS,
            mark: 'newsong'
        }
    },
    mounted() {
        this._getNewSong(this.tags[0].id)
    },
    methods: {
        _getNewSong(tag, mySwiper) {
            getNewSong(tag).then(res => {
                this.newsongs = spliceArray(res.data.splice(0, 36), 9)

                mySwiper && mySwiper.slideTo(0, false)
            })
        },
        changeTag(tag, mySwiper) {
            this._getNewSong(tag, mySwiper)
        }
    }
}
</script>
