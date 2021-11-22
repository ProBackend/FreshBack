<template>
  <section>
    <div class="d-flex justify-content-center">
      <button
        type="button"
        class="btn-secundario mx-4 mb-4"
        @click="mostrar = !mostrar, Escontacto = true"
      >
        Agregar contacto
      </button>
      <button
        type="button"
        class="btn-secundario mx-4 mb-4"
        @click="mostrar = !mostrar"
      >
        Agregar gerente
      </button>
    </div>
    <div class="d-flex justify-content-around">
      <div class="card mx-3" style="width: 18rem;" v-for="contacto in contactos" :key="contacto.id">
        <div class="card-body">
          <h5 class="card-title">{{ contacto.nombre }} {{ contacto.apellido }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ contacto.direccion }}</h6>
          <p class="card-text">{{ contacto.descripcion }}</p>
          <a href="#" class="card-link">{{ contacto.telefono }}</a>
          <button @click="eliminar(contacto._id)" class="btn btn-danger btn-block">Delete</button>
        </div>
      </div>
    </div>
    <ModalGC
      :esContacto="Escontacto"
      :mostrarmodal="mostrar"
      @cerrar="buscar(); mostrar= false, Escontacto=false"
    />
  </section>
</template>

<script>
import ModalGC from "./ModalGC.vue";
export default {
  name: 'Nosotros',
  components: {
    ModalGC,
  },
  data() {
    return {
      Escontacto: false,
      mostrar: false,
      contactos: [],
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