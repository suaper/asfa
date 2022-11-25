<template>
  <q-form @submit="saveRegister">
    <div class="row flex cien space-betwen" >
        <div class="wrp_forms w_50" v-if="firstStep">
          <h4 class="titulo_fondo w_100">INFORMACION RELACIONADA A DIAGNÓSTICO, ESTADIFICACIÓN Y OBJETIVO DEL TRATAMIENTO INICIAL</h4>

          <div class="row dos_items">
              <div class="item">
                  <label>17. Código CIE - 10 de la neoplasia (cáncer o tumor) maligna reportada (Primario) </label>
                  <q-input rounded standout v-model="data.novedadUsuarioReporteAnterior" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>18. Fecha de diagnóstico del cáncer reportado:  </label>
                    <q-input filled v-model="data.codigoNeoplasiaPrimario">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.codigoNeoplasiaPrimario">
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
                    <q-input filled v-model="data.remisionMedicoCancer">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.remisionMedicoCancer">
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
                    <q-input filled v-model="data.ingresoDiagnosticoRemision">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.ingresoDiagnosticoRemision">
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
                  <q-select rounded standout v-model="data.diagnosticoCancer" :options="diagnosticoCancer" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>22. Motivo por el cual el usuario no tuvo diagnóstico por histopatología (aplica para registros con respuesta igual a 7 en la variable anterior):</label>
                  <q-select rounded standout v-model="data.noDiagnosticoCancer" :options="noDiagnosticoCancer" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>23. Fecha de recolección de muestra para estudio histopatológico de diagnóstico:</label>
                    <q-input filled v-model="data.recoleccionHistipatologico">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.recoleccionHistipatologico">
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
                    <q-input filled v-model="data.unicoInformeHistopatologico">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.unicoInformeHistopatologico">
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
                  <q-select rounded standout v-model="data.codigoIpsConfirma" :options="codigoIpsConfirma" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>26. Fecha de primera consulta con médico tratante de la enfermedad maligna </label>
                    <q-input filled v-model="data.primeraEnfermedadMaligna">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.primeraEnfermedadMaligna">
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
                  <q-select rounded standout v-model="data.histologiaTumorBiopsia" :options="histologiaTumorBiopsia" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>28. Grado de diferenciación del tumor sólido maligno según la biopsia o informe de primera cirugía:  </label>
                  <q-select rounded standout v-model="data.gradoTumorBiopsia" :options="gradoTumorBiopsia" label="Seleccionar" />
              </div>
          </div>

          <div class="row un_item">
              <div class="item">
                <label>29. Si es tumor sólido, cuál fue la primera estadificación basada en TNM, FIGO, u otras compatibles con esta numeración según tumor:</label>
                <q-select rounded standout v-model="data.tumorSolidoCompatibles" :options="tumorSolidoCompatibles" label="Seleccionar" />
              </div>
            </div>

            <div class="row un_item" v-if="data.tumorSolidoCompatibles.id !== ''">
              <div class="item" v-if="data.tumorSolidoCompatibles.id === 'CÁNCER DE MAMA Y CÁNCER GÁSTRICO'">
                <label class="sub_text">CÁNCER DE MAMA Y CÁNCER GÁSTRICO</label>
                <q-select rounded standout v-model="data.cancerMamaGastrico" :options="cancerMamaGastrico" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.tumorSolidoCompatibles.id === 'CANCER DE PRÓSTATA'">
                <label class="sub_text">CANCER DE PRÓSTATA</label>
                <q-select rounded standout v-model="data.cancerProstata" :options="cancerProstata" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.tumorSolidoCompatibles.id === 'CANCER DE PULMON'">
                <label class="sub_text">CANCER DE PULMÓN</label>
                <q-select rounded standout v-model="data.cancerPulmon" :options="cancerPulmon" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.tumorSolidoCompatibles.id === 'MELANOMA'">
                <label class="sub_text">MELANOMA</label>
                <q-select rounded standout v-model="data.melonoma" :options="melonoma" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.tumorSolidoCompatibles.id === 'CÁNCER DE COLON Y RECTO'">
                <label class="sub_text">CÁNCER DE COLON Y RECTO</label>
                <q-select rounded standout v-model="data.cancerColonRecto" :options="cancerColonRecto" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.tumorSolidoCompatibles.id === 'CÁNCER ANAL (Agrupador Colon y recto)'">
                <label class="sub_text">CÁNCER ANAL (Agrupador Colon y recto)</label>
                <q-select rounded standout v-model="data.cancerAnal" :options="cancerAnal" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.tumorSolidoCompatibles.id === 'CÁNCER DE CÉRVIX (FIGO)'">
                <label class="sub_text">CÁNCER DE CÉRVIX (FIGO)</label>
                <q-select rounded standout v-model="data.cancerCervix" :options="cancerCervix" label="Seleccionar" />
              </div>
              <div class="item" v-if="data.tumorSolidoCompatibles.id === 'OTRAS OPCIONES'">
                <label class="sub_text">OTRAS OPCIONES</label>
                <q-select rounded standout v-model="data.cancerOtrasOpciones" :options="cancerOtrasOpciones" label="Seleccionar" />
              </div>
            </div>
            <div class="row un_item">
              <div class="item">
                  <label>30. Fecha en que se realizó esta estadificación  </label>
                    <q-input filled v-model="data.realizoEstadificacion">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.realizoEstadificacion">
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
                  <q-select rounded standout v-model="data.cancerCrecimientoAntes" :options="cancerCrecimientoAntes" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>32. Para cáncer de mama, fecha de realización de la única o última prueba HER2:</label>
                    <q-input filled v-model="data.cancerMamaUltimaHer2">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.cancerMamaUltimaHer2">
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
                  <q-select rounded standout v-model="data.cancerMamaResultadoHer2" :options="cancerMamaResultadoHer2" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>34. Para cáncer colorrectal, estadificación de Dukes </label>
                  <q-select rounded standout v-model="data.cancerColorrectalDukes" :options="cancerColorrectalDukes" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>35. Fecha en que se realizó la estadificación de Dukes: </label>
                    <q-input filled v-model="data.realizoDukes">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.realizoDukes">
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
                  <q-select rounded standout v-model="data.clinicaLinfomaHodgkin" :options="clinicaLinfomaHodgkin" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>37. Para cáncer de próstata, valor de clasificación de la escala Gleason en el momento del diagnóstico:  </label>
                  <q-select rounded standout v-model="data.cancerProstataGleason" :options="cancerProstataGleason" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>38. Clasificación del riesgo leucemias o linfomas (para toda la población), y sólidos pediátricos: </label>
                  <q-select rounded standout v-model="data.riesgosLeucemiaPediatra" :options="riesgosLeucemiaPediatra" label="Seleccionar" />
              </div>
          </div>

          <div class="row un_item" v-if="data.riesgosLeucemiaPediatra.id !== ''">
            <div class="item" v-if="data.riesgosLeucemiaPediatra.id === 'Clasificación de riesgo en linfoma no Hodgkin'">
              <label class="sub_text">Clasificación de riesgo en linfoma no Hodgkin</label>
              <q-select rounded standout v-model="data.clasificacionRiesgoNoHodgkin" :options="clasificacionRiesgoNoHodgkin" label="Seleccionar" />
            </div>
            <div class="item" v-if="data.riesgosLeucemiaPediatra.id === 'Clasificación de riesgo en linfoma de Hodgkin'">
              <label class="sub_text">Clasificación de riesgo en linfoma de Hodgkin</label>
                <q-select rounded standout v-model="data.clasificacionRiesgoHodgkin" :options="clasificacionRiesgoHodgkin" label="Seleccionar" />
            </div>
          </div>

          <div class="row un_item" v-if="data.riesgosLeucemiaPediatra.id !== ''">
            <div class="item" v-if="data.riesgosLeucemiaPediatra.id === 'Clasificación del riesgo en adultos (LLA y LMA)'">
              <label class="sub_text">Clasificación del riesgo en adultos (LLA y LMA)</label>
              <q-select rounded standout v-model="data.riesgosAdultoLla" :options="riesgosAdultoLla" label="Seleccionar" />
            </div>
            <div class="item" v-if="data.riesgosLeucemiaPediatra.id === 'Clasificación del riesgo en Pediatría (LLA y LMA)'">
              <label class="sub_text">Clasificación del riesgo en Pediatría (LLA y LMA)</label>
              <q-select rounded standout v-model="data.riesgosPediatraLla" :options="riesgosPediatraLla" label="Seleccionar" />
            </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>39. Fecha de clasificación de riesgo: </label>
                    <q-input filled v-model="data.clasificacionRiesgoCan">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.clasificacionRiesgoCan">
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
                  <q-select rounded standout v-model="data.objetivoTratamientoInicial" :options="objetivoTratamientoInicial" label="Seleccionar" />
              </div>
          </div>

          <div class="row un_item">
              <div class="item">
                <label>41. Intervención médica durante el periodo de reporte </label>
                <q-input filled v-model="data.intervencionPeriodoReporte" />
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
                  <q-select rounded standout v-model="data.otroCancerPrimario" :options="otroCancerPrimario" label="Seleccionar" />
            </div>
            <div class="item">
                <label>43. Fecha de diagnóstico del otro cáncer primario: </label>
                  <q-input filled v-model="data.fechaOtroCancerPrimario">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaOtroCancerPrimario">
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
                    <q-select rounded standout v-model="data.tipoCancerAntecendente" :options="tipoCancerAntecendente" label="Seleccionar" />
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
                  <q-select rounded standout v-model="data.usuarioQuimioTerapia" :options="usuarioQuimioTerapia" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>46. ¿Cuántas fases de quimioterapia recibió el usuario en este periodo de reporte? (aplica para hematolinfáticos con los siguientes códigos de clasificación diagnóstica CIE-10; C835 Linfoma no Hodgkin linfoblástico (difuso), C910 Leucemia linfoblástica aguda, C920 Leucemia mieloide aguda, C924 Leucemia promielocitica aguda y C925 Leucemia mielomonocítica aguda): </label>
                  <q-select rounded standout v-model="data.usuarioQuimioFasesPeriodo" :options="usuarioQuimioFasesPeriodo" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>46.1 El usuario recibió en este periodo la fase de quimioterapia denominada Prefase o Citorreducción inicial (aplica solo para leucemia linfoide aguda y linfoma linfoblástico, puede haber recibido más de una fase): </label>
                  <q-select rounded standout v-model="data.uQuimioPrefase" :options="uQuimioPrefase" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>46.2 El usuario recibió en este periodo la fase de quimioterapia denominada Inducción (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                  <q-select rounded standout v-model="data.uQuimioInduccionPeriodo" :options="uQuimioInduccionPeriodo" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>46.3 El usuario recibió en este periodo la fase de quimioterapia denominada Intensificación (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase): </label>
                  <q-select rounded standout v-model="data.uQuimioIntensificacion" :options="uQuimioIntensificacion" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>46.4 El usuario recibió en este periodo la fase de quimioterapia denominada Consolidación (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase): : </label>
                  <q-select rounded standout v-model="data.uQuimioConsolidacion" :options="uQuimioConsolidacion" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>46.5 El usuario recibió en este periodo la fase de quimioterapia denominada Reinducción (aplica solo para leucemia linfoide aguda y linfoma linfoblástico, puede haber recibido más de una fase): </label>
                  <q-select rounded standout v-model="data.uQuimioReinduccion" :options="uQuimioReinduccion" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>46.6 El usuario recibió en este periodo la fase de quimioterapia denominada Mantenimiento (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                  <q-select rounded standout v-model="data.uQuimioMantenimiento" :options="uQuimioMantenimiento" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>46.7 El usuario recibió en este periodo la fase de quimioterapia denominada Mantenimiento largo o final (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                  <q-select rounded standout v-model="data.uQuimioMantenimientoLargo" :options="uQuimioMantenimientoLargo" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>46.8 El usuario recibió en este periodo Otra fase de quimioterapia denominada diferente a las anteriores (aplica solo para leucemia linfoide o mieloide aguda y linfoma linfoblástico, puede haber recibido más de una fase):  </label>
                  <q-select rounded standout v-model="data.uQuimioOtraFase" :options="uQuimioOtraFase" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item numero">
                  <label>47. Número de ciclos iniciados y administrados en el periodo de reporte, incluyendo el que aún recibe en la fecha de finalización del periodo (aplica para todos los cánceres): </label>
                    <q-input rounded standout v-model="data.ciclosReporteCanceres" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>48. Ubicación temporal del primer o único esquema de quimioterapia o terapia sistémica en el periodo en relación al manejo oncológico: </label>
                  <q-select rounded standout v-model="data.ubicacionPrimerQuimio" :options="ubicacionPrimerQuimio" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>49. Fecha de inicio del primer o único esquema de quimioterapia o terapia sistémica que recibió en este periodo. Este esquema pudo haber sido iniciado antes de periodo de reporte. </label>
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
                  <label>50. Número de IPS que suministran el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte:  </label>
                    <q-input rounded standout v-model="data.numeroPrimerIps" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>51. Código de la IPS1 que suministra el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte</label>
                    <q-input rounded standout v-model="data.codigoIps1PrimerQuimio" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>52. Código de la IPS2 que suministra el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte:  </label>
                    <q-input rounded standout v-model="data.codigoIps2PrimerQuimio" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>53. Cuantos medicamentos antineoplásicos o terapia hormonal, el (los) especialista(s) tratante(s) del cáncer propusieron como manejo en el primer o único esquema de quimioterapia o terapia sistémica de este periodo de reporte</label>
                    <q-input rounded standout v-model="data.cantidadMedicamentosCancer" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>53.1 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(1) </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasico1" :options="medicamentoAntiplasico1" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>53.2 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(2) </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasico2" :options="medicamentoAntiplasico2" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>53.3 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(3) </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasico3" :options="medicamentoAntiplasico3" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>53.4 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(4) </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasico4" :options="medicamentoAntiplasico4" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>53.5 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(5) </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasico5" :options="medicamentoAntiplasico5" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>53.6 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(6) </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasico6" :options="medicamentoAntiplasico6" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>53.7 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(7) </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasico7" :options="medicamentoAntiplasico7" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>53.8 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(8) </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasico8" :options="medicamentoAntiplasico8" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>53.9 Medicamento antineoplásico administrado al usuario- PRIMER o único esquema del periodo de reporte.(9) </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasico9" :options="medicamentoAntiplasico9" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>54. Medicamento Antineoplásico o terapia hormonal para el cáncer, adicional a los reportados en las variables 53.1 a 53.9 - 1 administrado al usuario- primer o único esquema del periodo de reporte: </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasicoVariable" :options="medicamentoAntiplasicoVariable" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>55. Medicamento Antineoplásico o terapia hormonal para el cáncer, adicional a los reportados en las variables 53.1 a 53.9 - 2 administrado al usuario- primer o único esquema del periodo de reporte: </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasicoVariable2" :options="medicamentoAntiplasicoVariable2" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>56. Medicamento Antineoplásico o terapia hormonal para el cáncer, adicional a los reportados en las variables 53.1 a 53.9 - 3 administrado al usuario- primer o único esquema del periodo de reporte: </label>
                    <q-select rounded standout v-model="data.medicamentoAntiplasicoVariable3" :options="medicamentoAntiplasicoVariable3" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>57. ¿Recibió quimioterapia intratecal en el primer o único esquema de este periodo de reporte?:</label>
                    <q-select rounded standout v-model="data.quimioIntratecalPrimer" :options="quimioIntratecalPrimer" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>58. Fecha de finalización del primer o único esquema de este periodo de reporte. Si es hormonoterapia terminada o esquema terminado en este periodo reporte la fecha de finalización del tratamiento actual: </label>
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
                  <label>59. Características actuales del primer o único esquema de este periodo de reporte:</label>
                    <q-select rounded standout v-model="data.cartePrimerReporte" :options="cartePrimerReporte" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>60. Motivo de la finalización (prematura) de este primer o único esquema (Aplica si registró la opción 2 de la variable anterior). Seleccione un sólo número (lo que primero ocurrió):  </label>
                    <q-select rounded standout v-model="data.prematuraEsquemaOp2" :options="prematuraEsquemaOp2" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>61. Ubicación temporal del ÚLTIMO esquema de quimioterapia o terapia sistémica de este periodo de reporte en relación al manejo oncológico: </label>
                    <q-select rounded standout v-model="data.ultimoEsquemaOncologico" :options="ultimoEsquemaOncologico" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>62. Fecha de inicio del último esquema de quimioterapia o terapia sistémica de este periodo de reporte. Si es hormonoterapia reporte la fecha de inicio del tratamiento actual, así haya sido iniciada previo al reporte actual:  </label>
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
                  <label>63. Número de IPS que suministran el último esquema de este periodo de reporte: </label>
                    <q-input rounded standout v-model="data.numeroIpsUltimoReporte" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>64. Código de la IPS1 que suministra el último esquema en este periodo de reporte: </label>
                    <q-input rounded standout v-model="data.codigoReporteIps1" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>65. Código de la IPS2 que suministra el último esquema en este periodo de reporte: </label>
                    <q-input rounded standout v-model="data.codigoReporteIps2" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>66. Cuantos medicamentos antineoplásicos o terapia hormonal, el (los) especialista(s) tratante(s) del cáncer propusieron como manejo en ÚLTIMO esquema de quimioterapia o terapia sistémica de este periodo de reporte: </label>
                    <q-input rounded standout v-model="data.medicamentoAntiplasicoEspecial" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>66.1 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte. </label>
                    <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte" :options="medicamentoAntineplasicoReporte" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>66.2 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(2)  </label>
                    <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte2" :options="medicamentoAntineplasicoReporte2" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>66.3 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(3) </label>
                    <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte3" :options="medicamentoAntineplasicoReporte3" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>66.4 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(4)  </label>
                    <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte4" :options="medicamentoAntineplasicoReporte4" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>66.5 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(5) </label>
                    <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte5" :options="medicamentoAntineplasicoReporte5" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>66.6 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(6)  </label>
                    <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte6" :options="medicamentoAntineplasicoReporte6" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>66.7 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(7) </label>
                    <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte7" :options="medicamentoAntineplasicoReporte7" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>66.8 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(8)  </label>
                    <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte8" :options="medicamentoAntineplasicoReporte8" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>66.9 Medicamento antineoplásico administrado al usuario- ÚLTIMO esquema del periodo de reporte.(9) </label>
                    <q-select rounded standout v-model="data.medicamentoAntineplasicoReporte9" :options="medicamentoAntineplasicoReporte9" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>67. Medicamento Antineoplásico o terapia hormonal para cáncer, adicional a los reportados en variables 66.1 a 66.9 -1 administrado al usuario- último esquema: </label>
                    <q-select rounded standout v-model="data.terapiaHormonalCancerVariable" :options="terapiaHormonalCancerVariable" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>68. Medicamento Antineoplásico o terapia hormonal para cáncer, adicional a los reportados en variables 66.1 a 66.9 -2 administrado al usuario- último esquema:</label>
                    <q-select rounded standout v-model="data.terapiaHormonalCancerVariable2" :options="terapiaHormonalCancerVariable2" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>69. Medicamento Antineoplásico o terapia hormonal para cáncer, adicional a los reportados en variables 66.1 a 66.9 -3 administrado al usuario- último esquema:</label>
                    <q-select rounded standout v-model="data.terapiaHormonalCancerVariable3" :options="terapiaHormonalCancerVariable3" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>70. ¿Recibió quimioterapia intratecal en el último esquema de este periodo de reporte</label>
                    <q-select rounded standout v-model="data.quimioIntratecalUltimo" :options="quimioIntratecalUltimo" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>71. Fecha de finalización del último esquema de quimioterapia o terapia sistémica este periodo de reporte. Si es hormonoterapia terminada o esquema terminado en este periodo reporte la fecha de finalización del tratamiento actual: </label>
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
                  <label>72. Características actuales del último esquema de este periodo:</label>
                    <q-select rounded standout v-model="data.actualEsquemaUltimoPeriodo" :options="actualEsquemaUltimoperiodo" label="Seleccionar" />
              </div>
          </div>

          <div class="row un_item">
              <div class="item">
                  <label>73. Motivo de la finalización (prematura) de este último esquema (Aplica si registró la opción 2 de la pregunta anterior) Seleccione un sólo número (lo que primero ocurrió): </label>
                    <q-select rounded standout v-model="data.motivoPrematuraEsquema" :options="motivoPrematuraEsquema" label="Seleccionar" />
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
                  <q-select rounded standout v-model="data.usuarioCirugiasCancer" :options="usuarioCirugiasCancer" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>75. Número de cirugías a las que fue sometido el usuario durante el periodo de reporte actual:  </label>
                    <q-input rounded standout v-model="data.numeroCirugiaUsuario" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>76. Fecha de realización de la primera cirugía en este periodo de reporte: </label>
                    <q-input filled v-model="data.fechaPrimeraCirugiaReporte">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaPrimeraCirugiaReporte">
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
                  <q-input rounded standout v-model="data.codigoIpsPrimerCirugia" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>78. Código de primera cirugía en este periodo de reporte: </label>
                  <q-input rounded standout v-model="data.codigoPrimerCirugiaReporte" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>79. Ubicación temporal de esta primera cirugía en relación al manejo oncológico: </label>
                  <q-select rounded standout v-model="data.ubiPrimerCirugiaOnco" :options="ubiPrimerCirugiaOnco" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>80. Fecha de realización de la última cirugía o cirugía de reintervención en este periodo de reporte:</label>
                    <q-input filled v-model="data.fechaUltimaCirugia">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaUltimaCirugia">
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
                  <q-select rounded standout v-model="data.motivoUltimaCirugia" :options="motivoUltimaCirugia" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>82. Código de la IPS que realiza la última cirugía en este periodo de reporte:</label>
                  <q-input rounded standout v-model="data.codigoIpsUlimaCirugia" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>83. Código de última cirugía en este periodo de reporte:</label>
                  <q-input rounded standout v-model="data.codigoUltimaCirugia" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row uno_items">
              <div class="item">
                  <label>84. Ubicación temporal de esta última cirugía en relación al manejo oncológico, en este periodo de reporte: </label>
                  <q-select rounded standout v-model="data.ubiUltimaCirugia" :options="ubiPrimerCirugiaOnco" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>85. Estado vital al finalizar la única o última cirugía de este periodo de reporte:</label>
                  <q-select rounded standout v-model="data.estadoVitalUnica" :options="estadoVitalUnica" label="Seleccionar" />
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
                  <q-select rounded standout v-model="data.uTipoRadioterapia" :options="uTipoRadioterapia" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>87. Número de sesiones de radioterapia recibidas en el periodo</label>
                    <q-input rounded standout v-model="data.nSesionRadioterapia" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>88. Fecha de inicio de primer o único esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual. Reporte la fecha de inicio del tratamiento actual, así haya sido iniciada previo al reporte actual: </label>
                    <q-input filled v-model="data.fechaUnicaRadioterapia">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaUnicaRadioterapia">
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
                  <q-select rounded standout v-model="data.ubiEsquemaRadioterapia" :options="ubiEsquemaRadioterapia" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>90. Tipo de radioterapia aplicada en este primer o único esquema:  </label>
                  <q-select rounded standout v-model="data.tipoRadioEsquema" :options="tipoRadioEsquema" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>91. Número de IPS que suministran este primer o único esquema de radioterapia: </label>
                    <q-input rounded standout v-model="data.novedadUsuarioReporteAnterior" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row uno_items">
              <div class="item">
                  <label>92. Código de la IPS1 que suministra la radioterapia de este primer o único esquema</label>
                  <q-input rounded standout v-model="data.cdIps1RadioteUnico" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>93. Código de la IPS2 que suministra la radioterapia de este primer o único esquema:</label>
                  <q-input rounded standout v-model="data.cdIps2Radiote" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>94. Fecha de finalización de primer o único esquema de radioterapia: </label>
                    <q-input filled v-model="data.fechaFinRadioterapia">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaFinRadioterapia">
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
                  <q-select rounded standout v-model="data.ctActualRadiaote" :options="ctActualRadiaote" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>96. Motivo de la finalización de este primer o único esquema de radioterapia (aplica si registró la opción 2 de la pregunta anterior). Seleccione un sólo número (lo que primero ocurrió):</label>
                  <q-select rounded standout v-model="data.motivoFinRadiote" :options="motivoFinRadiote" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>97. Fecha de inicio del último esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual: </label>
                    <q-input filled v-model="data.inicioUltimoRadiote">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.inicioUltimoRadiote">
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
                  <q-select rounded standout v-model="data.intencionUltimoRadiote" :options="intencionUltimoRadiote" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>99. Tipo de radioterapia aplicada en el ÚLTIMO esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual</label>
                  <q-select rounded standout v-model="data.tipoUltimoradiote" :options="tipoUltimoradiote" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>100. Número de IPS que suministran este último esquema de cualquier tipo de radioterapia en el periodo de reporte actual: </label>
                  <q-input rounded standout v-model="data.numeroIpsRadiote" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>101. Código de la IPS1 que suministra último esquema de cualquier tipo de radioterapia en el periodo de reporte actual: </label>
                  <q-input rounded standout v-model="data.cdIps1Radiote" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>102. Código de la IPS2 que suministra último esquema de cualquier tipo de radioterapia en el periodo de reporte actual:</label>
                  <q-input rounded standout v-model="data.cdIps2Radiote" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>103. Fecha de finalización del último esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual: </label>
                    <q-input filled v-model="data.fechaFinRadioterapiaActual">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaFinRadioterapiaActual">
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
                  <q-select rounded standout v-model="data.caractActualRadiote" :options="caractActualRadiote" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>105. Motivo de la finalización de este último esquema de cualquier tipo de radioterapia suministrado en el periodo de reporte actual (aplica si registró la opción 2 de la pregunta anterior). Seleccione un sólo número (lo que primero ocurrió):  </label>
                  <q-select rounded standout v-model="data.motivoFinRadiote2" :options="motivoFinRadiote2" label="Seleccionar" />
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
                  <q-select rounded standout v-model="data.trasplanteHematopoyetica" :options="trasplanteHematopoyetica" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>107. Tipo de trasplante recibido: </label>
                  <q-select rounded standout v-model="data.tipoTrasplanteRbd" :options="tipoTrasplanteRbd" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>108. Ubicación temporal de este trasplante en relación al manejo oncológico: </label>
                  <q-select rounded standout v-model="data.ubTemporalTrasplante" :options="ubTemporalTrasplante" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>109. Fecha del trasplante: </label>
                    <q-input filled v-model="data.fechaTrasplante">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaTrasplante">
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
                  <q-input rounded standout v-model="data.cdIpsTrasplante" lazy-rules type="number"></q-input>
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
                  <q-select rounded standout v-model="data.uCirugiaRecontruir" :options="uCirugiaRecontruir" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>112. Fecha de la cirugía reconstructiva:  </label>
                    <q-input filled v-model="data.fechaCirugiaRecontruir">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaCirugiaRecontruir">
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
                  <q-input rounded standout v-model="data.cdIpsReconstruir" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>114. ¿El usuario fue valorado en consulta o procedimiento de cuidado paliativo en el periodo de reporte actual? (pueden haber sido múltiples):</label>
                  <q-select rounded standout v-model="data.uValoradoProcedi" :options="uValoradoProcedi" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>114.1 El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por médico especialista en cuidado paliativo:</label>
                  <q-select rounded standout v-model="data.uCuidadoPaliativo" :options="uCuidadoPaliativo" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>114.2. El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por profesional de la salud (no médico, incluye psicólogo) especialista en cuidado paliativo:</label>
                  <q-select rounded standout v-model="data.uCuidadoPaliativoEspecial" :options="uCuidadoPaliativoEspecial" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>114.3. El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por médico especialista, otra especialidad:</label>
                  <q-select rounded standout v-model="data.uCuidadoEspecialista" :options="uCuidadoPaliativo" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>114.4. El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por médico general:</label>
                  <q-select rounded standout v-model="data.uCuidadoGeneral" :options="uCuidadoPaliativo" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>114.5. El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por trabajo social:</label>
                  <q-select rounded standout v-model="data.uCuidadoSocial" :options="uCuidadoPaliativo" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>114.6. El usuario recibió consulta o procedimiento de cuidado paliativo en el periodo de reporte actual, por otro profesional de salud (no médico, incluye psicólogo) no especializado:</label>
                  <q-select rounded standout v-model="data.uCuidadoProfesionalNoEspecial" :options="uPaliativoGeneral" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>115. Fecha de primera consulta o procedimiento de cuidado paliativo en el periodo de reporte actual: </label>
                    <q-input filled v-model="data.fechaCuidadoPaliativo">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaCuidadoPaliativo">
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
                  <q-input rounded standout v-model="data.cdIpsPaliativoActual" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>117. ¿Ha sido valorado el usuario por el servicio de psiquiatría en el periodo de reporte actual?:</label>
                  <q-select rounded standout v-model="data.valoracionPsiquiatraAct" :options="valoracionPsiquiatraAct" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>118. Fecha de primera consulta con el servicio de psiquiatría (para todos los usuarios) en el periodo de reporte actual:  </label>
                    <q-input filled v-model="data.fechaConsultaPsiquiatria">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaConsultaPsiquiatria">
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
                  <q-input rounded standout v-model="data.cdIpsPrimerPsiquiatria" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>120. ¿Fue valorado el usuario por profesional en nutrición en el periodo de reporte actual?: </label>
                  <q-select rounded standout v-model="data.valorNutricionActu" :options="valorNutricionActu" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>121. Fecha de consulta inicial con nutrición en el periodo de reporte actual:  </label>
                    <q-input filled v-model="data.fechaConsultaNutricion">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaConsultaNutricion">
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
                  <q-input rounded standout v-model="data.cdIpsNutricion" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>123. ¿El usuario recibió soporte nutricional?:  </label>
                  <q-select rounded standout v-model="data.uSoporteNutricion" :options="uSoporteNutricion" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>124. ¿El usuario ha recibido terapias complementarias para su rehabilitación? </label>
                  <q-select rounded standout v-model="data.uTerapiasRehabilitar" :options="uTerapiasRehabilitar" label="Seleccionar" />
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
                  <q-select rounded standout v-model="data.tipoTratamientoCorte" :options="tipoTratamientoCorte" label="Seleccionar" />
              </div>
          </div>

          <h4 class="titulo_fondo w_100">RESULTADO FINAL DE MANEJO ONCOLÓGICO EN ESTE PERIODO DE REPORTE</h4>

          <div class="row dos_items">
              <div class="item">
                  <label>126. Resultado final del manejo oncológico en este periodo de reporte, luego de ser tratado en este periodo el usuario está en:</label>
                  <q-select rounded standout v-model="data.resultadoOncologicoCorte" :options="resultadoOncologicoCorte" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>127. Estado vital al finalizar este periodo de reporte:</label>
                  <q-select rounded standout v-model="data.estadoVitalReporte" :options="estadoVitalReporte" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>128. Novedad ADMINISTRATIVA del usuario respecto al reporte anterior:</label>
                  <q-select rounded standout v-model="data.novedadAdminReporte" :options="novedadAdminReporte" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>129. Novedad clínica del usuario a la fecha de corte:</label>
                  <q-select rounded standout v-model="data.novedadClinicaCorte" :options="novedadClinicaCorte" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>130. Fecha de desafiliación de la EAPB:</label>
                    <q-input filled v-model="data.fechaDesafiliacionEapb">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaDesafiliacionEapb">
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
                    <q-input filled v-model="data.fechaMuerteE">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaMuerteE">
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
                  <q-select rounded standout v-model="data.causaMuerteE" :options="causaMuerteE" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>133. Código único de identificación (BDUA-BDEX-PVS): </label>
                  <q-input rounded standout v-model="data.codifgoidentificiacionBBP" lazy-rules type="number"></q-input>
              </div>
          </div>

          <div class="row uno_items">
              <div class="item">
                  <label>134. Fecha de Corte: </label>
                    <q-input filled v-model="data.fechaCorteCancer">
                      <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                          <q-date v-model="data.fechaCorteCancer">
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
        tumorSolidoCompatibles: {
          id: '',
          label: ''
        },
        riesgosLeucemiaPediatra: {
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
      diagnosticoCancer: [
        { id: '5', label: 'Inmunohistoquímica ' },
        { id: '6', label: 'Citometría de flujo ' },
        { id: '7', label: 'Clínica exclusivamente (incluye estudios imagenológicos y/o de laboratorio en aquellos casos clínicamente justificados en donde fue imposible tomar muestra de estudio histopatológico) ' },
        { id: '8', label: 'Otro' },
        { id: '9', label: 'Genética' },
        { id: '10', label: ' Patología básica' },
        { id: '99', label: ' Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos. ' },
        { id: '55', label: ' Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      noDiagnosticoCancer: [
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
      codigoIpsConfirma: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte. ' },
        { id: '96', label: 'Diagnóstico fuera del país.' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      histologiaTumorBiopsia: [
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
      gradoTumorBiopsia: [
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
      tumorSolidoCompatibles: [
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
      cancerCrecimientoAntes: [
        { id: '1', label: 'Sí se le realizó ' },
        { id: '2', label: 'No se le realizó' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica porque es cáncer de mama in situ ' },
        { id: '98', label: 'No Aplica (no es cáncer de mama)' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos' }
      ],
      cancerMamaResultadoHer2: [
        { id: '1', label: ' +++ (positivo)' },
        { id: '2', label: ' ++ (equivoco o indeterminado) ' },
        { id: '3', label: ' + (negativo)' },
        { id: '4', label: ' cero ó (negativo)' },
        { id: '97', label: ' No Aplica porque es cáncer de mama in situ.' },
        { id: '98', label: ' No Aplica (no es cáncer de mama) o marcó la variable 31 con la opción 2.' },
        { id: '99', label: ' Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      cancerColorrectalDukes: [
        { id: '1', label: 'A' },
        { id: '2', label: 'B' },
        { id: '3', label: 'C' },
        { id: '4', label: 'D' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (no es cáncer colorrectal)' },
        { id: '99', label: 'Es cáncer colorrectal pero no hay información en la historia clínica acerca de esta estadificación' }
      ],
      clinicaLinfomaHodgkin: [
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
      cancerProstataGleason: [
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
      riesgosLeucemiaPediatra: [
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
      objetivoTratamientoInicial: [
        { id: '1', label: 'Curación' },
        { id: '2', label: 'Paliación (intención paliativa) exclusivamente.' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      intervencionPeriodoReporte: [
        { id: '1', label: 'Observación previa a tratamiento (manejo expectante o casos en los que ya tienen orden médica de tratamiento, pero no alcanzó a ser administrado, dado que está cercano a la fecha del corte) ' },
        { id: '2', label: 'Ofrecer tratamiento curativo (quimioterapia, hormonoterapia, radioterapia, cirugía, terapia biológica) o paliativo dirigido al cáncer inicial o por recaída' },
        { id: '3', label: 'Observación o seguimiento oncológico luego de tratamiento inicial (incluye tratamientos médicos para enfermedad general -no oncológica- y métodos diagnósticos de seguimiento)' },
        { id: '4', label: '1 y 2 únicamente' },
        { id: '5', label: '2 y 3 únicamente' },
        { id: '6', label: '1, 2 y 3' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '99', label: 'No hay intervención en el periodo (abandono de terapia, alta oncológica ó alta voluntaria)' }
      ],
      otroCancerPrimario: [
        { id: '1', label: 'Sí' },
        { id: '2', label: 'No' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte' },
        { id: '99', label: 'Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos.' }
      ],
      tipoCancerAntecendente: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '99', label: 'No Aplica (no hay antecedente o concurrencia de otro cáncer primario)' }
      ],
      usuarioQuimioTerapia: [
        { id: '1', label: 'Sí recibió' },
        { id: '98', label: 'No Aplica (no está indicada esta terapia, verifique que en las variables 46 a 73 se registra No Aplica)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      usuarioQuimioFasesPeriodo: [
        { id: '0', label: 'Es cáncer hematolinfático con los siguientes códigos de clasificación diagnóstica CIE 10 ( C835, C910, C920, C924 y C925) y en la variable 45 respondió la opción 98' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (es sólido o es cáncer diferente a los enunciados en las fases)' }
      ],
      uQuimioPrefase: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      uQuimioInduccionPeriodo: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      uQuimioIntensificacion: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      uQuimioConsolidacion: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      uQuimioReinduccion: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      uQuimioMantenimiento: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      uQuimioMantenimientoLargo: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      uQuimioOtraFase: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió (aplica únicamente para los CIE 10 C835, C910, C920, C924 y C925)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (no es leucemia linfoide o mieloide aguda ni linfoma linfoblástico)' }
      ],
      ubicacionPrimerQuimio: [
        { id: '1', label: 'Neoadyuvancia (manejo inicial prequirúrgico)' },
        { id: '2', label: 'Tratamiento inicial curativo sin cirugía sugerida (por ejemplo, sería una opción frecuente en caso de leucemias o linfomas, u otros cánceres a quienes no se les hizo cirugía)' },
        { id: '3', label: 'Adyuvancia (manejo inicial postquirúrgico) ' },
        { id: '11', label: 'Manejo de recaída' },
        { id: '12', label: 'Manejo de enfermedad metastásica' },
        { id: '13', label: 'Manejo paliativo (sin manejo de recaída ni enfermedad metastásica)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasico1: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasico2: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasico3: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasico4: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasico5: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasico6: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasico7: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasico8: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasico9: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasicoVariable: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (No recibió medicamentos diferentes a los enunciados en las variables 53.1 a la 53.9 y en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasicoVariable2: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (No recibió medicamento diferente a los enunciados en las variables 53.1 a la 53.9 y en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      medicamentoAntiplasicoVariable3: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'No Aplica (No recibió medicamento diferente a los enunciados en las variables 53.1 a la 53.9 y en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica (en la variable 45 seleccionó la opción 98)' }
      ],
      quimioIntratecalPrimer: [
        { id: '1', label: 'Sí recibió' },
        { id: '2', label: 'No recibió' },
        { id: '98', label: 'No Aplica (no tuvo ningún esquema de quimioterapia, en variable 45 seleccionó 98= No aplica)' }
      ],
      cartePrimerReporte: [
        { id: '1', label: 'Finalizado, esquema completo según medicamentos programados ' },
        { id: '2', label: 'Finalizado, esquema incompleto pero finalizado por algún motivo' },
        { id: '3', label: 'No finalizado, esquema incompleto, pero aún bajo tratamiento (ejemplo: hormonoterapia o esquema no finalizado)' },
        { id: '98', label: 'No Aplica (no tuvo ningún esquema de terapia sistémica y en la variable 45 seleccionó la opción 98)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte' }
      ],
      prematuraEsquemaOp2: [
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
      ultimoEsquemaOncologico: [
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
      medicamentoAntineplasicoReporte2: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      medicamentoAntineplasicoReporte3: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      medicamentoAntineplasicoReporte4: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      medicamentoAntineplasicoReporte5: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      medicamentoAntineplasicoReporte6: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      medicamentoAntineplasicoReporte7: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      medicamentoAntineplasicoReporte8: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      medicamentoAntineplasicoReporte9: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' },
        { id: '97', label: 'Sí recibió quimioterapia, ya registrada en las variables anteriores (en la variable 45 seleccionó la opción 1)' },
        { id: '98', label: 'No Aplica' }
      ],
      terapiaHormonalCancerVariable: [
        { id: '97', label: 'No Aplica (No recibió medicamento diferente a los enunciados en las variables 66.1 a la 66.9 y en la variable 61 seleccionó una opción <=14)' },
        { id: '98', label: 'No Aplica (no tuvo este último esquema o en la variable 61 seleccionó la opción 97 ó 98)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      terapiaHormonalCancerVariable2: [
        { id: '97', label: 'No Aplica (No recibió medicamento diferente a los enunciados en las variables 66.1 a la 66.9 y en la variable 61 seleccionó una opción <=14)' },
        { id: '98', label: 'No Aplica (no tuvo este último esquema o en la variable 61 seleccionó la opción 97 ó 98)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      terapiaHormonalCancerVariable3: [
        { id: '97', label: 'No Aplica (No recibió medicamento diferente a los enunciados en las variables 66.1 a la 66.9 y en la variable 61 seleccionó una opción <=14)' },
        { id: '98', label: 'No Aplica (no tuvo este último esquema o en la variable 61 seleccionó la opción 97 ó 98)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      quimioIntratecalUltimo: [
        { id: '1', label: 'Si recibió' },
        { id: '2', label: 'No recibió' },
        { id: '98', label: 'No Aplica (no tuvo ningún esquema de quimioterapia, en variable 45 seleccionó 98= No aplica)' }
      ],
      actualEsquemaUltimoPeriodo: [
        { id: '1', label: 'Finalizado, esquema completo según medicamentos programados' },
        { id: '2', label: 'Finalizado, esquema incompleto pero finalizado por algún motivo' },
        { id: '3', label: 'No finalizado, esquema incompleto, pero aún bajo tratamiento (ejemplo: hormonoterapia o esquema no finalizado)' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      motivoPrematuraEsquema: [
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
      usuarioCirugiasCancer: [
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
      ubiPrimerCirugiaOnco: [
        { id: '1', label: 'Parte del manejo inicial para el cáncer (tratamiento inicial curativo)' },
        { id: '5', label: 'Manejo de recaída' },
        { id: '6', label: 'Manejo de enfermedad metastásica.' },
        { id: '98', label: 'No Aplica (seleccionó la opción 2 en la variable 74).' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      estadoVitalUnica: [
        { id: '1', label: 'Vivo' },
        { id: '2', label: 'Fallecido' },
        { id: '98', label: 'No Aplica (seleccionó la opción 2 en la variable 74)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      uTipoRadioterapia: [
        { id: '1', label: 'Si recibió algún tipo de radioterapia' },
        { id: '98', label: 'No aplica (verifique que en las variables 87 a 105 se registre no Aplica)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      ubiEsquemaRadioterapia: [
        { id: '1', label: 'Neoadyuvancia (manejo inicial prequirúrgico)' },
        { id: '2', label: 'Tratamiento inicial curativo sin cirugía sugerida (por ejemplo, solo algunos cánceres que se curan con radioterapia exclusiva)' },
        { id: '3', label: 'Adyuvancia (manejo inicial postquirúrgico) ' },
        { id: '11', label: 'Manejo de recaída' },
        { id: '12', label: 'Manejo de enfermedad metastásica' },
        { id: '13', label: 'Manejo paliativo (sin manejo de recaída ni enfermedad metastásica) ' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      tipoRadioEsquema: [
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
      caractActualRadiote: [
        { id: '1', label: 'Finalizado, dosis completa de radioterapia prescrita' },
        { id: '2', label: 'Finalizado, dosis incompleta pero finalizada por algún motivo ' },
        { id: '3', label: 'No finalizado, esquema incompleto, pero aún bajo tratamiento' },
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      motivoFinRadiote2: [
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
      trasplanteHematopoyetica: [
        { id: '1', label: 'Sí recibió' },
        { id: '98', label: 'No Aplica (verifique que en las variables 107 a 110 se registra No Aplica)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      tipoTrasplanteRbd: [
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
      ubTemporalTrasplante: [
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
      uCirugiaRecontruir: [
        { id: '1', label: 'Sí recibió cirugía' },
        { id: '98', label: 'No Aplica (No recibió este tipo de cirugía, verifique que en las variables 112 y 113 se registra No Aplica)' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      cdIpsReconstruir: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte' }
      ],
      uValoradoProcedi: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      uCuidadoPaliativo: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      uCuidadoPaliativoEspecial: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      uCuidadoPaliativoOtra: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      uPaliativoGeneral: [
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
      valoracionPsiquiatraAct: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No, se ordenó, pero está pendiente' },
        { id: '98', label: 'No aplica, no se ha ordenado valoración por psiquiatría' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      cdIpsPrimerPsiquiatria: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      valorNutricionActu: [
        { id: '1', label: 'Sí fue valorado ' },
        { id: '2', label: 'No recibió' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      cdIpsNutricion: [
        { id: '98', label: 'No Aplica' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      uSoporteNutricion: [
        { id: '1', label: 'Si recibió soporte nutricional enteral' },
        { id: '2', label: 'Si recibió soporte nutricional, parenteral' },
        { id: '3', label: 'Si recibió soporte nutricional enteral y parenteral (opciones:1 y 2) ' },
        { id: '4', label: 'No recibió soporte nutricional' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      uTerapiasRehabilitar: [
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
      tipoTratamientoCorte: [
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
      resultadoOncologicoCorte: [
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
      estadoVitalReporte: [
        { id: '1', label: 'Vivo' },
        { id: '2', label: 'Fallecido' },
        { id: '99', label: 'Desconocido' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      novedadAdminReporte: [
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
      novedadClinicaCorte: [
        { id: '1', label: 'Usuario que está en manejo inicial curativo' },
        { id: '3', label: 'Usuario que finalizó tratamiento inicial y está en seguimiento ' },
        { id: '8', label: 'Abandono de tratamiento' },
        { id: '9', label: 'Usuario firmó alta voluntaria' },
        { id: '10', label: 'Usuario en manejo expectante antes de tratamiento' },
        { id: '11', label: 'Usuario que está en manejo paliativo (incluye manejo de metástasis o de recaída) ' },
        { id: '12', label: 'Usuario fallecido o desafiliado' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      causaMuerteE: [
        { id: '1', label: 'Muerte asociada al cáncer' },
        { id: '2', label: 'Muerte por patología clínica no relacionada al cáncer ' },
        { id: '3', label: 'Muerte por causa externa' },
        { id: '4', label: 'Muerte por causa no conocida' },
        { id: '98', label: 'No Aplica, usuario vivo o se desconoce su estado vital' },
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      motivoUltimaCirugia: [
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
    saveRegister () {
      var _this = this

      if (this.status !== 'finalizado') {
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
