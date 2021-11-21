<template>
  <section>
    <Navbar/>
  </section>
</template>

<script>
import Navbar from './components/navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      a: 1
    }
  },
}
</script>
