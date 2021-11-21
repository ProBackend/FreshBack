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
        @click="mostrar = !mostrar, Esgerente = true"
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
        </div>
      </div>
    </div>
    <ModalGC
      :esContacto="Escontacto"
      :esGerente="Esgerente"
      :mostrarmodal="mostrar"
      @cerrar="mostrar= false, Escontacto=false, Esgerente=false"
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
      Esgerente: false,
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
    }
  }
}
</script>