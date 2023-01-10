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
              <h2>Documentos</h2>
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
          </div>
        </div>
        <div class="desc_seccion">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem</p>
        </div>
        <div class="wrp_table tipo_grilla q-mt-xl">
          <h4 class="aviso_busque" v-if="patients.length === 0">Por favor busque un paciente</h4>
          <table class="grilla">
            <tr v-for="(item, key) in patients" :key="key">
              <td>
                  <q-icon name="person" class="azul_iconos" size="25px" />
                  <span class="name_usuario">{{ item.field_json.identification }} - {{ item.title }} - <strong>{{ item.field_json.program }}</strong></span>
              </td>
              <td class="action">
                  <q-btn @click="irListaDocumetos(item)" rounded class="bg_botn_azul" text-color="white" icon-right="edit" label="Administrar carpetas" />
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
  name: 'documentos',
  data () {
    return {
      sliders: true,
      patients: [],
      search: ''
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
    irListaDocumetos (item) {
      localStorage.setItem('patientFolder', JSON.stringify(item))
      this.$router.push('/lista-documentos')
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
    }
  }
}
</script>
