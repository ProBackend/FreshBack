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
    <div class="container">
      <div class="card" v-for="p in productos" :key="p.nombre">
        <img :src="p.path" class="card-img-top">
        <div class="card-body text-center">
          <h5 class="card-tittle">
            {{p.nombre}}
          </h5>
        </div>
        <ul class="list-group list-group-flush text-center">
          <li class="list-group-item">{{p.ingredientes}}</li>
          <li class="list-group-item">{{p.precio}}</li>
        </ul>
        <div class="card-body">
          <button type="button" @click=" agregar(p._id),mostrard = !mostrard; proRee = !proRee" class="btn-secundario">Agregar</button>
          <button @click="eliminar(p._id)" class="btn-secundario">Delete</button>
          <a href="/<%=p %>/editar/<%= mostrart.id%>" class="btn btn-primary">Editar</a>
        </div>
      </div>
    </div>
    <ModalProducto
      :ProductoRe= proRe
      :ProductoDia = proDia
      :MenuDia = menuDia
      :mostrarmodal="mostrar"
      @cerrar="buscar(); mostrar= false; proRe = false; proDia = false; menuDia = false"
    />
<ModalD
      :ProductoRee= proRee
      :mostrarmodald="mostrard"
      @cerrar="buscar(); mostrard= false; proRee = false; "
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
import ModalD from'./ModalD.vue'

export default {
  name: 'Productos',
  components: {
    ModalProducto,
    ModalD,
    Alertamensaje
  },
  data() {
    return {
      productos: [],
      mostrar: false,
      mostrard:false,
      proRee: false,
      proRe: false,
      proDia: false,
      menuDia: false,
      mensaje: ''
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
    },
    agregar(id){
      const agregar = {
        id: id
      }
      fetch('/Pedido/ProductosRegu', {
        method: 'POST',
        body: JSON.stringify(agregar),
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