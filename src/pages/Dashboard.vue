<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md all_width ">
      <div class="w_1200 q-pd-md">
          <h3 class="title_out_content">Bienvenido Dashboard</h3>
      </div>
      <div class="w_1200 bg_azul q-pa-md">
        <ul class="caja_dash">
          <li>
            <div class="title_dash">
              <div class="img_icn">
                <img alt="logo" src="../assets/iconos/i-paciente.png"/>
              </div>
              Pacientes
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <div class="buton_dash">
              <q-btn rounded class="bg_botn_verde btn_crear"  text-color="white" icon-right="add"  @click="irCrearPacientes" label="Crear paciente" />
            </div>
          </li>
          <li>
            <div class="title_dash">
              <div class="img_icn">
                <img alt="logo" src="../assets/iconos/i-registro.png"/>
              </div>
              Registros
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <div class="buton_dash">
              <q-btn rounded class="bg_botn_verde btn_crear"  text-color="white" icon-right="add" @click="irCrearRegistro" label="Registros" />
            </div>
          </li>
          <li>
            <div class="title_dash">
              <div class="img_icn">
                <img alt="logo" src="../assets/iconos/i-reporte.png"/>
              </div>
              Reportes
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <div class="buton_dash">
              <q-btn rounded class="bg_botn_verde btn_crear"  text-color="white" icon-right="add" @click="irCrearReporte" label="Reportes" />
            </div>
          </li>

          <li>
            <div class="title_dash">
              <div class="img_icn">
                <img alt="logo" src="../assets/iconos/i-doc.png"/>
              </div>
              Documentos
            </div>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <div class="buton_dash">
              <q-btn rounded class="bg_botn_verde btn_crear"  text-color="white" icon-right="add" @click="irCrearDocumento" label="Documentos" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </q-page>
  </template>

<script>

export default {
  name: 'documentos',
  data () {
    return {
      sliders: true,
      patients: [],
      search: ''
    }
  },
  created () {
    localStorage.setItem('patientDashboard', '')
  },
  methods: {
    irCrearPacientes () {
      this.$router.push('/crear-paciente')
    },
    irCrearRegistro () {
      this.$router.push('/registros')
    },
    irCrearDocumento () {
      this.$router.push('/documentos')
    },
    irCrearReporte () {
      this.$router.push('/reportes')
    }
  }
}
</script>
