<template>
	<div class="search-result">
        <dl v-for="name in suggest.order">
            <dt>
                <i class="iconfont" :class="iconCls(name)"></i>
                {{SuggestTitle[name]}}
            </dt>
            <dd v-for="item in suggest[name]" v-html="formatData(item, name)">
            </dd>
        </dl>
    </div>
</template>

<script>


export default {
    components: {
    },
    props: {
        suggest: {
            type: Object,
            default: () => {}
        },
        keyWord: {
            type: String,
            default: ''
        }
    },
    created() {
        this.SuggestTitle = {
            'songs': '单曲',
            'albums': '专辑',
            'artists': '歌手',
            'playlists': '歌单',
            'mvs': '视频'
        }
    },
    methods: {
        formatData(item, title) {
            let key = this.keyWord
            let reg = new RegExp(key, 'gi')
            let name = item.name.replace(reg, `<i class="high">${key}</i>`)
            let singer = null

            if (title === 'songs') {
                singer = item.artists[0].name.replace(reg, `<i class="high">${key}</i>`)
            } else if (title === 'albums') {
                singer = item.artist.name.replace(reg, `<i class="high">${key}</i>`)
            }

            return singer ? name + `<span class="singer"> - ${singer}</span>` : name
        },
        iconCls(name) {
            return `icon-${name}`
        }
    },
    computed: {
        
    },
    watch: {
    }
}
</script>
