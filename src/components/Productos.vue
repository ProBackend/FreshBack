<template>
  <body>
    <div class="container">
      <div class="dropdown">
        <button class="dropbtn">Agregar</button>
        <div class="dropdown-content">
          <a href="#">Productos Regulares</a>
          <a href="#">Productos del día</a>
          <a href="#">Menúa del día</a>
        </div>
      </div>
      <div class="row" v-for="p in productos" :key="p.nombre">
        <div class="card-columns">
          {{p}}
            <div class="card animated fadeInDown">
              <img src="<%= mostrart.path %>" class="card-img-top" alt="<%= mostrart.filename %>">
              <div class="card-body">
                <h5 class="card-title">
                  %= mostrart.nombre %>
                </h5>
                <p class="card-text">
                  %= mostrart.ingredientes %>
                </p>
                <p class="card-text">
                  %= mostrart.precio %>
                </p>
                <a href="/<%=p %>/delete/<%= mostrart.id%>" class="btn btn-danger btn-block">Delete</a>
                <a href="/<%=p %>/editar/<%= mostrart.id%>" class="btn btn-primary">Editar</a>
              </div>
            </div>
          % }) %>
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