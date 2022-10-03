<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md all_width ">
        <div class="w_1200 q-pd-md">
            <h3 class="title_out_content">Bienvenido Dashboard</h3>
        </div>
        <div class="w_1200 bg_white q-pa-xl">
            <div class="row cien flex header_two">
                <div class="col-3 flex wrp_title_icon">
                    <q-icon name="post_add" class="azul_iconos" size="25px" />
                    <h2>Registros</h2>
                </div>

                <div class="w_60 flex-end">
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
                    <q-tab name="busquedas" label="Resultados Busqueda" />
                    <q-tab name="borradores" label="Borradores" />
                    <q-tab name="pendiente" label="Pendientes por corrección" />
                    </q-tabs>

                    <q-separator />

                    <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="busquedas">
                            <div class="wrp_table tipo_grilla">
                                <h4 class="aviso_busque" v-if="patients.length === 0">Por favor busque un paciente</h4>
                                <table class="grilla">
                                  <tr v-for="(item, key) in patients" :key="key">
                                    <td>
                                        <q-icon name="person" class="azul_iconos" size="25px" />
                                        <span class="name_usuario">{{ item.field_json.identification }} - {{ item.title }}</span>
                                    </td>
                                    <td class="action">
                                        <q-btn @click="crearRegistro(item.nid)" rounded class="bg_botn_azul" text-color="white" icon-right="edit" label="Crear Registro" />
                                    </td>
                                  </tr>
                                </table>
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="borradores">
                            <div class="wrp_table tipo_grilla">
                                <table class="grilla">
                                    <tr v-for="(item, key) in drafts" :key="key">
                                      <td>
                                          <q-icon name="person" class="azul_iconos" size="25px" />
                                          <span class="name_usuario">{{ item.field_json_1.identification }} - {{ item.title }}</span>
                                      </td>
                                      <td class="action">
                                          <q-btn @click="editPage(item.nid, item.nid_1)" rounded class="bg_botn_azul" text-color="white" icon-right="edit" label="Completar Registro" />
                                      </td>
                                    </tr>
                                </table>
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="pendiente">
                            <div class="wrp_table tipo_grilla">
                                <table class="grilla">
                                    <tr v-for="(item, key) in fixes" :key="key">
                                      <td>
                                          <q-icon name="person" class="azul_iconos" size="25px" />
                                          <span class="name_usuario">{{ item.field_json_1.identification }} - {{ item.title }}</span>
                                      </td>
                                      <td class="action">
                                          <q-btn @click="editPage(item.nid, item.nid_1)" rounded class="bg_botn_azul" text-color="white" icon-right="edit" label="Crear Registro" />
                                      </td>
                                    </tr>
                                </table>
                            </div>
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
  name: 'registros',
  data () {
    return {
      sliders: true,
      patients: [],
      search: null,
      tab: 'busquedas',
      drafts: [],
      fixes: []
    }
  },
  created () {
    this.getRegistros()

    localStorage.setItem('registerNid', '')
    localStorage.setItem('patientNid', '')
  },
  methods: {
    crearRegistro (nid) {
      localStorage.setItem('patientNid', nid)
      this.$router.push('/crear-registro-vih')
    },
    editPage (nid, patient) {
      localStorage.setItem('registerNid', nid)
      localStorage.setItem('patientNid', patient)
      this.$router.push('/crear-registro-vih')
    },
    getRegistros () {
      var _this = this
      configServices.loadData(this, 'registros/borrador/json/', {
        callBack: (data) => {
          data.map((item, key) => {
            var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json = JSON.parse(json)

            var jsonPatient = data[key].field_json_1.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json_1 = JSON.parse(jsonPatient)
          })

          _this.drafts = data
        }
      })

      configServices.loadData(this, 'registros/correcion/json/', {
        callBack: (data) => {
          data.map((item, key) => {
            var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json = JSON.parse(json)

            var jsonPatient = data[key].field_json_1.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json_1 = JSON.parse(jsonPatient)
          })

          _this.fixes = data

          _this.$q.loading.hide()
        }
      })
    },
    executeSearch () {
      var _this = this
      switch (this.tab) {
        case 'busquedas':
          configServices.loadData(this, 'pacientes/json/?field_json_value=' + this.search, {
            callBack: (data) => {
              _this.search = null
              if (data.length === 0) {
                _this.$q.loading.hide()
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
          break
        case 'borradores':
          configServices.loadData(this, 'registros/borrador/json/?field_json_value=' + this.search, {
            callBack: (data) => {
              _this.search = null
              if (data.length === 0) {
                _this.$q.loading.hide()
                return _this.$swal('Advertencia', 'No se encontraron registros relacionados a su búsqueda', 'error')
              }
              data.map((item, key) => {
                var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
                data[key].field_json = JSON.parse(json)

                var jsonPatient = data[key].field_json_1.replace(/&quot;/g, '\\"').replaceAll('\\', '')
                data[key].field_json_1 = JSON.parse(jsonPatient)
              })

              _this.drafts = data
              _this.$q.loading.hide()
            }
          })
          break
        case 'pendiente':
          configServices.loadData(this, 'registros/correcion/json/?field_json_value=' + this.search, {
            callBack: (data) => {
              _this.search = null
              if (data.length === 0) {
                _this.$q.loading.hide()
                return _this.$swal('Advertencia', 'No se encontraron registros relacionados a su búsqueda', 'error')
              }
              data.map((item, key) => {
                var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
                data[key].field_json = JSON.parse(json)

                var jsonPatient = data[key].field_json_1.replace(/&quot;/g, '\\"').replaceAll('\\', '')
                data[key].field_json_1 = JSON.parse(jsonPatient)
              })

              _this.fixes = data
              _this.$q.loading.hide()
            }
          })
          break
      }
    }
  }
}
</script>
