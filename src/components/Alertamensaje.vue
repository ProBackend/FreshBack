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
  watch: {
    mensaje: () => {
      setTimeout( () => '', 5000 )
    }
  }
}
</script>
