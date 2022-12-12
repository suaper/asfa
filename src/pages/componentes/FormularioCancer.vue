<template>
  <q-form @submit="saveRegister">
    <div class="row flex cien space-betwen" >
        <div class="wrp_forms w_50" v-if="firstStep">
          <h4 class="titulo_fondo w_100">INFORMACION RELACIONADA A DIAGNÓSTICO, ESTADIFICACIÓN Y OBJETIVO DEL TRATAMIENTO INICIAL</h4>

          <div class="row dos_items">
              <div class="item">
                  <label>17. Código CIE - 10 de la neoplasia (cáncer o tumor) maligna reportada (Primario) </label>
                  <q-input rounded standout v-model="data.v17" lazy-rules></q-input>
              </div>
              <div class="item">
                  <label>18. Fecha de diagnóstico del cáncer reportado:  </label>
                    <q-input filled v-model="data.v18">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v18">
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
                  <label>19. Fecha de la nota de remisión o interconsulta del médico o institución general hacia la institución o médico que hizo el diagnóstico: </label>
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
                  <label>20. Fecha de ingreso a la institución que realizó el diagnóstico luego de la remisión o interconsulta: </label>
                    <q-input filled v-model="data.v20">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v20">
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
                  <label>21. Tipo de estudio con el que se realizó el diagnóstico de cáncer:</label>
                  <q-select rounded standout v-model="data.v21" :options="v21" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>22. Motivo por el cual el usuario no tuvo diagnóstico por histopatología (aplica para registros con respuesta igual a 7 en la variable anterior):</label>
                  <q-select rounded standout v-model="data.v22" :options="v22" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>23. Fecha de recolección de muestra para estudio histopatológico de diagnóstico:</label>
                    <q-input filled v-model="data.v23">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v23">
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
                  <label>24. Fecha de primero o único informe histopatológico válido de diagnóstico: </label>
                    <q-input filled v-model="data.v24">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v24">
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
                  <label>25. Código válido de habilitación de la IPS donde se realiza la confirmación diagnóstica: </label>
                  <q-select rounded standout v-model="data.v25" :options="v25" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>26. Fecha de primera consulta con médico tratante de la enfermedad maligna </label>
                    <q-input filled v-model="data.v26">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v26">
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
                  <label>27. Histología del tumor en muestra de biopsia o quirúrgica: </label>
                  <q-select rounded standout v-model="data.v27" :options="v27" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>28. Grado de diferenciación del tumor sólido maligno según la biopsia o informe de primera cirugía:  </label>
                  <q-select rounded standout v-model="data.v28" :options="v28" label="Seleccionar" />
              </div>
          </div>

          <div class="row un_item">
              <div class="item">
                <label>29. Si es tumor sólido, cuál fue la primera estadificación basada en TNM, FIGO, u otras compatibles con esta numeración según tumor:</label>
                <q-select rounded standout v-model="data.v29" :options="v29" label="Seleccionar" />
              </div>
            </div>

            <div class="row un_item" v-if="typeof data.v29 !== 'undefined' && data.v29.id !== ''">
              <div class="item" v-if="data.v29.id === 'CÁNCER DE MAMA Y CÁNCER GÁSTRICO'">
                <label class="sub_text">CÁNCER DE MAMA Y CÁNCER GÁSTRICO</label>
                <q-select rounded standout v-model="data.cancerMamaGastrico" :options="cancerMamaGastrico" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.v29.id === 'CANCER DE PRÓSTATA'">
                <label class="sub_text">CANCER DE PRÓSTATA</label>
                <q-select rounded standout v-model="data.cancerProstata" :options="cancerProstata" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.v29.id === 'CANCER DE PULMON'">
                <label class="sub_text">CANCER DE PULMÓN</label>
                <q-select rounded standout v-model="data.cancerPulmon" :options="cancerPulmon" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.v29.id === 'MELANOMA'">
                <label class="sub_text">MELANOMA</label>
                <q-select rounded standout v-model="data.melonoma" :options="melonoma" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.v29.id === 'CÁNCER DE COLON Y RECTO'">
                <label class="sub_text">CÁNCER DE COLON Y RECTO</label>
                <q-select rounded standout v-model="data.cancerColonRecto" :options="cancerColonRecto" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.v29.id === 'CÁNCER ANAL (Agrupador Colon y recto)'">
                <label class="sub_text">CÁNCER ANAL (Agrupador Colon y recto)</label>
                <q-select rounded standout v-model="data.cancerAnal" :options="cancerAnal" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.v29.id === 'CÁNCER DE CÉRVIX (FIGO)'">
                <label class="sub_text">CÁNCER DE CÉRVIX (FIGO)</label>
                <q-select rounded standout v-model="data.cancerCervix" :options="cancerCervix" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.v29.id === 'OTRAS OPCIONES'">
                <label class="sub_text">OTRAS OPCIONES</label>
                <q-select rounded standout v-model="data.cancerOtrasOpciones" :options="cancerOtrasOpciones" label="Seleccionar" />
              </div>
            </div>
            <div class="row un_item">
              <div class="item">
                  <label>30. Fecha en que se realizó esta estadificación  </label>
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

          <div class="row dos_items">
              <div class="item">
                  <label>31. Para cáncer de mama, ¿se le realizó a este usuario la prueba HER2 (llamado también receptor 2 del factor de crecimiento epidérmico humano, también llamado erb-B2) antes del inicio del tratamiento?: </label>
                  <q-select rounded standout v-model="data.v31" :options="v31" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>32. Para cáncer de mama, fecha de realización de la única o última prueba HER2:</label>
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
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>33. Para cáncer de mama, resultado de la única o última prueba HER2:  </label>
                  <q-select rounded standout v-model="data.v33" :options="v33" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>34. Para cáncer colorrectal, estadificación de Dukes </label>
                  <q-select rounded standout v-model="data.v34" :options="v34" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>35. Fecha en que se realizó la estadificación de Dukes: </label>
                    <q-input filled v-model="data.v35">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v35">
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
                  <label>36. Estadificación clínica en linfoma no Hodgkin y linfoma Hodgkin adulto y pediátrico (Ann Arbor -Lugano) </label>
                  <q-select rounded standout v-model="data.v36" :options="v36" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>37. Para cáncer de próstata, valor de clasificación de la escala Gleason en el momento del diagnóstico:  </label>
                  <q-select rounded standout v-model="data.v37" :options="v37" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>38. Clasificación del riesgo leucemias o linfomas (para toda la población), y sólidos pediátricos: </label>
                  <q-select rounded standout v-model="data.v38" :options="v38" label="Seleccionar" />
              </div>
          </div>

          <div class="row un_item" v-if="typeof data.v38 !== 'undefined' && data.v38.id !== ''">
            <div class="item" v-if="data.v38.id === 'Clasificación de riesgo en linfoma no Hodgkin'">
              <label class="sub_text">Clasificación de riesgo en linfoma no Hodgkin</label>
              <q-select rounded standout v-model="data.clasificacionRiesgoNoHodgkin" :options="clasificacionRiesgoNoHodgkin" label="Seleccionar" />
            </div>
            <div class="item" v-if="data.v38.id === 'Clasificación de riesgo en linfoma de Hodgkin'">
              <label class="sub_text">Clasificación de riesgo en linfoma de Hodgkin</label>
                <q-select rounded standout v-model="data.clasificacionRiesgoHodgkin" :options="clasificacionRiesgoHodgkin" label="Seleccionar" />
            </div>
          </div>

          <div class="row un_item" v-if="typeof data.v38 !== 'undefined' && data.v38.id !== ''">
            <div class="item" v-if="data.v38.id === 'Clasificación del riesgo en adultos (LLA y LMA)'">
              <label class="sub_text">Clasificación del riesgo en adultos (LLA y LMA)</label>
              <q-select rounded standout v-model="data.riesgosAdultoLla" :options="riesgosAdultoLla" label="Seleccionar" />
            </div>
            <div class="item" v-if="data.v38.id === 'Clasificación del riesgo en Pediatría (LLA y LMA)'">
              <label class="sub_text">Clasificación del riesgo en Pediatría (LLA y LMA)</label>
              <q-select rounded standout v-model="data.riesgosPediatraLla" :options="riesgosPediatraLla" label="Seleccionar" />
            </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>39. Fecha de clasificación de riesgo: </label>
                    <q-input filled v-model="data.v39">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v39">
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
                  <label>40. Objetivo (o intención) del tratamiento médico inicial (al diagnóstico)  </label>
                  <q-select rounded standout v-model="data.v40" :options="v40" label="Seleccionar" />
              </div>
          </div>

          <div class="row un_item">
              <div class="item">
                <label>41. Intervención médica durante el periodo de reporte </label>
                <q-input filled v-model="data.v41" />
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
          <h4 class="titulo_fondo w_100">ANTECEDENTES AL DIAGNÓSTICO DEL CÁNCER REPORTADO</h4>

          <div class="row dos_items">
            <div class="item numero">
                <label>42. Tiene antecedente o padece de otro cáncer primario (es decir, tiene o tuvo otro tumor maligno diferente al que está notificando): </label>
                  <q-select rounded standout v-model="data.v42" :options="v42" label="Seleccionar" />
            </div>
            <div class="item">
                <label>43. Fecha de diagnóstico del otro cáncer primario: </label>
                  <q-input filled v-model="data.v43">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.v43">
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

          <div class="row uno_items">
              <div class="item numero">
                  <label>44. Tipo (CIE-10) de ese cáncer antecedente o concurrente</label>
                    <q-select rounded standout v-model="data.v44" :options="v44" label="Seleccionar" />
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
        <div class="wrp_forms w_50" v-if="thirdStep">
          <h4 class="titulo_fondo w_100">INFORMACIÓN ESPECÍFICA DE TERAPIA SISTÉMICA E INTRATECAL EN EL PERIODO DE REPORTE ACTUAL</h4>

          <div class="row dos_items">
              <div class="item">
                  <label>45. ¿Recibió el usuario quimioterapia u otra terapia sistémica (incluye quimioterapia, hormonoterapia, inmunoterapia y terapia dirigida) dentro del periodo de reporte?</label>
                  <q-select rounded standout v-model="data.v45" :options="v45" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>46. ¿Cuántas fases de quimioterapia recibió el usuario en este periodo de reporte? (aplica para hematolinfáticos con los siguientes códigos de clasificación diagnóstica CIE-10; C835 Linfoma no Hodgkin linfoblástico (difuso), C910 Leucemia linfoblástica aguda, C920 Leucemia mieloide aguda, C924 Leucemia promielocitica aguda y C925 Leucemia mielomonocítica aguda): </label>
                  <q-select rounded standout v-model="data.v46" :options="v46" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>46.1 El usuario recibió en este periodo la fase de quimioterapia denominada Prefase o Citorreducción inicial (aplica solo para leucemia linfoide aguda y linfoma linfoblástico, puede haber recibido más de una fase): </label>
                  <q-select rounded standout v-model="data.v46_1" :options="v46_1" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>46.2 El usuario recibió en este periodo la fase de quimioterapia denominada Inducción (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                  <q-select rounded standout v-model="data.v46_2" :options="v46_2" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>46.3 El usuario recibió en este periodo la fase de quimioterapia denominada Intensificación (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase): </label>
                  <q-select rounded standout v-model="data.v46_3" :options="v46_3" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>46.4 El usuario recibió en este periodo la fase de quimioterapia denominada Consolidación (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase): : </label>
                  <q-select rounded standout v-model="data.v46_4" :options="v46_4" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>46.5 El usuario recibió en este periodo la fase de quimioterapia denominada Reinducción (aplica solo para leucemia linfoide aguda y linfoma linfoblástico, puede haber recibido más de una fase): </label>
                  v<q-select rounded standout v-model="data.v46_5" :options="v46_5" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>46.6 El usuario recibió en este periodo la fase de quimioterapia denominada Mantenimiento (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                  <q-select rounded standout v-model="data.v46_6" :options="v46_6" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>46.7 El usuario recibió en este periodo la fase de quimioterapia denominada Mantenimiento largo o final (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                  <q-select rounded standout v-model="data.v46_7" :options="v46_7" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>46.8 El usuario recibió en este periodo Otra fase de quimioterapia denominada diferente a las anteriores (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                  <q-select rounded standout v-model="data.v46_8" :options="v46_8" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item numero">
                  <label>47. Número de ciclos iniciados y administrados en el periodo de reporte, incluyendo el que aún recibe en la fecha de finalización del periodo (aplica para todos los cánceres): </label>
                    <q-input rounded standout v-model="data.v47" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>48. Ubicación temporal del primer o único esquema de quimioterapia o terapia sistémica en el periodo en relación al manejo oncológico: </label>
                  <q-select rounded standout v-model="data.v48" :options="v48" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>49. Fecha de inicio del primer o único esquema de quimioterapia o terapia sistémica que recibió en este periodo. Este esquema pudo haber sido iniciado antes de periodo de reporte. </label>
                    <q-input filled v-model="data.v49">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v49">
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
                  <label>50. Número de IPS que suministran el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte:  </label>
                    <q-input rounded standout v-model="data.v50" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>51. Código de la IPS1 que suministra el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte</label>
                    <q-input rounded standout v-model="data.v51" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>52. Código de la IPS2 que suministra el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte:  </label>
                    <q-input rounded standout v-model="data.v52" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>53. Cuantos medicamentos antineoplásicos o terapia hormonal, el (los) especialista(s) tratante(s) del cáncer propusieron como manejo en el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte</label>
                    <q-input rounded standout v-model="data.v53" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>53.1 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(1) </label>
                    <q-select rounded standout v-model="data.v53_1" :options="v53_1" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>53.2 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(2) </label>
                    <q-select rounded standout v-model="data.v53_2" :options="v53_2" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>53.3 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(3) </label>
                    <q-select rounded standout v-model="data.v53_3" :options="v53_3" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>53.4 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(4) </label>
                    <q-select rounded standout v-model="data.v53_4" :options="v53_4" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>53.5 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(5) </label>
                    <q-select rounded standout v-model="data.v53_5" :options="v53_5" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>53.6 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(6) </label>
                    <q-select rounded standout v-model="data.v53_6" :options="v53_6" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>53.7 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(7) </label>
                    <q-select rounded standout v-model="data.v53_7" :options="v53_7" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>53.8 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(8) </label>
                    <q-select rounded standout v-model="data.v53_8" :options="v53_8" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>53.9 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(9) </label>
                    <q-select rounded standout v-model="data.v53_9" :options="v53_9" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>54. Medicamento Antineoplásico o terapia hormonal para el cáncer, adicional a los reportados en las variables 53.1 a 53.9 - 1 administrado al usuario- primer o único esquema del periodo de reporte: </label>
                    <q-select rounded standout v-model="data.v54" :options="v54" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>55. Medicamento Antineoplásico o terapia hormonal para el cáncer, adicional a los reportados en las variables 53.1 a 53.9 - 2 administrado al usuario- primer o único esquema del periodo de reporte: </label>
                    <q-select rounded standout v-model="data.v55" :options="v55" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>56. Medicamento Antineoplásico o terapia hormonal para el cáncer, adicional a los reportados en las variables 53.1 a 53.9 - 3 administrado al usuario- primer o único esquema del periodo de reporte: </label>
                    <q-select rounded standout v-model="data.v56" :options="v56" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>57. ¿Recibió quimioterapia intratecal en el primer o único esquema de este periodo de reporte?:</label>
                    <q-select rounded standout v-model="data.v57" :options="v57" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>58. Fecha de finalización del primer o único esquema de este periodo de reporte. Si es hormonoterapia terminada o esquema terminado en este periodo reporte la fecha de finalización del tratamiento actual: </label>
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
              <div class="item">
                  <label>59. Características actuales del primer o único esquema de este periodo de reporte:</label>
                    <q-select rounded standout v-model="data.v59" :options="v59" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>60. Motivo de la finalización (prematura) de este primer o único esquema (Aplica si registró la opción 2 de la variable anterior). Seleccione un sólo número (lo que primero ocurrió):  </label>
                    <q-select rounded standout v-model="data.v60" :options="v60" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>61. Ubicación temporal del ÚLTIMO esquema de quimioterapia o terapia sistémica de este periodo de reporte en relación al manejo oncológico: </label>
                    <q-select rounded standout v-model="data.v61" :options="v61" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>62. Fecha de inicio del último esquema de quimioterapia o terapia sistémica de este periodo de reporte. Si es hormonoterapia reporte la fecha de inicio del tratamiento actual, así haya sido iniciada previo al reporte actual:  </label>
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
              <div class="item">
                  <label>63. Número de IPS que suministran el último esquema de este periodo de reporte: </label>
                    <q-input rounded standout v-model="data.v63" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>64. Código de la IPS1 que suministra el último esquema en este periodo de reporte: </label>
                    <q-input rounded standout v-model="data.v64" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>65. Código de la IPS2 que suministra el último esquema en este periodo de reporte: </label>
                    <q-input rounded standout v-model="data.v65" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>66. Cuantos medicamentos antineoplásicos o terapia hormonal, el (los) especialista(s) tratante(s) del cáncer propusieron como manejo en ÚLTIMO esquema de quimioterapia o terapia sistémica de este periodo de reporte: </label>
                    <q-input rounded standout v-model="data.v66" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>66.1 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte. </label>
                    <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte" :options="medicamentoAntineplasicoReporte" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>66.2 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(2)  </label>
                    <q-select rounded standout v-model="data.v66_2" :options="v66_2" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>66.3 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(3) </label>
                    <q-select rounded standout v-model="data.v66_3" :options="v66_3" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>66.4 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(4)  </label>
                    <q-select rounded standout v-model="data.v66_4" :options="v66_4" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>66.5 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(5) </label>
                    <q-select rounded standout v-model="data.v66_5" :options="v66_5" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>66.6 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(6)  </label>
                    <q-select rounded standout v-model="data.v66_6" :options="v66_6" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>66.7 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(7) </label>
                    <q-select rounded standout v-model="data.v66_7" :options="v66_7" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>66.8 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(8)  </label>
                    <q-select rounded standout v-model="data.v66_8" :options="v66_8" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>66.9 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(9) </label>
                    <q-select rounded standout v-model="data.v66_9" :options="v66_9" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>67. Medicamento Antineoplásico o terapia hormonal para cáncer, adicional a los reportados en variables 66.1 a 66.9 -1 administrado al usuario- último esquema: </label>
                    <q-select rounded standout v-model="data.v67" :options="v67" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>68. Medicamento Antineoplásico o terapia hormonal para cáncer, adicional a los reportados en variables 66.1 a 66.9 -2 administrado al usuario- último esquema:</label>
                    <q-select rounded standout v-model="data.v68" :options="v68" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>69. Medicamento Antineoplásico o terapia hormonal para cáncer, adicional a los reportados en variables 66.1 a 66.9 -3 administrado al usuario- último esquema:</label>
                    <q-select rounded standout v-model="data.v69" :options="v69" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>70. ¿Recibió quimioterapia intratecal en el último esquema de este periodo de reporte</label>
                    <q-select rounded standout v-model="data.v70" :options="v70" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>71. Fecha de finalización del último esquema de quimioterapia o terapia sistémica este periodo de reporte. Si es hormonoterapia terminada o esquema terminado en este periodo reporte la fecha de finalización del tratamiento actual: </label>
                    <q-input filled v-model="data.v71">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v71">
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
                  <label>72. Características actuales del último esquema de este periodo:</label>
                    <q-select rounded standout v-model="data.v72" :options="v72" label="Seleccionar" />
              </div>
          </div>

          <div class="row un_item">
              <div class="item">
                  <label>73. Motivo de la finalización (prematura) de este último esquema (Aplica si registró la opción 2 de la pregunta anterior) Seleccione un sólo número (lo que primero ocurrió): </label>
                    <q-select rounded standout v-model="data.v73" :options="v73" label="Seleccionar" />
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
        <div class="wrp_forms w_50" v-if="fourthStep">
          <h4 class="titulo_fondo w_100">INFORMACIÓN ESPECÍFICA DE CIRUGÍA EN EL PERIODO DE REPORTE ACTUAL</h4>

          <div class="row dos_items">
              <div class="item">
                  <label>74. ¿Fue sometido el usuario a una o más cirugías curativas o paliativas como parte del manejo del cáncer durante este periodo de reporte?:</label>
                  <q-select rounded standout v-model="data.v74" :options="v74" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>75. Número de cirugías a las que fue sometido el usuario durante el periodo de reporte actual:  </label>
                    <q-input rounded standout v-model="data.v75" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>76. Fecha de realización de la primera cirugía en este periodo de reporte: </label>
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
              <div class="item">
                  <label>77. Código de la IPS que realizó la primera cirugía de este periodo de reporte:  </label>
                  <q-input rounded standout v-model="data.v77" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>78. Código de primera cirugía en este periodo de reporte: </label>
                  <q-input rounded standout v-model="data.v78" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>79. Ubicación temporal de esta primera cirugía en relación al manejo oncológico: </label>
                  <q-select rounded standout v-model="data.v79" :options="v79" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>80. Fecha de realización de la última cirugía o cirugía de reintervención en este periodo de reporte:</label>
                    <q-input filled v-model="data.v80">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v80">
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
                  <label>81. Motivo de haber realizado la última cirugía de este periodo de reporte:</label>
                  <q-select rounded standout v-model="data.v81" :options="v81" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>82. Código de la IPS que realiza la última cirugía en este periodo de reporte:</label>
                  <q-input rounded standout v-model="data.v82" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>83. Código de última cirugía en este periodo de reporte:</label>
                  <q-input rounded standout v-model="data.v83" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row uno_items">
              <div class="item">
                  <label>84. Ubicación temporal de esta última cirugía en relación al manejo oncológico, en este periodo de reporte: </label>
                  <q-select rounded standout v-model="data.v84" :options="v84" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>85. Estado vital al finalizar la única o última cirugía de este periodo de reporte:</label>
                  <q-select rounded standout v-model="data.v85" :options="v85" label="Seleccionar" />
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

        <div class="wrp_forms w_50" v-if="fiveStep">
          <h4 class="titulo_fondo w_100">INFORMACIÓN ESPECÍFICA DE RADIOTERAPIA EN EL PERIODO DE REPORTE ACTUAL</h4>

          <div class="row dos_items">
              <div class="item">
                  <label>86. ¿Recibió el usuario algún tipo de radioterapia en el periodo de reporte actual?:</label>
                  <q-select rounded standout v-model="data.v86" :options="v86" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>87. Número de sesiones de radioterapia recibidas en el periodo</label>
                    <q-input rounded standout v-model="data.v87" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>88. Fecha de inicio de primer o único esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual. Reporte la fecha de inicio del tratamiento actual, así haya sido iniciada previo al reporte actual: </label>
                    <q-input filled v-model="data.v88">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v88">
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
                  <label>89. Ubicación temporal del primer o único esquema de cualquier tipo de radioterapia en este periodo de reporte en relación al tratamiento oncológico: </label>
                  <q-select rounded standout v-model="data.v89" :options="v89" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>90. Tipo de radioterapia aplicada en este primer o único esquema:  </label>
                  <q-select rounded standout v-model="data.v90" :options="v90" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>91. Número de IPS que suministran este primer o único esquema de radioterapia: </label>
                    <q-input rounded standout v-model="data.v91" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row uno_items">
              <div class="item">
                  <label>92. Código de la IPS1 que suministra la radioterapia de este primer o único esquema</label>
                  <q-input rounded standout v-model="data.v92" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>93. Código de la IPS2 que suministra la radioterapia de este primer o único esquema:</label>
                  <q-input rounded standout v-model="data.v93" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>94. Fecha de finalización de primer o único esquema de radioterapia: </label>
                    <q-input filled v-model="data.v94">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v94">
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

          <div class="row uno_items">
              <div class="item">
                  <label>95. Características actuales de este primer o único esquema de radioterapia:</label>
                  <q-select rounded standout v-model="data.v95" :options="v95" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>96. Motivo de la finalización de este primer o único esquema de radioterapia (aplica si registró la opción 2 de la pregunta anterior). Seleccione un sólo número (lo que primero ocurrió):</label>
                  <q-select rounded standout v-model="data.v96" :options="v96" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>97. Fecha de inicio del último esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual: </label>
                    <q-input filled v-model="data.v97">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v97">
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
                  <label>98. Ubicación temporal/intención del ÚLTIMO esquema de cualquier tipo de radioterapia suministrado en el periodo actual en relación al tratamiento oncológico:</label>
                  <q-select rounded standout v-model="data.v98" :options="v98" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>99. Tipo de radioterapia aplicada en el ÚLTIMO esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual</label>
                  <q-select rounded standout v-model="data.v99" :options="v99" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>100. Número de IPS que suministran este último esquema de cualquier tipo de radioterapia en el periodo de reporte actual: </label>
                  <q-input rounded standout v-model="data.v100" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>101. Código de la IPS1 que suministra último esquema de cualquier tipo de radioterapia en el periodo de reporte actual: </label>
                  <q-input rounded standout v-model="data.v101" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>102. Código de la IPS2 que suministra último esquema de cualquier tipo de radioterapia en el periodo de reporte actual:</label>
                  <q-input rounded standout v-model="data.v102" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>103. Fecha de finalización del último esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual: </label>
                    <q-input filled v-model="data.v103">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v103">
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
                  <label>104. Características actuales de este último esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual: </label>
                  <q-select rounded standout v-model="data.v104" :options="v104" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>105. Motivo de la finalización de este último esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual (aplica si registró la opción 2 de la pregunta anterior). Seleccione un sólo número (lo que primero ocurrió):  </label>
                  <q-select rounded standout v-model="data.v105" :options="v105" label="Seleccionar" />
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

        <div class="wrp_forms w_50" v-if="sixStep">
          <h4 class="titulo_fondo w_100">INFORMACIÓN ESPECÍFICA DE TRASPLANTE DE CÉLULAS MADRE HEMATOPOYÉTICAS (INCLUYE MÉDULA ÓSEA) EN EL PERIODO DE REPORTE ACTUAL</h4>

          <div class="row dos_items">
              <div class="item">
                  <label>106. ¿Recibió el usuario trasplante de células progenitoras hematopoyética dentro del periodo de reporte actual?:</label>
                  <q-select rounded standout v-model="data.v106" :options="v106" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>107. Tipo de trasplante recibido: </label>
                  <q-select rounded standout v-model="data.v107" :options="v107" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>108. Ubicación temporal de este trasplante en relación al manejo oncológico: </label>
                  <q-select rounded standout v-model="data.v108" :options="v108" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>109. Fecha del trasplante: </label>
                    <q-input filled v-model="data.v109">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v109">
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

          <div class="row uno_items">
              <div class="item">
                  <label>110. Código de la IPS que realizó este trasplante:  </label>
                  <q-input rounded standout v-model="data.v110" lazy-rules type="number"></q-input>
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
        <div class="wrp_forms w_50" v-if="sevenStep">
          <h4 class="titulo_fondo w_100">INFORMACIÓN ESPECÍFICA DE TRATAMIENTO COMPLEMENTARIO EN EL PERIODO DE REPORTE ACTUAL</h4>

          <div class="row dos_items">
              <div class="item">
                  <label>111. El usuario, ¿recibió cirugía reconstructiva en el periodo de reporte actual?: </label>
                  <q-select rounded standout v-model="data.v111" :options="v111" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>112. Fecha de la cirugía reconstructiva:  </label>
                    <q-input filled v-model="data.v112">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v112">
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
                  <label>113. Código de la IPS que realizó cirugía reconstructiva:  </label>
                  <q-input rounded standout v-model="data.v113" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>114. ¿El usuario fue valorado en consulta o procedimiento de cuidado paliativo en el periodo de reporte actual? (pueden haber sido múltiples):</label>
                  <q-select rounded standout v-model="data.v114" :options="v114" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>114.1 El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por médico especialista en cuidado paliativo:</label>
                  <q-select rounded standout v-model="data.v114_1" :options="v114_1" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>114.2. El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por profesional de la salud (no médico, incluye psicólogo) especialista en cuidado paliativo:</label>
                  <q-select rounded standout v-model="data.v114_2" :options="v114_2" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>114.3. El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por médico especialista, otra especialidad:</label>
                  <q-select rounded standout v-model="data.v114_3" :options="v114_1" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>114.4. El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por médico general:</label>
                  <q-select rounded standout v-model="data.v114_4" :options="v114_1" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>114.5. El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por trabajo social:</label>
                  <q-select rounded standout v-model="data.v114_5" :options="v114_1" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>114.6. El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por otro profesional de salud (no médico, incluye psicólogo) no especializado:</label>
                  <q-select rounded standout v-model="data.v114_6" :options="v114_6" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>115. Fecha de primera consulta o procedimiento de cuidado paliativo en el periodo de reporte actual: </label>
                    <q-input filled v-model="data.v115">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v115">
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
                  <label>116. Código de la IPS donde recibe la atención de cuidado paliativo en el periodo de reporte actual: </label>
                  <q-input rounded standout v-model="data.v116" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>117. ¿Ha sido valorado el usuario por el servicio de psiquiatría en el periodo de reporte actual?:</label>
                  <q-select rounded standout v-model="data.v117" :options="v117" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>118. Fecha de primera consulta con el servicio de psiquiatría (para todos los usuarios) en el periodo de reporte actual:  </label>
                    <q-input filled v-model="data.v118">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v118">
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
                  <label>119. Código de la IPS donde recibió la primera valoración de psiquiatría en el periodo de reporte actual</label>
                  <q-input rounded standout v-model="data.v119" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>120. ¿Fue valorado el usuario por profesional en nutrición en el periodo de reporte actual?: </label>
                  <q-select rounded standout v-model="data.v120" :options="v120" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>121. Fecha de consulta inicial con nutrición en el periodo de reporte actual:  </label>
                    <q-input filled v-model="data.v121">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v121">
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
                  <label>122. Código de la IPS donde recibió la valoración por nutrición, en el periodo de reporte actual: </label>
                  <q-input rounded standout v-model="data.v122" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>123. ¿El usuario recibió soporte nutricional?:  </label>
                  <q-select rounded standout v-model="data.v123" :options="v123" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>124. ¿El usuario ha recibido terapias complementarias para su rehabilitación? </label>
                  <q-select rounded standout v-model="data.v124" :options="v124" label="Seleccionar" />
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

        <div class="wrp_forms w_50" v-if="eightStep">
          <h4 class="titulo_fondo w_100">SITUACIÓN ACTUAL DEL USUARIO (A LA FECHA DE CORTE -1º de enero de 2022</h4>

          <div class="row uno_items">
              <div class="item">
                  <label>125. Tipo de tratamiento que está recibiendo el usuario a la fecha de corte (el día 01/01/2022):</label>
                  <q-select rounded standout v-model="data.v125" :options="v125" label="Seleccionar" />
              </div>
          </div>

          <h4 class="titulo_fondo w_100">RESULTADO FINAL DE MANEJO ONCOLÓGICO EN ESTE PERIODO DE REPORTE</h4>

          <div class="row dos_items">
              <div class="item">
                  <label>126. Resultado final del manejo oncológico en este periodo de reporte, luego de ser tratado en este periodo el usuario está en:</label>
                  <q-select rounded standout v-model="data.v126" :options="v126" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>127. Estado vital al finalizar este periodo de reporte:</label>
                  <q-select rounded standout v-model="data.v127" :options="v127" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>128. Novedad ADMINISTRATIVA del usuario respecto al reporte anterior:</label>
                  <q-select rounded standout v-model="data.v128" :options="v128" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>129. Novedad clínica del usuario a la fecha de corte:</label>
                  <q-select rounded standout v-model="data.v129" :options="v129" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>130. Fecha de desafiliación de la EAPB:</label>
                    <q-input filled v-model="data.v130">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v130">
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
                  <label>131. Fecha de muerte</label>
                    <q-input filled v-model="data.v131">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v131">
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
                  <label>132. Causa de muerte</label>
                  <q-select rounded standout v-model="data.v132" :options="v132" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>133. Código único de identificación (BDUA-BDEX-PVS): </label>
                  <q-input rounded standout v-model="data.v133" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row uno_items">
              <div class="item">
                  <label>134. Fecha de Corte: </label>
                    <q-input filled v-model="data.v134">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.v134">
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
        pregnantWoman: '',
        v29: {
          id: '',
          label: ''
        },
        v38: {
          id: '',
          label: ''
        }
      },
      popcambiarpdf: false,
      popupanotacion: false,
      popuprealizaranotacion: false,
      tool: false,
      registerNid: '',
      date: 'YYYY-MM-DD',
      auditor: false,
      status: '',
      type: '',
      pdfs: [],
      pdf: '',
      anotations: [],
      anotation: [],
      error: false,
      errors: [],
      v21: [
        { id: '5', label: 'Inmunohistoquímica ' },
        { id: '6', label: 'Citometría de flujo ' },
        { id: '7', label: 'Clínica exclusivamente (incluye estudios imagenológicos y/o de laboratorio en aquellos casos clínicamente justificados en donde fue imposible tomar muestra de estudio histopatológico) ' },
        { id: '8', label: 'Otro' },
        { id: '9', label: 'Genética' },
        { id: '10', label: ' Patología básica' },
        { id: '99', label: ' Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos. ' },
        { id: '55', label: ' Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v22: [
        { id: '1', label: 'Clínica, usuario con coagulopatía' },
        { id: '2', label: 'Clínica, debido a localización del tumor' },
        { id: '3', label: 'Clínica, debido al estado funcional del usuario (deterioro)' },
        { id: '4', label: 'Negativa del usuario o su acudiente para realizar el estudio histopatológico, con documentación de soporte' },
        { id: '5', label: 'Administrativa' },
        { id: '6', label: 'Clínica por reporte de imágenes o laboratorios.' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'Tiene confirmación por histopatología.' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      v25: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte. ' },
        { id: '96', label: 'Diagnóstico fuera del país.' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      v27: [
        { id: '1', label: 'Adenocarcinoma, con o sin otra especificación' },
        { id: '2', label: 'Carcinoma escamocelular (epidermoide), con o sin otra especificación ' },
        { id: '3', label: 'Carcinoma de células basales (basocelular)' },
        { id: '4', label: 'Carcinoma, con o sin otra especificación diferentes a las anteriores ' },
        { id: '5', label: 'Oligodendroglioma, con o sin otra especificación' },
        { id: '6', label: 'Astrocitoma, con o sin otra especificación ' },
        { id: '7', label: 'Ependimoma, con o sin otra especificación' },
        { id: '8', label: 'Neuroblastoma, con o sin otra especificación ' },
        { id: '9', label: 'Meduloblastoma, con o sin otra especificación ' },
        { id: '10', label: 'Hepatoblastoma, con o sin otra especificación' },
        { id: '11', label: 'Rabdomiosarcoma, con o sin otra especificación' },
        { id: '12', label: 'Leiomiosarcoma, con o sin otra especificación ' },
        { id: '13', label: 'Osteosarcoma, con o sin otra especificación ' },
        { id: '14', label: 'Fibrosarcoma, con o sin otra especificación ' },
        { id: '15', label: 'Angiosarcoma, con o sin otra especificación ' },
        { id: '16', label: 'Condrosarcoma, con o sin otra especificación ' },
        { id: '17', label: 'Otros sarcomas, con o sin otra especificación' },
        { id: '18', label: 'Pancreatoblastoma, con o sin otra especificación' },
        { id: '19', label: 'Blastoma pleuropulmonar, con o sin otra especificación ' },
        { id: '20', label: 'Otros tipos histológicos no mencionados' },
        { id: '23', label: 'Melanoma' },
        { id: '24', label: 'Carcinoma papilar de tiroides' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente  territorial durante el periodo de reporte. ' },
        { id: '98', label: 'No se realizó estudio histopatológico (en la variable 21 registró la opción 7).' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      v28: [
        { id: '1', label: 'Bien diferenciado (grado 1)' },
        { id: '2', label: 'Moderadamente diferenciado (grado 2)' },
        { id: '3', label: 'Mal diferenciado (grado 3)' },
        { id: '4', label: 'Anaplásico o indiferenciado (grado 4)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte. ' },
        { id: '94', label: 'Es un cáncer sólido cuyo reporte de patología no incluye la descripción de la diferenciación celular. (ejemplo: cáncer de tiroides, carcinoma basocelular, tumores in situ, melanoma, próstata, entre otros). ' },
        { id: '95', label: 'No es sólido (cáncer hematolinfático)' },
        { id: '98', label: 'No se realizó estudio histopatológico (en la variable 21 registró la opción 7).' },
        { id: '99', label: 'No hay información en la historia clínica' }
      ],
      v29: [
        { id: 'CÁNCER DE MAMA Y CÁNCER GÁSTRICO', label: 'CÁNCER DE MAMA Y CÁNCER GÁSTRICO' },
        { id: 'CANCER DE PRÓSTATA', label: 'CANCER DE PRÓSTATA' },
        { id: 'CANCER DE PULMON', label: 'CANCER DE PULMON' },
        { id: 'MELANOMA', label: 'MELANOMA' },
        { id: 'CÁNCER DE COLON Y RECTO', label: 'CÁNCER DE COLON Y RECTO' },
        { id: 'CÁNCER ANAL (Agrupador Colon y recto)', label: 'CÁNCER ANAL (Agrupador Colon y recto)' },
        { id: 'CÁNCER DE CÉRVIX (FIGO)', label: 'CÁNCER DE CÉRVIX (FIGO)' },
        { id: 'OTRAS OPCIONES', label: 'OTRAS OPCIONES' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (Es cáncer de piel basocelular, es cáncer hematológico o es cáncer en SNC, excepto neuroblastoma).' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      cancerMamaGastrico: [
        { id: '0', label: 'estadio clínico (ec) 0 (tumor in situ) ' },
        { id: '2', label: 'ec IA o 1A' },
        { id: '5', label: 'ec IB o 1b ' },
        { id: '11', label: 'ec IIA o 2a ' },
        { id: '15', label: ' ec IIB' },
        { id: '17', label: ' ec IIIA o 3a ' },
        { id: '18', label: ' ec IIIB o 3b ' },
        { id: '19', label: ' ec IIIC o 3c ' },
        { id: '20', label: ' ec IV o 4' }
      ],
      cancerProstata: [
        { id: '0', label: 'estadio clínico (ec) o (tumor in situ) ' },
        { id: '1', label: 'ec I o 1' },
        { id: '11', label: 'ec IIA o 2a ' },
        { id: '14', label: 'ec IIB' },
        { id: '16', label: 'ec III o 3' },
        { id: '20', label: 'ec IV o 4' },
        { id: '15', label: 'ec IIC o 2c ' },
        { id: '17', label: 'ec IIIA o 3a ' },
        { id: '18', label: 'ec IIIB o 3b ' },
        { id: '19', label: 'ec IIIC o 3c ' },
        { id: '21', label: 'ec IVA o 4a ' },
        { id: '22', label: 'ec IVB o 4b' }
      ],
      cancerPulmon: [
        { id: '0', label: 'estadio clínico (ec) o (tumor in situ) ' },
        { id: '2', label: 'ec IA o 1A' },
        { id: '5', label: 'ec IB o 1b ' },
        { id: '11', label: 'ec IIA o 2a ' },
        { id: '14', label: 'ec IIB' },
        { id: '17', label: 'ec IIIA o 3a ' },
        { id: '18', label: 'ec IIIB o 3b ' },
        { id: '20', label: 'ec IV o 4' },
        { id: '3', label: 'ec IA1' },
        { id: '4', label: 'ec IA2' },
        { id: '19', label: 'ec IIIC o 3c' },
        { id: '21', label: 'ec IVA o 4a ' },
        { id: '22', label: 'ec IVB o 4b ' },
        { id: '26', label: 'Estadio IAB' }
      ],
      melonoma: [
        { id: '0', label: 'estadio clínico (ec) o (tumor in situ) ' },
        { id: '2', label: 'ec IA o 1A' },
        { id: '5', label: 'ec IB o 1b ' },
        { id: '11', label: 'ec IIA o 2a ' },
        { id: '14', label: 'ec IIB' },
        { id: '15', label: 'ec IIC o 2c ' },
        { id: '16', label: 'ec III o 3 ' },
        { id: '17', label: 'ec IIIA o 3a ' },
        { id: '18', label: 'ec IIIB o 3b ' },
        { id: '19', label: 'ec IIIC o 3c ' },
        { id: '20', label: 'ec IV o 4 ' },
        { id: '29', label: 'ec IIID o 3d' }
      ],
      cancerColonRecto: [
        { id: '0', label: 'estadio clínico (ec) o (tumor in situ) ' },
        { id: '1', label: 'ec I o 1' },
        { id: '11', label: 'ec IIA o 2a ' },
        { id: '14', label: 'ec IIB' },
        { id: '15', label: 'ec IIC o 2c ' },
        { id: '17', label: 'ec IIIA o 3a ' },
        { id: '18', label: 'ec IIIB o 3b ' },
        { id: '19', label: 'ec IIIC o 3c ' },
        { id: '21', label: 'ec IVA o 4a ' },
        { id: '22', label: 'ec IVB o 4b' }
      ],
      cancerAnal: [
        { id: '0', label: 'estadio clínico (ec) o (tumor in situ) ' },
        { id: '1', label: 'ec I o 1' },
        { id: '10', label: 'ec II o 2 ' },
        { id: '17', label: 'ec IIIA o 3a ' },
        { id: '18', label: 'ec IIIB o 3b ' },
        { id: '20', label: 'ec IV o 4' },
        { id: '1', label: 'ec I o 1' },
        { id: '11', label: 'ec IIA o 2a ' },
        { id: '14', label: 'ec IIB o 2b ' },
        { id: '17', label: 'ec IIIA o 3a ' },
        { id: '18', label: 'ec IIIB o 3b ' },
        { id: '19', label: 'ec IIIC o 3c ' },
        { id: '20', label: 'ec IV o 4' }
      ],
      cancerCervix: [
        { id: '0', label: 'estadio clínico (ec) o (tumor in situ) ' },
        { id: '1', label: 'ec I o 1' },
        { id: '2', label: 'ec IA o 1A ' },
        { id: '3', label: 'ec IA1' },
        { id: '4', label: 'ec IA2' },
        { id: '5', label: 'ec IB o 1b ' },
        { id: '6', label: 'ec IB1' },
        { id: '7', label: 'ec IB2' },
        { id: '10', label: 'ec II o 2 ' },
        { id: '11', label: 'ec IIA o 2a ' },
        { id: '12', label: 'ec IIA1' },
        { id: '13', label: 'ec IIA2' },
        { id: '14', label: 'ec IIB' },
        { id: '16', label: 'ec III o 3 ' },
        { id: '17', label: 'ec IIIA o 3a ' },
        { id: '18', label: 'ec IIIB o 3b ' },
        { id: '19', label: 'ec IIIC o 3c ' },
        { id: '21', label: 'ec IVA o 4a ' },
        { id: '22', label: 'ec IVB o 4b' },
        { id: '27', label: 'ec IIIC1 o 3c1' },
        { id: '28', label: 'ec IIIC2 o 3c2' },
        { id: '30', label: 'ec IB3' }
      ],
      cancerOtrasOpciones: [
        { id: '8', label: 'ec IC o 1 ' },
        { id: '9', label: 'ec IS o 1s' },
        { id: '23', label: 'ec IVC o 4c' },
        { id: '24', label: 'ec 4S (para neuroblastoma)' },
        { id: '25', label: 'ec V o 5' },
        { id: '31', label: 'ec IC1' },
        { id: '32', label: 'ec IC2' },
        { id: '33', label: 'ec IC3' },
        { id: '34', label: 'ec IIIA1' },
        { id: '35', label: 'ec IIIA2' }
      ],
      v31: [
        { id: '1', label: 'Sí se le realizó ' },
        { id: '2', label: 'No se le realizó' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica porque es cáncer de mama in situ ' },
        { id: '98', label: 'No Aplica (no es cáncer de mama)' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos' }
      ],
      v33: [
        { id: '1', label: ' +++ (positivo)' },
        { id: '2', label: ' ++ (equivoco o indeterminado) ' },
        { id: '3', label: ' + (negativo)' },
        { id: '4', label: ' cero ó (negativo)' },
        { id: '97', label: ' No Aplica porque es cáncer de mama in situ.' },
        { id: '98', label: ' No Aplica (no es cáncer de mama) o marcó la variable 31 con la opción 2.' },
        { id: '99', label: ' Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v34: [
        { id: '1', label: 'A' },
        { id: '2', label: 'B' },
        { id: '3', label: 'C' },
        { id: '4', label: 'D' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (no es cáncer colorrectal)' },
        { id: '99', label: 'Es cáncer colorrectal pero no hay información en la historia clínica acerca de esta estadificación' }
      ],
      v36: [
        { id: '5', label: 'Estadio IA' },
        { id: '6', label: 'Estadio IB' },
        { id: '7', label: 'Estadio IIA' },
        { id: '8', label: 'Estadio IIB' },
        { id: '9', label: 'Estadio IIIA' },
        { id: '10', label: 'Estadio IIIB' },
        { id: '11', label: 'Estadio IVA' },
        { id: '12', label: 'Estadio IVB' },
        { id: '13', label: 'Extranodal cualquier estadio ' },
        { id: '14', label: 'Primario SNC' },
        { id: '15', label: 'Primario Mediastinal' },
        { id: '16', label: 'Primario de otros órganos' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (porque es un tumor diferente a los enunciados)' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      v37: [
        { id: '11', label: 'Gleason ≤ 6: ≤ 3+3' },
        { id: '12', label: 'Gleason 7: 3+4' },
        { id: '13', label: 'Gleason 7: 4+3' },
        { id: '14', label: 'Gleason 8: 4+4 o 3+5 o 5+3' },
        { id: '15', label: 'Gleason 9 o 10: 4+5 o 5+4 o 5+5' },
        { id: '97', label: 'Es cáncer de próstata, pero no hay información acerca de esta estadificación porque el diagnóstico fue clínico.' },
        { id: '98', label: 'No es cáncer de próstata.' },
        { id: '99', label: 'Es cáncer de próstata, pero no hay información en la historia clínica acerca de esta clasificación a pesar de que fue diagnóstico histopatológico.' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v38: [
        { id: 'Clasificación de riesgo en linfoma no Hodgkin', label: 'Clasificación de riesgo en linfoma no Hodgkin' },
        { id: 'Clasificación de riesgo en linfoma de Hodgkin', label: 'Clasificación de riesgo en linfoma de Hodgkin' },
        { id: 'Clasificación del riesgo en adultos (LLA y LMA)', label: 'Clasificación del riesgo en adultos (LLA y LMA)' },
        { id: 'Clasificación del riesgo en Pediatría (LLA y LMA)', label: 'Clasificación del riesgo en Pediatría (LLA y LMA)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (no es leucemia ni linfoma)' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      clasificacionRiesgoNoHodgkin: [
        { id: '1', label: 'Bajo Riesgo' },
        { id: '2', label: 'Riesgo intermedio bajo ' },
        { id: '3', label: 'Intermedio' },
        { id: '4', label: 'Riesgo intermedio alto' },
        { id: '5', label: 'Riesgo alto' }
      ],
      clasificacionRiesgoHodgkin: [
        { id: '1', label: 'Bajo Riesgo' },
        { id: '5', label: 'Riesgo alto' }
      ],
      riesgosAdultoLla: [
        { id: '1', label: 'Riesgo estándar, bajo ' },
        { id: '3', label: 'Riesgo intermedio' },
        { id: '5', label: 'Riesgo alto' }
      ],
      riesgosPediatraLla: [
        { id: '1', label: 'Riesgo estándar, favorable ' },
        { id: '3', label: 'Riesgo intermedio' },
        { id: '5', label: 'Riesgo alto, desfavorable' }
      ],
      v40: [
        { id: '1', label: 'Curación' },
        { id: '2', label: 'Paliación (intención paliativa) exclusivamente.' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      v41: [
        { id: '1', label: 'Observación previa a tratamiento (manejo expectante o casos en los que ya tienen orden médica de tratamiento, pero no alcanzó a ser administrado, dado que está cercano a la fecha del corte) ' },
        { id: '2', label: 'Ofrecer tratamiento curativo (quimioterapia, hormonoterapia, radioterapia, cirugía, terapia biológica) o paliativo dirigido al cáncer inicial o por recaída' },
        { id: '3', label: 'Observación o seguimiento oncológico luego de tratamiento inicial (incluye tratamientos médicos para enfermedad general -no oncológica- y métodos diagnósticos de seguimiento)' },
        { id: '4', label: '1 y 2 únicamente' },
        { id: '5', label: '2 y 3 únicamente' },
        { id: '6', label: '1, 2 y 3' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '99', label: 'No hay intervención en el periodo (abandono de terapia, alta oncológica ó alta voluntaria)' }
      ],
      v42: [
        { id: '1', label: 'Sí' },
        { id: '2', label: 'No' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      v44: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '99', label: 'No Aplica (no hay antecedente o concurrencia de otro cáncer primario)' }
      ],
      v45: [
        { id: '1', label: 'Sí recibió' },
        { id: '98', label: 'No Aplica (no está indicada esta terapia, verifique que en las variables 46 a 73 se registra No Aplica)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v46: [
        { id: '0', label: 'Es cáncer hematolinfático con los siguientes códigos de clasificación diagnóstica CIE 10 ( C835, C910, C920, C924 y C925) y en la variable 45 respondió la opción 98' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (es sólido o es cáncer diferente a los enunciados en las fases)' }
      ],
      v46_1: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      v46_2: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      v46_3: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      v46_4: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      v46_5: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      v46_6: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      v46_7: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      v46_8: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      v48: [
        { id: '1', label: 'Neoadyuvancia (manejo inicial prequirúrgico)' },
        { id: '2', label: 'Tratamiento inicial curativo sin cirugía sugerida (por ejemplo, sería una opción frecuente en caso de leucemias o linfomas, u otros cánceres a quienes no se les hizo cirugía)' },
        { id: '3', label: 'Adyuvancia (manejo inicial postquirúrgico) ' },
        { id: '11', label: 'Manejo de recaída' },
        { id: '12', label: 'Manejo de enfermedad metastásica' },
        { id: '13', label: 'Manejo paliativo (sin manejo de recaída ni enfermedad metastásica)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v53_1: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v53_2: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v53_3: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v53_4: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v53_5: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v53_6: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v53_7: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v53_8: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v53_9: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v54: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (No recibió medicamentos diferentes a los enunciados en las variables 53.1 a la 53.9 y en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v55: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (No recibió medicamento diferente a los enunciados en las variables 53.1 a la 53.9 y en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v56: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (No recibió medicamento diferente a los enunciados en las variables 53.1 a la 53.9 y en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      v57: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió' },
        { id: '98', label: 'No Aplica (no tuvo ningún esquema de quimioterapia, en variable 45 seleccionó 98= No aplica)' }
      ],
      v59: [
        { id: '1', label: 'Finalizado, esquema completo según medicamentos programados ' },
        { id: '2', label: 'Finalizado, esquema incompleto pero finalizado por algún motivo' },
        { id: '3', label: 'No finalizado, esquema incompleto, pero aún bajo tratamiento (ejemplo: hormonoterapia o esquema no finalizado)' },
        { id: '98', label: 'No Aplica (no tuvo ningún esquema de terapia sistémica y en la variable 45 seleccionó la opción 98)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte' }
      ],
      v60: [
        { id: '1', label: 'Toxicidad de uno o más medicamentos' },
        { id: '2', label: 'Otros motivos médicos' },
        { id: '3', label: 'Muerte' },
        { id: '4', label: 'Cambio de EAPB' },
        { id: '5', label: 'Decisión del usuario, abandonó la terapia ' },
        { id: '6', label: 'No hay disponibilidad de medicamentos ' },
        { id: '7', label: 'Otros motivos administrativos' },
        { id: '8', label: 'Otras causas no contempladas ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v61: [
        { id: '1', label: 'Neoadyuvancia (manejo inicial prequirúrgico)' },
        { id: '2', label: 'Tratamiento inicial curativo sin cirugía sugerida (por ejemplo, sería una opción frecuente en caso de leucemias o linfomas, u otros cánceres a quienes no se les hizo cirugía)' },
        { id: '3', label: 'Adyuvancia (manejo inicial postquirúrgico) ' },
        { id: '11', label: 'Manejo de progresión o recaída' },
        { id: '12', label: 'Manejo de enfermedad metastásica ' },
        { id: '13', label: 'Cambio por toxicidad' },
        { id: '14', label: 'Manejo paliativo (sin manejo de recaída ni enfermedad metastásica)' },
        { id: '97', label: 'Solo recibió un esquema de quimioterapia en este periodo y en la variable 45 seleccionó la opción 1. (verifique que las variables 62 a 73 registren No Aplica)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      medicamentoAntineplasicoReporte: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      v66_2: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      v66_3: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      v66_4: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      v66_5: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      v66_6: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      v66_7: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      v66_8: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      v66_9: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      v67: [
        { id: '97', label: 'No Aplica (No recibió medicamento diferente a los enunciados en las variables 66.1 a la 66.9 y en la variable 61 seleccionó una opción <=14)' },
        { id: '98', label: 'No Aplica (no tuvo este último esquema o en la variable 61 seleccionó la opción 97 ó 98)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v68: [
        { id: '97', label: 'No Aplica (No recibió medicamento diferente a los enunciados en las variables 66.1 a la 66.9 y en la variable 61 seleccionó una opción <=14)' },
        { id: '98', label: 'No Aplica (no tuvo este último esquema o en la variable 61 seleccionó la opción 97 ó 98)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v69: [
        { id: '97', label: 'No Aplica (No recibió medicamento diferente a los enunciados en las variables 66.1 a la 66.9 y en la variable 61 seleccionó una opción <=14)' },
        { id: '98', label: 'No Aplica (no tuvo este último esquema o en la variable 61 seleccionó la opción 97 ó 98)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v70: [
        { id: '1', label: 'Si recibió' },
        { id: '2', label: 'No recibió' },
        { id: '98', label: 'No Aplica (no tuvo ningún esquema de quimioterapia, en variable 45 seleccionó 98= No aplica)' }
      ],
      v72: [
        { id: '1', label: 'Finalizado, esquema completo según medicamentos programados' },
        { id: '2', label: 'Finalizado, esquema incompleto pero finalizado por algún motivo' },
        { id: '3', label: 'No finalizado, esquema incompleto, pero aún bajo tratamiento (ejemplo: hormonoterapia o esquema no finalizado)' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v73: [
        { id: '1', label: 'Toxicidad de uno o más medicamentos ' },
        { id: '2', label: 'Otros motivos médicos' },
        { id: '3', label: 'Muerte' },
        { id: '4', label: 'Cambio de EPS' },
        { id: '5', label: 'Decisión del usuario, abandonó la terapia ' },
        { id: '6', label: 'No hay disponibilidad de medicamentos ' },
        { id: '7', label: 'Otros motivos administrativos' },
        { id: '8', label: 'Otras causas no contempladas ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v74: [
        { id: '1', label: 'Si fue sometido al menos a una cirugía durante este periodo ' },
        { id: '2', label: 'No recibió cirugía' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      codigoIpsPrimerCirugia: [
        { id: '96', label: 'Cirugía fuera del país ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      codigoPrimerCirugiaReporte: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v79: [
        { id: '1', label: 'Parte del manejo inicial para el cáncer (tratamiento inicial curativo)' },
        { id: '5', label: 'Manejo de recaída' },
        { id: '6', label: 'Manejo de enfermedad metastásica.' },
        { id: '98', label: 'No Aplica (seleccionó la opción 2 en la variable 74).' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v84: [
        { id: '1', label: 'Parte del manejo inicial para el cáncer (tratamiento inicial curativo)' },
        { id: '5', label: 'Manejo de recaída' },
        { id: '6', label: 'Manejo de enfermedad metastásica.' },
        { id: '98', label: 'No Aplica (seleccionó la opción 2 en la variable 74).' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v85: [
        { id: '1', label: 'Vivo' },
        { id: '2', label: 'Fallecido' },
        { id: '98', label: 'No Aplica (seleccionó la opción 2 en la variable 74)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v86: [
        { id: '1', label: 'Si recibió algún tipo de radioterapia' },
        { id: '98', label: 'No aplica (verifique que en las variables 87 a 105 se registre no Aplica)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v89: [
        { id: '1', label: 'Neoadyuvancia (manejo inicial prequirúrgico)' },
        { id: '2', label: 'Tratamiento inicial curativo sin cirugía sugerida (por ejemplo, solo algunos cánceres que se curan con radioterapia exclusiva)' },
        { id: '3', label: 'Adyuvancia (manejo inicial postquirúrgico) ' },
        { id: '11', label: 'Manejo de recaída' },
        { id: '12', label: 'Manejo de enfermedad metastásica' },
        { id: '13', label: 'Manejo paliativo (sin manejo de recaída ni enfermedad metastásica) ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v90: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      cdIps1Radiote: [
        { id: '96', label: 'Radioterapia fuera del país ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte' }
      ],
      cdIps2Radiote: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte' }
      ],
      v104: [
        { id: '1', label: 'Finalizado, dosis completa de radioterapia prescrita' },
        { id: '2', label: 'Finalizado, dosis incompleta pero finalizada por algún motivo ' },
        { id: '3', label: 'No finalizado, esquema incompleto, pero aún bajo tratamiento' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v95: [
        { id: '1', label: 'Finalizado, dosis completa de radioterapia prescrita' },
        { id: '2', label: 'Finalizado, dosis incompleta pero finalizada por algún motivo ' },
        { id: '3', label: 'No finalizado, esquema incompleto, pero aún bajo tratamiento' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v96: [
        { id: '1', label: 'Toxicidad' },
        { id: '2', label: 'Otros motivos médicos ' },
        { id: '3', label: 'Muerte' },
        { id: '4', label: 'Cambio de EPS' },
        { id: '5', label: 'Decisión del usuario, abandono la terapia. ' },
        { id: '6', label: 'Otros motivos administrativos' },
        { id: '7', label: 'Otras causas no contempladas ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v98: [
        { id: '1', label: 'Neoadyuvancia (manejo inicial prequirúrgico)' },
        { id: '2', label: 'Tratamiento inicial curativo sin cirugía sugerida (por ejemplo, solo algunos cánceres que se curan con radioterapia exclusiva)' },
        { id: '3', label: 'Adyuvancia (manejo inicial postquirúrgico) ' },
        { id: '11', label: 'Manejo de recaída' },
        { id: '12', label: 'Manejo de enfermedad metastásica' },
        { id: '13', label: 'Manejo paliativo (sin manejo de recaída ni enfermedad metastásica) ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v99: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte' }
      ],
      v105: [
        { id: '1', label: 'Toxicidad' },
        { id: '2', label: 'Otros motivos médicos ' },
        { id: '3', label: 'Muerte' },
        { id: '4', label: 'Cambio de EPS' },
        { id: '5', label: 'Decisión del usuario, abandono la terapia. ' },
        { id: '6', label: 'Otros motivos administrativos' },
        { id: '7', label: 'Otras causas no contempladas ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v106: [
        { id: '1', label: 'Sí recibió' },
        { id: '98', label: 'No Aplica (verifique que en las variables 107 a 110 se registra No Aplica)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v107: [
        { id: '1', label: 'Autólogo' },
        { id: '2', label: 'Alogénico de donante idéntico relacionado' },
        { id: '3', label: 'Alogénico de donante no idéntico relacionado ' },
        { id: '4', label: 'Alogénico de donante idéntico no relacionado' },
        { id: '5', label: 'Alogénico de donante no idéntico no relacionado ' },
        { id: '6', label: 'Alogénico de cordón umbilical idéntico familiar' },
        { id: '7', label: 'Alogénico de cordón umbilical idéntico no familiar ' },
        { id: '8', label: 'Alogénico de cordón no idéntico no familiar' },
        { id: '9', label: 'Alogénico de dos unidades de cordón' },
        { id: '98', label: 'No Aplica (respondió 2 o 98 en la pregunta anterior)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v108: [
        { id: '95', label: 'Recaída' },
        { id: '96', label: 'Refractariedad' },
        { id: '97', label: 'Esquema de consolidación ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      cdIpsTrasplante: [
        { id: '96', label: 'Trasplante fuera del país ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte' }
      ],
      v111: [
        { id: '1', label: 'Sí recibió cirugía' },
        { id: '98', label: 'No Aplica (No recibió este tipo de cirugía, verifique que en las variables 112 y 113 se registra No Aplica)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      cdIpsReconstruir: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte' }
      ],
      v114: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v114_1: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v114_2: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      uCuidadoPaliativoOtra: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v114_6: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      paliativoTrabajoSocial: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      paliativoOtro: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      cdIpsPaliativoActual: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v117: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No, se ordenó, pero está pendiente' },
        { id: '98', label: 'No aplica, no se ha ordenado valoración por psiquiatría' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      cdIpsPrimerPsiquiatria: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v120: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      cdIpsNutricion: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v123: [
        { id: '1', label: 'Si recibió soporte nutricional enteral' },
        { id: '2', label: 'Si recibió soporte nutricional, parenteral' },
        { id: '3', label: 'Si recibió soporte nutricional enteral y parenteral (opciones:1 y 2) ' },
        { id: '4', label: 'No recibió soporte nutricional' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v124: [
        { id: '1', label: 'Si, Terapia física' },
        { id: '2', label: 'Si, terapia de lenguaje ' },
        { id: '3', label: 'Si, Terapia ocupacional ' },
        { id: '5', label: '1 y 2' },
        { id: '6', label: '1 y 3' },
        { id: '7', label: '2 y 3' },
        { id: '8', label: '1, 2 y 3' },
        { id: '98', label: 'No aplica, no se han ordenado terapias.' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v125: [
        { id: '1', label: 'Radioterapia' },
        { id: '2', label: 'Terapia sistémica (incluye quimioterapia, anticuerpos monoclonales, terapia biológica, terapia hormonal)' },
        { id: '3', label: 'Cirugía (reporte solo cuando el procedimiento se haya realizado a partir del 1 de noviembre de 2021)' },
        { id: '4', label: '1 y 2' },
        { id: '5', label: '1 y 3' },
        { id: '6', label: '2 y 3' },
        { id: '7', label: 'Manejo expectante pretratamiento' },
        { id: '8', label: 'En seguimiento, luego de tratamiento durante el periodo' },
        { id: '9', label: 'Antecedente de cáncer (no recibió ningún tratamiento, pero tiene como mínimo una consulta de seguimiento relacionada con el cáncer dentro del periodo)' },
        { id: '10', label: ', 2 y 3' },
        { id: '11', label: 'Manejo de cuidado paliativo o terapia complementaria.' },
        { id: '98', label: 'No Aplica (paciente se encuentra fallecido, abandonó el tratamiento, alta voluntaria o se encuentra desafiliado)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v126: [
        { id: '1', label: 'Pseudoprogresión (aplica solo para inmunoterapia) ' },
        { id: '2', label: 'Progresión o recaída' },
        { id: '3', label: 'Respuesta parcial' },
        { id: '4', label: 'Respuesta completa' },
        { id: '5', label: 'Enfermedad estable' },
        { id: '6', label: 'Abandono del tratamiento o alta voluntaria' },
        { id: '7', label: 'Paciente en seguimiento por antecedente de cáncer' },
        { id: '8', label: 'Pendiente iniciar el tratamiento luego del diagnóstico (fue definido por especialista o aún esta pendiente por valoración oncológica inicial, en la cual se defina el tratamiento)' },
        { id: '97', label: 'No aplicable en este periodo, aún bajo tratamiento inicial' },
        { id: '98', label: 'No aplicable en este periodo, aún bajo tratamiento de recaída' },
        { id: '99', label: 'No aplica, el paciente se encuentra fallecido, o se encuentra desafiliado' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v127: [
        { id: '1', label: 'Vivo' },
        { id: '2', label: 'Fallecido' },
        { id: '99', label: 'Desconocido' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v128: [
        { id: '0', label: 'no presenta novedad con respecto al reporte anterior (vivo y afiliado a la entidad). ' },
        { id: '1', label: 'usuario ingresó a la EAPB en el periodo de reporte y ya tenía el diagnóstico de cáncer' },
        { id: '2', label: 'usuario con un nuevo diagnóstico de cáncer entre el 2 de enero de 2021 y el 1 de enero de 2022 ' },
        { id: '3', label: 'usuario con diagnóstico antiguo de cáncer que no había sido incluido en el reporte anterior' },
        { id: '4', label: 'usuario que falleció' },
        { id: '5', label: 'usuario que se desafilió' },
        { id: '6', label: 'usuario para eliminar de la base de datos por corrección luego de auditoría interna o de CAC ' },
        { id: '7', label: 'usuario que firmó alta voluntaria del tratamiento' },
        { id: '8', label: 'usuario con cambio de tipo o número de ID' },
        { id: '9', label: 'usuario abandonó el tratamiento y es imposible de ubicar' },
        { id: '10', label: 'usuario no incluido en reporte anterior y está fallecido en el momento del reporte actual ' },
        { id: '11', label: 'trasladado de IPS' },
        { id: '12', label: 'usuario que es notificado con dos o más cánceres en este periodo' },
        { id: '13', label: 'suario no incluido en reporte anterior y está desafiliado en el momento del reporte actual ' },
        { id: '14', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '15 ', label: 'Comunidad migrante de la República de Venezuela' },
        { id: '16', label: 'Usuario con cambio de CIE-10: aplica para casos con cánceres secundarios o no especificados en los que se define el primario o se especifica el tipo de cáncer.' },
        { id: '17', label: 'Usuario identificado por cruce con fuentes externas, con diagnóstico de cáncer, no confirmado o no gestionado por la EAPB' },
        { id: '18', label: 'Usuario identificado por cruce con fuentes externas, con diagnóstico descartado por la EAPB 19= Paciente trasladado que fue glosado en periodo anterior, que no fue gestionado por la entidad en el periodo actual' }
      ],
      v129: [
        { id: '1', label: 'Usuario que está en manejo inicial curativo' },
        { id: '3', label: 'Usuario que finalizó tratamiento inicial y está en seguimiento ' },
        { id: '8', label: 'Abandono de tratamiento' },
        { id: '9', label: 'Usuario firmó alta voluntaria' },
        { id: '10', label: 'Usuario en manejo expectante antes de tratamiento' },
        { id: '11', label: 'Usuario que está en manejo paliativo (incluye manejo de metástasis o de recaída) ' },
        { id: '12', label: 'Usuario fallecido o desafiliado' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v132: [
        { id: '1', label: 'Muerte asociada al cáncer' },
        { id: '2', label: 'Muerte por patología clínica no relacionada al cáncer ' },
        { id: '3', label: 'Muerte por causa externa' },
        { id: '4', label: 'Muerte por causa no conocida' },
        { id: '98', label: 'No Aplica, usuario vivo o se desconoce su estado vital' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      v81: [
        { id: '1', label: 'Complementar tratamiento quirúrgico del cáncer no asociado a complicaciones de la primera cirugía' },
        { id: '2', label: 'Complicaciones debida a la primera cirugía o siguientes' },
        { id: '3', label: 'Complicaciones por otras condiciones médicas no relacionadas a la cirugía (por ejemplo, comorbilidad)' },
        { id: '5', label: '1 y 3' },
        { id: '6', label: '2 y 3' },
        { id: '98', label: 'No Aplica (sólo hubo una intervención en este periodo o no hubo cirugías en este periodo)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ]
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
    filtrarPorV (objeto) {
      var nuevoObjeto = {}
      for (const key in objeto) {
        if (key[0] === 'v') {
          nuevoObjeto[key] = objeto[key]
        }
      }
      return nuevoObjeto
    },
    saveRegister () {
      var _this = this
      console.log(_this.data)
      console.log(this.filtrarPorV(_this.data))
      var cualquiera = JSON.stringify(this.filtrarPorV(_this.data))
      console.log(cualquiera)

      if (this.data.v18 !== '1800-01-01' && this.data.v18 !== '1846-01-01') {
        if (Date.parse(this.data.v18) < Date.parse(this.patient.field_json.birthdate)) {
          this.errors.push('La V18 Debe ser mayor o igual a la V7 Fecha de Nacimiento')
          this.error = true
        }
      }
      if (this.data.v18 === '1800-01-01' && this.data.v128 !== '2') {
        this.errors.push('La V128 es <> 2 revisar la  V18 Debe ser = 1800-01-01')
        this.error = true
      }
      if (Date.parse(this.data.v18) >= Date.parse('2021-01-01') && this.data.v128 !== '0' && this.data.v128 !== '3') {
        this.errors.push('La V128 ES< >0 y <> 3  revisar La V18 Debe ser >= 2021-01-01')
        this.error = true
      }
      if (this.data.v18 === '1846-01-01' && this.data.v128 !== '14') {
        this.errors.push('la V128 es = 14 revisar La V18 Debe ser= 1846-01-01')
        this.error = true
      }
      if (this.data.v18 === '1846-01-01' && Date.parse(this.data.v26) > Date.parse('2021-01-01')) {
        this.errors.push('La v26 es < 2021-01-01  revisar La V18 Debe ser= 1800-01-01')
        this.error = true
      }
      if (this.data.v18 === '1846-01-01' && Date.parse(this.data.v30) > Date.parse('2021-01-01')) {
        this.errors.push('La V26 es < 2021-01-01 y la V30 es < 2021-01-01 revisar La V18 Debe ser= 1800-01-01')
        this.error = true
      }
      if (Date.parse(this.data.v18) < Date.parse('2016-01-01') && Date.parse(this.data.v20) > Date.parse('2016-01-01')) {
        this.errors.push(' la V20 es < 2016-01-01  y la v19 es < 2016-01-01 revisar  La V18  Debe ser < 2016-01-01')
        this.error = true
      }
      if (Date.parse(this.data.v18) < Date.parse('2016-01-01') && Date.parse(this.data.v19) > Date.parse('2016-01-01')) {
        this.errors.push('La V19 es < 2016-01-01  revisar La V18 Debe ser <2016-01-01')
        this.error = true
      }

      if (Date.parse(this.data.v18) >= Date.parse('2020-01-01') && typeof this.data.v128 !== 'undefined' && parseInt(this.data.v128.id) <= 5) {
        this.errors.push('La V21 es >= 5 revisar La V18 Debe ser >= 2020-01-01')
        this.error = true
      }

      if (Date.parse(this.data.v18) >= Date.parse('1846-01-01') && Date.parse(this.data.v18) >= Date.parse(this.data.clasificacionRiesgoCan)) {
        this.errors.push('La V18Fecha de diagnóstico del cáncer reportado actualmente Debe ser <=1846-01-01')
        this.error = true
      }
      // 19

      if (this.data.v19 !== '1800-01-01' && this.data.v19 !== '1846-01-01') {
        if (Date.parse(this.data.v19) <= Date.parse(this.patient.field_json.birthdate)) {
          this.errors.push('La V19 Debe ser mayor o igual a la V7 Fecha de Nacimiento')
          this.error = true
        }
        if (Date.parse(this.data.v19) >= Date.parse(this.data.v134)) {
          this.errors.push('La V19 Deber ser menor o igual a la V134 Fecha de Corte')
          this.error = true
        }
        if (Date.parse(this.data.v19) >= Date.parse(this.data.v18)) {
          this.errors.push('La V19 DEBE SER <= V18Fecha de diagnóstico del cáncer reportado actualmente')
          this.error = true
        }
      }
      if (this.data.v19 === '1846-01-01' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es = 154 revisar La V19 DEBE SER = 1846-01-01')
        this.error = true
      }
      if (this.data.v19 === '1846-01-01' && typeof this.data.v128 !== 'undefined' && this.data.v128.id === '2') {
        this.errors.push('La V128 es <> 2 revisar La V19 DEBE SER = 1800-01-01')
        this.error = true
      }
      // 20

      if (this.data.v20 !== '1800-01-01' && this.data.v20 !== '1846-01-01') {
        if (Date.parse(this.data.v20) <= Date.parse(this.patient.field_json.birthdate)) {
          this.errors.push('la V20 DEBE SER >= V7Fecha de nacimiento')
          this.error = true
        }
        if (Date.parse(this.data.v20) >= Date.parse(this.data.v18)) {
          this.errors.push('la V20 DEBE SER <= V18Fecha de diagnóstico del cáncer reportado actualmente')
          this.error = true
        }
      }
      if (this.data.v20 === '1846-01-01' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar La V20 debe ser = 1846-01-01')
        this.error = true
      }
      // 21

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar La debe ser 55')
        this.error = true
      }
      if (typeof this.data.v21 !== 'undefined' && parseInt(this.data.v21.id) >= 10 && this.data.v21.id !== '99' && this.data.v21.id !== '55') {
        this.errors.push('La V21Tipo de estudio con el que se realizó el diagnóstico de cáncer debe ser entre 1 y 10 o = 99 o = 55')
        this.error = true
      }
      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '7' && parseInt(this.data.v22.id) >= 6) {
        this.errors.push('La V22 es <= 6  revisar La V21 deber ser 7')
        this.error = true
      }
      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '7' && this.data.v24 === '1845-01-01') {
        this.errors.push('La V24 es 1845-01-01 reviar La V21 deber ser 7')
        this.error = true
      }
      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '5' && typeof this.data.v22 !== 'undefined' && this.data.v22.id !== '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V22 debe ser 98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '5' && this.data.v23 === '1845-01-01') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V23 debe ser <> 1845-01-01')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '5' && this.data.v24 === '1845-01-01') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V22 debe ser<> 1845-01-01')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '5' && this.data.v27.id === '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V27debe ser  <> 98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '5' && this.data.v28.id === '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V28 debe ser <>98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '6' && typeof this.data.v22 !== 'undefined' && this.data.v22.id !== '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V22 debe ser 98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '6' && this.data.v23 === '1845-01-01') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V23 debe ser <> 1845-01-01')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '6' && this.data.v24 === '1845-01-01') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V22 debe ser<> 1845-01-01')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '6' && typeof this.data.v27 !== 'undefined' && this.data.v27.id === '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V27debe ser  <> 98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '6' && typeof this.data.v28 !== 'undefined' && this.data.v28.id === '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V28 debe ser <>98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '8' && typeof this.data.v22 !== 'undefined' && this.data.v22.id !== '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V22 debe ser 98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '8' && this.data.v23 === '1845-01-01') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V23 debe ser <> 1845-01-01')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '8' && this.data.v24 === '1845-01-01') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V22 debe ser<> 1845-01-01')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '8' && typeof this.data.v27 !== 'undefined' && this.data.v27.id === '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V27debe ser  <> 98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '8' && typeof this.data.v28 !== 'undefined' && this.data.v28.id === '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V28 debe ser <>98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '9' && typeof this.data.v22 !== 'undefined' && this.data.v22.id !== '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V22 debe ser 98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '9' && this.data.v23 === '1845-01-01') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V23 debe ser <> 1845-01-01')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '9' && this.data.v24 === '1845-01-01') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V22 debe ser<> 1845-01-01')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '9' && typeof this.data.v27 !== 'undefined' && this.data.v27.id === '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V27debe ser  <> 98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '9' && typeof this.data.v28 !== 'undefined' && this.data.v28.id === '98') {
        this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V28 debe ser <>98')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '10') {
        if (typeof this.data.v22 !== 'undefined' && this.data.v22.id !== '98') {
          this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V22 debe ser 98')
          this.error = true
        }
        if (this.data.v23 !== '1845-01-01') {
          this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V23 debe ser <> 1845-01-01')
          this.error = true
        }
        if (this.data.v24 !== '1845-01-01') {
          this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V22 debe ser<> 1845-01-01')
          this.error = true
        }
        if (typeof this.data.v27 !== 'undefined' && this.data.v27.id === '98') {
          this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V27debe ser  <> 98')
          this.error = true
        }
        if (typeof this.data.v28 !== 'undefined' && this.data.v28.id === '98') {
          this.errors.push('La V21 es =  5,6,8,9,o 10  revisar la V28 debe ser <>98')
          this.error = true
        }
      }
      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '7' && Date.parse(this.data.v18) >= Date.parse(this.data.v26)) {
        this.errors.push('La V26 es > V18  revisar la V21 debe ser <> 7')
        this.error = true
      }

      if (typeof this.data.v21 !== 'undefined' && this.data.v21.id === '99' && typeof this.data.v128 !== 'undefined' && this.data.v128.id === '2') {
        this.errors.push('La V128 es <> 2 revisar La V21 deber ser 99')
        this.error = true
      }

      // v22
      if (typeof this.data.v22 !== 'undefined' && this.data.v22.id === '99' && typeof this.data.v128 !== 'undefined' && this.data.v128.id === '2') {
        this.errors.push('La V 128 es <> 2 revisar La V22 deber 99')
        this.error = true
      }
      if (typeof this.data.v22 !== 'undefined' && (parseInt(this.data.v22.id) < 1 || parseInt(this.data.v22.id) > 6 || this.data.v22.id !== '98' || this.data.v22.id !== '99' || this.data.v22.id !== '55')) {
        this.errors.push('La V22 debe estar entre 1 y 6 o = 98,98 o 55')
        this.error = true
      }
      if (typeof this.data.v22 !== 'undefined' && this.data.v22.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar La V22 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v22 !== 'undefined' && this.data.v22.id === '55' && typeof this.data.v21 !== 'undefined' && this.data.v21.id === '7') {
        this.errors.push('La V128 es 14 revisar La V22 debe ser 55')
        this.error = true
      }

      // v23
      if (this.data.v23 !== '1800-01-01' && this.data.v23 !== '1845-01-01' && this.data.v23 !== '1846-01-01') {
        if (Date.parse(this.data.v23) <= Date.parse(this.patient.field_json.birthdate)) {
          this.errors.push('La V23 DEBE SER >= V7Fecha de nacimiento')
          this.error = true
        }

        if (Date.parse(this.data.v23) >= Date.parse(this.data.v24)) {
          this.errors.push('La V23 DEBE SER <= V24')
          this.error = true
        }
      }

      if (this.data.v23 === '1846-01-01' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es = 14 y la V24 es 1846-01-01 revisar La V23 debe ser = 1846-01-01')
        this.error = true
      }

      if (this.data.v23 === '1846-01-01' && this.data.v24 !== '1846-01-01') {
        this.errors.push('La V24 es 1846-01-01 revisar La V23 debe ser = 1846-01-01')
        this.error = true
      }

      if (this.data.v23 === '1845-01-01' && typeof this.data.v21 !== 'undefined' && this.data.v21.id !== '7') {
        this.errors.push('La V21 es 7 revisar La V23 debe ser = 1845-01-01')
        this.error = true
      }

      if (this.data.v23 > '2021-01-01' && typeof this.data.v128 !== 'undefined' && this.data.v128.id === '0') {
        this.errors.push('LaV128 es <> 0 revisar  V23 debe ser > 2021-01-01')
        this.error = true
      }

      if (Date.parse(this.data.v23) > Date.parse('1846-07-07') && Date.parse(this.data.v23) <= Date.parse(this.data.v19)) {
        this.errors.push('La V23 DEBE SER >= V19')
        this.error = true
      }

      if (this.data.v24 !== '1800-01-01' && this.data.v24 !== '1845-01-01' && this.data.v24 !== '1846-01-01') {
        if (Date.parse(this.data.v24) < Date.parse(this.patient.field_json.birthdate)) {
          this.errors.push('La V24 >= V7Fecha de nacimiento')
          this.error = true
        }
        if (Date.parse(this.data.v24) < Date.parse('1800-01-01')) {
          this.errors.push('La V24 debe ser mayor o igual a 1800-01-01')
          this.error = true
        }
        if (Date.parse(this.data.v24) > Date.parse('1845-01-01')) {
          this.errors.push('La V24 debe ser menor o igual a 1845-01-01')
          this.error = true
        }
      }

      if (this.data.v24 === '1845-01-01') {
        if (typeof this.data.v21 !== 'undefined' && typeof this.data.v21 !== 'undefined' && this.data.v21.id !== '7') {
          this.errors.push('La V21 debe ser 7, revisar la V24 debe ser 1845-01-01')
          this.error = true
        }
      }

      if (this.data.v24 === '1846-01-01') {
        if (typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
          this.errors.push('La V128 debe ser 14, revisar la V24 debe ser 1846-01-01')
          this.error = true
        }
      }

      if (this.data.v24 === '1845-01-01') {
        if (this.data.v23 !== '1845-01-01') {
          this.errors.push('La V23 debe ser 1845-01-01 revisar, La V24 debe ser 1845-01-01')
          this.error = true
        }
      }

      if (this.data.v24 === '1800-01-01') {
        if (typeof this.data.v128 !== 'undefined' && this.data.v128.id === '2') {
          this.errors.push('La V128 es <> 2 revisar, La V24 debe ser 1800-01-01')
          this.error = true
        }
      }

      if (Date.parse(this.data.v24) > Date.parse('2021-01-01')) {
        if (typeof this.data.v128 !== 'undefined' && this.data.v128.id === '0') {
          this.errors.push('La V128 es <> 0 revisar, La V24 debe ser > 2021-01-01')
          this.error = true
        }
      }

      if (Date.parse(this.data.v24) > Date.parse('1846-01-01')) {
        if (Date.parse(this.data.v23) >= Date.parse(this.data.v24)) {
          this.errors.push('La V23 debe ser  <= V24')
          this.error = true
        }
      }

      // 25
      if (typeof this.data.v25 !== 'undefined' && this.data.v25.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14 revisar la V25 debe ser = 55')
        this.error = true
      }
      // 26
      if (this.data.v26 === '1800-01-01' && this.data.v26 === '1846-01-01') {
        if (Date.parse(this.data.v26) <= Date.parse(this.patient.field_json.birthdate)) {
          this.errors.push('La V26 DEBE SER >= V7Fecha de nacimiento')
          this.error = true
        }

        if (Date.parse(this.data.v26) >= Date.parse(this.data.v134)) {
          this.errors.push('La V26 DEBE SER <= V134FechadeCorte')
          this.error = true
        }
      }
      // 27
      if (typeof this.data.v27 !== 'undefined' && this.data.v27.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('Cuando V27 sea = 55 Entonces V128Novedad ADMINISTRATIVA respecto al reporte anterior DEBE SER = 14')
        this.error = true
      }

      if (typeof this.data.v27 !== 'undefined' && this.data.v27.id === '98' && typeof this.data.v27 !== 'undefined' && this.data.v27.id === '99' && typeof this.data.v27 !== 'undefined' && this.data.v27.id === '55') {
        if (typeof this.data.v27 !== 'undefined' && (parseInt(this.data.v27.id) <= 1 || parseInt(this.data.v27.id) >= 24)) {
          this.errors.push('La V27Histología del tumor en muestra de biopsia o quirúrgica debe estar entre 1 y 24 o =98,99 o 55')
          this.error = true
        }
      }

      if (typeof this.data.v27 !== 'undefined' && this.data.v27.id === '98' && typeof this.data.v21 !== 'undefined' && this.data.v21.id !== '7') {
        this.errors.push('La V21 es = 7 revisar La V27 debe ser = 98')
        this.error = true
      }

      if (typeof this.data.v27 !== 'undefined' && this.data.v27.id === '98' && this.data.v23 !== '1845-01-01') {
        this.errors.push('La V23 es = 1845-01-01 revisaR La V27 debe ser = 98')
        this.error = true
      }
      if (typeof this.data.v27 !== 'undefined' && this.data.v27.id === '98' && this.data.v24 !== '1845-01-01') {
        this.errors.push('La V24 es = 1845-01-01 revisaR La V27 debe ser = 98')
        this.error = true
      }

      if (typeof this.data.v27 !== 'undefined' && this.data.v27.id === '23') {
        if (!(this.data.v17 === 'C430' || this.data.v17 === 'C431' || this.data.v17 === 'C432' || this.data.v17 === 'C433' || this.data.v17 === 'C434' || this.data.v17 === 'C435' || this.data.v17 === 'C436' || this.data.v17 === 'C437' || this.data.v17 === 'C438' || this.data.v17 === 'C439' || this.data.v17 === 'D030' || this.data.v17 === 'D031' || this.data.v17 === 'D032' || this.data.v17 === 'D033' || this.data.v17 === 'D034' || this.data.v17 === 'D035' || this.data.v17 === 'D036' || this.data.v17 === 'D037' || this.data.v17 === 'D038' || this.data.v17 === 'D039')) {
          this.errors.push('La V27 es = 23 revisar la V17 debe   estar entre C430 a C439 o D030 a D039')
          this.error = true
        }
      }

      // 28
      if (typeof this.data.v28 !== 'undefined' && this.data.v28.id === '55') {
        if (typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
          this.errors.push('La V128 es = 14 revsiar la V28 debe der = 55')
          this.error = true
        }
      }

      if (typeof this.data.v28 !== 'undefined' && (parseInt(this.data.v28.id) <= 1 || parseInt(this.data.v28.id) >= 4 || this.data.v28.id !== '55' || this.data.v28.id !== '94' || this.data.v28.id !== '95' || this.data.v28.id !== '98' || this.data.v28.id !== '99')) {
        this.errors.push('la V28Grado de diferenciación del tumor sólido maligno según la biopsia o informe de primera cirugía debe estar entre 1 y 4 o = 55,94,95,98,o 99')
        this.error = true
      }
      if (typeof this.data.v28 !== 'undefined' && this.data.v28.id === '98' && typeof this.data.v21 !== 'undefined' && this.data.v21.id !== '7') {
        this.errors.push('la V21 es = 7 revisar la V28 debe ser 98')
        this.error = true
      }

      if (typeof this.data.v28 !== 'undefined' && this.data.v28.id === '95' && typeof this.data.v29 !== 'undefined' && this.data.v29.id !== '98') {
        this.errors.push('la V29 es = 98 revisar la V28 debe ser 95')
        this.error = true
      }
      if (typeof this.data.v28 !== 'undefined' && this.data.V28.id === '95') {
        if (typeof this.data.v27 !== 'undefined' && this.data.V27.id !== '20' && typeof this.data.v27 !== 'undefined' && this.data.V27.id !== '55' && typeof this.data.v27 !== 'undefined' && this.data.V27.id !== '98' && typeof this.data.v27 !== 'undefined' && this.data.V27.id !== '99') {
          this.errors.push('la V27 es 20,55,98 o 99 revisar la V28 debe ser 95')
          this.error = true
        }
      }

      if (typeof this.data.v28 !== 'undefined' && this.data.V28.id === '98' && this.data.V23 !== '1845-01-01') {
        this.errors.push('La V23 debe ser 1845-01-01, revisa La V28 debe ser 98')
        this.error = true
      }

      if (typeof this.data.v28 !== 'undefined' && this.data.V28.id === '98' && this.data.V24 !== '1845-01-01') {
        this.errors.push('La V24 debe ser 1845-01-01, revisa La V28 debe ser 98')
        this.error = true
      }

      if (typeof this.data.v28 !== 'undefined' && this.data.v28.id < 5 && this.data.v23 !== '1845-01-01') {
        this.errors.push('La V23 <> 1845-01-01 revisar es La V28 debe ser < 5')
        this.error = true
      }

      if (typeof this.data.v28 !== 'undefined' && this.data.v28.id < 5 && this.data.v24 !== '1845-01-01') {
        this.errors.push('LA V24 es <> 1845-01-01 reviasr La V27 debe ser < 5')
        this.error = true
      }

      if (typeof this.data.v29 !== 'undefined' && (parseInt(this.data.v29.id) <= 0 || parseInt(this.data.v29.id) >= 35)) {
        if (typeof this.data.v29 !== 'undefined' && this.data.v29.id !== '55') {
          this.errors.push('la V29Primera estadificación basada en TNM FIGO debe estar entre 0 y 35 o = 55,98,o 99')
          this.error = true
        }
        if (typeof this.data.v29 !== 'undefined' && this.data.v29.id !== '98') {
          this.errors.push('la V29Primera estadificación basada en TNM FIGO debe estar entre 0 y 35 o = 55,98,o 99')
          this.error = true
        }
        if (typeof this.data.v29 !== 'undefined' && this.data.v29.id !== '99') {
          this.errors.push('la V29Primera estadificación basada en TNM FIGO debe estar entre 0 y 35 o = 55,98,o 99')
          this.error = true
        }
      }
      // 30

      if (Date.parse(this.data.v30) < Date.parse(this.data.v18)) {
        this.errors.push('La V30 DEBE SER >= V18')
        this.error = true
      }

      if (this.data.v30 !== '1845-01-01' && this.data.v30 !== '1800-01-01' && this.data.v30 !== '1846-01-01') {
        if (Date.parse(this.data.v30) <= Date.parse(this.data.v18)) {
          this.errors.push('La V30 DEBE SER >= V18')
          this.error = true
        }
        if (Date.parse(this.data.v30) >= Date.parse(this.data.v134)) {
          this.errors.push('la V30 DEBE SER <= V134')
          this.error = true
        }
      }

      if (this.data.v30 === '1845-01-01' && typeof this.data.v29 !== 'undefined' && this.data.v29.id !== '98') {
        this.errors.push('La V29 es = 98 revisar La V30 debe ser = 1845-01-01')
        this.error = true
      }

      if (this.data.v30 === '1846-01-01' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar La V30 debe ser = 1846-01-01')
        this.error = true
      }

      if (Date.parse(this.data.v30) > Date.parse('2021-01-01') && typeof this.data.v30 !== 'undefined' && this.data.v30.id < this.data.v18.id) {
        this.errors.push('La V30 es > 2021-01-01 revisar la V18  debe ser < v30')
        this.error = true
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '1' && this.data.v32 === '1845-01-01') {
        this.errors.push('La V32 es <> 1845-01-01 revisar La V31 debe ser 1')
        this.error = true
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '1' && typeof this.data.v33 !== 'undefined' && this.data.v33.id >= '4') {
        this.errors.push('La V33 es <= 4, = 99 o 55 revisar La V31 deb ser = 1')
        this.error = true
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '1' && typeof this.data.v33 !== 'undefined' && this.data.v33.id !== '99') {
        this.errors.push('La V33 es <= 4, = 99 o 55 revisar La V31 deb ser = 1')
        this.error = true
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '1' && typeof this.data.v33 !== 'undefined' && this.data.v33.id !== '55') {
        this.errors.push('La V33 es <= 4, = 99 o 55 revisar La V31 deb ser = 1')
        this.error = true
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '98' && this.data.v32 !== '1845-01-01') {
        this.errors.push('La V32 es = 1845-01-01 revisar La V31 debe ser = 98')
        this.error = true
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '98' && typeof this.data.v33 !== 'undefined' && this.data.v33.id !== '98') {
        this.errors.push('La V33 es = 98 revisar La V31 debe ser  98')
        this.error = true
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '97') {
        const message = 'La V31 es 97 revisar La V17 debe ser D050,D051,D057 o D059'
        if (this.data.v17 !== 'D050' && this.data.v17 !== 'D051' && this.data.v17 !== 'D057' && this.data.v17 !== 'D059') {
          this.errors.push(message)
          this.error = true
        }
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '97') {
        const message = 'La V31 es 97 revisar la V29 Primera estadificación basada en TNM FIGO debe ser 0'
        if (typeof this.data.v29 !== 'undefined' && this.data.v29.id !== '0') {
          this.errors.push(message)
          this.error = true
        }
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id !== '55' && typeof this.data.v31 !== 'undefined' && this.data.v31.id !== '97' && typeof this.data.v31 !== 'undefined' && this.data.v31.id !== '98' && typeof this.data.v31 !== 'undefined' && this.data.v31.id !== '99') {
        if (typeof this.data.v31 !== 'undefined' && (parseInt(this.data.v31.id) < 1)) {
          this.errors.push('La V31Realizó prueba HER2 antes del inicio del tratamiento debe estar entre 1 y 2 o = 55,97,98 o 99')
          this.error = true
        }

        if (typeof this.data.v31 !== 'undefined' && (parseInt(this.data.v31.id) > 2)) {
          this.errors.push('La V31Realizó prueba HER2 antes del inicio del tratamiento debe estar entre 1 y 2 o = 55,97,98 o 99')
          this.error = true
        }
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '1') {
        if (this.data.v17 !== 'C500' || this.data.v17 !== 'C501' || this.data.v17 !== 'C502' || this.data.v17 !== 'C503' || this.data.v17 !== 'C504' || this.data.v17 !== 'C505' || this.data.v17 !== 'C506' || this.data.v17 !== 'C508' || this.data.v17 !== 'C509' || this.data.v17 !== 'D050' || this.data.v17 !== 'D051' || this.data.v17 !== 'D057' || this.data.v17 !== 'D059') {
          this.errors.push('La V31 es = 1, 2, 99, 98  revisar V17')
          this.error = true
        }
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '2') {
        if (this.data.v17 !== 'C500' && this.data.v17 !== 'C501' && this.data.v17 !== 'C502' && this.data.v17 !== 'C503' && this.data.v17 !== 'C504' && this.data.v17 !== 'C505' && this.data.v17 !== 'C506' && this.data.v17 !== 'C508' && this.data.v17 !== 'C509') {
          this.errors.push('La V31 es = 1, 2, 99, 98  revisar V17')
          this.error = true
        }
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '99') {
        if (this.data.v17 !== 'C500' && this.data.v17 !== 'C501' && this.data.v17 !== 'C502' && this.data.v17 !== 'C503' && this.data.v17 !== 'C504' && this.data.v17 !== 'C505' && this.data.v17 !== 'C506' && this.data.v17 !== 'C508' && this.data.v17 !== 'C509') {
          this.errors.push('La V31 es = 1, 2, 99, 98  revisar V17')
          this.error = true
        }
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '98') {
        if (this.data.v17 === 'C500' || this.data.v17 === 'C501' || this.data.v17 === 'C502' || this.data.v17 === 'C503' || this.data.v17 === 'C504' || this.data.v17 === 'C505' || this.data.v17 === 'C506' || this.data.v17 === 'C508' || this.data.v17 === 'C509' || this.data.v17 === 'D050' || this.data.v17 === 'D051' || this.data.v17 === 'D057' || this.data.v17 === 'D059') {
          this.errors.push('La V31 es = 1, 2, 99, 98  revisar V17')
          this.error = true
        }
      }

      if (typeof this.data.v31 !== 'undefined' && this.data.v31.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14, revisar La V31 debe ser 55')
        this.error = true
      }

      if (Date.parse(this.data.v32) > Date.parse('1846-01-01') &&
          this.data.v17 !== 'C500' &&
          this.data.v17 !== 'D059' &&
          this.data.v17 !== 'C509' &&
          this.data.v17 !== 'C502' &&
          this.data.v17 !== 'C503' &&
          this.data.v17 !== 'C504' &&
          this.data.v17 !== 'C505' &&
          this.data.v17 !== 'C506' &&
          this.data.v17 !== 'C508' &&
          this.data.v17 !== 'C501'
      ) {
        this.errors.push('Cuando V32 sea mayor que 1846-02-03 Entonces V17 DEBE SER igual a C500, D059, C509, C502, C503, C504, C505, C506, C508 ó C501')
        this.error = true
      }

      if (Date.parse(this.data.v32) > Date.parse('1846-01-01') && this.data.v33.id >= '4') {
        this.errors.push('LA V33 es <= 4 revisar La V32 deb ser >1846-01-01')
        this.error = true
      }

      if (this.data.v32 === '1840-01-01' && this.data.v17 !== 'D050') {
        this.errors.push('La V32 es =  1840-01-01 Revisar V17 debe ser D050, D051, D057 o D059')
        this.error = true
      }

      if (this.data.v32 === '1840-01-01' && this.data.v17 !== 'D051') {
        this.errors.push('La V32 es =  1840-01-01 Revisar V17 debe ser D050, D051, D057 o D059')
        this.error = true
      }

      if (this.data.v32 === '1840-01-01' && this.data.v17 !== 'D057') {
        this.errors.push('La V32 es =  1840-01-01 Revisar V17 debe ser D050, D051, D057 o D059')
        this.error = true
      }

      if (this.data.v32 === '1840-01-01' && this.data.v17 !== 'D059') {
        this.errors.push('La V32 es =  1840-01-01 Revisar V17 debe ser D050, D051, D057 o D059')
        this.error = true
      }

      if (this.data.v32 === '1840-01-01') {
        if (typeof this.data.v33 !== 'undefined' && this.data.v33.id !== '97') {
          this.errors.push('La V33 es = 97 revisar La V32 debe ser 1840-01-01')
          this.error = true
        }
        if (typeof this.data.v29 !== 'undefined' && this.data.v29.id !== '0') {
          this.errors.push('La V32 es= 1840-01-01 revisar V29 debe ser 0')
          this.error = true
        }
      }

      if (this.data.v32 === '1845-01-01' && typeof this.data.v31 !== 'undefined' && this.data.v31.id !== '2') {
        this.errors.push('LA V32 es = 1845-01-01 revisar la V31 deb ser = 98 o 2')
        this.error = true
      }

      if (this.data.v32 === '1845-01-01' && typeof this.data.v31 !== 'undefined' && this.data.v31.id !== '98') {
        this.errors.push('LA V32 es = 1845-01-01 revisar la V31 deb ser = 98 o 2')
        this.error = true
      }

      if (this.data.v32 === '1846-01-01') {
        if (typeof this.data.v128 !== 'undefined' && this.data.V128.id !== '14') {
          this.errors.push('La V128 es 14 revisar La V32 debe ser 1846-01-01')
          this.error = true
        }
      }

      if (this.data.v32 === '1800-01-01') {
        if (typeof this.data.v128 !== 'undefined' && this.data.V128.id !== '2') {
          this.errors.push('La V128 es <> 2 revisar La V32 debe ser 1800-01-01')
          this.error = true
        }
      }

      if (Date.parse(this.data.v32) >= Date.parse(this.data.v134)) {
        if (this.data.v32 !== '1800-01-01' || this.data.v32 !== '1845-01-01' || this.data.v32 !== '1840-01-01' || this.data.v32 !== '1846-01-01') {
          this.errors.push('La V32 debe ser < = V134')
          this.error = true
        }
      }

      if (typeof this.data.v33 !== 'undefined' && this.data.v33.id !== '97' && typeof this.data.v33 !== 'undefined' && this.data.v33.id !== '98' && typeof this.data.v33 !== 'undefined' && this.data.v33.id !== '99') {
        if (typeof this.data.v33 !== 'undefined' && (parseInt(this.data.v33.id) < 1 || parseInt(this.data.v33.id) > 4)) {
          this.errors.push('La V33Para cáncer de mama resultado de la primera o única prueba HER2 debe estar entre 1 y 4 o 55,97,98 o 99')
          this.error = true
        }
      }

      if (typeof this.data.v33 !== 'undefined' && this.data.v33.id === '97') {
        if (typeof this.data.v31 !== 'undefined' && this.data.v31.id !== '97') {
          this.errors.push('La V33 es = 97 revisar La V31 debe ser 97')
          this.error = true
        }
        if (this.data.v32 !== '1840-01-01') {
          this.errors.push('La V33 es = 97 revisar La V32 debe ser 1840-01-01')
          this.error = true
        }
        if (this.data.v29 !== '0') {
          this.errors.push('La V33 es = 97 revisar La V29 debe ser 0')
          this.error = true
        }
      }

      if (typeof this.data.v33 !== 'undefined' && this.data.v33.id === '98' && typeof this.data.v31 !== 'undefined' && this.data.v31.id !== '98') {
        this.errors.push('La V33 es = 98 revisar La V31 debe ser 98 o 2')
        this.error = true
      }

      if (typeof this.data.v33 !== 'undefined' && this.data.v33.id === '98' && typeof this.data.v31 !== 'undefined' && this.data.v31.id !== '2') {
        this.errors.push('La V33 es = 98 revisar La V31 debe ser 98 o 2')
        this.error = true
      }
      if (typeof this.data.v33 !== 'undefined' && this.data.v33.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es = 14  revisar La V33 debe ser 55')
        this.error = true
      }

      if (typeof this.data.v33 !== 'undefined' && this.data.v33.id === '97') {
        if (this.data.v17 !== 'D050' && this.data.v17 !== 'D051' && this.data.v17 !== 'D057' && this.data.v17 !== 'D059') {
          this.errors.push('La V33 es =  97 Revisar V17 debe ser D050, D051, D057 o D059')
          this.error = true
        }
      }

      if (typeof this.data.v34 !== 'undefined' && this.data.v34.id === '98') {
        if (this.data.v17 === 'C180' || this.data.v17 === 'C181' || this.data.v17 === 'C182' || this.data.v17 === 'C183' || this.data.v17 === 'C184' || this.data.v17 === 'C185') {
          this.errors.push('La V34 es  98 revisar la V17')
          this.error = true
        }
      }
      if (typeof this.data.v34 !== 'undefined' && this.data.v34.id === '98') {
        if (this.data.v17 === 'C186' || this.data.v17 === 'C187' || this.data.v17 === 'C188' || this.data.v17 === 'C189' || this.data.v17 === 'C19X' || this.data.v17 === 'C20X') {
          this.errors.push('La V34 es  98 revisar la V17')
          this.error = true
        }
      }
      if (typeof this.data.v34 !== 'undefined' && this.data.v34.id === '98') {
        if (this.data.v17 === 'D010' || this.data.v17 === 'D011' || this.data.v17 === 'D012' || this.data.v17 === 'C210' || this.data.v17 === 'C211' || this.data.v17 === 'C212' || this.data.v17 === 'C218' || this.data.v17 === 'D013') {
          this.errors.push('La V34 es  98 revisar la V17')
          this.error = true
        }
      }

      if (typeof this.data.v34 !== 'undefined' && this.data.v34.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('LA V128 es 14 revisar la V34 debe ser 55')
        this.error = true
      }

      if (typeof this.data.v34 !== 'undefined' && (parseInt(this.data.v34.id) > 4)) {
        if (this.data.v35 === '1846-01-01' || this.data.v35 === '1845-01-01') {
          this.errors.push('La V35 es <> 1846-01-01 o  <> 1845-01-01 revisar La V34 debe ser <= 4')
          this.error = true
        }
      }

      if (typeof this.data.v34 !== 'undefined' && this.data.v34.id !== '55' && typeof this.data.v34 !== 'undefined' && this.data.v34.id !== '97' && typeof this.data.v34 !== 'undefined' && this.data.v34.id !== '98' && typeof this.data.v34 !== 'undefined' && this.data.v34.id !== '99') {
        if (typeof this.data.v34 !== 'undefined' && (parseInt(this.data.v34.id) < 1 || parseInt(this.data.v34.id) > 4)) {
          this.errors.push('La V34 Para cáncer colorrectal estadificación de Dukes debe estar entre 1 y 4 o 55,97,98,99')
          this.error = true
        }
      }

      // 35
      if (this.data.v35 !== '1845-01-01' && this.data.v35 !== '1846-01-01') {
        if (Date.parse(this.data.v35) < Date.parse(this.data.v18)) {
          this.errors.push('La V35 DEBE SER >= V18')
          this.error = true
        }

        if (Date.parse(this.data.v35) > Date.parse(this.data.v134)) {
          this.errors.push('La V35 DEBE SER <= V134')
          this.error = true
        }
      }

      if (this.data.v35 === '1845-01-01') {
        if (typeof this.data.v34 !== 'undefined' && this.data.v34.id !== '98' && typeof this.data.v34 !== 'undefined' && this.data.v34.id !== '99') {
          this.errors.push('La V35 es  1845-01-01 revisar la V34 debe ser 98 o 99')
          this.error = true
        }
      }

      if (this.data.v35 === '1846-01-01') {
        if (typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
          this.errors.push('La V128 es = 14 revisar La V35 DEBE SER 1846-01-01')
          this.error = true
        }
        if (typeof this.data.v34 !== 'undefined' && this.data.v34.id !== '55') {
          this.errors.push('La V35 es 1846-01-01 revisar la V34 debe ser  55')
          this.error = true
        }
      }

      if (Date.parse(this.data.v35) > Date.parse('1846-01-01') && Date.parse(this.data.v35) > Date.parse(this.data.v134)) {
        this.errors.push('La V134 debe ser >= La V35')
        this.error = true
      }

      if (Date.parse(this.data.v35) > Date.parse('1846-01-01') && typeof this.data.v22 !== 'undefined' && parseInt(this.data.v34.id) > 4) {
        this.errors.push('La V35 es >  1846-01-01 revisar la V34 debe ser <= 4')
        this.error = true
      }

      // 36
      if (typeof this.data.v36 !== 'undefined' && this.data.v36.id !== '98' && typeof this.data.v36 !== 'undefined' && this.data.v36.id !== '99' && typeof this.data.v36 !== 'undefined' && this.data.v36.id !== '55') {
        if (typeof this.data.v36 !== 'undefined' && parseInt(this.data.v36.id) < 1) {
          this.errors.push('La V36Estadificación clínica en linfoma no Hodgkin (Murphy) y linfoma Hodgkin (Ann Arbor) debe ser  entre >= 1  y 16 o 55,98,99')
          this.error = true
        }
      }

      if (typeof this.data.v36 !== 'undefined' && this.data.v36.id === '99') {
        if (this.data.v17 !== 'C810' || this.data.v17 !== 'C811' || this.data.v17 !== 'C812' || this.data.v17 !== 'C813' || this.data.v17 !== 'C817' || this.data.v17 !== 'C819' || this.data.v17 !== 'C820' || this.data.v17 !== 'C821' || this.data.v17 !== 'C822' || this.data.v17 !== 'C827' || this.data.v17 !== 'C829' || this.data.v17 !== 'C830' || this.data.v17 !== 'C831' || this.data.v17 !== 'C832' || this.data.v17 !== 'C833' || this.data.v17 !== 'C834' || this.data.v17 !== 'C835' || this.data.v17 !== 'C836' || this.data.v17 !== 'C837' || this.data.v17 !== 'C838' || this.data.v17 !== 'C839' || this.data.v17 !== 'C840' || this.data.v17 !== 'C841' || this.data.v17 !== 'C842' || this.data.v17 !== 'C843' || this.data.v17 !== 'C844' || this.data.v17 !== 'C845' || this.data.v17 !== 'C850' || this.data.v17 !== 'C851' || this.data.v17 !== 'C857' || this.data.v17 !== 'C859' || this.data.v17 !== 'C963' || this.data.v17 !== 'C967' || this.data.v17 !== 'C969' || this.data.v17 !== 'C961' || this.data.v17 !== 'C960' || this.data.v17 !== 'C862' || this.data.v17 !== 'C823' || this.data.v17 !== 'C866' || this.data.v17 !== 'C847' || this.data.v17 !== 'C846' || this.data.v17 !== 'C848' || this.data.v17 !== 'C825' || this.data.v17 !== 'C849' || this.data.v17 !== 'C884' || this.data.v17 !== 'C852' || this.data.v17 !== 'C824' || this.data.v17 !== 'C826' || this.data.v17 !== 'C860' || this.data.v17 !== 'C863' || this.data.v17 !== 'C861' || this.data.v17 !== 'C864' || this.data.v17 !== 'C962' || this.data.v17 !== 'C814' || this.data.v17 !== 'C865') {
          this.errors.push('La V36 =  99 o 98  o <16 Revisar la V17')
          this.error = true
        }
      }

      if (typeof this.data.v36 !== 'undefined' && this.data.v36.id <= '16') {
        if (this.data.v17 !== 'C810' || this.data.v17 !== 'C811' || this.data.v17 !== 'C812' || this.data.v17 !== 'C813' || this.data.v17 !== 'C817' || this.data.v17 !== 'C819' || this.data.v17 !== 'C820' || this.data.v17 !== 'C821' || this.data.v17 !== 'C822' || this.data.v17 !== 'C827' || this.data.v17 !== 'C829' || this.data.v17 !== 'C830' || this.data.v17 !== 'C831' || this.data.v17 !== 'C832' || this.data.v17 !== 'C833' || this.data.v17 !== 'C834' || this.data.v17 !== 'C835' || this.data.v17 !== 'C836' || this.data.v17 !== 'C837' || this.data.v17 !== 'C838' || this.data.v17 !== 'C839' || this.data.v17 !== 'C840' || this.data.v17 !== 'C841' || this.data.v17 !== 'C842' || this.data.v17 !== 'C843' || this.data.v17 !== 'C844' || this.data.v17 !== 'C845' || this.data.v17 !== 'C850' || this.data.v17 !== 'C851' || this.data.v17 !== 'C857' || this.data.v17 !== 'C859' || this.data.v17 !== 'C963' || this.data.v17 !== 'C967' || this.data.v17 !== 'C969' || this.data.v17 !== 'C961' || this.data.v17 !== 'C960' || this.data.v17 !== 'C862' || this.data.v17 !== 'C823' || this.data.v17 !== 'C866' || this.data.v17 !== 'C847' || this.data.v17 !== 'C846' || this.data.v17 !== 'C848' || this.data.v17 !== 'C825' || this.data.v17 !== 'C849' || this.data.v17 !== 'C884' || this.data.v17 !== 'C852' || this.data.v17 !== 'C824' || this.data.v17 !== 'C826' || this.data.v17 !== 'C860' || this.data.v17 !== 'C863' || this.data.v17 !== 'C861' || this.data.v17 !== 'C864' || this.data.v17 !== 'C962' || this.data.v17 !== 'C814' || this.data.v17 !== 'C865') {
          this.errors.push('La V36 =  99 o 98  o <16 Revisar la V17')
          this.error = true
        }
      }

      if (typeof this.data.v36 !== 'undefined' && this.data.v36.id === '98') {
        if (this.data.v17 === 'C810' && this.data.v17 === 'C811' && this.data.v17 === 'C812' && this.data.v17 === 'C813' && this.data.v17 === 'C817' && this.data.v17 === 'C819' && this.data.v17 === 'C820' && this.data.v17 === 'C821' && this.data.v17 === 'C822' && this.data.v17 === 'C827' && this.data.v17 === 'C829' && this.data.v17 === 'C830' && this.data.v17 === 'C831' && this.data.v17 === 'C832' && this.data.v17 === 'C833' && this.data.v17 === 'C834' && this.data.v17 === 'C835' && this.data.v17 === 'C836' && this.data.v17 === 'C837' && this.data.v17 === 'C838' && this.data.v17 === 'C839' && this.data.v17 === 'C840' && this.data.v17 === 'C841' && this.data.v17 === 'C842' && this.data.v17 === 'C843' && this.data.v17 === 'C844' && this.data.v17 === 'C845' && this.data.v17 === 'C850' && this.data.v17 === 'C851' && this.data.v17 === 'C857' && this.data.v17 === 'C859' && this.data.v17 === 'C963' && this.data.v17 === 'C967' && this.data.v17 === 'C969' && this.data.v17 === 'C961' && this.data.v17 === 'C960' && this.data.v17 === 'C862' && this.data.v17 === 'C823' && this.data.v17 === 'C866' && this.data.v17 === 'C847' && this.data.v17 === 'C846' && this.data.v17 === 'C848' && this.data.v17 === 'C825' && this.data.v17 === 'C849' && this.data.v17 === 'C884' && this.data.v17 === 'C852' && this.data.v17 === 'C824' && this.data.v17 === 'C826' && this.data.v17 === 'C860' && this.data.v17 === 'C863' && this.data.v17 === 'C861' && this.data.v17 === 'C864' && this.data.v17 === 'C962' && this.data.v17 === 'C814' && this.data.v17 === 'C865') {
          this.errors.push('La V36 =  99 o 98  o <16 Revisar la V17')
          this.error = true
        }
      }

      // 37
      if (typeof this.data.v37 !== 'undefined' && parseInt(this.data.v37.id) > 15 && this.data.v37.id !== '55' && this.data.v37.id !== '97' && this.data.v37.id !== '98' && this.data.v37.id !== '99') {
        this.errors.push('La V37Gleason debe ser <= 15 o 55,97,98,99')
        this.error = true
      }

      if (typeof this.data.v22 !== 'undefined' && parseInt(this.data.v37.id) <= 15 && this.data.v17 !== 'C61X' && this.data.v17 !== 'D075') {
        this.errors.push('El valor de la  V37 es <= 15 revisar  la V17  debe ser C61X o D075')
        this.error = true
      }

      if (typeof this.data.v37 !== 'undefined' && this.data.v37.id === '99' && this.data.v17 !== 'C61X' && this.data.v17 !== 'D075') {
        this.errors.push('El valor de la  V37 es = 99 revisar  la V17  debe ser C61X o D075')
        this.error = true
      }

      if (typeof this.data.v37 !== 'undefined' && this.data.v37.id === '98' && this.data.v17 === 'C61X' && this.data.v17 === 'D075') {
        this.errors.push('El valor de la  V37 es = 99 revisar  la V17  debe ser C61X o D075')
        this.error = true
      }

      if (typeof this.data.v37 !== 'undefined' && this.data.v37.id === '97' && this.data.v17 !== 'C61X' && this.data.v17 !== 'D075') {
        this.errors.push('El valor de la  V37 es = 99 revisar  la V17  debe ser C61X o D075')
        this.error = true
      }

      if (this.data.v37 === '97' && typeof this.data.v21 !== 'undefined' && this.data.v21.id !== '7') {
        this.errors.push('La V37 es 97 revisar la V21 debe ser 7')
        this.error = true
      }

      if (this.data.v37 === '97' && this.data.v24 !== '1845-01-01') {
        this.errors.push('La V37 es 97 revisar la V24 debe ser 1845-01-01')
        this.error = true
      }

      // 38
      if (typeof this.data.v38 !== 'undefined' && this.data.v38.id === '98' && this.data.v39 !== '1845-01-01') {
        this.errors.push('La fecha de V39 debe ser 1845-01-01')
        this.error = true
      }

      if (typeof this.data.v38 !== 'undefined' && this.data.v38.id !== '55' && typeof this.data.v38 !== 'undefined' && this.data.v38.id !== '98' && typeof this.data.v38 !== 'undefined' && this.data.v38.id !== '99') {
        this.errors.push('V38 debe ser igual a 55, 98 ó 99')
        this.error = true
      }

      if (this.data.v38.id !== '55' && this.data.v38.id !== '98' && this.data.v38.id !== '99') {
        if (typeof this.data.v38 !== 'undefined' && (parseInt(this.data.v38.id) < 1 || parseInt(this.data.v38.id) > 5)) {
          this.errors.push('La V38Clasificación de riesgo leucemias o linfomas y sólidos pediátricos Debe ser >=1 o <= 5 o,55,98,99')
          this.error = true
        }
      }

      if (typeof this.data.v38 !== 'undefined' && parseInt(this.data.v38.id) <= 5 && typeof this.data.v28 !== 'undefined' && this.data.v28.id !== '95') {
        this.errors.push('La V38 es <= 5 Entonces V28 DEBE SER = 95')
        this.error = true
      }

      if (typeof this.data.v38 !== 'undefined' && this.data.v38.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar La V38  Debe ser 55')
        this.error = true
      }

      if (typeof this.data.v38 !== 'undefined' && this.data.v38.id === '98' && (this.data.v17 !== 'C810' || this.data.v17 !== 'C811' || this.data.v17 !== 'C812' || this.data.v17 !== 'C813' || this.data.v17 !== 'C817' || this.data.v17 !== 'C819' || this.data.v17 !== 'C820' || this.data.v17 !== 'C821' || this.data.v17 !== 'C822' || this.data.v17 !== 'C827' || this.data.v17 !== 'C829')) {
        this.errors.push('La V38 es  98 revisar la V17')
        this.error = true
      }

      if (typeof this.data.v38 !== 'undefined' && this.data.v38.id === '98') {
        if (this.data.v17 === 'C810' || this.data.v17 === 'C811' || this.data.v17 === 'C812' || this.data.v17 === 'C813' || this.data.v17 === 'C817' || this.data.v17 === 'C819' || this.data.v17 === 'C820' || this.data.v17 === 'C821' || this.data.v17 === 'C822' || this.data.v17 === 'C827' || this.data.v17 === 'C829' || this.data.v17 === 'C830' || this.data.v17 === 'C831' || this.data.v17 === 'C832' || this.data.v17 === 'C833' || this.data.v17 === 'C834' || this.data.v17 === 'C835' || this.data.v17 === 'C836' || this.data.v17 === 'C837' || this.data.v17 === 'C838' || this.data.v17 === 'C839' || this.data.v17 === 'C840' || this.data.v17 === 'C841' || this.data.v17 === 'C842' || this.data.v17 === 'C843' || this.data.v17 === 'C844' || this.data.v17 === 'C845' || this.data.v17 === 'C850' || this.data.v17 === 'C851' || this.data.v17 === 'C857' || this.data.v17 === 'C859' || this.data.v17 === 'C963' || this.data.v17 === 'C967' || this.data.v17 === 'C969' || this.data.v17 === 'C960' || this.data.v17 === 'C961' || this.data.v17 === 'C962' || this.data.v17 === 'C862' || this.data.v17 === 'C823' || this.data.v17 === 'C866' || this.data.v17 === 'C847' || this.data.v17 === 'C846' || this.data.v17 === 'C848' || this.data.v17 === 'C825' || this.data.v17 === 'C849' || this.data.v17 === 'C884' || this.data.v17 === 'C852' || this.data.v17 === 'C824' || this.data.v17 === 'C826' || this.data.v17 === 'C860' || this.data.v17 === 'C863' || this.data.v17 === 'C861' || this.data.v17 === 'C864' || this.data.v17 === 'C814' || this.data.v17 === 'C865' || this.data.v17 === 'C910' || this.data.v17 === 'C920' || this.data.v17 === 'C924' || this.data.v17 === 'C925' || this.data.v17 === 'C930' || this.data.v17 === 'C940' || this.data.v17 === 'C942' || this.data.v17 === 'C918' || this.data.v17 === 'C926' || this.data.v17 === 'C928' || this.data.v17 === 'C933') {
          this.errors.push('La V38 es  98 revisar la V17')
          this.error = true
        }
      }

      // 39

      if (Date.parse(this.data.v39) < Date.parse('1800-01-01') && Date.parse(this.data.v39) > Date.parse('1845-01-01') && Date.parse(this.data.v39) > Date.parse('1846-01-01')) {
        if (Date.parse(this.data.v39) < Date.parse(this.data.v18)) {
          this.errors.push('La V39 DEBE SER >= V18')
          this.error = true
        }

        // validacion para V39 DEBE SER <= V134
        if (Date.parse(this.data.v39) > Date.parse(this.data.v134)) {
          this.errors.push('La V39 DEBE SER <= V134')
          this.error = true
        }
      }

      if (Date.parse(this.data.v39) === Date.parse('1846-01-01') && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar la V39 debe ser 1846-01-01')
        this.error = true
      }

      if (Date.parse(this.data.v39) === Date.parse('1845-01-01') && this.data.v38.id !== '98') {
        this.errors.push('La V39 es 1845-01-01 revisar la V38 debe ser 98')
        this.error = true
      }

      if (Date.parse(this.data.v39) > Date.parse('1846-01-01') && Date.parse(this.data.v20) > Date.parse(this.data.v39)) {
        this.errors.push('La V39 es >1846-01-01 revisar la V20 debe ser <= V39')
        this.error = true
      }

      if (Date.parse(this.data.v39) > Date.parse(('1846-01-01') && typeof this.data.v38 !== 'undefined' && parseInt(this.data.v38.id) > 13)) {
        this.errors.push('La V39 es >1846-01-01 revisar la V38 debe ser <= 13')
        this.error = true
      }
      if (typeof this.data.v40 !== 'undefined' && this.data.v40.id === '2') {
        if (typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '98' && typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '11' && typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '12') {
          this.errors.push('La V48 es 98,11,12o 13 revisar la V40 debe ser 2')
          this.error = true
        }
      }

      if (typeof this.data.v40 !== 'undefined' && this.data.v40.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar la V40 debe ser 55')
        this.error = true
      }

      if (this.data.v41 === '1' && this.data.v126 !== '8') {
        this.errors.push('La V126  = 8  y V45, V74,V86,V106, V111,V114 son <> 1 revisar la V41 debe ser 1')
        this.error = true
      }

      if (this.data.v41 === '1' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
        this.errors.push('La V45  es <> 1 revisar la V41 debe ser 1')
        this.error = true
      }

      if (this.data.v41 === '1' && typeof this.data.v74 !== 'undefined' && this.data.v74.id !== '1') {
        this.errors.push('La V74  es <> 1 revisar la V41 debe ser 1')
        this.error = true
      }

      if (this.data.v41 === '1' && this.data.v86 !== '1') {
        this.errors.push('La V86  es <> 1 revisar la V41 debe ser 1')
        this.error = true
      }

      if (this.data.v41 === '1' && this.data.v106 === '1') {
        this.errors.push('La V106 es <> 1 revisar la V41 debe ser 1')
        this.error = true
      }

      if (this.data.v41 === '1' && this.data.v111 === '1') {
        this.errors.push('La V111 es <> 1 revisar la V41 debe ser 1')
        this.error = true
      }

      if (this.data.v41 === '1' && this.data.v114 === '1') {
        this.errors.push('La V114 es <> 1 revisar la V41 debe ser 1')
        this.error = true
      }

      if (this.data.v41 === '2' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
        this.errors.push('La V45 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '2' && typeof this.data.v74 !== 'undefined' && this.data.v74.id !== '1') {
        this.errors.push('La V74 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '2' && this.data.v86 !== '1') {
        this.errors.push('La V86 es = 1  revisar la V41 debe ser 2')
        this.error = true
      }

      if (this.data.v41 === '2' && this.data.v106 !== '1') {
        this.errors.push('La V106 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '2' && this.data.v111 !== '1') {
        this.errors.push('La V111 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '2' && this.data.v114 !== '1') {
        this.errors.push('La V114 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '4' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
        this.errors.push('La V45 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '4' && typeof this.data.v74 !== 'undefined' && this.data.v74.id !== '1') {
        this.errors.push('La V74 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '4' && this.data.v86 !== '1') {
        this.errors.push('La V86 es = 1  revisar la V41 debe ser 2')
        this.error = true
      }

      if (this.data.v41 === '4' && this.data.v106 !== '1') {
        this.errors.push('La V106 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '4' && this.data.v111 !== '1') {
        this.errors.push('La V111 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '4' && this.data.v114 !== '1') {
        this.errors.push('La V114 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '5' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
        this.errors.push('La V45 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '5' && typeof this.data.v74 !== 'undefined' && this.data.v74.id !== '1') {
        this.errors.push('La V74 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '5' && this.data.v86 !== '1') {
        this.errors.push('La V86 es = 1  revisar la V41 debe ser 2')
        this.error = true
      }

      if (this.data.v41 === '5' && this.data.v106 !== '1') {
        this.errors.push('La V106 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '5' && this.data.v111 !== '1') {
        this.errors.push('La V111 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '5' && this.data.v114 !== '1') {
        this.errors.push('La V114 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }
      // a
      if (this.data.v41 === '6' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
        this.errors.push('La V45 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '6' && typeof this.data.v74 !== 'undefined' && this.data.v74.id !== '1') {
        this.errors.push('La V74 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '6' && this.data.v86 !== '1') {
        this.errors.push('La V86 es = 1  revisar la V41 debe ser 2')
        this.error = true
      }

      if (this.data.v41 === '6' && this.data.v106 !== '1') {
        this.errors.push('La V106 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '6' && this.data.v111 !== '1') {
        this.errors.push('La V111 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '6' && this.data.v114 !== '1') {
        this.errors.push('La V114 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }
      //
      if (this.data.v41 === '3' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '14') {
        this.errors.push('La V45 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '3' && typeof this.data.v74 !== 'undefined' && this.data.v74.id !== '2') {
        this.errors.push('La V74 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '3' && this.data.v86 !== '98') {
        this.errors.push('La V86 es = 1  revisar la V41 debe ser 2')
        this.error = true
      }

      if (this.data.v41 === '3' && this.data.v106 !== '1') {
        this.errors.push('La V106 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '3' && this.data.v111 !== '98') {
        this.errors.push('La V111 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '3' && this.data.v114 !== '2') {
        this.errors.push('La V114 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }
      //
      if (this.data.v41 === '99' && this.data.v45.id !== '1') {
        this.errors.push('La V45 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '99' && this.data.v74.id !== '1') {
        this.errors.push('La V74 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '99' && this.data.v86 !== '1') {
        this.errors.push('La V86 es = 1  revisar la V41 debe ser 2')
        this.error = true
      }

      if (this.data.v41 === '99' && this.data.v106 !== '1') {
        this.errors.push('La V106 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '99' && this.data.v111 !== '1') {
        this.errors.push('La V111 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }

      if (this.data.v41 === '99' && this.data.v114 !== '1') {
        this.errors.push('La V114 es = 1  revisar la V41 debe ser 2,4,5 o 6')
        this.error = true
      }
      // 42
      if (typeof this.data.v42 !== 'undefined' && this.data.v42.id === '55' && typeof this.data.v43 !== 'undefined' && this.data.v43 !== '1846-01-01') {
        this.errors.push('La V43 es 1846-01-01 revisar la V42 deb ser 55')
        this.error = true
      }

      if (typeof this.data.v42 !== 'undefined' && this.data.v42.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar la V42 deb ser 55')
        this.error = true
      }

      if (typeof this.data.v42 !== 'undefined' && this.data.v42.id === '1' && typeof this.data.v44 !== 'undefined' && this.data.v44.id === '99') {
        this.errors.push('La V44 es <> 99 revisar la V42 debe ser 1')
        this.error = true
      }

      if (typeof this.data.v42 !== 'undefined' && this.data.v42.id === '1' && this.data.v43 !== '1845-01-01') {
        this.errors.push('La V43 es <> 1845-01-01 revisar la V42 debe ser 1')
        this.error = true
      }

      if (typeof this.data.v42 !== 'undefined' && this.data.v42.id === '2' && this.data.v43 !== '1845-01-01') {
        this.errors.push('La V43 es = 1845-01-01, revisar la V42 debe ser 2')
        this.error = true
      }

      if (typeof this.data.v42 !== 'undefined' && this.data.v42.id === '99' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '2') {
        this.errors.push('La V128 es <> 2 revisar la V42 debe ser 99')
        this.error = true
      }

      if (this.data.v42.id === '99' && this.data.v43 !== '1800-01-01') {
        this.errors.push('La V43 es 1800-01-01 revisar la V42 debe ser 99')
        this.error = true
      }

      if (this.data.v43 !== '1800-01-01' && this.data.v43 !== '1845-01-01' && this.data.v43 !== '1846-01-01') {
        if (Date.parse(this.data.v43) < Date.parse(this.patient.field_json.birthdate)) {
          this.errors.push('La V43 DEBE SER >= V18')
          this.error = true
        }

        if (Date.parse(this.data.v43) > Date.parse(this.data.v134)) {
          this.errors.push('La V43 DEBE SER <= V134')
          this.error = true
        }
      }

      if (this.data.v43 === '1846-01-01' && this.data.v128 !== '14') {
        this.errors.push('La V128 es 14 revisar la V43 debe ser 1846-01-01')
        this.error = true
      }

      if (this.data.v43 === '1845-01-01' && this.data.v42 !== '2') {
        this.errors.push('La V43 es 1845-01-01 revisar la V42 debe ser 2')
        this.error = true
      }

      // 44
      if (typeof this.data.v44 !== 'undefined' && this.data.v44.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar la V44 debe ser 55')
        this.error = true
      }
      // 45
      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '55' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '98') {
        this.errors.push('La V45 debe ser 1,55, o 98')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '1' && this.data.v47 > '55') {
        this.errors.push('La V47 es < 55 revisar la V45 debe ser = 1')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '1' && this.data.v48 > '13') {
        this.errors.push('La V48 es <= 13 revisar la V45 debe ser = 1')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '1' && this.data.v49 < Date.parse('1846-01-01')) {
        this.errors.push('La V49 es >= 1846-01-01 revisar la V45 debe ser = 1')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '1' && typeof this.data.v50 !== 'undefined' && parseInt(this.data.v50) > 5) {
        this.errors.push('La V50 es <=5 revisar la V45 debe ser = 1')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '1' && this.data.v51 !== '98') {
        this.errors.push('La V51 es <>98 revisar la V45 debe ser = 1')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '1' && typeof this.data.v53_1 !== 'undefined' && parseInt(this.data.v53_1) < 98) {
        this.errors.push('La V53.1 es >98 revisar la V45 debe ser = 1')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '1') {
        if (typeof this.data.v57 !== 'undefined' && parseInt(this.data.v57.id) > 2) {
          this.errors.push('La V57 es < = 2 revisar la V45 debe ser = 1')
          this.error = true
        }
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '1') {
        if (this.data.v58 !== '1845-01-01') {
          this.errors.push('La V58 es <> 1845-01-01 revisar la V45 debe ser = 1')
          this.error = true
        }
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '1') {
        if (typeof this.data.v61 !== 'undefined' && parseInt(this.data.v61.id) > 97) {
          this.errors.push('La V61 es <= 97 revisar la V45 debe ser = 1')
          this.error = true
        }
      }
      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar la V45 debe ser 55')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && typeof this.data.v53_1 !== 'undefined' && this.data.v53_1.id !== '98') {
        this.errors.push('La V53.1 es 98, revisar la V45 debe ser 55')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && typeof this.data.v66_1 !== 'undefined' && this.data.v66_1.id !== '98') {
        this.errors.push('La V66.1 es 98, revisar la V45 debe ser 55')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && this.data.v47 !== '98') {
        this.errors.push('La V47 es 98, revisar la V45 debe ser 55')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '98') {
        this.errors.push('La V48 es 98  revisar la V45 debe ser 55')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && this.data.v49 !== '1845-01-01') {
        this.errors.push('La V49 es 1845-01-01  revisar la V45 debe ser 55')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && this.data.v50 !== '98') {
        this.errors.push('La V50 es 98  revisar la V45 debe ser 55')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98') {
        if (this.data.v51 !== '98') {
          this.errors.push('La V51 es 98  revisar la V45 debe ser 55')
          this.error = true
        }
        if (this.data.v52 !== '98') {
          this.errors.push('La V52 es 98  revisar la V45 debe ser 55')
          this.error = true
        }
        if (this.data.v53 !== '98') {
          this.errors.push('La V53 es 98  revisar la V45 debe ser 55')
          this.error = true
        }
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98') {
        if (typeof this.data.v57 !== 'undefined' && this.data.v57.id !== '98') {
          this.errors.push('La V57 debe ser 98. Revisar la V45 debe ser 55.')
          this.error = true
        }
        if (this.data.v58 !== '1845-01-01') {
          this.errors.push('La V58 debe ser 1845-01-01. Revisar la V45 debe ser 55.')
          this.error = true
        }
        if (typeof this.data.v59 !== 'undefined' && this.data.v59.id !== '98') {
          this.errors.push('La V59 debe ser 98. Revisar la V45 debe ser 55.')
          this.error = true
        }
      }
      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && typeof this.data.v60 !== 'undefined' && this.data.v60.id !== '98') {
        this.errors.push('La V60 es 98  revisar la V45 debe ser 55')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && typeof this.data.v61 !== 'undefined' && this.data.v61.id !== '98') {
        this.errors.push('La V61  es 98  revisar la V45 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '1' && typeof this.data.v59 !== 'undefined' && this.data.v59.id === '98') {
        this.errors.push('LA V59 es <> 98 revisar la V45 debe ser 1')
        this.error = true
      }
      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && (typeof this.data.v46 !== 'undefined' && this.data.v46.id !== '0' && typeof this.data.v46 !== 'undefined' && this.data.v46.id !== '98')) {
        this.errors.push('La V46 es 0 o 98 revisar la V45 debe ser 98')
        this.error = true
      }
      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && this.data.v62 !== '1845-01-01') {
        this.errors.push('La V62 es 1845-01-01 revisar la V45 debe ser 98')
        this.error = true
      }

      if (typeof this.data.v45 !== 'undefined' && this.data.v45.id === '98' && this.data.v63 !== '98') {
        this.errors.push('La V63 es 98 revisar la V45 debe ser 98')
        this.error = true
      }

      if (typeof this.data.v245 !== 'undefined' && this.data.v45.id === '98' && typeof this.data.v70 !== 'undefined' && this.data.v70.id !== '98') {
        this.errors.push('La V70 es 98 revisar la V45 debe ser 98')
        this.error = true
      }
      if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '98' && (this.data.v17 === 'C835' || this.data.v17 === 'C910' || this.data.v17 === 'C920' || this.data.v17 === 'C924' || this.data.v17 === 'C925')) {
        this.errors.push('La V46 es 98 revisar la V17 debe ser diferente  de C835 y <>C910 y <>920 y <>C924 y <> C925')
        this.error = true
      }
      if (typeof this.data.v46 !== 'undefined' && parseInt(this.data.v46) < 0) {
        this.errors.push('El valor de v46 debe ser mayor o igual a 0')
        this.error = true
      }
      if (typeof this.data.v46 !== 'undefined' && parseInt(this.data.v46) > 10) {
        this.errors.push('El valor de v46 debe ser menor o igual a 10')
        this.error = true
      }
      if (this.data.v46 !== '55' && this.data.v46 !== '98') {
        this.errors.push('El valor de v46 debe ser igual a 55 o 98')
        this.error = true
      }
      if (typeof this.data.v46 !== 'undefined' && parseInt(this.data.v46) <= 10) {
        if (this.data.v17 !== 'C835' && this.data.v17 !== 'C910' && this.data.v17 !== 'C920' && this.data.v17 !== 'C924' && this.data.v17 !== 'C925') {
          this.errors.push('Cuando v46 sea <= 10 Entonces v17 DEBE SER = C835, C910, C920, C924 o C925')
          this.error = true
        }
      }
      if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14 revisar la V46 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '0') {
        if (typeof this.data.v46_1 !== 'undefined' && this.data.v46_1.id !== '97') {
          this.errors.push('La V46.1 es 97 revisar V46 debe ser 98')
          this.error = true
        }
        if (typeof this.data.v46_2 !== 'undefined' && this.data.v46_2.id !== '97') {
          this.errors.push('La V46.2 es 97 revisar V46 debe ser 99')
          this.error = true
        }
        if (typeof this.data.v46_3 !== 'undefined' && this.data.v46_3.id !== '97') {
          this.errors.push('La V46.3 es 97 revisar V46 debe ser 100')
          this.error = true
        }
        if (typeof this.data.v46_4 !== 'undefined' && this.data.v46_4.id !== '97') {
          this.errors.push('La V46.4 es 97 revisar V46 debe ser 101')
          this.error = true
        }
        if (typeof this.data.v46_5 !== 'undefined' && this.data.v46_5.id !== '97') {
          this.errors.push('La V46.5 es 97 revisar V46 debe ser 102')
          this.error = true
        }

        if (typeof this.data.v46_6 !== 'undefined' && this.data.v46_6.id !== '97') {
          this.errors.push('La V46.6 es 97 revisar V46 debe ser 103')
          this.error = true
        }

        if (typeof this.data.v46_7 !== 'undefined' && this.data.v46_7.id !== '97') {
          this.errors.push('La V46.7 es 97 revisar V46 debe ser 104')
          this.error = true
        }

        if (typeof this.data.v46_8 !== 'undefined' && this.data.v46_8.id !== '97') {
          this.errors.push('La V46.8 es 97 revisar V46 debe ser 105')
          this.error = true
        }
      }
      // g
      if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '98') {
        if (typeof this.data.v46_1 !== 'undefined' && this.data.v46_1.id !== '2') {
          this.errors.push('La V46.1 debe ser 2, revisar V46 debe ser 0')
          this.error = true
        }
        if (typeof this.data.v46_2 !== 'undefined' && this.data.v46_2.id !== '2') {
          this.errors.push('La V46.2 debe ser 2, revisar V46 debe ser 0')
          this.error = true
        }
        if (typeof this.data.v46_3 !== 'undefined' && this.data.v46_3.id !== '2') {
          this.errors.push('La V46.3 debe ser 2, revisar V46 debe ser 0')
          this.error = true
        }
        if (typeof this.data.v46_4 !== 'undefined' && this.data.v46_4.id !== '2') {
          this.errors.push('La V46.4 debe ser 2, revisar V46 debe ser 0')
          this.error = true
        }
        if (typeof this.data.v46_5 !== 'undefined' && this.data.v46_5.id !== '2') {
          this.errors.push('La V46.5 es 2 revisar V46 debe ser 0')
          this.error = true
        }

        if (typeof this.data.v46_6 !== 'undefined' && this.data.v46_6.id !== '2') {
          this.errors.push('La V46.6 es 2 revisar V46 debe ser 0')
          this.error = true
        }

        if (typeof this.data.v46_7 !== 'undefined' && this.data.v46_7.id !== '2') {
          this.errors.push('La V46.7 es 2 revisar V46 debe ser 0')
          this.error = true
        }

        if (typeof this.data.v46_8 !== 'undefined' && this.data.v46_8.id !== '2') {
          this.errors.push('La V46.8 es 2 revisar V46 debe ser 0')
          this.error = true
        }
      }
      if (typeof this.data.v46 !== 'undefined' && parseInt(this.data.v46) <= 10) {
        if (typeof this.data.v46_1 !== 'undefined' && this.data.v46_1.id === '97') {
          this.errors.push('La V46.1 es <> 97 revisar la V46 debe ser <= 10')
          this.error = true
        }
        if (typeof this.data.v46_2 !== 'undefined' && this.data.v46_2.id === '97') {
          this.errors.push('La V46.2 es <> 97 revisar la V46 debe ser <= 11')
          this.error = true
        }
        if (typeof this.data.v46_3 !== 'undefined' && this.data.v46_3.id === '97') {
          this.errors.push('La V46.1 es <> 97 revisar la V46 debe ser <= 10')
          this.error = true
        }
        if (typeof this.data.v46_4 !== 'undefined' && this.data.v46_4.id === '97') {
          this.errors.push('La V46.2 es <> 97 revisar la V46 debe ser <= 11')
          this.error = true
        }
        if (typeof this.data.v46_5 !== 'undefined' && this.data.v46_5.id === '97') {
          this.errors.push('La V46.1 es <> 97 revisar la V46 debe ser <= 10')
          this.error = true
        }
        if (typeof this.data.v46_6 !== 'undefined' && this.data.v46_6.id === '97') {
          this.errors.push('La V46.2 es <> 97 revisar la V46 debe ser <= 11')
          this.error = true
        }
        if (typeof this.data.v46_7 !== 'undefined' && this.data.v46_7.id === '97') {
          this.errors.push('La V46.2 es <> 97 revisar la V46 debe ser <= 11')
          this.error = true
        }
        if (typeof this.data.v46_8 !== 'undefined' && this.data.v46_8.id === '97') {
          this.errors.push('La V46.2 es <> 97 revisar la V46 debe ser <= 11')
          this.error = true
        }
      }
      // 46.1
      if (typeof this.data.v46_1 !== 'undefined' && this.data.v46_1.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14, revisa la V46.1 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v46_1 !== 'undefined' && this.data.v46_1.id === '1') {
        if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '98' && typeof this.data.v46 !== 'undefined' && this.data.v46.id === '0') {
          this.errors.push('LA V46.1 es 1 revisar la V46 debe ser <>98 y <>0')
          this.error = true
        }
      }

      if (typeof this.data.v46_1 !== 'undefined' && this.data.v46_1.id === '1') {
        if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
          this.errors.push('La V46.1 es 1 revisar la V45 debe ser 1')
          this.error = true
        }
      }

      // 46.2
      if (typeof this.data.v46_2 !== 'undefined' && this.data.v46_2.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14, revisa la V46.2 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v46_2 !== 'undefined' && this.data.v46_2.id === '1') {
        if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '98' && typeof this.data.v46 !== 'undefined' && this.data.v46.id === '0') {
          this.errors.push('LA V46.2 es 1 revisar la V46 debe ser <>98 y <>0')
          this.error = true
        }
      }

      if (typeof this.data.v46_2 !== 'undefined' && this.data.v46_2.id === '1') {
        if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
          this.errors.push('La V46.2 es 1 revisar la V45 debe ser 1')
          this.error = true
        }
      }

      // 46.3
      if (typeof this.data.v46_3 !== 'undefined' && this.data.v46_3.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14, revisa la V46.3 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v46_3 !== 'undefined' && this.data.v46_3.id === '1') {
        if (this.data.v46.id === '98' || this.data.v46.id === '0') {
          this.errors.push('LA V46.3 es 1 revisar la V46 debe ser <>98 y <>0')
          this.error = true
        }
      }

      if (typeof this.data.v46_3 !== 'undefined' && this.data.v46_3.id === '1') {
        if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
          this.errors.push('La V46.3 es 1 revisar la V45 debe ser 1')
          this.error = true
        }
      }
      // 46.4
      if (typeof this.data.v46_4 !== 'undefined' && this.data.v46_4.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14, revisa la V46.4 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v46_4 !== 'undefined' && this.data.v46_4.id === '1') {
        if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '98' && typeof this.data.v46 !== 'undefined' && this.data.v46.id === '0') {
          this.errors.push('LA V46.4 es 1 revisar la V46 debe ser <>98 y <>0')
          this.error = true
        }
      }

      if (typeof this.data.v46_4 !== 'undefined' && this.data.v46_4.id === '1') {
        if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
          this.errors.push('La V46.4 es 1 revisar la V45 debe ser 1')
          this.error = true
        }
      }
      // 46.5
      if (typeof this.data.v46_5 !== 'undefined' && this.data.v46_5.id === '55' && typeof this.data.v4128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14, revisa la V46.5 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v46_5 !== 'undefined' && this.data.v46_5.id === '1') {
        if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '98' && typeof this.data.v46 !== 'undefined' && this.data.v46.id === '0') {
          this.errors.push('LA V46.5 es 1 revisar la V46 debe ser <>98 y <>0')
          this.error = true
        }
      }

      if (typeof this.data.v46_5 !== 'undefined' && this.data.v46_5.id === '1') {
        if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
          this.errors.push('La V46.5 es 1 revisar la V45 debe ser 1')
          this.error = true
        }
      }

      // 46.6
      if (typeof this.data.v46_6 !== 'undefined' && this.data.v46_6.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14, revisa la V46.6 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v46_6 !== 'undefined' && this.data.v46_6.id === '1') {
        if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '98' && typeof this.data.v46 !== 'undefined' && this.data.v46.id === '0') {
          this.errors.push('LA V46.6 es 1 revisar la V46 debe ser <>98 y <>0')
          this.error = true
        }
      }

      if (typeof this.data.v46_6 !== 'undefined' && this.data.v46_6.id === '1') {
        if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
          this.errors.push('La V46.6 es 1 revisar la V45 debe ser 1')
          this.error = true
        }
      }

      // 46.7
      if (typeof this.data.v46_7 !== 'undefined' && this.data.v46_7.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14, revisa la V46.7 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v46_7 !== 'undefined' && this.data.v46_7.id === '1') {
        if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '98' && typeof this.data.v46 !== 'undefined' && this.data.v46.id === '0') {
          this.errors.push('LA V46.7 es 1 revisar la V46 debe ser <>98 y <>0')
          this.error = true
        }
      }

      if (typeof this.data.v46_7 !== 'undefined' && this.data.v46_7.id === '1') {
        if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
          this.errors.push('La V46.7 es 1 revisar la V45 debe ser 1')
          this.error = true
        }
      }

      // 46.8
      if (typeof this.data.v46_8 !== 'undefined' && this.data.v46_8.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14, revisa la V46.8 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v46_8 !== 'undefined' && this.data.v46_8.id === '1') {
        if (typeof this.data.v46 !== 'undefined' && this.data.v46.id === '98' && typeof this.data.v46 !== 'undefined' && this.data.v46.id === '0') {
          this.errors.push('LA V46.8 es 1 revisar la V46 debe ser <>98 y <>0')
          this.error = true
        }
      }

      if (typeof this.data.v46_8 !== 'undefined' && this.data.v46_8.id === '1') {
        if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
          this.errors.push('La V46.8 es 1 revisar la V45 debe ser 1')
          this.error = true
        }
      }
      // 47
      if (this.data.v47 !== '98' && this.data.v47 !== '55') {
        if (typeof this.data.v47 !== 'undefined' && parseInt(this.data.v47) < 1 && typeof this.data.v47 !== 'undefined' && parseInt(this.data.v47) > 50) {
          this.errors.push('La V47 debe ser estar entre 1 y 50 o = 55 o 98')
          this.error = true
        }
      }
      if (this.data.v47 === '55' && this.data.v128 !== '14') {
        this.errors.push('La V128 es 14  revisar la V47 debe ser 55')
        this.error = true
      }

      if (this.data.v47 === '98' && this.data.v45 !== '98') {
        this.errors.push('La V47 es 98 revisar la V45 debe ser 98')
        this.error = true
      }

      if (typeof this.data.v47 !== 'undefined' && parseInt(this.data.v47) < 55 && this.data.v45 !== '1') {
        this.errors.push('La V47 es < 55 revisar la V45 debe ser = 1')
        this.error = true
      }
      if (typeof this.data.v48 !== 'undefined' && this.data.v48.id === '55' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 es 14 revisar la V48 debe ser 55')
        this.error = true
      }
      if (typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '1' && typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '2' && typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '3' && typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '11' && typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '12' && typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '55' && typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '98' && typeof this.data.v48 !== 'undefined' && this.data.v48.id !== '13') {
        this.errors.push('La V48  debe ser 1,2,3,11,12,55,98 0 13')
        this.error = true
      }

      if (typeof this.data.v48 !== 'undefined' && parseInt(this.data.v48.id) <= 13 && this.data.v45.id !== '1') {
        this.errors.push('La V48 es <= 13 revisar la V45 debe ser 1')
        this.error = true
      }
      if (typeof this.data.v48 !== 'undefined' && this.data.v48.id === '98' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '98') {
        this.errors.push('La V48 es = 98 revisar la V45 debe ser 98')
        this.error = true
      }

      if (this.data.v49 !== '1845-01-01' && this.data.v49 !== '1846-01-01') {
        if (this.data.v49 < this.data.v18) {
          this.errors.push('v49 DEBE SER >= V18 Fecha de diagnóstico del cáncer reportado actualmente')
          this.error = true
        }
        if (this.data.v49 > this.data.v134) {
          this.errors.push('v49 DEBE SER <= V134')
          this.error = true
        }
      }
      if (this.data.v49 === '1846-01-01' && this.data.v128 !== '14') {
        this.errors.push('La V128 debe ser 14, revisar la V49 debe ser 1846-01-01')
        this.error = true
      }

      if (this.data.v49 === '1845-01-01' && this.data.v45 !== '98') {
        this.errors.push('La V45 debe ser 98, revisar la V49 debe ser 1845-01-01')
        this.error = true
      }
      if (Date.parse(this.data.v49) > '1846-01-01' && parseInt(this.data.v49) < this.data.v18) {
        this.errors.push('La v49 es 1846-01-01  revisar la V49 debe ser >= V18')
        this.error = true
      }

      if (Date.parse(this.data.v49) > '1846-01-01' && this.data.v45 !== '1') {
        this.errors.push('La v49 es 1846-01-01  revisar la V45 debe ser 1')
        this.error = true
      }
      // 50
      if (this.data.v50 >= 2 && this.data.v52 === '98') {
        this.errors.push('La V52 es <>98 revisar la V50 debe ser >= 2 y  <98')
        this.error = true
      }
      if (this.data.v50 < 98 && this.data.v52 === '98') {
        this.errors.push('La V52 es <>98 revisar la V50 debe ser >= 2 y  <98')
        this.error = true
      }

      if (this.data.v50 !== '55' && this.data.v50 !== '98') {
        if (this.data.v50 < 1 || this.data.v50 > 5) {
          this.errors.push('La V50 debe estar entre 1 y 5 o = 55 o 98')
          this.error = true
        }
      }
      if (this.data.v50 === '55' && this.data.v128 !== '14') {
        this.errors.push('La V128 debe ser 14, revisar la V50 debe ser 55')
        this.error = true
      }
      if (this.data.v50 === '1' && typeof this.data.v51 !== 'undefined' && this.data.v51.id === '98') {
        this.errors.push('La V51 <>98 revisar la V50 debe ser 1')
        this.error = true
      }

      if (this.data.v50 === '1' && typeof this.data.v52 !== 'undefined' && this.data.v52.id !== '98') {
        this.errors.push('La V52 es 98 revisar la V50 debe ser 1')
        this.error = true
      }

      if (this.data.v50 === '98') {
        if (this.data.v45 !== '98' && this.data.v45 !== '2') {
          this.errors.push('La V50 es 98 revisar la V45 debe ser 98 o 2')
          this.error = true
        }
      }

      if (this.data.v50 === '98') {
        if (this.data.v51 !== '98') {
          this.errors.push('La V51 es 98  revisar la V50 debe ser 98')
          this.error = true
        }
      }

      if (this.data.v50 === '98') {
        if (this.data.v52 !== '98') {
          this.errors.push('La V52 es 98  revisar la V50 debe ser 98')
          this.error = true
        }
      }
      if (this.data.v50 === '98') {
        if (this.data.v52 !== '98') {
          this.errors.push('La V52 es 98  revisar la V50 debe ser 98')
          this.error = true
        }
      }
      if (this.data.v50 <= 5) {
        if (typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
          this.errors.push('La V50 es < 55  revisar la V45 debe ser 1')
          this.error = true
        }
      }

      if (this.data.v51 === '55') {
        if (this.data.v128 !== '14') {
          this.errors.push('La V128 es 14 revisar la V51 debe ser 55')
          this.error = true
        }
      }

      if (this.data.v51 === '98') {
        if (this.data.v45 !== '98') {
          this.errors.push('La V51 es 98 revisar la V45 debe ser 98')
          this.error = true
        }
      }

      if (this.data.v51 > '98') {
        if (this.data.v45 !== '1') {
          this.errors.push('La V51 es >98 revisar la V45 debe ser 1')
          this.error = true
        }
      }
      // 52
      if (this.data.v52 === '55') {
        if (this.data.v128 !== '14') {
          this.errors.push('La V128 debe ser 14, revisar la V52 debe ser 55')
          this.error = true
        }
      }
      // 53
      if (this.data.v53 !== '98' && this.data.v53 !== '99') {
        if (this.data.v53 < 1 || this.data.v53 > 12) {
          this.errors.push('La V53 debe estar entre 1 y 12  o 98 0 99')
          this.error = true
        }
      }
      if (this.data.v53 === '99' && typeof this.data.v128 !== 'undefined' && this.data.v128.id !== '14') {
        this.errors.push('La V128 debe ser 14, revisar la V53 debe ser 99')
        this.error = true
      }
      if (this.data.v53 === '98' && this.data.v45 !== '98') {
        this.errors.push('La V51 es 98 revisar V45 debe ser 98')
        this.error = true
      }

      if (this.data.v53 === '98' && typeof this.data.v53_1 !== 'undefined' && this.data.v53_1.id !== '98') {
        this.errors.push('La V53.1 es 98  revisar la V53 debe ser 98')
        this.error = true
      }

      if (this.data.v53 === '98' && typeof this.data.v53_2 !== 'undefined' && this.data.v53_2.id !== '98') {
        this.errors.push('La V53.2 es 98  revisar la V53 debe ser 99')
        this.error = true
      }

      if (this.data.v53 === '98' && typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id !== '98') {
        this.errors.push('La V53.3 es 98  revisar la V53 debe ser 100')
        this.error = true
      }

      if (this.data.v53 === '98' && typeof this.data.v53_4 !== 'undefined' && this.data.v53_4.id !== '98') {
        this.errors.push('La V53.4 es 98  revisar la V53 debe ser 100')
        this.error = true
      }

      if (this.data.v53 === '98' && typeof this.data.v53_5 !== 'undefined' && this.data.v53_5.id !== '98') {
        this.errors.push('La V53.5 es 98  revisar la V53 debe ser 100')
        this.error = true
      }

      if (this.data.v53 === '98' && typeof this.data.v53_6 !== 'undefined' && this.data.v53_6.id !== '98') {
        this.errors.push('La V53.6 es 98  revisar la V53 debe ser 100')
        this.error = true
      }

      if (this.data.v53 === '98' && typeof this.data.v53_7 !== 'undefined' && this.data.v53_7.id !== '98') {
        this.errors.push('La V53.7 es 98  revisar la V53 debe ser 100')
        this.error = true
      }
      if (this.data.v53 === '98' && typeof this.data.v53_8 !== 'undefined' && this.data.v53_8.id !== '98') {
        this.errors.push('La V53.8 es 98  revisar la V53 debe ser 100')
        this.error = true
      }
      if (this.data.v53 === '98' && typeof this.data.v53_9 !== 'undefined' && this.data.v53_9.id !== '98') {
        this.errors.push('La V53.9 es 98  revisar la V53 debe ser 100')
        this.error = true
      }
      if (this.data.v53 === '98' && this.data.v54 !== '98') {
        this.errors.push('La V54 es 98 revisar la V53 debe ser 98')
        this.error = true
      }
      if (this.data.v53 === '98' && this.data.v56 !== '98') {
        this.errors.push('La V56 es 98 revisar la V53 debe ser 98')
        this.error = true
      }
      if (this.data.v53 === '98' && this.data.v55 !== '98') {
        this.errors.push('La V55 es 98 revisar la V53 debe ser 98')
        this.error = true
      }

      if (this.data.v53 === '98') {
        if (this.data.v47 !== '98') {
          this.errors.push('La V53 es 98 revisar la V47 debe ser 98')
          this.error = true
        }
        if (this.data.v49 !== '1845-01-01') {
          this.errors.push('La V53 es 98 revisar la V49 debe ser 1845-01-01')
          this.error = true
        }
        if (this.data.v50 !== '98') {
          this.errors.push('La V53 es 98 revisar la V50 debe ser 98')
          this.error = true
        }
      }

      if (this.data.v53 <= 12) {
        if (this.data.v47 !== '98') {
          this.errors.push('La V53 es <= 12 revisar la V47 debe ser <> 98')
          this.error = true
        }
        if (this.data.v49 !== '1845-01-01') {
          this.errors.push('La V53 es <= 12 revisar la V49 debe ser <> 1845-01-01')
          this.error = true
        }
        if (this.data.v50 !== '98') {
          this.errors.push('La V53 es <= 12 revisar la V50 debe ser <> 98')
          this.error = true
        }
        if (this.data.v45 !== '98') {
          this.errors.push('La V53 es <= 12 revisar la V50 debe ser <> 98')
          this.error = true
        }
        if (this.data.v53_1.id !== '98') {
          this.errors.push('La V53 es <= 12 revisar la V50 debe ser <> 98')
          this.error = true
        }
      }
      // 53.1
      if (typeof this.data.v53_1 !== 'undefined' && this.data.v53_1.id === '98' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '98') {
        this.errors.push('La V53.1 es 98  revisar la V45 debe ser  98')
        this.error = true
      }

      if (typeof this.data.v53_1 !== 'undefined' && parseInt(this.data.v53_1.id) > 98 && this.data.v45.id !== '1') {
        this.errors.push('La V53.1 es > 98  revisar la V45 debe ser  1')
        this.error = true
      }

      if (typeof this.data.v53_1 !== 'undefined' && this.data.v53_1.id === '55' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '55') {
        this.errors.push('La V53.1 es > 98  revisar la V45 debe ser  1')
        this.error = true
      }
      if (typeof this.data.v53_1 !== 'undefined' && parseInt(this.data.v53_1.id) > 98) {
        if (typeof this.data.v53_2 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v53_2.id === this.data.v53_1.id) {
          this.errors.push('La V53.2 es <> V53.1 revisar V53.1  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v53_3.id === this.data.v53_1.id) {
          this.errors.push('La V53.3 es <> V53.1 revisar V53.1  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_4 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v53_4.id === this.data.v53_1.id) {
          this.errors.push('La V53.4 es <> V53.1 revisar V53.1  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_5 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v53_5.id === this.data.v53_1.id) {
          this.errors.push('La V53.5 es <> V53.1 revisar V53.1  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_6 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v53_6.id === this.data.v53_1.id) {
          this.errors.push('La V53.6 es <> V53.1 revisar V53.1  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_7 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v53_7.id === this.data.v53_1.id) {
          this.errors.push('La V53.7 es <> V53.1 revisar V53.1  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_8 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v53_8.id === this.data.v53_1.id) {
          this.errors.push('La V53.8 es <> V53.1 revisar V53.1  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_9 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v53_9.id === this.data.v53_1.id) {
          this.errors.push('La V53.9 es <> V53.1 revisar V53.1  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v54 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v54.id === this.data.v53_1.id) {
          this.errors.push('La V54 es <> V53.1 revisar la V53.1 debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v55 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v55.id === this.data.v53_1.id) {
          this.errors.push('La V55 es <> V53.1 revisar la V53.1 debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v56 !== 'undefined' && this.data.v53_1 !== 'undefined' && this.data.v56.id === this.data.v53_1.id) {
          this.errors.push('La V56 es <> V53.1 revisar la V53.1 debe ser > 98')
          this.error = true
        }
      }
      if (typeof this.data.v53_1 !== 'undefined' && this.data.v53_1.id !== '55' && parseInt(this.data.v53_1.id) < 98) {
        this.errors.push('La V53.1 deber ser 55 o >= 98')
        this.error = true
      }

      // 52.2
      if (typeof this.data.v53_2 !== 'undefined' && this.data.v53_2.id === '98' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '98') {
        this.errors.push('La V53.2 es 98  revisar la V45 debe ser  98')
        this.error = true
      }
      if (this.data.v53_2.id > '98' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '1') {
        this.errors.push('La V53.2 es > 98  revisar la V45 debe ser  1')
        this.error = true
      }
      if (this.data.v53_2.id === '55' && this.data.v45.id !== '55') {
        this.errors.push('La V53.2 es > 98  revisar la V45 debe ser  1')
        this.error = true
      }
      if (typeof this.data.v53_2 !== 'undefined' && parseInt(this.data.v53_2.id) > 98 && typeof this.data.v53_1 !== 'undefined' && parseInt(this.data.v53_1.id) <= 98) {
        this.errors.push('La v53.2 es > 98 revisar la v53.1 debe ser > 98')
        this.error = true
      }

      if (typeof this.data.v53_3 !== 'undefined' && parseInt(this.data.v53_3.id) > 98) {
        if (typeof this.data.v53_2 !== 'undefined' && this.data.v53_3 !== 'undefined' && this.data.v53_2.id === this.data.v53_3.id) {
          this.errors.push('La V53.2 es <> V53.3 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_2 !== 'undefined' && this.data.v53_3.id === this.data.v53_2.id) {
          this.errors.push('La V53.3 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_4 !== 'undefined' && this.data.v53_2 !== 'undefined' && this.data.v53_4.id === this.data.v53_2.id) {
          this.errors.push('La V53.4 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }

        if (typeof this.data.v53_5 !== 'undefined' && this.data.v53_2 !== 'undefined' && this.data.v53_5.id === this.data.v53_2.id) {
          this.errors.push('La V53.5 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_6 !== 'undefined' && this.data.v53_2 !== 'undefined' && this.data.v53_6.id === this.data.v53_2.id) {
          this.errors.push('La V53.6 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_7 !== 'undefined' && this.data.v53_2 !== 'undefined' && this.data.v53_7.id === this.data.v53_2.id) {
          this.errors.push('La V53.7 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_8 !== 'undefined' && this.data.v53_2 !== 'undefined' && this.data.v53_8.id === this.data.v53_2.id) {
          this.errors.push('La V53.8 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_9 !== 'undefined' && this.data.v53_2 !== 'undefined' && this.data.v53_9.id === this.data.v53_2.id) {
          this.errors.push('La V53.9 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v554 !== 'undefined' && this.data.v53_2 !== 'undefined' && this.data.v54.id === this.data.v53_2.id) {
          this.errors.push('La V54 es <> V53.2 revisar la V53.2 debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v55 !== 'undefined' && this.data.v53_2 !== 'undefined' && this.data.v55.id === this.data.v53_2.id) {
          this.errors.push('La V55 es <> V53.2 revisar la V53.2 debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v56 !== 'undefined' && this.data.v53_2 !== 'undefined' && this.data.v56.id === this.data.v53_2.id) {
          this.errors.push('La V56 es <> V53.2 revisar la V53.2 debe ser > 98')
          this.error = true
        }
      }

      if (typeof this.data.v53_2 !== 'undefined' && this.data.v53_2.id === '97' && typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id !== '97') {
        this.errors.push('La V53.3 debe ser 97')
        this.error = true
      }
      // 53
      if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id === '98' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '98') {
        this.errors.push('La V53.2 es 98  revisar la V45 debe ser  98')
        this.error = true
      }
      if (typeof this.data.v53_3 !== 'undefined' && parseInt(this.data.v53_3.id) > '98' && this.data.v45.id !== '1') {
        this.errors.push('La V53.2 es > 98  revisar la V45 debe ser  1')
        this.error = true
      }
      if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id === '55' && typeof this.data.v45 !== 'undefined' && this.data.v45.id !== '55') {
        this.errors.push('La V53.2 es > 98  revisar la V45 debe ser  1')
        this.error = true
      }
      if (typeof this.data.v53_3 !== 'undefined' && parseInt(this.data.v53_3.id) > 98 && typeof this.data.v53_1 !== 'undefined' && parseInt(this.data.v53_1.id) <= 98) {
        this.errors.push('La v53.2 es > 98 revisar la v53.1 debe ser > 98')
        this.error = true
      }

      if (typeof this.data.v53_3 !== 'undefined' && parseInt(this.data.v53_3.id) > 98) {
        if (typeof this.data.v53_4 !== 'undefined' && this.data.v53_3 !== 'undefined' && this.data.v53_4.id === this.data.v53_3.id) {
          this.errors.push('La V53.4 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }

        if (typeof this.data.v53_5 !== 'undefined' && this.data.v53_3 !== 'undefined' && this.data.v53_5.id === this.data.v53_3.id) {
          this.errors.push('La V53.5 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_6 !== 'undefined' && this.data.v53_3 !== 'undefined' && this.data.v53_6.id === this.data.v53_3.id) {
          this.errors.push('La V53.6 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_7 !== 'undefined' && this.data.v53_3 !== 'undefined' && this.data.v53_7.id === this.data.v53_3.id) {
          this.errors.push('La V53.7 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_8 !== 'undefined' && this.data.v53_3 !== 'undefined' && this.data.v53_8.id === this.data.v53_3.id) {
          this.errors.push('La V53.8 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v53_9 !== 'undefined' && this.data.v53_3 !== 'undefined' && this.data.v53_9.id === this.data.v53_3.id) {
          this.errors.push('La V53.9 es <> V53.2 revisar V53.2  debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v54 !== 'undefined' && this.data.v53_3 !== 'undefined' && this.data.v54.id === this.data.v53_3.id) {
          this.errors.push('La V54 es <> V53.2 revisar la V53.2 debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v55 !== 'undefined' && this.data.v53_3 !== 'undefined' && this.data.v55.id === this.data.v53_3.id) {
          this.errors.push('La V55 es <> V53.2 revisar la V53.2 debe ser > 98')
          this.error = true
        }
        if (typeof this.data.v56 !== 'undefined' && this.data.v53_3 !== 'undefined' && this.data.v56.id === this.data.v53_3.id) {
          this.errors.push('La V56 es <> V53.2 revisar la V53.2 debe ser > 98')
          this.error = true
        }
      }

      if (typeof this.data.v53_3 !== 'undefined' && this.data.v53_3.id === '97' && typeof this.data.v53_4 !== 'undefined' && this.data.v53_4.id !== '97') {
        this.errors.push('La V53.4 debe ser 97')
        this.error = true
      }

      // 53.4
      if (typeof this.data.v53_4.id === '98' && this.data.v45.id !== '98') {
        this.errors.push("La V53.2 es 98  revisar la V45 debe ser  98");
        this.error = true;
      }
      if (this.data.v53_4.id > '98' && this.data.v45.id !== '1') {
        this.errors.push("La V53.2 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_4.id === '55' && this.data.v45.id !== '55') {
        this.errors.push("La V53.4 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_4.id > 98 && this.data.v53_1.id <= 98) {
        this.errors.push("La v53.4 es > 98 revisar la v53.1 debe ser > 98");
        this.error = true;
      }

      if (this.data.v53_4.id > 98) {
        if (this.data.v53_5.id === this.data.v53_4.id) {
          this.errors.push("La V53.5 es <> V53.4 revisar V53.4  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_6.id === this.data.v53_4.id) {
          this.errors.push("La V53.6 es <> V53.4 revisar V53.4  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_7.id === this.data.v53_4.id) {
          this.errors.push("La V53.7 es <> V53.4 revisar V53.4  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_8.id === this.data.v53_4.id) {
          this.errors.push("La V53.8 es <> V53.4 revisar V53.4  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_9.id === this.data.v53_4.id) {
          this.errors.push("La V53.9 es <> V53.4 revisar V53.4  debe ser > 98");
          this.error = true;
        }
        if (this.data.v54.id === this.data.v53_4.id) {
            this.errors.push("La V54 es <> V53.4 revisar la V53.4 debe ser > 98");
            this.error = true;
        }
        if (this.data.v55.id === this.data.v53_4.id) {
            this.errors.push("La V55 es <> V53.4 revisar la V53.4 debe ser > 98");
            this.error = true;
        }
        if (this.data.v56.id === this.data.v53_4.id) {
            this.errors.push("La V56 es <> V53.4 revisar la V53.4 debe ser > 98");
            this.error = true;
        }
      }

      if(this.data.v53_4.id === '97' && this.data.v53_5.id !== '97') {
        this.errors.push('La V53.5 debe ser 97');
        this.error = true;
      }

    // 53.4
      if (this.data.v53_4.id === '98' && this.data.v45.id !== '98') {
        this.errors.push("La V53.2 es 98  revisar la V45 debe ser  98");
        this.error = true;
      }
      if (this.data.v53_4.id > '98' && this.data.v45.id !== '1') {
        this.errors.push("La V53.2 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_4.id === '55' && this.data.v45.id !== '55') {
        this.errors.push("La V53.4 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_4.id > 98 && this.data.v53_1.id <= 98) {
        this.errors.push("La v53.4 es > 98 revisar la v53.1 debe ser > 98");
        this.error = true;
      }

      if (this.data.v53_4.id > 98) {
        if (this.data.v53_5.id === this.data.v53_4.id) {
          this.errors.push("La V53.5 es <> V53.4 revisar V53.4  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_6.id === this.data.v53_4.id) {
          this.errors.push("La V53.6 es <> V53.4 revisar V53.4  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_7.id === this.data.v53_4.id) {
          this.errors.push("La V53.7 es <> V53.4 revisar V53.4  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_8.id === this.data.v53_4.id) {
          this.errors.push("La V53.8 es <> V53.4 revisar V53.4  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_9.id === this.data.v53_4.id) {
          this.errors.push("La V53.9 es <> V53.4 revisar V53.4  debe ser > 98");
          this.error = true;
        }
        if (this.data.v54.id === this.data.v53_4.id) {
            this.errors.push("La V54 es <> V53.4 revisar la V53.4 debe ser > 98");
            this.error = true;
        }
        if (this.data.v55.id === this.data.v53_4.id) {
            this.errors.push("La V55 es <> V53.4 revisar la V53.4 debe ser > 98");
            this.error = true;
        }
        if (this.data.v56.id === this.data.v53_4.id) {
            this.errors.push("La V56 es <> V53.4 revisar la V53.4 debe ser > 98");
            this.error = true;
        }
      }

      if(this.data.v53_4.id === '97' && this.data.v53_5.id !== '97') {
        this.errors.push('La V53.5 debe ser 97');
        this.error = true;
      }

      // 53.5
      if (this.data.v53_5.id === '98' && this.data.v45.id !== '98') {
        this.errors.push("La V53.2 es 98  revisar la V45 debe ser  98");
        this.error = true;
      }
      if (this.data.v53_5.id > '98' && this.data.v45.id !== '1') {
        this.errors.push("La V53.2 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_5.id === '55' && this.data.v45.id !== '55') {
        this.errors.push("La V53.5 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_5.id > 98 && this.data.v53_1.id <= 98) {
        this.errors.push("La v53.5 es > 98 revisar la v53.1 debe ser > 98");
        this.error = true;
      }

      if (this.data.v53_5.id > 98) {
        if (this.data.v53_6.id === this.data.v53_5.id) {
          this.errors.push("La V53.6 es <> V53.5 revisar V53.5  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_7.id === this.data.v53_5.id) {
          this.errors.push("La V53.7 es <> V53.5 revisar V53.5  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_8.id === this.data.v53_5.id) {
          this.errors.push("La V53.8 es <> V53.5 revisar V53.5  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_9.id === this.data.v53_5.id) {
          this.errors.push("La V53.9 es <> V53.5 revisar V53.5  debe ser > 98");
          this.error = true;
        }
        if (this.data.v54.id === this.data.v53_5.id) {
            this.errors.push("La V54 es <> V53.5 revisar la V53.5 debe ser > 98");
            this.error = true;
        }
        if (this.data.v55.id === this.data.v53_5.id) {
            this.errors.push("La V55 es <> V53.5 revisar la V53.5 debe ser > 98");
            this.error = true;
        }
        if (this.data.v56.id === this.data.v53_5.id) {
            this.errors.push("La V56 es <> V53.5 revisar la V53.5 debe ser > 98");
            this.error = true;
        }
      }

      if(this.data.v53_5.id === '97' && this.data.v53_6.id !== '97') {
        this.errors.push('La V53.5 debe ser 97');
        this.error = true;
      }

      // 53.6
      if (this.data.v53_6.id === '98' && this.data.v45.id !== '98') {
        this.errors.push("La V53.2 es 98  revisar la V45 debe ser  98");
        this.error = true;
      }
      if (this.data.v53_6.id > '98' && this.data.v45.id !== '1') {
        this.errors.push("La V53.2 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_6.id === '55' && this.data.v45.id !== '55') {
        this.errors.push("La V53.6 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_6.id > 98 && this.data.v53_1.id <= 98) {
        this.errors.push("La v53.5 es > 98 revisar la v53.1 debe ser > 98");
        this.error = true;
      }

      if (this.data.v53_6.id > 98) {
        if (this.data.v53_6.id === this.data.v53_6.id) {
          this.errors.push("La V53.6 es <> V53.6 revisar V53.6  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_7.id === this.data.v53_6.id) {
          this.errors.push("La V53.7 es <> V53.6 revisar V53.6  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_8.id === this.data.v53_6.id) {
          this.errors.push("La V53.8 es <> V53.6 revisar V53.6  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_9.id === this.data.v53_6.id) {
          this.errors.push("La V53.9 es <> V53.6 revisar V53.6  debe ser > 98");
          this.error = true;
        }
        if (this.data.v54.id === this.data.v53_6.id) {
            this.errors.push("La V54 es <> V53.6 revisar la V53.6 debe ser > 98");
            this.error = true;
        }
        if (this.data.v55.id === this.data.v53_6.id) {
            this.errors.push("La V55 es <> V53.6 revisar la V53.6 debe ser > 98");
            this.error = true;
        }
        if (this.data.v56.id === this.data.v53_6.id) {
            this.errors.push("La V56 es <> V53.6 revisar la V53.6 debe ser > 98");
            this.error = true;
        }
      }

      if(this.data.v53_5.id === '97' && this.data.v53_6.id !== '97') {
        this.errors.push('La V53.5 debe ser 97');
        this.error = true;
      }

      // 53.7
      if (this.data.v53_7.id === '98' && this.data.v45.id !== '98') {
        this.errors.push("La V53.7 es 98  revisar la V45 debe ser  98");
        this.error = true;
      }
      if (this.data.v53_7.id > '98' && this.data.v45.id !== '1') {
        this.errors.push("La V53.7 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_7.id === '55' && this.data.v45.id !== '55') {
        this.errors.push("La V53.7 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_7.id > 98 && this.data.v53_1.id <= 98) {
        this.errors.push("La v53.5 es > 98 revisar la v53.1 debe ser > 98");
        this.error = true;
      }

      if (this.data.v53_7.id > 98) {
        if (this.data.v53_7.id === this.data.v53_7.id) {
          this.errors.push("La V53.7 es <> V53.7 revisar V53.7  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_8.id === this.data.v53_7.id) {
          this.errors.push("La V53.8 es <> V53.7 revisar V53.7  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_9.id === this.data.v53_7.id) {
          this.errors.push("La V53.9 es <> V53.7 revisar V53.7  debe ser > 98");
          this.error = true;
        }
        if (this.data.v54.id === this.data.v53_7.id) {
            this.errors.push("La V54 es <> V53.7 revisar la V53.7 debe ser > 98");
            this.error = true;
        }
        if (this.data.v55.id === this.data.v53_7.id) {
            this.errors.push("La V55 es <> V53.7 revisar la V53.7 debe ser > 98");
            this.error = true;
        }
        if (this.data.v56.id === this.data.v53_7.id) {
            this.errors.push("La V56 es <> V53.7 revisar la V53.7 debe ser > 98");
            this.error = true;
        }
      }

      if(this.data.v53_6.id === '97' && this.data.v53_7.id !== '97') {
        this.errors.push('La V53.5 debe ser 97');
        this.error = true;
      }

      // 53.8
      if (this.data.v53_8.id === '98' && this.data.v45.id !== '98') {
        this.errors.push("La V53.8 es 98  revisar la V45 debe ser  98");
        this.error = true;
      }
      if (this.data.v53_8.id > '98' && this.data.v45.id !== '1') {
        this.errors.push("La V53.8 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_8.id === '55' && this.data.v45.id !== '55') {
        this.errors.push("La V53.8 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_8.id > 98 && this.data.v53_1.id <= 98) {
        this.errors.push("La v53.5 es > 98 revisar la v53.1 debe ser > 98");
        this.error = true;
      }

      if (this.data.v53_8.id > 98) {
        if (this.data.v53_8.id === this.data.v53_8.id) {
          this.errors.push("La V53.8 es <> V53.8 revisar V53.8  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_9.id === this.data.v53_8.id) {
          this.errors.push("La V53.9 es <> V53.8 revisar V53.8  debe ser > 98");
          this.error = true;
        }
        if (this.data.v54.id === this.data.v53_8.id) {
            this.errors.push("La V54 es <> V53.8 revisar la V53.8 debe ser > 98");
            this.error = true;
        }
        if (this.data.v55.id === this.data.v53_8.id) {
            this.errors.push("La V55 es <> V53.8 revisar la V53.8 debe ser > 98");
            this.error = true;
        }
        if (this.data.v56.id === this.data.v53_8.id) {
            this.errors.push("La V56 es <> V53.8 revisar la V53.8 debe ser > 98");
            this.error = true;
        }
      }

      if(this.data.v53_7.id === '97' && this.data.v53_8.id !== '97') {
        this.errors.push('La V53.8 debe ser 97');
        this.error = true;
      }

      // 53.9
      if (this.data.v53_9.id === '98' && this.data.v45.id !== '98') {
        this.errors.push("La V53.8 es 98  revisar la V45 debe ser  98");
        this.error = true;
      }
      if (this.data.v53_9.id > '98' && this.data.v45.id !== '1') {
        this.errors.push("La V53.8 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_9.id === '55' && this.data.v45.id !== '55') {
        this.errors.push("La V53.8 es > 98  revisar la V45 debe ser  1");
        this.error = true;
      }
      if (this.data.v53_9.id > 98 && this.data.v53_1.id <= 98) {
        this.errors.push("La v53.5 es > 98 revisar la v53.1 debe ser > 98");
        this.error = true;
      }

      if (this.data.v53_9.id > 98) {
        if (this.data.v53_9.id === this.data.v53_9.id) {
          this.errors.push("La V53.8 es <> V53.8 revisar V53.8  debe ser > 98");
          this.error = true;
        }
        if (this.data.v53_9.id === this.data.v53_9.id) {
          this.errors.push("La V53.9 es <> V53.8 revisar V53.8  debe ser > 98");
          this.error = true;
        }
        if (this.data.v54.id === this.data.v53_9.id) {
            this.errors.push("La V54 es <> V53.8 revisar la V53.8 debe ser > 98");
            this.error = true;
        }
        if (this.data.v55.id === this.data.v53_9.id) {
            this.errors.push("La V55 es <> V53.8 revisar la V53.8 debe ser > 98");
            this.error = true;
        }
        if (this.data.v56.id === this.data.v53_9.id) {
            this.errors.push("La V56 es <> V53.8 revisar la V53.8 debe ser > 98");
            this.error = true;
        }
      }

      if(this.data.v53_7.id === '97' && this.data.v53_8.id !== '97') {
        this.errors.push('La V53.8 debe ser 97');
        this.error = true;
      }
    // voy

      if (this.status !== 'finalizado') {
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
            if (typeof data.error !== 'undefined' && this.registerNid === '') {
              return _this.$swal('Advertencia', 'Error al crear registro verifique que no haya un registro previamente creado para el paciente', 'error')
            }
            if (_this.type === 'borrador') {
              _this.registerNid = data.id
            }
            if (_this.type === 'siguiente') {
              if (_this.secondStep === false && _this.firstStep === true) {
                _this.firstStep = false
                _this.secondStep = true
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
          _this.firstStep = false
          _this.secondStep = true
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
        } else {
          _this.$router.push('/resumen')
        }
      }
    }
  }
}
</script>
