<template>
<section>
  <div class="d-flex justify-content-center">
    <div>
      <button
        type="button"
        :class="['btn', token ? 'btn-outline-success' : 'btn btn-outline-secondary']"
        @click="pruebas()"
      >
        token
      </button>
      <button
        type="button"
        :class="['btn', token ? 'btn-outline-warning' : 'btn btn-outline-danger']"
        @click="guardar()"
      >
        Agregar contacto
      </button>
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
import info from "../controllers/informacion";
export default {
  name: 'Nosotros',
  components: {
    info
  },
  data() {
    return {
      informacion: new info,
      token: true,
      contactos: [
        /*{
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
        }*/
      ]
    }
  },
  methods: {
    async guardar(){
      await this.informacion.guardad()
    },
    pruebas(){
      this.token = this.informacion.pruebassa(this.token)
      console.log(this.token)
    }
  }
}
</script>