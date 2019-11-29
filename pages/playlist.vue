<template>
  <div class="qq_music" id="playlist">
      <div class="section-inner">
            <h3 class="mod_types-title">
                <span class="tit-icon icon-star-l tit-icon-l"></span><em>歌</em>／<em>单</em>／<em>推</em>／<em>荐</em><span class="tit-icon icon-star-r tit-icon-r"></span>
            </h3>
            <div class="category">
                <dl v-for="(cat, c) in cats" :key="c" :class="{less: c === 0, last: c === cats.length - 1}">
                    <dt>{{cat.title}}</dt>
                    <dd v-for="(item, i) in cat.list" :key="i">
                        <span @click="handleTagClick(i, c, item)" :class="{on: tagIndex === i && catIndex === c}">{{item}}</span>
                    </dd>
                    <dd v-if="cat.more.length">
                        <span 
                            @click.stop.prevent="showMoreTag(c)"
                            :class="{on: moreIndex === c && showMore || moreCatIndex === c}"
                        >
                            {{
                                moreCatIndex === c && moreTagText !== '' ? moreTagText : '更多'
                            }}
                            <i  :class="[showMore && moreIndex === c ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
                        </span>
                    </dd>
                    <div class="popup-tag" v-if="cat.more.length" v-show="moreIndex === c && showMore">
                        <ul>
                            <li v-for="(cat, i) in cat.more">
                                <a href="javascript:;" @click="handleMoreTagClick(i, c, cat)" :class="{on: moreTagIndex === i && moreCatIndex === c}">{{cat}}</a>
                            </li>
                        </ul>
                    </div>
                </dl>
            </div>
            <ul class="mod_playlist_box">
                <li v-for="p in playlists" :key="p.id">
                    <div class="wrapper">
                        <a href="/" class="pic mod_cover">
                            <img v-lazy="p.coverImgUrl + '?param=300y300'" >
                            <i class="mask mod_mask"></i>
                            <i class="play mod_icon_play"></i>
                        </a>
                        <div class="intro">
                            <a href="/" class="name">{{p.name}}</a>
                            <!-- <SingerName :artists="p.artists"></SingerName> -->
                        </div>
                    </div>
                </li>
            </ul>
      </div>
  </div>
</template>

<script>
import {getPlaylistTag, getPlaylist} from '@/assets/js/api'
import {formatPlaylistTag} from '@/assets/js/util'
export default {
    data () {
        return {
            cats: [], // 分类列表
            playlists: [],
            total: 0,
            pageSize: 20,

            showMore: false, // 是否显示更多
            moreIndex: null, // 点击更多时存储的index
            moreCatIndex: null, // 点击更多里的tag时父级分类的index
            moreTagIndex: null,
            moreTagText: '',

            tagIndex: null,
            catIndex: null,
            
            selectedTag: ''
        }
    },
    methods: {
        showMoreTag(catIndex) {
            if (this.moreIndex !== catIndex) {
                this.showMore = true
            } else {
                this.showMore = !this.showMore
            }

            this.moreIndex = catIndex
        },
        handleTagClick(index, catIndex, text) {
            this.tagIndex = index
            this.catIndex = catIndex

            this.moreCatIndex = null

            this.selectedTag = text
        },
        handleMoreTagClick(index, catIndex, text) {
            this.moreTagIndex = index
            this.moreCatIndex = catIndex
            this.moreIndex = catIndex
            this.showMore = true
            this.moreTagText = text
            this.catIndex = null

            this.selectedTag = text
        },

        _getPlaylistData() {
            getPlaylist().then(res => {
                this.playlists = res.playlists
            })
        }
    },
    mounted() {
        let _self = this
        
        getPlaylistTag().then(res => {
            this.cats = formatPlaylistTag(res)
            this.print(this.cats);
        })

        this._getPlaylistData()

        this.globalClick(function () {
            _self.showMore = false
            _self.moreIndex = null
        })
    }
}
</script>

<style>

</style>