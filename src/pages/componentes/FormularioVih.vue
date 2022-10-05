<template>
    <q-form @submit="saveRegister">
      <div class="row flex cien space-betwen">
          <h4 class="titulo_fondo w_100">Información de mujeres gestantes</h4>
          <div class="wrp_forms w_50">
              <div class="row un_item">
                  <div class="item">
                      <label class="toltip">Mujer gestante
                          <q-icon @click="tool = true" name="help_outline" class="cursor-pointer"></q-icon>
                        </label>
                      <q-select rounded standout v-model="data.pregnantWoman" :options="pregnantWomans"  label="Seleccionar" :rules="[val => !!val || 'Campo requerido']"/>
                  </div>
              </div>
              <div class="row un_item" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'">
                  <div class="item">
                    <label>FUM (Fecha de última menstruación confiable)</label>
                      <q-input filled v-model="data.fum">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.fum" mask="YYYY-MM-DD">
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
              <!--<div class="row dos_items">
                  <div class="item">
                      <label>Niño o niña menor de 12 meses que es hijo(a) de madre que vive con VIH</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Persona con tuberculosis activa</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
              </div>
              <div class="row un_item">
                  <div class="item">
                      <label>Condición respecto al diagnóstico de infección por VIH</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
              </div>-->
              <div class="row dos_items" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'">
                  <div class="item">
                      <label>Fecha del diagnóstico de la gestación reportada</label>
                      <q-input filled v-model="data.dateReportedPregnancy">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.dateReportedPregnancy">
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
                      <label>Fecha de realización de tamizaje para VIH en el primer trimestre de la gestación</label>
                      <q-input filled v-model="data.dateScreeningFirst">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.dateScreeningFirst"> mask="YYYY-MM-DD"
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
              <div class="row dos_items" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'">
                  <div class="item">
                      <label>Fecha de realización de tamizaje para VIH en el segundo trimestre de la gestación</label>
                      <q-input filled v-model="data.dateScreeningSecond">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.dateScreeningSecond" maKk="YYYY-MM-DD">
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
                      <label>Fecha de realización de tamizaje para VIH en el tercer trimestre de la gestación</label>
                      <q-input filled v-model="data.dateScreeningThird">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.dateScreeningThird"> mask="YYYY-MM-DD"
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
              <div class="row un_item" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'">
                  <div class="item">
                    <label>Fecha de realización de tamizaje para VIH en el momento del parto</label>
                      <q-input filled v-model="data.dateScreeningBirth">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.dateScreeningBirth"> mask="YYYY-MM-DD"
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
              <div class="row dos_items" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'">
                  <div class="item">
                      <label>¿Mujer con diagnóstico de VIH en cualquier momento de la gestación reportada?</label>
                      <q-select rounded standout v-model="data.womanVihReported" :options="womanVihReporteds" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Edad gestacional al momento del diagnóstico de VIH durante la gestación reportada.</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.ageVihReported"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>
              <div class="row dos_items" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'">
                  <div class="item">
                      <label>¿Recibió tratamiento para VIH durante la gestación reportada?</label>
                      <q-select rounded standout v-model="data.receivedTreatmentVih" :options="receivedTreatmentVihs" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Edad gestacional al inicio de la terapia antirretroviral (TAR) en la gestación reportada.</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.ageInitTar"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>
              <div class="row dos_items" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'">
                  <div class="item">
                      <label>Terapia antirretroviral (TAR) durante el intraparto en la gestación reportada.</label>
                      <q-select rounded standout v-model="data.tarIntraBirth" :options="tarIntraBirths" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Resultado de la gestación reportada en gestantes con VIH</label>
                      <q-select rounded standout v-model="data.resultVihReported" :options="resultVihReporteds" label="Seleccionar" />
                  </div>
              </div>
              <div class="row un_item" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'">
                  <div class="item">
                      <label>Fecha de culminación de la gestación reportada en gestantes con VIH.</label>
                      <q-input filled v-model="data.dateCulminationReported">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.dateCulminationReported" mask="YYYY-MM-DD">
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
              <div class="row dos_items" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'">
                  <div class="item">
                      <label>Supresión farmacológica de la lactancia materna en gestantes con VIH.</label>
                      <q-select rounded standout v-model="data.pharmacologicalSuppression" :options="pharmacologicalSuppressions" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Tipo de identificación del recién nacido vivo expuesto al VIH resultado de la gestación reportada.</label>
                      <q-select rounded standout v-model="data.identificationTypeNewbor" :options="identificationsNewbord" label="Seleccionar" />
                  </div>
              </div>
              <div class="row dos_items" v-if="data.pregnantWoman.id !=='3' && data.pregnantWoman.id !== '9'">
                  <div class="item">
                      <label>Número de identificación del recién nacido vivo expuesto al VIH resultado de la gestación reportada</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.identificationNewborn"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Resultado Elisa para VIH.</label>
                      <q-input filled v-model="data.resultElisaVih">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.resultElisaVih" mask="YYYY-MM-DD">
                                  <div class="row items-center justify-end">
                                  <q-btn v-close-popup label="Cerrar" color="primary" flat />
                                  </div>
                              </q-date>
                              </q-popup-proxy>
                          </q-icon>
                          </template>
                      </q-input>
                  </div>
                  <div class="row actions cien q-mt-xl">
                    <div class="item align_right cien">
                      <q-btn rounded class="azul_boton btn_crear" text-color="white" icon-right="save" label="Guardar" type="submit" @click="type = 'borrador'"/>
                    </div>
                    <div class="item cien align_right cien q-mt-md">
                      <q-btn rounded class="bg_botn_white_border_green btn_crear q-mr-md" text-color="white" icon="chevron_left" label="Atrás" />
                      <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />
                    </div>
                  </div>
              </div>
          </div>
          <div class="w_25">
            <q-pdfviewer
              v-model="show"
              type="html5"
              src="http://saspdev.com/asfa/admin/sites/default/files/2022-10/Propuesta Forja Empresas.pdf"
              content-class="container"
              inner-content-class="container"
            />
              <q-btn rounded class="bg_botn_verde btn_crear" @click="popcambiarpdf = true" text-color="white" icon-right="autorenew" label="Cambiar pdf" />
          </div>
      </div>
      <q-dialog v-model="tool">
        <q-card>
          <q-card-section>
            <div class="text-h6 title_pop" align="center">Ejermplo</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
          </q-card-section>

          <q-card-actions align="center">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="popcambiarpdf">
          <q-card style="width: 700px; max-width: 80vw;" class="pop_cambiarpsf">
            <q-card-section class="q-pa-md">
              <h4>Listado de pdf</h4>
              <div class="desc_pop">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero.</p>
              </div>
              <q-btn class="close_pop" icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-card-section class="q-pa-sm listado">
              <ul class="list_pdf">
                <li>
                    <p><q-icon name="article" class="blanco_iconos" size="25px" /><span>Información de mujeres gestantes</span> </p><a href="#">Seleccionar</a>
                </li>
                <li>
                    <p><q-icon name="article" class="blanco_iconos" size="25px" /><span>Información de mujeres gestantes</span> </p><a href="#">Seleccionar</a>
                </li>
                <li>
                    <p><q-icon name="article" class="blanco_iconos" size="25px" /><span>Información de mujeres gestantes</span> </p><a href="#">Seleccionar</a>
                </li>
                <li>
                  <p><q-icon name="article" class="blanco_iconos" size="25px" /><span>Información de mujeres gestantes</span> </p><a href="#">Seleccionar</a>
                </li>
              </ul>
            </q-card-section>
          </q-card>
      </q-dialog>
    </q-form>
</template>

<script>
import configServices from '../../services/config'
export default {
  name: 'FormularioVih',
  props: {
    patient: Object
  },
  data () {
    return {
      show: true,
      data: {
        pregnantWoman: ''
      },
      popcambiarpdf: false,
      tool: false,
      registerNid: '',
      date: 'YYYY-MM-DD',
      pregnantWomans: [
        { id: '1', label: 'Mujer que estaba embarazada al finalizar el periodo de observación.' },
        { id: '2', label: 'Mujer que estuvo embarazada y cuya gestación terminó durante el período de observación(gestación que terminó por parto o aborto)' },
        { id: '3', label: 'Mujer no embarazada durante el periodo de observación.' },
        { id: '9', label: 'No aplica (es hombre).' }
      ],
      womanVihReporteds: [
        { id: '1', label: 'Sí, durante el embarazo.' },
        { id: '2', label: 'Sí, durante el parto.' },
        { id: '3', label: 'Sí, ya tenía diagnóstico confirmado de VIH antes de la gestación.' },
        { id: '4', label: 'No, el diagnóstico de VIH se hizo posterior al parto.' },
        { id: '5', label: 'No, el tamizaje fue negativo.' },
        { id: '6', label: 'No, aún sin diagnóstico definitivo de infección por el VIH.' },
        { id: '7', label: 'No se realizó prueba de VIH durante la gestación reportada.' },
        { id: '9', label: 'No aplica (hombre o mujer no gestante en el periodo de observación reportado).' }
      ],
      ageVihReported: [
        { id: '1', label: 'Si ya tenía diagnóstico de VIH confirmado previo a la gestación' },
        { id: '99', label: 'No aplica (hombre, mujer no gestante o gestante sin VIH)' }
      ],
      receivedTreatmentVihs: [
        { id: '1', label: 'Sí, ya recibía al iniciar el embarazo.' },
        { id: '2', label: 'Sí, inició tratamiento durante el embarazo.' },
        { id: '3', label: 'No ha iniciado TAR.' },
        { id: '4', label: 'No recibió tratamiento durante la gestación reportada.' },
        { id: '9', label: 'No aplica (hombre, mujer no gestante o gestante sin VIH).' }
      ],
      ageInitTars: [
        { id: '1', label: 'Si ya recibía TAR al inicio de la gestación.' },
        { id: '97', label: 'Desconocida (gestante inicia tratamiento en institución diferente a la que reporta y no se dispone del dato).' },
        { id: '98', label: 'No recibió tratamiento durante la gestación reportada.' },
        { id: '99', label: 'No aplica (hombre, mujer no gestante o gestante sin VIH).' }
      ],
      tarIntraBirths: [
        { id: '1', label: 'Sí recibió TAR en el intraparto.' },
        { id: '2', label: 'No recibió TAR en el intraparto.' },
        { id: '3', label: 'No recibió porque la gestación terminó en aborto.' },
        { id: '4', label: 'Aún no ha finalizado la gestación.' },
        { id: '5', label: 'Desconocido (gestante no culmina la gestación en la entidad que reporta y no se dispone del dato)' },
        { id: '9', label: 'No aplica (hombre, mujer no gestante o gestante sin VIH).' }
      ],
      resultVihReporteds: [
        { id: '1', label: 'Recién nacido vivo.' },
        { id: '2', label: 'Mortinato.' },
        { id: '3', label: 'Aborto.' },
        { id: '4', label: 'No ha culminado la gestación.' },
        { id: '9', label: 'No aplica (hombre, mujer no gestante o gestante sin VIH).' }
      ],
      pharmacologicalSuppressions: [
        { id: '1', label: 'Se realizó dentro de las 48 horas post-parto.' },
        { id: '2', label: 'Se realizó posterior a las 48 horas post-parto.' },
        { id: '3', label: 'No se realizó.' },
        { id: '4', label: 'Gestante con VIH que no ha culminado la gestación.' },
        { id: '8', label: 'Desconocido (paciente que no culmina su proceso de gestación en la entidad que reporta, y no se dispone de dato)' },
        { id: '9', label: 'No aplica (hombre, mujer no gestante o gestante sin VIH).' }
      ],
      identificationsNewbord: [
        { id: 'CN', label: 'Certificado de nacido vivo' },
        { id: 'RC', label: 'Registro Civil' },
        { id: 'MS', label: 'Menor sin identificación' },
        { id: 'NA', label: 'No aplica (No ha culminado la gestación o el producto de la gestación fue un aborto o un óbito fetal, hombre, mujer no gestante o gestante sin VIH)' }
      ],
      type: ''
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('user'))

    this.registerNid = localStorage.getItem('registerNid')
    if (this.registerNid !== '') {
      this.getRegister()
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
    saveRegister () {
      var _this = this

      if (typeof this.patient.field_json.sex !== 'undefined') {
        if (this.patient.field_json.sex.id === 'H' && this.data.fum !== '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.dateScreeningFirst !== '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.dateReportedPregnancy !== '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.dateScreeningSecond !== '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.dateScreeningThird !== '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.dateScreeningBirth !== '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.womanVihReported.id !== '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.ageVihReported.id !== '99') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.receivedTreatmentVih.id !== '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.ageInitTar.id !== '99') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.tarIntraBirth.id !== '99') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.resultVihReported.id !== '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.dateCulminationReported !== '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.pharmacologicalSuppression.id !== '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.identificationTypeNewbor.id !== 'NA') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.identificationNewborn !== '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
        }

        if (this.patient.field_json.sex.id === 'H' && this.data.pregnantWoman.id !== '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2885', 'error')
        }
      }

      if (parseInt(this.data.pregnantWoman.id) < 3) {
        var currentDate = new Date('2020-04-01')
        if (this.data.dateReportedPregnancy !== '1845-01-01') {
          if (Date.parse(this.data.dateReportedPregnancy) <= Date.parse(currentDate)) {
            return _this.$swal('Advertencia', 'Error en la validación No. B2890', 'error')
          }
        }

        if (this.data.dateScreeningFirst === '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (this.data.dateScreeningSecond === '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (this.data.dateScreeningThird === '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (this.data.dateScreeningBirth === '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (typeof this.data.womanVihReported !== 'undefined' && this.data.womanVihReported.id === '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (typeof this.data.ageVihReported !== 'undefined' && this.data.ageVihReported.id === '99') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (typeof this.data.receivedTreatmentVih !== 'undefined' && this.data.receivedTreatmentVih.id === '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (typeof this.data.ageInitTar !== 'undefined' && this.data.ageInitTar.id === '99') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (typeof this.data.tarIntraBirth !== 'undefined' && this.data.tarIntraBirth.id === '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (typeof this.data.resultVihReported !== 'undefined' && this.data.resultVihReported.id === '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (this.data.dateCulminationReported === '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }

        if (typeof this.data.pharmacologicalSuppression !== 'undefined' && this.data.pharmacologicalSuppression.id === '9') {
          return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
        }
      }

      var maxDate = new Date('2020-04-01')
      if (this.data.dateScreeningFirst !== '1799-01-01' && this.data.dateScreeningFirst !== '1822-02-01' && this.data.dateScreeningFirst !== '1833-03-03' && this.data.dateScreeningFirst !== '1845-01-01' && this.data.dateScreeningFirst !== '1846-01-01') {
        if (this.data.dateReportedPregnancy !== '1845-01-01' && this.data.dateReportedPregnancy !== '1846-01-01') {
          if (Date.parse(this.data.dateReportedPregnancy) <= Date.parse(maxDate)) {
            return _this.$swal('Advertencia', 'Error en la validación No. B2900', 'error')
          }

          if (this.data.dateScreeningFirst === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5809', 'error')
          }

          if (this.data.dateScreeningSecond === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5809', 'error')
          }

          if (this.data.dateScreeningThird === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5809', 'error')
          }

          if (this.data.dateScreeningBirth === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5809', 'error')
          }
        }

        if (Date.parse(this.data.dateScreeningFirst) < Date.parse(this.data.dateReportedPregnancy)) {
          return _this.$swal('Advertencia', 'Error en la validación No. B2902', 'error')
        }
      }

      if (Date.parse(this.data.dateScreeningFirst) > Date.parse(this.data.dateReportedPregnancy)) {
        if (this.data.dateScreeningSecond === '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5809', 'error')
        }

        if (this.data.dateScreeningThird === '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5809', 'error')
        }

        if (this.data.dateScreeningBirth === '1845-01-01') {
          return _this.$swal('Advertencia', 'Error en la validación No. B5809', 'error')
        }
      }

      if (this.data.dateScreeningSecond !== '1799-01-01' && this.data.dateScreeningSecond !== '1822-02-01' && this.data.dateScreeningSecond !== '1833-03-03' && this.data.dateScreeningSecond !== '1845-01-01' && this.data.dateScreeningSecond !== '1846-01-01') {
        if (Date.parse(this.data.dateScreeningFirst) > Date.parse(maxDate)) {
          if (this.data.dateScreeningSecond !== '1799-01-01' && this.data.dateScreeningSecond !== '1822-02-01' && this.data.dateScreeningSecond !== '1833-03-03' && this.data.dateScreeningSecond !== '1845-01-01' && this.data.dateScreeningSecond !== '1846-01-01') {
            if (Date.parse(this.data.dateScreeningSecond) <= Date.parse(this.data.dateScreeningFirst)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B4117', 'error')
            }
          }

          if (this.data.dateScreeningThird !== '1799-01-01' && this.data.dateScreeningThird !== '1822-02-01' && this.data.dateScreeningThird !== '1833-03-03' && this.data.dateScreeningThird !== '1845-01-01' && this.data.dateScreeningThird !== '1846-01-01') {
            if (Date.parse(this.data.dateScreeningThird) <= Date.parse(this.data.dateScreeningFirst)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B5810', 'error')
            }
          }

          if (this.data.dateScreeningBirth !== '1799-01-01' && this.data.dateScreeningBirth !== '1822-02-01' && this.data.dateScreeningBirth !== '1833-03-03' && this.data.dateScreeningBirth !== '1845-01-01' && this.data.dateScreeningBirth !== '1846-01-01') {
            if (Date.parse(this.data.dateScreeningBirth) <= Date.parse(this.data.dateScreeningFirst)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B5810', 'error')
            }
          }

          if (this.data.dateScreeningBirth === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B4117', 'error')
          }
        }

        if (Date.parse(this.data.dateScreeningSecond) < Date.parse(this.data.dateReportedPregnancy)) {
          return _this.$swal('Advertencia', 'Error en la validación No. B2906', 'error')
        }
      }

      if (this.data.dateScreeningThird !== '1799-01-01' && this.data.dateScreeningThird !== '1822-02-01' && this.data.dateScreeningThird !== '1833-03-03' && this.data.dateScreeningThird !== '1845-01-01' && this.data.dateScreeningThird !== '1846-01-01' && this.data.dateScreeningThird !== '1811-01-01') {
        if (Date.parse(this.data.dateScreeningSecond) > Date.parse(maxDate)) {
          if (Date.parse(this.data.dateScreeningThird) <= Date.parse(this.data.dateScreeningSecond)) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
          }

          var dateMaxThird = new Date('1845-01-01')

          if (Date.parse(this.data.dateScreeningThird) <= Date.parse(dateMaxThird)) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
          }

          if (this.date.dateScreeningBirth === this.data.dateScreeningSecond) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
          }

          if (this.date.dateScreeningBirth === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
          }
        }

        if (Date.parse(this.data.dateScreeningThird) < Date.parse(this.data.dateReportedPregnancy)) {
          return _this.$swal('Advertencia', 'Error en la validación No. B2908', 'error')
        }
      }

      if (this.data.dateScreeningBirth !== '1799-01-01' && this.data.dateScreeningBirth !== '1822-02-01' && this.data.dateScreeningBirth !== '1833-03-03' && this.data.dateScreeningBirth !== '1845-01-01' && this.data.dateScreeningBirth !== '1846-01-01' && this.data.dateScreeningBirth !== '1811-01-01') {
        if (Date.parse(this.data.dateScreeningThird) > Date.parse(maxDate)) {
          if (Date.parse(this.data.dateScreeningBirth) <= Date.parse(this.data.dateScreeningSecond)) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4120', 'error')
          }

          if (this.date.dateScreeningThird === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B4120', 'error')
          }
        }

        if (Date.parse(this.data.dateScreeningBirth) < Date.parse(this.data.dateReportedPregnancy)) {
          return _this.$swal('Advertencia', 'Error en la validación No. B2911', 'error')
        }
      }

      if (typeof this.data.womanVihReported !== 'undefined' && this.data.womanVihReported.id === '1') {
        if (parseInt(this.data.ageVihReported) < 2 || parseInt(this.data.ageVihReported) > 44) {
          return _this.$swal('Advertencia', 'Error en la validación No. B3261', 'error')
        }
      }

      if (typeof this.data.womanVihReported !== 'undefined' && this.data.ageVihReported === '1' && this.data.womanVihReported.id !== '3') {
        return _this.$swal('Advertencia', 'Error en la validación No. B3219', 'error')
      }

      if (parseInt(this.data.pregnantWoman) > 3 && parseInt(this.data.ageVihReported) < 45) {
        return _this.$swal('Advertencia', 'Error en la validación No. B4146', 'error')
      }

      if (typeof this.data.womanVihReported !== 'undefined' && typeof this.data.receivedTreatmentVih !== 'undefined' && this.data.receivedTreatmentVih.id === '1' && this.data.womanVihReported.id !== '3') {
        return _this.$swal('Advertencia', 'Error en la validación No. B3222', 'error')
      }

      if (typeof this.data.receivedTreatmentVih !== 'undefined' && this.data.receivedTreatmentVih.id === '1' && this.data.ageInitTar !== '1') {
        return _this.$swal('Advertencia', 'Error en la validación No. B4147', 'error')
      }

      if (typeof this.data.receivedTreatmentVih !== 'undefined' && this.data.receivedTreatmentVih.id === '3' && this.data.ageInitTar !== '98') {
        return _this.$swal('Advertencia', 'Error en la validación No. B4147', 'error')
      }

      if (typeof this.data.receivedTreatmentVih !== 'undefined' && this.data.receivedTreatmentVih.id === '4' && this.data.ageInitTar !== '98') {
        return _this.$swal('Advertencia', 'Error en la validación No. B4147', 'error')
      }

      if (typeof this.data.receivedTreatmentVih !== 'undefined' && this.data.receivedTreatmentVih.id === '2' && parseInt(this.data.ageInitTar) <= 1) {
        return _this.$swal('Advertencia', 'Error en la validación No. B4147', 'error')
      }

      if (typeof this.data.receivedTreatmentVih !== 'undefined' && this.data.receivedTreatmentVih.id === '2' && parseInt(this.data.ageInitTar) > 98) {
        return _this.$swal('Advertencia', 'Error en la validación No. B4147', 'error')
      }

      if (typeof this.data.tarIntraBirth !== 'undefined' && this.data.tarIntraBirth.id === '4' && this.data.pregnantWoman !== '1') {
        return _this.$swal('Advertencia', 'Error en la validación No. B4150', 'error')
      }

      if (typeof this.data.tarIntraBirth !== 'undefined' && parseInt(this.data.tarIntraBirth.id) < 6 && parseInt(this.data.pregnantWoman) > 3) {
        return _this.$swal('Advertencia', 'Error en la validación No. B4151', 'error')
      }

      if (typeof this.data.resultVihReported !== 'undefined' && this.data.resultVihReported.id === '4' && this.data.pregnantWoman !== '1') {
        return _this.$swal('Advertencia', 'Error en la validación No. B3253', 'error')
      }

      if (typeof this.data.resultVihReported !== 'undefined' && this.data.resultVihReported.id === '4' && this.data.dateCulminationReported !== '1811-01-01') {
        return _this.$swal('Advertencia', 'Error en la validación No. B3253', 'error')
      }

      if (typeof this.data.resultVihReported !== 'undefined' && parseInt(this.data.resultVihReported.id) < 5 && parseInt(this.data.pregnantWoman) > 3) {
        return _this.$swal('Advertencia', 'Error en la validación No. B4153', 'error')
      }

      if (typeof this.data.resultVihReported !== 'undefined' && this.data.resultVihReported.id === '1' && this.data.identificationTypeNewbor.id !== 'CN' && this.data.identificationTypeNewbor.id !== 'RC' && this.data.identificationTypeNewbor.id !== 'MS') {
        return _this.$swal('Advertencia', 'Error en la validación No. B4162', 'error')
      }

      if (this.data.dateCulminationReported !== '1811-01-01' && this.data.dateCulminationReported !== '1800-01-01' && this.data.dateCulminationReported !== '1833-03-03' && this.data.dateCulminationReported !== '1845-01-01' && this.data.dateCulminationReported !== '1846-01-01') {
        if (Date.parse(this.data.dateCulminationReported) < Date.parse(this.data.dateReportedPregnancy)) {
          return _this.$swal('Advertencia', 'Error en la validación No. B2921', 'error')
        }
      }

      if (this.data.dateCulminationReported !== '1845-01-01' && parseInt(this.data.pregnantWoman) > 3) {
        return _this.$swal('Advertencia', 'Error en la validación No. B4154', 'error')
      }

      if (parseInt(this.data.pharmacologicalSuppression) < 9 && parseInt(this.data.pregnantWoman) > 3) {
        return _this.$swal('Advertencia', 'Error en la validación No. B4156', 'error')
      }

      if (typeof this.data.identificationTypeNewbor !== 'undefined' && this.data.identificationTypeNewbor.id === 'NA' && this.data.identificationNewborn !== '9') {
        return _this.$swal('Advertencia', 'Error en la validación No. B4157', 'error')
      }

      var data = {
        type: 'saveRegister',
        data: this.data,
        user: this.user.uid,
        status: 'Finalizado'
      }

      if (this.type === 'borrador') {
        data.status = 'Borrador'
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

          this.registerNid = data.id
          _this.$swal('', 'Registro guardado correctamente', 'success')

          if (this.type !== 'borrador') {
            _this.$router.push('/registros')
          }
        }
      })
    }
  }
}
</script>
