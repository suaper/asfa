<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md all_width ">
        <div class="w_1200 q-pd-md">
            <h3 class="title_out_content">Bienvenido Dashboard</h3>
        </div>
        <div class="w_1200 bg_white q-pa-xl">
            <div class="row cien flex header_two">
                <div class="col-3 flex wrp_title_icon">
                    <q-icon name="person_outline" class="azul_iconos" size="25px" />
                    <h2>Pacientes</h2>
                </div>

                <div class="w_60">
                    <div class="wrp_search">
                        <q-input
                            rounded
                            standout
                            class="q-mb-sm"
                            v-model="search"
                            >
                        </q-input>
                        <q-btn rounded class="bg_botn_verde" @click="executeSearch" text-color="white" icon-right="search" label="Buscar" />
                    </div>
                    <q-btn rounded class="bg_botn_verde btn_crear" @click="irCrearPaciente" text-color="white" icon-right="add" label="Crear paciente" />
                </div>
            </div>
            <div class="desc_seccion">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem</p>
            </div>
            <div class="wrp_table tipo_grilla q-mt-xl">
                <table class="grilla">
                    <tr v-for="(item, key) in patients" :key="key">
                        <td>
                            <q-icon name="person" class="azul_iconos" size="25px" />
                            <span class="name_usuario">{{ item.field_json.identification }} - {{ item.title }}</span>
                        </td>
                        <td class="action">
                            <q-btn @click="editPage(item.nid)" rounded class="bg_botn_azul" text-color="white" icon-right="edit" label="Editar" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import configServices from '../services/config'

export default {
  name: 'pacientes',
  data () {
    return {
      sliders: true,
      patients: [],
      search: ''
    }
  },
  created () {
    var patientDashboard = localStorage.getItem('patientDashboard')
    if (typeof patientDashboard !== 'undefined' && patientDashboard !== '' && patientDashboard !== null) {
      this.patients = JSON.parse(patientDashboard)
    } else {
      this.getPatients()
    }
  },
  methods: {
    irCrearPaciente () {
      localStorage.setItem('patientNid', '')
      this.$router.push('/crear-paciente')
    },
    editPage (nid) {
      localStorage.setItem('patientNid', nid)
      this.$router.push('/crear-paciente')
    },
    executeSearch () {
      var _this = this

      if (this.search !== '') {
        configServices.loadData(this, 'pacientes/json/?field_json_value=' + this.search, {
          callBack: (data) => {
            if (data.length === 0) {
              return _this.$swal('Advertencia', 'No se encontraron pacientes relacionados a su búsqueda', 'error')
            }
            data.map((item, key) => {
              var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
              data[key].field_json = JSON.parse(json)
            })

            _this.patients = data

            _this.$q.loading.hide()
          }
        })
      }
    },
    getPatients () {
      var _this = this
      configServices.loadData(this, 'pacientes/json/', {
        callBack: (data) => {
          data.map((item, key) => {
            var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json = JSON.parse(json)
          })

          _this.patients = data

          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
