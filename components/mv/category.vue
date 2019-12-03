<template>
    <div class="category">
        <dl>
            <dt>区域</dt>
            <dd>
                <a href="javascript: void(0);" :class="{on: areaIndex === a}" v-for="(area, a) in areas" :key="a" @click="areaSelect(a, area)">{{area}}</a>
            </dd>
        </dl>
        <dl>
            <dt>版本</dt>
            <dd>
                <a href="javascript: void(0);" :class="{on: typeIndex === t}" v-for="(type, t) in types" :key="t" @click="typeSelect(t, type)">{{type}}</a>
            </dd>
        </dl>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
    data() {
        return {
            areas: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
            areaIndex: 0,
            types: ['全部', '官方版', '现场版', '网易出品'],
            typeIndex: 0,
        }
    },
    methods: {
        areaSelect(index, tag) {
            let _tag = index === 0 ? null : tag
            
            this.areaIndex = index
            this.setMvAreaTag(_tag)
        },
        typeSelect(index, tag) {
            let _tag = index === 0 ? null : tag
            
            this.typeIndex = index
            this.setMvTypeTag(_tag)
        },

        ...mapMutations({
            setMvAreaTag: 'SET_MV_AREA_TAG',
            setMvTypeTag: 'SET_MV_TYPE_TAG',
        })
    },
    computed: {
        ...mapGetters([
            'mv'
        ])
    },
    watch: {
        mv(newMV) {
            if (!newMV.areaTag) {
                this.areaIndex = 0
            }

            if (!newMV.typeTag) {
                this.typeIndex = 0
            }
        }
    }
}
</script>

<style>

</style>