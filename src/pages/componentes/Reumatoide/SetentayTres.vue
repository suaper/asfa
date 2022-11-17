<template>
    <q-form @submit="saveRegister">
      <div class="row flex cien space-betwen" >
          <div class="wrp_forms w_50" v-if="firstStep">
            <h4 class="titulo_fondo w_100">Medicamentos al corte actual</h4>

              <div class="row dos_items">
                  <div class="item">
                      <label>73.1. Azatioprina: </label>
                      <q-select rounded standout v-model="data.azatioprina" :options="azatioprina" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>73.2. Ciclosporina: </label>
                      <q-select rounded standout v-model="data.ciclosporina" :options="ciclosporina" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>73.3. Ciclofosfamida: </label>
                      <q-select rounded standout v-model="data.ciclofosfamida" :options="ciclofosfamida" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>73.4. Cloroquina:</label>
                      <q-select rounded standout v-model="data.cloroquina" :options="cloroquina" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>73.5. D-penicilaimina:</label>
                      <q-select rounded standout v-model="data.dPenicilamina" :options="dPenicilamina" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>73.6. Etanercept: </label>
                      <q-select rounded standout v-model="data.etanercept" :options="etanercept" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>73.7. Leflunomida: </label>
                      <q-select rounded standout v-model="data.leflunomida" :options="leflunomida" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>73.8. Metotrexate:  </label>
                      <q-select rounded standout v-model="data.metotrexate" :options="metotrexate" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>73.9. Rituximab: </label>
                      <q-select rounded standout v-model="data.rituximab" :options="rituximab" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>73.10. Sulfasalazina: </label>
                      <q-select rounded standout v-model="data.sulfasalazina" :options="sulfasalazina" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>74.1. Abatacept: </label>
                      <q-select rounded standout v-model="data.abatacept" :options="abatacept" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>74.2. Adalimumab:</label>
                      <q-select rounded standout v-model="data.adalimumab" :options="adalimumab" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>74.3. Certolizumab: </label>
                      <q-select rounded standout v-model="data.certolizumab" :options="certolizumab" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>74.4. Golimumab:</label>
                      <q-select rounded standout v-model="data.golimumab" :options="golimumab" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>74.5. Hidroxicloroquina: </label>
                      <q-select rounded standout v-model="data.hidroxicloroquina" :options="hidroxicloroquina" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>74.6. Infliximab: </label>
                      <q-select rounded standout v-model="data.infliximab" :options="infliximab" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>74.7. Sales de oro:</label>
                      <q-select rounded standout v-model="data.salesdeOro" :options="salesdeOro" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>74.8. Tocilizumab: </label>
                      <q-select rounded standout v-model="data.tocilizumab" :options="tocilizumab" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>74.9. Tofacitinib: </label>
                      <q-select rounded standout v-model="data.tofacitinib" :options="tofacitinib" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>74.10. Anakinra: </label>
                      <q-select rounded standout v-model="data.anakinra" :options="anakinra" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>74.11. Otro medicamento DMARD No enunciado en variables 73.1 a 74.10 (medicamento1):  </label>
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
                      <label>74.12. Otro medicamento DMARD No enunciado en variables 73.1 a 74.10 (medicamento2) </label>
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
                      <label>74.13. Otro medicamento DMARD No enunciado en variables 73.1a 74.10 (medicamento3) R</label>
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
                      <label>74.14. Otro medicamento DMARD No enunciado en variables 73.1 a 74.10 (medicamento4) </label>
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
                      <label>75.1. Número de consultas con reumatólogo en el último año (1 de julio de 2021 a 30 de junio 2022):</label>
                     <q-input
                          rounded
                          standout
                          v-model="data.NuConsultasReumatologo"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>75.2. Número de consultas con el internista por AR en el último año (1 de julio de 2021 a 30 de junio 2022): </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.NuConsultasInternista"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>75.3. Número de consultas con el médico familiar por AR en el último año (1 de julio de 2021 a 30 de junio 2022): </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.NuConsultasMedico"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>75.4. Reemplazo articular 1 por AR:</label>
                      <q-select rounded standout v-model="data.remplazoArticular" :options="remplazoArticular" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>75.5. Reemplazo articular 2 por AR: </label>
                      <q-select rounded standout v-model="data.remplazoArticularDos" :options="remplazoArticularDos" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>75.6. Reemplazo articular 3 por AR: </label>
                      <q-select rounded standout v-model="data.remplazoArticularTres" :options="remplazoArticularTres" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>775.7. Reemplazo articular 4 por AR:</label>
                      <q-select rounded standout v-model="data.remplazoArticularCuatro" :options="remplazoArticularCuatro" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>76. Número de hospitalizaciones por AR o eventos cardiovasculares relacionados con AR en el último año (1 de julio de 2021 a 30 de junio de 2022): </label>
                     <q-input
                          rounded
                          standout
                          v-model="data.numeroHospitalizacionesAr"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>77. Código de habilitación de la sede de la IPS donde se hace el seguimiento y atención de la AR al paciente actualmente: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.codigoHabilitacion"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>78. Código del municipio de la IPS: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.CodigoMunicipioIps"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>79. Fecha de ingreso a la IPS actual donde se hace el seguimiento y atención de la AR al paciente:  </label>
                      <q-input filled v-model="data.fechaIngresoIps">
                        <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                            <q-date v-model="data.fechaIngresoIps">
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
                      <label>80. Quien hace la atención clínica para AR al paciente actualmente: </label>
                      <q-select rounded standout v-model="data.atencionClinicaAr" :options="atencionClinicaAr" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>81. Novedad del paciente respecto al reporte anterior: l</label>
                      <q-select rounded standout v-model="data.novedadPacienteAnterior" :options="novedadPacienteAnterior" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>82. Fecha de desafiliación de la EAPB: </label>
                      <q-input filled v-model="data.fechaDeDesafiliacion">
                        <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                            <q-date v-model="data.fechaDeDesafiliacion">
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

              <div class="row dos_items">
                  <div class="item">
                      <label>83. EAPB o Ente territorial al cual se trasladó el paciente desafiliado: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.eapbTerritorial"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>84. Fecha de muerte: v</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.fechaDeMuerte"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>85. Causa de muerte:  </label>
                      <q-select rounded standout v-model="data.causaMuerte" :options="causaMuerte" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>86. Costo anual de DMARD incluido en el plan de beneficios (PBS): R</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.costoAnualDmard"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>87. Costo anual de DMARD no incluido en el plan de beneficios (NO PBS): R</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.damrdNoIncluido"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>88. Costo total anual del manejo de la AR: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.ArAnualManejo"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                     <label>89. Costo anual de incapacidades laborales relacionadas con la AR (Solo para personas que se encuentran afiliadas y son cotizantes) </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.costoAnualIncapacidades"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
                  <div class="item">
                      <label>90. Código único serial: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.CodigoUnicoSerial"
                          lazy-rules
                          type="number"
                          >
                      </q-input>
                  </div>
              </div>

              <div class="dos_items">
                  <div class="item">
                      <label>91. Fecha de corte: </label>
                      <q-input filled v-model="data.fechaDeCorte">
                        <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                            <q-date v-model="data.fechaDeCorte">
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
                  </div>
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
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      ciclosporina: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      ciclofosfamida: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      cloroquina: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      dPenicilamina: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      etanercept: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      leflunomida: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      metotrexate: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      rituximab: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      sulfasalazina: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      abatacept: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      adalimumab: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      certolizumab: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      golimumab: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      hidroxicloroquina: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      infliximab: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      salesdeOro: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      tocilizumab: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      tofacitinib: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      anakinra: [
        { id: '0', label:"No recibe"},
        { id: '1', label:"Si recibe"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
      ],
      remplazoArticular: [
        { id: '0', label:" No." },
        { id: '1', label:" Cadera." },
        { id: '2', label:" Rodilla." },
        { id: '3', label:" Tobillo." },
        { id: '4', label:" Hombro." },
        { id: '5', label:" Codo." },
        { id: '55', label:" No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios." }
      ],
      remplazoArticularDos: [
        { id: '0', label:" No." },
        { id: '1', label:" Cadera." },
        { id: '2', label:" Rodilla." },
        { id: '3', label:" Tobillo." },
        { id: '4', label:" Hombro." },
        { id: '5', label:" Codo." },
        { id: '55', label:" No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios." }
      ],
      remplazoArticularTres: [
        { id: '0', label:" No." },
        { id: '1', label:" Cadera." },
        { id: '2', label:" Rodilla." },
        { id: '3', label:" Tobillo." },
        { id: '4', label:" Hombro." },
        { id: '5', label:" Codo." },
        { id: '55', label:" No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios." }
      ],
      remplazoArticularCuatro: [
        { id: '0', label:" No." },
        { id: '1', label:" Cadera." },
        { id: '2', label:" Rodilla." },
        { id: '3', label:" Tobillo." },
        { id: '4', label:" Hombro." },
        { id: '5', label:" Codo." },
        { id: '55', label:" No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios." }
      ],
      atencionClinicaAr: [
        { id: '1', label:" Médico general." },
        { id: '2', label:" Médico familiar." },
        { id: '3', label:" Internista." },
        { id: '4', label:" Fisiatra." },
        { id: '5', label:" Ortopedista." },
        { id: '6', label:" Reumatólogo." },
        { id: '9', label:" No aplica, paciente en abandono" },
        { id: '55', label:" No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios" }
      ],
      novedadPacienteAnterior: [
        { id: '0', label:" No presenta ninguna novedad" },
        { id: '1', label:" Ingreso a EAPB con diagnóstico de AR" },
        { id: '2', label:" Usuario antiguo en EAPB a quien se le realizó nuevo diagnóstico de AR" },
        { id: '3', label:" Usuario antiguo en EAPB y antiguo diagnóstico de AR que no había sido incluido en reporte" },
        { id: '4', label:" Suspensión del tratamiento por orden médica" },
        { id: '5', label:" Persona que firmó alta voluntaria del tratamiento" },
        { id: '6', label:" Usuario abandonó el tratamiento." },
        { id: '7', label:" Usuario con cambio de tipo o número de identificación" },
        { id: '8', label:" Usuario con diagnóstico confirmado de AR no incluido en reporte anterior y que está desafiliado en el momento del reporte actual" },
        { id: '9', label:" Usuario con diagnóstico confirmado de AR no incluido en reporte anterior y que está fallecido en el momento del reporte actual" },
        { id: '10', label:" Usuario para eliminar de la base por corrección luego de auditoría interna o de la CAC" },
        { id: '11', label:" Usuario que se desafilió" },
        { id: '12', label:" Usuario que falleció" },
        { id: '13', label:" Persona con aseguramiento que recibió servicios no incluidos en el plan de beneficios por parte del ente territorial." },
        { id: '14', label:" Comunidad migrante de la República de Venezuela" },
        { id: '15', label:" Usuario identificado por fuentes externas con diagnóstico AR descartado por la entidad." },
        { id: '16', label:" Usuario identificado por fuente externas con diagnóstico AR no gestionado por la entidad." },
        { id: '17', label:" Paciente trasladado que fue glosado en periodo anterior que no fue gestionado por la entidad en el periodo." }
      ],
      causaMuerte: [
        { id: '1', label:"Muerte por artritis reumatoide."},
        { id: '2', label:"Muerte por otra patología."},
        { id: '3', label:"Muerte por causa externa."},
        { id: '55', label:" No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."}
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
