<template>
  <header class="m-4">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand">Somos un restaurante</a>
        <ul class="navbar-nav">
          <li
            class="nav-item"
            v-for="enlace in enlaces"
          >
            <a class="nav-link" href="#">{{ enlace.nombre }}</a>
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-outline-success" type="submit">Iniciar sesión</button>
          <button class="btn" type="submit">Registrarse</button>
        </form>
    </div>
  </nav>
</header>
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
