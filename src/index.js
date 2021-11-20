import Vue from 'vue';
import App from './App.vue';
import Login from './components/Login.vue';
import Productos from './components/Productos.vue';
import ProductoDia from './components/ProductoDia.vue';
import Pmostrar from './components/Pmostrar.vue';
import Peditar from './components/Peditar.vue';
import ModalProducto from './components/ModalProducto.vue';

new Vue({
  render: h => h(App)
}).$mount('#menu');

new Vue({
  render: h => h(Login)
}).$mount('#login')

new Vue({
  render: h => h(Productos)
}).$mount('#productos')

new Vue({
  render: h => h(ProductoDia)
}).$mount('#productodia')

new Vue({
  render: h => h(Pmostrar)
}).$mount('#pmostrar')

new Vue({
  render: h => h(Peditar)
}).$mount('#peditar')

new Vue({
  render: h => h(ModalProducto)
}).$mount('#ModalProdcuto')