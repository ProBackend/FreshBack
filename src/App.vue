<template>
<section>
  <div v-if="!registro">
    <nav class="navbar navbar-expand-lg m-4 p-3">
      <div class="container-fluid">
        <h1 class="h1-tittle">FreshBack - Restaurante</h1>
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="btn-secundario" @click="Menu = true, Pro = false, Nosotros = false"><span class="p-texto link">Ofértas del día</span></button>
          </li>
          <li class="nav-item">
            <button class="btn-secundario" @click="Menu = false, Pro = true, Nosotros = false"><span class="p-texto link">Productos</span></button>
          </li>
          <li class="nav-item">
            <button class="btn-secundario" @click="Menu = false, Pro = false, Nosotros = true"><span class="p-texto link">Acérca de nosotros</span></button>
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn-primario mx-2" @click.prevent="registro = true, login = true, Menu = false, Pro = false, Nosotros = false">Iniciar sesión</button>
          <button class="btn-secundario mx-2" @click.prevent="registro = true, login = false, Menu = false, Pro = false, Nosotros = false">Registrarse</button>
        </form>
      </div>
    </nav>
    <div class="row">
      <div class="col-3">
        <div class="mx-4 contenedor-carrusel">
          <Carrusel/>
        </div>
      </div>
      <div v-if="Menu" class="col contenedor">
        <MenudelDia/>
      </div>
      <div v-if="Pro" class="col contenedor">
        <Productos/>
      </div>
      <div v-if="Nosotros" class="col contenedor">
        <AcercadeNosotros/>
      </div>
    </div>
  </div>
  <div v-else>
    <Login
      @back="registro = false, Menu = true"
      :Nuevo="login"
    />
  </div>
</section>
</template>

<script>
import Login from './components/Login.vue';
import Carrusel from './components/Carrusel.vue';
import MenudelDia from './components/MenudelDia.vue';
import Productos from './components/Productos.vue';
import AcercadeNosotros from './components/AcercadeNosotros.vue';

export default {
  name: 'App',
  components: {
    Login,
    MenudelDia,
    Productos,
    AcercadeNosotros,
    Carrusel
  },
  data(){
    return {
      registro: false,
      login: false,
      Menu: true,
      Pro: false,
      Nosotros: false
    }
  }
}
</script>
