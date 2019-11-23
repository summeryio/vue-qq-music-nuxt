module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://y.qq.com/favicon.ico?max_age=2592000' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#31c27c' },
  /*
  ** Global CSS
  */
  css: [
    'swiper/dist/css/swiper.css',
    '@/assets/css/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/element-ui',
    {src: '@/plugins/element-ui', ssr: true},
    '@/plugins/vue-lazyload',
    {src: '@/plugins/swiper-slide', ssr: false},
    '@/plugins/vue-inject',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    analyze: true,

    // element-ui 按需加载
    vendor:[
      'element-ui'
    ],
    babel:{
      plugins: [
        [ "component", {"libraryName": "element-ui",  "styleLibraryName": "theme-chalk"}] 
      ] 
    },

    // 优化打包体积
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  },
}
