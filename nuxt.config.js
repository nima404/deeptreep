export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DeepTreep',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel:'stylesheet', href:'/fontawesome/css/fontawesome.css'},
      {rel:'stylesheet', href:'/fontawesome/css/brands.css'},
      {rel:'stylesheet', href:'/fontawesome/css/solid.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/bootstrap.js', '~/plugins/vee-validate.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
      {
        path: '~/components', // will get any components nested in let's say /components/test too
        pathPrefix: false,
      },
    ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://deeptreep.ir/',
  },

  loading: '~/components/loader/Loader.vue',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    redirect: {
      login: '/panel',
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          type: 'token',
        },
        user: {
          property: '',
          autoFetch: true,
        },
        endpoints: {
          login: {
            url: 'api/usersmodel/login/',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
          },
          user: {
            url: 'api/usersmodel/user-info/',
            method: 'get',
          },
        },
      },
    },
  },
}
