<template>
  <section>
    <div v-if="2==2" class="mb-4">
      <div class="card imagenAncha">
        <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img imagenAncha">
        <div class="card-img-overlay">
          <h5 class="card-title h5-tittle">Producto del día</h5>
          <p class="card-text p-texto-oscuro">Descripción</p>
          <p class="card-text p-texto-oscuro">Precio idk</p>
        </div>
      </div>
    </div>
    <!-- v-for="combo in combos" :key="combo.nombre" -->
    <div class="">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <!-- <img src="..." class="card-img" alt="..."> -->
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenudelDia',
  data() {
    return {
      combos: []
    }
  }
}
</script>
