<template>
  <section>
    <h2 class="usuario">Nombre del usuario</h2>
    <h2 class="p-texto">{{'Gerente'}}</h2>
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
          @click="mostrar = !mostrar, Escontacto = true"
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
    <ModalPPDM
      :ProductoRe= proRe
      :ProductoDia = proDia
      :MenuDia = menuDia
      @cerrar="proDia = false; proRe = false; menuDia = false"
    />
  </section>
</template>

<script>
import ModalPPDM from './ModalPPDM.vue'

export default {
  name: 'Usuario',
  components: {
    ModalPPDM
  },
  props: {
    usuario: {
      type: Object,
      //required: true
    },
    Ofertas: {
      type: Boolean,
      required: true
    },
    Productos: {
      type: Boolean,
      required: true
    },
    Nosotros: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      proRe: false,
      proDia: false,
      menuDia: false,
      mensaje: '',
    }
  }
}
</script>
