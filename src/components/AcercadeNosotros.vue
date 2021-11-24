<template>
  <section>
    <div class="row d-flex justify-content-around">
      <div class="card col-2 mx-3" v-for="contacto in contactos" :key="contacto.id">
        <div class="card-body">
          <h5 class="card-title">{{ contacto.nombre }} {{ contacto.apellido }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ contacto.direccion }}</h6>
          <p class="card-text">{{ contacto.descripcion }}</p>
          <a href="#" class="p-tel">{{ contacto.telefono }}</a>
          <button v-if="permiso" @click="eliminar(contacto._id)" class="btn-terciario w-100 m px-1">Delete</button>
        </div>
      </div>
    </div>
    <ModalGC
      :esContacto="Escontacto"
      @cerrar="mostrar= false, Escontacto=false"
    />
    <Alertamensaje
        :mensaje="mensaje"
      />
  </section>
</template>

<script>
import Alertamensaje from "./Alertamensaje.vue";
import ModalGC from "./ModalGC.vue";
export default {
  name: 'Nosotros',
  components: {
    ModalGC,
    Alertamensaje
  },
  props: {
    permiso: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      Escontacto: false,
      contactos: [],
      mensaje: ''
    }
  },
  created(){
    this.buscar()
  },
  methods: {
    buscar(){
      fetch('/nosotros/consulta')
        .then(res => res.json())
        .then(data => this.contactos= data)
    },
    eliminar(id){
      const eliminar = {
        id: id
      }
      fetch('/nosotros/eliminar', {
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
    }
  }
}
</script>