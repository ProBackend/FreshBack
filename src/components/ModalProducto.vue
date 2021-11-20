<template>
  <div class="card" v-if="mostrarmodal" style="width: 40rem;">
    <div class="card-header">
      Agregar Producto
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
            <input v-model="producto.nombre" type="text" class="form-control" id="inputNombre" placeholder="Nombre">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputIngredientes" class="col-sm-2 col-form-label">Ingredientes</label>
          <div class="col-sm-10">
            <input v-model="producto.ingredientes" type="text" class="form-control" id="inputIngredientes" placeholder="Ingredientes">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPrecio" class="col-sm-2 col-form-label">Precio</label>
          <div class="col-sm-10">
            <input v-model="producto.precio" type="number" class="form-control" id="inputPrecio" placeholder="Precio">
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
      tyoe: Boolean,
      required: true,
    },
    esContacto:{
      tyoe: Boolean,
    }
  },
  data() {
    return {
      mostrarmodal: false,
      producto: {
        nombre: '',
        ingredientes: '',
        precio: 0,
        filename: '',
        orinalname: '',
        mimetype: '',
        size: ''
      }
    }
  },
  methods: {
    guardarPro() {
      if (!producto.nombre || !producto.ingredientes || !producto.precio || !producto.filename) {
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
