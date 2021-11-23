<template>
  <section>
    <div class="carousel slide">
      <div class="carousel-inner">
        <div v-for="item in menuDia" :key="item.url">
          <div :class="['carousel-item', {'active' : item.activo} ]">
            <img :src="item.path" :alt="item.nombre" class="d-block imagenAncha">
            <div class="textoImagen">
              <div class="carrusel-fondo">
                <h5 class="h5-tittle">{{item.nombre}}</h5>
                <p class="p-texto-oscuro">{{item.productos}}</p>
                <p class="mt-4 text-muted">{{item.precio}}</p>
              </div>
            </div>
            <button class="carousel-control-prev" v-if="atras <= menuDia.length && atras != 0" type="submit" @click="carrusel(item), atras--">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Atras</span>
            </button>
            <button class="carousel-control-next" v-if="atras < menuDia.length-1" type="submit" @click="carrusel(item, true), atras++">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
            <div class="">
              <button type="submit" @click="eliminar(item._id)" class="btn-terciario px-2">Eliminar</button>
              <button @click="editar = true; Editar = item; MenuDia = true" class="btn-secundario px-2">Editar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="card col-1 m-3" v-for="pro in proDia" :key="pro._id">
        <div class="mt-2 d-flex justify-content-center">
          <img :src="pro.path" class="card-img">
        </div>
        <div class="mt-2">
          <h5 class="card-title h5-tittle">{{pro.nombre}}</h5>
          <p class="p-texto-oscuro">{{pro.oferta}}</p>
          <p><small class="text-muted">{{pro.nombre}}</small></p>
          <div class="contenedor-btn">
        <button type="submit" @click="eliminar(pro._id, 1)" class="btn-terciario px-2">Eliminar</button>
    </div>
    <ModalPPDM
      :MenuDia= Me
      :esEditar= Editar
      :Actualizar= editar
      @cerrar="buscarMenu(), buscarPD(), editar = false; Editar = {}, Me = false"
      @actualizar="buscar()"
    />
    <Alertamensaje
      @limpio="mensaje"
      :mensaje="mensaje"
    />
  </section>
</template>

<script>
import ModalPPDM from './ModalPPDM.vue'
import Alertamensaje from './Alertamensaje.vue';

export default {
  name: 'MenudelDia',
  components: {
    ModalPPDM,
    Alertamensaje
  },
  data() {
    return {
      proDia: [],
      Prod: false,
      menuDia: [],
      Me: false,
      Editar: {},
      editar: false,
      mensaje: '',
      atras: 0,
      One: true
    }
  },
  created(){
    this.buscarMenu()
    this.buscarPD()
  },
  methods: {
    buscarMenu(){
      fetch('/MenuDia/consulta')
        .then(res => res.json())
        .then(data => {
          if (data[0].activo == false && this.One == true) {
              data[0].activo = true
              this.menuDia = data
              this.One = false
            }
          })
    },
    buscarPD(){
      fetch('/ProductoDia/consulta')
        .then(res => res.json())
        .then(data => this.proDia= data)
    },
    eliminar(id, acc){
      const eliminar = {
        id: id
      }
      if (acc) {
        fetch('/ProductosDia/eliminar', {
          method: 'DELETE',
          body: JSON.stringify(eliminar),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => this.mensaje = data)
          setTimeout(() => {
            this.mensaje = ''
          })
      } else {
        fetch('/MenuDia/eliminar', {
          method: 'DELETE',
          body: JSON.stringify(eliminar),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => this.mensaje = data)
          setTimeout(() => {
            this.mensaje = ''
          })
      }
    },
    carrusel(item, next){
      for (let poss = 0; poss < this.menuDia.length; poss++) {
        if (this.menuDia[poss]._id == item._id) {
          this.menuDia[poss].activo = false
            if (next) {
              this.menuDia[poss+1].activo = true
            }else {
              this.menuDia[poss-1].activo = true
            }
        }
      }
    }
  }
}
</script>
