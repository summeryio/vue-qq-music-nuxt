<template>
    <ul class="mod_playlist_box">
        <li v-for="p in playlists" :key="p.id">
            <div class="wrapper">
                <a href="/" class="pic mod_cover">
                    <img v-lazy="p.coverImgUrl + '?param=300y300'" >
                    <i class="mask mod_mask"></i>
                    <i class="play mod_icon_play"></i>
                </a>
                <div class="intro">
                    <a href="/" class="name">{{p.name}}</a>
                    <a href="/" class="creator">{{p.creator.nickname}}</a>
                    <p class="count">播放量：{{formatCount(p.playCount)}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import {formatCount} from '@/assets/js/util'

export default {
    props: {
        playlists: {
            type: Array,
            default: () => {}
        }
    },
    methods: {
        formatCount(count) {
            return formatCount(count)
        }
    }
}
</script>