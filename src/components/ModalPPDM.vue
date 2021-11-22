<template>
  <section>
    <div class="modal fade show" v-if="ProductoRe || ProductoDia || MenuDia">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="card-header">
            <h2 class="h2-tittle">{{MenuDia ? 'Agregar menú del día' : (ProductoDia ? 'Agregar producto del día': 'Agregar producto')}}</h2>
          </div>
          <div class="card-body">
            <form enctype="multipart/form-data">
              <div>
                <label for="inputNombre" class="input-label">Nombre</label>
                <input v-if="!Actualizar" v-model="nombre" type="text" class="input" id="inputNombre" placeholder="Nombre">
                <input v-else v-model="esEditar.nombre" type="text" class="input" id="inputNombre" placeholder="Nombre">
              </div>
              <div>
                <label for="inputImagen" class="input-label">Imagen de referencia</label>
                <input v-if="!Actualizar" v-model="path" type="text" class="input" id="inputImagen" placeholder="Link de la imagen">
                <input v-else v-model="esEditar.path" type="text" class="input" id="inputImagen" placeholder="Link de la imagen">
              </div>
              <div>
                <label for="inputIngredientes" class="input-label">Ingredientes</label>
                <textarea v-if="!Actualizar" v-model="ingredientes" type="text" class="input" id="inputIngredientes" placeholder="Ingredientes"></textarea>
                <textarea v-else v-model="esEditar.ingredientes" type="text" class="input" id="inputIngredientes" placeholder="Ingredientes"></textarea>
              </div>
              <div>
                <label for="inputPrecio" class="input-label">Precio</label>
                <input v-if="!Actualizar" v-model="precio" type="number" class="input" id="inputPrecio" placeholder="Precio">
                <input v-else v-model="esEditar.precio" type="number" class="input" id="inputPrecio" placeholder="Precio">
              </div>
              <div v-if="ProductoDia">
                <label for="inputPrecio" class="input-label">Oferta</label>
                <input v-if="!Actualizar" v-model="oferta" type="number" class="input" id="inputPrecio" placeholder="Oferta">
                <input v-else v-model="esEditar.oferta" type="number" class="input" id="inputPrecio" placeholder="Oferta">
              </div>
            </form>
          </div>
          <div class="d-flex justify-content-end mx-2 my-2">
            <div>
              <button type="submit" class="btn-primario-modal" @click="Actualizar ? editar() : guardar(); $emit('cerrar', false)">Guardar</button>
              <button class="btn-secundario-modal" @click="$emit('cerrar', false)">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Alertamensaje
      @limpio="this.mensaje"
      :mensaje="this.mensaje"
    />
  </section>
</template>

<script>
import Alertamensaje from './Alertamensaje.vue';
import { capitalizar } from "../controllers/funcionesGenerales";

export default {
  name: 'modalPro',
  components: {
    Alertamensaje,
    capitalizar
  },
  props: {
    ProductoRe:{
      type: Boolean,
    },
    ProductoDia:{
      type: Boolean,
    },
    MenuDia:{
      type: Boolean,
    },
    esEditar:{
      type: Object,
      default: {}
    },
    Actualizar:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      nombre: '',
      ingredientes: '',
      precio: 0,
      file:[],
      oferta: 0,
      path: '',
      PPDM: {},
      UpdatePPDM: {},
      productoRe: false,
      productoDia: false,
      menuDia: false,
      mensaje: ''
    }
  },
  created() {
  },
  methods: {
    ordenar() {
      if (this.esEditar) {
        if (this.productoRe) {
          this.nombre = this.esEditar.nombre
          this.ingredientes = this.esEditar.ingredientes
          this.precio = this.esEditar.precio
          this.path = this.esEditar.path
        }
        if (this.productoDia) {
          this.nombre = this.esEditar.nombre
          this.ingredientes = this.esEditar.ingredientes
          this.precio = this.esEditar.precio_r
          this.path = this.esEditar.path
          this.oferta = this.esEditar.oferta
        }
        if (this.menuDia) {
          this.nombre = this.esEditar.nombre
          this.ingredientes = this.esEditar.ingredientes
          this.precio = this.esEditar.precio
          this.path = this.esEditar.path
        }
      }
    },
    guardar() {
      if (!this.nombre || !this.ingredientes || !this.precio || !this.path) {
        return 'Recuerde rellenar todos los campos'
      }
      this.nombre = capitalizar(this.nombre)
      this.ingredientes = capitalizar(this.ingredientes)
      this.PPDM = {
          nombre: this.nombre,
          ingredientes: this.ingredientes,
          precio: this.precio,
          path: this.path
        }
      if (this.ProductoRe) {
        fetch('/ProductosRegu/guardar', {
          method: 'POST',
          body: JSON.stringify(this.PPDM),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => this.mensaje = data)
      }
      if (this.ProductoDia) {
        if (!this.oferta) {
          this.mensaje = 'Recuerde rellenar todos los campos'
          return
        }
        fetch('/ProductosDia/guardar', {
          method: 'POST',
          body: JSON.stringify(this.PPDM),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => this.mensaje = data)
      }
      if (this.MenuDia) {
        fetch('/MenuDia/guardar', {
          method: 'POST',
          body: JSON.stringify(this.PPDM),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => this.mensaje = data)
      }
      this.PPDM = {}
      this.productoRe = false
      this.productoDia = false
      this.menuDia = false
    },
    editar() {
      if (!this.esEditar.nombre || !this.esEditar.ingredientes || !this.esEditar.precio || !this.esEditar.path) {
        return this.mensaje = 'Recuerde rellenar todos los campos'
      }
      this.esEditar.nombre = capitalizar(this.esEditar.nombre)
      this.esEditar.ingredientes = capitalizar(this.esEditar.ingredientes)
      this.UpdatePPDM = {
        nombre: this.esEditar.nombre,
        ingredientes: this.esEditar.ingredientes,
        precio: this.esEditar.precio,
        path: this.esEditar.path
      }
      if (this.ProductoRe) {
        fetch('/ProductosRegu/editar', {
          method: 'POST',
          body: JSON.stringify(this.UpdatePPDM),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => this.mensaje = data)
      }
      if (this.ProductoDia) {
        if (!this.esEditar.oferta) {
          return this.mensaje = 'Recuerde rellenar todos los campos'
        }
        fetch('/ProductosDia/editar', {
          method: 'POST',
          body: JSON.stringify(this.UpdatePPDM),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => this.mensaje = data)
      }
      if (this.MenuDia) {
        fetch('/MenuDia/editar', {
          method: 'POST',
          body: JSON.stringify(this.UpdatePPDM),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => this.mensaje = data)
      }
      this.UpdatePPDM = {}
      this.productoRe = false
      this.productoDia = false
      this.menuDia = false
    },
  }
}
</script>
