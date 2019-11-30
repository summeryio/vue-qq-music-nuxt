<template>
  <div id="app">
    <MHeader />
    <nuxt :keepAlive="true" />
    <footer id="footer"></footer>
  </div>
</template>

<script>
import MHeader from '@/components/m-header/MHeader'
export default {
  components: {
    MHeader
  }
}
</script>
<style scoped>
#footer {
  height: 200px;
  background-color: #333;
}
</style>
