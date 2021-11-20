<template>
  <body>
    <div class="container">
      <div class="dropdown">
        <button class="dropbtn">Agregar</button>
        <div class="dropdown-content">
          <a :href="modalPro">Productos Regulares</a>
          <a href="#">Productos del día</a>
          <a href="#">Menúa del día</a>
        </div>
      </div>
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

export default {
  name: 'Productos',
  data() {
    return {
      // token: true,
      productos: [],
      modal: false
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