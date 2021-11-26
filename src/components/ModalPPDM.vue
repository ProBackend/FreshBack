<template>
  <section>
    <div class="modal fade show" v-if="ProductoRe || ProductoDia || MenuDia">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="card-header">
            <h2 class="h2-tittle">
              {{
                Actualizar
                  ? MenuDia
                    ? "Editar menú del día"
                    : ProductoDia
                    ? "Editar producto del día"
                    : "Editar producto"
                  : MenuDia
                  ? "Agregar menú del día"
                  : ProductoDia
                  ? "Agregar producto del día"
                  : "Agregar producto"
              }}
            </h2>
          </div>
          <div class="card-body">
            <form enctype="multipart/form-data">
              <div>
                <label for="inputNombre" class="input-label">Nombre</label>
                <input
                  v-if="!Actualizar"
                  v-model="nombre"
                  type="text"
                  class="input"
                  id="inputNombre"
                  placeholder="Nombre"
                />
                <input
                  v-else
                  v-model="datosEditar.nombre"
                  type="text"
                  class="input"
                  id="inputNombre"
                  placeholder="Nombre"
                />
              </div>
              <div>
                <label for="inputImagen" class="input-label"
                  >Imagen de referencia</label
                >
                <input
                  v-if="!Actualizar"
                  v-model="path"
                  type="text"
                  class="input"
                  id="inputImagen"
                  placeholder="Link de la imagen"
                />
                <input
                  v-else
                  v-model="datosEditar.path"
                  type="text"
                  class="input"
                  id="inputImagen"
                  placeholder="Link de la imagen"
                />
              </div>
              <div>
                <label for="inputIngredientes" class="input-label">{{
                  MenuDia ? "Productos" : "Ingredientes"
                }}</label>
                <div v-if="MenuDia">
                  <textarea
                    v-if="!Actualizar"
                    v-model="productos"
                    type="text"
                    class="input"
                    id="inputIngredientes"
                    placeholder="Productos"
                  ></textarea>
                  <textarea
                    v-else
                    v-model="datosEditar.productos"
                    type="text"
                    class="input"
                    id="inputIngredientes"
                    placeholder="Productos"
                  ></textarea>
                </div>
                <div v-else>
                  <textarea
                    v-if="!Actualizar"
                    v-model="ingredientes"
                    type="text"
                    class="input"
                    id="inputIngredientes"
                    placeholder="Ingredientes"
                  ></textarea>
                  <textarea
                    v-else
                    v-model="datosEditar.ingredientes"
                    type="text"
                    class="input"
                    id="inputIngredientes"
                    placeholder="Ingredientes"
                  ></textarea>
                </div>
              </div>
              <div v-if="!ProductoDia">
                <label for="inputPrecio" class="input-label">Precio</label>
                <input
                  v-if="!Actualizar"
                  v-model="precio"
                  type="number"
                  class="input"
                  id="inputPrecio"
                  placeholder="Precio"
                />
                <input
                  v-else
                  v-model="datosEditar.precio"
                  type="number"
                  class="input"
                  id="inputPrecio"
                  placeholder="Precio"
                />
              </div>
              <div v-if="ProductoDia">
                <label for="inputPrecio" class="input-label">Precio</label>
                <input
                  v-if="!Actualizar"
                  v-model="precio_r"
                  type="number"
                  class="input"
                  id="inputPrecio_r"
                  placeholder="Precio regular"
                />
                <input
                  v-else
                  v-model="datosEditar.precio_r"
                  type="number"
                  class="input"
                  id="inputPrecio_r"
                  placeholder="Precio regular"
                />
              </div>
              <div v-if="ProductoDia">
                <label for="inputPrecio" class="input-label">Oferta</label>
                <input
                  v-if="!Actualizar"
                  v-model="oferta"
                  type="number"
                  class="input"
                  id="inputPrecio"
                  placeholder="Oferta"
                />
                <input
                  v-else
                  v-model="datosEditar.oferta"
                  type="number"
                  class="input"
                  id="inputPrecio"
                  placeholder="Oferta"
                />
              </div>
            </form>
          </div>
          <div class="d-flex justify-content-end mx-2 my-2">
            <div>
              <button
                type="submit"
                class="btn-primario-modal"
                @click="
                  Actualizar ? editar() : guardar();
                  $emit('cerrar');
                "
              >
                Guardar
              </button>
              <button
                class="btn-secundario-modal"
                @click="$emit('cerrar'), reinicioDeDatos()"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Alertamensaje @msj="mensaje = ''" :mensaje="mensaje" />
  </section>
</template>

<script>
import Alertamensaje from "./Alertamensaje.vue";
import { capitalizar } from "../controllers/funcionesGenerales";

export default {
  name: "ModalPPDM",
  components: {
    Alertamensaje,
    capitalizar,
  },
  props: {
    ProductoRe: {
      type: Boolean,
    },
    ProductoDia: {
      type: Boolean,
    },
    MenuDia: {
      type: Boolean,
    },
    esEditar: {
      type: Object,
      default() {
        return {};
      },
    },
    Actualizar: {
      type: Boolean,
    },
  },
  computed: {
    datosEditar() {
      if (this.esEditar) {
        return this.esEditar;
      }
    },
  },
  data() {
    return {
      nombre: "",
      ingredientes: "",
      productos: "",
      precio: 0,
      precio_r: 0,
      file: [],
      oferta: 0,
      path: "",
      mensaje: "",
      P: {},
      PD: {},
      M: {},
    };
  },
  watch: {
    mensaje: function () {
      setTimeout(() => {
        this.mensaje = "";
      }, 3000);
    },
  },
  methods: {
    guardar() {
      this.P = {
        nombre: this.nombre,
        ingredientes: this.ingredientes,
        precio: this.precio,
        path: this.path,
      };
      this.PD = {
        nombre: this.nombre,
        ingredientes: this.ingredientes,
        precio_r: this.precio_r,
        oferta: this.oferta,
        path: this.path,
      };
      this.M = {
        nombre: this.nombre,
        productos: this.productos,
        precio: this.precio,
        path: this.path,
      };
      if (this.ProductoDia) {
        if (
          !this.nombre ||
          (!this.ingredientes && !this.productos) ||
          !this.precio_r ||
          !this.path
        ) {
          return (this.mensaje = "Recuerde rellenar todos los campos");
        }
      }
      if (this.ProductoRe || this.MenuDia) {
        if (
          !this.nombre ||
          (!this.ingredientes && !this.productos) ||
          !this.precio ||
          !this.path
        ) {
          return (this.mensaje = "Recuerde rellenar todos los campos");
        }
      }
      this.nombre = capitalizar(this.nombre);
      this.ingredientes = capitalizar(this.ingredientes);
      if (this.ProductoRe) {
        fetch("/ProductosRegu/guardar", {
          method: "POST",
          body: JSON.stringify(this.P),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => (this.mensaje = data));
      }
      if (this.ProductoDia) {
        if (!this.oferta) {
          return (this.mensaje = "Recuerde rellenar todos los campos");
        }
        fetch("/ProductosDia/guardar", {
          method: "POST",
          body: JSON.stringify(this.PD),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => (this.mensaje = data));
      }
      if (this.MenuDia) {
        fetch("/MenuDia/guardar", {
          method: "POST",
          body: JSON.stringify(this.M),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => (this.mensaje = data));
      }
      this.$emit("actualizar");
      this.reinicioDeDatos();
    },
    editar() {
      this.P = {
        id: this.datosEditar._id,
        nombre: this.datosEditar.nombre,
        ingredientes: this.datosEditar.ingredientes,
        precio: this.datosEditar.precio,
        path: this.datosEditar.path,
      };
      this.PD = {
        id: this.datosEditar._id,
        nombre: this.datosEditar.nombre,
        ingredientes: this.datosEditar.ingredientes,
        precio_r: this.datosEditar.precio_r,
        oferta: this.datosEditar.oferta,
        path: this.datosEditar.path,
      };
      this.M = {
        id: this.datosEditar._id,
        nombre: this.datosEditar.nombre,
        productos: this.datosEditar.productos,
        precio: this.datosEditar.precio,
        path: this.datosEditar.path,
      };

      if (this.ProductoRe) {
        if (
          !this.datosEditar.nombre ||
          !this.datosEditar.ingredientes ||
          !this.datosEditar.precio ||
          !this.datosEditar.path
        ) {
          return (this.mensaje = "Recuerde rellenar todos los campos");
        }
        this.datosEditar.nombre = capitalizar(this.datosEditar.nombre);
        this.datosEditar.ingredientes = capitalizar(
          this.datosEditar.ingredientes
        );

        fetch("/ProductosRegu/editar", {
          method: "PUT",
          body: JSON.stringify(this.P),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => (this.mensaje = data));
      }

      if (this.ProductoDia) {
        if (
          !this.datosEditar.nombre ||
          !this.datosEditar.ingredientes ||
          !this.datosEditar.precio_r ||
          !this.datosEditar.path
        ) {
          return (this.mensaje = "Recuerde rellenar todos los campos");
        }
        this.datosEditar.nombre = capitalizar(this.datosEditar.nombre);
        this.datosEditar.ingredientes = capitalizar(
          this.datosEditar.ingredientes
        );

        fetch("/ProductosDia/editar", {
          method: "PUT",
          body: JSON.stringify(this.PD),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => (this.mensaje = data));
      }
      if (this.MenuDia) {
        if (
          !this.datosEditar.nombre ||
          !this.datosEditar.productos ||
          !this.datosEditar.precio ||
          !this.datosEditar.path
        ) {
          return (this.mensaje = "Recuerde rellenar todos los campos");
        }
        this.datosEditar.nombre = capitalizar(this.datosEditar.nombre);

        fetch("/MenuDia/editar", {
          method: "PUT",
          body: JSON.stringify(this.M),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => (this.mensaje = data));
      }
    },
    reinicioDeDatos() {
      this.nombre = "";
      this.ingredientes = "";
      this.productos = "";
      this.precio = 0;
      this.precio_r = 0;
      this.file = [];
      this.oferta = 0;
      this.path = "";
      this.mensaje = "";
      this.P = {};
      this.PD = {};
      this.M = {};
    },
  },
};
</script>
