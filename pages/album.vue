<template>
    <div class="qq_music" id="album">
        <div class="section-inner">
            <h3 class="mod_types-title">
                <span class="tit-icon icon-skill-l tit-icon-l"></span><em>新</em>／<em>碟</em>／<em>首</em>／<em>发</em><span class="tit-icon icon-skill-r tit-icon-r"></span>
            </h3>
            <ul class="mod_playlist_box">
                <li v-for="album in albums" :key="album.id">
                    <div class="wrapper">
                        <a href="/" class="pic mod_cover">
                            <img v-lazy="album.picUrl + '?param=300y300'" >
                            <i class="mask mod_mask"></i>
                            <i class="play mod_icon_play"></i>
                        </a>
                        <div class="intro">
                            <a href="/" class="name">{{album.name}}</a>
                            <SingerName :artists="album.artists"></SingerName>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="mod_pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="total"
                @current-change="handlePage"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import {getAlbum} from '@/assets/js/api'
import SingerName from '@/components/SingerName'

export default {
    components: {
        SingerName
    },
    data () {
        return {
            albums: [],
            total: 0
        }
    },
    asyncData(ctx) {
        return getAlbum().then(res => {
            return {
                albums: res.albums,
                total: res.total
            }
        })
    },
    methods: {
        handlePage(page) {
            getAlbum(page).then(res => {
                this.albums = res.albums
            })
        }
    }
}
</script>
