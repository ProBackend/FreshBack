import Vue from 'vue';
import App from './App.vue';
import Nosotros from './components/AcercadeNosotros.vue';

new Vue({
  render: h => h(App)
}).$mount('#menu');

new Vue({
  render: h => h(Nosotros)
}).$mount('#nosotros')