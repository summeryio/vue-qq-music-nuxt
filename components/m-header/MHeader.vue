<template>
    <div id="m_header">
        <div class="section-inner">
            <el-row>
                <el-col :span="4">
                    <h1 id="logo">
                        <router-link to="/"><img src="https://y.gtimg.cn/mediastyle/yqq/img/logo@2x.png?nowebp=1" alt="QQ音乐"></router-link>
                    </h1>
                </el-col>
                <el-col :span="14" :offset="1">
                    <ul class="nav">
                        <li><router-link to="/">音乐馆</router-link></li>
                        <li><router-link to="/singer">歌手</router-link></li>
                        <li><router-link to="/album">新碟</router-link></li>
                        <li><router-link to="/rank">排行榜</router-link></li>
                        <li><router-link to="/playlist">分类歌单</router-link></li>
                        <li><router-link to="/radio">电台</router-link></li>
                        <li><router-link to="/mv">MV</router-link></li>
                    </ul>
                </el-col>
                <el-col :span="5">
                    <div class="search">
                        <el-input
                            placeholder="搜索音乐、MV、歌单、用户"
                            suffix-icon="el-icon-search"
                            v-model="headerInput"
                            @focus="handleFocus(true)"
                            @blur="handleFocus(false)"
                        >
                        </el-input>
                        <SearchHot v-show="show && showHot"></SearchHot>
                        <SearchSuggest v-show="show && !showHot" :suggest="suggest" :keyWord="keyWord"></SearchSuggest>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

import SearchHot from './SearchHot'
import SearchSuggest from './SearchSuggest'
import {getBanner, getSearchSuggest} from '@/assets/js/api'
import {myTrim} from '@/assets/js/util'

export default {
    components: {
        SearchHot,
        SearchSuggest
    },
    data () {
        return {
            headerInput: '',
            show: false,
            showHot: true,
            suggest: {},
            keyWord: ''
        }
    },
    mounted() {
    },
    methods: {
        handleFocus(bol) {
            this.show = bol
        },
        _getSearchSuggest(val) {
            getSearchSuggest(val).then(res => {
                if (!Object.keys(res.result).length) {
                    this.show = false
                    
                    return
                } else {
                    this.show = true
                    this.suggest = res.result
                }
            })
        }
    },
    watch: {
        headerInput(newVal) {
            if (newVal && myTrim(newVal) !== '') {
                this.showHot = false
                this.keyWord = newVal
                this._getSearchSuggest(newVal)
            } else {
                this.showHot = true
            }
        }
    }
}
</script>