<template>
  <nav class="navbar navbar-expand-lg m-4 p-3">
    <div class="container-fluid">
      <h1 class="h1-tittle">Somos un restaurante</h1>
        <ul class="navbar-nav">
          <li
            class="nav-item"
            v-for="enlace in enlaces"
          >
            <a class="p-texto mb-0" href="#">{{ enlace.nombre }}</a>
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn-primario mx-2" type="submit">Iniciar sesión</button>
          <button class="btn-secundario mx-2" type="submit">Registrarse</button>
        </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      enlaces: [
        {
          nombre: 'Inicio',
          ruta: '/'
        },
        {
          nombre: 'Acerca de nosotros',
          ruta: '/AcercadeNosotros'
        }
      ]
    }
  }
}
</script>
