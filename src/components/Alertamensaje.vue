<template>
  <div class="alerta-mensaje" v-if="mensaje">
    <div class="mensaje">
      {{mensaje}}
    </div>
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
  }
}
</script>
