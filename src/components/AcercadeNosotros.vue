<template>
<section>
  <div class="d-flex justify-content-center">
    <div>
      <button type="button" :class="['btn', token ? 'btn-outline-success' : 'btn btn-outline-secondary']">Agregar contacto</button>
    </div>
    <div class="card cards mx-3" style="width: 18rem;" v-for="contacto in contactos">
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
      token: false,
      contactos: [
        {
          nombre: 'pedro',
          apellido: 'salinas',
          direccion: 'av los callaos',
          descripcion: 'Chef',
          telefono: '04123366548'
        },
        {
          nombre: 'MANOlOOooOo',
          apellido: 'Sanchez',
          direccion: 'av Chayanne',
          descripcion: 'gerente',
          telefono: '04123366548'
        },
        {
          nombre: 'Juan',
          apellido: 'Escobar',
          direccion: 'Residencia ausilio',
          descripcion: '',
          telefono: '04123366548'
        }
      ]
    }
  }
}
</script>