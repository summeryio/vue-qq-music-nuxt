<template>
    <div class="order">
        <h2 class="selected-title" v-if="playlistSelectedTag">
            <span>
                {{playlistSelectedTag}}
                <i class="el-icon-close" @click="selectAll"></i>
            </span>
        </h2>
        <h2 class="selected-title" v-else>全部歌单</h2>

        <div class="switch">
            <a href="javascript: void(0);" :class="{on: playlistOrder === 'hot'}" @click="setPlaylistOrder('hot')">推荐</a>
            <a href="javascript: void(0);" :class="{on: playlistOrder === 'new'}" @click="setPlaylistOrder('new')">最新</a>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'playlistSelectedTag',
            'playlistOrder'
        ])
    },
    methods: {
        selectAll() {
            this.setPlaylistSelectedTag(null)
        },
        
        ...mapMutations({
            setPlaylistSelectedTag: 'SET_PLAYLISTY_SELECTED_TAG',
            setPlaylistOrder: 'SET_PLAYLISTY_ORDER'
        })
    }
}
</script>

<style>

</style>