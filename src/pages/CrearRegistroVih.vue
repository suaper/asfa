<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md all_width cien">
        <div class="w_1200 q-pd-md cien">
            <h3 class="title_out_content">Bienvenido Dashboard</h3>
            <h2>prueba</h2>
        </div>
        <div class="w_1200 bg_white q-pa-xl cien">
            <div class="wrp_table tipo_grilla q-mt-xl">
                <q-card class="grillas_tabs tabs_forms">
                    <q-tabs
                    v-model="tab"
                    dense
                    class="text-grey"
                    active-color="primary"
                    indicator-color="primary"
                    align="justify"
                    >
                    <q-tab name="registro_vih" label="Registro Paciente VIH" />
                    <q-tab name="registro_cancer" label="Registro paciente Cancer" />
                    <q-tab name="registro_reumatoide" label="Registro paciente reumatoide" />
                    <q-tab name="registro_erc" label="Registro paciente ERC" />
                    </q-tabs>

                    <q-separator />

                    <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="registro_vih">
                            <div class="row cien flex header_two">
                                <div class="info_user_top">
                                    <ul>
                                        <li><img alt="logo" src="../assets/iconos/perfil-paciente1.png"/></li>
                                        <li>
                                            <strong>{{ patient.title }}</strong>
                                            <span class="edad">25 años</span>
                                            <q-btn rounded class="bg_botn_verde btn_crear" @click="popperfil = true" text-color="white" icon-right="person" label="Ver perfil" />
                                        </li>
                                    </ul>
                                </div>

                                <div class="w_50">
                                    <img alt="logo" src="../assets/sellos-icontec.png"/>
                                </div>
                            </div>
                            <hr>
                            <FormularioVih :patient="patient" v-if="loadedPatient"/>
                        </q-tab-panel>

                        <q-tab-panel name="registro_cancer">

                        </q-tab-panel>

                        <q-tab-panel name="registro_reumatoide">

                        </q-tab-panel>
                        <q-tab-panel name="registro_erc">

                        </q-tab-panel>
                    </q-tab-panels>
                </q-card>
                <q-dialog v-model="popperfil" full-width>
                    <q-card class="pop_perfil">

                      <q-card-section class="q-pa-none">
                        <q-btn class="close_pop" icon="close" flat round dense v-close-popup />
                        <PopPerfil :patient="patient" v-if="loadedPatient"/>
                      </q-card-section>
                    </q-card>
                </q-dialog>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>
import FormularioVih from 'pages/componentes/FormularioVih'
import PopPerfil from 'pages/componentes/PopPerfil'
import configServices from '../services/config'

export default {
  name: 'registros',
  components: {
    FormularioVih,
    PopPerfil
  },
  data () {
    return {
      sliders: true,
      patient: {},
      search: '',
      tab: 'registro_vih',
      loadedPatient: false,
      popperfil: false
    }
  },
  created () {
    this.patientNid = localStorage.getItem('patientNid')

    if (this.patientNid !== '') {
      this.getPatient()
    }
  },
  methods: {
    editPage (nid) {

    },
    getPatient () {
      var _this = this
      configServices.loadData(this, 'pacientes/json/' + this.patientNid, {
        callBack: (data) => {
          data.map((item, key) => {
            var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json = JSON.parse(json)
          })

          _this.patient = data[0]
          console.log(_this.patient)
          _this.loadedPatient = true
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
