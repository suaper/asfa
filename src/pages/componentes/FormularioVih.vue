<template>
    <q-form @submit="saveRegister">
      <div class="row flex cien space-betwen" >
          <div class="wrp_forms w_50" v-if="firstStep">
            <h4 class="titulo_fondo w_100">Información de mujeres gestantes</h4>
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
              <div class="row dos_items">
                  <div class="item">
                      <label>Niño o niña menor de 12 meses que es hijo(a) de madre que vive con VIH</label>
                      <q-select rounded standout v-model="data.children" :options="childrens" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Persona con tuberculosis activa</label>
                      <q-select rounded standout v-model="data.tuberculosis" :options="optionsTuberculosis" label="Seleccionar" />
                  </div>
              </div>
              <!--<div class="row un_item">
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
              </div>
              <div class="row dos_items">
                <div class="row actions cien q-mt-xl">
                  <div class="item align_right cien">
                    <q-btn rounded class="azul_boton btn_crear" text-color="white" icon-right="save" label="Guardar" type="submit" @click="type = 'borrador'" v-if="status !== 'finalizado'"/>
                  </div>
                  <div class="item cien align_right cien q-mt-md">
                    <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
                    <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'siguiente'" type="submit" label="Siguiente" />
                  </div>
                </div>
              </div>
          </div>
          <div class="wrp_forms w_50" v-if="secondStep">
            <h4 class="titulo_fondo w_100" v-if="typeof data.children !== 'undefined' && data.children.id !== '0'">Información de menores de 12 meses hijos o hijas de madres que viven con VIH</h4>
            <div class="row dos_items" v-if="typeof data.children !== 'undefined' && data.children.id !== '0'">
              <div class="item">
                  <label>Tipo de identificación de la madre del menor de 12 meses expuesto al VIH</label>
                  <q-select rounded standout v-model="data.documentTypeChildren" :options="documentTypesChildres" label="Seleccionar" />
              </div>
              <div class="item">
                <label>Número de identificación de la madre del menor de 12 meses expuesto al VIH..</label>
                <q-input
                    rounded
                    standout
                    v-model="data.documentNumberChildren"
                    lazy-rules
                    type="number"
                    >
                  </q-input>
              </div>
            </div>
            <div class="row dos_items" v-if="typeof data.children !== 'undefined' && data.children.id !== '0'">
              <div class="item">
                  <label>¿La madre del menor de 12 meses expuesto al VIH tiene confirmado el diagnóstico de VIH?</label>
                  <q-select rounded standout v-model="data.haveConfirmedVihDx" :options="answersConfirmedDx" label="Seleccionar" />
              </div>
              <div class="item">
                <label>Profilaxis con antirretrovirales para el recién nacido vivo expuesto al VIH.</label>
                <q-select rounded standout v-model="data.profilaxis" :options="profilaxisOptions" label="Seleccionar" />
              </div>
            </div>
            <div class="row dos_items" v-if="typeof data.children !== 'undefined' && data.children.id !== '0'">
              <div class="item">
                  <label>Suministro de fórmula láctea.</label>
                  <q-select rounded standout v-model="data.suministroViaLactea" :options="viaLacteaOptions" label="Seleccionar" />
              </div>
              <div class="item">
                <label>Fecha de la primera carga viral para VIH en el menor de 12 meses expuesto al VIH.</label>
                <q-input filled v-model="data.firstViralChargeVih">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.firstViralChargeVih">
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
            <div class="row dos_items" v-if="typeof data.children !== 'undefined' && data.children.id !== '0'">
              <div class="item">
                  <label>Resultado de la primera carga viral en el menor de 12 meses expuesto al VIH.</label>
                  <q-input
                    rounded
                    standout
                    v-model="data.resultFirstViralChargeVih"
                    lazy-rules
                    type="number"
                    >
                  </q-input>
              </div>
              <div class="item">
                <label>Fecha de la segunda carga viral en el menor de 12 meses expuesto al VIH.</label>
                <q-input filled v-model="data.secondViralChargeVih">
                  <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                      <q-date v-model="data.secondViralChargeVih">
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
            <div class="row dos_items" v-if="typeof data.children !== 'undefined' && data.children.id !== '0'">
              <div class="item">
                  <label>Resultado de la segunda carga viral en el menor de 12 meses expuesto al VIH.</label>
                  <q-input
                    rounded
                    standout
                    v-model="data.resultSecondViralChargeVih"
                    lazy-rules
                    type="number"
                    >
                  </q-input>
              </div>
              <div class="item">
                <label>Fecha de la tercera carga viral en el menor de 12 meses expuesto al VIH.</label>
                <q-input filled v-model="data.thirdViralChargeVih">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.thirdViralChargeVih">
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
            <div class="row dos_items" v-if="typeof data.children !== 'undefined' && data.children.id !== '0'">
              <div class="item">
                  <label>Resultado de la tercera carga viral en el menor de 12 meses expuesto al VIH.</label>
                  <q-input
                    rounded
                    standout
                    v-model="data.resultThirdViralChargeVih"
                    lazy-rules
                    type="number"
                    >
                  </q-input>
              </div>
              <div class="item">
                <label>Condición final del menor de 12 meses expuesto al VIH.</label>
                <q-select rounded standout v-model="data.conditionFinalChild" :options="conditionFinalChildOptions" label="Seleccionar" />
              </div>
            </div>
            <h4 class="titulo_fondo w_100" v-if="typeof data.tuberculosis !== 'undefined' && data.tuberculosis.id !== '3'">Información de personas con tuberculosis activa</h4>
            <div class="row dos_items" v-if="typeof data.tuberculosis !== 'undefined' && data.tuberculosis.id !== '3'">
              <div class="item">
                  <label>Fecha del diagnóstico de la tuberculosis activa reportada.</label>
                  <q-input filled v-model="data.dateDxTuberculosisActiva">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.dateDxTuberculosisActiva">
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
                <label>Fecha de realización de tamizaje para VIH a la persona con tuberculosis activa reportada.</label>
                <q-input filled v-model="data.dateTamizajeTuberculosis">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.dateTamizajeTuberculosis">
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
            <div class="row actions cien q-mt-xl">
              <div class="item align_right cien">
                <q-btn rounded class="azul_boton btn_crear" text-color="white" icon-right="save" label="Guardar" type="submit" @click="type = 'borrador'" v-if="status !== 'finalizado'"/>
              </div>
              <div class="item cien align_right cien q-mt-md">
                <q-btn rounded class="bg_botn_white_border_green btn_crear q-mr-md" text-color="white" icon="chevron_left" label="Atrás" @click="previousStep()" />
                <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
                <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'siguiente'" type="submit" label="Siguiente" />
              </div>
            </div>
          </div>
          <div class="wrp_forms w_50" v-if="thirdStep">
            <h4 class="titulo_fondo w_100">Información de personas que viven con VIH</h4>

              <div class="row dos_items">
                  <div class="item">
                        <label>Fecha de la prueba presuntiva (prueba rápida, autotest o Elisa, según guía de práctica clínica vigente) para infección por VIH.</label>
                        <q-input filled v-model="data.fechaPruebaPresuntiva">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaPruebaPresuntiva">
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
                      <label>Cómo llegó a la prueba presuntiva para el VIH</label>
                      <q-select rounded standout v-model="data.comoLlegoLaPrueba" :options="comoLlegoLaPrueba" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Fecha de confirmación del diagnóstico de infección por VIH.</label>
                      <q-input filled v-model="data.fechaCongirmacionDiagnostico">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.fechaCongirmacionDiagnostico" maKk="YYYY-MM-DD">
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
                      <label>¿La entidad que reporta a la persona que vive con VIH es la misma en la cual estaba afiliada al momento del diagnóstico? </label>
                      <q-select rounded standout v-model="data.entidadReportaVih" :options="entidadReportaVih" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items" >
                  <div class="item">
                      <label>Entidad reportante anterior </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.entidadReportaAnterior"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                    <label>Fecha de inicio de la atención por VIH.</label>
                      <q-input filled v-model="data.fechaInicioAtencionVih">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.fechaInicioAtencionVih"> mask="YYYY-MM-DD"
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
                      <label>Mecanismo o vía de transmisión del VIH.</label>
                      <q-select rounded standout v-model="data.mecanismoTransmisionVih" :options="mecanismoTransmisionVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Estado clínico al momento del diagnóstico (para niños, niñas, adolescentes y adultos.</label>
                      <q-select rounded standout v-model="data.estadoClinicoAlMomento" :options="estadoClinicoAlMomento" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Se realizó conteo de linfocitos T CD4 al momento del diagnóstico? </label>
                      <q-select rounded standout v-model="data.verificacionConteoLinfocitos" :options="verificacionConteoLinfocitos" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Conteo de linfocitos T CD4 al momento del diagnóstico.</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.conteoLinfocitosCd4"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Se realizó carga viral al momento del diagnóstico? </label>
                      <q-select rounded standout v-model="data.verificacionCargaViral" :options="verificacionCargaViral" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Carga viral al momento del diagnóstico.</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.cargaViralEnresultado"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>
              <div class="row actions cien q-mt-xl">
                <div class="item align_right cien">
                  <q-btn rounded class="azul_boton btn_crear" text-color="white" icon-right="save" label="Guardar" type="submit" @click="type = 'borrador'" v-if="status !== 'finalizado'"/>
                </div>
                <div class="item cien align_right cien q-mt-md">
                  <q-btn rounded class="bg_botn_white_border_green btn_crear q-mr-md" text-color="white" icon="chevron_left" label="Atrás" @click="previousStep()" />
                  <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
                  <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'siguiente'" type="submit" label="Siguiente" />
                </div>
              </div>
          </div>
          <div class="wrp_forms w_50" v-if="fourthStep">
            <h4 class="titulo_fondo w_100">Terapia Antirretroviral (TAR) Inicial</h4>

              <div class="row dos_items">
                  <div class="item">
                        <label>Fecha de inicio de la terapia antirretroviral (TAR). </label>
                        <q-input filled v-model="data.inicioTerapiaAntirretroviral">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.inicioTerapiaAntirretroviral">
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
                      <label>Medicamento 1 con el que inició la TAR</label>
                      <q-select rounded standout v-model="data.medicamento1InicioTar" :options="medicamento1InicioTar" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento 2 con el que inició la TAR</label>
                      <q-select rounded standout v-model="data.medicamento2InicioTar" :options="medicamento2InicioTar" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento 3 con el que inició la TAR</label>
                      <q-select rounded standout v-model="data.medicamento3InicioTar" :options="medicamento3InicioTar" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento 4 con el que inició la TAR</label>
                      <q-select rounded standout v-model="data.medicamento4InicioTar" :options="medicamento4InicioTar" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Medicamento 5 con el que inició la TAR</label>
                      <q-select rounded standout v-model="data.medicamento5InicioTar" :options="medicamento5InicioTar" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Conteo de linfocitos T CD4 al momento del inicio de la TAR?</label>
                      <q-select rounded standout v-model="data.linfocitosCD4InicioTar" :options="linfocitosCD4InicioTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>Valor conteo de linfocitos T CD4 al momento del inicio de la TAR</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.valorLinfocitosCD4InicioTar"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Carga viral al momento del inicio de la TAR? </label>
                      <q-select rounded standout v-model="data.cargaMomentoInicioTar" :options="cargaMomentoInicioTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>Carga viral al inicio de la TAR.</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.cargaViralInicioTar"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Motivo de inicio de la TAR</label>
                      <q-select rounded standout v-model="data.motivoInicioTar" :options="motivoInicioTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>Tenía coinfección con el virus de la hepatitis B (VHB) al iniciar la TAR</label>
                      <q-select rounded standout v-model="data.hepatitisBInicioTar" :options="hepatitisBInicioTar" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Tenía coinfección con hepatitis C (VHC) crónica al iniciar TAR</label>
                      <q-select rounded standout v-model="data.hepatitisCInicioTar" :options="hepatitisCInicioTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>Tenía coinfección con tuberculosis activa al iniciar TAR</label>
                      <q-select rounded standout v-model="data.tuberculosisInicioTar" :options="tuberculosisInicioTar" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Número de meses que se dispensó la fórmula completa de TAR durante los primeros 12 meses de iniciada la TAR:</label>
                      <q-select rounded standout v-model="data.dispensoFormulaTar" :options="dispensoFormulaTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>Número de consultas médicas a las que asistió la persona que vive con VIH durante los primeros 12 meses luego de iniciar la TAR: </label>
                      <q-select rounded standout v-model="data.consultasAsistirTarVih" :options="consultasAsistirTarVih" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Ha tenido cambios en el esquema inicial de TAR?: </label>
                      <q-select rounded standout v-model="data.cambiosEsquemaInicialTar" :options="cambiosEsquemaInicialTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>Fecha del primer cambio de cualquier medicamento del esquema inicial de TAR</label>
                      <q-input filled v-model="data.medicamentoEsquemaInicialTar">
                        <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                            <q-date v-model="data.medicamentoEsquemaInicialTar">
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
                      <label>Causa del cambio de medicamento con el que inicio la TAR</label>
                      <q-select rounded standout v-model="data.cambioMedicamentoTar" :options="cambioMedicamentoTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>Medicamento 1 que ocasionó el cambio: </label>
                      <q-select rounded standout v-model="data.medicamento1Cambio" :options="medicamento1Cambio" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento 2 que ocasionó el cambio: </label>
                      <q-select rounded standout v-model="data.medicamento2Cambio" :options="medicamento2Cambio" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>Medicamento 3 que ocasionó el cambio: </label>
                      <q-select rounded standout v-model="data.medicamento3ambio" :options="medicamento3Cambio" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento 4 que ocasionó el cambio: </label>
                      <q-select rounded standout v-model="data.medicamento4Cambio" :options="medicamento4Cambio" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>¿Fallas desde el inicio de la TAR hasta el reporte actual?  </label>
                      <q-select rounded standout v-model="data.fallasInicioTarAnual" :options="fallasInicioTarAnual" label="Seleccionar" />
                  </div>
              </div>

              <div class="row un_item">
                  <div class="item">
                      <label>Número de fallas desde el inicio de la TAR hasta el reporte actual (0 a 20)</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.numeroFallasInicioTarAnual"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row actions cien q-mt-xl">
                <div class="item align_right cien">
                  <q-btn rounded class="azul_boton btn_crear" text-color="white" icon-right="save" label="Guardar" type="submit" @click="type = 'borrador'" v-if="status !== 'finalizado'"/>
                </div>
                <div class="item cien align_right cien q-mt-md">
                  <q-btn rounded class="bg_botn_white_border_green btn_crear q-mr-md" text-color="white" icon="chevron_left" label="Atrás" @click="previousStep()" />
                  <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
                  <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'siguiente'" type="submit" label="Siguiente" />
                </div>
              </div>
          </div>

          <div class="wrp_forms w_50" v-if="fiveStep">
            <h4 class="titulo_fondo w_100">¿Infecciones bacterianas múltiples o recurrentes?</h4>
            <div class="row dos_items">
                  <div class="item">
                      <label>¿Infecciones bacterianas múltiples o recurrentes? </label>
                      <q-select rounded standout v-model="data.infeccionBacteriana" :options="infeccionBacteriana" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Candidiasis esofágica, traqueal, bronquial o pulmonar?  </label>
                      <q-select rounded standout v-model="data.candidiasisETBP" :options="candidiasisETBP" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Tuberculosis pulmonar (solo en personas mayores o iguales a 6 años de edad) o extrapulmonar? </label>
                      <q-select rounded standout v-model="data.tuberculosisPulmonar" :options="tuberculosisPulmonar" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Cáncer de cérvix invasivo? (solo para personas mayores o iguales a 6 años de edad) </label>
                      <q-select rounded standout v-model="data.cancerCervix" :options="cancerCervix" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Coccidioidomicosis diseminada o extrapulmonar?</label>
                      <q-select rounded standout v-model="data.coccidioidomicosis" :options="coccidioidomicosis" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Citomegalovirus de cualquier órgano excepto hígado, bazo, o ganglios linfáticos? En mayores de 1 mes de edad.  </label>
                      <q-select rounded standout v-model="data.citomegalovirus1Mes" :options="citomegalovirus1Mes" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Retinitis por citomegalovirus (con pérdida de la visión)? </label>
                      <q-select rounded standout v-model="data.retinitisCitomegalovirus" :options="retinitisCitomegalovirus" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Herpes simple con úlceras mucocutáneas de más de un mes de duración o causando bronquitis, neumonitis o esofagitis? (en mayores de 1 mes de edad)  </label>
                      <q-select rounded standout v-model="data.herpesMayor1Mes" :options="herpesMayor1Mes" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Diarrea por isospora belli o cryptosporidium de más de un mes de duración? </label>
                      <q-select rounded standout v-model="data.diarreaIsospora1Mes" :options="diarreaIsospora1Mes" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Histoplasmosis diseminada o extrapulmonar? </label>
                      <q-select rounded standout v-model="data.histoplasmosisDiseminada" :options="histoplasmosisDiseminada" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Linfoma de Burkitt, inmunoblástico, o primario del sistema nervioso central? </label>
                      <q-select rounded standout v-model="data.linfomaBurkitt" :options="linfomaBurkitt" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Neumonía por pneumocystis jiroveci? </label>
                      <q-select rounded standout v-model="data.neumoniaPneumocystis" :options="neumoniaPneumocystis" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Neumonía recurrente?  </label>
                      <q-select rounded standout v-model="data.neumoniaRecurrente" :options="neumoniaRecurrente" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Septicemia por salmonella recurrente? </label>
                      <q-select rounded standout v-model="data.septicemiaSalmonella" :options="septicemiaSalmonella" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Infección diseminada o extrapulmonar por micobacterium avium, kansasii u otras especies de micobacterias? </label>
                      <q-select rounded standout v-model="data.infeccionKansasiiOtras" :options="infeccionKansasiiOtras" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Criptococosis extrapulmonar? </label>
                      <q-select rounded standout v-model="data.criptococosisExtrapulmonar" :options="criptococosisExtrapulmonar" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Sarcoma de Kaposi?  </label>
                      <q-select rounded standout v-model="data.sarcamoKaposi" :options="sarcamoKaposi" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Síndrome de desgaste asociado al VIH? </label>
                      <q-select rounded standout v-model="data.sindromeDesgasteVih" :options="sindromeDesgasteVih" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Leucoencefalopatía multifocal progresiva o encefalopatía por VIH? </label>
                      <q-select rounded standout v-model="data.leucoencefalopatiaMultifocalVih" :options="leucoencefalopatiaMultifocalVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Toxoplasmosis cerebral? (solo en personas mayores de 1 mes de edad): </label>
                      <q-select rounded standout v-model="data.toxoplasmosisCerebral1Mes" :options="toxoplasmosisCerebral1Mes" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>¿Demencia asociada al VIH? (solo para personas con diagnóstico de VIH antes de 2017) </label>
                      <q-select rounded standout v-model="data.demenciaAsociadaVih" :options="demenciaAsociadaVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>¿Neumonía intersticial linfoidea? (solo para personas con diagnóstico de VIH antes de 2017) </label>
                      <q-select rounded standout v-model="data.neumoniaIntersticialLinfoidea" :options="neumoniaIntersticialLinfoidea" label="Seleccionar" />
                  </div>
              </div>

              <div class="row actions cien q-mt-xl">
                <div class="item align_right cien">
                  <q-btn rounded class="azul_boton btn_crear" text-color="white" icon-right="save" label="Guardar" type="submit" @click="type = 'borrador'" v-if="status !== 'finalizado'"/>
                </div>
                <div class="item cien align_right cien q-mt-md">
                  <q-btn rounded class="bg_botn_white_border_green btn_crear q-mr-md" text-color="white" icon="chevron_left" label="Atrás" @click="previousStep()" />
                  <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
                  <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'siguiente'" type="submit" label="Siguiente" />
                </div>
              </div>
          </div>

          <div class="wrp_forms w_50" v-if="sixStep">
            <h4 class="titulo_fondo w_100">Condición actual de la persona que vive con VIH</h4>

              <div class="row dos_items">
                  <div class="item">
                      <label>Código de habilitación de la sede de la IPS donde se hace el seguimiento y atención al usuario actualmente: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.codigoSedeIps"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Municipio de la IPS:  </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.municipioIps"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Resultado del último colesterol LDL: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.resultadoUltimoCoresterolLdl"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Resultado del último nivel de triglicéridos: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.resultadoUltimoNivelTrigliceridos"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Resultado de la última hemoglobina sérica: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.resultadoUltimaHemoglobinaSerica"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Resultado de la última ALT o TGP sérica: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.resutadoUltimaAltTgpSerica"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Resultado de la última creatinina sérica: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.resultadoUltimaCreatininaSerica"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Resultado de la última glucemia sérica en ayuno: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.resultadoUltimaGlucemiaSericaAyuno"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Resultado de la última medición del peso corporal: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.resultadoUltimaMedicionPeso"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Talla: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.talla"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Medicamento 1 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento1Antituberculoso12"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Medicamento 2 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento2Antituberculoso12"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento 3 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento3Antituberculoso12"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Medicamento 4 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento4Antituberculoso12"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento 5 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento5Antituberculoso12"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Medicamento 6 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento6Antituberculoso12"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento 7 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento7Antituberculoso12"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Medicamento 8 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento8Antituberculoso12"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento 9 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento9Antituberculoso12"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Valor del último conteo de linfocitos T CD4 realizado en el período de observación</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.valorUltimoConteoLinfocitosCd4"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
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
                  <div class="item">
                      <label>Valor de la última carga viral para VIH realizada en el período de observación </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.valorUltimaCargaViralVih"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row actions cien q-mt-xl">
                <div class="item align_right cien">
                  <q-btn rounded class="azul_boton btn_crear" text-color="white" icon-right="save" label="Guardar" type="submit" @click="type = 'borrador'" v-if="status !== 'finalizado'"/>
                </div>
                <div class="item cien align_right cien q-mt-md">
                  <q-btn rounded class="bg_botn_white_border_green btn_crear q-mr-md" text-color="white" icon="chevron_left" label="Atrás" @click="previousStep()" />
                  <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
                  <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'siguiente'" type="submit" label="Siguiente" />
                </div>
              </div>
          </div>
          <div class="wrp_forms w_50" v-if="sevenStep">
            <h4 class="titulo_fondo w_100">Terapia Antirretroviral (TAR) Actual</h4>

              <div class="row dos_items">
                  <div class="item">
                      <label>Recibe TAR</label>
                      <q-select rounded standout v-model="data.RecibeTar" :options="RecibeTar" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de inicio de los medicamentos de la TAR que recibe actualmente la persona que viven con VIH: </label>
                        <q-input filled v-model="data.inicioMedicamentosTarPersonaViven">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.inicioMedicamentosTarPersonaViven">
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
                      <label>Medicamento 1 de la TAR actual: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento1TarActual"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Medicamento 2 de la TAR actual:</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento2TarActual"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento 3 de la TAR actual: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento3TarActual"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Medicamento 4 de la TAR actual:</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento4TarActual"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Medicamento 5 de la TAR actual: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento5TarActual"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Medicamento 6 de la TAR actual:</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.medicamento6TarActual"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row uno_items">
                  <div class="item">
                      <label>Número de meses que se dispensó la fórmula completa de TAR durante los 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.mesesDispensoFormulaTar"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row actions cien q-mt-xl">
                <div class="item align_right cien">
                  <q-btn rounded class="azul_boton btn_crear" text-color="white" icon-right="save" label="Guardar" type="submit" @click="type = 'borrador'" v-if="status !== 'finalizado'"/>
                </div>
                <div class="item cien align_right cien q-mt-md">
                  <q-btn rounded class="bg_botn_white_border_green btn_crear q-mr-md" text-color="white" icon="chevron_left" label="Atrás" @click="previousStep()" />
                  <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
                  <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'siguiente'" type="submit" label="Siguiente" />
                </div>
              </div>
          </div>

          <div class="wrp_forms w_50" v-if="eightStep">
            <h4 class="titulo_fondo w_100">Intervenciones de prevención en la persona que vive con VIH</h4>

              <div class="row dos_items">
                  <div class="item">
                      <label>Número de condones suministrados en el último año</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.numeroCondonesAño"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Método de planificación familiar de la persona que vive con VIH (diferente al condón como método de protección) </label>
                      <q-select rounded standout v-model="data.metodoPlanificacionViveVih" :options="metodoPlanificacionViveVih" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Vacunación contra la hepatitis A</label>
                      <q-select rounded standout v-model="data.vacunacionHepatitisA" :options="vacunacionHepatitisA" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Vacunación contra la hepatitis B: </label>
                      <q-select rounded standout v-model="data.vacunacionHepatitisB" :options="vacunacionHepatitisB" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Vacunación contra neumococo: </label>
                      <q-select rounded standout v-model="data.vacunacionNeumococo" :options="vacunacionNeumococo" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Tamizaje clínico para tuberculosis (TB) activa en la última consulta: </label>
                      <q-select rounded standout v-model="data.tamizajeTuberculosisUltima" :options="tamizajeTuberculosisUltima" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Se hizo PPD o pruebas equivalentes para la identificación de tuberculosis latente en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.ppdTuberculosis12" :options="ppdTuberculosis12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Recibió tratamiento para tuberculosis latente en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.tratamientoTuberculosisLatente" :options="tratamientoTuberculosisLatente" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Se hizo tamizaje para sífilis en la persona que vive con VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.tamizajeSifilis12" :options="tamizajeSifilis12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Recibió tratamiento para Sífilis: </label>
                      <q-select rounded standout v-model="data.tratamientoSifilis" :options="tratamientoSifilis" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Se hizo tamizaje para VPH anal (hombre/mujer) en la persona que vive con VIH, en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.tamizajeVphViveVih" :options="tamizajeVphViveVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>88.  Se hizo tamizaje para hepatitis B en la persona que vive con VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.tamizajeHepatitisBViveVih" :options="tamizajeHepatitisBViveVih" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Se hizo tamizaje para hepatitis C en la persona que vive con VIH en los últimos 12 meses </label>
                      <q-select rounded standout v-model="data.tamizajeHepatitisCViveVih" :options="tamizajeHepatitisBViveVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Resultado de la evaluación de riesgo cardiovascular en la persona que vive con VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.evaluacionCardiovascularViveVih"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row actions cien q-mt-xl">
                <div class="item align_right cien">
                  <q-btn rounded class="azul_boton btn_crear" text-color="white" icon-right="save" label="Guardar" type="submit" @click="type = 'borrador'" v-if="status !== 'finalizado'"/>
                </div>
                <div class="item cien align_right cien q-mt-md">
                  <q-btn rounded class="bg_botn_white_border_green btn_crear q-mr-md" text-color="white" icon="chevron_left" label="Atrás" @click="previousStep()" />
                  <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
                  <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'siguiente'" type="submit" label="Siguiente" />
                </div>
              </div>
          </div>

          <div class="wrp_forms w_50" v-if="nineStep">
            <h4 class="titulo_fondo w_100">Profilaxis en el período de reporte</h4>

              <div class="row dos_items">
                  <div class="item">
                      <label>Profilaxis para MAC (Mycobacterium avium complex). </label>
                      <q-select rounded standout v-model="data.profilaxisMac" :options="profilaxisMac" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Profilaxis para Criptococo neoformans. </label>
                      <q-select rounded standout v-model="data.profilaxisCriptococo" :options="profilaxisCriptococo" label="Seleccionar" />
                  </div>
              </div>

              <div class="row uno_items">
                  <div class="item">
                      <label>Profilaxis para pneumocystis jirovecii. </label>
                      <q-select rounded standout v-model="data.profilaxisJirovecii" :options="profilaxisJirovecii" label="Seleccionar" />
                  </div>
              </div>

              <h4 class="titulo_fondo w_100">Situación administrativa a la fecha de corte</h4>

              <div class="row dos_items">
                  <div class="item">
                      <label>Costo total de la atención no hospitalaria de la persona viviendo con VIH en relación con la atención del VIH: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.costoAtencionNoHospitalariaVih"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Costo total de la atención hospitalaria de la persona viviendo con VIH en relación con la atención del VIH:  </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.costoAtencionHospitalariaVih"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Número de hospitalizaciones en el periodo relacionadas con el VIH</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.hospitalizacionesConVih"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>Novedad del usuario respecto al reporte anterior: </label>
                      <q-select rounded standout v-model="data.novedadUsuarioReporteAnterior" :options="novedadUsuarioReporteAnterior" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Fecha de desafiliación de la entidad</label>
                        <q-input filled v-model="data.desafiliacionEntidad">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.desafiliacionEntidad">
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
                      <label>Entidad a la cual se trasladó el usuario con VIH desafiliado: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.novedadUsuarioReporteAnterior"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Fecha de Muerte: </label>
                        <q-input filled v-model="data.fechaMuerte">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaMuerte">
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
                      <label>Causa de Muerte </label>
                      <q-select rounded standout v-model="data.causaMuerte" :options="causaMuerte" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>Fecha de Corte: </label>
                        <q-input filled v-model="data.fechaCorte">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaCorte">
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
                      <label>Código Único BDUA BDEX PVS MSPS</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.codigoUnicoo"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row actions cien q-mt-xl">
                <div class="item align_right cien">
                  <q-btn rounded class="azul_boton btn_crear" text-color="white" icon-right="save" label="Guardar" type="submit" @click="type = 'borrador'" v-if="status !== 'finalizado'"/>
                </div>
                <div class="item cien align_right cien q-mt-md">
                  <q-btn rounded class="bg_botn_white_border_green btn_crear q-mr-md" text-color="white" icon="chevron_left" label="Atrás" @click="previousStep()" />
                  <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
                  <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'siguiente'" type="submit" label="Siguiente" />
                </div>
              </div>
          </div>
          <div class="w_48 ">
            <q-pdfviewer
              v-model="show"
              type="html5"
              :src="urlSite + pdf"
              content-class="container"
              inner-content-class="container"
              v-if="pdfs.length !== 0"
            />
            <div class="lista_botones vertical">
              <q-btn rounded class="bg_botn_verde btn_crear cambiar_pdf" @click="popcambiarpdf = true" text-color="white" icon-right="autorenew" label="Cambiar pdf" />
              <q-btn rounded class="bg_botn_verde btn_crear cambiar_pdf" @click="popuprealizaranotacion = true" text-color="white" icon-right="border_color" label="Realizar anotación" />
            </div>
            <div class="anotaciones_pdf doc-note" v-if="anotations.length !== 0">
              <h5 class="titulo_nota">
                Anotaciones
              </h5>
              <ul>
                <li v-for="(item, key) in anotations" :key="key"><span>{{ item.title }}</span><q-btn @click="openPopupAnotations(item)" rounded class="bg_botn_azul" text-color="white" icon-right="visibility" label="Ver" /></li>
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

      <q-dialog v-model="popuprealizaranotacion">
          <q-card style="width: 700px; max-width: 80vw;" class="pop_cambiarpsf">
            <q-card-section class="q-pa-md">
              <h4>Crear Anotaciones</h4>
              <div class="desc_pop">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
              </div>
              <q-form>
                <div class="content_input_anota">
                  <span class="azul">Observación*</span>
                  <q-input
                    v-model="annotationText"
                    filled
                    class="cien radius_30"
                    type="textarea"
                  />
                </div>
                <div class="wrp_button flex-end q-py-md">
                  <q-btn rounded class="azul_boton btn_crear" text-color="white" type="button" icon-right="save" label="Guardar" @click="saveAnnotation"/>
                </div>
              </q-form>
              <q-btn class="close_pop" icon="close" flat round dense v-close-popup />
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
      urlSite: 'http://saspdev.com',
      show: true,
      firstStep: true,
      annotationText: '',
      secondStep: false,
      thirdStep: false,
      fourthStep: false,
      fiveStep: false,
      sixStep: false,
      sevenStep: false,
      eightStep: false,
      nineStep: false,
      data: {
        pregnantWoman: ''
      },
      popcambiarpdf: false,
      popupanotacion: false,
      popuprealizaranotacion: false,
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
      documentTypesChildres: [
        { id: 'CC', label: 'Cédula ciudadanía' },
        { id: 'CE', label: 'Cédula de extranjería' },
        { id: 'CD', label: 'Carné diplomático' },
        { id: 'PA', label: 'Pasaporte' },
        { id: 'SC', label: 'Salvoconducto' },
        { id: 'PE', label: 'Permiso Especial de Permanencia' },
        { id: 'RC', label: 'Registro civil' },
        { id: 'TI', label: 'Tarjeta de identidad' },
        { id: 'CN', label: 'Certificado de nacido vivo' },
        { id: 'AS', label: 'Adulto sin identificar' },
        { id: 'MS', label: 'Menor sin identificar' },
        { id: 'NA', label: 'No aplica (no es menor de 12 meses expuesto al VIH)' }
      ],
      childrens: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' }
      ],
      optionsTuberculosis: [
        { id: '1', label: 'Tiene tuberculosis activa al corte del periodo de observación.' },
        { id: '2', label: 'Tuvo tuberculosis activa en el periodo de observación.' },
        { id: '3', label: 'No tuvo tuberculosis activa en el período de observación.' }
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
      type: '',
      pdfs: [],
      pdf: '',
      anotations: [],
      anotation: [],
      answersConfirmedDx: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '9', label: 'No aplica (no es menor de 12 meses expuesto al VIH)' }
      ],
      profilaxisOptions: [
        { id: '1', label: 'Sí, recibió profilaxis por 42 días con Zidovudina.' },
        { id: '2', label: 'Sí, recibió profilaxis con Nevirapina 3 dosis al nacimiento más Zidovudina por 42 días.' },
        { id: '3', label: 'Sí, recibió profilaxis, pero incompleta.' },
        { id: '4', label: 'Actualmente está recibiendo profilaxis.' },
        { id: '5', label: 'No recibió profilaxis con antirretrovirales.' },
        { id: '9', label: 'No aplica (no es menor de 12 meses expuesto al VIH)' }
      ],
      viaLacteaOptions: [
        { id: '1', label: 'Recibió fórmula láctea de forma continua desde el nacimiento hasta los 12 meses de vida.' },
        { id: '2', label: 'Recibió fórmula láctea por menos de 12 meses.' },
        { id: '3', label: 'Está recibiendo fórmula láctea (es menor de 12 meses).' },
        { id: '4', label: 'No recibió fórmula láctea.' },
        { id: '9', label: 'No aplica (no es menor de 12 meses expuesto al VIH).' }
      ],
      conditionFinalChildOptions: [
        { id: '1', label: 'Diagnóstico confirmado de VIH.' },
        { id: '2', label: 'Se descartó infección por VIH.' },
        { id: '3', label: 'Aún no se ha definido la condición final del menor.' },
        { id: '9', label: 'No aplica (no es menor de 12 meses expuesto al VIH)' }
      ],
      comoLlegoLaPrueba: [
        { id: '1', label: 'Por solicitud de la propia persona.' },
        { id: '2', label: 'Solicitada por el médico en estudio de un cuadro clínico sospechoso de VIH/Sida (hospitalizado o no).' },
        { id: '3', label: 'Oferta de prueba a gestante en servicio de salud.' },
        { id: '4', label: 'Oferta de prueba por diagnóstico de Tuberculosis (TB) activa en servicio de salud.' },
        { id: '5', label: 'Oferta de prueba por diagnóstico de otras ITS.' },
        { id: '6', label: 'Exposición ocupacional.' },
        { id: '7', label: 'Violencia sexual.' },
        { id: '8', label: 'Al donar sangre.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' },
        { id: '10', label: 'Persona menor de 12 meses, en seguimiento por ser hijo de madre viviendo con VIH.' },
        { id: '11', label: 'Oferta realizada en la comunidad, incluyendo gestantes y personas con TB.' },
        { id: '12', label: 'Otras razones.' },
        { id: '13', label: 'No se le ha realizado la prueba presuntiva' }
      ],
      entidadReportaVih: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico de VIH)' }
      ],
      entidadReportaAnterior: [
        { id: '0', label: 'No tenía ningún aseguramiento o el diagnóstico fue realizado en el extranjero.' },
        { id: '8', label: 'No se conoce la información.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico de VIH o que ha estado siempre en la entidad que reporta).' }
      ],
      mecanismoTransmisionVih: [
        { id: '1', label: 'Transmisión sexual.' },
        { id: '2', label: 'Transfusión de hemoderivados.' },
        { id: '3', label: 'Uso de agujas o elementos cortopunzantes.' },
        { id: '4', label: 'Transmisión materno infantil.' },
        { id: '5', label: 'Accidente ocupacional' },
        { id: '6', label: 'Violencia sexual.' },
        { id: '7', label: 'No se conoce.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      estadoClinicoAlMomento: [
        { id: '0', label: 'Estado 0' },
        { id: '1', label: 'Estado 1' },
        { id: '2', label: 'Estado 2' },
        { id: '3', label: 'Estado 3' },
        { id: '4', label: 'Estado desconocido' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      verificacionConteoLinfocitos: [
        { id: '1', label: 'Sí se realizó' },
        { id: '2', label: 'No se realizó.' },
        { id: '3', label: 'No se tiene porque el diagnóstico se hizo antes del año 2000.' },
        { id: '4', label: 'No se tiene porque el diagnóstico de VIH se hizo en una institución diferente a la que  reporta.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      conteoLinfocitosCd4: [
        { id: '1', label: 'No aplica (persona no tiene VIH).' },
        { id: '2', label: 'No se realizó.' },
        { id: '3', label: 'Desconocido' }
      ],
      verificacionCargaViral: [
        { id: '2', label: 'No se realizó.' },
        { id: '3', label: 'No se tiene porque el diagnóstico se hizo antes del año 2000.' },
        { id: '4', label: 'No se tiene porque el diagnóstico de VIH se hizo en una institución diferente a la que reporta' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      cargaViralEnresultado: [
        { id: '99999999', label: 'No aplica (persona no tiene VIH).' },
        { id: '99999998', label: 'No se realizó.' },
        { id: '99999997', label: 'Desconocido (No se tiene porque el diagnóstico se hizo antes del año 2000 o si el diagnóstico se hizo en una institución diferente a la que reporta)' }
      ],
      medicamento1InicioTar: [
        { id: '1', label: 'Desconocido.' },
        { id: '9', label: 'No aplica. (No ha iniciado TAR o persona sin diagnostico confirmado)' }
      ],
      medicamento2InicioTar: [
        { id: '1', label: 'Desconocido.' },
        { id: '0', label: 'No recibió otros medicamentos.' },
        { id: '9', label: 'No aplica.(No ha iniciado TAR o persona sin diagnostico confirmado)' }
      ],
      medicamento3InicioTar: [
        { id: '1', label: 'Desconocido.' },
        { id: '0', label: 'No recibió otros medicamentos.' },
        { id: '9', label: 'No aplica.(No ha iniciado TAR o persona sin diagnostico confirmado)' }
      ],
      medicamento4InicioTar: [
        { id: '1', label: 'Desconocido.' },
        { id: '0', label: 'No recibió otros medicamentos.' },
        { id: '9', label: 'No aplica.(No ha iniciado TAR o persona sin diagnostico confirmado)' }
      ],
      medicamento5InicioTar: [
        { id: '1', label: 'Desconocido.' },
        { id: '0', label: 'No recibió otros medicamentos.' },
        { id: '9', label: 'No aplica.(No ha iniciado TAR o persona sin diagnostico confirmado)' }
      ],
      linfocitosCD4InicioTar: [
        { id: '1', label: 'Sí se realizó ' },
        { id: '2', label: 'No se realizó.' },
        { id: '3', label: 'No se tiene porque el inicio de la TAR se hizo antes del año 2000.' },
        { id: '4', label: 'No se tiene porque el inicio de la TAR se hizo en una institución diferente a la que reporta. ' },
        { id: '5', label: 'No ha iniciado TAR' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      valorLinfocitosCD4InicioTar: [
        { id: '9999', label: 'No aplica (persona no tiene VIH). ' },
        { id: '9998', label: 'No se realizó.' },
        { id: '9997', label: 'Desconocido. ' },
        { id: '9996', label: 'No ha iniciado TAR.' }
      ],
      cargaMomentoInicioTar: [
        { id: '1', label: 'Sí se realizó ' },
        { id: '2', label: 'No se realizó.' },
        { id: '3', label: 'No se tiene porque el inicio de la TAR se hizo antes del año 2000.' },
        { id: '4', label: 'No se tiene porque el inicio de la TAR se hizo en una institución diferente a la que reporta. ' },
        { id: '5', label: 'No ha iniciado TAR' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      cargaViralInicioTar: [
        { id: '99999999', label: 'No aplica (persona no tiene VIH).' },
        { id: '99999998', label: 'No se realizó.' },
        { id: '99999997', label: 'Desconocido. ' },
        { id: '99999996', label: 'No ha iniciado TAR.' }
      ],
      motivoInicioTar: [
        { id: '1', label: 'Por infección grave o avanzada del VIH (patología que define Sida).' },
        { id: '2', label: 'Por conteo de linfocitos T CD4, porcentaje de linfocitos T CD4 o caída rápida de los linfocitos T CD4.' },
        { id: '3', label: 'Por coinfección con hepatitis B o hepatitis C ' },
        { id: '4', label: 'Por historia de enfermedad cardiovascular.' },
        { id: '5', label: 'Por riesgo cardiovascular mayor al 20% por Framingham (ajustado para Colombia).' },
        { id: '6', label: 'Por nefropatía asociada al VIH.' },
        { id: '7', label: 'Por estado previo a la concepción, gestación, puerperio o lactancia materna.' },
        { id: '8', label: 'Por carga viral.' },
        { id: '10', label: ' Por edad.' },
        { id: '11', label: ' Por tener pareja serodiscordante.' },
        { id: '12', label: ' Por infección temprana.' },
        { id: '13', label: ' Estrategia de prueba y tratamiento inmediato.' },
        { id: '14', label: ' No se tiene porque el inicio de TAR se hizo en otra institución diferente a la que reporta.' },
        { id: '15', label: ' No se tiene porque, aunque el inicio de TAR se hizo en la institución que reporta, se hizo antes del año 2000.' },
        { id: '16', label: ' No ha iniciado TAR.' },
        { id: '17', label: ' Desconocido.' },
        { id: '99', label: ' No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      hepatitisBInicioTar: [
        { id: '1', label: 'Sí tenía coinfección con VHB ' },
        { id: '2', label: 'No tenía coinfección con VHB' },
        { id: '3', label: 'No se realizó tamizaje para VHB al inicio de la TAR' },
        { id: '4', label: 'No se conoce porque el inicio de la TAR se hizo en una entidad diferente a la que lo reporta. ' },
        { id: '5', label: 'No se conoce porque, aunque el inicio de TAR se hizo en la institución que reporta, se hizo antes del año 2000.' },
        { id: '6', label: 'No ha iniciado TAR' },
        { id: '7', label: 'Desconocido (no se realizó tamizaje)' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      hepatitisCInicioTar: [
        { id: '1', label: 'Sí tenía coinfección con VHB ' },
        { id: '2', label: 'No tenía coinfección con VHB' },
        { id: '3', label: 'No se realizó tamizaje para VHB al inicio de la TAR' },
        { id: '4', label: 'No se conoce porque el inicio de la TAR se hizo en una entidad diferente a la que lo reporta. ' },
        { id: '5', label: 'No se conoce porque, aunque el inicio de TAR se hizo en la institución que reporta, se hizo antes del año 2000.' },
        { id: '6', label: 'No ha iniciado TAR' },
        { id: '7', label: 'Desconocido (no se realizó tamizaje)' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      tuberculosisInicioTar: [
        { id: '1', label: 'Sí tenía coinfección con tuberculosis.' },
        { id: '2', label: 'No tenía coinfección con tuberculosis' },
        { id: '3', label: 'No se conoce porque el inicio de TAR se hizo en otra institución diferente a la que reporta. ' },
        { id: '4', label: 'No se conoce porque, aunque el inicio de TAR se hizo en la institución que reporta, se hizo antes del año 2000.' },
        { id: '5', label: 'No ha iniciado TAR ' },
        { id: '6', label: 'Desconocido' },
        { id: '9', label: 'No aplica (Persona no tiene VIH)' }
      ],
      cambiosEsquemaInicialTar: [
        { id: '1', label: 'Sí' },
        { id: '2', label: 'No, todavía continúa con el esquema inicial, sin ningún cambio en los medicamentos.(Paciente que no ha tenido cambios en el esquema inicial)' },
        { id: '3', label: 'No se conoce, porque la TAR se inició en una institución diferente a la que reporta.' },
        { id: '4', label: 'No se tiene esta información porque, aunque el inicio de TAR se hizo en la institución que reporta, se hizo antes del año 2000.' },
        { id: '5', label: 'No ha iniciado TAR' },
        { id: '6', label: 'Desconocido' },
        { id: '9', label: 'No aplica (Persona no tiene VIH)' }
      ],
      dispensoFormulaTar: [
        { id: '99', label: ' No aplica o no se conoce' },
        { id: '98', label: ' No se tiene porque se hizo el inicio de TAR en otra EPS diferente a la que reporta.' },
        { id: '97', label: ' No se tiene, porque, aunque el inicio de TAR se hizo en la EPS que reporta, se hizo antes del año 2000.' },
        { id: '0', label: 'No tiene VIH o no ha iniciado TAR' }
      ],
      consultasAsistirTarVih: [
        { id: '99', label: 'No aplica o no se conoce.' },
        { id: '98', label: 'No se tiene porque, se hizo el inicio de TAR en otra EPS diferente a la que reporta. ' },
        { id: '97', label: 'No se tiene porque, aunque el inicio de TAR se hizo en la EPS que reporta, se hizo antes del año 2000.' },
        { id: '96', label: 'Desconocido' }
      ],
      cambioMedicamentoTar: [
        { id: '1', label: 'Intolerancia o efectos secundarios' },
        { id: '2', label: 'Interacciones medicamentosas' },
        { id: '3', label: 'Falla (terapéutica, virológica, clínica o inmunológica) ' },
        { id: '4', label: 'Para facilitar la adherencia al esquema' },
        { id: '5', label: 'Por razones administrativas' },
        { id: '6', label: 'No se sabe por qué el esquema no fue cambiado en la institución que lo reporta ' },
        { id: '7', label: 'No sabe por qué no hay información disponible' },
        { id: '8', label: 'No se ha cambiado la TAR de inicio ' },
        { id: '10', label: ' No ha iniciado TAR' },
        { id: '99', label: ' No aplica' }
      ],
      medicamento1Cambio: [
        { id: '8', label: 'Desconocido' },
        { id: '9', label: 'No aplica' }
      ],
      medicamento2Cambio: [
        { id: '8', label: 'Desconocido' },
        { id: '9', label: 'No aplica' }
      ],
      medicamento3Cambio: [
        { id: '8', label: 'Desconocido' },
        { id: '9', label: 'No aplica' }
      ],
      medicamento4Cambio: [
        { id: '8', label: 'Desconocido' },
        { id: '9', label: 'No aplica' }
      ],
      fallasInicioTarAnual: [
        { id: '1', label: 'Sí ha tenído. ' },
        { id: '2', label: 'No ha tenído. ' },
        { id: '3', label: 'No se conoce, porque la TAR se inició en una institución diferente a la que reporta. ' },
        { id: '4', label: 'No se conoce porque, aunque el inicio de TAR se hizo en la institución que reporta, se hizo antes del año 2000. ' },
        { id: '5', label: 'No ha iniciado TAR  ' },
        { id: '9', label: 'No aplica ' }
      ],
      numeroFallasInicioTarAnual: [
        { id: '9', label: 'No aplica ' }
      ],
      infeccionBacteriana: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH o niño mayor o igual de 6 años)' }
      ],
      candidiasisETBP: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      tuberculosisPulmonar: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH o niño menor de 6 años)' }
      ],
      cancerCervix: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (hombre o persona sin diagnóstico confirmado de infección por VIH o niño menor de 6 años)' }
      ],
      coccidioidomicosis: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      citomegalovirus1Mes: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (menor de un mes de edad o persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      retinitisCitomegalovirus: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      herpesMayor1Mes: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (menor de un mes de edad o persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      diarreaIsospora1Mes: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      histoplasmosisDiseminada: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      linfomaBurkitt: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      neumoniaPneumocystis: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      neumoniaRecurrente: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH o niño menor de 6 años)' }
      ],
      septicemiaSalmonella: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      infeccionKansasiiOtras: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      criptococosisExtrapulmonar: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      sarcamoKaposi: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      sindromeDesgasteVih: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      leucoencefalopatiaMultifocalVih: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      toxoplasmosisCerebral1Mes: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (menor de un mes o persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      demenciaAsociadaVih: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona con diagnóstico de VIH en el año 2017 o posterior a este o persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      neumoniaIntersticialLinfoidea: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona con diagnóstico de VIH en el año 2017 o posterior a este o persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      atencionClinicaVihUsuario: [
        { id: '1', label: 'Médico experto, según la definición de la guía de práctica clínica vigente. ' },
        { id: '2', label: 'Infectólogo' },
        { id: '3', label: 'Internista ' },
        { id: '4', label: 'Pediatra' },
        { id: '5', label: 'Otro médico especialista, diferente a los anteriores. ' },
        { id: '6', label: 'Médico general' },
        { id: '7', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH) ' },
        { id: '1', label: ' Paciente en abandono.' }
      ],
      valoracionInfectologo: [
        { id: '1', label: 'Una vez ' },
        { id: '2', label: 'Dos veces ' },
        { id: '3', label: 'Tres veces ' },
        { id: '4', label: 'Cuatro o más ' },
        { id: '5', label: 'No ha tenido' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      estadoClinicoActual: [
        { id: '0', label: 'Estado 0 ' },
        { id: '1', label: 'Estado 1 ' },
        { id: '2', label: 'Estado 2 ' },
        { id: '3', label: 'Estado 3' },
        { id: '4', label: 'Estado desconocido' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      tieneNeuropatiaPeriferica: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      tieneLipotrofiaLipodistrofia: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      coinfeccionHepatitisBCronica: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      coinfeccionHepatitisCCronica: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      coinfeccionTuberculosisUltimo12: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      tuberculosisActivaTbVih12: [
        { id: '1', label: 'TB sensible' },
        { id: '2', label: 'TB monorresistente a isoniacida' },
        { id: '3', label: 'TB multidrogorresistente (MDR) (resistente a Isoniacida y a Rifampicina) ' },
        { id: '4', label: 'TB extremadamente resistente (XDR)' },
        { id: '5', label: 'TB con respuesta desconocida al tratamiento o sin tratamiento ' },
        { id: '6', label: 'No presenta TB activa en los últimos 12 meses' },
        { id: '7', label: 'TB monorresistente a rifampicina.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      coinfeccionTuberculosisTratamiento12: [
        { id: '1', label: 'Sí recibió tratamiento antituberculoso completo. ' },
        { id: '2', label: 'Sí recibe tratamiento antituberculoso a la fecha de corte.' },
        { id: '3', label: 'No recibe tratamiento antituberculoso porque rechaza el tratamiento. ' },
        { id: '4', label: 'No recibe tratamiento antituberculoso por no adherencia.' },
        { id: '5', label: 'No recibe tratamiento antituberculoso por desabastecimiento. ' },
        { id: '6', label: 'No recibe tratamiento antituberculoso por abandono del tratamiento. ' },
        { id: '7', label: 'No ha iniciado el tratamiento antituberculoso.' },
        { id: '8', label: 'No presenta o presentó TB activa en los últimos 12 meses' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      condicionEgresoAntituberculosos: [
        { id: '1', label: 'Curado' },
        { id: '2', label: 'Tratamiento terminado ' },
        { id: '3', label: 'Pérdida en el seguimiento ' },
        { id: '4', label: 'Fracaso' },
        { id: '5', label: 'Fallecido ' },
        { id: '6', label: 'No evaluado' },
        { id: '7', label: 'No recibió tratamiento' },
        { id: '8', label: 'Aún en tratamiento a la fecha de corte' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH) ' },
        { id: '1', label: ' No presenta o presentó TB activa en los últimos 12 meses' }
      ],
      cirrosisHepatica: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      enfermedadRenalVih: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      enfermedadCoronaria: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      infeccionTransmisionSexual12: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      neoplasiaNoSida: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      discapacidadFuncional: [
        { id: '0', label: 'No ' },
        { id: '1', label: 'Sí' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH' }
      ],
      RecibeTar: [
        { id: '1', label: 'Sí recibe TAR actualmente' },
        { id: '2', label: 'No recibe TAR porque rechaza el tratamiento.' },
        { id: '3', label: 'No recibe TAR por no adherencia del paciente ' },
        { id: '4', label: 'No recibe TAR por desabastecimiento.' },
        { id: '5', label: 'No recibe TAR por abandono del tratamiento. ' },
        { id: '6', label: 'No ha iniciado TAR' },
        { id: '7', label: 'No recibe TAR por orden médica.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      metodoPlanificacionViveVih: [
        { id: '1', label: 'Esterilización definitiva. ' },
        { id: '2', label: 'Dispositivo Intrauterino.' },
        { id: '3', label: 'Métodos hormonales de corta duración ' },
        { id: '4', label: 'Métodos hormonales de larga duración ' },
        { id: '5', label: 'Otros métodos.' },
        { id: '6', label: 'No planifica. (Incluye pacientes en menopausia que no utilizan método de planificación)' },
        { id: '7', label: 'No aplica niño o niña menor de 12 años' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      vacunacionHepatitisA: [
        { id: '1', label: 'Tiene esquema completo contra hepatitis A (2 dosis). ' },
        { id: '2', label: 'No se ha completado el esquema de vacunación.' },
        { id: '3', label: 'No se vacunó porque tiene niveles de anticuerpos adecuados contra la Hepatitis A. ' },
        { id: '4', label: 'No se vacunó porque no pertenece a grupos de riesgo.' },
        { id: '5', label: 'No ha sido vacunado.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      vacunacionHepatitisB: [
        { id: '1', label: 'Tiene esquema completo contra la hepatitis B (3 dosis).' },
        { id: '2', label: 'No se ha completado el esquema de vacunación contra la hepatitis B.' },
        { id: '3', label: 'No se vacunó porque tiene niveles de anticuerpos adecuados contra el antígeno de superficie de hepatitis B.' },
        { id: '4', label: 'No se vacunó por recuento de CD4 menor de 200 células/mm3 ' },
        { id: '5', label: 'No se vacunó porque tiene o tuvo coinfección con hepatitis B. ' },
        { id: '6', label: 'No ha sido vacunado.' },
        { id: '7', label: 'Esquema completo, pero no es respondedor.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      vacunacionNeumococo: [
        { id: '1', label: 'Se aplicó por primera vez ' },
        { id: '2', label: 'Se aplicó como refuerzo' },
        { id: '3', label: 'No se aplicó porque aún no la requiere ' },
        { id: '4', label: 'No se aplicó por otras razones' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      tamizajeTuberculosisUltima: [
        { id: '1', label: 'Se realizó tamizaje clínico para TB en la última consulta y fue positivo (presencia de por lo menos 1 de los 4 síntomas).' },
        { id: '2', label: 'Se realizó tamizaje clínico para TB en la última consulta y fue negativo (ausencia de los 4 síntomas).' },
        { id: '3', label: 'No se realizó tamizaje clínico porque tiene TB activa al momento del corte. ' },
        { id: '4', label: 'No se realizó tamizaje clínico para TB en la última consulta.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      ppdTuberculosis12: [
        { id: '1', label: 'Si se realizó y fue positiva ' },
        { id: '2', label: 'Si se realizó y fue negativa.' },
        { id: '3', label: 'No se realizó porque tiene un resultado anterior de PPD positivo. ' },
        { id: '4', label: 'No se realizó porque tiene o tuvo tuberculosis activa.' },
        { id: '5', label: 'No se realizó por severa inmunosupresión. ' },
        { id: '6', label: 'No se realizó la prueba.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      tratamientoTuberculosisLatente: [
        { id: '1', label: 'Sí recibió tratamiento con isoniacida' },
        { id: '2', label: 'Recibió tratamiento con rifapentina e isoniacida ' },
        { id: '3', label: 'Está recibiendo tratamiento con isoniacida' },
        { id: '4', label: 'Está recibiendo tratamiento con rifapentina e isoniacida ' },
        { id: '5', label: 'No recibió por tener tuberculosis activa' },
        { id: '6', label: 'No recibió porque ya fue tratado para TB latente ' },
        { id: '7', label: 'No recibió porque fue descartada la infección latente. ' },
        { id: '8', label: 'No recibió por otras razones' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH) ' },
        { id: '1', label: ' No se realizó la prueba para TB latente.' }
      ],
      tamizajeSifilis12: [
        { id: '1', label: 'Si se realizó y fue positivo. ' },
        { id: '2', label: 'Si se realizó y fue negativo.' },
        { id: '3', label: 'No se realizó porque está en tratamiento para sífilis. ' },
        { id: '4', label: 'No se realizó la prueba.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      tratamientoSifilis: [
        { id: '1', label: 'Recibió tratamiento completo ' },
        { id: '2', label: 'Está recibiendo tratamiento. ' },
        { id: '3', label: 'No recibió tratamiento' },
        { id: '4', label: 'No aplica, tamizaje de sífilis negativo. ' },
        { id: '5', label: 'No recibió porque no se realizó la prueba' },
        { id: '6', label: 'No aplica persona con cicatriz serológica que ya recibió tratamiento ' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      tamizajeVphViveVih: [
        { id: '1', label: 'Sí se realizó y fue positivo. ' },
        { id: '2', label: 'Sí se realizó y fue negativo.' },
        { id: '3', label: 'No se realizó porque tiene diagnóstico confirmado de infección por VPH. ' },
        { id: '4', label: 'No se realizó.' },
        { id: '5', label: 'Si se realizó, pero la muestra no fue satisfactoria.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH). ' },
        { id: '1', label: ' No aplica (paciente que vive con VIH y no tiene sexo anal).' }
      ],
      tamizajeHepatitisBViveVih: [
        { id: '1', label: 'Sí se realizó y fue positivo. ' },
        { id: '2', label: 'Sí se realizó y fue negativo.' },
        { id: '3', label: 'No se realizó porque ya tiene diagnóstico confirmado de hepatitis B.' },
        { id: '4', label: 'No se realizó por tener títulos de anticuerpos adecuados contra el antígeno de superficie de la hepatitis B.' },
        { id: '5', label: 'No se realizó.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      tamizajeHepatitisCViveVih: [
        { id: '1', label: 'Sí se realizó y fue positivo ' },
        { id: '2', label: 'Sí se realizó y fue negativo' },
        { id: '3', label: 'No se realizó porque ya tiene diagnóstico confirmado de hepatitis C. ' },
        { id: '4', label: 'No se realizó' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      profilaxisMac: [
        { id: '1', label: 'Sí, la recibió con claritromicina. ' },
        { id: '2', label: 'Sí, la recibió con azitromicina.' },
        { id: '3', label: 'Está recibiendo profilaxis con claritromicina.' },
        { id: '4', label: 'Está recibiendo profilaxis con azitromicina. ' },
        { id: '5', label: 'No recibió profilaxis' },
        { id: '6', label: 'Sí, la recibió con trimetropin sulfa.' },
        { id: '7', label: 'Está recibiendo profilaxis con trimetropin sulfa.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      profilaxisCriptococo: [
        { id: '1', label: 'Sí, recibió profilaxis con fluconazol ' },
        { id: '2', label: 'Está recibiendo profilaxis con fluconazol ' },
        { id: '3', label: 'No recibió profilaxis' },
        { id: '4', label: 'Sí, recibió profilaxis con Itraconazol ' },
        { id: '5', label: 'Está recibiendo profilaxis con Itraconazol' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      profilaxisJirovecii: [
        { id: '1', label: 'Sí recibió profilaxis con trimetoprim sulfa ' },
        { id: '2', label: 'Sí recibió profilaxis con clindamicina/primaquina ' },
        { id: '3', label: 'Sí recibió profilaxis con dapsona.' },
        { id: '4', label: 'Está recibiendo profilaxis con Trimetoprim Sulfa. ' },
        { id: '5', label: 'Está recibiendo profilaxis con Dapsona.' },
        { id: '6', label: 'Está recibiendo profilaxis con Clindamicina/Primaquina ' },
        { id: '7', label: 'No recibió profilaxis.' },
        { id: '9', label: 'No aplica (persona sin diagnóstico confirmado de infección por VIH)' }
      ],
      novedadUsuarioReporteAnterior: [
        { id: '1', label: 'Usuario ingresó a la entidad con diagnóstico de infección por el VIH' },
        { id: '2', label: 'Usuario antiguo en la entidad que se le realizó diagnóstico nuevo de infección por el VIH ' },
        { id: '3', label: 'Usuario antiguo en entidad y antiguo diagnóstico de infección por VIH que no había sido incluido en reporte.' },
        { id: '4', label: 'Usuario que falleció ' },
        { id: '5', label: 'Usuario que se desafilió' },
        { id: '6', label: 'Usuario para eliminar de la base de datos por corrección luego de auditoría interna o de la CAC por no tener alguno de los diagnósticos de reporte' },
        { id: '7', label: 'Usuario que firmó alta voluntaria del programa o la TAR por decisión propia.' },
        { id: '8', label: 'Usuario con cambio de tipo o número de identificación o cambio de nombre con el mismo número de identificación (por ejemplo, en el caso de personas transgénero).' },
        { id: '9', label: 'Usuario que abandonó el tratamiento y es imposible de ubicar.' },
        { id: '10', label: ' Usuario con diagnóstico confirmado de VIH, no incluido en reporte anterior y está fallecido en el momento del reporte actual.' },
        { id: '11', label: ' Usuario con diagnóstico confirmado de VIH, no incluido en el reporte anterior, pero que está desafiliado en el momento actual.' },
        { id: '12', label: ' Gestante incluida en el reporte pasado como en estudio para VIH, que obtuvo resultado negativo en la tamización' },
        { id: '13', label: ' Usuario con tuberculosis activa incluido en el reporte pasado como usuario en estudio para VIH, que obtuvo resultado negativo en la tamización.' },
        { id: '14', label: ' Hijo de madre con VIH que en el reporte anterior se informó como menor de 12 meses en estudio para VIH, que se le descartó la infección por el VIH.' },
        { id: '15', label: ' Suspensión del tratamiento por orden médica.' },
        { id: '16', label: ' Desafiliado al cual se le siguen prestando servicios porque no ha pasado a otra entidad aún (Sentencia T-760, continuidad en tratamiento). ' },
        { id: '17', label: ' Usuario que se fue al extranjero. ' },
        { id: '18', label: ' No presenta ninguna novedad.' },
        { id: '19', label: ' Paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' },
        { id: '20', label: ' Comunidad migrante de la República de Venezuela' },
        { id: '23', label: ' Paciente trasladado que fue glosado en periodo anterior que no fue gestionado por la entidad en el periodo.' }
      ],
      causaMuerte: [
        { id: '1', label: 'Muerte por VIH/SIDA.' },
        { id: '2', label: 'Muerte por otra patología no definitoria de SIDA. ' },
        { id: '3', label: 'Muerte por causa externa.' },
        { id: '4', label: 'La persona no ha fallecido.' }
      ],
      auditor: false,
      status: ''
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
      this.getAnotations()
    }

    var step = localStorage.getItem('step')
    if (step !== '' && step !== null) {
      switch (step) {
        case 'FirstStep':
          this.firstStep = true
          break
        case 'SecondStep':
          this.secondStep = true
          this.firstStep = false
          break
        case 'ThirdStep':
          this.thirdStep = true
          this.secondStep = false
          this.firstStep = false
          break
        case 'FourthStep':
          this.fourthStep = true
          this.secondStep = false
          this.firstStep = false
          this.thirdStep = false
          break
        case 'FiveStep':
          this.fiveStep = true
          this.fourthStep = false
          this.secondStep = false
          this.firstStep = false
          this.thirdStep = false
          break
        case 'SixStep':
          this.sixStep = true
          this.fiveStep = false
          this.fourthStep = false
          this.secondStep = false
          this.firstStep = false
          this.thirdStep = false
          break
        case 'SevenStep':
          this.sevenStep = true
          this.sixStep = false
          this.fiveStep = false
          this.fourthStep = false
          this.secondStep = false
          this.firstStep = false
          this.thirdStep = false
          break
        case 'EightStep':
          this.eightStep = true
          this.sevenStep = false
          this.sixStep = false
          this.fiveStep = false
          this.fourthStep = false
          this.secondStep = false
          this.firstStep = false
          this.thirdStep = false
          break
        case 'NineStep':
          this.nineStep = true
          this.eightStep = false
          this.sevenStep = false
          this.sixStep = false
          this.fiveStep = false
          this.fourthStep = false
          this.secondStep = false
          this.firstStep = false
          this.thirdStep = false
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
    saveAnnotation () {
      var _this = this
      var data = {
        type: 'saveAnnotation',
        data: { comment: this.annotationText },
        user: this.user.uid,
        status: 'Finalizado'
      }
      if (this.registerNid !== '') {
        data.id = this.registerNid
      }

      configServices.consumerStandar(this, 'asfa-rest/post', data, {
        callBack: (data) => {
          if (typeof data.error !== 'undefined') {
            return _this.$swal('Advertencia', 'Error al crear registro verifique que no haya un registro previamente creado para el paciente', 'error')
          }
          _this.getAnotations()
          _this.popuprealizaranotacion = false
          return _this.$swal('Advertencia', 'Anotación guardada correctamente', 'success')
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
          if (data[0].field_status === 'Finalizado') {
            _this.status = 'finalizado'
          }

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

      if (this.thirdStep) {
        this.secondStep = true
        this.thirdStep = false
      }
    },
    saveRegister () {
      var _this = this

      if (this.status !== 'finalizado') {
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

        if (this.secondStep === true) {
          if (typeof this.data.children !== 'undefined' && this.data.children.id === '1' && typeof this.data.documentTypeChildren !== 'undefined' && this.data.documentTypeChildren.id === 'NA') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.children !== 'undefined' && this.data.children.id === '1' && this.data.documentNumberChildren === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.children !== 'undefined' && this.data.children.id === '1' && typeof this.data.haveConfirmedVihDx !== 'undefined' && this.data.haveConfirmedVihDx.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.children !== 'undefined' && this.data.children.id === '1' && typeof this.data.profilaxis !== 'undefined' && this.data.profilaxis.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.children !== 'undefined' && this.data.children.id === '1' && typeof this.data.suministroViaLactea !== 'undefined' && this.data.suministroViaLactea.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.children !== 'undefined' && this.data.children.id === '1' && this.data.firstViralChargeVih === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.children !== 'undefined' && this.data.children.id === '1' && this.data.secondViralChargeVih === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.children !== 'undefined' && this.data.children.id === '1' && this.data.thirdViralChargeVih === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.children !== 'undefined' && this.data.children.id === '1' && typeof this.data.conditionFinalChild !== 'undefined' && this.data.conditionFinalChild.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.children !== 'undefined' && this.data.children.id === '1' && typeof this.data.pregnantWoman !== 'undefined' && parseInt(this.data.pregnantWoman.id) < 3) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4083', 'error')
          }

          if (typeof this.data.tuberculosis !== 'undefined' && parseInt(this.data.tuberculosis.id) < 3 && this.data.dateDxTuberculosisActiva === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2897', 'error')
          }

          if (typeof this.data.tuberculosis !== 'undefined' && parseInt(this.data.tuberculosis.id) < 3 && this.data.dateTamizajeTuberculosis === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2897', 'error')
          }

          if (typeof this.data.tuberculosis !== 'undefined' && parseInt(this.data.tuberculosis.id) < 3 && this.data.dateScreeningSecond !== '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B4084', 'error')
          }

          if (typeof this.data.documentTypeChildren !== 'undefined' && this.data.documentTypeChildren.id === 'NA' && (this.data.documentNumberChildren !== '55' && this.data.documentNumberChildren !== '9')) {
            return _this.$swal('Advertencia', 'Error en la validación No. B2926', 'error')
          }

          if (typeof this.data.documentTypeChildren !== 'undefined' && this.data.documentTypeChildren.id === 'NA' && typeof this.data.haveConfirmedVihDx !== 'undefined' && parseInt(this.data.haveConfirmedVihDx.id) <= 1) {
            return _this.$swal('Advertencia', 'Error en la validación No. B2926', 'error')
          }

          if (typeof this.data.documentTypeChildren !== 'undefined' && this.data.documentTypeChildren.id === 'NA' && typeof this.data.profilaxis !== 'undefined' && parseInt(this.data.profilaxis.id) <= 5) {
            return _this.$swal('Advertencia', 'Error en la validación No. B2926', 'error')
          }

          if (typeof this.data.documentTypeChildren !== 'undefined' && this.data.documentTypeChildren.id === 'NA' && typeof this.data.suministroViaLactea !== 'undefined' && parseInt(this.data.suministroViaLactea.id) <= 4) {
            return _this.$swal('Advertencia', 'Error en la validación No. B2926', 'error')
          }

          if (typeof this.data.documentTypeChildren !== 'undefined' && this.data.documentTypeChildren.id === 'NA' && typeof this.data.conditionFinalChild !== 'undefined' && parseInt(this.data.conditionFinalChild.id) <= 3) {
            return _this.$swal('Advertencia', 'Error en la validación No. B2926', 'error')
          }

          if (typeof this.data.documentTypeChildren !== 'undefined' && this.data.documentTypeChildren.id !== 'NA' && typeof this.data.children !== 'undefined' && parseInt(this.data.children.id) !== 1) {
            return _this.$swal('Advertencia', 'Error en la validación No. B5329', 'error')
          }

          if (this.data.documentNumberChildren === '9' && typeof this.data.children !== 'undefined' && parseInt(this.data.children.id) !== 0) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4159', 'error')
          }

          if (typeof this.data.haveConfirmedVihDx !== 'undefined' && parseInt(this.data.haveConfirmedVihDx.id) < 2 && typeof this.data.children !== 'undefined' && parseInt(this.data.children.id) !== 1) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4160', 'error')
          }

          if (typeof this.data.suministroViaLactea !== 'undefined' && parseInt(this.data.suministroViaLactea.id) < 5 && typeof this.data.children !== 'undefined' && parseInt(this.data.children.id) !== 1) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4160', 'error')
          }

          if (this.data.firstViralChargeVih === '1800-01-01') {
            if (this.data.resultFirstViralChargeVih !== '99999999') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2932', 'error')
            }

            if (this.data.secondViralChargeVih !== '1800-01-01') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2932', 'error')
            }

            if (this.data.thirdViralChargeVih !== '1800-01-01') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2932', 'error')
            }
          }

          if (this.data.firstViralChargeVih === '1846-01-01') {
            if (this.data.resultFirstViralChargeVih !== '55555555') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2933', 'error')
            }
          }

          if (Date.parse(this.data.firstViralChargeVih) > Date.parse(this.patient.field_json.birthdate)) {
            if (this.data.secondViralChargeVih !== '1800-01-01') {
              return _this.$swal('Advertencia', 'Error en la validación No. B3252', 'error')
            }

            if (this.data.thirdViralChargeVih !== '1833-01-01') {
              return _this.$swal('Advertencia', 'Error en la validación No. B3252', 'error')
            }

            if (this.data.firstViralChargeVih === this.data.thirdViralChargeVih) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2934', 'error')
            }

            if (Date.parse(this.data.thirdViralChargeVih) < Date.parse(this.data.firstViralChargeVih)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B3252', 'error')
            }

            if (Date.parse(this.data.thirdViralChargeVih) < Date.parse(this.data.secondViralChargeVih)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B3252', 'error')
            }
          }

          if (this.data.secondViralChargeVih === '1800-01-01') {
            if (this.data.resultSecondViralChargeVih !== '99999999') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2937', 'error')
            }
          }

          if (this.data.secondViralChargeVih === '1846-01-01') {
            if (this.data.resultSecondViralChargeVih !== '55555555') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2938', 'error')
            }
          }

          if (Date.parse(this.data.secondViralChargeVih) > Date.parse(this.patient.field_json.birthdate)) {
            if (Date.parse(this.data.thirdViralChargeVih) < Date.parse('1800-01-01')) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2940', 'error')
            }

            if (this.data.resultSecondViralChargeVih === '99999999') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2940', 'error')
            }

            if (Date.parse(this.data.thirdViralChargeVih) < Date.parse(this.data.secondViralChargeVih)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2940', 'error')
            }
          }

          if (this.data.thirdViralChargeVih === '1800-01-01') {
            if (this.data.resultThirdViralChargeVih !== '99999999') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2943', 'error')
            }
          }

          if (this.data.thirdViralChargeVih === '1846-01-01') {
            if (this.data.resultThirdViralChargeVih !== '55555555') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2944', 'error')
            }
          }

          if (Date.parse(this.data.thirdViralChargeVih) > Date.parse(this.patient.field_json.birthdate)) {
            if (Date.parse(this.data.secondViralChargeVih) > Date.parse(this.data.thirdViralChargeVih)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2945', 'error')
            }

            if (Date.parse(this.data.firstViralChargeVih) > Date.parse(this.data.thirdViralChargeVih)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2945', 'error')
            }
          }

          if (typeof this.data.conditionFinalChild !== 'undefined' && parseInt(this.data.conditionFinalChild.id) === 1 && typeof this.data.children !== 'undefined' && parseInt(this.data.children.id) !== 1) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4128', 'error')
          }

          if (Date.parse(this.data.dateDxTuberculosisActiva) > Date.parse(this.patient.field_json.birthdate)) {
            if (typeof this.data.tuberculosis !== 'undefined' && parseInt(this.data.tuberculosis.id) >= 3) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2945', 'error')
            }
          }

          if (Date.parse(this.data.dateTamizajeTuberculosis) > Date.parse(this.patient.field_json.birthdate)) {
            if (typeof this.data.tuberculosis !== 'undefined' && parseInt(this.data.tuberculosis.id) >= 3) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2945', 'error')
            }
          }
        }

        if (this.thirdStep === true) {
          if (this.data.fechaPruebaPresuntiva !== '1799-01-01' || this.data.fechaPruebaPresuntiva !== '1811-11-01' || this.data.fechaPruebaPresuntiva !== '1822-02-01' || this.data.fechaPruebaPresuntiva !== '1846-01-01') {
            if (Date.parse(this.data.fechaPruebaPresuntiva) < Date.parse(this.patient.field_json.birthdate)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2954', 'error')
            }

            if (Date.parse(this.data.fechaPruebaPresuntiva) > Date.parse(this.data.fechaCongirmacionDiagnostico)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2954', 'error')
            }
          }

          if (Date.parse(this.data.fechaPruebaPresuntiva) > Date.parse(this.patient.field_json.birthdate) && parseInt(this.data.comoLlegoLaPrueba.id) >= 13) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4163', 'error')
          }

          if (Date.parse(this.data.fechaPruebaPresuntiva) > Date.parse('1846-01-01') && parseInt(this.data.comoLlegoLaPrueba.id) >= 13) {
            return _this.$swal('Advertencia', 'Error en la validación No. B5330', 'error')
          }

          if (parseInt(this.data.comoLlegoLaPrueba.id) <= 13 && this.data.fechaPruebaPresuntiva === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B4401', 'error')
          }

          if (this.data.fechaCongirmacionDiagnostico !== '1846-01-01') {
            if (Date.parse(this.data.fechaCongirmacionDiagnostico) < Date.parse(this.patient.field_json.birthdate)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2958', 'error')
            }
          }

          if (this.data.fechaInicioAtencionVih !== '1800-01-01' || this.data.fechaInicioAtencionVih !== '1846-01-01') {
            if (Date.parse(this.data.fechaInicioAtencionVih) < Date.parse(this.data.fechaCongirmacionDiagnostico)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2963', 'error')
            }
          }

          if (this.data.estadoClinicoAlMomento.id === '4' && parseInt(this.data.conteoLinfocitosCd4) <= 3000) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4167', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '2') {
            if ((parseInt(this.data.conteoLinfocitosCd4) < 200 || parseInt(this.data.conteoLinfocitosCd4) >= 500)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B4167', 'error')
            }
          }

          if (this.data.estadoClinicoAlMomento.id === '1') {
            if ((parseInt(this.data.conteoLinfocitosCd4) < 500 || parseInt(this.data.conteoLinfocitosCd4) > 3000)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B5331', 'error')
            }
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && parseInt(this.data.conteoLinfocitosCd4) >= 200) {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.verificacionConteoLinfocitos.id === '1' && (parseInt(this.data.conteoLinfocitosCd4) === 9999 || parseInt(this.data.conteoLinfocitosCd4) === 9998)) {
            return _this.$swal('Advertencia', 'Error en la validación No. B3224', 'error')
          }

          if (parseInt(this.verificacionConteoLinfocitos.id) > 1 && parseInt(this.data.conteoLinfocitosCd4) < 5555) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4402', 'error')
          }

          if (this.data.verificacionCargaViral === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2968', 'error')
          }

          if (this.data.verificacionCargaViral !== '9') {
            if (this.data.verificacionCargaViral.id === '1' && parseInt(this.data.cargaViralEnresultado) >= 1000000) {
              return _this.$swal('Advertencia', 'Error en la validación No. B4169', 'error')
            }

            if (parseInt(this.data.verificacionCargaViral.id) > 1 && parseInt(this.data.cargaViralEnresultado) < 5555555) {
              return _this.$swal('Advertencia', 'Error en la validación No. B4403', 'error')
            }
          }
        }

        if (this.fourthStep === true) {
          if (this.data.inicioTerapiaAntirretroviral !== '1788-01-01' && this.data.inicioTerapiaAntirretroviral !== '1799-01-01' && this.data.inicioTerapiaAntirretroviral !== '1846-01-01') {
            if (Date.parse(this.data.inicioTerapiaAntirretroviral) < Date.parse(this.data.fechaCongirmacionDiagnostico)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B2976', 'error')
            }
          }

          if (Date.parse(this.data.inicioTerapiaAntirretroviral) >= Date.parse(this.data.fechaCongirmacionDiagnostico) && this.medicamento1InicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3225', 'error')
          }

          if (Date.parse(this.data.inicioTerapiaAntirretroviral) >= Date.parse(this.data.fechaCongirmacionDiagnostico) && this.medicamento2InicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3225', 'error')
          }

          if (Date.parse(this.data.inicioTerapiaAntirretroviral) >= Date.parse(this.data.fechaCongirmacionDiagnostico) && this.medicamento3InicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3225', 'error')
          }

          if (Date.parse(this.data.inicioTerapiaAntirretroviral) >= Date.parse(this.data.fechaCongirmacionDiagnostico) && this.medicamento4InicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3225', 'error')
          }

          if (Date.parse(this.data.inicioTerapiaAntirretroviral) >= Date.parse(this.data.fechaCongirmacionDiagnostico) && this.medicamento5InicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3225', 'error')
          }

          if (this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            if (this.data.medicamento1InicioTar.id !== '9') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2978', 'error')
            }

            if (this.data.linfocitosCD4InicioTar.id !== '5') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (this.data.valorLinfocitosCD4InicioTar !== '9996') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (this.data.cargaMomentoInicioTar.id !== '5') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (this.data.cargaViralInicioTar !== '99999996') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (this.data.motivoInicioTar.id !== '16') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (this.data.hepatitisBInicioTar.id !== '6') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (this.data.hepatitisCInicioTar.id !== '6') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (this.data.tuberculosisInicioTar.id !== '5') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }
          }

          if (this.data.linfocitosCD4InicioTar.id === '1' && parseInt(this.data.valorLinfocitosCD4InicioTar) > 3000) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4172', 'error')
          }

          if (parseInt(this.data.linfocitosCD4InicioTar.id) < 5 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5335', 'error')
          }

          if (parseInt(this.data.valorLinfocitosCD4InicioTar) <= 3000 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5338', 'error')
          }

          if (this.data.cargaMomentoInicioTar === '1') {
            if (parseInt(this.data.cargaViralInicioTar) > 10000000 || this.data.cargaViralInicioTar !== '99999994' || this.data.cargaViralInicioTar !== '99999995') {
              return _this.$swal('Advertencia', 'Error en la validación No. B3226', 'error')
            }
          }

          if (this.data.motivoInicioTar.id === '16' && this.data.inicioTerapiaAntirretroviral !== '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3255', 'error')
          }

          if (parseInt(this.data.motivoInicioTar.id) < 16 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5341', 'error')
          }

          if (this.data.motivoInicioTar.id === '17' && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5342', 'error')
          }

          if (this.data.hepatitisBInicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2996', 'error')
          }

          if (this.data.hepatitisBInicioTar.id === '6' && this.data.inicioTerapiaAntirretroviral !== '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3256', 'error')
          }

          if (parseInt(this.data.hepatitisBInicioTar.id) < 6 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5343', 'error')
          }

          if (this.data.hepatitisBInicioTar.id === '7' && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5344', 'error')
          }

          if (this.data.hepatitisCInicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2998', 'error')
          }

          if (this.data.hepatitisCInicioTar.id === '6' && this.data.inicioTerapiaAntirretroviral !== '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3257', 'error')
          }

          if (parseInt(this.data.hepatitisCInicioTar.id) < 6 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5345', 'error')
          }

          if (this.data.hepatitisCInicioTar.id === '7' && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5346', 'error')
          }

          if (this.data.tuberculosisInicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3000', 'error')
          }

          if (this.data.tuberculosisInicioTar.id === '5' && this.data.inicioTerapiaAntirretroviral !== '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3258', 'error')
          }

          if (parseInt(this.data.tuberculosisInicioTar.id) < 5 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5347', 'error')
          }

          if (this.data.cambiosEsquemaInicialTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3006', 'error')
          }

          if (this.data.cambiosEsquemaInicialTar.id === '1' && this.data.medicamentoEsquemaInicialTar === '1800-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3227', 'error')
          }

          if (this.data.cambiosEsquemaInicialTar.id === '1' && (parseInt(this.data.cambioMedicamentoTar) > 7 || this.data.cambioMedicamentoTar !== '55')) {
            return _this.$swal('Advertencia', 'Error en la validación No. B3227', 'error')
          }

          if (this.data.medicamentoEsquemaInicialTar !== '1777-01-01' && this.data.medicamentoEsquemaInicialTar !== '1788-01-01' && this.data.medicamentoEsquemaInicialTar !== '1800-01-01' && this.data.medicamentoEsquemaInicialTar !== '1845-01-01' && this.data.medicamentoEsquemaInicialTar !== '1846-01-01') {
            if (Date.parse(this.data.medicamentoEsquemaInicialTar) < Date.parse(this.data.inicioTerapiaAntirretroviral)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B3008', 'error')
            }
          }
        }

        if (this.fiveStep === true) {
          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.infeccionBacteriana !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.candidiasisETBP !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.tuberculosisPulmonar !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.cancerCervix !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.coccidioidomicosis !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.citomegalovirus1Mes !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.retinitisCitomegalovirus !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.herpesMayor1Mes !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.diarreaIsospora1Mes !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.histoplasmosisDiseminada !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.linfomaBurkitt !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.neumoniaPneumocystis !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.neumoniaRecurrente !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.septicemiaSalmonella !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.infeccionKansasiiOtras !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.criptococosisExtrapulmonar !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.sarcamoKaposi !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.sindromeDesgasteVih !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.leucoencefalopatiaMultifocalVih !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.toxoplasmosisCerebral1Mes !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.demenciaAsociadaVih !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (this.data.estadoClinicoAlMomento.id === '3' && this.data.neumoniaIntersticialLinfoidea !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }
        }

        if (this.sixStep === true) {
          if (this.data.estadoClinicoActual.id !== '3' && this.data.estadoClinicoAlMomento.id === '3') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3260', 'error')
          }

          if ((parseInt(this.data.estadoClinicoActual.id) <= 1 || parseInt(this.data.estadoClinicoActual.id) >= 4) && this.data.estadoClinicoAlMomento.id === '2') {
            return _this.$swal('Advertencia', 'Error en la validación No. B4168', 'error')
          }

          if (parseInt(this.data.valorLinfocitosCD4InicioTar) < 500 && (parseInt(this.data.estadoClinicoActual.id) <= 1 || parseInt(this.data.estadoClinicoActual.id) >= 4)) {
            return _this.$swal('Advertencia', 'Error en la validación No. B5336', 'error')
          }

          if (parseInt(this.data.valorLinfocitosCD4InicioTar) < 200 && this.data.estadoClinicoActual.id !== '3') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5337', 'error')
          }
        }

        var comodines = []

        if (this.data.dateCulminationReported === '1833-03-03' || this.data.dateCulminationReported === '1822-02-01' || this.data.dateCulminationReported === '1799-01-01' || this.data.dateCulminationReported === '1811-01-01' || this.data.dateCulminationReported === '1800-01-01' || this.data.dateCulminationReported === '1833-03-03' || this.data.dateCulminationReported === '1845-01-01' || this.data.dateCulminationReported === '1846-01-01' || this.data.dateCulminationReported === '1777-01-01' || this.data.dateCulminationReported === '1788-01-01') {
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

        if (this.data.firstViralChargeVih === '1833-03-03' || this.data.firstViralChargeVih === '1822-02-01' || this.data.firstViralChargeVih === '1799-01-01' || this.data.firstViralChargeVih === '1811-01-01' || this.data.firstViralChargeVih === '1800-01-01' || this.data.firstViralChargeVih === '1833-03-03' || this.data.firstViralChargeVih === '1845-01-01' || this.data.firstViralChargeVih === '1846-01-01' || this.data.firstViralChargeVih === '1833-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Resultado Elisa para VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.secondViralChargeVih === '1833-03-03' || this.data.secondViralChargeVih === '1822-02-01' || this.data.secondViralChargeVih === '1799-01-01' || this.data.secondViralChargeVih === '1811-01-01' || this.data.secondViralChargeVih === '1800-01-01' || this.data.secondViralChargeVih === '1833-03-03' || this.data.secondViralChargeVih === '1845-01-01' || this.data.secondViralChargeVih === '1846-01-01' || this.data.secondViralChargeVih === '1833-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Resultado Elisa para VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.thirdViralChargeVih === '1833-03-03' || this.data.thirdViralChargeVih === '1822-02-01' || this.data.thirdViralChargeVih === '1799-01-01' || this.data.thirdViralChargeVih === '1811-01-01' || this.data.thirdViralChargeVih === '1800-01-01' || this.data.thirdViralChargeVih === '1833-03-03' || this.data.thirdViralChargeVih === '1845-01-01' || this.data.thirdViralChargeVih === '1846-01-01' || this.data.thirdViralChargeVih === '1833-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Resultado Elisa para VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.dateDxTuberculosisActiva === '1833-03-03' || this.data.dateDxTuberculosisActiva === '1822-02-01' || this.data.dateDxTuberculosisActiva === '1799-01-01' || this.data.dateDxTuberculosisActiva === '1811-01-01' || this.data.dateDxTuberculosisActiva === '1800-01-01' || this.data.dateDxTuberculosisActiva === '1833-03-03' || this.data.dateDxTuberculosisActiva === '1845-01-01' || this.data.dateDxTuberculosisActiva === '1846-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Resultado Elisa para VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.dateTamizajeTuberculosis === '1833-03-03' || this.data.dateTamizajeTuberculosis === '1822-02-01' || this.data.dateTamizajeTuberculosis === '1799-01-01' || this.data.dateTamizajeTuberculosis === '1811-01-01' || this.data.dateTamizajeTuberculosis === '1800-01-01' || this.data.dateTamizajeTuberculosis === '1833-03-03' || this.data.dateTamizajeTuberculosis === '1845-01-01' || this.data.dateTamizajeTuberculosis === '1846-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Resultado Elisa para VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.fechaCongirmacionDiagnostico === '1833-03-03' || this.data.fechaCongirmacionDiagnostico === '1822-02-01' || this.data.fechaCongirmacionDiagnostico === '1799-01-01' || this.data.fechaCongirmacionDiagnostico === '1811-01-01' || this.data.fechaCongirmacionDiagnostico === '1800-01-01' || this.data.fechaCongirmacionDiagnostico === '1833-03-03' || this.data.fechaCongirmacionDiagnostico === '1845-01-01' || this.data.fechaCongirmacionDiagnostico === '1846-01-01' || this.data.fechaCongirmacionDiagnostico === '1777-01-01' || this.data.fechaCongirmacionDiagnostico === '1788-01-01') {
          const comodin = {
            section: 'Información de personas que viven con VIH',
            field: 'Fecha de confirmación del diagnóstico de infección por VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.fechaInicioAtencionVih === '1833-03-03' || this.data.fechaInicioAtencionVih === '1822-02-01' || this.data.fechaInicioAtencionVih === '1799-01-01' || this.data.fechaInicioAtencionVih === '1811-01-01' || this.data.fechaInicioAtencionVih === '1800-01-01' || this.data.fechaInicioAtencionVih === '1833-03-03' || this.data.fechaInicioAtencionVih === '1845-01-01' || this.data.fechaInicioAtencionVih === '1846-01-01' || this.data.fechaInicioAtencionVih === '1777-01-01' || this.data.fechaInicioAtencionVih === '1788-01-01') {
          const comodin = {
            section: 'Información de personas que viven con VIH',
            field: 'Fecha de inicio de la atención por VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.inicioTerapiaAntirretroviral === '1833-03-03' || this.data.inicioTerapiaAntirretroviral === '1822-02-01' || this.data.inicioTerapiaAntirretroviral === '1799-01-01' || this.data.inicioTerapiaAntirretroviral === '1811-01-01' || this.data.inicioTerapiaAntirretroviral === '1800-01-01' || this.data.inicioTerapiaAntirretroviral === '1833-03-03' || this.data.inicioTerapiaAntirretroviral === '1845-01-01' || this.data.inicioTerapiaAntirretroviral === '1846-01-01' || this.data.inicioTerapiaAntirretroviral === '1777-01-01' || this.data.inicioTerapiaAntirretroviral === '1788-01-01') {
          const comodin = {
            section: 'Terapia Antirretroviral (TAR) Inicial',
            field: 'Fecha de inicio de la terapia antirretroviral (TAR).'
          }

          comodines.push(comodin)
        }

        if (this.data.medicamentoEsquemaInicialTar === '1833-03-03' || this.data.medicamentoEsquemaInicialTar === '1822-02-01' || this.data.medicamentoEsquemaInicialTar === '1799-01-01' || this.data.medicamentoEsquemaInicialTar === '1811-01-01' || this.data.medicamentoEsquemaInicialTar === '1800-01-01' || this.data.medicamentoEsquemaInicialTar === '1833-03-03' || this.data.medicamentoEsquemaInicialTar === '1845-01-01' || this.data.medicamentoEsquemaInicialTar === '1846-01-01' || this.data.medicamentoEsquemaInicialTar === '1777-01-01' || this.data.medicamentoEsquemaInicialTar === '1788-01-01') {
          const comodin = {
            section: 'Terapia Antirretroviral (TAR) Inicial',
            field: 'Fecha del primer cambio de cualquier medicamento del esquema inicial de TAR'
          }

          comodines.push(comodin)
        }

        if (this.data.ingresoIpsAtencionViH === '1833-03-03' || this.data.ingresoIpsAtencionViH === '1822-02-01' || this.data.ingresoIpsAtencionViH === '1799-01-01' || this.data.ingresoIpsAtencionViH === '1811-01-01' || this.data.ingresoIpsAtencionViH === '1800-01-01' || this.data.ingresoIpsAtencionViH === '1833-03-03' || this.data.ingresoIpsAtencionViH === '1845-01-01' || this.data.ingresoIpsAtencionViH === '1846-01-01' || this.data.ingresoIpsAtencionViH === '1777-01-01' || this.data.ingresoIpsAtencionViH === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de ingreso a la IPS actual para seguimiento y atención de la infección por el VIH'
          }

          comodines.push(comodin)
        }

        if (this.data.ultimaGenotipificación === '1833-03-03' || this.data.ultimaGenotipificación === '1822-02-01' || this.data.ultimaGenotipificación === '1799-01-01' || this.data.ultimaGenotipificación === '1811-01-01' || this.data.ultimaGenotipificación === '1800-01-01' || this.data.ultimaGenotipificación === '1833-03-03' || this.data.ultimaGenotipificación === '1845-01-01' || this.data.ultimaGenotipificación === '1846-01-01' || this.data.ultimaGenotipificación === '1777-01-01' || this.data.ultimaGenotipificación === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de la última genotipificación realizada'
          }

          comodines.push(comodin)
        }

        if (this.data.ultimoColesterolLdl === '1833-03-03' || this.data.ultimoColesterolLdl === '1822-02-01' || this.data.ultimoColesterolLdl === '1799-01-01' || this.data.ultimoColesterolLdl === '1811-01-01' || this.data.ultimoColesterolLdl === '1800-01-01' || this.data.ultimoColesterolLdl === '1833-03-03' || this.data.ultimoColesterolLdl === '1845-01-01' || this.data.ultimoColesterolLdl === '1846-01-01' || this.data.ultimoColesterolLdl === '1777-01-01' || this.data.ultimoColesterolLdl === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de último colesterol LDL'
          }

          comodines.push(comodin)
        }

        if (this.data.ultimaHemoglobinaSerica === '1833-03-03' || this.data.ultimaHemoglobinaSerica === '1822-02-01' || this.data.ultimaHemoglobinaSerica === '1799-01-01' || this.data.ultimaHemoglobinaSerica === '1811-01-01' || this.data.ultimaHemoglobinaSerica === '1800-01-01' || this.data.ultimaHemoglobinaSerica === '1833-03-03' || this.data.ultimaHemoglobinaSerica === '1845-01-01' || this.data.ultimaHemoglobinaSerica === '1846-01-01' || this.data.ultimaHemoglobinaSerica === '1777-01-01' || this.data.ultimaHemoglobinaSerica === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de última hemoglobina sérica'
          }

          comodines.push(comodin)
        }

        if (this.data.ultimaEnzimaAlanina === '1833-03-03' || this.data.ultimaEnzimaAlanina === '1822-02-01' || this.data.ultimaEnzimaAlanina === '1799-01-01' || this.data.ultimaEnzimaAlanina === '1811-01-01' || this.data.ultimaEnzimaAlanina === '1800-01-01' || this.data.ultimaEnzimaAlanina === '1833-03-03' || this.data.ultimaEnzimaAlanina === '1845-01-01' || this.data.ultimaEnzimaAlanina === '1846-01-01' || this.data.ultimaEnzimaAlanina === '1777-01-01' || this.data.ultimaEnzimaAlanina === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de la última enzima alanina aminotransferasa'
          }

          comodines.push(comodin)
        }

        if (this.data.ultimaCreatininaSerica === '1833-03-03' || this.data.ultimaCreatininaSerica === '1822-02-01' || this.data.ultimaCreatininaSerica === '1799-01-01' || this.data.ultimaCreatininaSerica === '1811-01-01' || this.data.ultimaCreatininaSerica === '1800-01-01' || this.data.ultimaCreatininaSerica === '1833-03-03' || this.data.ultimaCreatininaSerica === '1845-01-01' || this.data.ultimaCreatininaSerica === '1846-01-01' || this.data.ultimaCreatininaSerica === '1777-01-01' || this.data.ultimaCreatininaSerica === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de última creatinina sérica'
          }

          comodines.push(comodin)
        }

        if (this.data.ultimaGlucemiaSericaAyuno === '1833-03-03' || this.data.ultimaGlucemiaSericaAyuno === '1822-02-01' || this.data.ultimaGlucemiaSericaAyuno === '1799-01-01' || this.data.ultimaGlucemiaSericaAyuno === '1811-01-01' || this.data.ultimaGlucemiaSericaAyuno === '1800-01-01' || this.data.ultimaGlucemiaSericaAyuno === '1833-03-03' || this.data.ultimaGlucemiaSericaAyuno === '1845-01-01' || this.data.ultimaGlucemiaSericaAyuno === '1846-01-01' || this.data.ultimaGlucemiaSericaAyuno === '1777-01-01' || this.data.ultimaGlucemiaSericaAyuno === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de última glucemia sérica en ayuno'
          }

          comodines.push(comodin)
        }

        if (this.data.ultimaMedicionPesoPeriodo === '1833-03-03' || this.data.ultimaMedicionPesoPeriodo === '1822-02-01' || this.data.ultimaMedicionPesoPeriodo === '1799-01-01' || this.data.ultimaMedicionPesoPeriodo === '1811-01-01' || this.data.ultimaMedicionPesoPeriodo === '1800-01-01' || this.data.ultimaMedicionPesoPeriodo === '1833-03-03' || this.data.ultimaMedicionPesoPeriodo === '1845-01-01' || this.data.ultimaMedicionPesoPeriodo === '1846-01-01' || this.data.ultimaMedicionPesoPeriodo === '1777-01-01' || this.data.ultimaMedicionPesoPeriodo === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de última medición del peso corporal en el periodo'
          }

          comodines.push(comodin)
        }

        if (this.data.inicioTratamientoAntituberculosos === '1833-03-03' || this.data.inicioTratamientoAntituberculosos === '1822-02-01' || this.data.inicioTratamientoAntituberculosos === '1799-01-01' || this.data.inicioTratamientoAntituberculosos === '1811-01-01' || this.data.inicioTratamientoAntituberculosos === '1800-01-01' || this.data.inicioTratamientoAntituberculosos === '1833-03-03' || this.data.inicioTratamientoAntituberculosos === '1845-01-01' || this.data.inicioTratamientoAntituberculosos === '1846-01-01' || this.data.inicioTratamientoAntituberculosos === '1777-01-01' || this.data.inicioTratamientoAntituberculosos === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de inicio del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses'
          }

          comodines.push(comodin)
        }

        if (this.data.terminoTratamientoantituberculoso12 === '1833-03-03' || this.data.terminoTratamientoantituberculoso12 === '1822-02-01' || this.data.terminoTratamientoantituberculoso12 === '1799-01-01' || this.data.terminoTratamientoantituberculoso12 === '1811-01-01' || this.data.terminoTratamientoantituberculoso12 === '1800-01-01' || this.data.terminoTratamientoantituberculoso12 === '1833-03-03' || this.data.terminoTratamientoantituberculoso12 === '1845-01-01' || this.data.terminoTratamientoantituberculoso12 === '1846-01-01' || this.data.terminoTratamientoantituberculoso12 === '1777-01-01' || this.data.terminoTratamientoantituberculoso12 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha en que terminó el tratamiento antituberculoso en los últimos 12 meses'
          }

          comodines.push(comodin)
        }

        if (this.data.ultimoConteoLinfocitosCd4 === '1833-03-03' || this.data.ultimoConteoLinfocitosCd4 === '1822-02-01' || this.data.ultimoConteoLinfocitosCd4 === '1799-01-01' || this.data.ultimoConteoLinfocitosCd4 === '1811-01-01' || this.data.ultimoConteoLinfocitosCd4 === '1800-01-01' || this.data.ultimoConteoLinfocitosCd4 === '1833-03-03' || this.data.ultimoConteoLinfocitosCd4 === '1845-01-01' || this.data.ultimoConteoLinfocitosCd4 === '1846-01-01' || this.data.ultimoConteoLinfocitosCd4 === '1777-01-01' || this.data.ultimoConteoLinfocitosCd4 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha del último conteo de linfocitos T CD4 realizado en el período de observación'
          }

          comodines.push(comodin)
        }

        if (this.data.ultimaCargaViralVih === '1833-03-03' || this.data.ultimaCargaViralVih === '1822-02-01' || this.data.ultimaCargaViralVih === '1799-01-01' || this.data.ultimaCargaViralVih === '1811-01-01' || this.data.ultimaCargaViralVih === '1800-01-01' || this.data.ultimaCargaViralVih === '1833-03-03' || this.data.ultimaCargaViralVih === '1845-01-01' || this.data.ultimaCargaViralVih === '1846-01-01' || this.data.ultimaCargaViralVih === '1777-01-01' || this.data.ultimaCargaViralVih === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de la última carga viral para VIH realizada en el período de observación'
          }

          comodines.push(comodin)
        }

        if (this.data.inicioMedicamentosTarPersonaViven === '1833-03-03' || this.data.inicioMedicamentosTarPersonaViven === '1822-02-01' || this.data.inicioMedicamentosTarPersonaViven === '1799-01-01' || this.data.inicioMedicamentosTarPersonaViven === '1811-01-01' || this.data.inicioMedicamentosTarPersonaViven === '1800-01-01' || this.data.inicioMedicamentosTarPersonaViven === '1833-03-03' || this.data.inicioMedicamentosTarPersonaViven === '1845-01-01' || this.data.inicioMedicamentosTarPersonaViven === '1846-01-01' || this.data.inicioMedicamentosTarPersonaViven === '1777-01-01' || this.data.inicioMedicamentosTarPersonaViven === '1788-01-01') {
          const comodin = {
            section: 'Terapia Antirretroviral (TAR) Actual',
            field: 'Fecha de inicio de los medicamentos de la TAR que recibe actualmente la persona que viven con VIH'
          }

          comodines.push(comodin)
        }

        if (this.data.desafiliacionEntidad === '1833-03-03' || this.data.desafiliacionEntidad === '1822-02-01' || this.data.desafiliacionEntidad === '1799-01-01' || this.data.desafiliacionEntidad === '1811-01-01' || this.data.desafiliacionEntidad === '1800-01-01' || this.data.desafiliacionEntidad === '1833-03-03' || this.data.desafiliacionEntidad === '1845-01-01' || this.data.desafiliacionEntidad === '1846-01-01' || this.data.desafiliacionEntidad === '1777-01-01' || this.data.desafiliacionEntidad === '1788-01-01') {
          const comodin = {
            section: 'Situación administrativa a la fecha de corte',
            field: 'Fecha de desafiliación de la entidad'
          }

          comodines.push(comodin)
        }

        if (this.data.fechaMuerte === '1833-03-03' || this.data.fechaMuerte === '1822-02-01' || this.data.fechaMuerte === '1799-01-01' || this.data.fechaMuerte === '1811-01-01' || this.data.fechaMuerte === '1800-01-01' || this.data.fechaMuerte === '1833-03-03' || this.data.fechaMuerte === '1845-01-01' || this.data.fechaMuerte === '1846-01-01' || this.data.fechaMuerte === '1777-01-01' || this.data.fechaMuerte === '1788-01-01') {
          const comodin = {
            section: 'Situación administrativa a la fecha de corte',
            field: 'Fecha de muerte'
          }

          comodines.push(comodin)
        }

        if (this.data.fechaCorte === '1833-03-03' || this.data.fechaCorte === '1822-02-01' || this.data.fechaCorte === '1799-01-01' || this.data.fechaCorte === '1811-01-01' || this.data.fechaCorte === '1800-01-01' || this.data.fechaCorte === '1833-03-03' || this.data.fechaCorte === '1845-01-01' || this.data.fechaCorte === '1846-01-01' || this.data.fechaCorte === '1777-01-01' || this.data.fechaCorte === '1788-01-01') {
          const comodin = {
            section: 'Situación administrativa a la fecha de corte',
            field: 'Fecha de corte'
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

              if (_this.secondStep === false && _this.firstStep === true) {
                if (_this.data.children.id !== '0' || _this.data.tuberculosis.id !== '3') {
                  _this.firstStep = false
                  _this.secondStep = true
                } else {
                  _this.thirdStep = true
                  _this.firstStep = false
                }
              } else if (_this.thirdStep === false && _this.secondStep === true) {
                _this.secondStep = false
                _this.thirdStep = true
              } else if (_this.fourthStep === false && _this.thirdStep === true) {
                _this.thirdStep = false
                _this.fourthStep = true
              } else if (_this.fiveStep === false && _this.fourthStep === true) {
                _this.fourthStep = false
                _this.fiveStep = true
              } else if (_this.sixStep === false && _this.fiveStep === true) {
                _this.sixStep = true
                _this.fiveStep = false
              } else if (_this.sevenStep === false && _this.sixStep === true) {
                _this.sixStep = false
                _this.sevenStep = true
              } else if (_this.eightStep === false && _this.sevenStep === true) {
                _this.sevenStep = false
                _this.eightStep = true
              } else if (_this.nineStep === false && _this.eightStep === true) {
                _this.eightStep = false
                _this.nineStep = true
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
      } else {
        if (_this.secondStep === false && _this.firstStep === true) {
          if (typeof _this.data.children === 'undefined' || typeof _this.data.tuberculosis === 'undefined') {
            _this.thirdStep = true
            _this.firstStep = false
          } else {
            if (_this.data.children.id !== '0' || _this.data.tuberculosis.id !== '3') {
              _this.firstStep = false
              _this.secondStep = true
            } else {
              _this.thirdStep = true
              _this.firstStep = false
            }
          }
        } else if (_this.thirdStep === false && _this.secondStep === true) {
          _this.secondStep = false
          _this.thirdStep = true
        } else if (_this.fourthStep === false && _this.thirdStep === true) {
          _this.thirdStep = false
          _this.fourthStep = true
        } else if (_this.fiveStep === false && _this.fourthStep === true) {
          _this.fourthStep = false
          _this.fiveStep = true
        } else if (_this.sixStep === false && _this.fiveStep === true) {
          _this.sixStep = true
          _this.fiveStep = false
        } else if (_this.sevenStep === false && _this.sixStep === true) {
          _this.sixStep = false
          _this.sevenStep = true
        } else if (_this.eightStep === false && _this.sevenStep === true) {
          _this.sevenStep = false
          _this.eightStep = true
        } else if (_this.nineStep === false && _this.eightStep === true) {
          _this.eightStep = false
          _this.nineStep = true
        } else {
          _this.$router.push('/resumen')
        }
      }
    }
  }
}
</script>
