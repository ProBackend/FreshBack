<template>
<section>
  <div v-if="!registro">
    <nav class="navbar navbar-expand-lg m-4 p-3">
      <div class="container-fluid">
        <h1 class="h1-tittle">FreshBack - Restaurante</h1>
        <ul class="navbar-nav">
          <li class="nav-item">
            <button class="btn-secundario" @click="Ofertas = true, Pro = false, Nosotros = false"><span class="p-texto link">Ofertas del día</span></button>
          </li>
          <li class="nav-item">
            <button class="btn-secundario" @click="Ofertas = false, Pro = true, Nosotros = false"><span class="p-texto link">Productos</span></button>
          </li>
          <li class="nav-item">
            <button class="btn-secundario" @click="Ofertas = false, Pro = false, Nosotros = true"><span class="p-texto link">Acerca de nosotros</span></button>
          </li>
        </ul>
        <form class="d-flex" v-if="!sesion">
          <button class="btn-primario mx-2" @click.prevent="registro = true, login = true, Menu = false, Pro = false, Nosotros = false">Iniciar sesión</button>
          <button class="btn-secundario mx-2" @click.prevent="registro = true, login = false, Menu = false, Pro = false, Nosotros = false">Registrarse</button>
        </form>
        <form class="d-flex" v-else>
          <button class="btn-primario mx-2" @click.prevent="sesion = ''">Cerrar sesión</button>
        </form>
      </div>
    </nav>
    <div class="row d-flex justify-content-around">
      <div class="col-2 mx-4">
          <div class="contenedor-carrusel">
            <Carrusel/>
          </div>
          <div class="">
            <div class="contenedor m-0 mt-2">
              <Usuario
                :usuario="user"
                :Productos= Pro
                :Nosotros= Nosotros
                :Ofertas= Ofertas
              />
            </div>
          </div>
      </div>
      <div v-if="Ofertas" class="col contenedor">
        <MenudelDia
          :permiso="user.auth"
        />
      </div>
      <div v-if="Pro" class="col contenedor">
        <Productos
          :permiso="user.auth"
        />
      </div>
      <div v-if="Nosotros" class="col contenedor">
        <AcercadeNosotros
          :permiso="user.auth"
        />
      </div>
    </div>
  </div>
  <div v-else>
    <Login
      @token="sesion = $event"
      @back="registro = false, Menu = true"
      @usuario= user
      :Nuevo= login
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
import Usuario from './components/Usuario.vue';

export default {
  name: 'App',
  components: {
    Login,
    MenudelDia,
    Productos,
    AcercadeNosotros,
    Carrusel,
    Usuario
  },
  data(){
    return {
      registro: false,
      login: false,
      Ofertas: true,
      Pro: false,
      Nosotros: false,
      user: {},
      sesion: ''
    }
  },
  computed: {
    verificar() {
      console.log('aaaa')
      fetch('/verificar', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': this.sesion
        }
      })
      .then(res => res.json())
      .then(data => {this.user= data})
    }
  }
}
</script>
