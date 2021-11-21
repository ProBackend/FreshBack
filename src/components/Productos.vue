<template>
  <section>
    <div class="d-flex justify-content-around">
      <button
        type="button"
        class="btn-secundario"
        @click="mostrar = !mostrar; proRe = !proRe"
      >
        Agregar producto regular
      </button>
      <button
        type="button"
        class="btn-secundario"
        @click="mostrar = !mostrar; proDia = !proDia"
      >
        Agregar producto del día
      </button>
      <button
        type="button"
        class="btn-secundario"
        @click="mostrar = !mostrar; menuDia = !menuDia"
      >
        Agregar menú del día
      </button>
    </div>
    <div class="row d-flex justify-content-around">
      <div class="card col-2 m-3" v-for="p in productos" :key="p.nombre">
        <div class="mt-2 d-flex justify-content-center">
          <img :src="p.path" class="card-img"/>
        </div>
          <div class="mt-2">
            <h5 class="card-title h5-tittle">{{p.nombre}}</h5>
            <p class="p-texto-oscuro">{{p.ingredientes}}</p>
            <p><small class="text-muted">{{p.precio}}</small></p>
          </div>
        <div>
          <button @click="eliminar(p._id)" class="btn btn-danger btn-block">Delete</button>
          <button @click="mostrar = true; esEditar = p; proRe = true" class="btn btn-primary">Editar</button>
        </div>
      </div>
    </div>
    <ModalProducto
      :ProductoRe= proRe
      :ProductoDia = proDia
      :MenuDia = menuDia
      :mostrarmodal= mostrar
      :esEditar= esEditar
      @cerrar="buscar(); mostrar= false; proRe = false; proDia = false; menuDia = false; esEditar = {}"
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
      mostrar: false,
      proRe: false,
      proDia: false,
      menuDia: false,
      mensaje: '',
      esEditar: {}
    }
  },
  created(){
    this.buscar()
  },
  methods: {
    buscar(){
      fetch('/ProductoRegu/consulta')
        .then(res => res.json())
        .then(data => this.productos= data)
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
    }
  }
}
</script>