<template>
  <div class="carousel slide">
    <div class="carousel-inner">
      <div v-for="item in items" :key="item.url">
        <div :class="['carousel-item', { active: item.activo }]">
          <img :src="item.url" alt="Sin imagen" class="d-block w-100" />
          <div>
            <button
              class="carousel-control-prev"
              v-if="atras <= items.length && atras != 0"
              type="submit"
              @click="carrusel(item.url), atras--"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Atras</span>
            </button>
            <button
              class="carousel-control-next"
              v-if="atras < items.length - 1"
              type="submit"
              @click="carrusel(item.url, true), atras++"
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
  </div>
</template>

<script>
export default {
  name: "Carrusel",
  data() {
    return {
      items: [
        {
          url: "/assets/carrusel-1.jpg",
          name: "carrusel-1.jpg",
          activo: true,
        },
        {
          url: "/assets/carrusel-2.jpg",
          name: "carrusel-2.jpg",
          activo: false,
        },
        {
          url: "/assets/carrusel-3.jpg",
          name: "carrusel-3.jpg",
          activo: false,
        },
      ],
      atras: 0,
    };
  },
  methods: {
    carrusel(item, next) {
      for (let poss = 0; poss < this.items.length; poss++) {
        if (this.items[poss].url == item) {
          this.items[poss].activo = false;
          if (next) {
            this.items[poss + 1].activo = true;
          } else {
            this.items[poss - 1].activo = true;
          }
        }
      }
    },
  },
};
</script>
