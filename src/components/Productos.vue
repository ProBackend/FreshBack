<template>
  <section>
    <Navbar/>
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
        <img :src="p.path" class="card-img-top" :alt="p.filename">
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
          <a href="/<%=p %>/delete/<%= mostrart.id%>" class="btn btn-danger btn-block">Delete</a>
          <a href="/<%=p %>/editar/<%= mostrart.id%>" class="btn btn-primary">Editar</a>
        </div>
      </div>
    </div>
    <ModalProducto
      :ProductoRe= proRe
      :ProductoDia = proDia
      :MenuDia = menuDia
      :mostrarmodal="mostrar"
      @cerrar="mostrar= false; proRe = false; proDia = false; menuDia = false"
    />
  </section>
</template>

<script>
import ModalProducto from './ModalPPDM.vue'
import Navbar from './navbar.vue'

export default {
  name: 'Productos',
  components: {
    ModalProducto,
    Navbar
  },
  data() {
    return {
      productos: [],
      mostrar: false,
      proRe: false,
      proDia: false,
      menuDia: false
    }
  },
  created(){
    this.buscar()
  },
  methods: {
    buscar(){
      fetch('/Productos/consulta')
        .then(res => res.json())
        .then(data => this.productos= data)
    }
  }
}
</script>