<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md all_width cien">
        <div class="w_1200 q-pd-md cien">
            <h3 class="title_out_content">Bienvenido Dashboard</h3>
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
                    v-if="loadedPatient"
                    >
                    <q-tab name="registro_vih" label="Registro Paciente VIH" v-if="patient.field_json.program === 'VIH'" />
                    <q-tab name="registro_cancer" label="Registro paciente Cancer" v-if="patient.field_json.program === 'Cancer'"  />
                    <q-tab name="registro_reumatoide" label="Registro paciente reumatoide" v-if="patient.field_json.program === 'Reumatoide'"  />
                    <q-tab name="registro_erc" label="Registro paciente ERC" v-if="patient.field_json.program === 'ERC'"  />
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
                                            <span class="edad">{{ patient.age }} años</span>
                                            <q-btn rounded class="bg_botn_verde btn_crear" @click="popperfil = true" text-color="white" icon-right="person" label="Ver perfil" />
                                        </li>
                                    </ul>
                                </div>

                                <div class="w_50">
                                    <img alt="logo" src="../assets/sellos-icontec.png"/>
                                </div>
                            </div>
                            <hr>
                            <ul class="list_resumen">
                                <li>
                                    <a href="#" @click="goToStep($event, 'FirstStep')"><span>Información de mujeres gestantes</span>  <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'" @click="goToStep($event, 'SecondStep')"><span>Información de menores de 12 meses hijos o hijas de madres que viven con VIH </span><q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'" @click="goToStep($event, 'SecondStep')"><span>Información de personas con tuberculosis activa</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'ThirdStep')"><span>Información de personas que viven con VIH</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'FourthStep')"><span>Terapia Antirretroviral (TAR) Inicial</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'FiveStep')"><span>Patologías definitorias de SIDA (diagnosticadas durante o después del diagnóstico de VIH)</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'SixStep')"><span>Condición actual de la persona que vive con VIH</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'SevenStep')"><span>Terapia Antirretroviral (TAR) Actual</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'EightStep')"><span>Intervenciones de prevención en la persona que vive con VIH</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'NineStep')"><span>Profilaxis en el período de reporte</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'NineStep')"><span>Situación administrativa a la fecha de corte</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                            </ul>
                            <div class="row un_item cien resumen_note" v-if="comodines.length !== 0 && !auditor">
                              <div class="anotaciones_pdf doc-note" >
                                <h5 class="titulo_nota resalta">
                                  ¡ Importante !
                                </h5>
                                <ul>
                                  <li v-for="(item, key) in comodines" :key="key">En la sección de Información de {{ item.section }} el campo {{ item.field }} esta con información predeterminada o sin diligenciar, realizar cambios correspondientes.</li>
                                </ul>
                              </div>
                            </div>
                            <div class="item align_right cien q-mt-xl">
                                <q-btn v-if="!auditor" rounded class="bg_botn_verde btn_crear" type="submit" text-color="white" icon-right="check_circle_outline" label="Finalizar" />
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="registro_cancer">
                          <div class="row cien flex header_two">
                                <div class="info_user_top">
                                    <ul>
                                        <li><img alt="logo" src="../assets/iconos/perfil-paciente1.png"/></li>
                                        <li>
                                          <strong>{{ patient.title }}</strong>
                                            <span class="edad">{{ patient.age }} años</span>
                                            <q-btn rounded class="bg_botn_verde btn_crear" @click="popperfil = true" text-color="white" icon-right="person" label="Ver perfil" />
                                        </li>
                                    </ul>
                                </div>

                                <div class="w_50">
                                    <img alt="logo" src="../assets/sellos-icontec.png"/>
                                </div>
                            </div>
                            <hr>
                            <ul class="list_resumen">
                                <li>
                                    <a href="#" @click="goToStep($event, 'FirstStep')"><span>INFORMACION RELACIONADA A DIAGNÓSTICO, ESTADIFICACIÓN Y OBJETIVO DEL TRATAMIENTO INICIAL</span>  <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'SecondStep')"><span>ANTECEDENTES AL DIAGNÓSTICO DEL CÁNCER REPORTADO</span><q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'ThirdStep')"><span>INFORMACIÓN ESPECÍFICA DE TERAPIA SISTÉMICA E INTRATECAL EN EL PERIODO DE REPORTE ACTUAL</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'FourthStep')"><span>INFORMACIÓN ESPECÍFICA DE CIRUGÍA EN EL PERIODO DE REPORTE ACTUAL</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'FiveStep')"><span>INFORMACIÓN ESPECÍFICA DE RADIOTERAPIA EN EL PERIODO DE REPORTE ACTUAL</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'SixStep')"><span>INFORMACIÓN ESPECÍFICA DE TRASPLANTE DE CÉLULAS MADRE HEMATOPOYÉTICAS (INCLUYE MÉDULA ÓSEA) EN EL PERIODO DE REPORTE ACTUAL</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'SevenStep')"><span>INFORMACIÓN ESPECÍFICA DE TRATAMIENTO COMPLEMENTARIO EN EL PERIODO DE REPORTE ACTUAL</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'EightStep')"><span>SITUACIÓN ACTUAL DEL USUARIO (A LA FECHA DE CORTE -1º de enero de 2022</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'EightStep')"><span>RESULTADO FINAL DE MANEJO ONCOLÓGICO EN ESTE PERIODO DE REPORTE</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                            </ul>
                            <div class="row un_item cien resumen_note" v-if="comodines.length !== 0 && !auditor">
                              <div class="anotaciones_pdf doc-note" >
                                <h5 class="titulo_nota resalta">
                                  ¡ Importante !
                                </h5>
                                <ul>
                                  <li v-for="(item, key) in comodines" :key="key">En la sección de Información de {{ item.section }} el campo {{ item.field }} esta con información predeterminada o sin diligenciar, realizar cambios correspondientes.</li>
                                </ul>
                              </div>
                            </div>
                            <div class="item align_right cien q-mt-xl">
                                <q-btn v-if="!auditor" rounded class="bg_botn_verde btn_crear" type="submit" text-color="white" icon-right="check_circle_outline" label="Finalizar" />
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="registro_reumatoide">
                          <div class="row cien flex header_two">
                                <div class="info_user_top">
                                    <ul>
                                        <li><img alt="logo" src="../assets/iconos/perfil-paciente1.png"/></li>
                                        <li>
                                          <strong>{{ patient.title }}</strong>
                                            <span class="edad">{{ patient.age }} años</span>
                                            <q-btn rounded class="bg_botn_verde btn_crear" @click="popperfil = true" text-color="white" icon-right="person" label="Ver perfil" />
                                        </li>
                                    </ul>
                                </div>

                                <div class="w_50">
                                    <img alt="logo" src="../assets/sellos-icontec.png"/>
                                </div>
                            </div>
                            <hr>
                            <ul class="list_resumen">
                                <li>
                                    <a href="#" @click="goToStep($event, 'FirstStep')"><span>INFORMACION RELACIONADA AL DIAGNÓSTICO Y TRATAMIENTO INICIAL</span>  <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'SecondStep')"><span>Medicamentos al momento del diagnóstico</span><q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'ThirdStep')"><span>Medicamentos al corte actual</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                            </ul>
                            <div class="row un_item cien resumen_note" v-if="comodines.length !== 0 && !auditor">
                              <div class="anotaciones_pdf doc-note" >
                                <h5 class="titulo_nota resalta">
                                  ¡ Importante !
                                </h5>
                                <ul>
                                  <li v-for="(item, key) in comodines" :key="key">En la sección de Información de {{ item.section }} el campo {{ item.field }} esta con información predeterminada o sin diligenciar, realizar cambios correspondientes.</li>
                                </ul>
                              </div>
                            </div>
                            <div class="item align_right cien q-mt-xl">
                                <q-btn v-if="!auditor" rounded class="bg_botn_verde btn_crear" type="submit" text-color="white" icon-right="check_circle_outline" label="Finalizar" />
                            </div>
                        </q-tab-panel>
                        <q-tab-panel name="registro_erc">
                          <div class="row cien flex header_two">
                                <div class="info_user_top">
                                    <ul>
                                        <li><img alt="logo" src="../assets/iconos/perfil-paciente1.png"/></li>
                                        <li>
                                          <strong>{{ patient.title }}</strong>
                                            <span class="edad">{{ patient.age }} años</span>
                                            <q-btn rounded class="bg_botn_verde btn_crear" @click="popperfil = true" text-color="white" icon-right="person" label="Ver perfil" />
                                        </li>
                                    </ul>
                                </div>

                                <div class="w_50">
                                    <img alt="logo" src="../assets/sellos-icontec.png"/>
                                </div>
                            </div>
                            <hr>
                            <ul class="list_resumen">
                                <li>
                                    <a href="#" @click="goToStep($event, 'FirstStep')"><span>INFORMACIÓN GENERAL RELACIONADA CON LAS VARIABLES CLÍNICAS Y PARACLÍNICAS DE LAS ENFERMEDADES PRECURSORAS</span>  <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'SecondStep')"><span>INFORMACIÓN RELACIONADA CON DIAGNÓSTICO Y TRATAMIENTO DE LA ENFERMEDAD RENAL CRÓNICA - 1</span><q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'ThirdStep')"><span>INFORMACIÓN RELACIONADA CON DIAGNÓSTICO Y TRATAMIENTO DE LA ENFERMEDAD RENAL CRÓNICA - 2</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                            </ul>
                            <div class="row un_item cien resumen_note" v-if="comodines.length !== 0 && !auditor">
                              <div class="anotaciones_pdf doc-note" >
                                <h5 class="titulo_nota resalta">
                                  ¡ Importante !
                                </h5>
                                <ul>
                                  <li v-for="(item, key) in comodines" :key="key">En la sección de Información de {{ item.section }} el campo {{ item.field }} esta con información predeterminada o sin diligenciar, realizar cambios correspondientes.</li>
                                </ul>
                              </div>
                            </div>
                            <div class="item align_right cien q-mt-xl">
                                <q-btn v-if="!auditor" rounded class="bg_botn_verde btn_crear" type="submit" text-color="white" icon-right="check_circle_outline" label="Finalizar" />
                            </div>
                        </q-tab-panel>
                    </q-tab-panels>
                </q-card>
            </div>
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
  </q-page>
</template>

<script>
import configServices from '../services/config'
import PopPerfil from 'pages/componentes/PopPerfil'

export default {
  name: 'resumen',
  components: {
    PopPerfil
  },
  data () {
    return {
      sliders: true,
      patients: [],
      search: '',
      tab: '',
      comodines: [],
      auditor: false,
      loadedPatient: false,
      patient: {},
      popperfil: false,
      data: {
        pregnantWoman: '',
        tumorSolidoCompatibles: {
          id: '',
          label: ''
        },
        riesgosLeucemiaPediatra: {
          id: '',
          label: ''
        }
      }
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('user'))
    if (this.user !== {}) {
      this.user.roles.map((item, key) => {
        if (item === 'auditor') {
          this.auditor = true
        }
      })
    }

    this.registerNid = localStorage.getItem('registerNid')

    if (this.registerNid !== '') {
      this.getRegister()
    }

    const comodines = localStorage.getItem('comodines')

    if (typeof comodines !== 'undefined' && comodines !== '' && comodines !== null) {
      this.comodines = JSON.parse(comodines)
    }

    this.patientNid = localStorage.getItem('patientNid')

    if (this.patientNid !== '') {
      this.getPatient()
    }
  },
  methods: {
    getRegister () {
      var _this = this

      configServices.loadData(this, 'registros/json/' + this.registerNid, {
        callBack: (data) => {
          data.map((item, key) => {
            var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json = JSON.parse(json)

            var jsonPatient = data[key].field_json_1.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json_1 = JSON.parse(jsonPatient)
          })

          _this.data = data[0].field_json
          _this.$q.loading.hide()
        }
      })
    },
    goToStep (e, step) {
      e.preventDefault()

      localStorage.setItem('step', step)
      this.$router.push('/crear-registro-vih')
    },
    finishRegister (nid) {
      var _this = this
      var data = {
        type: 'saveRegister',
        user: this.user.uid,
        status: 'Finalizado'
      }

      if (this.registerNid !== '') {
        data.id = this.registerNid
      }

      var patient = localStorage.getItem('patientNid')

      if (patient !== '') {
        data.patient = patient
      }

      configServices.consumerStandar(this, 'asfa-rest/post', data, {
        callBack: (data) => {
          if (typeof data.error !== 'undefined') {
            return _this.$swal('Advertencia', 'Error al crear registro verifique que no haya un registro previamente creado para el paciente', 'error')
          }

          return _this.$router.push('/resumen')
        }
      })
    },
    getPatient () {
      var _this = this
      configServices.loadData(this, 'pacientes/json/' + this.patientNid, {
        callBack: (data) => {
          data.map((item, key) => {
            var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json = JSON.parse(json)
          })

          this.tab = 'registro_vih'

          switch (data[0].field_json.program) {
            case 'Cancer':
              this.tab = 'registro_cancer'
              break
            case 'Reumatoide':
              this.tab = 'registro_reumatoide'
              break
            case 'ERC':
              this.tab = 'registro_erc'
              break
          }

          console.log(this.tab)

          var birthdate = data[0].field_json.birthdate.split('-')
          var date = birthdate[1] + '/' + birthdate[2] + '/' + birthdate[0]

          var dob = new Date(date)
          var monthDiff = Date.now() - dob.getTime()
          var ageDt = new Date(monthDiff)
          var year = ageDt.getUTCFullYear()
          var age = Math.abs(year - 1970)

          _this.patient = data[0]
          _this.patient.age = age

          _this.patient = data[0]
          _this.loadedPatient = true
          _this.$q.loading.hide()
        }
      })
    }
  }
}
</script>
