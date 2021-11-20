<template>
  <div class="card" v-if="mostrarmodal" style="width: 40rem;">
    <div class="card-header">
      {{MenuDia ? 'Agregar menú del día' : (ProductoDia ? 'Agregar producto del día': 'Agregar producto')}}
    </div>
    <div class="card-body" style="background: #e6d3c5">
      <input type="file" name="image" class="custom-file-input" id="inputGroupFile02">
      <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
        Elige una imagen
      </label>
      <form>
        <div class="form-group row">
          <label for="inputNombre" class="col-sm-2 col-form-label">Nombre</label>
          <div class="col-sm-10">
            <input v-model="nombre" type="text" class="form-control" id="inputNombre" placeholder="Nombre">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputIngredientes" class="col-sm-2 col-form-label">Ingredientes</label>
          <div class="col-sm-10">
            <input v-model="ingredientes" type="text" class="form-control" id="inputIngredientes" placeholder="Ingredientes">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPrecio" class="col-sm-2 col-form-label">Precio</label>
          <div class="col-sm-10">
            <input v-model="precio" type="number" class="form-control" id="inputPrecio" placeholder="Precio">
          </div>
        </div>
        <div class="form-group row" v-if="ProductoDia">
          <label for="inputPrecio" class="col-sm-2 col-form-label">Oferta</label>
          <div class="col-sm-10">
            <input v-model="oferta" type="number" class="form-control" id="inputPrecio" placeholder="Oferta">
          </div>
        </div>
      </form>
      <button @click="Guardar()" class="btn btn-primary">Guardar</button>
    </div>
  </div>
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
