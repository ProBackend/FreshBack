<template>
  <section>
    <div class="modal fade show" v-if="mostrarmodal">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="card-header">
            <h2 class="h2-tittle">{{MenuDia ? 'Agregar menú del día' : (ProductoDia ? 'Agregar producto del día': 'Agregar producto')}}</h2>
          </div>
          <div class="card-body">
            <form enctype="multipart/form-data">
              <div>
                <label for="inputNombre" class="input-label">Nombre</label>
                <input v-model="nombre" type="text" class="input" id="inputNombre" placeholder="Nombre">
              </div>
              <div>
                <label for="inputImagen" class="input-label">Imagen de referencia</label>
                <input v-model="path" type="text" class="input" id="inputImagen" placeholder="Link de la imagen">
              </div>
              <div>
                <label for="inputIngredientes" class="input-label">Ingredientes</label>
                <textarea v-model="ingredientes" type="text" class="input" id="inputIngredientes" placeholder="Ingredientes"></textarea>
              </div>
              <div>
                <label for="inputPrecio" class="input-label">Precio</label>
                <input v-model="precio" type="number" class="input" id="inputPrecio" placeholder="Precio">
              </div>
              <div v-if="ProductoDia">
                <label for="inputPrecio" class="input-label">Oferta</label>
                <input v-model="oferta" type="number" class="input" id="inputPrecio" placeholder="Oferta">
              </div>
            </form>
          </div>
          <div class="d-flex justify-content-end mx-2 my-2">
            <div>
              <button class="btn-primario-modal" @click="esEditar ? editar() : guardar(); $emit('cerrar', false)">Guardar</button>
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
    mostrarmodal:{
      type: Boolean,
      default: false
    },
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
      productoRe: {},
      productoDia: {},
      menuDia: {},
      mensaje: ''
    }
  },
  created() {
    this.ordenar()
    console.log('aaa')
  },
  methods: {
    ordenar() {
      console.log('bbb')
      if (this.esEditar) {
        console.log('aaa')
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
        this.mensaje = 'Recuerde rellenar todos los campos'
        return
      }

      this.nombre = capitalizar(this.nombre)
      this.ingredientes = capitalizar(this.ingredientes)

      if (this.ProductoRe) {
        this.productoRe = {
          nombre: this.nombre,
          ingredientes: this.ingredientes,
          precio: this.precio,
          path: this.path
        }
        fetch('/ProductosRegu/guardar', {
          method: 'POST',
          body: JSON.stringify(this.productoRe),
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

        this.productoDia = {
          nombre: this.nombre,
          ingredientes: this.ingredientes,
          precio_r: this.precio,
          oferta: this.oferta,
          path: this.path
        }
        fetch('/ProductosDia/guardar', {
          method: 'POST',
          body: JSON.stringify(this.productoDia),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => this.mensaje = data)
      }
      if (this.MenuDia) {
        this.menuDia = {
          nombre: this.nombre,
          ingredientes: this.ingredientes,
          precio: this.precio,
          path: this.path
        }
        fetch('/MenuDia/guardar', {
          method: 'POST',
          body: JSON.stringify(this.menuDia),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => this.mensaje = data)
      }
      this.productoRe = {}
      this.productoDia = {}
      this.menuDia = {}
    },
    editar() {
      if (!this.nombre || !this.ingredientes || !this.precio || !this.path) {
        this.mensaje = 'Recuerde rellenar todos los campos'
        return
      }

      this.nombre = capitalizar(this.nombre)
      this.ingredientes = capitalizar(this.ingredientes)

      if (this.ProductoRe) {
        this.productoRe = {
          nombre: this.nombre,
          ingredientes: this.ingredientes,
          precio: this.precio,
          path: this.path
        }
        fetch('/ProductosRegu/guardar', {
          method: 'POST',
          body: JSON.stringify(this.productoRe),
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
        this.productoDia = {
          nombre: this.nombre,
          ingredientes: this.ingredientes,
          precio_r: this.precio,
          oferta: this.oferta,
          path: this.path
        }
        fetch('/ProductosDia/guardar', {
          method: 'POST',
          body: JSON.stringify(this.productoDia),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => this.mensaje = data)
      }
      if (this.MenuDia) {
        this.menuDia = {
          nombre: this.nombre,
          ingredientes: this.ingredientes,
          precio: this.precio,
          path: this.path
        }
        fetch('/MenuDia/guardar', {
          method: 'POST',
          body: JSON.stringify(this.menuDia),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => this.mensaje = data)
      }
      this.productoRe = {}
      this.productoDia = {}
      this.menuDia = {}
    }
  }
}
</script>
