<template>
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
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
    props: {
        cats: {
            type: Array,
            default: () => {}
        }
    },
    data() {
        return {
            showMore: false, // 是否显示更多
            moreIndex: null, // 点击更多时存储的index
            moreCatIndex: null, // 点击更多里的tag时父级分类的index
            moreTagIndex: null,
            moreTagText: '',

            tagIndex: null,
            catIndex: null
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

            this.setPlaylistSelectedTag(text)
            
        },
        handleMoreTagClick(index, catIndex, text) {
            this.moreTagIndex = index
            this.moreCatIndex = catIndex
            this.moreIndex = catIndex
            this.showMore = true
            this.moreTagText = text
            this.catIndex = null

            this.setPlaylistSelectedTag(text)
        },

        ...mapMutations({
            setPlaylistSelectedTag: 'SET_PLAYLISTY_SELECTED_TAG',
            setPlaylistOrder: 'SET_PLAYLISTY_ORDER'
        })
    },
    mounted() {
        let _self = this
        
        this.globalClick(function () {
            _self.showMore = false
            _self.moreIndex = null
        })
    },
    computed: {
        ...mapGetters([
            'playlistSelectedTag'
        ])
    },
    watch: {
        playlistSelectedTag(newTag) { // 切换到全部歌单，把标签高亮去掉
            if (!newTag) {
                this.moreCatIndex = null
                this.catIndex = null
            }
        }
    }
}
</script>