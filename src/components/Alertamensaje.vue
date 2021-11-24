<template>
  <div class="alerta-mensaje" v-if="mensaje">
    {{mensaje}}
  </div>
</template>

<script>
export default {
  name: 'Alertamensaje',
  props: {
    mensaje:{
      type: String,
      required: true,
    }
  },
  computed: {
    limpiars() {
      setTimeout( () => {
        this.mensaje = '', this.$emit('msj')}, 2000
      )
    }
  }
}
</script>
