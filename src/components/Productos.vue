<template>
  <section>
    <div class="row d-flex justify-content-around">
      <div class="card col-1 m-3" v-for="p in productos" :key="p.ingredientes">
        <div class="mt-2 d-flex justify-content-center">
          <img :src="p.path" class="card-img"/>
        </div>
        <div class="mt-2">
          <h5 class="card-title h5-tittle">{{p.nombre}}</h5>
          <p class="p-texto-oscuro">{{p.ingredientes}}</p>
          <p><small class="text-muted">{{p.precio}}</small></p>
          <div class="contenedor-btn">
            <button @click="editar = true; Editar = p; proRe = true" class="btn-secundario w-100 my-1 px-1">Editar</button>
            <button type="submit" @click="eliminar(p._id)" class="btn-terciario w-100 my-1 px-1">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
    <ModalPPDM
      :ProductoRe= proRe
      :esEditar= Editar
      :Actualizar= editar
      @cerrar="buscar(); editar = false; Editar = {}; proRe = false"
    />
    <Alertamensaje
      :mensaje="this.mensaje"
    />
  </section>
</template>

<script>
import Alertamensaje from './Alertamensaje.vue';
import ModalPPDM from './ModalPPDM.vue'

export default {
  name: 'Productos',
  components: {
    ModalPPDM,
    Alertamensaje
  },
  data() {
    return {
      productos: [],
      proRe: false,
      mensaje: '',
      Editar: {},
      editar: false
    }
  },
  created(){
    this.buscar()
  },
  methods: {
    buscar(){
      fetch('/ProductoRegu/consulta')
        .then(res => res.json())
        .then(data => this.productos = data)
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
        setTimeout(() => {
          this.mensaje = ''
        })
    }
  }
}
</script>