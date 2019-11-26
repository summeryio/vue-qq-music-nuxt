<template>
  <div class="qq_music" id="playlist">
      <div class="section-inner">
            <h3 class="mod_types-title">
                <span class="tit-icon icon-star-l tit-icon-l"></span><em>歌</em>／<em>单</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-star-r tit-icon-r"></span>
            </h3>
            <!-- <div class="category">
                <dl class="less">
                    <dt>语种</dt>
                    <dd>
                        <span>国语</span>
                    </dd>
                    <dd>
                        <span>国语</span>
                    </dd>
                    <dd>
                        <span>国语</span>
                    </dd>
                    <dd>
                        <span>国语</span>
                    </dd>
                    <dd>
                        <span>国语</span>
                    </dd>
                    <dd>
                        <span class="on">国语<i class="el-icon-arrow-down"></i></span>
                    </dd>
                </dl>
                <dl>
                    <dt>语种</dt>
                    <dd>
                        <span>国语</span>
                    </dd>
                    <dd>
                        <span class="on">国语<i class="el-icon-arrow-down"></i></span>
                    </dd>
                </dl>
                <div class="popup-tag">
                    <ul>
                        <li><a href="javascript:;">小语种</a></li>
                        <li><a href="javascript:;">小语种</a></li>
                        <li><a href="javascript:;">小语种</a></li>
                        <li><a href="javascript:;">小语种</a></li>
                    </ul>
                </div>
            </div> -->
            <div class="category">
                <dl v-for="(cat, c) in cats" :key="c" :class="{less: c === 0}">
                    <dt>{{cat.title}}</dt>
                    <dd v-for="(item, i) in cat.list" :key="i">
                        <span>{{item}}</span>
                    </dd>
                    <dd v-if="cat.more.length">
                        <span @click="showMoreTag(cat.more, c)">更多<i class="el-icon-arrow-down"></i></span>
                    </dd>
                </dl>
                <div class="popup-tag" v-show="showCat">
                    <ul>
                        <li v-for="(cat, i) in moreCats"><a href="javascript:;">{{cat}}</a></li>
                    </ul>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import {getPlaylistTag} from '@/assets/js/api'
import {formatPlaylistTag} from '@/assets/js/util'
export default {
    data () {
        return {
            cats: [],
            moreCats: [],
            showCat: false,
            moreCatIndex: 0
        }
    },
    /* asyncData(ctx) {
        return getPlaylistTag().then(res => {
            return {
                cats: res
            }
        })
    }, */
    render: {
        
    },
    methods: {
        showMoreTag(arr, index) {
            this.moreCats = arr

            if (this.moreCatIndex !== index) {
                this.showCat = true
            } else {
                this.showCat = !this.showCat
            }

            this.moreCatIndex = index
        }
    },
    mounted() {
        getPlaylistTag().then(res => {
            this.cats = formatPlaylistTag(res)
            this.print(this.cats);
        })
    }
}
</script>

<style>

</style>