<template>
  <body>
    <div class="agg-button">
      <button
        type="button"
        class="agg-pro"
        @click="modal = !modal; proRe = !proRe"
      >
        Agregar producto regular
      </button>
    </div>
    <div class="agg-button">
      <button
        type="button"
        class="agg-pro"
        @click="modal = !modal; proDia = !proDia"
      >
        Agregar producto del día
      </button>
    </div>
    <div class="agg-button">
      <button
        type="button"
        class="agg-pro"
        @click="modal = !modal; menuDia = !menuDia"
      >
        Agregar menú del día
      </button>
    </div>
    <ModalProducto
      :ProductoRe= proRe
      :ProductoDia = proDia
      :MenuDia = menuDia
      :mostrarmodal="modal"
      @cerrar="mostrar= false; proRe = false; proDia = false"
    />
    <div class="container">
      <div class="card" style="width: 20rem" v-for="p in productos" :key="p.nombre">
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
  </body>
</template>

<script>
import ModalProducto from './ModalProducto.vue'

export default {
  name: 'Productos',
  components: {
    ModalProducto
  },
  data() {
    return {
      // token: true,
      productos: [],
      modal: false,
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