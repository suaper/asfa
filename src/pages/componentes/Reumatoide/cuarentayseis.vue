<template>
    <q-form @submit="saveRegister">
      <div class="row flex cien space-betwen" >
          <div class="wrp_forms w_50" v-if="firstStep">
            <h4 class="titulo_fondo w_100">Medicamentos al momento del diagnóstico</h4>

              <div class="row dos_items">
                  <div class="item">
                      <label>46.1. Azatioprina: </label>
                      <q-select rounded standout v-model="data.azatioprina" :options="azatioprina" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>46.2. Ciclosporina:</label>
                      <q-select rounded standout v-model="data.ciclosporina" :options="ciclosporina" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>46.3 Ciclofosfamida: </label>
                      <q-select rounded standout v-model="data.ciclofosfamida" :options="ciclofosfamida" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>46.4. Cloroquina:</label>
                      <q-select rounded standout v-model="data.cloroquina" :options="cloroquina" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>46.5. D-penicilamina: </label>
                      <q-select rounded standout v-model="data.dPenicilamina" :options="dPenicilamina" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>46.6. Etanercept:</label>
                      <q-select rounded standout v-model="data.etanercept" :options="etanercept" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>46.7. Leflunomida:</label>
                      <q-select rounded standout v-model="data.leflunomida" :options="leflunomida" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>46.8. Metotrexate: </label>
                      <q-select rounded standout v-model="data.metotrexate" :options="metotrexate" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>46.9. Rituximab: </label>
                      <q-select rounded standout v-model="data.rituximab" :options="rituximab" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>46.10. Sulfasalazina: </label>
                      <q-select rounded standout v-model="data.sulfasalazina" :options="sulfasalazina" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>47.1. Abatacept: </label>
                      <q-select rounded standout v-model="data.abatacept" :options="abatacept" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>47.2. Adalimumab:</label>
                      <q-select rounded standout v-model="data.adalimumab" :options="adalimumab" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>47.3. Certolizumab: </label>
                      <q-select rounded standout v-model="data.certolizumab" :options="certolizumab" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>47.4. Golimumab:</label>
                      <q-select rounded standout v-model="data.golimumab" :options="golimumab" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>47.5. Hidroxicloroquina: </label>
                      <q-select rounded standout v-model="data.hidroxicloroquina" :options="hidroxicloroquina" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>47.6. Infliximab: </label>
                      <q-select rounded standout v-model="data.infliximab" :options="infliximab" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>47.7. Sales de oro:</label>
                      <q-select rounded standout v-model="data.salesdeOro" :options="salesdeOro" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>47.8. Tocilizumab: </label>
                      <q-select rounded standout v-model="data.tocilizumab" :options="tocilizumab" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>47.9. Tofacitinib: </label>
                      <q-select rounded standout v-model="data.tofacitinib" :options="tofacitinib" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>47.10. Anakinra: </label>
                      <q-select rounded standout v-model="data.anakinra" :options="anakinra" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>47.11. Otro medicamento DMARD No enunciado en variables 46.1 a 47.10 (medicamento1):  </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.otroMedicamentoUno"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>47.12. Otro medicamento DMARD No enunciado en variables 46.1 a 47.10 (medicamento2) </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.otroMedicamentoDos"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>47.13. Otro medicamento DMARD No enunciado en variables 46.1a 47.10 (medicamento3) R</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.otroMedicamentoTres"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>47.14. Otro medicamento DMARD No enunciado en variables 46.1 a 47.10 (medicamento4) </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.otroMedicamentoCuatro"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>45.7. Tamizaje para TB realizado dentro del período antes de inicio o cambio de DMARD BIOLÓGICOS (Fármacos Antirreumáticos Modificadores de la Enfermedad como: Abatacept, Adalimumab, Anakinra, Certolizumab, Etanercept, Golimumab, Infliximab, Rituximab, Tocilizumab) o DMARD de compuestos químicos sintéticos específicos(Tofacitinib, Baricitinib).</label>
                      <q-select rounded standout v-model="data.tamizajeParaTb" :options="tamizajeParaTb" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>48. Peso último semestre: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.pesoUltimoSemestre"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>49. Radiografía de manos (últimas realizadas, diferente a la del diagnóstico): </label>
                      <q-select rounded standout v-model="data.radiografiaDeManosUltimas" :options="radiografiaDeManosUltimas" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>50. Radiografía de pies (últimas realizadas, diferente a la del diagnóstico): </label>
                      <q-select rounded standout v-model="data.radiografiaDePiesUltimas" :options="radiografiaDePiesUltimas" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>51. (Proteína C Reactiva) de seguimiento:</label>
                      <q-select rounded standout v-model="data.proteinaCReactiva" :options="proteinaCReactiva" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52. VSG (Velocidad de Sedimentación globular) de seguimiento: R</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.vsgDeSequimiento"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>53. Hemoglobina de seguimiento:</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.hemoglobinaSeguimiento"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>54. Leucocitos de seguimiento: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.leucocitosSeguimiento"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>55. Creatinina de seguimiento: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.creatininaSeguimiento"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>56. TFG de seguimiento: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.tfgSeguimiento"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>57. Parcial de Orina de seguimiento: </label>
                      <q-select rounded standout v-model="data.parcialDeOrinaSeguimiento" :options="parcialDeOrinaSeguimiento" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>58. ALT de seguimiento: </label>
                      <q-select rounded standout v-model="data.altSeguimiento" :options="altSeguimiento" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>59. HTA actual:</label>
                      <q-select rounded standout v-model="data.htaActual" :options="htaActual" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>60. DM actual: </label>
                      <q-select rounded standout v-model="data.dmActual" :options="dmActual" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>61. ECV (Enfermedad cardiovascular) actual: </label>
                      <q-select rounded standout v-model="data.ecvActual" :options="ecvActual" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>62. ERC actual:</label>
                      <q-select rounded standout v-model="data.ercActual" :options="ercActual" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>63. Osteoporosis actual: </label>
                      <q-select rounded standout v-model="data.osteoporosisActual" :options="osteoporosisActual" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>64. Síndrome de Sjögren actual: </label>
                      <q-select rounded standout v-model="data.sindromeActual" :options="sindromeActual" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                     <label>65. Fecha del último DAS 28 realizado:</label>
                      <q-input filled v-model="data.fechaUltimoDas">
                        <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                            <q-date v-model="data.fechaUltimoDas">
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
                      <label>66. Profesional que realizó el último DAS 28: </label>
                      <q-select rounded standout v-model="data.profesionalUltimoDas" :options="profesionalUltimoDas" label="Seleccionar" />
                  </div>
              </div>

              <div class="dos_items">
                  <div class="item">
                      <label>67. Resultado del último DAS 28:</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.resultadoUltimoDas"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>68. Estado de actividad actual de la AR según DAS 28: </label>
                      <q-select rounded standout v-model="data.estadoActividadActual" :options="estadoActividadActual" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>69. Fecha del último HAQ (Health Assessment Questionnaire) realizado: </label>
                      <q-input filled v-model="data.fechaUltimoHaq">
                        <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                            <q-date v-model="data.fechaUltimoHaq">
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
                      <label>70. Resultado del último HAQ (Health Assessment Questionnaire) realizado: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.resultadoUltimoHaq"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="dos_items">
                  <div class="item">
                      <label>71.1. Analgésicos No Opioides (Acetaminofén - Dipirona): </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.AlangesicosNoOpioides"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>71.2. Analgésicos Opioides (Codeína - Tramadol): </label>
                      <q-select rounded standout v-model="data.AlangesicosSiOpioides" :options="AlangesicosSiOpioides" label="Seleccionar" />
                  </div>
              </div>

              <div class="dos_items">
                  <div class="item">
                      <label>71.3. AINES:</label>
                      <q-select rounded standout v-model="data.ainesS" :options="ainesS" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>71.4. Corticoides:</label>
                      <q-select rounded standout v-model="data.corticoidess" :options="corticoidess" label="Seleccionar" />
                  </div>
              </div>

              <div class="dos_items">
                  <div class="item">
                      <label>71.5. Meses de uso de Glucocorticoides a dosis de 10 mg/día o mayores durante los 12 meses previos a la fecha de reporte: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.mesesGlucocorticoides"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>71.6. Calcio:</label>
                      <q-select rounded standout v-model="data.calcio" :options="calcio" label="Seleccionar" />
                  </div>
              </div>

              <div class="dos_items">
                  <div class="item">
                      <label>71.7. Vitamina D: </label>
                      <q-select rounded standout v-model="data.vitaminaD" :options="vitaminaD" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>72. Fecha inicio tratamiento actual con DMARD (Fármacos Antirreumáticos Modificadores de la Enfermedad sintéticos y biológicos): </label>
                      <q-input filled v-model="data.fechaInicioDmard">
                        <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                            <q-date v-model="data.fechaInicioDmard">
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
            <div class="w_48">
            <q-pdfviewer
              v-model="show"
              type="html5"
              :src="urlSite + pdf"
              content-class="container"
              inner-content-class="container"
              v-if="pdfs.length !== 0"
            />
            <q-btn rounded class="bg_botn_verde btn_crear cambiar_pdf" @click="popcambiarpdf = true" text-color="white" icon-right="autorenew" label="Cambiar pdf" />
            <div class="anotaciones_pdf doc-note" v-if="anotations.length !== 0">
              <h5 class="titulo_nota">
                Anotaciones
              </h5>
              <ul>
                <li v-for="(item, key) in anotations" :key="key"><span>{{ item.title }}</span><q-btn @click="openPopupAnotations(item)" rounded class="bg_botn_azul" text-color="white" icon-right="edit" label="Ver" /></li>
              </ul>
            </div>
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
                <li v-for="(item, key) in pdfs" :key="key">
                    <p><q-icon name="article" class="blanco_iconos" size="25px" /><span>{{ item.title }}</span> </p><a href="#" @click="setPdf($event, item)">Seleccionar</a>
                </li>
              </ul>
            </q-card-section>
          </q-card>
      </q-dialog>

      <q-dialog v-model="popupanotacion">
          <q-card style="width: 700px; max-width: 80vw;" class="pop_cambiarpsf">
            <q-card-section class="q-pa-md">
              <h4>{{ anotation.title }}</h4>
              <div class="desc_pop">
                <p v-html="anotation.body"></p>
              </div>
              <q-btn class="close_pop" icon="close" flat round dense v-close-popup />
            </q-card-section>
          </q-card>
      </q-dialog>
    </q-form>
</template>
////opcion///
<script>
import configServices from '../../services/config'
export default {
  name: 'treintayCatro',
  props: {
    patient: Object
  },
  data () {
    return {
      urlSite: 'http://saspdev.com',
      show: true,
      firstStep: true,
      secondStep: false,
      data: {
        pregnantWoman: ''
      },
      popcambiarpdf: false,
      popupanotacion: false,
      tool: false,
      registerNid: '',
      date: 'YYYY-MM-DD',
      azatioprina: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      ciclosporina: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      ciclofosfamida: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      cloroquina: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      dPenicilamina: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      Etanercept: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      leflunomida: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      metotrexate: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      rituximab: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      sulfasalazina: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      abatacept: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      adalimumab: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      certolizumab: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      golimumab: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      hidroxicloroquina: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      infliximab: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      salesdeOro: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      tocilizumab: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      tofacitinib: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      anakinra: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      tamizajeParaTb: [
        { id: '0', label:"No"},
        { id: '1', label:"Si"},
        { id: '2', label:" No aplica (porque el paciente no inició DMARD en el período ni cambio DMARD en el período) incluir abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      radiografiaDeManosUltimas: [
        { id: '0', label:" Sin erosiones."},
        { id: '1', label:"Con erosiones."},
        { id: '300', label:"Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      proteinaCReactiva: [
        { id: '0', label:"No reactiva."},
        { id: '1', label:"Reactiva"},
        { id: '300', label:"Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      velocidadDeSedimentacion: [
        { id: '0', label:"No reactiva."},
        { id: '1', label:"Reactiva"},
        { id: '300', label:"Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      parcialDeOrinaSeguimiento: [
        { id: '0', label:"Sin proteinuria."},
        { id: '1', label:"Con proteinuria."},
        { id: '300', label:"Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      altSeguimiento: [
        { id: '0', label:"Normal."},
        { id: '1', label:"Anormal."},
        { id: '300', label:": Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      htaActual: [
        { id: '0', label:"No."},
        { id: '1', label:"Si."},
        { id: '300', label:": Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      dmActual: [
        { id: '0', label:"No."},
        { id: '1', label:"Si."},
        { id: '300', label:": Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      ecvActual: [
        { id: '0', label:"No."},
        { id: '1', label:"Si."},
        { id: '300', label:": Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      ercActual: [
        { id: '0', label:"No."},
        { id: '1', label:"Si."},
        { id: '300', label:": Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      osteoporosisActual: [
        { id: '0', label:"No."},
        { id: '1', label:"Si."},
        { id: '300', label:": Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      sindromeActual: [
        { id: '0', label:"No."},
        { id: '1', label:"Si."},
        { id: '300', label:": Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      profesionalUltimoDas: [
        { id: '1', label:" Médico general." },
        { id: '2', label:" Médico familiar." },
        { id: '3', label:" Internista." },
        { id: '4', label:" Fisiatra." },
        { id: '5', label:" Ortopedista." },
        { id: '6', label:" Reumatólogo." },
        { id: '7', label:" Enfermero." },
        { id: '9', label:" Sin dato o paciente en abandono." },
        { id: '55', label:" No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios" }
      ],
      estadoActividadActual: [
        { id: '0', label:"Remisión (>=0 y <2.6)."},
        { id: '1', label:"Baja actividad (>=2.6 y <=3.2)"},
        { id: '2', label:"Activa (>3.2 y <=10)"},
        { id: '300', label:": Sin dato o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      AlangesicosNoOpioides: [
        { id: '0', label:" No."},
        { id: '1', label:"Si."},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      AlangesicosSiOpioides: [
        { id: '0', label:" No."},
        { id: '1', label:"Si."},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      ainesS: [
        { id: '0', label:" No."},
        { id: '1', label:"Si."},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      corticoidess: [
        { id: '0', label:" No."},
        { id: '1', label:"Si."},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      calcio: [
        { id: '0', label:" No."},
        { id: '1', label:"Si."},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      vitaminaD: [
        { id: '0', label:" No."},
        { id: '1', label:"Si."},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      prueba: [
        { id: '0', label:" No."},
        { id: '1', label:"Si."},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      prueba: [
        { id: '0', label:" No."},
        { id: '1', label:"Si."},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      uSoporteNutricion: [
        { id: '55', label"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ]
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('user'))

    this.registerNid = localStorage.getItem('registerNid')
    if (this.registerNid !== '') {
      this.getRegister()
      this.getAnotations()
    }

    var step = localStorage.getItem('step')
    console.log(step)
    if (step !== '' && step !== null) {
      switch (step) {
        case 'FirstStep':
          this.firstStep = true
          break
        case 'SecondStep':
          this.secondStep = true
          this.firstStep = false
          break
      }
    }
    this.getPdfs()
  },
  methods: {
    openPopupAnotations (item) {
      this.anotation = item
      this.popupanotacion = true
    },
    setPdf (e, item) {
      e.preventDefault()
      this.pdf = item.field_pdf
      this.popcambiarpdf = false
    },
    getPdfs () {
      var _this = this
      configServices.loadData(this, 'pdfs/' + this.patient.nid + '/json', {
        callBack: (data) => {
          if (data.length !== 0) {
            _this.pdfs = data
            _this.pdf = data[0].field_pdf
          }
          _this.$q.loading.hide()
        }
      })
    },
    getAnotations () {
      var _this = this
      configServices.loadData(this, 'anotaciones/' + this.registerNid + '/json', {
        callBack: (data) => {
          _this.anotations = data
          _this.$q.loading.hide()
        }
      })
    },
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
    previousStep () {
      if (this.secondStep) {
        this.firstStep = true
        this.secondStep = false
      }
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

      var comodines = []

      if (this.data.dateCulminationReported === '1833-03-03' || this.data.dateCulminationReported === '1822-02-01' || this.data.dateCulminationReported === '1799-01-01' || this.data.dateCulminationReported === '1811-01-01' || this.data.dateCulminationReported === '1800-01-01' || this.data.dateCulminationReported === '1833-03-03' || this.data.dateCulminationReported === '1845-01-01' || this.data.dateCulminationReported === '1846-01-01') {
        const comodin = {
          section: 'Mujeres Gestantes',
          field: 'Fecha de culminación de la gestación reportada en gestantes con VIH.'
        }

        comodines.push(comodin)
      }

      if (this.data.fum === '1833-03-03' || this.data.fum === '1822-02-01' || this.data.fum === '1799-01-01' || this.data.fum === '1811-01-01' || this.data.fum === '1800-01-01' || this.data.fum === '1833-03-03' || this.data.fum === '1845-01-01' || this.data.fum === '1846-01-01') {
        const comodin = {
          section: 'Mujeres Gestantes',
          field: 'FUM (Fecha de última menstruación confiable)'
        }

        comodines.push(comodin)
      }

      if (this.data.dateReportedPregnancy === '1833-03-03' || this.data.dateReportedPregnancy === '1822-02-01' || this.data.dateReportedPregnancy === '1799-01-01' || this.data.dateReportedPregnancy === '1811-01-01' || this.data.dateReportedPregnancy === '1800-01-01' || this.data.dateReportedPregnancy === '1833-03-03' || this.data.dateReportedPregnancy === '1845-01-01' || this.data.dateReportedPregnancy === '1846-01-01') {
        const comodin = {
          section: 'Mujeres Gestantes',
          field: 'Fecha del diagnóstico de la gestación reportada'
        }

        comodines.push(comodin)
      }

      if (this.data.dateScreeningFirst === '1833-03-03' || this.data.dateScreeningFirst === '1822-02-01' || this.data.dateScreeningFirst === '1799-01-01' || this.data.dateScreeningFirst === '1811-01-01' || this.data.dateScreeningFirst === '1800-01-01' || this.data.dateScreeningFirst === '1833-03-03' || this.data.dateScreeningFirst === '1845-01-01' || this.data.dateScreeningFirst === '1846-01-01') {
        const comodin = {
          section: 'Mujeres Gestantes',
          field: 'Fecha de realización de tamizaje para VIH en el primer trimestre de la gestación'
        }

        comodines.push(comodin)
      }

      if (this.data.dateScreeningSecond === '1833-03-03' || this.data.dateScreeningSecond === '1822-02-01' || this.data.dateScreeningSecond === '1799-01-01' || this.data.dateScreeningSecond === '1811-01-01' || this.data.dateScreeningSecond === '1800-01-01' || this.data.dateScreeningSecond === '1833-03-03' || this.data.dateScreeningSecond === '1845-01-01' || this.data.dateScreeningSecond === '1846-01-01') {
        const comodin = {
          section: 'Mujeres Gestantes',
          field: 'Fecha de realización de tamizaje para VIH en el segundo trimestre de la gestación'
        }

        comodines.push(comodin)
      }

      if (this.data.dateScreeningThird === '1833-03-03' || this.data.dateScreeningThird === '1822-02-01' || this.data.dateScreeningThird === '1799-01-01' || this.data.dateScreeningThird === '1811-01-01' || this.data.dateScreeningThird === '1800-01-01' || this.data.dateScreeningThird === '1833-03-03' || this.data.dateScreeningThird === '1845-01-01' || this.data.dateScreeningThird === '1846-01-01') {
        const comodin = {
          section: 'Mujeres Gestantes',
          field: 'Fecha de realización de tamizaje para VIH en el tercer trimestre de la gestación'
        }

        comodines.push(comodin)
      }

      if (this.data.dateScreeningBirth === '1833-03-03' || this.data.dateScreeningBirth === '1822-02-01' || this.data.dateScreeningBirth === '1799-01-01' || this.data.dateScreeningBirth === '1811-01-01' || this.data.dateScreeningBirth === '1800-01-01' || this.data.dateScreeningBirth === '1833-03-03' || this.data.dateScreeningBirth === '1845-01-01' || this.data.dateScreeningBirth === '1846-01-01') {
        const comodin = {
          section: 'Mujeres Gestantes',
          field: 'Fecha de realización de tamizaje para VIH en el momento del parto'
        }

        comodines.push(comodin)
      }

      if (this.data.resultElisaVih === '1833-03-03' || this.data.resultElisaVih === '1822-02-01' || this.data.resultElisaVih === '1799-01-01' || this.data.resultElisaVih === '1811-01-01' || this.data.resultElisaVih === '1800-01-01' || this.data.resultElisaVih === '1833-03-03' || this.data.resultElisaVih === '1845-01-01' || this.data.resultElisaVih === '1846-01-01') {
        const comodin = {
          section: 'Mujeres Gestantes',
          field: 'Resultado Elisa para VIH.'
        }

        comodines.push(comodin)
      }

      if (comodines.length !== 0) {
        localStorage.setItem('comodines', JSON.stringify(comodines))
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

      if (this.type === 'siguiente') {
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
          if (_this.type === 'borrador') {
            _this.registerNid = data.id
          }
          if (_this.type === 'siguiente') {
            if (typeof _this.data.children === 'undefined' || typeof _this.data.tuberculosis === 'undefined') {
              localStorage.setItem('registerNid', _this.registerNid)
              _this.$router.push('/resumen')
              return
            }

            if (_this.secondStep === false) {
              if (_this.data.children.id !== '0' || _this.data.tuberculosis.id !== '3') {
                _this.firstStep = false
                _this.secondStep = true
              }
            } else {
              _this.$router.push('/resumen')
            }
          }
          if (_this.type === 'borrador' || _this.type === 'finalizado') {
            _this.$swal('', 'Registro guardado correctamente', 'success')
          }
          if (_this.type === 'finalizado') {
            _this.$router.push('/registros')
          }
        }
      })
    }
  }
}
</script>
