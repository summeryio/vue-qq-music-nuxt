<template>
	<div class="search-hot">
        <div class="hot">
            <dl>
                <dt></dt>
                <dd v-for="(hot, i) in hots">
                    <i>{{i + 1}}</i>
                    <span>{{hot.searchWord}}</span>
                    <em>{{formatCount(hot.score)}}</em>
                </dd>
            </dl>
        </div>
        <div class="history">
            <dl>
                <dt>
                    <span>搜索历史</span>
                    <i class="el-icon-delete"></i>
                </dt>
                <dd>
                    <span>白山茶</span>
                    <i class="el-icon-close"></i>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
import {getSearchHot} from '@/assets/js/api'
import {formatCount} from '@/assets/js/util'

export default {
    components: {
    },
    props: {
        
    },
    data () {
        return {
            hots: []
        }
    },
    created() {
        getSearchHot().then(res => {
            this.hots = res.data.slice(0, 5)
        })
    },
    mounted() {
    },
    methods: {
        formatCount(count) {
            return formatCount(count)
        }
    },
}
</script>
