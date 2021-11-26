<template>
  <section>
    <div class="row d-flex justify-content-around">
      <div
        class="card col-2 mx-3"
        v-for="contacto in contactos"
        :key="contacto.id"
      >
        <div class="card-body">
          <h5 class="card-title">
            {{ contacto.nombre }} {{ contacto.apellido }}
          </h5>
          <h6 class="card-subtitle mb-2 text-muted">
            {{ contacto.direccion }}
          </h6>
          <p class="card-text">{{ contacto.descripcion }}</p>
          <a href="#" class="p-tel">{{ contacto.telefono }}</a>
          <button
            v-if="permiso === 'Gerente'"
            @click="eliminar(contacto._id)"
            class="btn-terciario w-100 m px-1"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <Alertamensaje @msj="mensaje = ''" :mensaje="mensaje" />
  </section>
</template>

<script>
import Alertamensaje from "./Alertamensaje.vue";

export default {
  name: "Nosotros",
  components: {
    Alertamensaje,
  },
  props: {
    permiso: {
      type: String,
    },
    actualizarVista: {
      type: Boolean,
    },
  },
  data() {
    return {
      contactos: [],
      mensaje: "",
    };
  },
  created() {
    this.buscar();
  },
  watch: {
    mensaje: function () {
      setTimeout(() => {
        this.mensaje = "";
      }, 3000);
    },
    actualizarVista: function () {
      this.buscar();
    },
  },
  methods: {
    buscar() {
      fetch("/nosotros/consulta")
        .then((res) => res.json())
        .then((data) => (this.contactos = data));
    },
    eliminar(id) {
      const eliminar = {
        id: id,
      };
      fetch("/nosotros/eliminar", {
        method: "DELETE",
        body: JSON.stringify(eliminar),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => (this.mensaje = data));

      this.buscar();
    },
  },
};
</script>