<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="item in items" :key="item.url">
        <div :class="['carousel-item', {'active' : item.activo} ]">
          <img src="/assets/carrusel-1.jpg" alt="carrusel-1" class="d-block w-100">
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carrusel',
  data() {
    return {
      items: [
        {
          url: 'carrusel-1.jpg',
          name: 'carrusel-1.jpg',
          activo: true,
        },
        {
          url: 'carrusel-2.jpg',
          name: 'carrusel-2.jpg',
          activo: false,
        },
        {
          url: 'prueba.jpg',
          name: 'prueba.jpg',
          activo: false,
        }
      ]
    }
  }
}
</script>
