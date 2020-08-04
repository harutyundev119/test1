import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, max, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required'
})
extend('max', {
  ...max,
  message: 'Max length 10'
})
extend('email', email)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
