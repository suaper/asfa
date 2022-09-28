<template>
  <q-page class="flex flex-center column justify-between view_login bg-image ">
  <div class="cien flex flex-center">
    <div class="ochenta text-center">
      <img alt="logo" src="../assets/logo-asfa.png"/>
      <div class="desc_login">
        <p><strong>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</strong></p>
      </div>
      <div class="fots_login">
        <img alt="logo" src="../assets/fondo-login2.png"/>
      </div>
    </div>
    <div class="veinte text-center espacio_azul">
      <div class="wrap_form_login">
        <q-form
          class="form-login"
        >
          <h4 class="title_login">Login</h4>
          <div class="row_user_login">
            <span>Usuario o correo electrónico</span>
            <q-input
              rounded
              standout
              v-model="name"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Este campo no puede ir vacio']"
              label="mail@mail.com"
              class="q-mb-sm"
              >
            </q-input>
          </div>
          <div class="row_user_pass">
            <span>Contraseña</span>
            <q-input
              rounded
              standout
              type="password"
              class="q-my-sm"
              v-model="password"
              label="Contraseña"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Este campo no puede ir vacio']"
            >
            </q-input>
          </div>
          <q-btn unelevated rounded color="light-green-8" label="Iniciar Sesión" />
          <div class="wrap-olvido-contrasenia text-center q-mt-md">
            <a  @click="irRecuperarClave" color="blue">¿Olvidaste tu contraseña?</a>
          </div>
          <div class="desc">
            <span>Si necesitas ayuda con el acceso o registro a la oficina virtual escríbenos al correo mail@mail.com enviando copia del documento de identidad, teléfono de contacto, imagen y detalle de la inconsistencia.</span>
          </div>
        </q-form>
      </div>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      password: null
    }
  },
  methods: {
    irRecuperarClave () {
      this.$router.push('/recuperar_contrasenia')
    },
    loginTrue () {
      this.$router.push('/home')
    }
  }
}
</script>
