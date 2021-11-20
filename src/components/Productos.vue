<template>
  <body>
    <div class="contenedor">
      <div>
        <button @click="modal = !modal"> Agregar producto </button>
        <div class="card" v-if="modal" style="width: 40rem;">
          <div class="card-header">
            Agregar Producto
          </div>
          <div class="card-body">
            <input type="file" name="image" class="custom-file-input" id="inputGroupFile02">
            <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
              Elige una imagen
            </label>
           <form>
              <div class="form-group row">
                <label for="inputNombre" class="col-sm-2 col-form-label">Nombre</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputNombre" placeholder="Nombre">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputIngredientes" class="col-sm-2 col-form-label">Ingredientes</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputIngredientes" placeholder="Ingredientes">
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPrecio" class="col-sm-2 col-form-label">Precio</label>
                <div class="col-sm-10">
                  <input type="number" class="form-control" id="inputPrecio" placeholder="Precio">
                </div>
              </div>
            </form>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
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
  name: 'Nosotros',
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