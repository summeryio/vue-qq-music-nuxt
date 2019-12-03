<template>
    <div>
        <ul class="mod_mv_list">
            <li v-for="mv in mvs" :key="mv.id">
                <div class="wrapper">
                    <a href="/" class="pic mod_cover">
                        <img v-lazy="mv.cover + '?param=640y360'">
                        <i class="mask mod_mask"></i>
                        <i class="play mod_icon_play"></i>
                    </a>
                    <div class="intro">
                        <a href="/" class="name">{{mv.name}}</a>
                        <SingerName :artists="mv.artists"></SingerName>
                        <p class="count">播放量：{{formatCount(mv.playCount)}}</p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="mod_pagination">
            <!-- <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                :page-size="pageSize"
                :current-page.sync="curPage"
                @current-change="handlePage"
            >
            </el-pagination> -->
        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import {formatCount} from '@/assets/js/util'
import SingerName from '@/components/SingerName'
import {getMV} from '@/assets/js/api'

export default {
    props: {
        propMVs: {
            type: Array,
            default: () => {}
        },
        propTotal: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            mvs: this.propMVs,
            total: this.propTotal,

            page: 1,
            pageSize: 20,
            curPage: 1,
            areaTag: null,
            typeTag: null,
            order: null
        }
    },
    methods: {
        handlePage(page) {
            this.page = page
            this._getMV()
        },
        _getMV() {
            let {areaTag, typeTag, order, page, pageSize} = this
            
            getMV(areaTag, typeTag, order, page, pageSize).then(res => {
                this.mvs = res.data
                this.total = res.count
            })
        },
        
        formatCount(count) {
            return formatCount(count)
        }
    },
    computed: {
        ...mapGetters([
            'mv'
        ])
    },
    watch: {
        mv(newMV) {
            let {areaTag, typeTag, order} = newMV
            
            this.curPage = 1
            this.areaTag = areaTag
            this.typeTag = typeTag
            this.order = order

            this._getMV()
        }
    },
    components: {
        SingerName
    }
}
</script>

<style>

</style>