import Vue from 'vue'
import vueDebounce from 'vue-debounce'
import VueMasonry from 'vue-masonry-css'
import VScrollLock from 'v-scroll-lock'
import VueYoutube from 'vue-youtube'
import InfiniteLoading from 'vue-infinite-loading'
import VueScrollTo from 'vue-scrollto'
import VueTilt from 'vue-tilt.js'

Vue.use(VueTilt)
Vue.use(VueScrollTo)
Vue.use(InfiniteLoading)
Vue.use(VueYoutube)
Vue.use(VScrollLock)
Vue.use(VueMasonry)
Vue.use(vueDebounce, {
  defaultTime: '400ms'
})
