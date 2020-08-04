import Vue from 'vue'
import ddd from './ddd.vue'

Vue.component(ddd.name, ddd)

Vue.directive('scroll', {
  inserted(el, binding) {
    const f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
