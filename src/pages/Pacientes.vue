<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md all_width ">
        <div class="w_1200 q-pd-md">
            <h3>Bienvenido Dashboard</h3>
        </div>
        <div class="w_1200 bg_white q-pa-xl">
            <div class="row cien flex header_two">
                <div class="col-3">
                    <h2>Pacientes</h2>
                </div>

                <div class="w_50">
                    <div class="wrp_search">
                        <q-input
                            rounded
                            standout
                            class="q-mb-sm"
                            >
                        </q-input>
                        <q-btn rounded class="bg_botn_verde" text-color="white" icon-right="search" label="Buscar" />
                    </div>
                    <q-btn rounded class="bg_botn_verde btn_crear" @click="irCrearPaciente" text-color="white" icon-right="add" label="Crear paciente" />
                </div>
                <div class="desc_seccion">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem</p>
                </div>
            </div>
            <div class="wrp_table tipo_grilla q-mt-xl">
                <table class="grilla">
                    <tr>
                        <td>
                            <q-icon name="person" class="azul_iconos" size="25px" />
                            <span class="name_usuario">Juan Lopez</span>
                        </td>
                        <td class="action">
                            <q-btn rounded class="bg_botn_azul" text-color="white" icon-right="edit" label="Editar" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <q-icon name="person" class="azul_iconos" size="25px" />
                            <span class="name_usuario">Juan Lopez</span>
                        </td>
                        <td class="action">
                            <q-btn rounded class="bg_botn_azul" text-color="white" icon-right="edit" label="Editar" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <q-icon name="person" class="azul_iconos" size="25px" />
                            <span class="name_usuario">Juan Lopez</span>
                        </td>
                        <td class="action">
                            <q-btn rounded class="bg_botn_azul" text-color="white" icon-right="edit" label="Editar" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'pacientes',
  data () {
    return {
      sliders: true
    }
  },
  methods: {
    irCrearPaciente () {
      this.$router.push('/crear-paciente')
    }
  }
}
</script>
