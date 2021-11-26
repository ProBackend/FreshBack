<template>
  <section v-if="mostrarmodal">
    <div class="modal fade show">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="h2-tittle">
              {{ esContacto ? "Agregar un contacto" : "Agregar gerente" }}
            </h2>
          </div>
          <div class="modal-body" v-if="esContacto">
            <form class="row">
              <div class="col-4">
                <label for="nombreCont" class="input-label"
                  >Nombre del contacto</label
                >
                <input
                  type="text"
                  id="nombreCont"
                  placeholder="Nombre"
                  name="nombre"
                  class="input"
                  v-model="contacto.nombre"
                />
              </div>
              <div class="col-4">
                <label for="apellidoCont" class="input-label"
                  >Apellido del contacto</label
                >
                <input
                  type="text"
                  id="apellidoCont"
                  placeholder="Apellido"
                  name="apellido"
                  class="input"
                  v-model="contacto.apellido"
                />
              </div>
              <div class="col-4">
                <label for="telefonoCont" class="input-label"
                  >Teléfono del contacto</label
                >
                <input
                  type="text"
                  id="telefonoCont"
                  placeholder="Teléfono"
                  name="telefono"
                  class="input"
                  v-model="contacto.telefono"
                />
              </div>
              <div class="col-6">
                <label for="descripcionCont" class="input-label"
                  >Descripción del contacto</label
                >
                <input
                  type="text"
                  id="descripcionCont"
                  placeholder="Descripción"
                  name="descripcion"
                  class="input"
                  v-model="contacto.descripcion"
                />
              </div>
              <div class="col-6">
                <label for="direccionCont" class="input-label"
                  >Dirección del contacto</label
                >
                <input
                  type="text"
                  id="direccionCont"
                  placeholder="Dirección"
                  name="direccion"
                  class="input"
                  v-model="contacto.direccion"
                />
              </div>
            </form>
          </div>
          <div class="modal-body" v-else>
            <form class="row">
              <div class="col-4">
                <label for="nombreGe" class="input-label"
                  >Nombre del gerente</label
                >
                <input
                  type="text"
                  id="nombreGe"
                  placeholder="Nombre"
                  name="nombre"
                  class="input"
                  v-model="gerente.nombre"
                />
              </div>
              <div class="col-4">
                <label for="apellidoGe" class="input-label"
                  >Apellido del gerente</label
                >
                <input
                  type="text"
                  id="apellidoGe"
                  placeholder="Apellido"
                  name="apellido"
                  class="input"
                  v-model="gerente.apellido"
                />
              </div>
              <div class="col-4">
                <label for="usuarioGe" class="input-label">Usuario</label>
                <input
                  type="text"
                  id="usuarioGe"
                  placeholder="Usuario"
                  name="usuario"
                  class="input"
                  v-model="gerente.usuario"
                />
              </div>
              <div class="col-4">
                <label for="correoGe" class="input-label">Correo</label>
                <input
                  type="text"
                  id="correoGe"
                  placeholder="Usuario"
                  name="usuario"
                  class="input"
                  v-model="gerente.correo"
                />
              </div>
              <div class="col-4">
                <label for="claveGe" class="input-label">Contraseña</label>
                <input
                  type="password"
                  id="claveGe"
                  placeholder="Contraseña"
                  name="contraseña"
                  class="input"
                  v-model="gerente.clave"
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
                  guardar();
                  $emit('cerrar');
                "
              >
                Guardar
              </button>
              <button
                class="btn-secundario-modal"
                @click="
                  $emit('cerrar');
                  reinicioDeDatos();
                "
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
import { capitalizar, validarTel } from "../controllers/funcionesGenerales";

export default {
  name: "ModalGC",
  components: {
    Alertamensaje,
    capitalizar,
    validarTel,
  },
  props: {
    mostrarmodal: {
      type: Boolean,
      default: false,
    },
    esContacto: {
      type: Boolean,
    },
    Token: {
      type: String,
    },
  },
  data() {
    return {
      contacto: {
        nombre: "",
        apellido: "",
        direccion: "",
        descripcion: "",
        telefono: "",
      },
      gerente: {
        nombre: "",
        apellido: "",
        usuario: "",
        correo: "",
        clave: "",
      },
      mensaje: "",
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
      if (this.esContacto) {
        if (
          !this.contacto.nombre ||
          !this.contacto.apellido ||
          !this.contacto.direccion ||
          !this.contacto.descripcion
        ) {
          return (this.mensaje = "Recuerde rellenar todos los campos");
        }
        if (!this.contacto.telefono || !validarTel(this.contacto.telefono)) {
          return (this.mensaje =
            "Ingrese un número de teléfono válido en el formato: 58xxxxxxxxxx");
        }
        this.contacto.nombre = capitalizar(this.contacto.nombre);
        this.contacto.apellido = capitalizar(this.contacto.apellido);
        this.contacto.descripcion = capitalizar(this.contacto.descripcion);
        fetch("/nosotros/guardar", {
          method: "POST",
          body: JSON.stringify(this.contacto),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => (this.mensaje = data));
      } else {
        if (
          !this.gerente.nombre ||
          !this.gerente.apellido ||
          !this.gerente.usuario ||
          !this.gerente.clave ||
          !this.gerente.correo
        ) {
          return (this.mensaje = "Recuerde rellenar todos los campos");
        }
        this.gerente.nombre = capitalizar(this.gerente.nombre);
        this.gerente.apellido = capitalizar(this.gerente.apellido);
        fetch("/gerente/registrar", {
          method: "POST",
          body: JSON.stringify(this.gerente),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "x-access-token": this.Token,
          },
        })
          .then((res) => res.json())
          .then((data) => (this.mensaje = data.status));
      }
      this.reinicioDeDatos();
      this.$emit("actualizar");
    },
    reinicioDeDatos() {
      this.contacto = {
        nombre: "",
        apellido: "",
        direccion: "",
        descripcion: "",
        telefono: "",
      };
      this.gerente = {
        nombre: "",
        apellido: "",
        usuario: "",
        clave: "",
      };
    },
  },
};
</script>
