<template>
  <section>
    <div class="d-flex justify-content-around">
      <button
        type="button"
        class="btn-secundario"
        @click="mostrar = !mostrar; proRe = !proRe"
      >
        Agregar producto regular
      </button>
      <button
        type="button"
        class="btn-secundario"
        @click="mostrar = !mostrar; proDia = !proDia"
      >
        Agregar producto del día
      </button>
      <button
        type="button"
        class="btn-secundario"
        @click="mostrar = !mostrar; menuDia = !menuDia"
      >
        Agregar menú del día
      </button>
    </div>
<div class="row d-flex justify-content-around">
<!-- v-for="poroducto in productos" :key="producto.nombre" -->
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

<!-- hasta aqui -->

</div>
    <ModalProducto
      :ProductoRe= proRe
      :ProductoDia = proDia
      :MenuDia = menuDia
      :mostrarmodal="mostrar"
      @cerrar="mostrar= false; proRe = false; proDia = false; menuDia = false"
    />
  </section>
</template>

<script>
import ModalProducto from './ModalPPDM.vue'

export default {
  name: 'Productos',
  components: {
    ModalProducto,
  },
  data() {
    return {
      productos: [],
      mostrar: false,
      proRe: false,
      proDia: false,
      menuDia: false
    }
  },
  created(){
    this.buscar()
  },
  methods: {
    buscar(){
      fetch('/Productos/consulta')
        .then(res => res.json())
        .then(data => this.productos= data)
    }
  }
}
</script>