<template>
  <section>
    <div class="row d-flex justify-content-around">
      <div
        class="card col m-3 justify-content-between"
        v-for="p in productos"
        :key="p.ingredientes"
      >
        <div>
          <div class="mt-2 d-flex justify-content-center">
            <img :src="p.path" class="card-img" />
          </div>
          <div class="mt-2">
            <h5 class="card-title h5-tittle">{{ p.nombre }}</h5>
            <p class="p-texto-oscuro">{{ p.ingredientes }}</p>
            <p>
              <small class="text-muted">Precio {{ p.precio }}</small>
            </p>
          </div>
        </div>
        <div
          v-if="permiso === 'Gerente'"
          class="d-flex justify-content-between mb-2"
        >
          <button
            @click="
              editar = true;
              Editar = p;
              proRe = true;
            "
            class="btn-secundario px-2"
          >
            Editar
          </button>
          <button
            type="submit"
            @click="eliminar(p._id)"
            class="btn-terciario px-2"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
    <ModalPPDM
      :ProductoRe="proRe"
      :esEditar="Editar"
      :Actualizar="editar"
      @cerrar="
        editar = false;
        Editar = {};
        proRe = false;
      "
      @refrescar="buscar()"
    />
    <Alertamensaje @msj="mensaje = ''" :mensaje="mensaje" />
  </section>
</template>

<script>
import Alertamensaje from "./Alertamensaje.vue";
import ModalPPDM from "./ModalPPDM.vue";

export default {
  name: "Productos",
  components: {
    ModalPPDM,
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
      productos: [],
      mostrar: false,
      mostrard: false,
      proRee: false,
      proRe: false,
      mensaje: "",
      Editar: {},
      editar: false,
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
      fetch("/ProductoRegu/consulta")
        .then((res) => res.json())
        .then((data) => (this.productos = data));
    },
    eliminar(id) {
      const eliminar = {
        id: id,
      };
      fetch("/ProductosRegu/eliminar", {
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