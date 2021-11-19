<template>
  <body>
    <div class="container p-4">
      <div class="row">
        <div class="card-columns">
          % mostrart.forEach(function (mostrart) 
          <!-- {{mostrart}} -->
            <div class="card animated fadeInDown">
              <img src="<%= mostrart.path %>" class="card-img-top" alt="<%= mostrart.filename %>">
              <div class="card-body">
                <h5 class="card-title">
                  %= mostrart.nombre %>
                </h5>
                <p class="card-text">
                  %= mostrart.ingredientes %>
                </p>
                <p class="card-text">
                  %= mostrart.precio %>
                </p>
                <a href="/<%=p %>/delete/<%= mostrart.id%>" class="btn btn-danger btn-block">Delete</a>
                <a href="/<%=p %>/editar/<%= mostrart.id%>" class="btn btn-primary">Editar</a>
              </div>
            </div>
          % }) %>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default({
  name: 'Pmostrar',
  data(){
    return{

    }
  }
})
</script>
