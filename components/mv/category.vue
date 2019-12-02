<template>
    <div class="category">
        <dl>
            <dt>区域</dt>
            <dd>
                <a href="javascript: void(0);" :class="{on: areaIndex === a}" v-for="(area, a) in areas" :key="a" @click="areaSelect(a)">{{area}}</a>
            </dd>
        </dl>
        <dl>
            <dt>版本</dt>
            <dd>
                <a href="javascript: void(0);" :class="{on: typeIndex === t}" v-for="(type, t) in types" :key="t" @click="typeSelect(t)">{{type}}</a>
            </dd>
        </dl>
    </div>
</template>

<script>


export default {
    data() {
        return {
            areas: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
            areaIndex: 0,
            types: ['全部', '官方版', '原生', '现场版', '网易出品'],
            typeIndex: 0,
        }
    },
    methods: {
        areaSelect(index) {
            this.areaIndex = index
        },
        typeSelect(index) {
            this.typeIndex = index
        },
    }
}
</script>

<style>

</style>