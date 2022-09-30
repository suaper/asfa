<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md all_width ">
        <div class="w_1200 q-pd-md">
            <h3>Bienvenido Dashboard</h3>
        </div>
        <div class="w_1200 bg_white q-pa-xl">
            <div class="row cien flex header_two">
                <div class="col-3">
                    <h2>Registros</h2>
                </div>

                <div class="w_50">
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
                <div class="desc_seccion">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem</p>
                </div>
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
                                <table class="grilla">
                                    <tr>
                                        <td>
                                            <q-icon name="person" class="azul_iconos" size="25px" />
                                            <span class="name_usuario">Juan Lopez</span>
                                        </td>
                                        <td class="action">
                                            <q-btn @click="crearRegistro" rounded class="bg_botn_azul" text-color="white" icon-right="add" label="Crear Registro" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <q-icon name="person" class="azul_iconos" size="25px" />
                                            <span class="name_usuario">Juan Lopez</span>
                                        </td>
                                        <td class="action">
                                            <q-btn @click="crearRegistro" rounded class="bg_botn_azul" text-color="white" icon-right="add" label="Crear Registro" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <q-icon name="person" class="azul_iconos" size="25px" />
                                            <span class="name_usuario">Juan Lopez</span>
                                        </td>
                                        <td class="action">
                                            <q-btn @click="crearRegistro" rounded class="bg_botn_azul" text-color="white" icon-right="add" label="Crear Registro" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="borradores">
                            <div class="wrp_table tipo_grilla">
                                <table class="grilla">
                                    <tr>
                                        <td>
                                            <q-icon name="person" class="azul_iconos" size="25px" />
                                            <span class="name_usuario">Juan Lopez</span>
                                        </td>
                                        <td class="action">
                                            <q-btn @click="editPage" rounded class="bg_botn_azul" text-color="white" icon-right="visibility" label="Ver Formulario" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <q-icon name="person" class="azul_iconos" size="25px" />
                                            <span class="name_usuario">Juan Lopez</span>
                                        </td>
                                        <td class="action">
                                            <q-btn @click="editPage" rounded class="bg_botn_azul" text-color="white" icon-right="visibility" label="Ver Formulario" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <q-icon name="person" class="azul_iconos" size="25px" />
                                            <span class="name_usuario">Juan Lopez</span>
                                        </td>
                                        <td class="action">
                                            <q-btn @click="editPage" rounded class="bg_botn_azul" text-color="white" icon-right="visibility" label="Ver Formulario" />
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="pendiente">
                            <div class="wrp_table tipo_grilla">
                                <table class="grilla">
                                    <tr>
                                        <td>
                                            <q-icon name="person" class="azul_iconos" size="25px" />
                                            <span class="name_usuario">Juan Lopez</span>
                                        </td>
                                        <td class="action">
                                            <q-btn @click="editPage" rounded class="bg_botn_azul" text-color="white" icon-right="visibility" label="Ver Formulario" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <q-icon name="person" class="azul_iconos" size="25px" />
                                            <span class="name_usuario">Juan Lopez</span>
                                        </td>
                                        <td class="action">
                                            <q-btn @click="editPage" rounded class="bg_botn_azul" text-color="white" icon-right="visibility" label="Ver Formulario" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <q-icon name="person" class="azul_iconos" size="25px" />
                                            <span class="name_usuario">Juan Lopez</span>
                                        </td>
                                        <td class="action">
                                            <q-btn @click="editPage" rounded class="bg_botn_azul" text-color="white" icon-right="visibility" label="Ver Formulario" />
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
      search: '',
      tab: 'busquedas'
    }
  },
  created () {
    this.getPatients()
  },
  methods: {
    crearRegistro () {
      this.$router.push('/crear-registro-vih')
    },
    editPage (nid) {

    },
    executeSearch () {
      var _this = this

      if (this.search !== '') {
        configServices.loadData(this, 'pacientes/json/?field_json_value=' + this.search, {
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
