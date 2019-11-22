<template>
    <div class="card card-banner mod_slider_box">
        <h3 class="types-title">
            <span class="tit-icon icon-art-l tit-icon-l"></span><em>精</em>／<em>彩</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-art-r tit-icon-r"></span>
        </h3>
        <Slider :tags="tags" :mark="mark">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(slide, i) in banners" :key="i">
                    <el-row class="banner-list">
                        <el-col class="item" :span="12" v-for="item in slide" :key="item.id">
                            <div class="wrapper">
                                <a href="/" class="pic">
                                    <img :src="item.imageUrl">
                                </a>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </Slider>
    </div>
</template>

<script>
import {getHomeBanner} from '@/assets/js/api'
import {formatCount, spliceArray} from '@/assets/js/util'
import Slider from './Slider'


export default {
    components: {
        Slider
    },
    props: {
        banners: {
            type: [Object, Array],
            default: () => {}
        }
    },
    data () {
        return {
            tags: [],
            mark: 'banner'
        }
    },
    mounted() {
        // this.print(this.banners);
    },
    methods: {
    }
}
</script>
