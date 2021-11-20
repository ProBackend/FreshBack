<template>
  <div class="card" v-if="modal" style="width: 40rem;">
    <div class="card-header">
      Agregar Producto
    </div>
    <div class="card-body">
      <input type="file" name="image" class="custom-file-input" id="inputGroupFile02">
      <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
        Elige una imagen
      </label>
      <form>
        <div class="form-group row">
          <label for="inputNombre" class="col-sm-2 col-form-label">Nombre</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputNombre" placeholder="Nombre">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputIngredientes" class="col-sm-2 col-form-label">Ingredientes</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputIngredientes" placeholder="Ingredientes">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPrecio" class="col-sm-2 col-form-label">Precio</label>
          <div class="col-sm-10">
            <input type="number" class="form-control" id="inputPrecio" placeholder="Precio">
          </div>
        </div>
      </form>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> 
</template>