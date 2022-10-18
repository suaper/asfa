<template>
    <q-form @submit="saveRegister">
      <div class="row flex cien space-betwen" >
          <div class="wrp_forms w_50" v-if="firstStep">
            <h4 class="titulo_fondo w_100">Condición actual de la persona que vive con VIH</h4>

              <div class="row dos_items">
                  <div class="item-numero">
                      <label>Código de habilitación de la sede de la IPS donde se hace el seguimiento y atención al usuario actualmente: </label>
                      <q-select rounded standout v-model="data.codigoSedeIps" :options="codigoSedeIps" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de ingreso a la IPS actual para seguimiento y atención de la infección por el VIH: </label>
                        <q-input filled v-model="data.ingresoIpsAtencionViH">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ingresoIpsAtencionViH">
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
                  <div class="item-número">
                      <label>Municipio de la IPS:  </label>
                      <q-select rounded standout v-model="data.municipioIps" :options="municipioIps" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Quién hace la atención clínica y formulación para la infección por el VIH al usuario actualmente</label>
                      <q-select rounded standout v-model="data.atencionClinicaVihUsuario" :options="atencionClinicaVihUsuario" label="Seleccionar" />
                  </div>
              </div>              

              <div class="row dos_items">
                  <div class="item">
                      <label>Valoración por infectólogo en los últimos 12 meses</label>
                      <q-select rounded standout v-model="data.valoracionInfectologo" :options="valoracionInfectologo" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de la última genotipificación realizada.</label>
                        <q-input filled v-model="data.ultimaGenotipificación">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ultimaGenotipificación">
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
                      <label>Estado clínico actual  </label>
                      <q-select rounded standout v-model="data.estadoClinicoActual" :options="estadoClinicoActual" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de último colesterol LDL  </label>
                        <q-input filled v-model="data.ultimoColesterolLdl">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ultimoColesterolLdl">
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
                  <div class="item-numero">
                      <label>Resultado del último colesterol LDL: </label>
                      <q-select rounded standout v-model="data.resultadoUltimoCoresterolLdl" :options="resultadoUltimoCoresterolLdl" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de último nivel de triglicéridos: </label>
                        <q-input filled v-model="data.ultimoNivelTrigliceridos">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ultimoNivelTrigliceridos">
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
                  <div class="item-numero">
                      <label>Resultado del último nivel de triglicéridos: </label>
                      <q-select rounded standout v-model="data.resultadoUltimoNivelTrigliceridos" :options="resultadoUltimoNivelTrigliceridos" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de última hemoglobina sérica</label>
                        <q-input filled v-model="data.ultimaHemoglobinaSerica">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ultimaHemoglobinaSerica">
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
                  <div class="item-numero">
                      <label>Resultado de la última hemoglobina sérica: </label>
                      <q-select rounded standout v-model="data.resultadoUltimaHemoglobinaSerica" :options="resultadoUltimaHemoglobinaSerica" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de la última enzima alanina aminotransferasa </label>
                        <q-input filled v-model="data.ultimaEnzimaAlanina">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ultimaEnzimaAlanina">
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
                  <div class="item-numero">
                      <label>Resultado de la última ALT o TGP sérica: </label>
                      <q-select rounded standout v-model="data.resutadoUltimaAltTgpSerica" :options="resutadoUltimaAltTgpSerica" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de última creatinina sérica</label>
                        <q-input filled v-model="data.ultimaCreatininaSerica">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ultimaCreatininaSerica">
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
                  <div class="item-numero">
                      <label>Resultado de la última creatinina sérica: </label>
                      <q-select rounded standout v-model="data.resultadoUltimaCreatininaSerica" :options="resultadoUltimaCreatininaSerica" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de última glucemia sérica en ayuno:</label>
                        <q-input filled v-model="data.ultimaGlucemiaSericaAyuno">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ultimaGlucemiaSericaAyuno">
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
                  <div class="item-numero">
                      <label>Resultado de la última glucemia sérica en ayuno: </label>
                      <q-select rounded standout v-model="data.resultadoUltimaGlucemiaSericaAyuno" :options="resultadoUltimaGlucemiaSericaAyuno" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de última medición del peso corporal en el periodo</label>
                        <q-input filled v-model="data.ultimaMedicionPesoPeriodo">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ultimaMedicionPesoPeriodo">
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
                  <div class="item-numero">
                      <label>Resultado de la última medición del peso corporal: </label>
                      <q-select rounded standout v-model="data.resultadoUltimaMedicionPeso" :options="resultadoUltimaMedicionPeso" label="Seleccionar" />
                  </div>
                  <div class="item-numero">
                      <label>Talla: </label>
                      <q-select rounded standout v-model="data.talla" :options="talla" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Tiene neuropatía periférica?: </label>
                      <q-select rounded standout v-model="data.tieneNeuropatiaPeriferica" :options="tieneNeuropatiaPeriferica" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Tiene lipoatrofia o lipodistrofia?: </label>
                      <q-select rounded standout v-model="data.tieneLipotrofiaLipodistrofia" :options="tieneLipotrofiaLipodistrofia" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Tiene coinfección con hepatitis B crónica?: </label>
                      <q-select rounded standout v-model="data.coinfeccionHepatitisBCronica" :options="coinfeccionHepatitisBCronica" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Tiene coinfección con hepatitis C crónica?:  </label>
                      <q-select rounded standout v-model="data.coinfeccionHepatitisCCronica" :options="coinfeccionHepatitisCCronica" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Tiene o tuvo coinfección con tuberculosis activa en los últimos 12 meses? </label>
                      <q-select rounded standout v-model="data.coinfeccionTuberculosisUltimo12" :options="coinfeccionTuberculosisUltimo12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Tipo de tuberculosis activa que presenta o presentó la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.tuberculosisActivaTbVih12" :options="tuberculosisActivaTbVih12" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿La persona con coinfección TB/VIH recibe o recibió tratamiento para tuberculosis activa en los últimos 12 meses? </label>
                      <q-select rounded standout v-model="data.coinfeccionTuberculosisTratamiento12" :optionsa="coinfeccionTuberculosisTratamiento12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de inicio del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses</label>
                        <q-input filled v-model="data.inicioTratamientoAntituberculosos">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.inicioTratamientoAntituberculosos">
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
                  <div class="item-numero">
                      <label>Medicamento 1 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.medicamento1Antituberculoso12" :options="medicamento1Antituberculoso12" label="Seleccionar" />
                  </div>
                  <div class="item-numero">
                      <label>Medicamento 2 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.medicamento2Antituberculoso12" :options="medicamento2Antituberculoso12" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item-numero">
                      <label>Medicamento 3 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.medicamento3Antituberculoso12" :options="medicamento3Antituberculoso12" label="Seleccionar" />
                  </div>
                  <div class="item-numero">
                      <label>Medicamento 4 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.medicamento4Antituberculoso12" :options="medicamento4Antituberculoso12" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item-numero">
                      <label>Medicamento 5 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.medicamento5Antituberculoso12" :options="medicamento5Antituberculoso12" label="Seleccionar" />
                  </div>
                  <div class="item-numero">
                      <label>Medicamento 6 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.medicamento6Antituberculoso12" :options="medicamento6Antituberculoso12" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item-numero">
                      <label>Medicamento 7 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.medicamento7Antituberculoso12" :options="medicamento7Antituberculoso12" label="Seleccionar" />
                  </div>
                  <div class="item-numero">
                      <label>Medicamento 8 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.medicamento8Antituberculoso12" :options="medicamento8Antituberculoso12" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item-numero">
                      <label>Medicamento 9 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.medicamento9Antituberculoso12" :options="medicamento9Antituberculoso12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha en que terminó el tratamiento antituberculoso en los últimos 12 meses</label>
                        <q-input filled v-model="data.terminoTratamientoantituberculoso12">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.terminoTratamientoantituberculoso12">
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
                      <label>Condición de egreso del tratamiento antituberculoso</label>
                      <q-select rounded standout v-model="data.condicionEgresoAntituberculosos" :options="condicionEgresoAntituberculosos" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Tiene cirrosis hepática?: </label>
                      <q-select rounded standout v-model="data.cirrosisHepatica" :options="cirrosisHepatica" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Tiene enfermedad renal crónica por VIH? </label>
                      <q-select rounded standout v-model="data.enfermedadRenalVih" :options="enfermedadRenalVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Tiene enfermedad coronaria?  </label>
                      <q-select rounded standout v-model="data.enfermedadCoronaria" :options="enfermedadCoronaria" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Tiene o ha tenido otras infecciones de transmisión sexual diferentes a sífilis o hepatitis B en los últimos 12 meses? </label>
                      <q-select rounded standout v-model="data.infeccionTransmisionSexual12" :options="infeccionTransmisionSexual12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Tiene neoplasia no relacionada con Sida?  </label>
                      <q-select rounded standout v-model="data.neoplasiaNoSida" :options="neoplasiaNoSida" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Discapacidad funcional? </label>
                      <q-select rounded standout v-model="data.discapacidadFuncional" :options="discapacidadFuncional" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha del último conteo de linfocitos T CD4 realizado en el período de observación: </label>
                        <q-input filled v-model="data.ultimoConteoLinfocitosCd4">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ultimoConteoLinfocitosCd4">
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
                  <div class="item-numero">
                      <label>Valor del último conteo de linfocitos T CD4 realizado en el período de observación</label>
                      <q-select rounded standout v-model="data.valorUltimoConteoLinfocitosCd4" :options="valorUltimoConteoLinfocitosCd4" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de la última carga viral para VIH realizada en el período de observación: </label>
                        <q-input filled v-model="data.ultimaCargaViralVih">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.ultimaCargaViralVih">
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

              <div class="row uno_item">
                  <div class="item-numero">
                      <label>Valor de la última carga viral para VIH realizada en el período de observación </label>
                      <q-select rounded standout v-model="data.valorUltimaCargaViralVih" :options="valorUltimaCargaViralVih" label="Seleccionar" />
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
      atencionClinicaVihUsuario: [
        { id: '1', label:"Médico experto, según la definición de la guía de práctica clínica vigente. "},
        { id: '2', label:"Infectólogo"},
        { id: '3', label:"Internista "},
        { id: '4', label:"Pediatra"},
        { id: '5', label:"Otro médico especialista, diferente a los anteriores. "},
        { id: '6', label:"Médico general"},
        { id: '7', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH) "},
        { id: '1',:label:" Paciente en abandono."}
      ],
      valoracionInfectologo: [
        { id: '1', label:"Una vez "},
        { id: '2', label:"Dos veces "},
        { id: '3', label:"Tres veces "},
        { id: '4', label:"Cuatro o más "},
        { id: '5', label:"No ha tenido"},
        { id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH)"}   
      ],
      estadoClinicoActual: [
        { id: '0', label:"Estadío 0 "},
        { id: '1', label:"Estadío 1 "},
        { id: '2', label:"Estadío 2 "},
        { id: '3', label:"Estadío 3"},
        { id: '4', label:"Estadío desconocido"},
        { id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH)"}
      ],
      tieneNeuropatiaPeriferica: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
      ],
      tieneLipotrofiaLipodistrofia: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
      ],
      coinfeccionHepatitisBCronica: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
      ],
      coinfeccionHepatitisCCronica: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
      ],
      coinfeccionTuberculosisUltimo12: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
      ],
      tuberculosisActivaTbVih12: [
        { id: '1', label:"TB sensible" },
        { id: '2', label:"TB monorresistente a isoniacida" },
        { id: '3', label:"TB multidrogorresistente (MDR) (resistente a Isoniacida y a Rifampicina) " },
        { id: '4', label:"TB extremadamente resistente (XDR)" },
        { id: '5', label:"TB con respuesta desconocida al tratamiento o sin tratamiento " },
        { id: '6', label:"No presenta TB activa en los últimos 12 meses" },
        { id: '7', label:"TB monorresistente a rifampicina." },
        { id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH)" }
      ],
      coinfeccionTuberculosisTratamiento12: [
        { id '1', label:"Sí recibió tratamiento antituberculoso completo. "},
        { id '2', label:"Sí recibe tratamiento antituberculoso a la fecha de corte."},
        { id '3', label:"No recibe tratamiento antituberculoso porque rechaza el tratamiento. "},
        { id '4', label:"No recibe tratamiento antituberculoso por no adherencia."},
        { id '5', label:"No recibe tratamiento antituberculoso por desabastecimiento. "},
        { id '6', label:"No recibe tratamiento antituberculoso por abandono del tratamiento. "},
        { id '7', label:"No ha iniciado el tratamiento antituberculoso."},
        { id '8', label:"No presenta o presentó TB activa en los últimos 12 meses"},
        { id '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH)"}
      ],
      condicionEgresoAntituberculosos: [
        { id: '1', label:"Curado" },
        { id: '2', label:"Tratamiento terminado " },
        { id: '3', label:"Pérdida en el seguimiento " },
        { id: '4', label:"Fracaso" },
        { id: '5', label:"Fallecido " },
        { id: '6', label:"No evaluado" },
        { id: '7', label:"No recibió tratamiento" },
        { id: '8', label:"Aún en tratamiento a la fecha de corte" },
        { id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH) " },
        { id: '1',:label:" No presenta o presentó TB activa en los últimos 12 meses" }
      ],
      cirrosisHepatica: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
      ],
      enfermedadRenalVih: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
      ],
      enfermedadCoronaria: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
      ],
      infeccionTransmisionSexual12: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
      ],
      neoplasiaNoSida: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
      ],
      discapacidadFuncional: [
        {id: '0', label:"No "},
        {id: '1', label:"Sí"},
        {id: '9', label:"No aplica (persona sin diagnóstico confirmado de infección por VIH"}
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
