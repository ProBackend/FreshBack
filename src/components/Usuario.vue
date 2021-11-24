<template>
  <section>
    <h2 class="usuario">{{usuario.auth ? usuario.nombre : 'No has iniciado sesion'}}</h2>
    <h2 class="p-texto">{{usuario.rol}}</h2>
    <div v-if="usuario.rol == 'Gerente'">
      <div v-if="Ofertas">
        <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn-primario m-2 px-1"
          @click="proDia = !proDia"
        >
          Agregar producto del día
        </button>
        </div>
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn-primario m-2 px-1"
            @click="menuDia = !menuDia"
          >
            Agregar menú del día
          </button>
        </div>
      </div>
      <div v-if="Productos">
        <button
          type="button"
          class="btn-primario m-2 px-1"
          @click="proRe = !proRe"
        >
          Agregar producto regular
        </button>
      </div>
      <div v-if="Nosotros">
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn-primario m-2 px-2"
            @click="mostrar = !mostrar, esContacto = true"
          >
            Agregar contacto
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn-primario m-2 px-2"
            @click="mostrar = !mostrar"
          >
            Agregar gerente
          </button>
        </div>
      </div>
    </div>
    <ModalPPDM
      :ProductoRe= proRe
      :ProductoDia = proDia
      :MenuDia = menuDia
      @cerrar="proDia = false; proRe = false; menuDia = false"
    />
    <ModalGC
      :esContacto="esContacto"
      :mostrarmodal="mostrar"
      @cerrar="mostrar= false, esContacto=false"
    />
  </section>
</template>

<script>
import ModalPPDM from './ModalPPDM.vue'
import ModalGC from './ModalGC.vue'

export default {
  name: 'Usuario',
  components: {
    ModalPPDM,
    ModalGC
  },
  props: {
    usuario: {
      type: Object,
      default() {
        return {}
      }
    },
    Ofertas: {
      type: Boolean,
      default: false
    },
    Productos: {
      type: Boolean,
      default: false
    },
    Nosotros: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      proRe: false,
      proDia: false,
      menuDia: false,
      mostrar: false,
      esContacto: false,
      mensaje: ''
    }
  }
}
</script>
