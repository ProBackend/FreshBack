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
              <button @click="agregar(pro._id,1)" class="btn-primario">Agregar</button>
              <button @click="eliminar(pro._id, 1)" class="btn-secundario">Delete</button>
              <a href="/<%=p %>/editar/<%= mostrart.id%>" class="btn btn-primary">Editar</a>
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
              <button @click="agregar(menu._id)" class="btn-primario">Agregar al carrito</button>
             <button @click="eliminar(menu._id)" class="btn-secundario">Delete</button>
              <a href="/<%=p %>/editar/<%= mostrart.id%>" class="btn btn-primary">Editar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenudelDia',
  data() {
    return {
      proDia: [],
      menuDia: []
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
    },
    
agregar(id, acc){
      const agregar = {
        id: id
      }
if (acc) {
  
  fetch('/Pedido/ProductosDia', {
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
} else {
  fetch('/Pedido/MenuDia', {
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
}}
</script>
