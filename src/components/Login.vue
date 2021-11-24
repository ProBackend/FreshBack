<template>
  <div class="Registrarse-IniciarSesion">
    <div class="d-flex justify-content-end">
      <button class="btn-cerrar" @click="$emit('back')">X</button>
    </div>
    <div class="d-flex justify-content-center contenedorLogin">
      <div class="parteTrasera">
        <div>
          <h3>¿Aún no tienes una cuenta?</h3>
          <p>Registrate para hacer ver nuestros productos</p>
          <button
            class="btn-primario"
            @click="nuevo = false"
          >
            Registrarse
          </button>
        </div>
        <div>
          <h3>¿Ya tienes una cuenta?</h3>
          <p>Inicia sesión para ver nuestros productos</p>
          <button
            class="btn-primario"
            @click="nuevo = true"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
    <div v-if="nuevo" class="parteDelanteraIniciar">
      <form class="logs">
        <h2 class="h2-tittle">Iniciar sesión</h2>
        <label for="userIngre" class="input-label">Usuario</label>
        <input
          type="text"
          id="userIngre"
          placeholder="Usuario"
          name="usuario"
          class="input"
          v-model="usuario.usuario"
        >
        <label for="contraIngre" class="input-label">Contraseña</label>
        <input
          type="password"
          id="contraIngre"
          placeholder="Contraseña"
          name="contraseña"
          class="input"
          v-model="usuario.clave"
        >
        <div class="d-flex justify-content-center">
          <button
            type="button"
            @click="iniciarSesion()"
            class="btn-secundario mt-4">Iniciar
          </button>
        </div>
      </form>
    </div>
    <div v-else class="partedelanteraRegistrarse">
      <form class="logs">
        <h2 class="h2-tittle">Registrarse</h2>
        <label for="nombreRegis" class="input-label">Nombre</label>
        <input
          type="text"
          id="nombreRegis"
          placeholder="Nombre"
          name="nombre"
          class="input"
          v-model="registro.nombre"
        >
        <label for="apellidoRegis" class="input-label">Apellido</label>
        <input
          type="text"
          id="apellidoRegis"
          placeholder="Apellido"
          name="apellido"
          class="input"
          v-model="registro.apellido"
        >
        <label for="correoRegis" class="input-label">Correo</label>
        <input
          type="email"
          id="correoRegis"
          placeholder="Correo electrónico"
          name="correo"
          required
          class="input"
          v-model="registro.correo"
        >
        <label for="userRegis" class="input-label">Usuario</label>
        <input
          type="text"
          id="userRegis"
          placeholder="Usuario"
          name="usuario"
          class="input"
          v-model="registro.usuario"
        >
        <label for="contraRegis" class="input-label">Contraseña</label>
        <input
          type="password"
          id="contraRegis"
          placeholder="Contraseña"
          name="contraseña"
          class="input"
          v-model="registro.clave"
        >
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn-secundario mt-4"
            @click="registrarse()"
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </div>
    <Alertamensaje
      @msj="mensaje = ''"
      :mensaje="mensaje"
    />
  </div>
</template>

<script>
import Alertamensaje from './Alertamensaje.vue';
import { capitalizar } from "../controllers/funcionesGenerales";
export default {
  name: 'Login',
  components: {
    Alertamensaje,
    capitalizar,
  },
  props: {
    Nuevo:{
      type: Boolean,
      default: false
    },
  },
  data(){
    return {
      usuario: {
        usuario: '',
        clave: ''
      },
      registro: {
        nombre: '',
        apellido: '',
        usuario: '',
        correo: '',
        clave: ''
      },
      mensaje: '',
      token: '',
      nuevo: false
    }
  },
  created(){
    this.nuevo = this.Nuevo
  },
  methods: {
    iniciarSesion() {
      if (!this.usuario.usuario ||!this.usuario.clave) {
        return this.mensaje = 'Recuerda rellenar todos los campos'
      };
      fetch('/Login/Iniciar_sesion', {
        method: 'POST',
        body: JSON.stringify(this.usuario),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
          this.mensaje = data.status
          this.token = data.token
          this.$emit('token', this.token)
        })
    },
    registrarse() {
      const emailVa = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      if (!this.registro.nombre || !this.registro.apellido || !this.registro.correo ||!this.registro.usuario ||!this.registro.clave) {
        return this.mensaje = 'Recuerda rellenar todos los campos'
      }
      if (!emailVa.test(this.registro.correo)) {
        return this.mensaje = 'Recuerda ingresar un correo electrónico válido'
      }
      this.registro.nombre = capitalizar(this.registro.nombre);
      this.registro.apellido = capitalizar(this.registro.apellido);
        fetch('/Login/Registrarse', {
          method: 'POST',
          body: JSON.stringify(this.registro),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          this.mensaje = data.status
          this.token = data.token
          this.$emit('token', this.token)
        })
    }
  }
}
</script>
