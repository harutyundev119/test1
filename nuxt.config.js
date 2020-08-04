const mapApiKey =
  process.env.MAP_API_KEY || 'e5c20c9d-fea5-427c-b9a3-4d13c4b6dfdf'

export default {
  mode: 'universal',
  env: {
    mapApiKey,
    apiUrl: process.env.API_URL || 'https://dev-lada-lecar-api.kodix.kodix.dev'
  },
  generate: {
    routes: [
      '/',
      '/catalog',
      '/sales',
      '/sale',
      '/news',
      '/events',
      '/about',
      '/dealers',
      '/group',
      '/materials',
      '/contact',
      '/ui',
      '/ui/components',
      '/ui/colors',
      '/ui/buttons',
      '/ui/typography',
      '/ui/icons',
      '/ui/forms',
      '/ui/pages'
    ]
  },
  head: {
    title:
      'LECAR – запасные части, аксессуары и автохимия фирменной сети LADA.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Новая линейка автокомпонентов относится к сегменту эконом-класса. Это практичное и оптимальное по стоимости решение в вопросе обслуживания автомобиля.'
      },
      { name: 'yandex-verification', content: '7b09005d95aa8cb6' },
      {}
    ],
    script: [
      { src: `https://api-maps.yandex.ru/2.1/?apikey=${mapApiKey}&lang=ru_RU` },
      {
        hid: 'gtm-script1',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-172829925-1',
        defer: true
      },
      {
        hid: 'gtm-script2',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-172829925-1');
        `,
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/vendors.css', '~assets/css/app.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/ddd/index.js', mode: 'client' },
    { ssr: false, src: '~plugins/nossr.js' },
    { src: '~plugins/tiny-slider.js', mode: 'client' },
    '~plugins/plugins',
    '~plugins/ui',
    { ssr: true, src: '~plugins/vee-validate.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
    '@nuxtjs/router'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-basic-auth-module',
    [
      'nuxt-mq',
      {
        defaultBreakpoint: 'lg',
        breakpoints: {
          s: 768,
          m: 1024,
          l: 1440,
          xl: Infinity
        }
      }
    ],
    [
      '@nuxtjs/device',
      {
        defaultUserAgent:
          'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36'
      }
    ],
    [
      'vue-yandex-maps/nuxt',
      {
        apiKey: 'ca913e0d-396f-41fb-aba4-8537720869c5',
        lang: 'ru_RU',
        version: '2.1'
      }
    ],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '64708954',
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  basic: {
    name: 'kodix',
    pass: 'kodix123',
    enabled: false
  },
  axios: {},
  /*
   ** Build configuration
   */
  vue: {
    config: {
      productionTip: false,
      devtools: true // TODO закрыть до выкатки
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ['vee-validate/dist/rules'],
    extend(config, ctx) {},
    postcss: {
      plugins: {
        'postcss-prepend-imports': {
          files: ['./assets/css/helpers/vars.css']
        },
        'postcss-easy-import': {},
        'postcss-mixins': {},
        'postcss-advanced-variables': {},
        'postcss-custom-properties': {},
        'postcss-custom-media': {},
        'postcss-nested-ancestors': {},
        'postcss-nesting': {},
        'postcss-nested': {},
        'postcss-media-minmax': {},
        'postcss-color-function': {},
        'postcss-custom-selectors': {},
        'postcss-atroot': {},
        'postcss-extend': {},
        'postcss-selector-matches': {},
        'postcss-selector-not': {}
      }
    }
  }
}
