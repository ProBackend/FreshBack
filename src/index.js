import Vue from 'vue';
import App from './App.vue';
import Nosotros from './components/AcercadeNosotros.vue';
import Login from './components/Login.vue';
import Productos from './components/Productos.vue'

new Vue({
  render: h => h(App)
}).$mount('#menu');

new Vue({
  render: h => h(Nosotros)
}).$mount('#nosotros')

new Vue({
  render: h => h(Login)
}).$mount('#login')

new Vue({
  render: h => h(Productos)
}).$mount('#productos')