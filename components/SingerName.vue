<template>
	<p class="mod_singer_name" v-html="formatArtists" @click="handleClick($event)"></p>
</template>

<script>

export default {
    props: {
        artists: {
            type: Array,
            default: []
        }
    },
    computed: {
        formatArtists() {
            let res = []

            if (this.artists.length && this.artists.length === 1) {
                return `<a href="javascript: void(0);" data-id="${this.artists[0].id}">${this.artists[0].name}</a>`
            } else {
                this.artists.forEach((ar, i) => {
                    if (i === this.artists.length - 1) {
                        res.push(`<a href="javascript: void(0);" data-id="${ar.id}">${ar.name}</a>`)
                    } else {
                        res.push(`<a href="javascript: void(0);" data-id="${ar.id}">${ar.name}</a> / `)
                    }
                })

                return res.join('')
            }
        }
    },
    methods: {
        handleClick(e) {
            if (e.target.nodeName === 'A') {
                let id = e.target.getAttribute('data-id')
                
                this.$router.push({path: '/singer-detail', query: {id: id}})
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .singer {
        color: #999;
        
    }
    .singer a {
            color: #999;

            &:hover {
                color: #31c27c;
            }
        }
</style>