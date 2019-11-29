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
                <dl v-for="(cat, c) in cats" :key="c" :class="{less: c === 0, last: c === cats.length - 1}">
                    <dt>{{cat.title}}</dt>
                    <dd v-for="(item, i) in cat.list" :key="i">
                        <span @click="handleTagClick(i, c)" :class="{on: tagIndex === i && catIndex === c}">{{item}}</span>
                    </dd>
                    <dd v-if="cat.more.length">
                        <span 
                            @click.stop.prevent="showMoreTag(cat.more, c)"
                            :class="{on: moreIndex === c && showMore}"
                        >
                            更多
                            <i class="el-icon-arrow-down"></i>
                        </span>
                    </dd>
                    <div class="popup-tag" v-show="moreIndex === c && showMore">
                        <ul>
                            <li v-for="(cat, i) in cat.more">
                                <a href="javascript:;" @click="handleMoreTagClick(i, c)" :class="{on: moreTagIndx === i && moreCatIndex === c}">{{cat}}</a>
                            </li>
                        </ul>
                    </div>
                </dl>
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
            cats: [], // 分类列表
            moreCats: [], // 子列表中的更多列表
            showMore: false, // 是否显示更多

            moreIndex: null, // 点击更多时存储的index
            moreCatIndex: null,
            moreTagIndx: null,

            tagIndex: null,
            catIndex: null
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

            if (this.moreIndex !== index) {
                this.showMore = true
            } else {
                this.showMore = !this.showMore
            }
            

            this.moreIndex = index
        },
        handleTagClick(index, catIndex) {
            this.tagIndex = index
            this.catIndex = catIndex
        },
        handleMoreTagClick(index, catIndex) {
            this.moreTagIndx = index
            this.moreCatIndex = catIndex
        }
    },
    mounted() {
        let _self = this
        
        getPlaylistTag().then(res => {
            this.cats = formatPlaylistTag(res)
            this.print(this.cats);
        })

        this.globalClick(function () {
            _self.showMore = false
            _self.moreIndex = null
        })
    }
}
</script>

<style>

</style>