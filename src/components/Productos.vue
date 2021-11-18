<template>
  <body>
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="card">
            <div class="card-header text-center">
              <h3>Sube un producto</h3>
            </div>
            <div class="card-body">
              <form action="/<%=url %>" method="post" enctype="multipart/form-data">
                <div class="input-group mb-3">
                  <div class="custom-file">
                    <input type="file" name="image" class="custom-file-input" id="inputGroupFile02">
                    <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
                      Elige una imagen
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" name="nombre" placeholder="Nombre" class="form-control">
                </div>
                <div class="form-group">
                  <input type="text" name="ingredientes" placeholder="Ingredientes" class="form-control">
                </div>
                <div class="form-group">
                  <input type="number" name="precio" placeholder="Precio" class="form-control">
                </div>
                <div class="form-group">
                  <button class="btn btn-success btn-block">
                    Subir
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>