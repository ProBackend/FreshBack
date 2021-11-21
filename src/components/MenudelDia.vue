<template>
  <section>
    <div v-if="1==2">
      <div class="card bg-dark text-white">
        <div class="col-md-2">
        <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img">
        </div>
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">Last updated 3 mins ago</p>
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
