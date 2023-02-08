<template>
    <q-form @submit="saveRegister">
      <div class="row flex cien space-betwen" >
          <div class="wrp_forms w_50" v-if="firstStep">
            <h4 class="titulo_fondo w_100">Información de mujeres gestantes</h4>
              <div class="row un_item">
                  <div class="item">
                      <label class="toltip">15. Mujer gestante
                          <q-icon @click="tool = true" name="help_outline" class="cursor-pointer"></q-icon>
                        </label>
                      <q-select rounded standout v-model="data.v15" :options="pregnantWomans"  label="Seleccionar" :rules="[val => !!val || 'Campo requerido']"/>
                  </div>
              </div>
              <div class="row un_item" v-if="typeof data.v15 !== 'undefined' && data.v15.id !=='3' && data.v15.id !== '9' && data.v15.id !== ''">
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
                      <label>16. Niño o niña menor de 12 meses que es hijo(a) de madre que vive con VIH</label>
                      <q-select rounded standout v-model="data.v16" :options="childrens" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>17.  Persona con tuberculosis activa</label>
                      <q-select rounded standout v-model="data.v17" :options="optionsTuberculosis" label="Seleccionar" />
                  </div>
              </div>
              <!--<div class="row un_item">
                  <div class="item">
                      <label>Condición respecto al diagnóstico de infección por VIH</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
              </div>-->
              <div class="row dos_items" v-if="typeof data.v15 !== 'undefined' && data.v15.id !=='3' && data.v15.id !== '9' && data.v15.id !== ''">
                  <div class="item">
                      <label>19. Fecha del diagnóstico de la gestación reportada</label>
                      <q-input filled v-model="data.v19">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v19">
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
                      <label>20. Fecha de realización de tamizaje para VIH en el primer trimestre de la gestación</label>
                      <q-input filled v-model="data.v20">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.v20"> mask="YYYY-MM-DD"
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
              <div class="row dos_items" v-if="typeof data.v15 !== 'undefined' && data.v15.id !=='3' && data.v15.id !== '9' && data.v15.id !== ''">
                  <div class="item">
                      <label>21. Fecha de realización de tamizaje para VIH en el segundo trimestre de la gestación</label>
                      <q-input filled v-model="data.v21">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">eeningThird
                              <q-date v-model="data.v21" maKk="YYYY-MM-DD">
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
                      <label>22. Fecha de realización de tamizaje para VIH en el tercer trimestre de la gestación</label>
                      <q-input filled v-model="data.v22">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.v22"> mask="YYYY-MM-DD"
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
              <div class="row un_item" v-if="typeof data.v15 !== 'undefined' && data.v15.id !=='3' && data.v15.id !== '9' && data.v15.id !== ''">
                  <div class="item">
                    <label>23. Fecha de realización de tamizaje para VIH en el momento del parto</label>
                      <q-input filled v-model="data.v23">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.v23"> mask="YYYY-MM-DD"
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
              <div class="row dos_items" v-if="typeof data.v15 !== 'undefined' && data.v15.id !=='3' && data.v15.id !== '9' && data.v15.id !== ''">
                  <div class="item">
                      <label>24. ¿Mujer con diagnóstico de VIH en cualquier momento de la gestación reportada?</label>
                      <q-select rounded standout v-model="data.v24" :options="womanVihReporteds" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>24.1. Edad gestacional al momento del diagnóstico de VIH durante la gestación reportada.</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v24_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>
              <div class="row dos_items" v-if="typeof data.v15 !== 'undefined' && data.v15.id !=='3' && data.v15.id !== '9' && data.v15.id !== ''">
                  <div class="item">
                      <label>24.2. ¿Recibió tratamiento para VIH durante la gestación reportada?</label>
                      <q-select rounded standout v-model="data.v24_2" :options="receivedTreatmentVihs" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>24.3. Edad gestacional al inicio de la terapia antirretroviral (TAR) en la gestación reportada.</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v24_3"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>
              <div class="row dos_items" v-if="typeof data.v15 !== 'undefined' && data.v15.id !=='3' && data.v15.id !== '9' && data.v15.id !== ''">
                  <div class="item">
                      <label>24.4. Terapia antirretroviral (TAR) durante el intraparto en la gestación reportada.</label>
                      <q-select rounded standout v-model="data.v24_4" :options="tarIntraBirths" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>24.5. Resultado de la gestación reportada en gestantes con VIH</label>
                      <q-select rounded standout v-model="data.v24_5" :options="resultVihReporteds" label="Seleccionar" />
                  </div>
              </div>
              <div class="row un_item" v-if="typeof data.v15 !== 'undefined' && data.v15.id !=='3' && data.v15.id !== '9' && data.v15.id !== ''">
                  <div class="item">
                      <label>24.6. Fecha de culminación de la gestación reportada en gestantes con VIH.</label>
                      <q-input filled v-model="data.v24_6">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.v24_6" mask="YYYY-MM-DD">
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
              <div class="row dos_items" v-if="typeof data.v15 !== 'undefined' && data.v15.id !=='3' && data.v15.id !== '9' && data.v15.id !== ''">
                  <div class="item">
                      <label>24.7. Supresión farmacológica de la lactancia materna en gestantes con VIH.</label>
                      <q-select rounded standout v-model="data.v24_7" :options="pharmacologicalSuppressions" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>24.8. Tipo de identificación del recién nacido vivo expuesto al VIH resultado de la gestación reportada.</label>
                      <q-select rounded standout v-model="data.v24_8" :options="identificationsNewbord" label="Seleccionar" />
                  </div>
              </div>
              <div class="row dos_items" v-if="typeof data.v15 !== 'undefined' && data.v15.id !=='3' && data.v15.id !== '9' && data.v15.id !== ''">
                  <div class="item">
                      <label>24.9. Número de identificación del recién nacido vivo expuesto al VIH resultado de la gestación reportada</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v24_9"
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
            <h4 class="titulo_fondo w_100" v-if="typeof data.v16 !== 'undefined' && data.v16.id !== '0'">Información de menores de 12 meses hijos o hijas de madres que viven con VIH</h4>
            <div class="row dos_items" v-if="typeof data.v16 !== 'undefined' && data.v16.id !== '0'">
              <div class="item">
                  <label>25. Tipo de identificación de la madre del menor de 12 meses expuesto al VIH</label>
                  <q-select rounded standout v-model="data.v25" :options="documentTypesChildres" label="Seleccionar" />
              </div>
              <div class="item">
                <label>25.1 Número de identificación de la madre del menor de 12 meses expuesto al VIH..</label>
                <q-input
                    rounded
                    standout
                    v-model="data.v25_1"
                    lazy-rules
                    type="number"
                    >
                  </q-input>
              </div>
            </div>
            <div class="row dos_items" v-if="typeof data.v16 !== 'undefined' && data.v16.id !== '0'">
              <div class="item">
                  <label>25.2 ¿La madre del menor de 12 meses expuesto al VIH tiene confirmado el diagnóstico de VIH?</label>
                  <q-select rounded standout v-model="data.v25_2" :options="answersConfirmedDx" label="Seleccionar" />
              </div>
              <div class="item">
                <label>26. Profilaxis con antirretrovirales para el recién nacido vivo expuesto al VIH.</label>
                <q-select rounded standout v-model="data.v26" :options="profilaxisOptions" label="Seleccionar" />
              </div>
            </div>
            <div class="row dos_items" v-if="typeof data.v16 !== 'undefined' && data.v16.id !== '0'">
              <div class="item">
                  <label>27. Suministro de fórmula láctea.</label>
                  <q-select rounded standout v-model="data.v27" :options="viaLacteaOptions" label="Seleccionar" />
              </div>
              <div class="item">
                <label>28. Fecha de la primera carga viral para VIH en el menor de 12 meses expuesto al VIH.</label>
                <q-input filled v-model="data.v28">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.v28">
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
            <div class="row dos_items" v-if="typeof data.v16 !== 'undefined' && data.v16.id !== '0'">
              <div class="item">
                  <label>28.1 Resultado de la primera carga viral en el menor de 12 meses expuesto al VIH.</label>
                  <q-input
                    rounded
                    standout
                    v-model="data.v28_1"
                    lazy-rules
                    type="number"
                    >
                  </q-input>
              </div>
              <div class="item">
                <label>29. Fecha de la segunda carga viral en el menor de 12 meses expuesto al VIH.</label>
                <q-input filled v-model="data.v29">
                  <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                      <q-date v-model="data.v29">
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
            <div class="row dos_items" v-if="typeof data.v16 !== 'undefined' && data.v16.id !== '0'">
              <div class="item">
                  <label>29.1 Resultado de la segunda carga viral en el menor de 12 meses expuesto al VIH.</label>
                  <q-input
                    rounded
                    standout
                    v-model="data.v29_1"
                    lazy-rules
                    type="number"
                    >
                  </q-input>
              </div>
              <div class="item">
                <label>30. Fecha de la tercera carga viral en el menor de 12 meses expuesto al VIH.</label>
                <q-input filled v-model="data.v30">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.v30">
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
            <div class="row dos_items" v-if="typeof data.v16 !== 'undefined' && data.v16.id !== '0'">
              <div class="item">
                  <label>30.1 Resultado de la tercera carga viral en el menor de 12 meses expuesto al VIH.</label>
                  <q-input
                    rounded
                    standout
                    v-model="data.v30_1"
                    lazy-rules
                    type="number"
                    >
                  </q-input>
              </div>
              <div class="item">
                <label>31. Condición final del menor de 12 meses expuesto al VIH.</label>
                <q-select rounded standout v-model="data.v31" :options="conditionFinalChildOptions" label="Seleccionar" />
              </div>
            </div>
            <h4 class="titulo_fondo w_100" v-if="typeof data.v17 !== 'undefined' && data.v17.id !== '3'">Información de personas con tuberculosis activa</h4>
            <div class="row dos_items" v-if="typeof data.v17 !== 'undefined' && data.v17.id !== '3'">
              <div class="item">
                  <label>32. Fecha del diagnóstico de la tuberculosis activa reportada.</label>
                  <q-input filled v-model="data.v32">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v32">
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
                <label>33. Fecha de realización de tamizaje para VIH a la persona con tuberculosis activa reportada.</label>
                <q-input filled v-model="data.v33">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v33">
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
                        <label>34. Fecha de la prueba presuntiva (prueba rápida, autotest o Elisa, según guía de práctica clínica vigente) para infección por VIH.</label>
                        <q-input filled v-model="data.v34">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v34">
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
                      <label>35. Cómo llegó a la prueba presuntiva para el VIH</label>
                      <q-select rounded standout v-model="data.v35" :options="comoLlegoLaPrueba" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>36. Fecha de confirmación del diagnóstico de infección por VIH.</label>
                      <q-input filled v-model="data.v36">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.v36" maKk="YYYY-MM-DD">
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
                      <label>36.1 ¿La entidad que reporta a la persona que vive con VIH es la misma en la cual estaba afiliada al momento del diagnóstico? </label>
                      <q-select rounded standout v-model="data.v36_1" :options="entidadReportaVih" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items" >
                  <div class="item">
                      <label>36.2 Entidad reportante anterior </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v36_2"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                    <label>37. Fecha de inicio de la atención por VIH.</label>
                      <q-input filled v-model="data.v37">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                              <q-date v-model="data.v37"> mask="YYYY-MM-DD"
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
                      <label>38. Mecanismo o vía de transmisión del VIH.</label>
                      <q-select rounded standout v-model="data.v38" :options="mecanismoTransmisionVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>39. Estado clínico al momento del diagnóstico (para niños, niñas, adolescentes y adultos.</label>
                      <q-select rounded standout v-model="data.v39" :options="estadoClinicoAlMomento" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>40. ¿Se realizó conteo de linfocitos T CD4 al momento del diagnóstico? </label>
                      <q-select rounded standout v-model="data.v40" :options="verificacionConteoLinfocitos" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>40.1 Conteo de linfocitos T CD4 al momento del diagnóstico.</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v40_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>41. ¿Se realizó carga viral al momento del diagnóstico? </label>
                      <q-select rounded standout v-model="data.v41" :options="verificacionCargaViral" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>41.1 Carga viral al momento del diagnóstico.</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v41_1"
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
                        <label>42 Fecha de inicio de la terapia antirretroviral (TAR). </label>
                        <q-input filled v-model="data.v42">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v42">
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
                      <label>42.1 Medicamento 1 con el que inició la TAR</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v42_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>42.2 Medicamento 2 con el que inició la TAR</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v42_2"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>42.3 Medicamento 3 con el que inició la TAR</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v42_3"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>42.4 Medicamento 4 con el que inició la TAR</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v42_4"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>42.5 Medicamento 5 con el que inició la TAR</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v42_5"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>43. ¿Conteo de linfocitos T CD4 al momento del inicio de la TAR?</label>

                      <q-select rounded standout v-model="data.v43" :options="linfocitosCD4InicioTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>43.1 Valor conteo de linfocitos T CD4 al momento del inicio de la TAR</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v43_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>44. ¿Carga viral al momento del inicio de la TAR? </label>
                      <q-select rounded standout v-model="data.v44" :options="cargaMomentoInicioTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>44.1 Carga viral al inicio de la TAR.</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v44_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>45. Motivo de inicio de la TAR</label>
                      <q-select rounded standout v-model="data.v45" :options="motivoInicioTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>46. Tenía coinfección con el virus de la hepatitis B (VHB) al iniciar la TAR</label>
                      <q-select rounded standout v-model="data.v46" :options="hepatitisBInicioTar" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>47. Tenía coinfección con hepatitis C (VHC) crónica al iniciar TAR</label>
                      <q-select rounded standout v-model="data.v47" :options="hepatitisCInicioTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>48. Tenía coinfección con tuberculosis activa al iniciar TAR</label>
                      <q-select rounded standout v-model="data.v48" :options="tuberculosisInicioTar" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>49. Número de meses que se dispensó la fórmula completa de TAR durante los primeros 12 meses de iniciada la TAR:</label>
                      <q-select rounded standout v-model="data.v49" :options="dispensoFormulaTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>50. Número de consultas médicas a las que asistió la persona que vive con VIH durante los primeros 12 meses luego de iniciar la TAR: </label>
                      <q-select rounded standout v-model="data.v50" :options="consultasAsistirTarVih" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>51. ¿Ha tenido cambios en el esquema inicial de TAR?: </label>
                      <q-select rounded standout v-model="data.v51" :options="cambiosEsquemaInicialTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>51.1 Fecha del primer cambio de cualquier medicamento del esquema inicial de TAR</label>
                      <q-input filled v-model="data.v51_1">
                        <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                            <q-date v-model="data.v51_1">
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
                      <label>51.2 Causa del cambio de medicamento con el que inicio la TAR</label>
                      <q-select rounded standout v-model="data.v51_2" :options="cambioMedicamentoTar" label="Seleccionar" />
                  </div>

                  <div class="item">
                      <label>51.3 Medicamento 1 que ocasionó el cambio: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v51_3"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>51.4 Medicamento 2 que ocasionó el cambio: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v51_4"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>

                  <div class="item">
                      <label>51.5 Medicamento 3 que ocasionó el cambio: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v51_5"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>51.6 Medicamento 4 que ocasionó el cambio: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v51_6"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>

                  <div class="item">
                      <label>51.7 ¿Fallas desde el inicio de la TAR hasta el reporte actual?  </label>
                      <q-select rounded standout v-model="data.v51_7" :options="fallasInicioTarAnual" label="Seleccionar" />
                  </div>
              </div>

              <div class="row un_item">
                  <div class="item">
                      <label>51.8 Número de fallas desde el inicio de la TAR hasta el reporte actual (0 a 20)</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v51_8"
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
                      <label>52.1 ¿Infecciones bacterianas múltiples o recurrentes? </label>
                      <q-select rounded standout v-model="data.v52_1" :options="infeccionBacteriana" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.2 ¿Candidiasis esofágica, traqueal, bronquial o pulmonar?  </label>
                      <q-select rounded standout v-model="data.v52_2" :options="candidiasisETBP" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>52.3 ¿Tuberculosis pulmonar (solo en personas mayores o iguales a 6 años de edad) o extrapulmonar? </label>
                      <q-select rounded standout v-model="data.v52_3" :options="tuberculosisPulmonar" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.4 ¿Cáncer de cérvix invasivo? (solo para personas mayores o iguales a 6 años de edad) </label>
                      <q-select rounded standout v-model="data.v52_4" :options="cancerCervix" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>52.5 ¿Coccidioidomicosis diseminada o extrapulmonar?</label>
                      <q-select rounded standout v-model="data.v52_5" :options="coccidioidomicosis" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.6 ¿Citomegalovirus de cualquier órgano excepto hígado, bazo, o ganglios linfáticos? En mayores de 1 mes de edad.  </label>
                      <q-select rounded standout v-model="data.v52_6" :options="citomegalovirus1Mes" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>52.7 ¿Retinitis por citomegalovirus (con pérdida de la visión)? </label>
                      <q-select rounded standout v-model="data.v52_7" :options="retinitisCitomegalovirus" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.8 ¿Herpes simple con úlceras mucocutáneas de más de un mes de duración o causando bronquitis, neumonitis o esofagitis? (en mayores de 1 mes de edad)  </label>
                      <q-select rounded standout v-model="data.v52_8" :options="herpesMayor1Mes" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>52.9 ¿Diarrea por isospora belli o cryptosporidium de más de un mes de duración? </label>
                      <q-select rounded standout v-model="data.v52_9" :options="diarreaIsospora1Mes" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.10 ¿Histoplasmosis diseminada o extrapulmonar? </label>
                      <q-select rounded standout v-model="data.v52_10" :options="histoplasmosisDiseminada" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>52.11 ¿Linfoma de Burkitt, inmunoblástico, o primario del sistema nervioso central? </label>
                      <q-select rounded standout v-model="data.v52_11" :options="linfomaBurkitt" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.12 ¿Neumonía por pneumocystis jiroveci? </label>
                      <q-select rounded standout v-model="data.v52_12" :options="neumoniaPneumocystis" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>52.13 ¿Neumonía recurrente?  </label>
                      <q-select rounded standout v-model="data.v52_13" :options="neumoniaRecurrente" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.14 ¿Septicemia por salmonella recurrente? </label>
                      <q-select rounded standout v-model="data.v52_14" :options="septicemiaSalmonella" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>52.15 ¿Infección diseminada o extrapulmonar por micobacterium avium, kansasii u otras especies de micobacterias? </label>
                      <q-select rounded standout v-model="data.v52_15" :options="infeccionKansasiiOtras" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.16 ¿Criptococosis extrapulmonar? </label>
                      <q-select rounded standout v-model="data.v52_16" :options="criptococosisExtrapulmonar" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>52.17 ¿Sarcoma de Kaposi?  </label>
                      <q-select rounded standout v-model="data.v52_17" :options="sarcamoKaposi" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.18 ¿Síndrome de desgaste asociado al VIH? </label>
                      <q-select rounded standout v-model="data.v52_18" :options="sindromeDesgasteVih" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>52.19 ¿Leucoencefalopatía multifocal progresiva o encefalopatía por VIH? </label>
                      <q-select rounded standout v-model="data.v52_19" :options="leucoencefalopatiaMultifocalVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.20 ¿Toxoplasmosis cerebral? (solo en personas mayores de 1 mes de edad): </label>
                      <q-select rounded standout v-model="data.v52_20" :options="toxoplasmosisCerebral1Mes" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>52.21 ¿Demencia asociada al VIH? (solo para personas con diagnóstico de VIH antes de 2017) </label>
                      <q-select rounded standout v-model="data.v52_21" :options="demenciaAsociadaVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>52.22 ¿Neumonía intersticial linfoidea? (solo para personas con diagnóstico de VIH antes de 2017) </label>
                      <q-select rounded standout v-model="data.v52_22" :options="neumoniaIntersticialLinfoidea" label="Seleccionar" />
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
                      <label>53 Código de habilitación de la sede de la IPS donde se hace el seguimiento y atención al usuario actualmente: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v53"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>53.1 Fecha de ingreso a la IPS actual para seguimiento y atención de la infección por el VIH: </label>
                        <q-input filled v-model="data.v53_1">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v53_1">
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
                      <label>53.2 Municipio de la IPS:  </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v53_2"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>53.3 Quién hace la atención clínica y formulación para la infección por el VIH al usuario actualmente</label>
                      <q-select rounded standout v-model="data.v53_3" :options="atencionClinicaVihUsuario" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>53.4 Valoración por infectólogo en los últimos 12 meses</label>
                      <q-select rounded standout v-model="data.v53_4" :options="valoracionInfectologo" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>54. Fecha de la última genotipificación realizada.</label>
                        <q-input filled v-model="data.v54">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v54">
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
                      <label>55. Estado clínico actual  </label>
                      <q-select rounded standout v-model="data.v55" :options="estadoClinicoActual" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>56. Fecha de último colesterol LDL  </label>
                        <q-input filled v-model="data.v56">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v56">
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
                      <label>56.1 Resultado del último colesterol LDL: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v56_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>57. Fecha de último nivel de triglicéridos: </label>
                        <q-input filled v-model="data.v57">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v57">
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
                      <label>57.1 Resultado del último nivel de triglicéridos: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v57_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>58. Fecha de última hemoglobina sérica</label>
                        <q-input filled v-model="data.v58">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v58">
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
                      <label>58.1 Resultado de la última hemoglobina sérica: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v58_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>59. Fecha de la última enzima alanina aminotransferasa </label>
                        <q-input filled v-model="data.v59">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v59">
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
                      <label>59.1 Resultado de la última ALT o TGP sérica: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v59_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>60. Fecha de última creatinina sérica</label>
                        <q-input filled v-model="data.v60">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v60">
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
                      <label>60.1 Resultado de la última creatinina sérica: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v60_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>61. Fecha de última glucemia sérica en ayuno:</label>
                        <q-input filled v-model="data.v61">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v61">
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
                      <label>61.1 Resultado de la última glucemia sérica en ayuno: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v61_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>62. Fecha de última medición del peso corporal en el periodo</label>
                        <q-input filled v-model="data.v62">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v62">
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
                      <label>62.1 Resultado de la última medición del peso corporal: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v62_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>63. Talla: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v63"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>64. ¿Tiene neuropatía periférica?: </label>
                      <q-select rounded standout v-model="data.v64" :options="tieneNeuropatiaPeriferica" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>65. ¿Tiene lipoatrofia o lipodistrofia?: </label>
                      <q-select rounded standout v-model="data.v65" :options="tieneLipotrofiaLipodistrofia" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>66. ¿Tiene coinfección con hepatitis B crónica?: </label>
                      <q-select rounded standout v-model="data.v66" :options="coinfeccionHepatitisBCronica" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>67. ¿Tiene coinfección con hepatitis C crónica?:  </label>
                      <q-select rounded standout v-model="data.v67" :options="coinfeccionHepatitisCCronica" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>68. ¿Tiene o tuvo coinfección con tuberculosis activa en los últimos 12 meses? </label>
                      <q-select rounded standout v-model="data.v68" :options="coinfeccionTuberculosisUltimo12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>68.1 Tipo de tuberculosis activa que presenta o presentó la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.v68_1" :options="tuberculosisActivaTbVih12" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>68.2 ¿La persona con coinfección TB/VIH recibe o recibió tratamiento para tuberculosis activa en los últimos 12 meses? </label>
                      <q-select rounded standout v-model="data.v68_2" :optionsa="coinfeccionTuberculosisTratamiento12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>68.3 Fecha de inicio del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses</label>
                        <q-input filled v-model="data.v68_3">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v68_3">
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
                      <label>68.4 Medicamento 1 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v68_4"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>68.5 Medicamento 2 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v68_5"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>68.6 Medicamento 3 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v68_6"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>68.7 Medicamento 4 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v68_7"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>68.8 Medicamento 5 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v68_8"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>68.9 Medicamento 6 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v68_9"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>68.10 Medicamento 7 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v68_10"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>68.11 M Medicamento 8 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v68_11"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>68.12 Medicamento 9 del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v68_12"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>68.13 Fecha en que terminó el tratamiento antituberculoso en los últimos 12 meses</label>
                        <q-input filled v-model="data.v68_13">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v68_13">
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
                      <label>68.14 Condición de egreso del tratamiento antituberculoso</label>
                      <q-select rounded standout v-model="data.v68_14" :options="condicionEgresoAntituberculosos" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>69. ¿Tiene cirrosis hepática?: </label>
                      <q-select rounded standout v-model="data.v69" :options="cirrosisHepatica" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>70. ¿Tiene enfermedad renal crónica por VIH? </label>
                      <q-select rounded standout v-model="data.v70" :options="enfermedadRenalVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>71. ¿Tiene enfermedad coronaria?  </label>
                      <q-select rounded standout v-model="data.v71" :options="enfermedadCoronaria" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>72. ¿Tiene o ha tenido otras infecciones de transmisión sexual diferentes a sífilis o hepatitis B en los últimos 12 meses? </label>
                      <q-select rounded standout v-model="data.v72" :options="infeccionTransmisionSexual12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>73. ¿Tiene neoplasia no relacionada con Sida?  </label>
                      <q-select rounded standout v-model="data.v73" :options="neoplasiaNoSida" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>74. ¿Discapacidad funcional? </label>
                      <q-select rounded standout v-model="data.v74" :options="discapacidadFuncional" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>75. Fecha del último conteo de linfocitos T CD4 realizado en el período de observación: </label>
                        <q-input filled v-model="data.v75">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v75">
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
                      <label>75.1 Valor del último conteo de linfocitos T CD4 realizado en el período de observación</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v75_1"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>76. Fecha de la última carga viral para VIH realizada en el período de observación: </label>
                        <q-input filled v-model="data.v76">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v76">
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
                      <label>76.1 Valor de la última carga viral para VIH realizada en el período de observación </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v76_1"
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
                      <label>77. Recibe TAR</label>
                      <q-select rounded standout v-model="data.v77" :options="RecibeTar" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>77.1 Fecha de inicio de los medicamentos de la TAR que recibe actualmente la persona que viven con VIH: </label>
                        <q-input filled v-model="data.v77_1">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v77_1">
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
                      <label>77.2 Medicamento 1 de la TAR actual: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v77_2"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>77.3 Medicamento 2 de la TAR actual:</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v77_3"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>77.4 Medicamento 3 de la TAR actual: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v77_4"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>77.5 Medicamento 4 de la TAR actual:</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v77_5"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>77.6 Medicamento 5 de la TAR actual: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v77_6"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>77.7 Medicamento 6 de la TAR actual:</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v77_7"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row uno_items">
                  <div class="item">
                      <label>77.8 Número de meses que se dispensó la fórmula completa de TAR durante los 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v77_8"
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
                      <label>78. Número de condones suministrados en el último año</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v78"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>79. Método de planificación familiar de la persona que vive con VIH (diferente al condón como método de protección) </label>
                      <q-select rounded standout v-model="data.v79" :options="metodoPlanificacionViveVih" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>80. Vacunación contra la hepatitis A</label>
                      <q-select rounded standout v-model="data.v80" :options="vacunacionHepatitisA" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>81. Vacunación contra la hepatitis B: </label>
                      <q-select rounded standout v-model="data.v81" :options="vacunacionHepatitisB" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>82. Vacunación contra neumococo: </label>
                      <q-select rounded standout v-model="data.v82" :options="vacunacionNeumococo" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>83. Tamizaje clínico para tuberculosis (TB) activa en la última consulta: </label>
                      <q-select rounded standout v-model="data.v83" :options="tamizajeTuberculosisUltima" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>84. Se hizo PPD o pruebas equivalentes para la identificación de tuberculosis latente en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.v84" :options="ppdTuberculosis12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>85. Recibió tratamiento para tuberculosis latente en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.v85" :options="tratamientoTuberculosisLatente" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>86. Se hizo tamizaje para sífilis en la persona que vive con VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.v86" :options="tamizajeSifilis12" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>86.1 Recibió tratamiento para Sífilis: </label>
                      <q-select rounded standout v-model="data.v86_1" :options="tratamientoSifilis" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>87. Se hizo tamizaje para VPH anal (hombre/mujer) en la persona que vive con VIH, en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.v87" :options="tamizajeVphViveVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>88. Se hizo tamizaje para hepatitis B en la persona que vive con VIH en los últimos 12 meses: </label>
                      <q-select rounded standout v-model="data.v88" :options="tamizajeHepatitisBViveVih" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>89. Se hizo tamizaje para hepatitis C en la persona que vive con VIH en los últimos 12 meses </label>
                      <q-select rounded standout v-model="data.v89" :options="tamizajeHepatitisBViveVih" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>90. Resultado de la evaluación de riesgo cardiovascular en la persona que vive con VIH en los últimos 12 meses: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v90"
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
                      <label>91. Profilaxis para MAC (Mycobacterium avium complex). </label>
                      <q-select rounded standout v-model="data.v91" :options="profilaxisMac" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>92. Profilaxis para Criptococo neoformans. </label>
                      <q-select rounded standout v-model="data.v92" :options="profilaxisCriptococo" label="Seleccionar" />
                  </div>
              </div>

              <div class="row uno_items">
                  <div class="item">
                      <label>93. Profilaxis para pneumocystis jirovecii. </label>
                      <q-select rounded standout v-model="data.v93" :options="profilaxisJirovecii" label="Seleccionar" />
                  </div>
              </div>

              <h4 class="titulo_fondo w_100">Situación administrativa a la fecha de corte</h4>

              <div class="row dos_items">
                  <div class="item">
                      <label>94. Costo total de la atención no hospitalaria de la persona viviendo con VIH en relación con la atención del VIH: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v94"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>95. Costo total de la atención hospitalaria de la persona viviendo con VIH en relación con la atención del VIH:  </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v95"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>96. Número de hospitalizaciones en el periodo relacionadas con el VIH</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v96"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
                  <div class="item">
                      <label>97. Novedad del usuario respecto al reporte anterior: </label>
                      <q-select rounded standout v-model="data.v97" :options="novedadUsuarioReporteAnterior" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>97.1 Fecha de desafiliación de la entidad</label>
                        <q-input filled v-model="data.v97_1">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v97_1">
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
                      <label>97.2 Entidad a la cual se trasladó el usuario con VIH desafiliado: </label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v97_2"
                          lazy-rules
                          type="number"
                          >
                        </q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>97.3 Fecha de Muerte: </label>
                        <q-input filled v-model="data.v97_3">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v97_3">
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
                      <label>97.4 Causa de Muerte </label>
                      <q-select rounded standout v-model="data.v97_4" :options="causaMuerte" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>98. Fecha de Corte: </label>
                        <q-input filled v-model="data.v98">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.v98">
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
                      <label>99. Código Único BDUA BDEX PVS MSPS</label>
                      <q-input
                          rounded
                          standout
                          v-model="data.v99"
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
              <q-btn rounded class="bg_botn_verde btn_crear cambiar_pdf" v-if="auditor" @click="popuprealizaranotacion = true" text-color="white" icon-right="border_color" label="Realizar anotación" />
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

      <q-dialog v-model="error">
          <q-card style="width: 700px; max-width: 80vw;" class="pop_cambiarpsf">
            <q-card-section class="q-pa-md">
              <h4>Listado de Errores</h4>
              <div class="desc_pop">
                <p>Se encontrarón los siguientes errores en las reglas de validación.</p>
              </div>
              <q-btn class="close_pop" icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-card-section class="q-pa-sm listado">
              <ul class="list_pdf">
                <li v-for="(item, key) in errors" :key="key">
                    <p><q-icon name="article" class="blanco_iconos" size="25px" /><span>{{ item }}</span> </p>
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
      urlSite: 'https://cac.asfaips.com.co',
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
      status: '',
      error: false,
      errors: []
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
        if (this.data.v16.id !== '0' || this.data.v17.id !== '3') {
          this.secondStep = true
          this.thirdStep = false
        } else {
          this.thirdStep = false
          this.firstStep = true
        }
      }

      if (this.fourthStep) {
        this.thirdStep = true
        this.fourthStep = false
      }

      if (this.fiveStep) {
        this.fourthStep = true
        this.fiveStep = false
      }

      if (this.sixStep) {
        this.fiveStep = true
        this.sixStep = false
      }

      if (this.sevenStep) {
        this.sixStep = true
        this.sevenStep = false
      }

      if (this.eightStep) {
        this.sevenStep = true
        this.eightStep = false
      }

      if (this.nineStep) {
        this.eightStep = true
        this.nineStep = false
      }
    },
    saveRegister () {
      var _this = this

      _this.errors = []

      if (this.status !== 'finalizado') {
        if (this.firstStep) {
          if (typeof this.patient.field_json.sex !== 'undefined') {
            if (this.patient.field_json.sex.id === 'H' && this.data.fum !== '1845-01-01') {
              this.errors.push('FUM es 1845-01-01 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && this.data.v20 !== '1845-01-01') {
              this.errors.push('La V20 es 1845-01-01 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && this.data.v19 !== '1845-01-01') {
              this.errors.push('La V19 es 1845-01-01 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && this.data.v21 !== '1845-01-01') {
              this.errors.push('La V21 es 1845-01-01 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && this.data.v22 !== '1845-01-01') {
              this.errors.push('La V22 es 1845-01-01 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && this.data.v23 !== '1845-01-01') {
              this.errors.push('La V23 es 1845-01-01 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && typeof this.data.v24 !== 'undefined' && this.data.v24.id !== '9') {
              this.errors.push('La V24 es 9 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && typeof this.data.v24_1 !== 'undefined' && this.data.v24_1.id !== '99') {
              this.errors.push('La V24.1 es 99 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && typeof this.data.v24_2 !== 'undefined' && this.data.v24_2.id !== '9') {
              this.errors.push('La V24.2 es 9 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && typeof this.data.v24_3 !== 'undefined' && this.data.v24_3.id !== '99') {
              this.errors.push('La V24.3 es 99 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && typeof this.data.v24_4 !== 'undefined' && this.data.v24_4.id !== '9') {
              this.errors.push('La V24.4 es 9 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && typeof this.data.v24_5 !== 'undefined' && this.data.v24_5.id !== '9') {
              this.errors.push('La V24.5 es 9 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && this.data.v24_6 !== '1845-01-01') {
              this.errors.push('La V24.6 es 1845-01-01 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && typeof this.data.v24_7 !== 'undefined' && this.data.v24_7.id !== '9') {
              this.errors.push('La V24.7 es 9 revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (this.patient.field_json.sex.id === 'H' && typeof this.data.v24_8 !== 'undefined' && this.data.v24_8.id !== 'NA') {
              this.errors.push('La V24.8 es NA revisar la V10 debe ser H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
            }

            if (typeof this.data.v24_9 !== 'undefined') {
              if (this.patient.field_json.sex.id === 'H' && this.data.v24_9 !== '9') {
                this.errors.push('La V24.9 es 9 revisar la V10 debe ser H')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
              }
            }

            if (this.patient.field_json.sex.id === 'H' && typeof this.data.v15 !== 'undefined' && parseInt(this.data.v15.id) <= 3) {
              this.errors.push('La V15 es <= 3 revisar la V10 debe ser <> H')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2885', 'error')
            }
          }

          if (typeof this.data.v15 !== 'undefined' && parseInt(this.data.v15.id) < 3) {
            var currentDate = new Date('2020-04-01')

            if (typeof this.data.v16 !== 'undefined' && parseInt(this.data.v16.id) !== 0) {
              this.errors.push('La V16 es 0 revisar la V15 debe ser < 3')
              this.error = true
            }

            if (Date.parse(this.patient.field_json.birthdate) < Date.parse('1978-01-31')) {
              this.errors.push('La V15 es <= 2 revisar la v09 debe ser >= 1978-01-01 y <= 2012-01-31')
              this.error = true
            }

            if (Date.parse(this.patient.field_json.birthdate) > Date.parse('2012-01-31')) {
              this.errors.push('La V15 es <= 2 revisar la v09 debe ser >= 1978-01-01 y <= 2012-01-31')
              this.error = true
            }

            if (this.data.v19 !== '1845-01-01') {
              if (Date.parse(this.data.v19) <= Date.parse(currentDate)) {
                this.errors.push('La V19 es > 2020-04-01 o = 1846-01-01 revisar la V15 debe ser < 3')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B2890', 'error')
              }
            }

            if (this.data.v20 === '1845-01-01') {
              this.errors.push('La V20 es 1845-01-01 revisar la V15 debe ser < 3')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (this.data.v21 === '1845-01-01') {
              this.errors.push('La V21 es <> 1845-01-01 revisar la V15 debe ser < 3')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (this.data.v22 === '1845-01-01') {
              this.errors.push('La V22 es <>1845-01-01 revisar la V15 debe ser < 3')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (this.data.v23 === '1845-01-01') {
              this.errors.push('La V23 es <> 1845-01-01 revisar la V15 debe ser < 3')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (typeof this.data.v24 !== 'undefined' && this.data.v24.id === '9') {
              this.errors.push('La V24 es <> 9 revisar la V15 debe ser < 3 ')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (typeof this.data.v24_1 !== 'undefined' && this.data.v24_1.id === '99') {
              this.errors.push('La V24.1 es <> 99 revisar la V15 debe ser < 3 ')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (typeof this.data.v24_2 !== 'undefined' && this.data.v24_2.id !== '9') {
              this.errors.push('La V24.2 es <> 9 revisar la V15 debe ser < 3 ')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (typeof this.data.v24_3 !== 'undefined' && this.data.v24_3.id === '99') {
              this.errors.push('La V24.3 es <> 99 revisar la V15 debe ser < 3 ')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (typeof this.data.v24_4 !== 'undefined' && this.data.v24_4.id !== '9') {
              this.errors.push('La V24.4 es <> 9 revisar la V15 debe ser < 3 ')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (typeof this.data.v24_5 !== 'undefined' && this.data.v24_5.id !== '9') {
              this.errors.push('La V24.5 es <> 9 revisar la V15 debe ser < 3 ')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (this.data.v24_6 === '1845-01-01') {
              this.errors.push('La V24.6 es <> 9 revisar la V15 debe ser < 3')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }

            if (typeof this.data.v24_7 !== 'undefined' && this.data.v24_7.id !== '9') {
              this.errors.push('La V24.7 es <> 9 revisar la V15 debe ser < 3')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2892', 'error')
            }
          }

          if (typeof this.data.v16 !== 'undefined' && parseInt(this.data.v16.id) === 1) {
            if (Date.parse(this.patient.field_json.birthdate) < Date.parse('2021-01-31')) {
              this.errors.push('La V16 es 1 revisar la V9 debe ser > 2021-01-31')
              this.error = true
            }
          }

          var maxDate = new Date('2020-04-01')
          if (this.data.v20 !== '1799-01-01' && this.data.v20 !== '1822-02-01' && this.data.v20 !== '1833-03-03' && this.data.v20 !== '1845-01-01' && this.data.v20 !== '1846-01-01') {
            if (this.data.v19 !== '1845-01-01' && this.data.v19 !== '1846-01-01') {
              if (Date.parse(this.data.v19) <= Date.parse(maxDate)) {
                this.errors.push('La V19 debe ser >2020-01-04 y V19 <= V98 o = 1845-01-01  o 1846-01-01')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B2900', 'error')
              }

              if (Date.parse(this.data.v20) > Date.parse(maxDate)) {
                if (Date.parse(this.data.v20) < Date.parse(this.data.v19)) {
                  this.errors.push('la V20 es >  01/04/2020 00:00:00 a.m revisar  V20 >= V19')
                  this.error = true
                  // return _this.$swal('Advertencia', 'Error en la validación No. B2900', 'error')
                }
              }

              if (this.data.v20 === '1845-01-01') {
                this.errors.push('La V20 es <> 1845-01-01 revisar la V19 debe ser > 01/04/2020 00:00:00 a.m.')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B5809', 'error')
              }

              if (this.data.v21 === '1845-01-01') {
                this.errors.push('La V21 es <> 1845-01-01 revisar la V19 debe ser > 01/04/2020 00:00:00 a.m.')
                this.error = true
                // return _this.$swal('Advertencia', 'La V20 es <> 1845-01-01 revisar la V19 debe ser > 01/04/2020 00:00:00 a.m.', 'error')
              }

              if (this.data.v22 === '1845-01-01') {
                this.errors.push('La V22 es <> 1845-01-01 revisar la V19 debe ser > 01/04/2020 00:00:00 a.m.')
                this.error = true
                // return _this.$swal('Advertencia', 'La V20 es <> 1845-01-01 revisar la V19 debe ser > 01/04/2020 00:00:00 a.m.', 'error')
              }

              if (this.data.v23 === '1845-01-01') {
                this.errors.push('La V23 es <> 1845-01-01 revisar la V19 debe ser > 01/04/2020 00:00:00 a.m.')
                this.error = true
                // return _this.$swal('Advertencia', 'La V20 es <> 1845-01-01 revisar la V19 debe ser > 01/04/2020 00:00:00 a.m.', 'error')
              }
            }

            if (Date.parse(this.data.v20) < Date.parse(this.data.v19)) {
              this.errors.push('La V20 debe ser <= V98 o = 1799-01-01 o 1822-02-01 o = 03/03/1833 00:00:00 a.m. o = 1845-01-01 o = 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2902', 'error')
            }
          }

          if (Date.parse(this.data.v20) > Date.parse(this.data.v19)) {
            if (this.data.v21 === '1845-01-01') {
              this.errors.push('La V21 es <> 1845-01-01 revisar la V20 debe ser > V19')
              this.error = true
              // return _this.$swal('Advertencia', 'La V21 es <> 1845-01-01 revisar la V20 debe ser > V19', 'error')
            }

            if (this.data.v22 === '1845-01-01') {
              this.errors.push('La V22 es <> 1845-01-01 revisar la V20 debe ser > V19')
              this.error = true
              // return _this.$swal('Advertencia', 'La V21 es <> 1845-01-01 revisar la V20 debe ser > V19', 'error')
            }

            if (this.data.v23 === '1845-01-01') {
              this.errors.push('La V23 es <> 1845-01-01 revisar la V20 debe ser > V19')
              this.error = true
              // return _this.$swal('Advertencia', 'La V21 es <> 1845-01-01 revisar la V20 debe ser > V19', 'error')
            }
          }

          if (this.data.v21 !== '1799-01-01' && this.data.v21 !== '1822-02-01' && this.data.v21 !== '1833-03-03' && this.data.v21 !== '1845-01-01' && this.data.v21 !== '1846-01-01') {
            if (Date.parse(this.data.v21) > Date.parse(this.data.v98)) {
              this.errors.push('La V21 debe ser <= V98 o  = 1799-01-01 o 1822-02-01 o = 03/03/1833 00:00:00 a.m. o = 1845-01-01 o = 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4117', 'error')
            }

            if (Date.parse(this.data.v20) > Date.parse(maxDate)) {
              if (this.data.v21 !== '1799-01-01' && this.data.v21 !== '1822-02-01' && this.data.v21 !== '1833-03-03' && this.data.v21 !== '1845-01-01' && this.data.v21 !== '1846-01-01') {
                if (Date.parse(this.data.v21) <= Date.parse(this.data.v20)) {
                  this.errors.push('La V21 es > V20 revisar la V20 debe ser > 01/04/2020 00:00:00 a.m')
                  this.error = true
                  // return _this.$swal('Advertencia', 'Error en la validación No. B4117', 'error')
                }
              }

              if (this.data.v22 !== '1799-01-01' && this.data.v22 !== '1822-02-01' && this.data.v22 !== '1833-03-03' && this.data.v22 !== '1845-01-01' && this.data.v22 !== '1846-01-01') {
                if (Date.parse(this.data.v22) <= Date.parse(this.data.v20)) {
                  this.errors.push('La V22 es > V21 revisar la V21 debe ser > 2020-04-01')
                  this.error = true
                  // return _this.$swal('Advertencia', 'Error en la validación No. B5810', 'error')
                }
              }

              if (this.data.v23 !== '1799-01-01' && this.data.v23 !== '1822-02-01' && this.data.v23 !== '1833-03-03' && this.data.v23 !== '1845-01-01' && this.data.v23 !== '1846-01-01') {
                if (this.data.v23 === this.data.v21) {
                  this.errors.push('La V23 es <> V21 revisar la V21 debe ser > 2020-04-01')
                  this.error = true
                  // return _this.$swal('Advertencia', 'Error en la validación No. B5810', 'error')
                }
              }

              if (this.data.v19 !== '1799-01-01' && this.data.v19 !== '1822-02-01' && this.data.v19 !== '1833-03-03' && this.data.v19 !== '1845-01-01' && this.data.v19 !== '1846-01-01') {
                if (Date.parse(this.data.v19) > Date.parse(this.data.v21)) {
                  this.errors.push('La V19 es <= V21 revisar la V21 debe ser > 2020-04-01')
                  this.error = true
                  // return _this.$swal('Advertencia', 'Error en la validación No. B5810', 'error')
                }
              }

              if (this.data.v20 !== '1799-01-01' && this.data.v20 !== '1822-02-01' && this.data.v20 !== '1833-03-03' && this.data.v20 !== '1845-01-01' && this.data.v20 !== '1846-01-01') {
                if (Date.parse(this.data.v20) > Date.parse(this.data.v21)) {
                  this.errors.push('La V20 es < V21 revisar la V21 debe ser > 2020-04-01')
                  this.error = true
                  // return _this.$swal('Advertencia', 'Error en la validación No. B5810', 'error')
                }
              }

              if (this.data.v23 === '1845-01-01') {
                this.errors.push('La V22 es > 1845-01-01 revisar la V21 debe ser > 2020-04-01')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B4117', 'error')
              }
            }

            if (Date.parse(this.data.v21) < Date.parse(this.data.v19)) {
              this.errors.push('La V21 debe ser <= V98 o = 1799-01-01 o 1822-02-01 o = 03/03/1833 00:00:00 a.m. o = 1845-01-01 o = 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2906', 'error')
            }
          }

          if (this.data.v22 !== '1799-01-01' && this.data.v22 !== '1822-02-01' && this.data.v22 !== '1833-03-03' && this.data.v22 !== '1845-01-01' && this.data.v22 !== '1846-01-01' && this.data.v22 !== '1811-01-01') {
            if (Date.parse(this.data.v22) < Date.parse(this.data.v19)) {
              this.errors.push('La V22 debe ser <= V98 o = 1799-01-01 o 1822-02-01 o = 03/03/1833 00:00:00 a.m. o = 1845-01-01 o = 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2906', 'error')
            }

            if (Date.parse(this.data.v22) > Date.parse(maxDate)) {
              if (Date.parse(this.data.v23) <= Date.parse(this.data.v22)) {
                this.errors.push('La V23 es > V22 revisar la V22 debe ser > 2020-04-01')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
              }

              if (this.date.dateScreeningThird === '1845-01-01') {
                this.errors.push('La V22 es <> 1845-01-01 revisar la V22 debe ser > 2020-04-01')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
              }

              if (Date.parse(this.data.v22) <= Date.parse(this.data.v20)) {
                this.errors.push('La V20 es < V22 revisar la V22 debe ser > 2020-04-01')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
              }

              if (Date.parse(this.data.v22) <= Date.parse(this.data.v21)) {
                this.errors.push('La V21 es < V22 revisar la V22 debe ser > 2020-04-01')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
              }
            }
          }

          if (this.data.v23 !== '1799-01-01' && this.data.v23 !== '1822-02-01' && this.data.v23 !== '1833-03-03' && this.data.v23 !== '1845-01-01' && this.data.v23 !== '1846-01-01' && this.data.v23 !== '1811-01-01') {
            if (Date.parse(this.data.v23) < Date.parse(this.data.v19)) {
              this.errors.push('La V23 debe ser <= V98 o = 1799-01-01 o 1822-02-01 o = 03/03/1833 00:00:00 a.m. o = 1845-01-01 o = 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2906', 'error')
            }

            if (Date.parse(this.data.v23) > Date.parse(maxDate)) {
              if (Date.parse(this.data.v23) <= Date.parse(this.data.v20)) {
                this.errors.push('La V20 es > v23 revisar la V23 debe ser >2020-04-01')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
              }

              if (Date.parse(this.data.v23) <= Date.parse(this.data.v21)) {
                this.errors.push('La V21 es >  v23 revisar la V23 debe ser >2020-04-01')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
              }

              if (Date.parse(this.data.v23) <= Date.parse(this.data.v22)) {
                this.errors.push('La V22 es > V23 revisar la V23 debe ser >2020-04-01')
                this.error = true
                // return _this.$swal('Advertencia', 'Error en la validación No. B4118', 'error')
              }
            }
          }

          if (typeof this.data.v24 !== 'undefined' && parseInt(this.data.v24.id) > 5 && parseInt(this.data.v24.id) !== 9 && parseInt(this.data.v24.id) !== 55 && parseInt(this.data.v24.id) !== 7) {
            this.errors.push('La V24 debe ser < 5 o = 9 o 55 o 7')
            this.error = true
          }

          if (typeof this.data.v24 !== 'undefined' && this.data.v24.id === '1') {
            if (parseInt(this.data.v24_1) < 2 || parseInt(this.data.v24_1) > 44) {
              this.errors.push('La V24.1 es > = 2 revisar la V24 debe ser 1, La V24.1 es <= 44 revisar la V24 debe ser 1')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B3261', 'error')
            }
          }

          if (typeof this.data.v24 !== 'undefined' && this.data.v24_1 === '1' && this.data.v24.id !== '3') {
            this.errors.push('La V24.1 es 1 revisar V24 debe ser 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3219', 'error')
          }

          if (parseInt(this.data.v15) > 3 && parseInt(this.data.v24_1) < 45) {
            this.errors.push('La V24 es <45  revisar V15 debe ser < 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4146', 'error')
          }

          if (typeof this.data.v24 !== 'undefined' && typeof this.data.v24_2 !== 'undefined' && this.data.v24_2.id === '1' && this.data.v24.id !== '3') {
            this.errors.push('La V24.2 es 1 revisar V24 debe ser 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3222', 'error')
          }

          if (typeof this.data.v24_2 !== 'undefined' && this.data.v24_2.id === '1' && this.data.v24_3 !== '1') {
            this.errors.push('La V24.3 es 1 o 98 o es > 1 y >= 97 revisar V24.2 debe ser 1,3,4 o 2')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4147', 'error')
          }

          if (typeof this.data.v24_2 !== 'undefined' && this.data.v24_2.id === '3' && this.data.v24_3 !== '98') {
            this.errors.push('La V24.3 es 1 o 98 o es > 1 y >= 97 revisar V24.2 debe ser 1,3,4 o 2')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4147', 'error')
          }

          if (typeof this.data.v24_2 !== 'undefined' && this.data.v24_2.id === '4' && this.data.v24_3 !== '98') {
            this.errors.push('La V24.3 es 1 o 98 o es > 1 y >= 97 revisar V24.2 debe ser 1,3,4 o 2')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4147', 'error')
          }

          if (typeof this.data.v24_2 !== 'undefined' && this.data.v24_2.id === '2' && parseInt(this.data.v24_3) <= 1) {
            this.errors.push('La V24.3 es 1 o 98 o es > 1 y >= 97 revisar V24.2 debe ser 1,3,4 o 2')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4147', 'error')
          }

          if (typeof this.data.v24_2 !== 'undefined' && this.data.v24_2.id === '2' && parseInt(this.data.v24_3) > 98) {
            this.errors.push('La V24.3 es 1 o 98 o es > 1 y >= 97 revisar V24.2 debe ser 1,3,4 o 2')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4147', 'error')
          }

          if (typeof this.data.v24_4 !== 'undefined' && this.data.v24_4.id === '4' && this.data.v15 !== '1') {
            this.errors.push('La V24.4  es 4 revisar V15 debe ser = 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4150', 'error')
          }

          if (typeof this.data.v24_4 !== 'undefined' && parseInt(this.data.v24_4.id) < 6 && parseInt(this.data.v15) > 3) {
            this.errors.push('La V24.4  es < 6  revisar V15 debe ser < 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4151', 'error')
          }

          if (typeof this.data.v24_5 !== 'undefined' && this.data.v24_5.id === '4' && this.data.v15 !== '1') {
            this.errors.push('La V24.5 es 4 revisar la V15 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3253', 'error')
          }

          if (typeof this.data.v24_5 !== 'undefined' && this.data.v24_5.id === '4' && this.data.v24_6 !== '1811-01-01') {
            this.errors.push('La V24.6 es = 1811-01-01 revisar V24.5 debe ser 4')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3253', 'error')
          }

          if (typeof this.data.v24_5 !== 'undefined' && parseInt(this.data.v24_5.id) < 5 && parseInt(this.data.v15) > 3) {
            this.errors.push('La V24.5  es<5 revisar V15 debe ser < 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4153', 'error')
          }

          if (typeof this.data.v24_5 !== 'undefined' && this.data.v24_5.id === '1' && this.data.v24_8.id !== 'CN' && this.data.v24_8.id !== 'RC' && this.data.v24_8.id !== 'MS') {
            this.errors.push('La V24.8 es CN revisar V24.5 debe ser 1, La V24.8 es RC revisar V24.5 debe ser 1, La V24.8 es MS revisar  V24.5 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4162', 'error')
          }

          if (this.data.v24_6 !== '1811-01-01' && this.data.v24_6 !== '1800-01-01' && this.data.v24_6 !== '1833-03-03' && this.data.v24_6 !== '1845-01-01' && this.data.v24_6 !== '1846-01-01') {
            if (Date.parse(this.data.v24_6) < Date.parse(this.data.v19)) {
              this.errors.push('La V24.6 debe ser >= V19 y V24.6 <= V98')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2921', 'error')
            }
          }

          if (this.data.v24_6 !== '1845-01-01' && parseInt(this.data.v15) > 3) {
            this.errors.push('a V24.6  es<> 1845-01-01 revisar V15 debe ser < 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4154', 'error')
          }

          if (parseInt(this.data.v24_7) < 9 && parseInt(this.data.v15) > 3) {
            this.errors.push('Error en la validación No. Cuando V24.7 sea < 9 Entonces V15_Mujer_Gestante DEBE SER < 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4156', 'error')
          }

          if (typeof this.data.v24_8 !== 'undefined' && this.data.v24_8.id === 'NA' && this.data.v24_9 !== '9') {
            this.errors.push('La V24.9 es 9 revisar la V24.8 debe ser NA')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4157', 'error')
          }
        }

        if (this.secondStep === true) {
          if (typeof this.data.v16 !== 'undefined' && this.data.v16.id === '1' && typeof this.data.v25 !== 'undefined' && this.data.v25.id === 'NA') {
            this.errors.push('La V25 es <> NA revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.v16 !== 'undefined' && this.data.v16.id === '1' && this.data.v25_1 === '9') {
            this.errors.push('La V25.1 es <> 9 revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.v16 !== 'undefined' && this.data.v16.id === '1' && typeof this.data.v25_2 !== 'undefined' && this.data.v25_2.id === '9') {
            this.errors.push('La V25.2 es <> 9 revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.v16 !== 'undefined' && this.data.v16.id === '1' && typeof this.data.v26 !== 'undefined' && this.data.v26.id === '9') {
            this.errors.push('La V26 es <> 9 revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.v16 !== 'undefined' && this.data.v16.id === '1' && typeof this.data.v27 !== 'undefined' && this.data.v27.id === '9') {
            this.errors.push('La V27 es <> 9 revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.v16 !== 'undefined' && this.data.v16.id === '1' && this.data.v28 === '1845-01-01') {
            this.errors.push('La V28 es <> 1845-01-01 revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.v16 !== 'undefined' && this.data.v16.id === '1' && this.data.v29 === '1845-01-01') {
            this.errors.push('La V29 es <> 1845-01-01 revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.v16 !== 'undefined' && this.data.v16.id === '1' && this.data.v30 === '1845-01-01') {
            this.errors.push('La V30 es <> 1845-01-01 revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.v16 !== 'undefined' && this.data.v16.id === '1' && typeof this.data.v31 !== 'undefined' && this.data.v31.id === '9') {
            this.errors.push('La V31 es <> 9 revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2895', 'error')
          }

          if (typeof this.data.v16 !== 'undefined' && this.data.v16.id === '1' && typeof this.data.v15 !== 'undefined' && parseInt(this.data.v15.id) < 3) {
            this.errors.push('La V16 es 1 revisar la v15 debe ser >= 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4083', 'error')
          }

          if (typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17.id) < 3 && this.data.v32 === '1845-01-01') {
            this.errors.push('La V32 es <> 1845-01-01 revisar la V17 debe  ser < 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2897', 'error')
          }

          if (typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17.id) < 3 && this.data.v33 === '1845-01-01') {
            this.errors.push('La V33 es <> 1845-01-01 revisar la V17 debe  ser < 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2897', 'error')
          }

          if (typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17.id) < 3 && this.data.v21 !== '1799-01-01') {
            this.errors.push('La V21 es <> 1799-01-01 revisar V17 debe ser < 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4084', 'error')
          }

          if (typeof this.data.v25 !== 'undefined' && this.data.v25.id === 'NA' && (this.data.v25_1 !== '55' && this.data.v25_1 !== '9')) {
            this.errors.push('La V26 es > 5 revisar la V25 debe ser NA')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2926', 'error')
          }

          if (typeof this.data.v25 !== 'undefined' && this.data.v25.id === 'NA' && typeof this.data.v25_2 !== 'undefined' && parseInt(this.data.v25_2.id) <= 1) {
            this.errors.push('La V25.2 es > 1 revisar la V25 debe sr NA')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2926', 'error')
          }

          if (typeof this.data.v25 !== 'undefined' && this.data.v25.id === 'NA' && typeof this.data.v26 !== 'undefined' && parseInt(this.data.v26.id) <= 5) {
            this.errors.push('La V26 es > 5 revisar la V25 debe ser NA')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2926', 'error')
          }

          if (typeof this.data.v25 !== 'undefined' && this.data.v25.id === 'NA' && typeof this.data.v27 !== 'undefined' && parseInt(this.data.v27.id) <= 4) {
            this.errors.push('La V27 es > 4 revisar la V25 debe ser NA')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2926', 'error')
          }

          if (typeof this.data.v25 !== 'undefined' && this.data.v25.id === 'NA' && typeof this.data.v31 !== 'undefined' && parseInt(this.data.v31.id) <= 3) {
            this.errors.push('La V31 es > 3  revisar la V25 debe ser NA')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2926', 'error')
          }

          if (typeof this.data.v25 !== 'undefined' && this.data.v25.id !== 'NA' && typeof this.data.v16 !== 'undefined' && parseInt(this.data.v16.id) !== 1) {
            this.errors.push('La V25 es <> NA revdiar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5329', 'error')
          }

          if (this.data.v25_1 === '9' && typeof this.data.v16 !== 'undefined' && parseInt(this.data.v16.id) !== 0) {
            this.errors.push('La V25.1 es 9  revisar la V16 debe ser 0')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4159', 'error')
          }

          if (typeof this.data.v25_2 !== 'undefined' && parseInt(this.data.v25_2.id) < 2 && typeof this.data.v16 !== 'undefined' && parseInt(this.data.v16.id) !== 1) {
            this.errors.push('La V25.2 es < 2 revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4160', 'error')
          }

          if (typeof this.data.v27 !== 'undefined' && parseInt(this.data.v27.id) < 5 && typeof this.data.v16 !== 'undefined' && parseInt(this.data.v16.id) !== 1) {
            this.errors.push('La V27 es < 5 revisar la V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4160', 'error')
          }

          if (this.data.v28 === '1800-01-01') {
            if (this.data.v28_1 !== '99999999') {
              this.errors.push('La V28.1 es 99999999 revisar la V28 debe ser = 1800-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2932', 'error')
            }

            if (this.data.v29 !== '1800-01-01') {
              this.errors.push('La V29 es = 1800-01-01 revisar  V28 debe ser 1800-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2932', 'error')
            }

            if (this.data.v30 !== '1800-01-01') {
              this.errors.push('La V30 es = 1800-01-01 revisar  V28 debe ser 1800-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2932', 'error')
            }
          }

          if (this.data.v28 === '1846-01-01') {
            if (this.data.v28_1 !== '55555555') {
              this.errors.push('La V28.1 es 55555555 revisar la V28 debe ser = 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2933', 'error')
            }
          }

          if (Date.parse(this.data.v28) > Date.parse(this.patient.field_json.birthdate)) {
            if (this.data.v29 !== '1800-01-01') {
              this.errors.push('La V29 es 1800-01-01 revisar V28 debe ser > V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B3252', 'error')
            }

            if (this.data.v30 !== '1833-01-01') {
              this.errors.push('La V30 es 1833-01-01 revisar V28 debe ser >V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B3252', 'error')
            }

            if (this.data.v28 === this.data.v30) {
              this.errors.push('La V30 ez <> V28 revisar V28 debe ser > V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2934', 'error')
            }

            if (Date.parse(this.data.v30) < Date.parse(this.data.v28)) {
              this.errors.push('La V30 es > V28  revisar V28 debe ser > V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B3252', 'error')
            }

            if (Date.parse(this.data.v30) < Date.parse(this.data.v29)) {
              this.errors.push('La V29 es > V28  revisar V28 debe ser > V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B3252', 'error')
            }
          }

          if (this.data.v29 === '1800-01-01') {
            if (this.data.v29_1 !== '99999999') {
              this.errors.push('La V29.1 es = 99999999 revisar la V29 debe ser = 1800-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2937', 'error')
            }
          }

          if (this.data.v29 === '1846-01-01') {
            if (this.data.v29_1 !== '55555555') {
              this.errors.push('La V29.1 es = 55555555 revisar la V29 debe ser = 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2938', 'error')
            }
          }

          if (Date.parse(this.data.v29) > Date.parse(this.patient.field_json.birthdate)) {
            if (Date.parse(this.data.v30) < Date.parse('1800-01-01')) {
              this.errors.push('La V30 es > 1800-01-01 revisar V29 debe ser > V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2940', 'error')
            }

            if (this.data.v29_1 === '99999999') {
              this.errors.push('La V29.1 es <> 99999999 revisar V29 debe ser > V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2940', 'error')
            }

            if (Date.parse(this.data.v30) < Date.parse(this.data.v29)) {
              this.errors.push('La V30 es > V29 revisar V29 debe ser > V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2940', 'error')
            }
          }

          if (this.data.v30 === '1800-01-01') {
            if (this.data.v30_1 !== '99999999') {
              this.errors.push('La V30.1 es 99999999 revisar V30 debe ser 1800-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2943', 'error')
            }
          }

          if (this.data.v30 === '1846-01-01') {
            if (this.data.v30_1 !== '55555555') {
              this.errors.push('La V30.1 es 55555555 revisar V30 debe ser 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2944', 'error')
            }
          }

          if (Date.parse(this.data.v30) > Date.parse(this.patient.field_json.birthdate)) {
            if (this.data.v30_1 !== '99999999') {
              this.errors.push('La V30 es > 1800-01-01 revisar V29 debe ser > V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2943', 'error')
            }

            if (Date.parse(this.data.v29) > Date.parse(this.data.v30)) {
              this.errors.push('La V28 es <V30 revisar V30 debe ser > V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2945', 'error')
            }

            if (Date.parse(this.data.v28) > Date.parse(this.data.v30)) {
              this.errors.push('La V30 es > V29 revisar V30 debe ser > V09')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2945', 'error')
            }
          }

          if (typeof this.data.v31 !== 'undefined' && parseInt(this.data.v31.id) === 1 && typeof this.data.v16 !== 'undefined' && parseInt(this.data.v16.id) !== 1) {
            this.errors.push('La V31 es 1 revisar V16 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4128', 'error')
          }

          if (Date.parse(this.data.v32) > Date.parse(this.patient.field_json.birthdate)) {
            if (typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17.id) >= 3) {
              this.errors.push('La V32 es > V09 revisar la V17 debe ser < 3')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2945', 'error')
            }
          }

          if (Date.parse(this.data.v33) > Date.parse(this.patient.field_json.birthdate)) {
            if (typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17.id) >= 3) {
              this.errors.push('La V33 es > V09 revisar la V17 debe ser < 3')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2945', 'error')
            }
          }
        }

        if (this.thirdStep === true) {
          if (this.data.v34 !== '1799-01-01' || this.data.v34 !== '1811-11-01' || this.data.v34 !== '1822-02-01' || this.data.v34 !== '1846-01-01') {
            if (Date.parse(this.data.v34) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V34 debe ser >= V09 y V32 <= V36 o = 1799-01-01,1822-01-01,1811-01-01,1846-01-01 ')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2954', 'error')
            }

            if (Date.parse(this.data.v34) > Date.parse(this.data.v36)) {
              this.errors.push('La V34 debe ser >= V09 y V32 <= V36 o = 1799-01-01,1822-01-01,1811-01-01,1846-01-01 ')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2954', 'error')
            }
          }

          if (Date.parse(this.data.v34) > Date.parse(this.patient.field_json.birthdate) && typeof this.data.v35 !== 'undefined' && parseInt(this.data.v35.id) >= 13) {
            this.errors.push('La V35 es < 13 revisar V34 debe ser > V09')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4163', 'error')
          }

          if (Date.parse(this.data.v34) > Date.parse('1846-01-01') && typeof this.data.v35 !== 'undefined' && parseInt(this.data.v35.id) >= 13) {
            this.errors.push('La V35 es <> 13 revisar V34 debe ser > 1846-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5330', 'error')
          }

          if (typeof this.data.v35 !== 'undefined' && parseInt(this.data.v35.id) <= 13 && this.data.v34 === '1799-01-01') {
            this.errors.push('La V35 es < 13 revisar la V34 debe ser <> 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4401', 'error')
          }

          if (this.data.v36 !== '1846-01-01') {
            if (Date.parse(this.data.v36) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V36 debe ser >= V09 y V36 <= V98 o = 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2958', 'error')
            }
          }

          if (this.data.v37 !== '1800-01-01' || this.data.v37 !== '1846-01-01') {
            if (Date.parse(this.data.v37) < Date.parse(this.data.v36)) {
              this.errors.push('LA V37 debe ser >= V36 y  <= V98 o = 1800-01-01 o 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2963', 'error')
            }
          }

          if (typeof this.data.v39 !== 'undefined' && this.data.v39.id === '4' && parseInt(this.data.v40_1) <= 3000) {
            this.errors.push('La V40.1 es >3000 revisar V39 debe ser 4')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4167', 'error')
          }

          if (typeof this.data.v39 !== 'undefined' && this.data.v39.id === '2') {
            if ((parseInt(this.data.v40_1) < 200 || parseInt(this.data.v40_1) >= 500)) {
              this.errors.push('La V40.1 es > 200 y < 500 revisar V39 debe ser = 2')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4167', 'error')
            }
          }

          if (typeof this.data.v39 !== 'undefined' && this.data.v39.id === '1') {
            if ((parseInt(this.data.v40_1) < 500 || parseInt(this.data.v40_1) > 3000)) {
              this.errors.push('La V40.1 e >= 500 y <= 3000 revisar la V39 debe ser 1')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B5331', 'error')
            }
          }

          if (typeof this.data.v39 !== 'undefined' && this.data.v39.id === '3' && parseInt(this.data.v40_1) >= 200) {
            this.errors.push('La V40.1 es< 200 revisar la V39 debe ser 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.v40 !== 'undefined' && this.verificacionConteoLinfocitos.id === '1' && (parseInt(this.data.v40_1) === 9999 || parseInt(this.data.v40_1) === 9998)) {
            this.errors.push('La V40.1 es <> 9999 y <> 9998 revisar la V40 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3224', 'error')
          }

          if (typeof this.data.v40 !== 'undefined' && parseInt(this.verificacionConteoLinfocitos.id) > 1 && parseInt(this.data.v40_1) < 5555) {
            this.errors.push('La V40.1 es >= 5555 revisar V40 debe ser > 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4402', 'error')
          }

          if (typeof this.data.v41 !== 'undefined' && this.data.v41.id === '9') {
            this.errors.push('La V40 debe sr <> 9')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2968', 'error')
          }

          if (typeof this.data.v41 !== 'undefined' && this.data.v41.id !== '9') {
            if (typeof this.data.v41 !== 'undefined' && this.data.v41.id === '1' && parseInt(this.data.v41_1) >= 1000000) {
              this.errors.push('La V41.1 es <= 10000000 revisar V41 debe ser 1')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4169', 'error')
            }

            if (typeof this.data.v41 !== 'undefined' && parseInt(this.data.v41.id) > 1 && parseInt(this.data.v41_1) < 5555555) {
              this.errors.push('La V41.1 es > 41 debe ser > 1')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4403', 'error')
            }
          }
        }

        if (this.fourthStep === true) {
          if (this.data.v42 !== '1788-01-01' && this.data.v42 !== '1799-01-01' && this.data.v42 !== '1846-01-01') {
            if (Date.parse(this.data.v42) < Date.parse(this.data.v36)) {
              this.errors.push('La V98 debe ser >= V42 o = 1788-01-01 o 1799-01-01 = 1846-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2976', 'error')
            }
          }

          if (Date.parse(this.data.v42) >= Date.parse(this.data.v36) && this.medicamento1InicioTar.id === '9') {
            this.errors.push('La V42.1 es <> 9 revisar V42 debe ser >= V36')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3225', 'error')
          }

          if (Date.parse(this.data.v42) >= Date.parse(this.data.v36) && this.medicamento2InicioTar.id === '9') {
            this.errors.push('La V42.2 es <> 9 revisar V42 debe ser >= V36')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3225', 'error')
          }

          if (Date.parse(this.data.v42) >= Date.parse(this.data.v36) && this.medicamento3InicioTar.id === '9') {
            this.errors.push('La V42.5 es <> 9 revisar V42 debe ser >= V36')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3225', 'error')
          }

          if (Date.parse(this.data.v42) >= Date.parse(this.data.v36) && this.medicamento4InicioTar.id === '9') {
            this.errors.push('La V42.3 es <> 9 revisar V42 debe ser >= V36')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3225', 'error')
          }

          if (Date.parse(this.data.v42) >= Date.parse(this.data.v36) && this.medicamento5InicioTar.id === '9') {
            this.errors.push('La V42.4 es <> 9 revisar V42 debe ser >= V36')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3225', 'error')
          }

          if (this.data.v42 === '1799-01-01') {
            if (typeof this.data.v42_1 !== 'undefined' && this.data.v42_1.id !== '9') {
              this.errors.push('La V42.1 es 9 revisar V42 debe ser 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2978', 'error')
            }

            if (typeof this.data.v43 !== 'undefined' && this.data.v43.id !== '5') {
              this.errors.push('La V43 es 5 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v43 !== 'undefined' && this.data.v43_1.id !== '9996') {
              this.errors.push('La V43.1 es 9996 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v43 !== 'undefined' && this.data.v44.id !== '5') {
              this.errors.push('La V44 es 5 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (this.data.v44_1 !== '99999996') {
              this.errors.push('La V44.1 es 99999996 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '16') {
              this.errors.push('La V45 es 16 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v46 !== 'undefined' && this.data.v46.id !== '6') {
              this.errors.push('La V46 es 6 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v47 !== 'undefined' && this.data.v47.id !== '6') {
              this.errors.push('La V47 es 6 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '5') {
              this.errors.push('La V48 es 5 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }
          }

          if (this.data.v42 !== '1799-01-01') {
            if (typeof this.data.v42_1 !== 'undefined' && this.data.v42_1.id === '9') {
              this.errors.push('La V42.1 es 9 revisar V42 debe ser 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B2978', 'error')
            }

            if (typeof this.data.v43 !== 'undefined' && this.data.v43.id === '5') {
              this.errors.push('La V43 es 5 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v43 !== 'undefined' && this.data.v43_1.id === '9996') {
              this.errors.push('La V43.1 es 9996 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v43 !== 'undefined' && this.data.v44.id === '5') {
              this.errors.push('La V44 es 5 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (this.data.v44_1 === '99999996') {
              this.errors.push('La V44.1 es 99999996 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '16') {
              this.errors.push('La V45 es 16 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '6') {
              this.errors.push('La V46 es 6 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v47 !== 'undefined' && this.data.v47.id === '6') {
              this.errors.push('La V47 es 6 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.v48 !== 'undefined' && this.data.v48.id === '5') {
              this.errors.push('La V48 es 5 revisar la V42 debe ser = 1799-01-01')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }
          }

          if (typeof this.data.v43 !== 'undefined' && this.data.v43.id === '1' && parseInt(this.data.v43_1) > 3000) {
            this.errors.push('La V43.1 es <= 300 revisar la V43 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4172', 'error')
          }

          if (typeof this.data.v43 !== 'undefined' && parseInt(this.data.v43.id) < 5 && this.data.v42 === '1799-01-01') {
            this.errors.push('La V43 es < 5 revisar V42 debe ser <> 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5335', 'error')
          }

          if (parseInt(this.data.v43_1) <= 3000 && this.data.v42 === '1799-01-01') {
            this.errors.push('La V43.1 es <= 3000 revisar V42 debe ser <> 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5338', 'error')
          }

          if (this.data.v44 === '1') {
            if (parseInt(this.data.v44_1) > 10000000 || this.data.v44_1 !== '99999994' || this.data.v44_1 !== '99999995') {
              this.errors.push('La V44 .1 es <= 10000000 o = 99999994 o =99999995 revisar V44 debe ser 1')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B3226', 'error')
            }
          }

          if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '16' && this.data.v42 !== '1799-01-01') {
            this.errors.push('La V45 es 16 revisar la V42 debe ser = 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3255', 'error')
          }

          if (typeof this.data.v45 !== 'undefined' && parseInt(this.data.v45.id) < 16 && this.data.v42 === '1799-01-01') {
            this.errors.push('La V45 es < 16 revisar V42 debe ser <> 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5341', 'error')
          }

          if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '17' && this.data.v42 === '1799-01-01') {
            this.errors.push('La V45 es 17 revisar V42 debe ser <>  1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5342', 'error')
          }

          if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '9') {
            this.errors.push('La V46 debe ser <> 9')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2996', 'error')
          }

          if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '6' && this.data.v42 !== '1799-01-01') {
            this.errors.push('La V46 es 6 revisar la V42 debe ser = 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3256', 'error')
          }

          if (typeof this.data.v46 !== 'undefined' && parseInt(this.data.v46.id) < 6 && this.data.v42 === '1799-01-01') {
            this.errors.push('La V46 es < 6 revisar V42 debe ser <> 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5343', 'error')
          }

          if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '7' && this.data.v42 === '1799-01-01') {
            this.errors.push('La V46 es 7 revisar V42 debe ser <>  1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5344', 'error')
          }

          if (typeof this.data.v46 !== 'undefined' && this.data.v47.id === '9') {
            this.errors.push('La V47 debe ser <> 9')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B2998', 'error')
          }

          if (typeof this.data.v46 !== 'undefined' && this.data.v47.id === '6' && this.data.v42 !== '1799-01-01') {
            this.errors.push('La V47 es 6 revisar la V42 debe ser = 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3257', 'error')
          }

          if (typeof this.data.v46 !== 'undefined' && parseInt(this.data.v47.id) < 6 && this.data.v42 === '1799-01-01') {
            this.errors.push('La V47 es < 6 revisar V42 debe ser <> 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5345', 'error')
          }

          if (typeof this.data.v46 !== 'undefined' && this.data.v47.id === '7' && this.data.v42 === '1799-01-01') {
            this.errors.push('La V47 es 7 revisar V42 debe ser <>  1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5346', 'error')
          }

          if (typeof this.data.v48 !== 'undefined' && this.data.v48.id === '9') {
            this.errors.push('La V48 debe ser <> 9')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3000', 'error')
          }

          if (typeof this.data.v48 !== 'undefined' && this.data.v48.id === '5' && this.data.v42 !== '1799-01-01') {
            this.errors.push('La V48 es 5 revisar la V42 debe ser = 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3258', 'error')
          }

          if (typeof this.data.v48 !== 'undefined' && parseInt(this.data.v48.id) < 5 && this.data.v42 === '1799-01-01') {
            this.errors.push('La V48 es < 5 revisar V42 debe ser <> 1799-01-01')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5347', 'error')
          }

          if (typeof this.data.v51 !== 'undefined' && this.data.v51.id === '9') {
            this.errors.push('La V51 debe ser <> 9')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3006', 'error')
          }

          if (typeof this.data.v51 !== 'undefined' && this.data.v51.id === '1' && this.data.v51_1 === '1800-01-01') {
            this.errors.push('La V51.1 es <> 1800-01-01 revisar V51 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3227', 'error')
          }

          if (typeof this.data.v51 !== 'undefined' && typeof this.data.v51_2 !== 'undefined' && this.data.v51.id === '1' && (parseInt(this.data.v51_2.id) > 7 || this.data.v51_2.id !== '55')) {
            this.errors.push('La V51.2 es <= 7 revisar V51 debe ser 1, La V51.2 es 55 revisar V51 debe ser 1')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3227', 'error')
          }

          if (this.data.v51_1 !== '1777-01-01' && this.data.v51_1 !== '1788-01-01' && this.data.v51_1 !== '1800-01-01' && this.data.v51_1 !== '1845-01-01' && this.data.v51_1 !== '1846-01-01') {
            if (Date.parse(this.data.v51_1) < Date.parse(this.data.v42)) {
              this.errors.push('La V51.1 debe ser > = V42 o = 1777-01-01 o 1788-01-01 o 1800-01-01 o 1845-01-01 o 1846-01-01 ')
              this.error = true
              // return _this.$swal('Advertencia', 'Error en la validación No. B3008', 'error')
            }
          }

          if (typeof this.data.v51_2 !== 'undefined' && Date.parse(this.data.v51_1) > Date.parse('1846-01-01') && parseInt(this.data.v51_2.id) > 10) {
            this.errors.push('La V51.2 es <= 10 revisar la V51.1 debe ser > 1846-01-01')
            this.error = true
          }

          if (typeof this.data.v51_2 !== 'undefined' && this.data.v51_1 === '1800-01-01' && parseInt(this.data.v51_2.id) <= 5) {
            this.errors.push('La V51.2 es > 5 revisar la V51.1 debe ser = 1800-01-01')
            this.error = true
          }

          if (typeof this.data.v51_2 !== 'undefined' && this.data.v51_1 === '1799-01-01' && parseInt(this.data.v51_2.id) <= 5) {
            this.errors.push('La V51.2 es > 5 revisar la V51.1 debe ser = 1799-01-01')
            this.error = true
          }

          if (typeof this.data.v51_2 !== 'undefined' && this.data.v51_1 === '1788-01-01' && parseInt(this.data.v51_2.id) <= 5) {
            this.errors.push('La V51.2 es > 5 revisar la V51.1 debe ser = 1788-01-01')
            this.error = true
          }

          if (typeof this.data.v51_2 !== 'undefined' && parseInt(this.data.v51_2.id) > 7) {
            if (this.data.v51_1 !== '1845-01-01' && this.data.v51_1 !== '1800-01-01' && this.data.v51_1 !== '1777-01-01' && this.data.v51_1 !== '1788-01-01') {
              this.errors.push('La V51.1 es > 7 revisar V51.1 debe ser 1845-01-01 o 1800-01-01 o 1777-01-01 o 1788-01-01 ')
              this.error = true
            }
          }

          if (typeof this.data.v51_7 !== 'undefined' && this.data.v51_7.id === '1' && this.data.v51_8 === '99') {
            this.errors.push('La V51.8 es <> 99 revisar V51.7 debe ser 1')
            this.error = true
          }

          if (typeof this.data.v51_7 !== 'undefined' && this.data.v51_7.id === '1' && this.data.v51_8 === '0') {
            this.errors.push('La V51.8 es <> 0 revisar V51.7 debe ser 1')
            this.error = true
          }

          if (typeof this.data.v51_7 !== 'undefined' && parseInt(this.data.v51_7.id) > 1 && parseInt(this.data.v51_8) <= 54) {
            this.errors.push('La V51.8 es > 54 revisar V51.7 debe ser > 1')
            this.error = true
          }
        }

        if (this.fiveStep === true) {
          if (typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17.id) < 3) {
            if (typeof this.data.v68 !== 'undefined' && parseInt(this.data.v68.id) !== 1) {
              this.errors.push('La V68 es 1 revisar V17 debe ser < 3')
              this.error = true
            }

            if (typeof this.data.v68_1 !== 'undefined' && parseInt(this.data.v68_1.id) >= 6) {
              this.errors.push('La V68.1 es < 6 revisar V17 debe ser < 3')
              this.error = true
            }

            if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) >= 8) {
              this.errors.push('La V68.2 es < 8 revisar V17 debe ser < 3')
              this.error = true
            }

            if (this.data.v68_3 === '1799-01-01') {
              this.errors.push('La V68 es <> 1799-01-01 revisar V17 debe ser < 3')
              this.error = true
            }

            if (typeof this.data.v68_14 !== 'undefined' && parseInt(this.data.v68_14.id) === 10) {
              this.errors.push('La V68.14 es <> 10 revisar V17 debe ser < 3')
              this.error = true
            }
          }

          if (typeof this.data.v39 !== 'undefined' && this.data.v39 === '3') {
            if (typeof this.data.v52_1 !== 'undefined' && this.data.v52_1.id !== '1') {
              this.errors.push('La V52.1 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_2 !== 'undefined' && this.data.v52_2.id !== '1') {
              this.errors.push('La V52.2 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_3 !== 'undefined' && this.data.v52_3.id !== '1') {
              this.errors.push('La V52.3 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_4 !== 'undefined' && this.data.v52_4.id !== '1') {
              this.errors.push('La V52.4 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_5 !== 'undefined' && this.data.v52_5.id !== '1') {
              this.errors.push('La V52.5 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_6 !== 'undefined' && this.data.v52_6.id !== '1') {
              this.errors.push('La V52.6 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_7 !== 'undefined' && this.data.v52_7.id !== '1') {
              this.errors.push('La V52.7 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_8 !== 'undefined' && this.data.v52_8.id !== '1') {
              this.errors.push('La V52.8 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_9 !== 'undefined' && this.data.v52_9.id !== '1') {
              this.errors.push('La V52.9 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_10 !== 'undefined' && this.data.v52_10.id !== '1') {
              this.errors.push('La V52.10 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_11 !== 'undefined' && this.data.v52_11.id !== '1') {
              this.errors.push('La V52.11 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_12 !== 'undefined' && this.data.v52_12.id !== '1') {
              this.errors.push('La V52.12 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_13 !== 'undefined' && this.data.v52_13.id !== 1) {
              this.errors.push('La V52.13 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_14 !== 'undefined' && this.data.v52_14.id !== 1) {
              this.errors.push('La V52.14 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_15 !== 'undefined' && this.data.v52_15.id !== 1) {
              this.errors.push('La V52.15 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_16 !== 'undefined' && this.data.v52_16.id !== 1) {
              this.errors.push('La V52.16 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_17 !== 'undefined' && this.data.v52_17.id !== '1') {
              this.errors.push('La V52.17 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_18 !== 'undefined' && this.data.v52_18.id !== '1') {
              this.errors.push('La V52.18 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_19 !== 'undefined' && this.data.v52_19.id !== '1') {
              this.errors.push('La V52.19 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_20 !== 'undefined' && this.data.v52_20.id !== '1') {
              this.errors.push('La V52.20 es 1 revisar la V39 debe ser 3')
              this.error = true
            }
            if (typeof this.data.v52_21 !== 'undefined' && this.data.v52_21.id !== '1') {
              this.errors.push('La V52.21 es 1, revisar la V39 debe ser 3')
              this.error = true
            }

            if (typeof this.data.v52_22 !== 'undefined' && this.data.v52_22.id !== '1') {
              this.errors.push('La V52.22 es 1, revisar la V39 debe ser 3')
              this.error = true
            }
          }

          if (this.data.v53_1 !== '1846-01-01') {
            if (Date.parse(this.data.v53_1) < Date.parse(this.patient.field_json.birthdate) || Date.parse(this.data.v53_1) > Date.parse(this.data.v98)) {
              this.errors.push('La V53.1 debe ser >= V09 y <= V98 o = 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v53_1 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 debe ser 19 revisar la V53.1 debe ser 1846-01-01')
              this.error = true
            }
          }

          if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id === 7) {
            this.errors.push('La V53.3 debe ser <> 7')
            this.error = true
          }

          if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V53.3 debe ser 55')
            this.error = true
          }

          if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id === '10') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '9' && this.data.v97.id !== '7' && this.data.v97.id !== '10' && this.data.v97.id !== '4' && this.data.v97.id !== '5' && this.data.v97.id !== '11' && this.data.v97.id !== '17') {
              this.errors.push('LA V97 es 9,7,10,4,5,11 o 17 revisar la V53.3 debe ser 10')
              this.error = true
            }
          }

          if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id !== '10') {
            if (typeof this.data.v97 !== 'undefined' && (this.data.v97.id === '9' || this.data.v97.id === '7' || this.data.v97.id === '10' || this.data.v97.id === '4' || this.data.v97.id === '5' || this.data.v97.id === '11' || this.data.v97.id === '17')) {
              this.errors.push('LA V97 es 9,7,10,4,5,11 o 17 revisar la V53.3 debe ser 10')
              this.error = true
            }
          }

          if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id === '2' && typeof this.data.v53_4 !== 'undefined' && parseInt(this.data.v53_4.id) >= 5) {
            this.errors.push('La V53.4 es < 5 revisar V53.3 debe ser = 2')
            this.error = true
          }

          if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id !== '2' && typeof this.data.v53_4 !== 'undefined' && parseInt(this.data.v53_4.id) < 5) {
            this.errors.push('La V53.4 es < 5 revisar V53.3 debe ser = 2')
            this.error = true
          }

          if (typeof this.data.v53_4 !== 'undefined' && this.data.v53_4.id === '9') {
            this.errors.push('La V53.4 debe ser <> 9')
            this.error = true
          }

          if (typeof this.data.v53_4 !== 'undefined' && this.data.v53_4.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V53.4 debe ser 55')
            this.error = true
          }

          if (typeof this.data.v53_4 !== 'undefined' && parseInt(this.data.v53_4.id) < 5 && parseInt(this.data.v94) <= 100000) {
            this.errors.push('La V94 es > 100000 revisar la V53.4 debe ser < 5')
            this.error = true
          }

          if (this.data.v54 !== '1799-01-01' && this.data.v54 !== '1800-01-01' && this.data.v54 !== '1846-01-01') {
            if (Date.parse(this.data.v54) < Date.parse(this.data.v36)) {
              this.errors.push('La V54 debe ser >= V36')
              this.error = true
            }

            if (Date.parse(this.data.v54) > Date.parse(this.data.v98)) {
              this.errors.push('La V54 debe ser <= V98 0 = 1799-01-01 o 1800-01-01 o 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v54 === '1846-01-01' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V54 debe ser 1846-01-01')
            this.error = true
          }

          if (typeof this.data.v55 !== 'undefined' && this.data.v55.id === '9') {
            this.errors.push('La V55 debe ser <> 9')
            this.error = true
          }

          if (typeof this.data.v55 !== 'undefined' && this.data.v55.id === '55') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V55 debe ser 55')
              this.error = true
            }
          }

          if (typeof this.data.v55 !== 'undefined' && this.data.v55.id === '0') {
            if (Date.parse(this.data.v36) <= Date.parse('2021-07-31')) {
              this.errors.push('La V55 es 0 revisar V36 debe ser > 2021-07-31')
              this.error = true
            }
          }

          if (this.data.v56 !== '1846-01-01' && this.data.v56 !== '1799-01-01') {
            if (Date.parse(this.data.v56) < Date.parse(this.patient.field_json.birthdate) || Date.parse(this.data.v56) > Date.parse(this.data.v98)) {
              this.errors.push('La V56 debe ser > = V09, La V56 debe ser <= V98 0 = 1799-01-01 o  1846-01-01')
              this.error = true
            }
          }

          // Validación 1
          if (this.data.v56 === '1846-01-01' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V56 debe ser 1846-01-01')
            this.error = true
          }

          // Validación 2
          if (Date.parse(this.data.v56) > Date.parse(this.patient.field_json.birthdate) && parseInt(this.data.v56_1) > 500) {
            this.errors.push('La V56.1 es <= 500 revisar la V56 debe ser > v09')
            this.error = true
          }

          // Validación 3
          if (this.data.v56 === '1799-01-01' && parseInt(this.data.v56_1) <= 500) {
            this.errors.push('La V56.1 es > 500 revisar la V56 debe ser 1799-01-01')
            this.error = true
          }

          if (this.data.v56_1 !== '999' && this.data.v56_1 !== '998' && this.data.v56_1 !== '0' && this.data.v56_1 !== '555') {
            if (parseInt(this.data.v56_1) < 0 || parseInt(this.data.v56_1) > 500) {
              this.errors.push('La V56.1 debe ser >= 0 y <= 500 o = 999 o = 998 o 0 555')
              this.error = true
            }
          }

          // validación 1
          if (this.data.v56_1 === '555') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V56.1 debe ser = 555')
              this.error = true
            }
          }

          // validación 2
          if (parseInt(this.data.v56_1) <= 500) {
            if (this.data.v56 === '1799-01-01') {
              this.errors.push('La v56.1 es <= 500 revisar  la V56 debe ser <> 1799-01-01')
              this.error = true
            }
          }

          // validación 3
          if (parseInt(this.data.v56_1) < 501) {
            if (Date.parse(this.data.v56) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V56.1 es <501 revisar la V56 debe ser >= V09_Fecha_de_nacimiento')
              this.error = true
            }
          }

          if (this.data.v57 !== '1799-01-01' && this.data.v57 !== '1846-01-01') {
            if (Date.parse(this.data.v57) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V57 debe ser > = v09')
              this.error = true
            }

            // validacion para V57 DEBE SER <= V98
            if (Date.parse(this.data.v57) > Date.parse(this.data.v98)) {
              this.errors.push('La V57 debe ser <= V98 o = 1799-01-01 o 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v57_1 !== '9999' && this.data.v57_1 !== '9998' && this.data.v57_1 !== '0' && this.data.v57_1 !== '5555') {
            if (parseInt(this.data.v57_1) < 0 || parseInt(this.data.v57_1) > 5000) {
              this.errors.push('La V57.1 debe ser >= o y < = 5000 o = 9999 , 9998 o 5555')
              this.error = true
            }
          }

          // Validacion 1
          if (this.data.v57_1 === '5555') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V57.1 debe ser  5555')
              this.error = true
            }
          }

          // Validacion 2
          if (parseInt(this.data.v57_1) < 5001) {
            if (this.data.v57 === '1799-01-01') {
              this.errors.push('La V57.1 es < 5001 revisar la V57 debe ser <> 1799-01-01')
              this.error = true
            }
          }

          // Validacion 3
          if (parseInt(this.data.v57_1) < 5001) {
            if (Date.parse(this.data.v57) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V57.1 es < 5001 revisar la V57 debe ser >= V09')
              this.error = true
            }
          }

          if (this.data.v58 !== '1799-01-01' && this.data.v58 !== '1846-01-01') {
            if (Date.parse(this.data.v58) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La v58 debe ser > = v09')
              this.error = true
            }

            // validacion para V57 DEBE SER <= V98
            if (Date.parse(this.data.v58) > Date.parse(this.data.v98)) {
              this.errors.push('La V58 debe ser <= V98 o = 1799-01-01 o 1846-01-01')
              this.error = true
            }
          }

          // Validación 1
          if (this.data.v58 === '1799-01-01') {
            if (parseInt(this.data.v58_1) <= 100) {
              this.errors.push('La V58.1 es <= 100 revisar V58 debe ser = 1799-01-01')
              this.error = true
            }
          }

          // Validación 2
          if (Date.parse(this.data.v58) > Date.parse(this.patient.field_json.birthdate)) {
            if (parseInt(this.data.v58_1) > 99) {
              this.errors.push('La V58.1 es > 99 revisar V58 debe ser > V09')
              this.error = true
            }
          }

          // Validación 3
          if (this.data.v58 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V58 debe ser 1845-01-01')
              this.error = true
            }
          }

          if (this.data.v58_1 !== '9999' && this.data.v58_1 !== '9998' && this.data.v58_1 !== '5555') {
            if (parseInt(this.data.v58_1) < 0 || parseInt(this.data.v58_1) > 30) {
              this.errors.push('La V58.1 debe ser >= 0 y <= 30 o = 9999 o = 9998 o = 5555')
              this.error = true
            }
          }

          if (this.data.v58_1 === '5555') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar V58.1 debe ser = 5555')
              this.error = true
            }
          }

          // Segunda validación
          if (parseInt(this.data.v58_1) <= 30) {
            if (this.data.v58 === '1799-01-01') {
              this.errors.push('La V58.1 es <= 30 revisar la V58 debe ser <> 1799-01-01')
              this.error = true
            }
          }

          // Tercera validación
          if (parseInt(this.data.v58_1) <= 30) {
            if (Date.parse(this.data.v58) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V58.1 es <= 30 revisar la V58 debe ser >= V09_Fecha_de_nacimiento')
            }
          }

          if (this.data.v59 !== '1799-01-01' && this.data.v59 !== '1846-01-01') {
            if (Date.parse(this.data.v59) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V59 debe ser > = v09')
              this.error = true
            }

            // validacion para V57 DEBE SER <= V98
            if (Date.parse(this.data.v59) > Date.parse(this.data.v98)) {
              this.errors.push('La V59 debe ser <= V98 o = 1799-01-01 o 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v59 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V59 debe ser 1846-01-01')
              this.error = true
            }
          }

          if (Date.parse(this.data.v59) > Date.parse(this.patient.field_json.birthdate)) {
            if (parseInt(this.data.v59_1) > 5000) {
              this.errors.push('La V59.1 es <= 5000 revisar la V59 debe ser > V09')
              this.error = true
            }
          }

          if (this.data.v59 === '1799-01-01') {
            if (parseInt(this.data.v59_1) <= 5000) {
              this.errors.push('La V59.1 es > 5000 revisar V59 debe ser = 1799-01-01')
              this.error = true
            }
          }

          if (this.data.v59_1 !== '9999' && this.data.v59_1 !== '9998' && this.data.v59_1 !== '5555') {
            if (parseInt(this.data.v59_1) < 0 || parseInt(this.data.v58_1) > 5000) {
              this.errors.push('La V59.1 debe ser > = 0 y < = 5000 o = 9999, 9998 o 5555')
              this.error = true
            }
          }

          // Validacion 1
          if (parseInt(this.data.v59_1) === 5555 && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V59.1 debe ser V59.1')
            this.error = true
          }

          // Validacion 2
          if (parseInt(this.data.v59_1) < 5000 && this.data.v59 === '1799-01-01') {
            this.errors.push('La V59.1 es < 5000 revisar la V59 debe ser <> 1799-01-01')
            this.error = true
          }

          // Validacion 3
          if (parseInt(this.data.v59_1) < 5000 && Date.parse(this.data.v59) < Date.parse(this.patient.field_json.birthdate)) {
            this.errors.push('La V59.1 es < 5000 revisar la V59 debe ser >= V09')
            this.error = true
          }

          if (this.data.v60 !== '1799-01-01' && this.data.v60 !== '1846-01-01') {
            if (Date.parse(this.data.v60) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V60 debe ser > = v09')
              this.error = true
            }

            // validacion para V57 DEBE SER <= V98
            if (Date.parse(this.data.v60) > Date.parse(this.data.v98)) {
              this.errors.push('La V60 debe ser <= V98 o = 1799-01-01 o 1846-01-01')
              this.error = true
            }
          }

          // Validación 1
          if (this.data.v60 === '1799-01-01') {
            if (parseInt(this.data.v60_1) <= 100) {
              this.errors.push('La V60.1 es <= 100 revisar V60 debe ser = 1799-01-01')
              this.error = true
            }
          }

          // Validación 2
          if (Date.parse(this.data.v60) > Date.parse(this.patient.field_json.birthdate)) {
            if (parseInt(this.data.v60_1) > 99.9) {
              this.errors.push('La V60.1 es > 99.9 revisar V60 debe ser > V09')
              this.error = true
            }
          }

          // Validación 3
          if (this.data.v60 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V60 debe ser = 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v60_1 !== '9999' && this.data.v60_1 !== '9998' && this.data.v60_1 !== '5555') {
            if (parseInt(this.data.v60_1) < 0 || parseInt(this.data.v58_1) > 99.9) {
              this.errors.push('La V60.1 debe ser > = 0 y <= 99,9 o = 9999 , 99998 o 5555')
              this.error = true
            }
          }

          // validacion 1
          if (this.data.v60_1 === '5555') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es = 19 revisar V60.1 debe ser = 5555')
              this.error = true
            }
          }

          // validacion 2
          if (parseInt(this.data.v60_1) <= 1) {
            if (this.data.v60 !== '1799-01-01') {
              this.errors.push('La V60.1 es <= 1 revisar V60 debe ser <> 1799-01-01')
              this.error = true
            }
          }

          // validacion 3
          if (parseInt(this.data.v60_1) < 100) {
            if (Date.parse(this.data.v60) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V60.1 es < 100 revisar  V60 debe ser > = v09')
              this.error = true
            }
          }

          if (this.data.v61 !== '1799-01-01' && this.data.v61 !== '1846-01-01') {
            if (Date.parse(this.data.v61) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V61 debe ser > V09')
              this.error = true
            }

            // validacion para V57 DEBE SER <= V98
            if (Date.parse(this.data.v61) > Date.parse(this.data.v98)) {
              this.errors.push('La V61 debe ser <= V98 o = 1799-01-01 o 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v61 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V61 debe ser = 1846-01-01')
              this.error = true
            }
          }

          if (Date.parse(this.data.v61) > Date.parse(this.patient.field_json.birthdate)) {
            if (parseInt(this.data.v61_1) > 1000) {
              this.errors.push('La V61.1 es <= 1000 revisar la V61 debe sere > V09')
              this.error = true
            }
          }

          if (this.data.v61 === '1799-01-01') {
            if (this.data.v61_1 !== '9998') {
              this.errors.push('La V61.1 es 9998 revisar la V61 debe ser = 1799-01-01')
              this.error = true
            }
          }

          if (this.data.v61_1 !== '9999' && this.data.v61_1 !== '9998' && this.data.v61_1 !== '5555') {
            if (parseInt(this.data.v61_1) < 0 || parseInt(this.data.v58_1) > 1000) {
              this.errors.push('La V61.1 debe ser > = 0 y <= 99,9 o = 9999 , 99998 o 5555')
              this.error = true
            }
          }

          // validación 1
          if (this.data.v61_1 === '5555' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V61.1 debe ser 5555')
            this.error = true
          }

          // validación 2
          if (parseInt(this.data.v61_1) < 1000 && this.data.v61 !== '1799-01-01') {
            this.errors.push('La V61.1 es < 1000 revisar la V61 debe ser <> 1799-01-01')
            this.error = true
          }

          // validación 3
          if (parseInt(this.data.v61_1) < 1001 && Date.parse(this.data.v61) < Date.parse(this.patient.field_json.birthdate)) {
            this.errors.push('La V61.1 es < 1001  revisar la V61 debe ser > = v09')
            this.error = true
          }

          if (this.data.v62 !== '1799-01-01' && this.data.v62 !== '1846-01-01') {
            if (Date.parse(this.data.v62) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V62 debe ser > V09')
              this.error = true
            }

            // validacion para V57 DEBE SER <= V98
            if (Date.parse(this.data.v62) > Date.parse(this.data.v98)) {
              this.errors.push('La V62 debe ser <= V98 o = 1799-01-01 o 1846-01-01')
              this.error = true
            }
          }

          // Validación 1
          if (this.data.v62 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V62 debe ser 1846-01-01')
              this.error = true
            }
          }

          // Validación 2
          if (Date.parse(this.data.v62) > Date.parse(this.patient.field_json.birthdate)) {
            if (parseInt(this.data.v62_1) > 250) {
              this.errors.push('La V62.1 es <= 250 revisar la V62 debe ser > V09')
              this.error = true
            }
          }

          // Validación 3
          if (this.data.v62 === '1799-01-01') {
            if (parseInt(this.data.v62_1) <= 250) {
              this.errors.push('La V62.1 es > 250 revisar V62 debe ser = 1799-01-01')
              this.error = true
            }
          }

          if (this.data.v62_1 !== '999' && this.data.v62_1 !== '998' && this.data.v62_1 !== '555') {
            if (parseInt(this.data.v62_1) < 0 || parseInt(this.data.v58_1) > 250) {
              this.errors.push('La V62 debe ser >0 y < = 250  o = 999 o 998 o 555')
              this.error = true
            }
          }

          if (this.data.v62_1 === '555') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V62.1 debe ser 555')
              this.error = true
            }
          }

          // segunda validación
          if (parseInt(this.data.v62_1) < 250) {
            if (this.data.v62 !== '1799-01-01') {
              this.errors.push('La V62.1 es <= 250 revisar la V62 debe ser <> 1799-01-01')
              this.error = true
            }
          }

          // tercera validación
          if (parseInt(this.data.v62_1) < 251) {
            if (Date.parse(this.data.v62) < Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('La V62.1 es < 251 revisar V62 debe ser >= V09')
              this.error = true
            }
          }

          if (this.data.v63 !== '555') {
            if (parseInt(this.data.v63) < 30 || parseInt(this.data.v63) > 220) {
              this.errors.push('La V62 debe ser >30 y < = 220  o = 555')
              this.error = true
            }
          }

          if (this.data.v63 === '555') {
            // Si el valor de V97 es diferente de 19 ejecuta el siguiente código
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V63 debe ser 555')
              this.error = true
            }
          }

          // Validación V64 debe ser <> 9
          if (this.data.v64 === '9') {
            this.errors.push('La V64 debe ser <> 9')
            this.error = true
          }

          // Validación cuando V64 sea = 55 Entonces V97 DEBE SER = 19
          if (this.data.v64 === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V64 debe ser 55')
            this.error = true
          }

          if (this.data.v65 === '9') {
            this.errors.push('La V65 debe ser <> 9')
            this.error = true
          }

          // Validación cuando V64 sea = 55 Entonces V97 DEBE SER = 19
          if (this.data.v65 === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V65 debe ser 55')
            this.error = true
          }

          if (this.data.v66 === '9') {
            this.errors.push('La V66 debe ser <> 9')
            this.error = true
          }

          // Validación cuando V64 sea = 55 Entonces V97 DEBE SER = 19
          if (this.data.v66 === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V66 debe ser 55')
            this.error = true
          }

          if (this.data.v67 === '9') {
            this.errors.push('La V67 debe ser <> 9')
            this.error = true
          }

          // Validación cuando V64 sea = 55 Entonces V97 DEBE SER = 19
          if (this.data.v67 === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V67 debe ser 55')
            this.error = true
          }

          // 1
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '9') {
            this.errors.push('La V68 debe ser <> 9')
            this.error = true
          }

          // 2
          if (typeof this.data.v68 !== 'undefined' && this.data.v68 === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V68 debe ser 55')
            this.error = true
          }

          // 3
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '1' && typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17.id) >= 3) {
            this.errors.push('La V68 es 1 revisa V17 debe ser < 3')
            this.error = true
          }

          // 4
          if (typeof this.data.v68_1 !== 'undefined' && this.data.v68_1.id !== '7') {
            if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '1' && (parseInt(this.data.v68_1.id) > 6)) {
              this.errors.push('La V68.1 es < 6 o = 7  revisar V68 debe ser 1')
              this.error = true
            }
          }

          // Cuando V68 sea = 0 Entonces V68.1 DEBE SER = 6 El mensaje de error debe ser La V68.1 es 6 revisar V68 debe ser 0
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_1 !== 'undefined' && this.data.v68_1.id !== '6') {
            this.errors.push('La V68.1 es 6 revisar V68 debe ser 0')
            this.error = true
          }

          // Cuando V68 sea = 0 Entonces V68.2 DEBE SER = 8 El mensaje de error debe ser La V68.2 es 8 revisar V68 debe ser 0
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_2 !== 'undefined' && this.data.v68_2.id !== '8') {
            this.errors.push('La V68.2 es 8 revisar V68 debe ser 0')
            this.error = true
          }

          // Cuando V68 sea = 0 Entonces V68.3 DEBE SER = 1799-01-01 El mensaje de error debe ser La V68.3 es 1799-01-01 revisar V68 debe ser 0
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && this.data.v68_3 !== '1799-01-01') {
            this.errors.push('La V68.3 es 1799-01-01 revisar V68 debe ser 0')
            this.error = true
          }

          // Cuando V68 sea = 0 Entonces V68.4 DEBE SER = 9 El mensaje de error debe ser La V68.4 es 9 revisar V68 debe ser 0
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_4 !== 'undefined' && this.data.v68_4.id !== '9') {
            this.errors.push('La V68.4 es 9 revisar V68 debe ser 0')
            this.error = true
          }

          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_5 !== 'undefined' && this.data.v68_5.id !== '9') {
            this.errors.push('La V68.5 es 9 revisar V68 debe ser 0')
            this.error = true
          }

          // Cuando V68 sea = 0 Entonces V68.6 DEBE SER = 9 El mensaje de error debe ser La V68.6 es 9 revisar V68 debe ser 0
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_6 !== 'undefined' && this.data.v68_6.id !== '9') {
            this.errors.push('La V68.6 es 9 revisar V68 debe ser 0')
            this.error = true
          }

          // Cuando V68 sea = 0 Entonces V68.7 DEBE SER = 9 El mensaje de error debe ser La V68.7 es 9 revisar V68 debe ser 0
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_7 !== 'undefined' && this.data.v68_7.id !== '9') {
            this.errors.push('La V68.7 es 9 revisar V68 debe ser 0')
            this.error = true
          }

          // Cuando V68 sea = 0 Entonces V68.8 DEBE SER = 9 El mensaje de error debe ser La V68.8 es 9 revisar V68 debe ser 0
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_8 !== 'undefined' && this.data.v68_8.id !== '9') {
            this.errors.push('La V68.8 es 9 revisar V68 debe ser 0')
            this.error = true
          }

          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_9 !== 'undefined' && this.data.v68_9.id !== '9') {
            this.errors.push('La V68.9 es 9 revisar V68 debe ser 0')
            this.error = true
          }

          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_10 !== 'undefined' && this.data.v68_10.id !== '9') {
            this.errors.push('La V68.10 es 9 revisar V68 debe ser 0')
            this.error = true
          }

          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_11 !== 'undefined' && this.data.v68_11.id !== '9') {
            this.errors.push('La V68.11 es 9 revisar V68 debe ser 0')
            this.error = true
          }

          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_12 !== 'undefined' && this.data.v68_12.id !== '9') {
            this.errors.push('La V68.12 es 9 revisar V68 debe ser 0')
            this.error = true
          }

          // Validación 5
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0') {
            if (this.data.v68_13 !== '1799-01-01') {
              this.errors.push('La V68.13 es 1799-01-01 revisar V68 debe ser 0')
              this.error = true
            }
          }

          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '0' && typeof this.data.v68_14 !== 'undefined' && this.data.v68_14.id !== '9') {
            this.errors.push('La V68.14 es 10 revisar V68 debe ser 0')
            this.error = true
          }

          // Validación 9
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '1') {
            if (this.data.v68_13 === '1799-01-01') {
              this.errors.push('La V68.13 es <> 1799-01-01 revisar V68 debe ser 1')
              this.error = true
            }
          }

          // Validación 10
          if (typeof this.data.v68 !== 'undefined' && this.data.v68.id === '1') {
            if (typeof this.data.v68_14 !== 'undefined' && parseInt(this.data.v68_14.id) < 9) {
              this.errors.push('La V68.14 es < 9 revisar V68 debe ser 1')
              this.error = true
            }
          }

          // Validación V68.1 DEBE SER <> 9
          if (typeof this.data.v68_1 !== 'undefined' && this.data.v68_1.id === '9') {
            this.errors.push('La V68.1 debe ser <> 9')
            this.error = true
          }

          // Validación Cuando V68.1 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v68_1 !== 'undefined' && this.data.v68_1.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V68.1 = 55')
            this.error = true
          }

          // Validación Cuando V68.1 sea < 6 Entonces V17 DEBE SER < 3
          if (typeof this.data.v68_1 !== 'undefined' && parseInt(this.data.v68_1.id) < 6 && typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17.id) >= 3) {
            this.errors.push('La V68.1 es < 6 revisar la V17 debe ser < 3')
            this.error = true
          }

          // validación V68.2 DEBE SER <> 9
          if (typeof this.data.v68_2 !== 'undefined' && this.data.v68_2.id === '9') {
            this.errors.push('La V68.2 debe ser <> 9')
            this.error = true
          }

          // validación Cuando V68.2 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v68_2 !== 'undefined' && this.data.v68_2.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V68.2 = 55')
            this.error = true
          }

          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) <= 2 && Date.parse(this.data.v68_3) > Date.parse(this.patient.field_json.birthdate)) {
            this.errors.push('La V68.3 es > V09 revisar V68.2 debe ser < = 2')
            this.error = true
          }

          // validación 1
          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) <= 2) {
            if (this.data.v68_4 === '9') {
              this.errors.push('La V68.4 es <> 9 revisar V68.2 debe ser < = 2')
              this.error = true
            }
          }

          // validación 2
          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) <= 2) {
            if (this.data.v68_5 === '9') {
              this.errors.push('La V68.5 es <> 9 revisar V68.2 debe ser < = 2')
              this.error = true
            }
          }

          // validación 3
          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) <= 2) {
            if (this.data.v68_6 === '9') {
              this.errors.push('La V68.6 es <> 9 revisar V68.2 debe ser < = 2')
              this.error = true
            }
          }

          // validación 4
          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) <= 2) {
            if (this.data.v68_7 === '9') {
              this.errors.push('La V68.7 es <> 9 revisar V68.2 debe ser < = 2')
              this.error = true
            }
          }

          // validación 1
          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) <= 2) {
            if (this.data.v68_8 === '9') {
              this.errors.push('La V68.8 es <> 9 revisar V68.2 debe ser < = 2')
              this.error = true
            }
          }

          // validación 2
          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) <= 2) {
            if (this.data.v68_9 === '9') {
              this.errors.push('La V68.9 es <> 9 revisar V68.2 debe ser < = 2')
              this.error = true
            }
          }

          // validación 3
          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) <= 2) {
            if (this.data.v68_10 === '9') {
              this.errors.push('La V68.10 es <> 9 revisar V68.2 debe ser < = 2')
              this.error = true
            }
          }

          // validación 4
          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) <= 2) {
            if (this.data.v68_11 === '9') {
              this.errors.push('La V68.11 es <> 9 revisar V68.2 debe ser < = 2')
              this.error = true
            }
          }

          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) <= 2) {
            if (this.data.v68_12 === '9') {
              this.errors.push('La V68.12 es <> 9 revisar V68.2 debe ser < = 2')
              this.error = true
            }
          }

          // la validación debe ser
          if (typeof this.data.v68_2 !== 'undefined' && parseInt(this.data.v68_2.id) < 8 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.2 es < 8 revisar la V68 debe ser 1')
            this.error = true
          }

          // validaciones
          if (this.data.v68_3 === '1845-01-01') {
            this.errors.push('La V68.3 debe ser <> 1845-01-01')
            this.error = true
          }

          if (this.data.v68_3 !== '1845-01-01') {
            if (this.data.v68_3 === '1846-01-01' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
              this.errors.push('La V97 es 19 revisar la V68.3= 1846-01-01')
              this.error = true
            }

            // Validación 1
            if (Date.parse(this.data.v68_3) > Date.parse(this.data.v36) && this.data.v68_4 === '9') {
              this.errors.push('La V68.4 es <> 9  revisar V68.3 debe ser > V36')
              this.error = true
            }

            // Validación 2
            if (Date.parse(this.data.v68_3) > Date.parse(this.data.v36) && this.data.v68_5 === '9') {
              this.errors.push('La V68.5 es <> 9  revisar V68.3 debe ser > V36')
              this.error = true
            }

            // Validación 3
            if (Date.parse(this.data.v68_3) > Date.parse(this.data.v36) && this.data.v68_6 === '9') {
              this.errors.push('La V68.6 es <> 9  revisar V68.3 debe ser > V36')
              this.error = true
            }

            // Validación 4
            if (Date.parse(this.data.v68_3) > Date.parse(this.data.v36) && this.data.v68_7 === '9') {
              this.errors.push('La V68.7 es <> 9  revisar V68.3 debe ser > V36')
              this.error = true
            }

            // Validación 5
            if (Date.parse(this.data.v68_3) > Date.parse(this.data.v36) && this.data.v68_8 === '9') {
              this.errors.push('La V68.8 es <> 9  revisar V68.3 debe ser > V36')
              this.error = true
            }

            if (Date.parse(this.data.v68_3) > Date.parse(this.data.v36) && this.data.v68_9 === '9') {
              this.errors.push('La V68.9 es <> 9  revisar V68.3 debe ser > V36')
              this.error = true
            }

            if (Date.parse(this.data.v68_3) > Date.parse(this.data.v36) && this.data.v68_10 === '9') {
              this.errors.push('La V68.10 es <> 9  revisar V68.3 debe ser > V36')
              this.error = true
            }

            if (Date.parse(this.data.v68_3) > Date.parse(this.data.v36) && this.data.v68_11 === '9') {
              this.errors.push('La V68.11 es <> 9  revisar V68.3 debe ser > V36')
              this.error = true
            }

            if (Date.parse(this.data.v68_3) > Date.parse(this.data.v36) && this.data.v68_12 === '9') {
              this.errors.push('La V68.12 es <> 9  revisar V68.3 debe ser > V36')
              this.error = true
            }

            if (this.data.v68_3 !== '1800-01-01' || this.data.v68_3 !== '1811-01-01' || this.data.v68_3 !== '1799-01-01' || this.data.v68_3 !== '1846-01-01') {
              // Validación V68.3 DEBE SER >= V36
              if (Date.parse(this.data.v68_3) < Date.parse(this.data.v36)) {
                this.errors.push('La V68.3 debe ser >= V36')
                this.error = true
              }

              // Validación V68.3 DEBE SER <= V98
              if (Date.parse(this.data.v68_3) > Date.parse(this.data.v98)) {
                this.errors.push('La V68.3 debe ser <= V98 o = 1800-01-01 o 1811-01-01 O 1799-=1-01 O 1846-01-01')
                this.error = true
              }

              if (Date.parse(this.data.v68_3) < Date.parse('2016-01-31')) {
                this.errors.push('La V68.3 debe ser > 2016-01-31 y < = V98 o = 1799-01-01 o 1800-01-01 o 1811-01-01 ')
                this.error = true
              }
            }

            if (this.data.v68_3 === '1799-01-01' && this.data.v68_4 !== '9') {
              this.errors.push('La V68.4 es = 9 revisar V68.3 debe ser= 1799-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1799-01-01' && this.data.v68_5 !== '9') {
              this.errors.push('La V68.5 es = 9 revisar V68.3 debe ser= 1799-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1799-01-01' && this.data.v68_6 !== '9') {
              this.errors.push('La V68.6 es = 9 revisar V68.3 debe ser= 1799-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1799-01-01' && this.data.v68_7 !== '9') {
              this.errors.push('La V68.7 es = 9 revisar V68.3 debe ser= 1799-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1799-01-01' && this.data.v68_8 !== '9') {
              this.errors.push('La V68.8 es = 9 revisar V68.3 debe ser= 1799-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1799-01-01' && this.data.v68_9 !== '9') {
              this.errors.push('La V68.9 es = 9 revisar V68.3 debe ser= 1799-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1799-01-01' && this.data.v68_10 !== '9') {
              this.errors.push('La V68.10 es = 9 revisar V68.3 debe ser= 1799-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1799-01-01' && this.data.v68_11 !== '9') {
              this.errors.push('La V68.11 es = 9 revisar V68.3 debe ser= 1799-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1799-01-01' && this.data.v68_12 !== '9') {
              this.errors.push('La V68.12 es = 9 revisar V68.3 debe ser= 1799-01-01')
              this.error = true
            }

            // 1800-01-01
            if (this.data.v68_3 === '1800-01-01' && this.data.v68_4 !== '9') {
              this.errors.push('La V68.4 es = 9 revisar V68.3 debe ser= 1800-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1800-01-01' && this.data.v68_5 !== '9') {
              this.errors.push('La V68.5 es = 9 revisar V68.3 debe ser= 1800-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1800-01-01' && this.data.v68_6 !== '9') {
              this.errors.push('La V68.6 es = 9 revisar V68.3 debe ser= 1800-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1800-01-01' && this.data.v68_7 !== '9') {
              this.errors.push('La V68.7 es = 9 revisar V68.3 debe ser= 1800-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1800-01-01' && this.data.v68_8 !== '9') {
              this.errors.push('La V68.8 es = 9 revisar V68.3 debe ser= 1800-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1800-01-01' && this.data.v68_9 !== '9') {
              this.errors.push('La V68.9 es = 9 revisar V68.3 debe ser= 1800-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1800-01-01' && this.data.v68_10 !== '9') {
              this.errors.push('La V68.10 es = 9 revisar V68.3 debe ser= 1800-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1800-01-01' && this.data.v68_11 !== '9') {
              this.errors.push('La V68.11 es = 9 revisar V68.3 debe ser= 1800-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1800-01-01' && this.data.v68_12 !== '9') {
              this.errors.push('La V68.12 es = 9 revisar V68.3 debe ser= 1800-01-01')
              this.error = true
            }

            // 1811-01-01
            if (this.data.v68_3 === '1811-01-01' && this.data.v68_4 !== '9') {
              this.errors.push('La V68.4 es = 9 revisar V68.3 debe ser= 1811-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1811-01-01' && this.data.v68_5 !== '9') {
              this.errors.push('La V68.5 es = 9 revisar V68.3 debe ser= 1811-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1811-01-01' && this.data.v68_6 !== '9') {
              this.errors.push('La V68.6 es = 9 revisar V68.3 debe ser= 1811-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1811-01-01' && this.data.v68_7 !== '9') {
              this.errors.push('La V68.7 es = 9 revisar V68.3 debe ser= 1811-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1811-01-01' && this.data.v68_8 !== '9') {
              this.errors.push('La V68.8 es = 9 revisar V68.3 debe ser= 1811-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1811-01-01' && this.data.v68_9 !== '9') {
              this.errors.push('La V68.9 es = 9 revisar V68.3 debe ser= 1811-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1811-01-01' && this.data.v68_10 !== '9') {
              this.errors.push('La V68.10 es = 9 revisar V68.3 debe ser= 1811-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1811-01-01' && this.data.v68_11 !== '9') {
              this.errors.push('La V68.11 es = 9 revisar V68.3 debe ser= 1811-01-01')
              this.error = true
            }

            if (this.data.v68_3 === '1811-01-01' && this.data.v68_12 !== '9') {
              this.errors.push('La V68.12 es = 9 revisar V68.3 debe ser= 1811-01-01')
              this.error = true
            }

            // Cuando V68.3 sea > 1846-01-01 Entonces V68 DEBE SER = 1 El mensaje de error debe ser La V68.3 es > 1846-01-01 revisar V68 debe ser 1
            if (Date.parse(this.data.v68_3) > Date.parse('1846-01-01') && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
              this.errors.push('La V68.3 es > 1846-01-01 revisar V68 debe ser 1')
              this.error = true
            }

            // Cuando V68.3 sea = 1800-01-01 Entonces V68 DEBE SER = 1 El mensaje de error debe ser La V68.3 es = 1800-01-01 revisar V68 debe ser 1
            if (this.data.v68_3 === '1800-01-01' && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
              this.errors.push('La V68.3 es = 1800-01-01 revisar V68 debe ser 1')
              this.error = true
            }

            // Cuando V68.3 sea = 1811-01-01 Entonces V68 DEBE SER = 1 El mensaje de error debe ser La V68.3 es =  1811-01-01 revisar V68 debe ser 1
            if (this.data.v68_3 === '1811-01-01' && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
              this.errors.push('La V68.3 es =  1811-01-01 revisar V68 debe ser 1')
              this.error = true
            }
          }

          if (this.data.v68_4 !== 9 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.4 es <> 9 revisar V68 debe ser 1')
            this.error = true
          }

          if (this.data.v68_5 !== 9 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.5 es <> 9 revisar V68 debe ser 1')
            this.error = true
          }

          if (this.data.v68_6 !== 9 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.6 es <> 9 revisar V68 debe ser 1')
            this.error = true
          }

          if (this.data.v68_7 !== 9 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.7 es <> 9 revisar V68 debe ser 1')
            this.error = true
          }

          if (this.data.v68_8 !== 9 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.8 es <> 9 revisar V68 debe ser 1')
            this.error = true
          }

          if (this.data.v68_9 !== 9 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.9 es <> 9 revisar V68 debe ser 1')
            this.error = true
          }

          if (this.data.v68_10 !== 9 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.10 es <> 9 revisar V68 debe ser 1')
            this.error = true
          }

          if (this.data.v68_11 !== 9 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.11 es <> 9 revisar V68 debe ser 1')
            this.error = true
          }

          if (this.data.v68_12 !== 9 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.12 es <> 9 revisar V68 debe ser 1')
            this.error = true
          }

          if (this.data.v68_13 === '1799-01-01' && this.data.v68_13 === '1800-01-01' && this.data.v68_13 === '1846-01-01' && this.data.v68_13 === '1822-01-01') {
            // validacion 1
            if (Date.parse(this.data.v68_13) < Date.parse(this.data.v36)) {
              this.errors.push('La V68.13 debe ser >= V36')
              this.error = true
            }

            // validacion 2
            if (Date.parse(this.data.v68_13) > Date.parse(this.data.v98)) {
              this.errors.push('La V68.3 debe ser <= V98 o = 1799-01-01 o = 1800-01-01 o =1846-01-01 o = 1822-01-01')
              this.error = true
            }
          }

          // validacion 1
          if (this.data.v68_13 === '1846-01-01' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V68.13 debe der = 1846-01-01')
            this.error = true
          }

          // validacion 2
          if (typeof this.data.v68_13 !== 'undefined' && this.data.v68_13 !== '1799-01-01' && typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17.id) >= 3) {
            this.errors.push('La V68.13 es <> 1799-01-01 revisar V17 debe ser < 3')
            this.error = true
          }

          // validacion 3
          if (this.data.v68_13 === '1800-01-01' && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.13 es 1800-01-01 revisar la V68 debe sr = 1')
            this.error = true
          }

          // validacion 4
          if (this.data.v68_13 === '1822-01-01' && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.13 es 1822-01-01 revisar la V68 debe sr = 1')
            this.error = true
          }

          // validacion 5
          if (Date.parse(this.data.v68_13) > Date.parse('1846-01-01') && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.13 es > 1846-01-01 revisar la V68 debe sr = 1')
            this.error = true
          }

          // Validación V68.14 DEBE SER <> 9
          if (typeof this.data.v68_14 !== 'undefined' && this.data.v68_14.id === '9') {
            this.errors.push('La V68.14 debe ser <> 9')
            this.error = true
          }

          // Validación Cuando V68.14 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v68_14 !== 'undefined' && this.data.v68_14.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 debe ser 19 revisar V68.14 debe ser 55')
            this.error = true
          }

          if (typeof this.data.v68_14 !== 'undefined' && this.data.v68_14.id === '5' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '4' && this.data.v97.id !== '10') {
            this.errors.push('La V97 es 4 o 10  revisar V68.14 debe ser 5')
            this.error = true
          }

          // para validar la primera condicion:
          if (typeof this.data.v68_14 !== 'undefined' && parseInt(this.data.v68_14.id) < 9 && typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17) > 3) {
            this.errors.push('La V68.14 es < 9 revisar V17 debe ser < 3')
            this.error = true
          }

          // para validar la segunda condicion:
          if (typeof this.data.v68_14 !== 'undefined' && parseInt(this.data.v68_14.id) < 9 && typeof this.data.v68 !== 'undefined' && this.data.v68.id !== '1') {
            this.errors.push('La V68.14 es < 9 revisar V68 debe ser 1')
            this.error = true
          }

          // validacion 1
          if (typeof this.data.v69 !== 'undefined' && this.data.v69.id === '9') {
            this.errors.push('La V69 debe ser <> 9')
            this.error = true
          }

          // validacion 2
          if (typeof this.data.v69 !== 'undefined' && this.data.v69.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V69 debe ser 55')
            this.error = true
          }

          // validacion 1
          if (typeof this.data.v70 !== 'undefined' && this.data.v70.id === '9') {
            this.errors.push('La V70 debe ser <> 9')
            this.error = true
          }

          // validacion 2
          if (typeof this.data.v70 !== 'undefined' && this.data.v70.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V70 debe ser 55')
            this.error = true
          }

          // validacion 1
          if (typeof this.data.v71 !== 'undefined' && this.data.v71.id === '9') {
            this.errors.push('La V71 debe ser <> 9')
            this.error = true
          }

          // validacion 2
          if (typeof this.data.v71 !== 'undefined' && this.data.v71.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V71 debe ser 55')
            this.error = true
          }

          // validacion 1
          if (typeof this.data.v72 !== 'undefined' && this.data.v72.id === '9') {
            this.errors.push('La V72 debe ser <> 9')
            this.error = true
          }

          // validacion 2
          if (typeof this.data.v72 !== 'undefined' && this.data.v72.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V72 debe ser 55')
            this.error = true
          }

          // validacion 1
          if (typeof this.data.v73 !== 'undefined' && this.data.v73.id === '9') {
            this.errors.push('La V73 debe ser <> 9')
            this.error = true
          }

          // validacion 2
          if (typeof this.data.v73 !== 'undefined' && this.data.v73.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V73 debe ser 55')
            this.error = true
          }

          // validacion 1
          if (typeof this.data.v74 !== 'undefined' && this.data.v74.id === '9') {
            this.errors.push('La V74 debe ser <> 9')
            this.error = true
          }

          // validacion 2
          if (typeof this.data.v74 !== 'undefined' && this.data.v74.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V74 debe ser 55')
            this.error = true
          }

          if (this.data.v75 !== '1799-01-01' && this.data.v75 !== '1846-01-01') {
            if (Date.parse(this.data.v75) < Date.parse(this.data.v36)) {
              this.errors.push('La V75 debe ser >= V36')
              this.error = true
            }

            if (Date.parse(this.data.v75) > Date.parse(this.data.v98)) {
              this.errors.push('La V75 debe ser <= V98 o = 1799-01-01 o = 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v75 === '1846-01-01' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V75 debe ser 1846-01-01')
            this.error = true
          }

          if (Date.parse(this.data.v75) > Date.parse(this.data.v36) && parseInt(this.data.v75_1) > 3000) {
            this.errors.push('La V75.1 es < = 3000 revisar V75 debe ser > V36')
            this.error = true
          }

          if (this.data.v75_1 !== '9999' && this.data.v75_1 !== '5555') {
            if (parseInt(this.data.v75_1) > 3000 || parseInt(this.data.v75_1) < 1) {
              this.errors.push('La V75.1 debe ser >= 0 y < = 3000 o = 9999 o = 5555')
              this.error = true
            }
          }

          if (this.data.v75_1 === '5555' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V75.1  debe ser  5555')
            this.error = true
          }

          if (parseInt(this.data.v75_1) < 500) {
            if (typeof this.data.v55 !== 'undefined' && (parseInt(this.data.v55.id) < 1 || parseInt(this.data.v55.id) > 4)) {
              this.errors.push('La V75.1 es < 500 revisar V55 debe ser > 1 y < 4')
              this.error = true
            }
          }

          if (parseInt(this.data.v75_1) < 200) {
            if (typeof this.data.v55 !== 'undefined' && this.data.v55.id !== '3') {
              this.errors.push('La V75.1 es < 200 revisar V55 debe ser = 3')
              this.error = true
            }
          }

          if (this.data.v76 !== '1799-01-01' && this.data.v76 !== '1846-01-01') {
            if (Date.parse(this.data.v76) < Date.parse(this.data.v36)) {
              this.errors.push('La V75 debe ser >= V36')
              this.error = true
            }

            if (Date.parse(this.data.v76) > Date.parse(this.data.v98)) {
              this.errors.push('La V75 debe ser <= V98 o = 1799-01-01 o = 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v76 === '1846-01-01' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V75 debe ser 1846-01-01')
            this.error = true
          }

          if (Date.parse(this.data.v76) > Date.parse(this.data.v36)) {
            if (parseInt(this.data.v76_1) > 10000000) {
              this.errors.push('La V76.1 es < 10000000 revisar V76 deeb ser > V36')
              this.error = true
            }
          }

          if (this.data.v76 === '1799-01-01') {
            if (this.data.v76_1 !== '99999999') {
              this.errors.push('La V76.1 es = 99999999 revisar V76 debe ser  1799-01-01 ')
              this.error = true
            }
          }

          if (this.data.v76_1 !== '99999999' && this.data.v76_1 !== '55555555') {
            if (parseInt(this.data.v76_1) > 10000000 || parseInt(this.data.v76_1) < 1) {
              this.errors.push('la V76.1 debe ser >= 0 y <= 10000000 o = 99999999 o = 55555555')
              this.error = true
            }
          }

          if (this.data.v76_1 === '55555555' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V75.1  debe ser  55555555')
            this.error = true
          }
        }

        if (this.sixStep === true) {
          if (typeof this.data.v55 !== 'undefined' && this.data.v55.id !== '3' && this.data.v39.id === '3') {
            this.errors.push('La V55 es 3 revisar la V39 debe ser 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B3260', 'error')
          }

          if (typeof this.data.v55 !== 'undefined' && (parseInt(this.data.v55.id) <= 1 || parseInt(this.data.v55.id) >= 4) && this.data.v39.id === '2') {
            this.errors.push('La V55 es > 1 y < 4 revisar la V39 debe ser 3')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B4168', 'error')
          }

          if (typeof this.data.v55 !== 'undefined' && parseInt(this.data.v43_1) < 500 && (parseInt(this.data.v55.id) <= 1 || parseInt(this.data.v55.id) >= 4)) {
            this.errors.push('La V55 es > 1 y < 4 revisar la V43.1 debe ser <500')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5336', 'error')
          }

          if (typeof this.data.v55 !== 'undefined' && parseInt(this.data.v43_1) < 200 && this.data.v55.id !== '3') {
            this.errors.push('La V55 es 3 revisar la V43.1 debe ser < 200')
            this.error = true
            // return _this.$swal('Advertencia', 'Error en la validación No. B5337', 'error')
          }
        }

        if (this.sevenStep === true) {
          // primera validacion
          if (typeof this.data.v77 !== 'undefined' && this.data.v77.id === '9') {
            this.errors.push('La V77 debe ser <> 9')
            this.error = true
          }

          // segunda validacion
          if (typeof this.data.v77 !== 'undefined' && this.data.v77.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 debe ser 19 revisar la V77 debe ser 55')
            this.error = true
          }

          if (typeof this.data.v77 !== 'undefined' && this.data.v77.id === '1') {
            if (this.data.v77_2 === '9') {
              this.errors.push('La V77.2 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (this.data.v77_3 === '9') {
              this.errors.push('La V77.3 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (this.data.v77_4 === '9') {
              this.errors.push('La V77.4 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (this.data.v77_5 === '9') {
              this.errors.push('La V77.5 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (this.data.v77_6 === '9') {
              this.errors.push('La V77.6 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (this.data.v77_7 === '9') {
              this.errors.push('La V77.7 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (parseInt(this.data.v94) <= 100000) {
              this.errors.push('La V94 es > 100000 revisar V77 debe ser 1')
              this.error = true
            }
          }

          // tar = 55
          if (typeof this.data.v77 !== 'undefined' && this.data.v77.id === '55') {
            if (this.data.v77_2 === '9') {
              this.errors.push('La V77.2 es <> 9 revisar V77 debe ser = 55')
              this.error = true
            }
            if (this.data.v77_3 === '9') {
              this.errors.push('La V77.3 es <> 9 revisar V77 debe ser = 55')
              this.error = true
            }
            if (this.data.v77_4 === '9') {
              this.errors.push('La V77.4 es <> 9 revisar V77 debe ser = 55')
              this.error = true
            }
            if (this.data.v77_5 === '9') {
              this.errors.push('La V77.5 es <> 9 revisar V77 debe ser = 55')
              this.error = true
            }
            if (this.data.v77_6 === '9') {
              this.errors.push('La V77.6 es <> 9 revisar V77 debe ser = 55')
              this.error = true
            }
            if (this.data.v77_7 === '9') {
              this.errors.push('La V77.7 es <> 9 revisar V77 debe ser = 55')
              this.error = true
            }
          }

          // tar = 1
          if (typeof this.data.v77 !== 'undefined' && this.data.v77.id === '1') {
            if (this.data.v77_1 !== '1799-01-01' || Date.parse(this.data.v77_1) < Date.parse(this.data.v36)) {
              this.errors.push('LA V77.1 es 1799-01-01 o > = V36 revisar la V77 debe ser 1')
              this.error = true
            }

            if (this.data.v77_2 === '9') {
              this.errors.push('La V77.2 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (this.data.v77_3 === '9') {
              this.errors.push('La V77.3 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (this.data.v77_4 === '9') {
              this.errors.push('La V77.4 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (this.data.v77_5 === '9') {
              this.errors.push('La V77.5 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (this.data.v77_6 === '9') {
              this.errors.push('La V77.6 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }
            if (this.data.v77_7 === '9') {
              this.errors.push('La V77.7 es <> 9 revisar V77 debe ser = 1')
              this.error = true
            }

            if (this.data.v77_8 === '99') {
              this.errors.push('La V77.8 es <> 99 revisar V77 debe ser 1')
              this.error = true
            }
          }

          if (this.data.v77_1 !== '1799-01-01' && this.data.v77_1 !== '1788-01-01' && this.data.v77_1 !== '1846-01-01') {
            if (Date.parse(this.data.v77_1) < Date.parse(this.data.v36)) {
              this.errors.push('La V77.1 debe ser >= V36')
              this.error = true
            }

            if (Date.parse(this.data.v77_1) > Date.parse(this.data.v98)) {
              this.errors.push('La V77.1 debe ser <= V98 o = 1799-01-01 o = 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v77_1 === '1846-01-01' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V77.1 debe ser 1846-01-01')
            this.error = true
          }

          if (this.data.v77_8 !== '99') {
            if (parseInt(this.data.v77_8) > 12 || parseInt(this.data.v76_1) < 1) {
              this.errors.push('La V77.8 debe ser > = 0 y < = 12 o 99')
              this.error = true
            }
          }
        }

        if (this.eightStep === true) {
          if (this.data.v78 !== '997' && this.data.v78 !== '998') {
            if (parseInt(this.data.v78) > 500 || parseInt(this.data.v76_1) < 1) {
              this.errors.push('La V78 debe ser > = 0 y < = 500 o 997 o 998')
              this.error = true
            }
          }

          if (parseInt(this.data.v78) > 0 && Date.parse(this.patient.field_json.birthdate) >= Date.parse('2012-01-31')) {
            this.errors.push('La V78 es > 0 revisar la V09 debe ser < 2012-01-31')
            this.error = true
          }

          // V79 DEBE SER <> 9
          if (typeof this.data.v79 !== 'undefined' && this.data.v79.id === '9') {
            this.errors.push('La V79 debe ser <>  9')
            this.error = true
          }

          // Cuando V79 sea = 7 Entonces V09_Fecha_de_nacimiento DEBE SER >= 2010-01-31
          if (typeof this.data.v79 !== 'undefined' && this.data.v79.id === '7' && Date.parse(this.patient.field_json.birthdate) < Date.parse('2010-01-31')) {
            this.errors.push('La V79 es 7 reviar la V09 debe ser > = 2012-01-31')
            this.error = true
          }

          // v80
          if (typeof this.data.v80 !== 'undefined' && this.data.v80.id === '9') {
            this.errors.push('La V80 debe ser <>  9')
            this.error = true
          }

          // v81
          if (typeof this.data.v81 !== 'undefined' && this.data.v81.id === '9') {
            this.errors.push('La V81 debe ser <>  9')
            this.error = true
          }

          // v82
          if (typeof this.data.v82 !== 'undefined' && this.data.v82.id === '9') {
            this.errors.push('La V82 debe ser <>  9')
            this.error = true
          }

          // v83
          if (typeof this.data.v83 !== 'undefined' && this.data.v83.id === '9') {
            this.errors.push('La V83 debe ser <>  9')
            this.error = true
          }

          // v84
          if (typeof this.data.v84 !== 'undefined' && this.data.v84.id === '9') {
            this.errors.push('La V84 debe ser <>  9')
            this.error = true
          }

          // Cuando V84 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v84 !== 'undefined' && this.data.v84.id === '6' && typeof this.data.v85 !== 'undefined' && this.data.v85.id !== '10') {
            this.errors.push('La V85 es 10 revisar V84 debe ser 6')
            this.error = true
          }

          // v85
          if (typeof this.data.v85 !== 'undefined' && this.data.v85.id === '9') {
            this.errors.push('La V85 debe ser <>  9')
            this.error = true
          }

          // v86
          if (typeof this.data.v86 !== 'undefined' && this.data.v86.id === '9') {
            this.errors.push('La V86 debe ser <>  9')
            this.error = true
          }

          // v86_1
          if (typeof this.data.v86_1 !== 'undefined' && this.data.v86_1.id === '9') {
            this.errors.push('La V86.1 debe ser <>  9')
            this.error = true
          }

          // v87
          if (typeof this.data.v87 !== 'undefined' && this.data.v87.id === '9') {
            this.errors.push('La V87 debe ser <>  9')
            this.error = true
          }

          // v88
          if (typeof this.data.v88 !== 'undefined' && this.data.v88.id === '9') {
            this.errors.push('La V88 debe ser <>  9')
            this.error = true
          }

          // v89
          if (typeof this.data.v89 !== 'undefined' && this.data.v89.id === '9') {
            this.errors.push('La V89 debe ser <>  9')
            this.error = true
          }

          // v90
          if (typeof this.data.v90 !== 'undefined' && this.data.v90.id === '9') {
            this.errors.push('La V90 debe ser <>  9')
            this.error = true
          }
        }

        if (this.nineStep === true) {
          if (this.data.v77_1 !== '1799-01-01' && this.data.v77_1 !== '1788-01-01' && this.data.v77_1 !== '1846-01-01') {
            if (Date.parse(this.data.v77_1) < Date.parse(this.data.v36)) {
              this.errors.push('La V77.1 debe ser >= V36')
              this.error = true
            }

            if (Date.parse(this.data.v77_1) > Date.parse(this.data.v98)) {
              this.errors.push('La V77.1 debe ser <= V98 o = 1799-01-01 o = 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v77_1 === '1846-01-01' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V77.1 debe ser 1846-01-01')
            this.error = true
          }

          if (typeof this.data.v15 !== 'undefined' && parseInt(this.data.v15.id) === 55) {
            if (typeof this.data.v97 !== 'undefined' && parseInt(this.data.v97.id) !== 19) {
              this.errors.push('La V97 es 19 revisar la V15 sea 55')
              this.error = true
            }
          }

          if (typeof this.data.v24 !== 'undefined' && parseInt(this.data.v24.id) === 55) {
            if (typeof this.data.v97 !== 'undefined' && parseInt(this.data.v97.id) !== 19) {
              this.errors.push('La V97 es 19 revisar V24 debe ser 55')
              this.error = true
            }
          }

          if (typeof this.data.v16 !== 'undefined' && parseInt(this.data.v16.id) === 55) {
            if (typeof this.data.v97 !== 'undefined' && parseInt(this.data.v97.id) !== 19) {
              this.errors.push('La V97 es 19 revisar la V16 sea 55')
              this.error = true
            }
          }

          if (typeof this.data.v17 !== 'undefined' && parseInt(this.data.v17.id) === 55) {
            if (typeof this.data.v97 !== 'undefined' && parseInt(this.data.v97.id) !== 19) {
              this.errors.push('La V97 es 19 revisar la V17 sea 55')
              this.error = true
            }
          }

          if (this.data.v19 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && parseInt(this.data.v97.id) !== 19) {
              this.errors.push('La V97 es 19 revisar la V19 debe ser 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v20 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && parseInt(this.data.v97.id) !== 19) {
              this.errors.push('La V97 es 19 revisar la V20 debe ser 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v21 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && parseInt(this.data.v97.id) !== 19) {
              this.errors.push('La V97 es 19 revisar V21 debe ser 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v22 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && parseInt(this.data.v97.id) !== 19) {
              this.errors.push('La V97 es 19 revisar V22 debe ser 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v23 === '1846-01-01') {
            if (typeof this.data.v97 !== 'undefined' && parseInt(this.data.v97.id) !== 19) {
              this.errors.push('La V97 es 19 revisar V23 debe ser 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v51_1 === '1846-01-01' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19  revisar la V51.1 debe ser 1846-01-01')
            this.error = true
          }

          if (Date.parse(this.data.v51_1) > Date.parse(this.data.v98)) {
            this.errors.push('La V51.1 debe ser <= V98')
            this.error = true
          }

          if (typeof this.data.v51_2 !== 'undefined' && this.data.v51_2.id === '55' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19  revisar la V51.2 debe ser 55')
            this.error = true
          }

          if (typeof this.data.v51_3 !== 'undefined' && this.data.v51_3.id === '55' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19  revisar la V51.3 debe ser 55')
            this.error = true
          }

          if (typeof this.data.v51_4 !== 'undefined' && this.data.v51_4.id === '55' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19  revisar la V51.4 debe ser 55')
            this.error = true
          }

          if (typeof this.data.v51_5 !== 'undefined' && this.data.v51_5.id === '55' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19  revisar la V51.5 debe ser 55')
            this.error = true
          }

          if (typeof this.data.v51_6 !== 'undefined' && this.data.v51_6.id === '55' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19  revisar la V51.6 debe ser 55')
            this.error = true
          }

          if (typeof this.data.v51_7 !== 'undefined' && this.data.v51_7.id === '55' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19  revisar la V51.7 debe ser 55')
            this.error = true
          }

          if (typeof this.data.v51_8 !== 'undefined' && this.data.v51_8 === '55' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19  revisar la V51.8 debe ser 55')
            this.error = true
          }

          // Cuando V79 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v79 !== 'undefined' && this.data.v79.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V79 debe ser 55')
            this.error = true
          }

          // Cuando V80 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v80 !== 'undefined' && this.data.v80.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V80 debe ser 55')
            this.error = true
          }

          // Cuando V81 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v81 !== 'undefined' && this.data.v81.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V81 debe ser 55')
            this.error = true
          }

          // Cuando V82 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v82 !== 'undefined' && this.data.v82.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V82 debe ser 55')
            this.error = true
          }

          // Cuando V83 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v83 !== 'undefined' && this.data.v83.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V83 debe ser 55')
            this.error = true
          }

          // Cuando V84 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v84 !== 'undefined' && this.data.v84.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V84 debe ser 55')
            this.error = true
          }

          // Cuando V85 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v85 !== 'undefined' && this.data.v85.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V85 debe ser 55')
            this.error = true
          }

          // Cuando V86 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v86 !== 'undefined' && this.data.v86.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V86 debe ser 55')
            this.error = true
          }

          // Cuando V86 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v86_1 !== 'undefined' && this.data.v86_1.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V86.1 debe ser 55')
            this.error = true
          }

          // Cuando V87 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v87 !== 'undefined' && this.data.v87.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V87 debe ser 55')
            this.error = true
          }

          // Cuando V88 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v88 !== 'undefined' && this.data.v88.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V86 debe ser 55')
            this.error = true
          }

          // Cuando V89 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v89 !== 'undefined' && this.data.v89.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V86 debe ser 55')
            this.error = true
          }

          // Cuando V90 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v90 !== 'undefined' && this.data.v90.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V90 debe ser 55')
            this.error = true
          }

          // v91
          if (typeof this.data.v91 !== 'undefined' && this.data.v91.id === '9') {
            this.errors.push('La V91 debe ser <>  9')
            this.error = true
          }

          // Cuando V91 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v91 !== 'undefined' && this.data.v91.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V90 debe ser 55')
            this.error = true
          }

          // v92
          if (typeof this.data.v92 !== 'undefined' && this.data.v92.id === '9') {
            this.errors.push('La V92 debe ser <>  9')
            this.error = true
          }

          // Cuando V92 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v92 !== 'undefined' && this.data.v92.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V92 debe ser 55')
            this.error = true
          }

          // v93
          if (typeof this.data.v93 !== 'undefined' && this.data.v93.id === '9') {
            this.errors.push('La V93 debe ser <>  9')
            this.error = true
          }

          // Cuando V93 sea = 55 Entonces V97 DEBE SER = 19
          if (typeof this.data.v93 !== 'undefined' && this.data.v93.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar la V93 debe ser 55')
            this.error = true
          }

          if (this.data.v94 === '0') {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '4' && this.data.v97.id !== '5' && this.data.v97.id !== '6' && this.data.v97.id !== '7' && this.data.v97.id !== '8' && this.data.v97.id !== '9' && this.data.v97.id !== '10' && this.data.v97.id !== '11' && this.data.v97.id !== '15' && this.data.v97.id !== '16' && this.data.v97.id !== '17' && this.data.v97.id !== '20' && this.data.v97.id !== '21') {
              this.errors.push('La V97 es 4,5,6,7,8,9,10,11,15,16,17,20 o 21 revisar la V94 debe ser 0')
              this.error = true
            }
          }

          if (parseInt(this.data.v94) < 0 || parseInt(this.data.v94) > 500000000) {
            this.errors.push('La V94 debe ser > = 0 y < = 500000000')
            this.error = true
          }

          if (parseInt(this.data.v95) < 0 || parseInt(this.data.v95) > 250000000) {
            this.errors.push('La V95 debe ser > = 0 y < = 250000000')
            this.error = true
          }

          if (parseInt(this.data.v95) > 0 && parseInt(this.data.v96) <= 0) {
            this.errors.push('La V96 es > 0 revisar V95 deb ser > 0')
            this.error = true
          }

          if (parseInt(this.data.v96) < 0 || parseInt(this.data.v96) > 20) {
            this.errors.push('La V94 debe ser > = 0 y < = 20')
            this.error = true
          }

          if (parseInt(this.data.v96) > 0 && parseInt(this.data.v95) <= 150000) {
            this.errors.push('La V96 es > 0 revisar V95 deb ser > 0')
            this.error = true
          }

          if (typeof this.data.v97 !== 'undefined' && this.data.v97.id === '13' && this.data.v97.id === '14' && this.data.v97.id === '12') {
            this.errors.push('La V97 debe ser <> 13 o <> 14 o <> 12')
            this.error = true
          }

          if (typeof this.data.v97 !== 'undefined' && (this.data.v97.id === '1' || this.data.v97.id === '2' || this.data.v97.id === '3' || this.data.v97.id === '18' || this.data.v97.id === '19' || this.data.v97.id === '20')) {
            if (parseInt(this.data.v94) <= 0) {
              this.errors.push('La V97 es 1, 2,3,18,19 o 20 revisar la V94 debe ser > 0')
              this.error = true
            }

            if (this.data.v75 !== '1799-01-01' && this.data.v75 !== '1846-01-01') {
              if (Date.parse(this.data.v75) <= Date.parse('2021-01-31')) {
                this.errors.push('La V97 es 1,2,3,18,19 o 20 revisar la V75 debe ser > 2021-01-31 o = 1799-01-01 o = 1846-01-01')
                this.error = true
              }
            }

            if (this.data.v76 !== '1799-01-01' && this.data.v76 !== '1846-01-01') {
              if (Date.parse(this.data.v76) <= Date.parse('2021-01-31')) {
                this.errors.push('La V97 es 1,2,3,18,19 o 20 revisar la V76 debe ser > 2021-01-31 o = 1799-01-01 o = 1846-01-01')
                this.error = true
              }
            }
          }

          if (typeof this.data.v97 !== 'undefined' && this.data.v97.id === '4') {
            if (Date.parse(this.data.v97_3) <= Date.parse(this.data.v36)) {
              this.errors.push('La V97 es 4 revisar la V97.3 debe ser > = V36')
              this.error = true
            }

            if (typeof this.data.v97_4 !== 'undefined' && parseInt(this.data.v97_4.id) >= 4) {
              this.errors.push('La V97 es 4 revisar la V97.4 debe ser < 4')
              this.error = true
            }
          }

          if (typeof this.data.v97 !== 'undefined' && this.data.v97.id === '10') {
            if (Date.parse(this.data.v97_3) <= Date.parse(this.data.v36)) {
              this.errors.push('La V97 es 10 revisar la V97.3 debe ser > = V36')
              this.error = true
            }

            if (typeof this.data.v97_4 !== 'undefined' && parseInt(this.data.v97_4.id) >= 4) {
              this.errors.push('La V97 es 10 revisar la V97.4 debe ser < 4')
              this.error = true
            }
          }

          if (typeof this.data.v97 !== 'undefined' && this.data.v97.id === '19') {
            if (this.patient.field_json.entity !== '5000' && this.patient.field_json.entity !== '8000' && this.patient.field_json.entity !== '8001' && this.patient.field_json.entity !== '11001' && this.patient.field_json.entity !== '13000' && this.patient.field_json.entity !== '13001' && this.patient.field_json.entity !== '15000' && this.patient.field_json.entity !== '17000' && this.patient.field_json.entity !== '18000' && this.patient.field_json.entity !== '19000' && this.patient.field_json.entity !== '20000' && this.patient.field_json.entity !== '25000' && this.patient.field_json.entity !== '27000' && this.patient.field_json.entity !== '41000' && this.patient.field_json.entity !== '44000' && this.patient.field_json.entity !== '47000' && this.patient.field_json.entity !== '47001' && this.patient.field_json.entity !== '50000' && this.patient.field_json.entity !== '52000' && this.patient.field_json.entity !== '54000' && this.patient.field_json.entity !== '63000' && this.patient.field_json.entity !== '66000' && this.patient.field_json.entity !== '68000' && this.patient.field_json.entity !== '70000' && this.patient.field_json.entity !== '73000' && this.patient.field_json.entity !== '76000' && this.patient.field_json.entity !== '76109' && this.patient.field_json.entity !== '81000' && this.patient.field_json.entity !== '85000' && this.patient.field_json.entity !== '86000' && this.patient.field_json.entity !== '88000' && this.patient.field_json.entity !== '91000' && this.patient.field_json.entity !== '94000' && this.patient.field_json.entity !== '95000' && this.patient.field_json.entity !== '97000' && this.patient.field_json.entity !== '99000' && this.patient.field_json.entity !== '23000') {
              this.errors.push('La V97 es 19 revisar Eps')
              this.error = true
            }
          }

          if (this.data.v97_1 !== '1845-01-01' && this.data.v97_1 !== '1846-01-01') {
            if (Date.parse(this.data.v97_1) <= Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('V97.1 debe ser > V09_Fecha_de_nacimiento')
              this.error = true
            }

            // validación 2
            if (Date.parse(this.data.v97_1) > Date.parse(this.data.v98)) {
              this.errors.push('La V97.1 debe ser <= V98 o = 1845-01-01 o = 1846-01-01')
              this.error = true
            }
          }

          if (this.data.v97_1 === '1846-01-01' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97 es 19 revisar V97.1 debe ser 1846-01-01')
            this.error = true
          }

          // Validación
          if (Date.parse(this.data.v97_1) > Date.parse(this.patient.field_json.birthdate) && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '5' && this.data.v97.id !== '11' && this.data.v97.id !== '16') {
            this.errors.push('La V97.1 es > V09 revisar V97 debe ser 5, 11, o 16')
            this.error = true
          }

          if (this.data.v97_3 !== '1845-01-01' && this.data.v97_3 !== '1846-01-01') {
            if (Date.parse(this.data.v97_3) <= Date.parse(this.patient.field_json.birthdate)) {
              this.errors.push('V97.1 debe ser > V09_Fecha_de_nacimiento')
              this.error = true
            }

            // validación 2
            if (Date.parse(this.data.v97_3) > Date.parse(this.data.v98)) {
              this.errors.push('La V97.3 debe ser <= V98 o = 1845-01-01 o = 1846-01-01')
              this.error = true
            }
          }

          if (Date.parse(this.data.v97_3) > Date.parse(this.patient.field_json.birthdate) && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '4' && this.data.v97.id !== '10') {
            this.errors.push('La V97.3 es > V09 revisar V97 deb ser 4 o 10')
            this.error = true
          }

          if (this.data.v97_3 === '1845-01-01' && typeof this.data.v97_4 !== 'undefined' && this.data.v97_4.id !== '4') {
            this.errors.push('La V97.4 es 4 revisar  V97.3 debe ser 1845-01-01')
            this.error = true
          }

          // validación 2
          if (this.data.v97_3 === '1846-01-01' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97.4 es 1846-01-01 revisar  V97 debe de 19')
            this.error = true
          }

          // validación 3
          if (Date.parse(this.data.v97_3) > Date.parse(this.patient.field_json.birthdate) && typeof this.data.v97_4 !== 'undefined' && parseInt(this.data.v97_4) >= 4) {
            this.errors.push('La V97.4 es < 4 revisar la V97.3 debe ser > V09')
            this.error = true
          }

          if (typeof this.data.v97_4 !== 'undefined' && this.data.v97_4.id === '55' && typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '19') {
            this.errors.push('La V97.4 es 55 revisar V97 debe ser 19')
            this.error = true
          }

          if (typeof this.data.v97_4 !== 'undefined' && parseInt(this.data.v97_4.id) <= 4) {
            if (typeof this.data.v97 !== 'undefined' && this.data.v97.id !== '4' && this.data.v97.id !== '10') {
              this.errors.push('La V97.4 es < 4 revisar la V97 debe ser 4 o 10')
              this.error = true
            }
          }

          if (this.data.v98 !== '' && this.data.v98 !== '2022-01-31') {
            this.errors.push('la V98 debe ser = 2022-01-31')
            this.error = true
          }
        }

        var comodines = []

        if (this.data.v24_6 === '1833-03-03' || this.data.v24_6 === '1822-02-01' || this.data.v24_6 === '1799-01-01' || this.data.v24_6 === '1811-01-01' || this.data.v24_6 === '1800-01-01' || this.data.v24_6 === '1833-03-03' || this.data.v24_6 === '1845-01-01' || this.data.v24_6 === '1846-01-01' || this.data.v24_6 === '1777-01-01' || this.data.v24_6 === '1788-01-01') {
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

        if (this.data.v19 === '1833-03-03' || this.data.v19 === '1822-02-01' || this.data.v19 === '1799-01-01' || this.data.v19 === '1811-01-01' || this.data.v19 === '1800-01-01' || this.data.v19 === '1833-03-03' || this.data.v19 === '1845-01-01' || this.data.v19 === '1846-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Fecha del diagnóstico de la gestación reportada'
          }

          comodines.push(comodin)
        }

        if (this.data.v20 === '1833-03-03' || this.data.v20 === '1822-02-01' || this.data.v20 === '1799-01-01' || this.data.v20 === '1811-01-01' || this.data.v20 === '1800-01-01' || this.data.v20 === '1833-03-03' || this.data.v20 === '1845-01-01' || this.data.v20 === '1846-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Fecha de realización de tamizaje para VIH en el primer trimestre de la gestación'
          }

          comodines.push(comodin)
        }

        if (this.data.v21 === '1833-03-03' || this.data.v21 === '1822-02-01' || this.data.v21 === '1799-01-01' || this.data.v21 === '1811-01-01' || this.data.v21 === '1800-01-01' || this.data.v21 === '1833-03-03' || this.data.v21 === '1845-01-01' || this.data.v21 === '1846-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Fecha de realización de tamizaje para VIH en el segundo trimestre de la gestación'
          }

          comodines.push(comodin)
        }

        if (this.data.v22 === '1833-03-03' || this.data.v22 === '1822-02-01' || this.data.v22 === '1799-01-01' || this.data.v22 === '1811-01-01' || this.data.v22 === '1800-01-01' || this.data.v22 === '1833-03-03' || this.data.v22 === '1845-01-01' || this.data.v22 === '1846-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Fecha de realización de tamizaje para VIH en el tercer trimestre de la gestación'
          }

          comodines.push(comodin)
        }

        if (this.data.v23 === '1833-03-03' || this.data.v23 === '1822-02-01' || this.data.v23 === '1799-01-01' || this.data.v23 === '1811-01-01' || this.data.v23 === '1800-01-01' || this.data.v23 === '1833-03-03' || this.data.v23 === '1845-01-01' || this.data.v23 === '1846-01-01') {
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

        if (this.data.v28 === '1833-03-03' || this.data.v28 === '1822-02-01' || this.data.v28 === '1799-01-01' || this.data.v28 === '1811-01-01' || this.data.v28 === '1800-01-01' || this.data.v28 === '1833-03-03' || this.data.v28 === '1845-01-01' || this.data.v28 === '1846-01-01' || this.data.v28 === '1833-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Resultado Elisa para VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.v29 === '1833-03-03' || this.data.v29 === '1822-02-01' || this.data.v29 === '1799-01-01' || this.data.v29 === '1811-01-01' || this.data.v29 === '1800-01-01' || this.data.v29 === '1833-03-03' || this.data.v29 === '1845-01-01' || this.data.v29 === '1846-01-01' || this.data.v29 === '1833-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Resultado Elisa para VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.v30 === '1833-03-03' || this.data.v30 === '1822-02-01' || this.data.v30 === '1799-01-01' || this.data.v30 === '1811-01-01' || this.data.v30 === '1800-01-01' || this.data.v30 === '1833-03-03' || this.data.v30 === '1845-01-01' || this.data.v30 === '1846-01-01' || this.data.v30 === '1833-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Resultado Elisa para VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.v32 === '1833-03-03' || this.data.v32 === '1822-02-01' || this.data.v32 === '1799-01-01' || this.data.v32 === '1811-01-01' || this.data.v32 === '1800-01-01' || this.data.v32 === '1833-03-03' || this.data.v32 === '1845-01-01' || this.data.v32 === '1846-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Resultado Elisa para VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.v33 === '1833-03-03' || this.data.v33 === '1822-02-01' || this.data.v33 === '1799-01-01' || this.data.v33 === '1811-01-01' || this.data.v33 === '1800-01-01' || this.data.v33 === '1833-03-03' || this.data.v33 === '1845-01-01' || this.data.v33 === '1846-01-01') {
          const comodin = {
            section: 'Mujeres Gestantes',
            field: 'Resultado Elisa para VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.v36 === '1833-03-03' || this.data.v36 === '1822-02-01' || this.data.v36 === '1799-01-01' || this.data.v36 === '1811-01-01' || this.data.v36 === '1800-01-01' || this.data.v36 === '1833-03-03' || this.data.v36 === '1845-01-01' || this.data.v36 === '1846-01-01' || this.data.v36 === '1777-01-01' || this.data.v36 === '1788-01-01') {
          const comodin = {
            section: 'Información de personas que viven con VIH',
            field: 'Fecha de confirmación del diagnóstico de infección por VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.v37 === '1833-03-03' || this.data.v37 === '1822-02-01' || this.data.v37 === '1799-01-01' || this.data.v37 === '1811-01-01' || this.data.v37 === '1800-01-01' || this.data.v37 === '1833-03-03' || this.data.v37 === '1845-01-01' || this.data.v37 === '1846-01-01' || this.data.v37 === '1777-01-01' || this.data.v37 === '1788-01-01') {
          const comodin = {
            section: 'Información de personas que viven con VIH',
            field: 'Fecha de inicio de la atención por VIH.'
          }

          comodines.push(comodin)
        }

        if (this.data.v42 === '1833-03-03' || this.data.v42 === '1822-02-01' || this.data.v42 === '1799-01-01' || this.data.v42 === '1811-01-01' || this.data.v42 === '1800-01-01' || this.data.v42 === '1833-03-03' || this.data.v42 === '1845-01-01' || this.data.v42 === '1846-01-01' || this.data.v42 === '1777-01-01' || this.data.v42 === '1788-01-01') {
          const comodin = {
            section: 'Terapia Antirretroviral (TAR) Inicial',
            field: 'Fecha de inicio de la terapia antirretroviral (TAR).'
          }

          comodines.push(comodin)
        }

        if (this.data.v51_1 === '1833-03-03' || this.data.v51_1 === '1822-02-01' || this.data.v51_1 === '1799-01-01' || this.data.v51_1 === '1811-01-01' || this.data.v51_1 === '1800-01-01' || this.data.v51_1 === '1833-03-03' || this.data.v51_1 === '1845-01-01' || this.data.v51_1 === '1846-01-01' || this.data.v51_1 === '1777-01-01' || this.data.v51_1 === '1788-01-01') {
          const comodin = {
            section: 'Terapia Antirretroviral (TAR) Inicial',
            field: 'Fecha del primer cambio de cualquier medicamento del esquema inicial de TAR'
          }

          comodines.push(comodin)
        }

        if (this.data.v53_1 === '1833-03-03' || this.data.v53_1 === '1822-02-01' || this.data.v53_1 === '1799-01-01' || this.data.v53_1 === '1811-01-01' || this.data.v53_1 === '1800-01-01' || this.data.v53_1 === '1833-03-03' || this.data.v53_1 === '1845-01-01' || this.data.v53_1 === '1846-01-01' || this.data.v53_1 === '1777-01-01' || this.data.v53_1 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de ingreso a la IPS actual para seguimiento y atención de la infección por el VIH'
          }

          comodines.push(comodin)
        }

        if (this.data.v54 === '1833-03-03' || this.data.v54 === '1822-02-01' || this.data.v54 === '1799-01-01' || this.data.v54 === '1811-01-01' || this.data.v54 === '1800-01-01' || this.data.v54 === '1833-03-03' || this.data.v54 === '1845-01-01' || this.data.v54 === '1846-01-01' || this.data.v54 === '1777-01-01' || this.data.v54 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de la última genotipificación realizada'
          }

          comodines.push(comodin)
        }

        if (this.data.v56 === '1833-03-03' || this.data.v56 === '1822-02-01' || this.data.v56 === '1799-01-01' || this.data.v56 === '1811-01-01' || this.data.v56 === '1800-01-01' || this.data.v56 === '1833-03-03' || this.data.v56 === '1845-01-01' || this.data.v56 === '1846-01-01' || this.data.v56 === '1777-01-01' || this.data.v56 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de último colesterol LDL'
          }

          comodines.push(comodin)
        }

        if (this.data.v58 === '1833-03-03' || this.data.v58 === '1822-02-01' || this.data.v58 === '1799-01-01' || this.data.v58 === '1811-01-01' || this.data.v58 === '1800-01-01' || this.data.v58 === '1833-03-03' || this.data.v58 === '1845-01-01' || this.data.v58 === '1846-01-01' || this.data.v58 === '1777-01-01' || this.data.v58 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de última hemoglobina sérica'
          }

          comodines.push(comodin)
        }

        if (this.data.v59 === '1833-03-03' || this.data.v59 === '1822-02-01' || this.data.v59 === '1799-01-01' || this.data.v59 === '1811-01-01' || this.data.v59 === '1800-01-01' || this.data.v59 === '1833-03-03' || this.data.v59 === '1845-01-01' || this.data.v59 === '1846-01-01' || this.data.v59 === '1777-01-01' || this.data.v59 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de la última enzima alanina aminotransferasa'
          }

          comodines.push(comodin)
        }

        if (this.data.v60 === '1833-03-03' || this.data.v60 === '1822-02-01' || this.data.v60 === '1799-01-01' || this.data.v60 === '1811-01-01' || this.data.v60 === '1800-01-01' || this.data.v60 === '1833-03-03' || this.data.v60 === '1845-01-01' || this.data.v60 === '1846-01-01' || this.data.v60 === '1777-01-01' || this.data.v60 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de última creatinina sérica'
          }

          comodines.push(comodin)
        }

        if (this.data.v61 === '1833-03-03' || this.data.v61 === '1822-02-01' || this.data.v61 === '1799-01-01' || this.data.v61 === '1811-01-01' || this.data.v61 === '1800-01-01' || this.data.v61 === '1833-03-03' || this.data.v61 === '1845-01-01' || this.data.v61 === '1846-01-01' || this.data.v61 === '1777-01-01' || this.data.v61 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de última glucemia sérica en ayuno'
          }

          comodines.push(comodin)
        }

        if (this.data.v62 === '1833-03-03' || this.data.v62 === '1822-02-01' || this.data.v62 === '1799-01-01' || this.data.v62 === '1811-01-01' || this.data.v62 === '1800-01-01' || this.data.v62 === '1833-03-03' || this.data.v62 === '1845-01-01' || this.data.v62 === '1846-01-01' || this.data.v62 === '1777-01-01' || this.data.v62 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de última medición del peso corporal en el periodo'
          }

          comodines.push(comodin)
        }

        if (this.data.v68_3 === '1833-03-03' || this.data.v68_3 === '1822-02-01' || this.data.v68_3 === '1799-01-01' || this.data.v68_3 === '1811-01-01' || this.data.v68_3 === '1800-01-01' || this.data.v68_3 === '1833-03-03' || this.data.v68_3 === '1845-01-01' || this.data.v68_3 === '1846-01-01' || this.data.v68_3 === '1777-01-01' || this.data.v68_3 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de inicio del tratamiento antituberculoso que recibe o recibió la persona con coinfección TB/VIH en los últimos 12 meses'
          }

          comodines.push(comodin)
        }

        if (this.data.v68_13 === '1833-03-03' || this.data.v68_13 === '1822-02-01' || this.data.v68_13 === '1799-01-01' || this.data.v68_13 === '1811-01-01' || this.data.v68_13 === '1800-01-01' || this.data.v68_13 === '1833-03-03' || this.data.v68_13 === '1845-01-01' || this.data.v68_13 === '1846-01-01' || this.data.v68_13 === '1777-01-01' || this.data.v68_13 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha en que terminó el tratamiento antituberculoso en los últimos 12 meses'
          }

          comodines.push(comodin)
        }

        if (this.data.v75 === '1833-03-03' || this.data.v75 === '1822-02-01' || this.data.v75 === '1799-01-01' || this.data.v75 === '1811-01-01' || this.data.v75 === '1800-01-01' || this.data.v75 === '1833-03-03' || this.data.v75 === '1845-01-01' || this.data.v75 === '1846-01-01' || this.data.v75 === '1777-01-01' || this.data.v75 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha del último conteo de linfocitos T CD4 realizado en el período de observación'
          }

          comodines.push(comodin)
        }

        if (this.data.v76 === '1833-03-03' || this.data.v76 === '1822-02-01' || this.data.v76 === '1799-01-01' || this.data.v76 === '1811-01-01' || this.data.v76 === '1800-01-01' || this.data.v76 === '1833-03-03' || this.data.v76 === '1845-01-01' || this.data.v76 === '1846-01-01' || this.data.v76 === '1777-01-01' || this.data.v76 === '1788-01-01') {
          const comodin = {
            section: 'Condición actual de la persona que vive con VIH',
            field: 'Fecha de la última carga viral para VIH realizada en el período de observación'
          }

          comodines.push(comodin)
        }

        if (this.data.v77_1 === '1833-03-03' || this.data.v77_1 === '1822-02-01' || this.data.v77_1 === '1799-01-01' || this.data.v77_1 === '1811-01-01' || this.data.v77_1 === '1800-01-01' || this.data.v77_1 === '1833-03-03' || this.data.v77_1 === '1845-01-01' || this.data.v77_1 === '1846-01-01' || this.data.v77_1 === '1777-01-01' || this.data.v77_1 === '1788-01-01') {
          const comodin = {
            section: 'Terapia Antirretroviral (TAR) Actual',
            field: 'Fecha de inicio de los medicamentos de la TAR que recibe actualmente la persona que viven con VIH'
          }

          comodines.push(comodin)
        }

        if (this.data.v97_1 === '1833-03-03' || this.data.v97_1 === '1822-02-01' || this.data.v97_1 === '1799-01-01' || this.data.v97_1 === '1811-01-01' || this.data.v97_1 === '1800-01-01' || this.data.v97_1 === '1833-03-03' || this.data.v97_1 === '1845-01-01' || this.data.v97_1 === '1846-01-01' || this.data.v97_1 === '1777-01-01' || this.data.v97_1 === '1788-01-01') {
          const comodin = {
            section: 'Situación administrativa a la fecha de corte',
            field: 'Fecha de desafiliación de la entidad'
          }

          comodines.push(comodin)
        }

        if (this.data.v97_3 === '1833-03-03' || this.data.v97_3 === '1822-02-01' || this.data.v97_3 === '1799-01-01' || this.data.v97_3 === '1811-01-01' || this.data.v97_3 === '1800-01-01' || this.data.v97_3 === '1833-03-03' || this.data.v97_3 === '1845-01-01' || this.data.v97_3 === '1846-01-01' || this.data.v97_3 === '1777-01-01' || this.data.v97_3 === '1788-01-01') {
          const comodin = {
            section: 'Situación administrativa a la fecha de corte',
            field: 'Fecha de muerte'
          }

          comodines.push(comodin)
        }

        if (this.data.v98 === '1833-03-03' || this.data.v98 === '1822-02-01' || this.data.v98 === '1799-01-01' || this.data.v98 === '1811-01-01' || this.data.v98 === '1800-01-01' || this.data.v98 === '1833-03-03' || this.data.v98 === '1845-01-01' || this.data.v98 === '1846-01-01' || this.data.v98 === '1777-01-01' || this.data.v98 === '1788-01-01') {
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

        if (!this.error) {
          configServices.consumerStandar(this, 'asfa-rest/post', data, {
            callBack: (data) => {
              if (typeof data.error !== 'undefined' && this.registerNid === '') {
                return _this.$swal('Advertencia', 'Error al crear registro verifique que no haya un registro previamente creado para el paciente', 'error')
              }
              if (_this.type === 'borrador') {
                _this.registerNid = data.id
              }
              if (_this.type === 'siguiente') {
                if (typeof _this.data.v16 === 'undefined' || typeof _this.data.v17 === 'undefined') {
                  localStorage.setItem('registerNid', _this.registerNid)
                  _this.$router.push('/resumen')
                  return
                }

                if (_this.secondStep === false && _this.firstStep === true) {
                  if (_this.data.v16.id !== '0' || _this.data.v17.id !== '3') {
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
        }
      } else {
        if (_this.secondStep === false && _this.firstStep === true) {
          if (typeof _this.data.v16 === 'undefined' || typeof _this.data.v17 === 'undefined') {
            _this.thirdStep = true
            _this.firstStep = false
          } else {
            if (_this.data.v16.id !== '0' || _this.data.v17.id !== '3') {
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
