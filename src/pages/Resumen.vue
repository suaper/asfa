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
                                            <strong>Maria Lopez</strong>
                                            <span class="edad">25 años</span>
                                            <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="person" label="Ver perfil" />
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
                                    <a href="#" @click="goToStep($event, 'SecondStep')"><span>Información de menores de 12 meses hijos o hijas de madres que viven con VIH </span><q-icon name="edit" class="blanco_iconos" size="25px" /></a>
                                </li>
                                <li>
                                    <a href="#" @click="goToStep($event, 'SecondStep')"><span>Información de personas con tuberculosis activa</span> <q-icon name="edit" class="blanco_iconos" size="25px" /></a>
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
                            <div class="row un_item cien resumen_note" v-if="comodines.length !== 0">
                              <div class="anotaciones_pdf doc-note">
                                <h5 class="titulo_nota resalta">
                                  ¡ Importante !
                                </h5>
                                <ul>
                                  <li v-for="(item, key) in comodines" :key="key">En la sección de Información de {{ item.section }} el campo {{ item.field }} esta con información predeterminada o sin diligenciar, realizar cambios correspondientes.</li>
                                </ul>
                              </div>
                                <div class="item align_right cien q-mt-xl">
                                    <q-btn rounded class="bg_botn_verde btn_crear" type="submit" text-color="white" icon-right="check_circle_outline" label="Finalizar" />
                                </div>
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="registro_cancer">

                        </q-tab-panel>

                        <q-tab-panel name="registro_reumatoide">

                        </q-tab-panel>
                        <q-tab-panel name="registro_erc">

                        </q-tab-panel>
                    </q-tab-panels>
                </q-card>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'resumen',
  data () {
    return {
      sliders: true,
      patients: [],
      search: '',
      tab: 'registro_vih',
      comodines: []
    }
  },
  created () {
    const comodines = localStorage.getItem('comodines')

    if (typeof comodines !== 'undefined' && comodines !== '' && comodines !== null) {
      this.comodines = JSON.parse(comodines)
    }
  },
  methods: {
    goToStep (e, step) {
      e.preventDefault()

      localStorage.setItem('step', step)
      this.$router.push('/crear-registro-vih')
    },
    editPage (nid) {

    }
  }
}
</script>
