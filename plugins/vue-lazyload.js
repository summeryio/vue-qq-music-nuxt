import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    loading: require('@/assets/images/1.png'),
    error: 'http://y.gtimg.cn/mediastyle/global/img/playlist_300.png?max_age=31536000',
})