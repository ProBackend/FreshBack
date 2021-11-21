<template>
  <body>
    <div class="container p-4 ">
      <div class="row ">
        <div class="col-md-4 offset-md-4 ">
          <div class="card ">
            <div class="card-header text-center ">
              <h3>Editar Producto</h3>
            </div>
            <div class="card-body ">
              <div class="input-group mb-3">
                <form action="/productos/editar/<%=mostrar_id.id %>" method="post" enctype="multipart/form-data">
                  <div class="input-group mb-3">
                    <div class="custom-file">
                      <input type="file" name="image" class="custom-file-input" id="inputGroupFile02">
                      <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
                        Reemplazar una imagen
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="text" name="nombre" placeholder="Nombre" class="form-control" value="<%=mostrar_id.nombre %>">
                    <div class="form-group">
                      <input type="text" name="ingredientes" placeholder="Ingredientes" class="form-control" value="<%=mostrar_id.ingredientes %>">
                    </div>
                    <div class="form-group">
                      <input type="number" name="precio" placeholder="Precio" class="form-control" value="<%=mostrar_id.precio %>">
                    </div>
                    <button class="btn btn-success btn-block">
                      Editar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>