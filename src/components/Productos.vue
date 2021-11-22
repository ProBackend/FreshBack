<template>
  <section>
    <div class="d-flex justify-content-around">
      <button
        type="button"
        class="btn-secundario"
        @click="proRe = !proRe"
      >
        Agregar producto regular
      </button>
      <button
        type="button"
        class="btn-secundario"
        @click="proDia = !proDia"
      >
        Agregar producto del día
      </button>
      <button
        type="button"
        class="btn-secundario"
        @click="menuDia = !menuDia"
      >
        Agregar menú del día
      </button>
    </div>
    <div class="row d-flex justify-content-around">
      <div class="card col-2 m-3" v-for="p in productos" :key="p.ingredientes">
        <div class="mt-2 d-flex justify-content-center">
          <img :src="p.path" class="card-img"/>
        </div>
        <div class="mt-2">
          <h5 class="card-title h5-tittle">{{p.nombre}}</h5>
          <p class="p-texto-oscuro">{{p.ingredientes}}</p>
          <p><small class="text-muted">{{p.precio}}</small></p>
          <button @click="editar = true; Editar = p; proRe = true" class="btn-terciario px-2">Editar</button>
          <button type="submit" @click="eliminar(p._id)" class="btn-secundario px-2">Eliminar</button>
        </div>
      </div>
    </div>
    <ModalProducto
      :ProductoRe= proRe
      :ProductoDia = proDia
      :MenuDia = menuDia
      :esEditar= Editar
      :Actualizar= editar
      @cerrar="buscar(); editar = false; Editar = {}; limpiar(); proRe = false; proDia = false; menuDia = false"
    />
    <Alertamensaje
      @limpio="this.mensaje"
      :mensaje="this.mensaje"
    />
  </section>
</template>

<script>
import Alertamensaje from './Alertamensaje.vue';
import ModalProducto from './ModalPPDM.vue'

export default {
  name: 'Productos',
  components: {
    ModalProducto,
    Alertamensaje
  },
  data() {
    return {
      productos: [],
      proRe: false,
      proDia: false,
      menuDia: false,
      mensaje: '',
      Editar: {},
      editar: false
    }
  },
  created(){
    this.buscar()
  },
  methods: {
    buscar(){
      fetch('/ProductoRegu/consulta')
        .then(res => res.json())
        .then(data => this.productos = data)
    },
    eliminar(id){
      const eliminar = {
        id: id
      }
      fetch('/ProductosRegu/eliminar', {
        method: 'DELETE',
        body: JSON.stringify(eliminar),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => this.mensaje = data)

      this.buscar()
    },
    limpiar(){
      this.nombre= ''
      this.ingredientes= ''
      this.precio= 0
      this.file=[]
      this.oferta= 0
      this.path= ''
    }
  }
}
</script>