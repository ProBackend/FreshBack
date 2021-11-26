<template>
  <section>
    <div class="carousel slide">
      <div class="carousel-inner">
        <div v-for="item in menuDia" :key="item.url">
          <div :class="['carousel-item', { active: item.activo }]">
            <img
              :src="item.path"
              :alt="item.nombre"
              class="d-block imagenAncha"
            />
            <div class="contenedor-carrusel-Menu">
              <div class="carrusel-fondo">
                <h5 class="h5-tittle">{{ item.nombre }}</h5>
                <p class="p-texto-oscuro">{{ item.productos }}</p>
                <p class="text-muted">{{ item.precio }}</p>
              </div>
              <div class="contenedor-carrusel-btn">
                <div v-if="permiso === 'Gerente'">
                  <button
                    @click="eliminar(item._id), buscarMenu()"
                    class="btn-terciario px-2 mx-2"
                  >
                    Eliminar
                  </button>
                  <button
                    @click="
                      editar = true;
                      Editar = item;
                      Me = true;
                    "
                    class="btn-secundario px-2 mx-2"
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              v-if="atras <= menuDia.length && atras != 0"
              @click="carrusel(item), atras--"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Atras</span>
            </button>
            <button
              class="carousel-control-next"
              v-if="atras < menuDia.length - 1"
              type="submit"
              @click="carrusel(item, true), atras++"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-around">
      <div
        class="card col m-3 justify-content-between"
        v-for="pro in proDia"
        :key="pro._id"
      >
        <div>
          <div class="mt-2 d-flex justify-content-center">
            <img :src="pro.path" class="card-img" />
          </div>
          <div class="mt-2">
            <h5 class="card-title h5-tittle">{{ pro.nombre }}</h5>
            <p class="p-texto-oscuro">{{ pro.ingredientes }}</p>
            <p>
              <small class="text-muted">{{ pro.precio_r }}</small>
            </p>
            <p>
              <small class="text-muted">{{ pro.oferta }}</small>
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
              Editar = pro;
              Prod = true;
            "
            class="btn-secundario px-2"
          >
            Editar
          </button>
          <button
            type="submit"
            @click="eliminar(pro._id, true), buscarPD()"
            class="btn-terciario px-2"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
    <ModalPPDM
      :MenuDia="Me"
      :ProductoDia="Prod"
      :esEditar="Editar"
      :Actualizar="editar"
      @cerrar="
        buscarMenu();
        buscarPD();
        editar = false;
        Editar = {};
        Me = false;
        Prod = false;
        atras = 0;
      "
      @actualizar="
        buscarMenu();
        buscarPD();
        atras = 0;
      "
    />
    <Alertamensaje @msj="mensaje = ''" :mensaje="mensaje" />
  </section>
</template>

<script>
import ModalPPDM from "./ModalPPDM.vue";
import Alertamensaje from "./Alertamensaje.vue";

export default {
  name: "MenudelDia",
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
      proDia: [],
      Prod: false,
      menuDia: [],
      Me: false,
      Editar: {},
      editar: false,
      mensaje: "",
      atras: 0,
    };
  },
  created() {
    this.buscarMenu();
    this.buscarPD();
  },
  watch: {
    mensaje: function () {
      setTimeout(() => {
        this.mensaje = "";
      }, 3000);
    },
    actualizarVista: function () {
      this.buscarPD();
      this.buscarMenu();
      this.atras = 0;
    },
  },
  methods: {
    buscarMenu() {
      fetch("/MenuDia/consulta")
        .then((res) => res.json())
        .then((data) => {
          if (data.length && data[0].activo == false) {
            data[0].activo = true;
            this.menuDia = data;
          }
        });
    },
    buscarPD() {
      fetch("/ProductoDia/consulta")
        .then((res) => res.json())
        .then((data) => (this.proDia = data));
    },
    eliminar(id, acc) {
      const eliminar = {
        id: id,
      };
      if (acc) {
        fetch("/ProductosDia/eliminar", {
          method: "DELETE",
          body: JSON.stringify(eliminar),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => (this.mensaje = data));
      } else {
        fetch("/MenuDia/eliminar", {
          method: "DELETE",
          body: JSON.stringify(eliminar),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => (this.mensaje = data));
        this.atras = 0;
      }
    },
    carrusel(item, next) {
      for (let poss = 0; poss < this.menuDia.length; poss++) {
        if (this.menuDia[poss]._id == item._id) {
          this.menuDia[poss].activo = false;
          if (next) {
            this.menuDia[poss + 1].activo = true;
          } else {
            this.menuDia[poss - 1].activo = true;
          }
        }
      }
    },
  },
};
</script>
