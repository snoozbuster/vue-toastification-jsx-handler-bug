import Vue from 'vue'
import VueToastificationPlugin from 'vue-toastification'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueToastificationPlugin, { closeOnClick: false });

new Vue({
  render: h => h(App),
}).$mount('#app')
