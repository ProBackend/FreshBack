<template>
  <section>
    <div class="mb-4">
      <div class="card imagenAncha">
        <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img imagenAncha">
        <div class="card-img-overlay">
          <h5 class="card-title h5-tittle">Menú del día</h5>
          <p class="card-text p-texto-oscuro">Descripción</p>
          <p class="mt-5"><small class="p-texto-oscuro">Precio idk</small></p>
        </div>
      </div>
    </div>
      <div class="row d-flex justify-content-around">
    <!-- v-for="combo in combos" :key="combo.nombre" -->
        <div class="card col-2 m-3">
          <div class="mt-2 d-flex justify-content-center">
            <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img"/>
          </div>
            <div class="mt-2">
              <h5 class="card-title h5-tittle">Salsa de maiz</h5>
              <p class="p-texto-oscuro">Rica porq es de maiz</p>
              <p><small class="text-muted">Precio idk</small></p>
            </div>
        </div>

<!-- de aqui hacia abajo se puede borrar -->

        <div class="card col-2 m-3">
          <div class="mt-2 d-flex justify-content-center">
            <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img"/>
          </div>
            <div class="mt-2">
              <h5 class="card-title h5-tittle">Salsa de maiz</h5>
              <p class="p-texto-oscuro">Rica porq es de maiz</p>
              <p><small class="text-muted">Precio idk</small></p>
            </div>
        </div><div class="card col-2 m-3">
          <div class="mt-2 d-flex justify-content-center">
            <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img"/>
          </div>
            <div class="mt-2">
              <h5 class="card-title h5-tittle">Salsa de maiz</h5>
              <p class="p-texto-oscuro">Rica porq es de maiz</p>
              <p><small class="text-muted">Precio idk</small></p>
            </div>
        </div><div class="card col-2 m-3">
          <div class="mt-2 d-flex justify-content-center">
            <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img"/>
          </div>
            <div class="mt-2">
              <h5 class="card-title h5-tittle">Salsa de maiz</h5>
              <p class="p-texto-oscuro">Rica porq es de maiz</p>
              <p><small class="text-muted">Precio idk</small></p>
            </div>
        </div><div class="card col-2 m-3">
          <div class="mt-2 d-flex justify-content-center">
            <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img"/>
          </div>
            <div class="mt-2">
              <h5 class="card-title h5-tittle">Salsa de maiz</h5>
              <p class="p-texto-oscuro">Rica porq es de maiz</p>
              <p><small class="text-muted">Precio idk</small></p>
            </div>
        </div><div class="card col-2 m-3">
          <div class="mt-2 d-flex justify-content-center">
            <img src="/assets/prueba.jpg" alt="prueba.jpg" class="card-img"/>
          </div>
            <div class="mt-2">
              <h5 class="card-title h5-tittle">Salsa de maiz</h5>
              <p class="p-texto-oscuro">Rica porq es de maiz</p>
              <p><small class="text-muted">Precio idk</small></p>
            </div>
        </div>

<!-- hasta aqui xd -->

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
