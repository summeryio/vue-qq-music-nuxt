
<template>
  <div class="banner">
     <ul>
            <li v-for="(b, i) in banners" :key="i">
              <img :src="b.imageUrl" alt="">
            </li>
          </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    banners: {
      type: [Object, Array],
      default: () => {}
    }
  },
  /* data() {
    return {
      bannerData: this.banners
    }
  }, */
  mounted() {
    let _self = this
    /* axios({
          method: 'get',
          url: 'http://localhost:3001/banner'
      })
      .then(function (res) {
          _self.bannerData = res.data.banners
      }) */

      console.log(this.banners);

  }
}
</script>

<style>

</style>