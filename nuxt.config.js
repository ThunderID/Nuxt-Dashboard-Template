module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'thunder-accounting',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'thunder accounting system' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', integrity: "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ", crossorigin: "anonymous", href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css' },
      { rel: 'stylesheet', href: '/css/app.css' }
    ],
    scripts: [
      { src: 'assets/app.js' }
    ]
  },
  /*
  ** Modules
  */
  modules: [
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/apollo'
  ],
  /*
  ** APOLLO
  */
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:8001/graphql'
      }
    },
  },
  proxy: [
    'http://localhost:8001/graphql'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /*
  ** Plugin
  */
  plugins: [
     {src: '~/plugins/Validator.js', ssr: true}
  ],
  /*
  ** Router
  */
  router: {
  }
}

