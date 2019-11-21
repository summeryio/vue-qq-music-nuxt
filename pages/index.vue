<template>
  <div class="container">
      <div>
          <p class="title">
            <img v-lazy="lazyimg">
            <nuxt-link to="/about">go about</nuxt-link>
            <nuxt-link to="/news">go news</nuxt-link>
          </p>
          <Banner></Banner>

          <ul>
            <li v-for="(b, i) in banners" :key="i">
              <img :src="b.imageUrl" alt="">
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Banner from '~/components/Banner.vue'
import axios from 'axios'

export default {
  components: {
    Logo,
    Banner
  },
  data() {
    return {
      lazyimg: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1855057.jpg?max_age=2592000',
      banners: []
    }
  },
  asyncData ({app}) {//请求
      return  axios({
          method: 'get',
          url: 'http://localhost:3001/banner'
      })
      .then(function (res) {
          return { banners: res.data.banners};
          error(params)
      })
  },
}
</script>

<style lang="scss" scoped>
  a {
    display: block;
    margin: 20px 0;
  }
</style>