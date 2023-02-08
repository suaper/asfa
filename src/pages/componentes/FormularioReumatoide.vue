<template>
  <q-form @submit="saveRegister">
    <div class="row flex cien space-betwen" >
        <div class="wrp_forms w_50" v-if="firstStep">
          <h4 class='titulo_fondo w_100'>INFORMACION RELACIONADA AL DIAGNÓSTICO Y TRATAMIENTO INICIAL</h4>

          <div class='row dos_items'>
              <div class='item'>
                  <label>17. Fecha inicio síntomas de AR: </label>
                  <q-input filled v-model='data.fechaInicioSintomas'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaInicioSintomas'>
                              <div class='row items-center justify-end'>
                              <q-btn v-close-popup label='Cerrar' color='primary' flat />
                              </div>
                          </q-date>
                          </q-popup-proxy>
                      </q-icon>
                      </template>
                  </q-input>
              </div>
              <div class='item'>
                  <label>18. Fecha de la primera consulta por especialista en relación a la impresión diagnóstica: </label>
                    <q-input filled v-model='data.fechaPrimeraConsulta'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaPrimeraConsulta'>
                              <div class='row items-center justify-end'>
                              <q-btn v-close-popup label='Cerrar' color='primary' flat />
                              </div>
                          </q-date>
                          </q-popup-proxy>
                      </q-icon>
                      </template>
                    </q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>19. Fecha de diagnóstico de AR:</label>
                  <q-input filled v-model='data.fechaDeDiagnostico'>
                    <template v-slot:append>
                    <q-icon name='event' class='cursor-pointer'>
                        <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                        <q-date v-model='data.fechaDeDiagnostico'>
                            <div class='row items-center justify-end'>
                            <q-btn v-close-popup label='Cerrar' color='primary' flat />
                            </div>
                        </q-date>
                        </q-popup-proxy>
                    </q-icon>
                    </template>
                  </q-input>
              </div>
              <div class='item'>
                  <label>20. Talla: </label>
                  <q-input
                      rounded
                      standout
                      v-model='data.talla'
                      lazy-rules
                      type='number'
                      >
                  </q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>21. Peso inicial:</label>
                  <q-input
                      rounded
                      standout
                      v-model='data.PesoInicial'
                      lazy-rules
                      type='number'
                      >
                  </q-input>
              </div>
              <div class='item'>
                  <label>22. Radiografía de manos al diagnóstico: </label>
                  <q-select rounded standout v-model='data.radiografiaDeManos' :options='radiografiaDeManos' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>23. Radiografía de pies al diagnóstico: </label>
                  <q-select rounded standout v-model='data.radiografiaDePies' :options='radiografiaDePies' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>24. VSG (Velocidad de sedimentación globular) Inicial: </label>
                  <q-input
                      rounded
                      standout
                      v-model='data.vsgInicial'
                      lazy-rules
                      type='number'
                      >
                  </q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>25. PCR (Proteína C Reactiva) Inicial:</label>
                  <q-select rounded standout v-model='data.psrInicial' :options='psrInicial' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>26. Factor reumatoideo inicial: </label>
                  <q-select rounded standout v-model='data.factorReumtoideoInicial' :options='factorReumtoideoInicial' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>27. Hemoglobina inicial: </label>
                  <q-input
                      rounded
                      standout
                      v-model='data.hemoglobinaInicial'
                      lazy-rules
                      type='number'
                      >
                  </q-input>
              </div>
              <div class='item'>
                  <label>28. Leucocitos inicial:</label>
                  <q-input
                      rounded
                      standout
                      v-model='data.leucocitosInicial'
                      lazy-rules
                      type='number'
                      >
                  </q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>29. Creatinina Inicial: </label>
                    <q-input
                      rounded
                      standout
                      v-model='data.creatininaInicial'
                      lazy-rules
                      type='number'
                      >
                  </q-input>
              </div>
              <div class='item'>
                  <label>30. TFG Inicial: </label>
                    <q-input
                      rounded
                      standout
                      v-model='data.tfgInicial'
                      lazy-rules
                      type='number'
                      >
                  </q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>31. Parcial de Orina inicial:</label>
                  <q-select rounded standout v-model='data.parcialDeOrina' :options='parcialDeOrina' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>32. ALT Inicial: </label>
                  <q-select rounded standout v-model='data.altInicial' :options='altInicial' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>33. Anti-CCP al diagnóstico:</label>
                  <q-select rounded standout v-model='data.antiCcpDiagnostico' :options='antiCcpDiagnostico' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>34. HTA al diagnóstico</label>
                  <q-select rounded standout v-model='data.htaDiagnostico' :options='htaDiagnostico' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>35. DM al diagnóstico:</label>
                  <q-select rounded standout v-model='data.dmDiagnostico' :options='dmDiagnostico' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>36. ECV (Enfermedad Cardiovascular) al diagnóstico: </label>
                  <q-select rounded standout v-model='data.ecvDiagnostico' :options='ecvDiagnostico' label='Seleccionar' />
              </div>
          </div>
          <div class='row dos_items'>
              <div class='item'>
                  <label>37. ERC al diagnóstico:</label>
                  <q-select rounded standout v-model='data.ercDiagnostico' :options='ercDiagnostico' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>38. Osteoporosis al diagnóstico:</label>
                  <q-select rounded standout v-model='data.ostoporosoisDiagnostico' :options='ostoporosoisDiagnostico' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>39. Síndrome de Sjögren al diagnóstico:</label>
                  <q-select rounded standout v-model='data.ercDiagnostico' :options='ercDiagnostico' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>40. Fecha del primer DAS 28 realizado: </label>
                    <q-input filled v-model='data.fechaPrimerDas'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaPrimerDas'>
                              <div class='row items-center justify-end'>
                              <q-btn v-close-popup label='Cerrar' color='primary' flat />
                              </div>
                          </q-date>
                          </q-popup-proxy>
                      </q-icon>
                      </template>
                    </q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>41. Profesional que realizó el primer DAS 28:   </label>
                <q-select rounded standout v-model='data.profesionalPrimerDas' :options='ostoporosoisDiagnostico' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>42. Resultado del primer DAS 28:</label>
                    <q-input
                      rounded
                      standout
                      v-model='data.resultadoPrimerDas'
                      lazy-rules
                      type='number'
                      >
                  </q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>43.  Fecha del primer HAQ (Health Assessment Questionnaire) realizado: </label>
                    <q-input filled v-model='data.fechaPrimerHaq'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaPrimerHaq'>
                              <div class='row items-center justify-end'>
                              <q-btn v-close-popup label='Cerrar' color='primary' flat />
                              </div>
                          </q-date>
                          </q-popup-proxy>
                      </q-icon>
                      </template>
                    </q-input>
              </div>
              <div class='item'>
                  <label>44. Resultado de HAQ (Health Assessment Questionnaire) inicial:</label>
                    <q-input
                      rounded
                      standout
                      v-model='data.resultadoDeHaq'
                      lazy-rules
                      type='number'
                      >
                  </q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>45.1. Fecha de inicio del tratamiento inicial SIN DMARD (Fármacos Antirreumáticos Modificadores de la Enfermedad), hace referencia al tratamiento con analgésicos, AINES y/o glucocorticoides relacionados en la Var 45.2 a la 45.5:</label>
                    <q-input filled v-model='data.tratamienntoSinDmard'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.tratamienntoSinDmard'>
                              <div class='row items-center justify-end'>
                              <q-btn v-close-popup label='Cerrar' color='primary' flat />
                              </div>
                          </q-date>
                          </q-popup-proxy>
                      </q-icon>
                      </template>
                    </q-input>
              </div>
              <div class='item'>
                  <label>45.2. Analgésicos No Opioides (Acetaminofén - Dipirona) al inicio: </label>
                  <q-select rounded standout v-model='data.analgesicosNoOpioides' :options='analgesicosNoOpioides' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>45.3. Analgésicos Opioides (Codeína - Tramadol) al inicio:</label>
                  <q-select rounded standout v-model='data.analgesricosOpiooides' :options='analgesricosOpiooides' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>45.4. AINES al inicio: </label>
                  <q-select rounded standout v-model='data.ainesInicio' :options='ainesInicio' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>45.5. Corticoides al inicio: </label>
                  <q-select rounded standout v-model='data.corticoidesInicio' :options='corticoidesInicio' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>45.6. Fecha inicio tratamiento con DMARD (Fármacos Antirreumáticos Modificadores de la Enfermedad sintéticos y biológicos):</label>
                  <q-input filled v-model='data.tratamienntoConnDmard'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.tratamienntoConnDmard'>
                              <div class='row items-center justify-end'>
                              <q-btn v-close-popup label='Cerrar' color='primary' flat />
                              </div>
                          </q-date>
                          </q-popup-proxy>
                      </q-icon>
                      </template>
                  </q-input>
              </div>
          </div>
          <div class='row dos_items'>
              <div class='item'>
                  <label>45.8. Antecedente de linfoma antes del inicio de DMARD (Fármacos Antirreumáticos Modificadores de la Enfermedad sintéticos y biológicos): </label>
                  <q-select rounded standout v-model='data.antecedenteLinfoma' :options='antecedenteLinfoma' label='Seleccionar' />
              </div>
              <div class='item'>

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

          <div class="row dos_items">
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

          <div class="row dos_items">
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

          <div class="row dos_items">
              <div class="item">
                  <label>71.3. AINES:</label>
                  <q-select rounded standout v-model="data.ainesS" :options="ainesS" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>71.4. Corticoides:</label>
                  <q-select rounded standout v-model="data.corticoidess" :options="corticoidess" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
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

          <div class="row dos_items">
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
        <div class="wrp_forms w_50" v-if="thirdStep">
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

          <div class="row dos_items">
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
  name: 'FormularioErc',
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
      radiografiaDeManos: [
        { id: '0', label: ' Sin erosiones.' },
        { id: '1', label: 'Con erosiones.' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      radiografiaDePies: [
        { id: '0', label: ' Sin erosiones.' },
        { id: '1', label: 'Con erosiones.' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      psrInicial: [
        { id: '0', label: 'No reactiva.' },
        { id: '1', label: 'Reactiva' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      factorReumtoideoInicial: [
        { id: '0', label: 'Negativo' },
        { id: '1', label: 'Positivo' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      parcialDeOrina: [
        { id: '0', label: 'Sin proteinuria.' },
        { id: '1', label: 'Con proteinuria.' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      altInicial: [
        { id: '0', label: 'Normal' },
        { id: '1', label: 'Anormal' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      antiCcpDiagnostico: [
        { id: '0', label: 'Negativo' },
        { id: '1', label: 'Positivo' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      htaDiagnostico: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      dmDiagnostico: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      ecvDiagnostico: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      ercDiagnostico: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      ostoporosoisDiagnostico: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      profesionalPrimerDas: [
        { id: '1', label: ' Médico general.' },
        { id: '2', label: ' Médico familiar.' },
        { id: '3', label: ' Internista.' },
        { id: '4', label: ' Fisiatra.' },
        { id: '5', label: ' Ortopedista.' },
        { id: '6', label: ' Reumatólogo.' },
        { id: '7', label: ' Enfermero.' },
        { id: '9', label: ' Sin Dato.' },
        { id: '55', label: ' No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }

      ],
      analgesicosNoOpioides: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      analgesricosOpiooides: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      ainesInicio: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      corticoidesInicio: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      antecedenteLinfoma: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '300', label: 'Sin dato' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      uSoporteNutricion: [
        { id: '55', label: 'Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte.' }
      ],
      azatioprina: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      ciclosporina: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      ciclofosfamida: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      cloroquina: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      dPenicilamina: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      Etanercept: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      leflunomida: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      metotrexate: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      rituximab: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      sulfasalazina: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      abatacept: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      adalimumab: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      certolizumab: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      golimumab: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      hidroxicloroquina: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      infliximab: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      salesdeOro: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      tocilizumab: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      tofacitinib: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      anakinra: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      tamizajeParaTb: [
        { id: '0', label: 'No' },
        { id: '1', label: 'Si' },
        { id: '2', label: ' No aplica (porque el paciente no inició DMARD en el período ni cambio DMARD en el período) incluir abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      radiografiaDeManosUltimas: [
        { id: '0', label: ' Sin erosiones.' },
        { id: '1', label: 'Con erosiones.' },
        { id: '300', label: 'Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      proteinaCReactiva: [
        { id: '0', label: 'No reactiva.' },
        { id: '1', label: 'Reactiva' },
        { id: '300', label: 'Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      velocidadDeSedimentacion: [
        { id: '0', label: 'No reactiva.' },
        { id: '1', label: 'Reactiva' },
        { id: '300', label: 'Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      parcialDeOrinaSeguimiento: [
        { id: '0', label: 'Sin proteinuria.' },
        { id: '1', label: 'Con proteinuria.' },
        { id: '300', label: 'Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      altSeguimiento: [
        { id: '0', label: 'Normal.' },
        { id: '1', label: 'Anormal.' },
        { id: '300', label: ': Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      htaActual: [
        { id: '0', label: 'No.' },
        { id: '1', label: 'Si.' },
        { id: '300', label: ': Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      dmActual: [
        { id: '0', label: 'No.' },
        { id: '1', label: 'Si.' },
        { id: '300', label: ': Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      ecvActual: [
        { id: '0', label: 'No.' },
        { id: '1', label: 'Si.' },
        { id: '300', label: ': Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      ercActual: [
        { id: '0', label: 'No.' },
        { id: '1', label: 'Si.' },
        { id: '300', label: ': Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      osteoporosisActual: [
        { id: '0', label: 'No.' },
        { id: '1', label: 'Si.' },
        { id: '300', label: ': Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      sindromeActual: [
        { id: '0', label: 'No.' },
        { id: '1', label: 'Si.' },
        { id: '300', label: ': Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      profesionalUltimoDas: [
        { id: '1', label: ' Médico general.' },
        { id: '2', label: ' Médico familiar.' },
        { id: '3', label: ' Internista.' },
        { id: '4', label: ' Fisiatra.' },
        { id: '5', label: ' Ortopedista.' },
        { id: '6', label: ' Reumatólogo.' },
        { id: '7', label: ' Enfermero.' },
        { id: '9', label: ' Sin dato o paciente en abandono.' },
        { id: '55', label: ' No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      estadoActividadActual: [
        { id: '0', label: 'Remisión (>=0 y <2.6).' },
        { id: '1', label: 'Baja actividad (>=2.6 y <=3.2)' },
        { id: '2', label: 'Activa (>3.2 y <=10)' },
        { id: '300', label: ': Sin dato o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      AlangesicosNoOpioides: [
        { id: '0', label: ' No.' },
        { id: '1', label: 'Si.' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      AlangesicosSiOpioides: [
        { id: '0', label: ' No.' },
        { id: '1', label: 'Si.' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      ainesS: [
        { id: '0', label: ' No.' },
        { id: '1', label: 'Si.' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      corticoidess: [
        { id: '0', label: ' No.' },
        { id: '1', label: 'Si.' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      calcio: [
        { id: '0', label: ' No.' },
        { id: '1', label: 'Si.' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      vitaminaD: [
        { id: '0', label: ' No.' },
        { id: '1', label: 'Si.' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      prueba: [
        { id: '0', label: ' No.' },
        { id: '1', label: 'Si.' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      remplazoArticular: [
        { id: '0', label: ' No.' },
        { id: '1', label: ' Cadera.' },
        { id: '2', label: ' Rodilla.' },
        { id: '3', label: ' Tobillo.' },
        { id: '4', label: ' Hombro.' },
        { id: '5', label: ' Codo.' },
        { id: '55', label: ' No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      remplazoArticularDos: [
        { id: '0', label: ' No.' },
        { id: '1', label: ' Cadera.' },
        { id: '2', label: ' Rodilla.' },
        { id: '3', label: ' Tobillo.' },
        { id: '4', label: ' Hombro.' },
        { id: '5', label: ' Codo.' },
        { id: '55', label: ' No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      remplazoArticularTres: [
        { id: '0', label: ' No.' },
        { id: '1', label: ' Cadera.' },
        { id: '2', label: ' Rodilla.' },
        { id: '3', label: ' Tobillo.' },
        { id: '4', label: ' Hombro.' },
        { id: '5', label: ' Codo.' },
        { id: '55', label: ' No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      remplazoArticularCuatro: [
        { id: '0', label: ' No.' },
        { id: '1', label: ' Cadera.' },
        { id: '2', label: ' Rodilla.' },
        { id: '3', label: ' Tobillo.' },
        { id: '4', label: ' Hombro.' },
        { id: '5', label: ' Codo.' },
        { id: '55', label: ' No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
      ],
      atencionClinicaAr: [
        { id: '1', label: ' Médico general.' },
        { id: '2', label: ' Médico familiar.' },
        { id: '3', label: ' Internista.' },
        { id: '4', label: ' Fisiatra.' },
        { id: '5', label: ' Ortopedista.' },
        { id: '6', label: ' Reumatólogo.' },
        { id: '9', label: ' No aplica, paciente en abandono' },
        { id: '55', label: ' No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      novedadPacienteAnterior: [
        { id: '0', label: ' No presenta ninguna novedad' },
        { id: '1', label: ' Ingreso a EAPB con diagnóstico de AR' },
        { id: '2', label: ' Usuario antiguo en EAPB a quien se le realizó nuevo diagnóstico de AR' },
        { id: '3', label: ' Usuario antiguo en EAPB y antiguo diagnóstico de AR que no había sido incluido en reporte' },
        { id: '4', label: ' Suspensión del tratamiento por orden médica' },
        { id: '5', label: ' Persona que firmó alta voluntaria del tratamiento' },
        { id: '6', label: ' Usuario abandonó el tratamiento.' },
        { id: '7', label: ' Usuario con cambio de tipo o número de identificación' },
        { id: '8', label: ' Usuario con diagnóstico confirmado de AR no incluido en reporte anterior y que está desafiliado en el momento del reporte actual' },
        { id: '9', label: ' Usuario con diagnóstico confirmado de AR no incluido en reporte anterior y que está fallecido en el momento del reporte actual' },
        { id: '10', label: ' Usuario para eliminar de la base por corrección luego de auditoría interna o de la CAC' },
        { id: '11', label: ' Usuario que se desafilió' },
        { id: '12', label: ' Usuario que falleció' },
        { id: '13', label: ' Persona con aseguramiento que recibió servicios no incluidos en el plan de beneficios por parte del ente territorial.' },
        { id: '14', label: ' Comunidad migrante de la República de Venezuela' },
        { id: '15', label: ' Usuario identificado por fuentes externas con diagnóstico AR descartado por la entidad.' },
        { id: '16', label: ' Usuario identificado por fuente externas con diagnóstico AR no gestionado por la entidad.' },
        { id: '17', label: ' Paciente trasladado que fue glosado en periodo anterior que no fue gestionado por la entidad en el periodo.' }
      ],
      causaMuerte: [
        { id: '1', label: 'Muerte por artritis reumatoide.' },
        { id: '2', label: 'Muerte por otra patología.' },
        { id: '3', label: 'Muerte por causa externa.' },
        { id: '55', label: ' No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios.' }
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
            if (typeof data.error !== 'undefined' && _this.registerNid === '') {
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
        } else {
          _this.$router.push('/resumen')
        }
      }
    }
  }
}
</script>
