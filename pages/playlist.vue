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
            <div class="category" v-html="test"></div>
      </div>
  </div>
</template>

<script>
import {getPlaylistTag} from '@/assets/js/api'
import {formatPlaylistTag} from '@/assets/js/util'
export default {
    data () {
        return {
            playlists: [],
            cats: {},
            total: 0,
            pageSize: 20
        }
    },
    asyncData(ctx) {
        return getPlaylistTag().then(res => {
            return {
                cats: res
            }
        })
    },
    computed: {
        test() {
            let _self = this
            
            let temp = Object.keys(this.cats.categories).map(((key, i) => {
                let val = _self.cats.categories[key]
                key = parseInt(key)

                let subTemp = _self.cats.sub.map((item, i) => {
                    let str = /\//g
                    
                    if (item.category === key && !str.test(item.name)) {
                        return `<dd>
                                    <span>${item.name}</span>
                                </dd>`
                    }
                })
                let cls = i === 0 ? 'less' : ''
                
                return `<dl class="${cls}">
                    <dt>${val}</dt>
                    ${subTemp.join('')}
                </dl>`
            }))

            return temp.join('')
        },
    },
    methods: {
        handleClick() {
            console.log(1);
        }
    },
    mounted() {
        this.print(this.cats);
    }
}
</script>

<style>

</style>