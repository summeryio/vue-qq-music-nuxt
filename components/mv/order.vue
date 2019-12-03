<template>
    <div class="order">
        <h2 class="selected-title">

            <span v-if="mv.areaTag">{{mv.areaTag}}<i class="el-icon-close" @click="handleAllArea"></i></span>
            <span v-if="mv.typeTag">{{mv.typeTag}}<i class="el-icon-close" @click="handleAllType"></i></span>
            <template v-if="!mv.areaTag && !mv.typeTag">全部MV</template>
        </h2> 
        <div class="switch">
            <a 
                v-for="(sort, s) in sorts" 
                :key="s" 
                href="javascript: void(0);" 
                :class="{on: s === sortIndex}"
                @click="handleSort(sort, s)"
            >{{sort}}</a>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
    data() {
        return {
            sorts: ['上升最快', '最热', '最新'],
            sortIndex: 0
        }
    },
    methods: {
        handleSort(tag, i) {
            this.sortIndex = i
            this.setMvOrder(tag)
        },
        handleAllArea() {
            this.setMvAreaTag(null)
        },
        handleAllType() {
            this.setMvTypeTag(null)
        },
        
        ...mapMutations({
            setMvAreaTag: 'SET_MV_AREA_TAG',
            setMvTypeTag: 'SET_MV_TYPE_TAG',
            setMvOrder: 'SET_MV_ORDER'
        })
    },
    computed: {
        ...mapGetters([
            'mv'
        ])
    },
}
</script>

<style>

</style>