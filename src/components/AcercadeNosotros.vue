<template>
<section>
  <div class="d-flex justify-content-center">
    <div>
      <button
        type="button"
        :class="['btn', token ? 'btn-outline-success' : 'btn btn-outline-secondary']"
      >
        token
      </button>
      <button
        type="button"
        :class="['btn', token ? 'btn-outline-warning' : 'btn btn-outline-danger']"
      >
        Agregar contacto
      </button>
    </div>
    <div class="card cards mx-3" style="width: 18rem;" v-for="contacto in contactos" :key="contacto.nombre">
      <div class="card-body">
        <h5 class="card-title">{{ contacto.nombre }} {{ contacto.apellido }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ contacto.direccion }}</h6>
        <p class="card-text">{{ contacto.descripcion }}</p>
        <a href="#" class="card-link">{{ contacto.telefono }}</a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Nosotros',
  data() {
    return {
      token: true,
      contactos: [],
    }
  },
  created(){
    this.buscar()
  },
  methods: {
    buscar(){
      fetch('/AcercadeNosotros/consulta')
        .then(res => res.json())
        .then(data => this.contactos= data)
    }
  }
}
</script>