<template>
  <div class="container">
      <div>
          <p class="title">
            <img v-lazy="lazyimg">
            <nuxt-link to="/about">go about</nuxt-link>
            <nuxt-link to="/news">go news</nuxt-link>
          </p>
          <Banner :banners="banners"></Banner>

          <!-- <ul>
            <li v-for="(b, i) in banners" :key="i">
              <img :src="b.imageUrl" alt="">
            </li>
          </ul> -->
      </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Banner from '~/components/Banner.vue'
import axios from 'axios'
import {getHomeBanner} from '@/assets/js/api'
// import {getBanner, getBanner2} from '@/assets/js2/api'

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
      
      return getHomeBanner().then(res => {
        console.log(res) 
        return { banners: res.banners }
      }).catch(err => {
        console.log(err) 
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