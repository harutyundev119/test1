import Vue from 'vue'
import VueKinesis from 'vue-kinesis'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import infiniteScroll from 'vue-infinite-scroll'
import LightGallery from 'vue-light-gallery'
import VueParallaxJs from 'vue-parallax-js'

const options = {
  minWidth: 1024
}

Vue.use(VueParallaxJs, options)
Vue.use(LightGallery)
Vue.use(infiniteScroll)
Vue.use(VueKinesis)
Vue.use(VueGlide)
