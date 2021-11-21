import Vue from 'vue';
import App from './App.vue';
import Login from './components/Login.vue';
import Productos from './components/Productos.vue';
import MenudelDia from './components/MenudelDia.vue';

new Vue({
  render: h => h(App)
}).$mount('#app');

new Vue({
  render: h => h(Login)
}).$mount('#login')

new Vue({
  render: h => h(MenudelDia)
}).$mount('#menu')

new Vue({
  render: h => h(Productos)
}).$mount('#productos')
