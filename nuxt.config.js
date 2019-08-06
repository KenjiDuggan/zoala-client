module.exports = {
  mode: 'SPA',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    '~/plugins/vue-swal',
    '~plugins/vue2-google-maps'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/vuetify',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/eslint-module',
    'vue-sweetalert2/nuxt'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://localhost:8081'
  },

  auth: {
    redirect: {
      login: '/goals',
      logout: '/login'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'auth/login', method: 'post', propertyName: 'data', setCredentials: true },
          user: { url: 'auth/me', method: 'get', propertyName: false },
          logout: false
        }
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: '#747474',
      accent: '#90A4AE',
      secondary: '#FFB300',
      info: '#424242',
      warning: '#FF652F',
      error: '#42A5F5',
      success: '#14A76C'
    },
    icons: true,
    iconfont: 'mdi'
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          // include: [path.resolve(__dirname, './node_modules/vue2-google-maps')],
          loader: 'eslint-loader',
          exclude: /(node_modules)/
          // transpile: [/^vue2-google-maps($|\/)/]
        })
      }
    }
    // vendor: ['vue2-google-maps']
  }
}
