import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import titleComponent from './components/Custom/title.component.vue';

Vue.config.productionTip = false

Vue.component('vue-title', titleComponent);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
