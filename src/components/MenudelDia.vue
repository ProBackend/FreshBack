<template>
  <section>
    <div v-if="1==2">
      <div class="card bg-dark text-white">
        <div class="col-md-2">
        <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img">
        </div>
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
    <div class="contenedor"  v-for="pro in proDia" :key="pro.nombre">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="pro.path" class="card-img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{pro.nombre}}</h5>
              <p class="card-text">{{pro.ingredientes}}</p>
              <p class="card-text"><small class="text-muted">{{pro.precio_r}}</small></p>
              <p class="card-text"><small class="text-muted">{{pro.oferta}}</small></p>
            </div>
            <div class="card-body">
              <button @click="eliminar(pro._id, 1)" class="btn btn-danger btn-block">Delete</button>
              <button @click="mostrar = !mostrar, esEditar = pro, ProDia = true" class="btn btn-primary">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contenedor"  v-for="menu in menuDia" :key="menu.nombre">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="menu.path" class="card-img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{menu.nombre}}</h5>
              <p class="card-text">{{menu.ingredientes}}</p>
              <p class="card-text"><small class="text-muted">{{menu.precio}}</small></p>
            </div>
            <div class="card-body">
              <button @click="eliminar(menu._id)" class="btn btn-danger btn-block">Delete</button>
              <a href="/<%=p %>/editar/<%= mostrart.id%>" class="btn btn-primary">Editar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalProducto
      :ProductoDia = ProDia
      :MenuDia = MenuDia
      :mostrarmodal= mostrar
      :esEditar = esEditar
      @cerrar="buscar(); mostrar= false; ProDia = false; MenuDia = false; esEditar = {}"
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
  name: 'MenudelDia',
  components: {
    ModalProducto,
    Alertamensaje
  },
  data() {
    return {
      proDia: [],
      menuDia: [],
      esEditar: {},
      mensaje: '',
      mostrar: false,
      ProDia: false,
      MenuDia: false
    }
  },
  created(){
    this.buscar()
  },
  methods: {
    buscar(){
      fetch('/MenuDia/consulta')
        .then(res => res.json())
        .then(data => this.menuDia= data)

      fetch('/ProductoDia/consulta')
        .then(res => res.json())
        .then(data => this.proDia= data)
    },
    eliminar(id, acc){
      const eliminar = {
        id: id
      }

      if (acc) {
        fetch('/ProductosDia/eliminar', {
          method: 'DELETE',
          body: JSON.stringify(eliminar),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => this.mensaje = data)
      } else {
        fetch('/MenuDia/eliminar', {
          method: 'DELETE',
          body: JSON.stringify(eliminar),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => this.mensaje = data)
      }

      this.buscar()
    }
  }
}
</script>
