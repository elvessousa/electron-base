import Vue from 'vue'
import App from '../src/components/App.vue'

// ----------------------------------------------------
// Init vue
// ----------------------------------------------------
new Vue({
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')