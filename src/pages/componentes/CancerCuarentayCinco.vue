<template>
    <q-form @submit="saveRegister">
      <div class="row flex cien space-betwen" >
          <div class="wrp_forms w_50" v-if="firstStep">
            <h4 class="titulo_fondo w_100">INFORMACIÓN ESPECÍFICA DE TERAPIA SISTÉMICA E INTRATECAL EN EL PERIODO DE REPORTE ACTUAL</h4>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Recibió el usuario quimioterapia u otra terapia sistémica (incluye quimioterapia, hormonoterapia, inmunoterapia y terapia dirigida) dentro del periodo de reporte?</label>
                      <q-select rounded standout v-model="data.usuarioQuimioTerapia" :options="usuarioQuimioTerapia" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Cuántas fases de quimioterapia recibió el usuario en este periodo de reporte? (aplica para hematolinfáticos con los siguientes códigos de clasificación diagnóstica CIE-10; C835 Linfoma no Hodgkin linfoblástico (difuso), C910 Leucemia linfoblástica aguda, C920 Leucemia mieloide aguda, C924 Leucemia promielocitica aguda y C925 Leucemia mielomonocítica aguda): </label>
                      <q-select rounded standout v-model="data.usuarioQuimioFasesPeriodo" :options="usuarioQuimioFasesPeriodo" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>El usuario recibió en este periodo la fase de quimioterapia denominada Prefase o Citorreducción inicial (aplica solo para leucemia linfoide aguda y linfoma linfoblástico, puede haber recibido más de una fase): </label>
                      <q-select rounded standout v-model="data.uQuimioPrefase" :options="uQuimioPrefase" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>El usuario recibió en este periodo la fase de quimioterapia denominada Inducción (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                      <q-select rounded standout v-model="data.uQuimioInduccionPeriodo" :options="uQuimioInduccionPeriodo" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>El usuario recibió en este periodo la fase de quimioterapia denominada Intensificación (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase): </label>
                      <q-select rounded standout v-model="data.uQuimioIntensificacion" :options="uQuimioIntensificacion" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>El usuario recibió en este periodo la fase de quimioterapia denominada Consolidación (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase): : </label>
                      <q-select rounded standout v-model="data.uQuimioConsolidacion" :options="uQuimioConsolidacion" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>El usuario recibió en este periodo la fase de quimioterapia denominada Reinducción (aplica solo para leucemia linfoide aguda y linfoma linfoblástico, puede haber recibido más de una fase): </label>
                      <q-select rounded standout v-model="data.uQuimioReinduccion" :options="uQuimioReinduccion" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>El usuario recibió en este periodo la fase de quimioterapia denominada Mantenimiento (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                      <q-select rounded standout v-model="data.uQuimioMantenimiento" :options="uQuimioMantenimiento" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>El usuario recibió en este periodo la fase de quimioterapia denominada Mantenimiento largo o final (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                      <q-select rounded standout v-model="data.uQuimioMantenimientoLargo" :options="uQuimioMantenimientoLargo" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>El usuario recibió en este periodo Otra fase de quimioterapia denominada diferente a las anteriores (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                      <q-select rounded standout v-model="data.uQuimioOtraFase" :options="uQuimioOtraFase" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item-numero">
                      <label>Número de ciclos iniciados y administrados en el periodo de reporte, incluyendo el que aún recibe en la fecha de finalización del periodo (aplica para todos los cánceres): </label>
                        <q-input rounded standout v-model="data.ciclosReporteCanceres" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>Ubicación temporal del primer o único esquema de quimioterapia o terapia sistémica en el periodo en relación al manejo oncológico: </label>
                      <q-select rounded standout v-model="data.ubicacionPrimerQuimio" :options="ubicacionPrimerQuimio" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Fecha de inicio del primer o único esquema de quimioterapia o terapia sistémica que recibió en este periodo. Este esquema pudo haber sido iniciado antes de periodo de reporte. </label>
                        <q-input filled v-model="data.fechaPrimerQuimioReporte">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaPrimerQuimioReporte">
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
                      <label>Número de IPS que suministran el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte:  </label>
                        <q-input rounded standout v-model="data.numeroPrimerIps" lazy-rules type="number"></q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Código de la IPS1 que suministra el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte</label>
                        <q-input rounded standout v-model="data.codigoIps1PrimerQuimio" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>Código de la IPS2 que suministra el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte:  </label>
                        <q-input rounded standout v-model="data.codigoIps2PrimerQuimio" lazy-rules type="number"></q-input>
                  </div>
              </div>   

              <div class="row dos_items">
                  <div class="item">
                      <label>Cuantos medicamentos antineoplásicos o terapia hormonal, el (los) especialista(s) tratante(s) del cáncer propusieron como manejo en el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte</label>
                        <q-input rounded standout v-model="data.cantidadMedicamentosCancer" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(1) </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasico1" :options="medicamentoAntiplasico1" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(2) </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasico2" :options="medicamentoAntiplasico2" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(3) </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasico3" :options="medicamentoAntiplasico3" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(4) </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasico4" :options="medicamentoAntiplasico4" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(5) </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasico5" :options="medicamentoAntiplasico5" label="Seleccionar" />
                  </div>
              </div>  

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(6) </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasico6" :options="medicamentoAntiplasico6" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(7) </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasico7" :options="medicamentoAntiplasico7" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(8) </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasico8" :options="medicamentoAntiplasico8" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(9) </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasico9" :options="medicamentoAntiplasico9" label="Seleccionar" />
                  </div>
              </div>  

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento Antineoplásico o terapia hormonal para el cáncer, adicional a los reportados en las variables 53.1 a 53.9 - 1 administrado al usuario- primer o único esquema del periodo de reporte: </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasicoVariable" :options="medicamentoAntiplasicoVariable" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento Antineoplásico o terapia hormonal para el cáncer, adicional a los reportados en las variables 53.1 a 53.9 - 2 administrado al usuario- primer o único esquema del periodo de reporte: </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasicoVariable2" :options="medicamentoAntiplasicoVariable2" label="Seleccionar" />
                  </div>
              </div>  

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento Antineoplásico o terapia hormonal para el cáncer, adicional a los reportados en las variables 53.1 a 53.9 - 3 administrado al usuario- primer o único esquema del periodo de reporte: </label>
                        <q-select rounded standout v-model="data.medicamentoAntiplasicoVariable3" :options="medicamentoAntiplasicoVariable3" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Recibió quimioterapia intratecal en el primer o único esquema de este periodo de reporte?:</label>
                        <q-select rounded standout v-model="data.quimioIntratecalPrimer" :options="quimioIntratecalPrimer" label="Seleccionar" />
                  </div>
              </div>  

              <div class="row dos_items">
                  <div class="item">
                      <label>Fecha de finalización del primer o único esquema de este periodo de reporte. Si es hormonoterapia terminada o esquema terminado en este periodo reporte la fecha de finalización del tratamiento actual: </label>
                        <q-input filled v-model="data.fechaFinalHormonoterapia">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaFinalHormonoterapia">
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
                      <label>59.  Características actuales del primer o único esquema de este periodo de reporte:</label>
                        <q-select rounded standout v-model="data.cartePrimerReporte" :options="cartePrimerReporte" label="Seleccionar" />
                  </div>
              </div>  

              <div class="row dos_items">
                  <div class="item">
                      <label> Motivo de la finalización (prematura) de este primer o único esquema (Aplica si registró la opción 2 de la variable anterior). Seleccione un sólo número (lo que primero ocurrió):  </label>
                        <q-select rounded standout v-model="data.prematuraEsquemaOp2" :options="prematuraEsquemaOp2" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Ubicación temporal del ÚLTIMO esquema de quimioterapia o terapia sistémica de este periodo de reporte en relación al manejo oncológico: </label>
                        <q-select rounded standout v-model="data.ultimoEsquemaOncologico" :options="ultimoEsquemaOncologico" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Fecha de inicio del último esquema de quimioterapia o terapia sistémica de este periodo de reporte. Si es hormonoterapia reporte la fecha de inicio del tratamiento actual, así haya sido iniciada previo al reporte actual:  </label>
                        <q-input filled v-model="data.fechaFinalHormonoterapia">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaFinalHormonoterapia">
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
                      <label>Número de IPS que suministran el último esquema de este periodo de reporte: </label>
                        <q-input rounded standout v-model="data.numeroIpsUltimoReporte" lazy-rules type="number"></q-input>
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Código de la IPS1 que suministra el último esquema en este periodo de reporte: </label>
                        <q-input rounded standout v-model="data.codigoReporteIps1" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>Código de la IPS2 que suministra el último esquema en este periodo de reporte: </label>
                        <q-input rounded standout v-model="data.codigoReporteIps2" lazy-rules type="number"></q-input>
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Cuantos medicamentos antineoplásicos o terapia hormonal, el (los) especialista(s) tratante(s) del cáncer propusieron como manejo en ÚLTIMO esquema de quimioterapia o terapia sistémica de este periodo de reporte: </label>
                        <q-input rounded standout v-model="data.medicamentoAntiplasicoEspecial" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte. </label>
                        <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte" :options="medicamentoAntineplasicoReporte" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(2)  </label>
                        <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte2" :options="medicamentoAntineplasicoReporte2" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(3) </label>
                        <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte3" :options="medicamentoAntineplasicoReporte3" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(4)  </label>
                        <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte4" :options="medicamentoAntineplasicoReporte4" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(5) </label>
                        <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte5" :options="medicamentoAntineplasicoReporte5" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(6)  </label>
                        <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte6" :options="medicamentoAntineplasicoReporte6" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(7) </label>
                        <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte7" :options="medicamentoAntineplasicoReporte7" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(8)  </label>
                        <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte8" :options="medicamentoAntineplasicoReporte8" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(9) </label>
                        <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte9" :options="medicamentoAntineplasicoReporte9" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento Antineoplásico o terapia hormonal para cáncer, adicional a los reportados en variables 66.1 a 66.9 -1 administrado al usuario- último esquema: </label>
                        <q-select rounded standout v-model="data.terapiaHormonalCancerVariable" :options="terapiaHormonalCancerVariable" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento Antineoplásico o terapia hormonal para cáncer, adicional a los reportados en variables 66.1 a 66.9 -2 administrado al usuario- último esquema:</label>
                        <q-select rounded standout v-model="data.terapiaHormonalCancerVariable2" :options="terapiaHormonalCancerVariable2" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento Antineoplásico o terapia hormonal para cáncer, adicional a los reportados en variables 66.1 a 66.9 -3 administrado al usuario- último esquema:</label>
                        <q-select rounded standout v-model="data.terapiaHormonalCancerVariable3" :options="terapiaHormonalCancerVariable3" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Recibió quimioterapia intratecal en el último esquema de este periodo de reporte</label>
                        <q-select rounded standout v-model="data.quimioIntratecalUltimo" :options="quimioIntratecalUltimo" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Fecha de finalización del último esquema de quimioterapia o terapia sistémica este periodo de reporte. Si es hormonoterapia terminada o esquema terminado en este periodo reporte la fecha de finalización del tratamiento actual: </label>
                        <q-input filled v-model="data.fechaEsquemaQuimioFin">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaEsquemaQuimioFin">
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
                      <label>Características actuales del último esquema de este periodo:</label>
                        <q-select rounded standout v-model="data.actualEsquemaUltimoPeriodo" :options="actualEsquemaUltimoperiodo" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>Motivo de la finalización (prematura) de este último esquema (Aplica si registró la opción 2 de la pregunta anterior) Seleccione un sólo número (lo que primero ocurrió): </label>
                        <q-select rounded standout v-model="data.motivoPrematuraEsquema" :options="motivoPrematuraEsquema" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Características actuales del último esquema de este periodo:</label>
                        <q-select rounded standout v-model="data.actualEsquemaUltimoPeriodo" :options="actualEsquemaUltimoperiodo" label="Seleccionar" />
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
      usuarioQuimioTerapia: [
        { id: '1', label:"Sí recibió"},
        { id: '98', label:"No Aplica (no está indicada esta terapia, verifique que en las variables 46 a 73 se registra No Aplica)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
      ],
      usuarioQuimioFasesPeriodo: [
        { id: '0', label:"Es cáncer hematolinfático con los siguientes códigos de clasificación diagnóstica CIE 10 ( C835, C910, C920, C924 y C925) y en la variable 45 respondió la opción 98"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '98', label:"No Aplica (es sólido o es cáncer diferente a los enunciados en las fases)"}
      ],
      uQuimioPrefase: [
        { id: '1', label:"Sí recibió"},
        { id: '2', label:"No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)"}
      ],
      uQuimioInduccionPeriodo: [
        { id: '1', label:"Sí recibió"},
        { id: '2', label:"No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)"}
      ],
      uQuimioIntensificacion: [
        { id: '1', label:"Sí recibió"},
        { id: '2', label:"No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)"}
      ],
      uQuimioConsolidacion: [
        { id: '1', label:"Sí recibió"},
        { id: '2', label:"No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)"}
      ],
      uQuimioReinduccion: [
        { id: '1', label:"Sí recibió"},
        { id: '2', label:"No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)"}
      ], 
      uQuimioMantenimiento: [
        { id: '1', label:"Sí recibió"},
        { id: '2', label:"No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)"}
      ], 
      uQuimioMantenimientoLargo: [
        { id: '1', label:"Sí recibió"},
        { id: '2', label:"No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)"}
      ], 
      uQuimioOtraFase: [
        { id: '1', label:"Sí recibió"},
        { id: '2', label:"No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)"}
      ], 
      ubicacionPrimerQuimio: [
        { id: '1', label:"Neoadyuvancia (manejo inicial prequirúrgico)"},
        { id: '2', label:"Tratamiento inicial curativo sin cirugía sugerida (por ejemplo, sería una opción frecuente en caso de leucemias o linfomas, u otros cánceres a quienes no se les hizo cirugía)"},
        { id: '3', label:"Adyuvancia (manejo inicial postquirúrgico) "},
        { id: '11', label:"Manejo de recaída"},
        { id: '12', label:"Manejo de enfermedad metastásica"},
        { id: '13', label:"Manejo paliativo (sin manejo de recaída ni enfermedad metastásica)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ], 
      medicamentoAntiplasico1: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ],
      medicamentoAntiplasico2: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ], 
      medicamentoAntiplasico3: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ],
      medicamentoAntiplasico4: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ], 
      medicamentoAntiplasico5: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ], 
      medicamentoAntiplasico6: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ], 
      medicamentoAntiplasico7: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ], 
      medicamentoAntiplasico8: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ], 
      medicamentoAntiplasico9: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ], 
      medicamentoAntiplasicoVariable: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (No recibió medicamentos diferentes a los enunciados en las variables 53.1 a la 53.9 y en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ], 
      medicamentoAntiplasicoVariable2: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (No recibió medicamento diferente a los enunciados en las variables 53.1 a la 53.9 y en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ], 
      medicamentoAntiplasicoVariable3: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica (No recibió medicamento diferente a los enunciados en las variables 53.1 a la 53.9 y en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"}
      ],
      quimioIntratecalPrimer: [
        { id: '1', label:"Sí recibió"},
        { id: '2', label:"No recibió"},
        { id: '98', label:"No Aplica (no tuvo ningún esquema de quimioterapia, en variable 45 seleccionó 98= No aplica)"}
      ], 
      cartePrimerReporte: [
        { id: '1', label:"Finalizado, esquema completo según medicamentos programados "},
        { id: '2', label:"Finalizado, esquema incompleto pero finalizado por algún motivo"},
        { id: '3', label:"No finalizado, esquema incompleto, pero aún bajo tratamiento (ejemplo: hormonoterapia o esquema no finalizado)"},
        { id: '98', label:"No Aplica (no tuvo ningún esquema de terapia sistémica y en la variable 45 seleccionó la opción 98)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte"}
      ], 
      prematuraEsquemaOp2: [
        { id: '1', label"Toxicidad de uno o más medicamentos"},
        { id: '2', label"Otros motivos médicos"},
        { id: '3', label"Muerte"},
        { id: '4', label"Cambio de EAPB"},
        { id: '5', label"Decisión del usuario, abandonó la terapia "},
        { id: '6', label"No hay disponibilidad de medicamentos "},
        { id: '7', label"Otros motivos administrativos"},
        { id: '8', label"Otras causas no contempladas "},
        { id: '98', label"No Aplica"},
        { id: '55', label"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ], 
      ultimoEsquemaOncologico: [
        { id: '1', label:"Neoadyuvancia (manejo inicial prequirúrgico)"},
        { id: '2', label:"Tratamiento inicial curativo sin cirugía sugerida (por ejemplo, sería una opción frecuente en caso de leucemias o linfomas, u otros cánceres a quienes no se les hizo cirugía)"},
        { id: '3', label:"Adyuvancia (manejo inicial postquirúrgico) "},
        { id: '11', label:"Manejo de progresión o recaída"},
        { id: '12', label:"Manejo de enfermedad metastásica "},
        { id: '13', label:"Cambio por toxicidad"},
        { id: '14', label:"Manejo paliativo (sin manejo de recaída ni enfermedad metastásica)"},
        { id: '97', label"Solo recibió un esquema de quimioterapia en este periodo y en la variable 45 seleccionó la opción 1. (verifique que las variables 62 a 73 registren No Aplica)"},
        { id: '98', label:"No Aplica (en la variable 45 seleccionó la opción 98)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ], 
      medicamentoAntineplasicoReporte: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica"}
      ],       
      medicamentoAntineplasicoReporte2: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica"}
      ],
      medicamentoAntineplasicoReporte3: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica"}
      ],
      medicamentoAntineplasicoReporte4: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica"}
      ],
      medicamentoAntineplasicoReporte5: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica"}
      ],
      medicamentoAntineplasicoReporte6: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica"}
      ],
      medicamentoAntineplasicoReporte7: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica"}
      ],
      medicamentoAntineplasicoReporte8: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica"}
      ],
      medicamentoAntineplasicoReporte9: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)"},
        { id: '98', label:"No Aplica"}
      ],
      terapiaHormonalCancerVariable: [
        { id: '97', label:"No Aplica (No recibió medicamento diferente a los enunciados en las variables 66.1 a la 66.9 y en la variable 61 seleccionó una opción <=14)"},
        { id: '98', label:"No Aplica (no tuvo este último esquema o en la variable 61 seleccionó la opción 97 ó 98)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ],
      terapiaHormonalCancerVariable2: [
        { id: '97', label:"No Aplica (No recibió medicamento diferente a los enunciados en las variables 66.1 a la 66.9 y en la variable 61 seleccionó una opción <=14)"},
        { id: '98', label:"No Aplica (no tuvo este último esquema o en la variable 61 seleccionó la opción 97 ó 98)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ],
      terapiaHormonalCancerVariable3: [
        { id: '97', label:"No Aplica (No recibió medicamento diferente a los enunciados en las variables 66.1 a la 66.9 y en la variable 61 seleccionó una opción <=14)"},
        { id: '98', label:"No Aplica (no tuvo este último esquema o en la variable 61 seleccionó la opción 97 ó 98)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ], 
      quimioIntratecalUltimo: [
        { id: '1', label:"Si recibió"},
        { id: '2', label:"No recibió"},
        { id: '98', label:"No Aplica (no tuvo ningún esquema de quimioterapia, en variable 45 seleccionó 98= No aplica)"}
      ], 
      actualEsquemaUltimoPeriodo: [
        { id: '1', label:"Finalizado, esquema completo según medicamentos programados"},
        { id: '2', label:"Finalizado, esquema incompleto pero finalizado por algún motivo"},
        { id: '3', label:"No finalizado, esquema incompleto, pero aún bajo tratamiento (ejemplo: hormonoterapia o esquema no finalizado)"},
        { id: '98', label:"No Aplica"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ],
      motivoPrematuraEsquema: [
        { id: '1', label:"Toxicidad de uno o más medicamentos "},
        { id: '2', label:"Otros motivos médicos"},
        { id: '3', label:"Muerte"},
        { id: '4', label:"Cambio de EPS"},
        { id: '5', label:"Decisión del usuario, abandonó la terapia "},
        { id: '6', label:"No hay disponibilidad de medicamentos "},
        { id: '7', label:"Otros motivos administrativos"},
        { id: '8', label:"Otras causas no contempladas "},
        { id: '98', label:"No Aplica"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ],
      actualEsquemaUltimoPeriodo: [
        { id: '1', label:"Finalizado, esquema completo según medicamentos programados"},
        { id: '2', label:"Finalizado, esquema incompleto pero finalizado por algún motivo"},
        { id: '3', label:"No finalizado, esquema incompleto, pero aún bajo tratamiento (ejemplo: hormonoterapia o esquema no finalizado)"},
        { id: '98', label:"No Aplica"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ],
      actualEsquemaUltimoPeriodo: [
        { id: '1', label:"Finalizado, esquema completo según medicamentos programados"},
        { id: '2', label:"Finalizado, esquema incompleto pero finalizado por algún motivo"},
        { id: '3', label:"No finalizado, esquema incompleto, pero aún bajo tratamiento (ejemplo: hormonoterapia o esquema no finalizado)"},
        { id: '98', label:"No Aplica"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ],
      actualEsquemaUltimoPeriodo: [
        { id: '1', label:"Finalizado, esquema completo según medicamentos programados"},
        { id: '2', label:"Finalizado, esquema incompleto pero finalizado por algún motivo"},
        { id: '3', label:"No finalizado, esquema incompleto, pero aún bajo tratamiento (ejemplo: hormonoterapia o esquema no finalizado)"},
        { id: '98', label:"No Aplica"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ],
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
