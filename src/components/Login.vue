<template>
    <body>
      <div class="mensaje" v-if="mensaje">
        {{mensaje}}
      </div>
      <main>
          <div class="todo">
          <div class="parteTrasera">
              <div class="registro">
              <h3>¿Ya tienes una cuenta?</h3>
              <p>Inicia sesión para hacer un pedido</p>
              <button id="btn_iniSe" @click="cambiarVista()">Iniciar sesión</button>
              </div>
              <div class="iniciaSesion">
              <h3>¿Aún no tienes una cuenta?</h3>
              <p>Registrate para hacer un pedido</p>
              <button id="btn_iniSe" @click="cambiarVista(1)">Registrarse</button>
              </div>
          </div>
          <div class="arriba">
              <div class="iniSes">
              <form>
                  <h2>Iniciar sesión</h2>
                  <label for="userIngre">Usuario</label>
                  <input type="text" v-model="usuario.user" id="userIngre" placeholder="Usuario" name="usuario">
                  <label for="contraIngre">Contraseña</label>
                  <input type="password" v-model="usuario.password" id="contraIngre" placeholder="Contraseña" name="contraseña">
                  <button type="button" @click="iniciarSesion()" class="d-flex justify-content-center">Iniciar</button>
              </form>
              </div>
              <div class="regis">
              <form>
                  <h2>Registrarse</h2>
                  <label for="nombreRegis">Nombre</label>
                  <input type="text" v-model="registro.nombre" id="nombreRegis" placeholder="Nombre" name="nombre">
                  <label for="apellidoRegis">Apellido</label>
                  <input type="text" v-model="registro.apellido" id="apellidoRegis" placeholder="Apellido" name="apellido">
                  <label for="correoRegis">Correo</label>
                  <input type="email" v-model="registro.correo" id="correoRegis" placeholder="Correo electrónico" name="correo" required>
                  <label for="userRegis">Usuario</label>
                  <input type="text" v-model="registro.user" id="userRegis" placeholder="Usuario" name="usuario">
                  <label for="contraRegis">Contraseña</label>
                  <input type="password" v-model="registro.password" id="contraRegis" placeholder="Contraseña" name="contraseña">
                  <button type="button" @click="registrarse()" class="d-flex justify-content-center">Crear cuenta</button>
              </form>
              </div>
          </div>
          </div>  
      </main>
    </body>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return {
      usuario: {
        user: '',
        password: ''
      },
      registro: {
        nombre: '',
        apellido: '',
        user: '',
        correo: '',
        password: ''
      },
      mensaje: ''
    }
  },
  methods: {
    cambiarVista(num) {
      const ao = document.querySelector(".iniSes")
      const by = document.querySelector(".regis");
      const cn = document.querySelector(".arriba");

      if (num) {
        ao.style.display = "block"
        cn.style.left = "410px"
        by.style.display = "none"
      } else {
        ao.style.display = "none"
        cn.style.left = "10px"
        by.style.display = "block"
      }
    },
    iniciarSesion() {
      if (!this.usuario.user ||!this.usuario.password) {
        console.log('Recuerda rellenar todos los campos')
        return
      };

      fetch('/Login/Iniciar_sesion', {
        method: 'POST',
        body: JSON.stringify(this.usuario),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => this.mensaje = data.status)

      setTimeout(() => {
        this.mensaje = ''
      }, 8000);
    },
    registrarse() {
      const emailVa = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      if (!this.registro.nombre || !this.registro.apellido || !this.registro.correo ||!this.registro.user ||!this.registro.password) {
        console.log('Recuerda rellenar todos los campos')
        return
      }
      if (!emailVa.test(this.registro.correo)) {
        console.log('Recuerda ingresar un correo electrónico válido')
        return
      }

      this.registro.nombre = this.capitalizar(this.registro.nombre);
      this.registro.apellido = this.capitalizar(this.registro.apellido);
      fetch('/Login/Registrarse', {
        method: 'POST',
        body: JSON.stringify(this.registro),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => this.mensaje = data.status)

      setTimeout(() => {
        this.mensaje = ''
      }, 8000);
    },
    capitalizar(string) {
      if (string) {
        const textotoLowerCase = string.toLowerCase();
        const textoCapitalize = textotoLowerCase.replace(/(^\w|\s\w)/g, (m) =>
        m.toUpperCase(),
        );
        const textoSinEspacios = textoCapitalize.trim().replace(/\s+/g, ' ');
        string = textoSinEspacios;
        return string;
      }
    }
  }
}
</script>
