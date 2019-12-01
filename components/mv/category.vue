<template>
    <div class="category">
        <!-- <dl>
            <dt>区域</dt>
            <dd>
                <a href="javascript: void(0);" :class="{on: areaIndex === a}" v-for="(area, a) in areas" :key="a">{{area}}</a>
            </dd>
        </dl>
        <dl>
            <dt>版本</dt>
            <dd>
                <a href="javascript: void(0);" :class="{on: typeIndex === t}" v-for="(type, t) in types" :key="t">{{type}}</a>
            </dd>
        </dl> -->

        <dl v-for="(cat, c) in categories" :key="c">
            <dt>{{cat.t}}</dt>
            <dd>
                <a href="javascript: void(0);" :class="{on: tagIndex === i}" v-for="(item, i) in cat.arr" :key="i">{{item}}</a>
            </dd>
        </dl>
    </div>
</template>

<script>


export default {
    data() {
        return {
            // areas: ['全部', '内地', '港台', '欧美', '日本', '韩国'],
            // areaIndex: 0,
            // types: ['全部', '官方版', '原生', '现场版', '网易出品'],
            // typeIndex: 0,

            categories: [
                {
                    t: '区域',
                    arr: ['全部', '内地', '港台', '欧美', '日本', '韩国']
                },
                {
                    t: '版本',
                    arr: ['全部', '官方版', '原生', '现场版', '网易出品']
                }
            ],
            catIndex: 0,
            tagIndex: 0
        }
    }
}
</script>

<style>

</style>