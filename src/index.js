import Vue from 'vue';
import App from './App.vue';
import Nosotros from './components/AcercadeNosotros.vue';
import Login from './components/Login.vue';

new Vue({
  render: h => h(App)
}).$mount('#menu');

new Vue({
  render: h => h(Nosotros)
}).$mount('#nosotros')

new Vue({
  render: h => h(Login)
}).$mount('#login')