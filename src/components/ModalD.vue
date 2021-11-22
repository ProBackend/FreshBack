<template>
  <section>
    <div class="modal fade show" v-if="mostrarmodald">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          
          <div class="card-body">
            <form enctype="multipart/form-data">
              <div>
                <label for="inputUbicacion" class="input-label">¿Desea tener delivery?</label>
                <input v-model="ubicacion" type="text" class="input" id="inputUbicacion" placeholder="Ubicacion">
              </div>
        
            </form>
          </div>
          <div class="d-flex justify-content-end mx-2 my-2">
            <div>
              <button class="btn-primario-modal" @click="agregar(); $emit('cerrar', false)">Sí</button>
              <button class="btn-secundario-modal" @click="$emit('cerrar', false)">No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Alertamensaje
      @limpio="this.mensaje"
      :mensaje="this.mensaje"
    />
  </section>
</template>

<script>
import Alertamensaje from './Alertamensaje.vue';

//capitalizar
export default {
  name: 'modalD',
  components: {
    Alertamensaje,
    
  },
  props: {
    mostrarmodald:{
      type: Boolean,
      default: false
    },
    ProductoRee:{
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
      ubicacion: '',
       productoRee: {},
      productoDia: {},
      menuDia: {},
     mensaje: ''
    }
  },
 
  methods: {
   agregar(id){
       const agregar = {
        id: id
      }
      fetch('/Pedido/ProductosRegu', {
        method: 'POST',
        body: JSON.stringify(agregar),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => this.mensaje = data)

      
    } 
  }
}
</script>
