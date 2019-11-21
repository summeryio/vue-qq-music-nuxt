<template>
  <div class="container">
      <div>
          <p class="title">
            <img v-lazy="lazyimg">
            <nuxt-link to="/about">go about</nuxt-link>
            <nuxt-link to="/news">go news</nuxt-link>
          </p>
      </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      lazyimg: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1855057.jpg?max_age=2592000'
    }
  },
}
</script>

<style lang="scss" scoped>
  a {
    display: block;
    margin: 20px 0;
  }
</style>