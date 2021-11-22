<template>
  <section>
    <div class="mb-4">
      <div class="card imagenAncha">
        <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img imagenAncha">
        <div class="card-img-overlay">
          <h5 class="card-title h5-tittle">Menú del día</h5>
          <p class="card-text p-texto-oscuro">Descripción</p>
          <p class="mt-5"><small class="p-texto-oscuro">Precio idk</small></p>
        </div>
      </div>
    </div>
    <div class="card col-2 m-3" v-for="pro in proDia" :key="pro.nombre">              
      <div class="mt-2 d-flex justify-content-center">
        <img :src="pro.path" class="card-img">
      </div>
      <div class="mt-2">
        <h5 class="card-title h5-tittle">{{pro.nombre}}</h5>
        <p class="p-texto-oscuro">{{pro.oferta}}</p>
        <p><small class="text-muted">{{pro.nombre}}</small></p>
      </div>
        <button type="submit" @click="eliminar(pro._id, 1)" class="btn-secundario px-2">Eliminar</button>
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
              <button type="submit" @click="eliminar(menu._id)" class="btn-secundario px-2">Eliminar</button>
              <button @click="editar = true; Editar = menu; MenuDia = true" class="btn-terciario px-2">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalProducto
      :MenuDia = MenuDia
      :esEditar= Editar
      :Actualizar= editar
      @cerrar="editar = false; Editar = {}; MenuDia = false"
      @actualizar="buscar()"
    />
    <Alertamensaje
      @limpio="mensaje"
      :mensaje="mensaje"
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
      mensaje: '',
      MenuDia: false,
      Editar: {},
      editar: false
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
