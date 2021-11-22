<template>
  <section v-if="mostrarmodal" >
    <div class="modal fade show">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h2 v-if="esContacto" class="h2-tittle">Agregar un contacto</h2>
            <h2 v-else class="h2-tittle">Agregar un Gerente</h2>
          </div>
          <div class="modal-body" v-if="esContacto">
            <form class="row">
              <div class="col-4">
                <label for="nombreCont" class="input-label">Nombre del contacto</label>
                <input
                  type="text"
                  id="nombreCont"
                  placeholder="Nombre"
                  name="nombre"
                  class="input"
                  v-model="contacto.nombre"
                >
              </div>
              <div class="col-4">
                <label for="apellidoCont" class="input-label">Apellido del contacto</label>
                <input
                  type="text"
                  id="apellidoCont"
                  placeholder="Apellido"
                  name="apellido"
                  class="input"
                  v-model="contacto.apellido"
                >
              </div>
              <div class="col-4">
                <label for="telefonoCont" class="input-label">Teléfono del contacto</label>
                <input
                  type="text"
                  id="telefonoCont"
                  placeholder="Teléfono"
                  name="telefono"
                  class="input"
                  v-model="contacto.telefono"
                >
              </div>
              <div class="col-6">
                <label for="descripcionCont" class="input-label">Descripción del contacto</label>
                <input
                  type="text"
                  id="descripcionCont"
                  placeholder="Descripción"
                  name="descripcion"
                  class="input"
                  v-model="contacto.descripcion"
                >
              </div>
              <div class="col-6">
                <label for="direccionCont" class="input-label">Dirección del contacto</label>
                <input
                  type="text"
                  id="direccionCont"
                  placeholder="Dirección"
                  name="direccion"
                  class="input"
                  v-model="contacto.direccion"
                >
              </div>
            </form>
          </div>
          <div class="modal-body" v-else>
            <label for="nombre">Nombre del gerente</label>
            <input type="text" id="nombre">
          </div>
          <div class="d-flex justify-content-end mx-2 my-2">
            <div>
              <button class="btn-primario-modal" @click="$emit('cerrar', false), guardar()">Guardar</button>
              <button class="btn-secundario-modal" @click="$emit('cerrar', false)">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Alertamensaje
      :mensaje="this.mensaje"
    />
  </section>
</template>

<script>
import Alertamensaje from "./Alertamensaje.vue";
import { capitalizar, validarTel } from "../controllers/funcionesGenerales";

export default {
  name: 'ModalGC',
  components: {
    Alertamensaje,
    capitalizar,
    validarTel
  },
  props: {
    mostrarmodal:{
      type: Boolean,
      default: false
    },
    esContacto:{
      type: Boolean,
    }
  },
  data() {
    return {
      contacto: {
        nombre:'',
        apellido:'',
        direccion:'',
        descripcion:'',
        telefono:''
      },
      mensaje: ''
    }
  },
  methods: {
    guardar() {
      if (!this.contacto.nombre || !this.contacto.apellido || !this.contacto.direccion || !this.contacto.descripcion) {
        this.mensaje = 'Recuerde rellenar todos los campos'
        return
      }

      if (!this.contacto.telefono || !validarTel(this.contacto.telefono)) {
        this.mensaje = 'Ingrese un número de teléfono válido en el formato: 58xxxxxxxxxx'
        return
      }

      this.contacto.nombre = capitalizar(this.contacto.nombre)
      this.contacto.apellido = capitalizar(this.contacto.apellido)
      this.contacto.descripcion = capitalizar(this.contacto.descripcion)

      fetch('/nosotros/consulta', {
        method: 'POST',
        body: JSON.stringify(this.contacto),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => this.mensaje = data)

      this.reinicioDeDatos()
    },
    reinicioDeDatos() {
      this.contacto = {
        nombre:'',
        apellido:'',
        direccion:'',
        descripcion:'',
        telefono:''
      }
    }
  }
}
</script>
