<template>
  <section>
    <div class="modal fade show" v-if="mostrarmodal">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <div class="card-header">
            <h2 class="h2-tittle">{{MenuDia ? 'Agregar menú del día' : (ProductoDia ? 'Agregar producto del día': 'Agregar producto')}}</h2>
          </div>
          <div class="card-body">
            <div class="">
              <label class="input-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
                Elige una imagen
              </label>
              <input type="file" name="image" class="input-file" id="inputGroupFile02">
            </div>
            <form>
              <div>
                <label for="inputNombre" class="input-label">Nombre</label>
                <input v-model="nombre" type="text" class="input" id="inputNombre" placeholder="Nombre">
              </div>
              <div>
                <label for="inputIngredientes" class="input-label">Ingredientes</label>
                <textarea v-model="ingredientes" type="text" class="input" id="inputIngredientes" placeholder="Ingredientes"></textarea>
              </div>
              <div>
                <label for="inputPrecio" class="input-label">Precio</label>
                <input v-model="precio" type="number" class="input" id="inputPrecio" placeholder="Precio">
              </div>
              <div v-if="ProductoDia">
                <label for="inputPrecio" class="input-label">Oferta</label>
                <input v-model="oferta" type="number" class="input" id="inputPrecio" placeholder="Oferta">
              </div>
            </form>
          </div>
          <div class="d-flex justify-content-end mx-2 my-2">
            <div>
              <button class="btn-primario-modal" @click="guardarPro(), $emit('cerrar', false)">Guardar</button>
              <button class="btn-secundario-modal" @click="$emit('cerrar', false)">nomepegues</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'modalPro',
  props: {
    mostrarmodal:{
      type: Boolean,
      default: false
    },
    ProductoRe:{
      type: Boolean,
    },
    ProductoDia:{
      type: Boolean,
    },
    MenuDia:{
      type: Boolean,
    }
  },
  data() {
    return {
      nombre: '',
      ingredientes: '',
      precio: 0,
      oferta: 0
    }
  },
  methods: {
    guardarPro() {
      if (!this.nombre || !this.ingredientes || !this.precio) {
        console.log("Ingrese la información correctamente")
        return
      }
      fetch('/Productos/guardar')
        .then(res => res.json())
        .then(data => console.log(data))
    }
  }
}
</script>
