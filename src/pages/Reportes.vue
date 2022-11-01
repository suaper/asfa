<template>
  <q-page class="flex flex-center azul_fondo wiew_reportes">
    <div class="q-pb-md all_width ">
        <div class="w_1200 q-pd-md">
            <h3 class="title_out_content">Bienvenido Dashboard</h3>
        </div>
        <div class="w_1200 bg_white q-pa-xl">
            <div class="row cien flex header_two">
                <div class="col-3 flex wrp_title_icon">
                    <q-icon name="post_add" class="azul_iconos" size="25px" />
                    <h2>Reportes</h2>
                </div>
            </div>
            <div class="desc_seccion cien q-pa-md">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem</p>
            </div>
            <div class="wrp_table tipo_grilla q-mt-xl">
                <q-card class="grillas_tabs">
                    <q-tabs
                    v-model="tab"
                    dense
                    class="text-grey"
                    active-color="primary"
                    indicator-color="primary"
                    align="justify"
                    narrow-indicator
                    >
                    <q-tab name="finalizados" label="Finalizados" />
                    </q-tabs>

                    <q-separator />

                    <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="finalizados">
                          <div class="wrp_table tipo_grilla">
                            <h4 class="aviso_busque">Listado Reportes</h4>
                            <div class="w_60 flex-end">
                              <div class="wrp_search rango_fechas">
                                <div class="row dos_items">
                                  <div class="item">
                                    <label class="labele">Seleccionar fecha de inicio</label>
                                    <q-input filled v-model="initialDate" >
                                      <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale" ref="qDateInitial">
                                          <q-date v-model="initialDate" @input="setFilter">
                                              <div class="row items-center justify-end">
                                              <q-btn v-close-popup label="Cerrar" color="primary" flat />
                                              </div>
                                          </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                      </template>
                                    </q-input>
                                  </div>
                                  <div class="item">
                                    <label class="labele">Seleccionar fecha de final</label>
                                    <q-input filled v-model="finalDate">
                                      <template v-slot:append>
                                      <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale" ref="qDateFinal">
                                          <q-date v-model="finalDate" @input="setFilter">
                                              <div class="row items-center justify-end">
                                              <q-btn v-close-popup label="Cerrar" color="primary" flat />
                                              </div>
                                          </q-date>
                                          </q-popup-proxy>
                                      </q-icon>
                                      </template>
                                    </q-input>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <table class="grilla">
                              <tr v-for="(item, key) in finished" :key="key">
                                  <td>
                                      <q-icon name="person" class="azul_iconos" size="25px" />
                                      <span class="name_usuario">{{ item.field_json_1.identification }} - {{ item.title }}</span>
                                  </td>
                                  <td class="action">
                                      <q-btn @click="editPage(item.nid, item.nid_1)" rounded class="bg_botn_azul" text-color="white" icon-right="visibility" :label="(!auditor) ? 'Ver Formulario' : 'Auditar'" />
                                  </td>
                                </tr>
                            </table>
                            </div>
                            <q-btn @click="editPage(item.nid, item.nid_1)" rounded class="bg_botn_azul" text-color="white" icon-right="file_download" label="Descargar Excel" />
                        </q-tab-panel>
                    </q-tab-panels>
                </q-card>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import configServices from '../services/config'

export default {
  name: 'reportes',
  data () {
    return {
      sliders: true,
      patients: [],
      search: null,
      tab: 'finalizados',
      finished: [],
      initialDate: '',
      finalDate: '',
      user: {},
      auditor: false,
      allFinished: []
    }
  },
  created () {
    this.getRegistros()
    this.user = JSON.parse(localStorage.getItem('user'))
    if (this.user !== {}) {
      this.user.roles.map((item, key) => {
        if (item === 'auditor') {
          this.auditor = true
        }
      })
    }
  },
  methods: {
    crearRegistro (nid) {
      localStorage.setItem('patientNid', nid)
      this.$router.push('/crear-registro-vih')
    },
    editPage (nid, patient) {
      localStorage.setItem('registerNid', nid)
      localStorage.setItem('patientNid', patient)
      localStorage.setItem('step', '')
      this.$router.push('/crear-registro-vih')
    },
    setFilter () {
      this.$refs.qDateFinal.hide()
      this.$refs.qDateInitial.hide()
      if (this.finalDate !== '') {
        this.finished = []
        this.allFinished.map((item, key) => {
          if (Date.parse(item.created) >= Date.parse(this.initialDate) && Date.parse(item.created) <= Date.parse(this.finalDate)) {
            this.finished.push(item)
          }
        })

        if (this.finished.length === 0) {
          this.$swal('Advertencia', 'No hay registros para los filtros seleccionados', 'error')
        }
      }
    },
    getRegistros () {
      var _this = this
      configServices.loadData(this, 'registros/finalizado/json/', {
        callBack: (data) => {
          data.map((item, key) => {
            var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json = JSON.parse(json)

            var jsonPatient = data[key].field_json_1.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json_1 = JSON.parse(jsonPatient)
          })

          _this.finished = data
          _this.allFinished = data
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
