<template>
  <q-form @submit="saveRegister">
    <div class="row flex cien space-betwen" >
        <div class="wrp_forms w_50" v-if="firstStep">
          <h4 class="titulo_fondo w_100">INFORMACIÓN GENERAL RELACIONADA CON LAS VARIABLES CLÍNICAS Y PARACLÍNICAS DE LAS ENFERMEDADES PRECURSORAS</h4>
          <div class="row dos_items">
            <div class="item">
                <label>16.   Código de la IPS donde se hace seguimiento al usuario</label>
                <q-input rounded standout v-model="data.codigoIpsSeguimiento" lazy-rules type="number"></q-input>
            </div>
            <div class="item">
                <label>17.   Fecha de ingreso al programa de atención renal (nefroprotección, protección renal) dentro de la EAPB/Ente territorial que reporta</label>
                  <q-input filled v-model="data.fechaIngresoAtencionRenal">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaIngresoAtencionRenal">
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
                <label>18.   El usuario tiene diagnóstico confirmado de Hipertensión Arterial -HTA (incluye los códigos CIE10 I10- I159, I674, O10, O100-O109, P292): </label>
                <q-select rounded standout v-model="data.diagnosticoHipertensionHta" :options="diagnosticoHipertensionHta" label="Seleccionar" />
            </div>
            <div class="item">
                <label>19.   Fecha de diagnóstico de la Hipertensión Arterial:</label>
                  <q-input filled v-model="data.fechaHipertensionArterial">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaHipertensionArterial">
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
                <label>19.1.   Costo HTA durante el período de reporte:</label>
                <q-select rounded standout v-model="data.costoHtaReporte" :options="costoHtaReporte" label="Seleccionar" />
            </div>
            <div class="item">
                <label>20.   El usuario tiene diagnóstico confirmado de Diabetes Mellitus- DM (CIE-10 con códigos entre E10- E 149; O240-O243; P702): </label>
                <q-select rounded standout v-model="data.diagConfirmadoMellitus" :options="diagConfirmadoMellitus" label="Seleccionar" />
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>21.   Fecha de diagnóstico de la Diabetes Mellitus:</label>
                  <q-input filled v-model="data.fechaDiagnostivoMellitus">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaDiagnostivoMellitus">
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
                <label>21.1. Costo DM durante el período de reporte:</label>
                <q-input
                  rounded
                  standout
                  v-model="data.costoDmReporte"
                  lazy-rules
                  type="number"
                  >
                </q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>22.   Etiología de la ERC:</label>
                <q-select rounded standout v-model="data.etilogiaErc" :options="etilogiaErc" label="Seleccionar" />
            </div>
            <div class="item">
                <label>23.   Peso (kg):</label>
                  <q-input rounded standout v-model="data.pesoKg" lazy-rules type="number"></q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>24.   Talla (cm):</label>
                  <q-input rounded standout v-model="data.tallaCm" lazy-rules type="number"></q-input>
            </div>
            <div class="item">
                <label>25.   Tensión arterial sistólica (mm de Hg):</label>
                  <q-input rounded standout v-model="data.tensionArterialSistolica" lazy-rules type="number"></q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>26.   Tensión arterial diastólica (mm de Hg):</label>
                  <q-input rounded standout v-model="data.tensionArterialDistolica" lazy-rules type="number"></q-input>
            </div>
            <div class="item">
                <label>27.   Creatinina en sangre (mg/dl):</label>
                <q-input
                  rounded
                  standout
                  v-model="data.creatininaSangre"
                  lazy-rules
                  type="number"
                  >
                </q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>27.1.   Fecha de última creatinina:</label>
                  <q-input filled v-model="data.fechaUltimaCreatinina">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaUltimaCreatinina">
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
                <label>28.   Hemoglobina glicosilada (%):</label>
                <q-input rounded standout v-model="data.porcentajeHemoGlicosilida" lazy-rules type="number"></q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>28.1.    Fecha de última hemoglobina glicosilada:</label>
                  <q-input filled v-model="data.fechaUltimaHemoglobinaGli">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaUltimaHemoglobinaGli">
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
                <label>29.   Albuminuria (mg/24h):</label>
                <q-input rounded standout v-model="data.mgAlbuminuria" lazy-rules type="number"></q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>29.1.   Fecha de la última albuminuria:</label>
                  <q-input filled v-model="data.fechaUltimaAlbuminuria">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaUltimaAlbuminuria">
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
                <label>30.   Relación Albuminuria/Creatinuria (mg/g):</label>
                <q-input rounded standout v-model="data.mgAlbuminuriaCreatinuria" lazy-rules type="number"></q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>30.1.   Fecha de la última Albuminuria/Creatinuria:</label>
                  <q-input filled v-model="data.fechaUltimaAlbuminuriaCreatinuria">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaUltimaAlbuminuriaCreatinuria">
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
                <label>31.   Colesterol total (mg/dl):</label>
                <q-input rounded standout v-model="data.mgColesterolTotal" lazy-rules type="number"></q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>31.1.   Fecha del último colesterol total:</label>
                  <q-input filled v-model="data.fechaUltimoColesterolTotal">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaUltimoColesterolTotal">
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
                <label>32.   Colesterol HDL (mg/dl):</label>
                <q-input rounded standout v-model="data.mgColesterolHdl" lazy-rules type="number"></q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>32.1.   Fecha del último colesterol HDL</label>
                  <q-input filled v-model="data.fechaUltimoColesterolHdl">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaUltimoColesterolHdl">
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
                <label>33.   Colesterol LDL (mg/dl):</label>
                <q-input rounded standout v-model="data.mgColesterolLdl" lazy-rules type="number"></q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>33.1.   Fecha del último colesterol LDL</label>
                  <q-input filled v-model="data.fechaUltimaCreatinina">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaUltimaCreatinina">
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
                <label>34.   Parathormona PTH (pg/mL):</label>
                <q-input rounded standout v-model="data.mgParathormonaPth" lazy-rules type="number"></q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>34.1.   Fecha de la última Parathormona PTH:</label>
                  <q-input filled v-model="data.fechaUltimaParathormonaPth">
                    <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                        <q-date v-model="data.fechaUltimaParathormonaPth">
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
                <label>35.   Tasa de filtración glomerular estimada (TFGe) según Cockcroft-Gault (en adultos) o Swhartz (en menores de 18 años) o FRR estimada mediante el cálculo del KrU, dentro del periodo de reporte (1 de julio 2021 a 30 junio de 2022):</label>
                <q-input rounded standout v-model="data.tasaGlomerularTfge" lazy-rules type="number"></q-input>
            </div>
        </div>

        <div class="row dos_items">
            <div class="item">
                <label>36.   El usuario recibe Inhibidor de la Enzima Convertidora de Angiotensina (IECA) a la fecha de corte: </label>
                <q-select rounded standout v-model="data.uRecibeEnzimaIeca" :options="uRecibeEnzimaIeca" label="Seleccionar" />
            </div>
            <div class="item">
                <label>37.   El usuario recibe Antagonista de los Receptores de Angiotensina II (ARA II) a la fecha de corte: </label>
                  <q-select rounded standout v-model="data.uRecibeAraII" :options="uRecibeAraII" label="Seleccionar" />
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
          <h4 class="titulo_fondo w_100">INFORMACIÓN RELACIONADA CON DIAGNÓSTICO Y TRATAMIENTO DE LA ENFERMEDAD RENAL CRÓNICA</h4>

          <div class='row dos_items'>
              <div class='item'>
                  <label>38.  El usuario tiene diagnóstico de ERC en cualquiera de sus estadios</label>
                  <q-select rounded standout v-model='data.uDiagnosticoErc' :options='uDiagnosticoErc' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>39.  Estadio de la ERC: </label>
                  <q-select rounded standout v-model='data.estadioErc' :options='estadioErc' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>40.  Fecha de diagnóstico de ERC estadio 5 </label>
                    <q-input filled v-model='data.fechaDiagnosticoErc5'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaDiagnosticoErc5'>
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
                  <label>41.  La persona se encuentra en un programa de atención renal (reno protección, nefro protección, protección renal, pre diálisis) a la fecha de corte (Aplica para pacientes con HTA, DM y ERC sin TRR)</label>
                  <q-select rounded standout v-model='data.programaARenalCorte' :options='programaARenalCorte' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>42.  TFG medida en la fecha en que el usuario inició la primera TRR:</label>
                    <q-input rounded standout v-model='data.tfgMedidaInicioPrimerTrr' lazy-rules type='number'></q-input>
              </div>
              <div class='item'>
                  <label>43.  Modo de Inicio de la primera Terapia de Reemplazo Renal: </label>
                  <q-select rounded standout v-model='data.inicioTerapiaReemplazoRenal' :options='inicioTerapiaReemplazoRenal' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>44.  Fecha en que se inició la terapia de reemplazo renal que recibe el usuario en el momento de la fecha de corte:</label>
                    <q-input filled v-model='data.fechaInicioTerapiaReemplazoRenal'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaInicioTerapiaReemplazoRenal'>
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
                <label>45.  Fecha de Ingreso a la Unidad Renal Actual que le presta al paciente el servicio de terapia dialítica al momento de la fecha de corte:</label>
                  <q-input filled v-model='data.fechaInicioTerapiaReemplazoRenal'>
                    <template v-slot:append>
                    <q-icon name='event' class='cursor-pointer'>
                        <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                        <q-date v-model='data.fechaInicioTerapiaReemplazoRenal'>
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
                  <label>46.  Hemodiálisis (HD) a la fecha de corte:</label>
                  <q-select rounded standout v-model='data.hemodialisisCorte' :options='hemodialisisCorte' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>47.  Dosis de diálisis Kt/V single pool (volumen de fluido filtrado de urea sobre el volumen de agua en el cuerpo del usuario):</label>
                    <q-input rounded standout v-model='data.dosisDialisisSinglePool' lazy-rules type='number'></q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>48.  Costo total de la hemodiálisis (HD) durante el período de reporte:</label>
                    <q-input rounded standout v-model='data.costoTotalHemodialisisDurante' lazy-rules type='number'></q-input>
              </div>
              <div class='item'>
                  <label>49.  Diálisis peritoneal (DP) a la fecha de corte:</label>
                  <q-select rounded standout v-model='data.dialisisPeritonealCorte' :options='dialisisPeritonealCorte' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>50.  Dosis de diálisis (Kt/V) KTV/dpd de máximo seis meses de antigüedad contados a partir de la fecha de corte:</label>
                    <q-input rounded standout v-model='data.dosisDialisis6Meses' lazy-rules type='number'></q-input>
              </div>
              <div class='item'>
                  <label>51.  Número de horas de hemodiálisis:</label>
                    <q-input rounded standout v-model='data.numHorasHemodialisis' lazy-rules type='number'></q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>52.  Peritonitis infecciosa</label>
                    <q-input rounded standout v-model='data.numPeritonitisInfecciosa' lazy-rules type='number'></q-input>
              </div>
              <div class='item'>
                  <label>53.  Costo total de la DP durante el período de reporte:</label>
                  <q-input rounded standout v-model='data.costoTotalDpDurante' lazy-rules type='number'></q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>54.  Vacuna Hepatitis B:</label>
                    <q-select rounded standout v-model='data.vacunaHepatiB' :options='vacunaHepatiB' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>55.  Si el usuario ha presentado infección por Hepatitis B, registre la fecha de diagnóstico:</label>
                    <q-input filled v-model='data.fechaInfeccionHepatiB'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaInfeccionHepatiB'>
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
                  <label>56.  Si el usuario ha presentado infección por Hepatitis C, registre la fecha de diagnóstico:</label>
                  <q-input filled v-model='data.fechaInfeccionHepatiC'>
                    <template v-slot:append>
                    <q-icon name='event' class='cursor-pointer'>
                        <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                        <q-date v-model='data.fechaInfeccionHepatiC'>
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
                  <label>58.  Costo total del TMND durante el período de reporte:</label>
                  <q-input rounded standout v-model='data.costoTotalTmndReporte' lazy-rules type='number'></q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>59.  Hemoglobina (g/dl):</label>
                  <q-input rounded standout v-model='data.gdlHemoglobina' lazy-rules type='number'></q-input>
              </div>
              <div class='item'>
                  <label>60.  Albúmina sérica (g/dl):</label>
                  <q-input rounded standout v-model='data.gdlAlbuminaSerica' lazy-rules type='number'></q-input>
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
          <h4 class="titulo_fondo w_100">INFORMACIÓN RELACIONADA CON DIAGNÓSTICO Y TRATAMIENTO DE LA ENFERMEDAD RENAL CRÓNICA</h4>
          <div class='row dos_items'>
            <div class='item'>
                <label>61.  Fósforo sérico(P) mg/dl:</label>
                <q-input rounded standout v-model='data.mgFosforoSerico' lazy-rules type='number'></q-input>
            </div>
            <div class='item'>
                <label>62.  Última valoración clínica por nefrología dentro del periodo de reporte de pacientes con ERC estadio 5 en diálisis o con TMND, en relación con la posibilidad de trasplante renal:</label>
                <q-select rounded standout v-model='data.ultValoracionErcTmnd' :options='ultValoracionErcTmnd' label='Seleccionar' />
            </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>62.1.  ¿Se reportó cáncer activo en los últimos 12 meses como contraindicación para el trasplante renal, en la valoración de nefrología?:</label>
                  <q-select rounded standout v-model='data.CancerTrasplanteRenal' :options='CancerTrasplanteRenal' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>62.2.  ¿Se reportó infección crónica o activa no tratada o no controlada hasta en los últimos tres meses antes de la fecha de corte, como contraindicación para el trasplante renal, en la valoración de nefrología?:</label>
                  <q-select rounded standout v-model='data.infeccionCronicaTrasRenal' :options='infeccionCronicaTrasRenal' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>62.3.  ¿Se reportó que el paciente ha manifestado su deseo de NO trasplantarse, como contraindicación para el trasplante, en la valoración por nefrología?:</label>
                  <q-select rounded standout v-model='data.pacienteNoTrasplante' :options='pacienteNoTrasplante' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>62.4.  ¿Se reportó que el paciente tiene una esperanza de vida menor o igual a 6 meses, como contraindicación para el trasplante, en la valoración por nefrología?:</label>
                  <q-select rounded standout v-model='data.paContraTrasplante' :options='paContraTrasplante' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>62.5.  ¿Se reportó que el paciente presenta limitaciones potenciales para el autocuidado y adherencia al tratamiento post trasplante, como contraindicación para el trasplante renal, en la valoración por nefrología?:</label>
                  <q-select rounded standout v-model='data.paLimitacionTrasplanterenal' :options='paLimitacionTrasplanterenal' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>62.6.  ¿Se reportó enfermedad cardiaca, cerebrovascular o vascular periférica, como contraindicación para el trasplante renal, en la valoración de nefrología?:</label>
                  <q-select rounded standout v-model='data.enfCardiacaTrasplanteRenal' :options='enfCardiacaTrasplanteRenal' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>62.7.  ¿Se reportó infección por el VIH, como contraindicación para el trasplante renal, en la valoración de nefrología?:</label>
                  <q-select rounded standout v-model='data.infeccionVihTransplanteRenal' :options='infeccionVihTransplanteRenal' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>62.8.  ¿Se reportó infección por el VHC, como contraindicación para el trasplante renal, en la valoración de nefrología?:</label>
                  <q-select rounded standout v-model='data.infeccionVhcTrasplanteRenal' :options='infeccionVhcTrasplanteRenal' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>62.9.  ¿Se reportó que el paciente presenta enfermedad inmunológica activa los últimos tres meses antes de la fecha de corte, como contraindicación para el trasplante, en la valoración por nefrología?: </label>
                  <q-select rounded standout v-model='data.enfInmunologicaTrasplante' :options='enfInmunologicaTrasplante' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>62.10. ¿Se reportó que el paciente presenta enfermedad pulmonar crónica, como contraindicación para el trasplante, en la valoración por nefrología?:</label>
                    <q-select rounded standout v-model='data.enfPulmonarCronicaTras' :options='enfPulmonarCronicaTras' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>62.11. ¿Se reportó que el paciente presenta otras e nfermedades crónicas, como contraindicación para el trasplante, en la valoración por nefrología?:</label>
                  <q-select rounded standout v-model='data.otrasEnfCronicasTrasplante' :options='otrasEnfCronicasTrasplante' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>63.  Fecha de ingreso a lista de espera para la realización del trasplante renal:</label>
                    <q-input filled v-model='data.fechaEsperaTrasplanteRenal'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaEsperaTrasplanteRenal'>
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
                  <label>63.1.  Registre el código de la IPS donde está en lista de espera:</label>
                  <q-select rounded standout v-model='data.codigoIpsEspera' :options='codigoIpsEspera' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>64.  El usuario ha recibido trasplante renal?:</label>
                    <q-select rounded standout v-model='data.recibioTrasplanteRenal' :options='recibioTrasplanteRenal' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>65.  Código de la EPS que realizó el último trasplante renal:</label>
                  <q-select rounded standout v-model='data.codEpsTrasplanteRenal' :options='codEpsTrasplanteRenal' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>66.  Código de la IPS o Grupo de trasplante, que realizó el último trasplante renal:</label>
                    <q-select rounded standout v-model='data.codIpsGrupoTrasplante' :options='codIpsGrupoTrasplante' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>67.   Tipo de donante del último trasplante renal: </label>
                  <q-select rounded standout v-model='data.tipoDonanteUlttrasplanteRenal' :options='tipoDonanteUlttrasplanteRenal' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>68.  Costo del último trasplante realizado en el periodo de reporte:</label>
                  <q-input rounded standout v-model='data.costoUltimoTrasplante' lazy-rules type='number'></q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>69.  ¿El paciente con trasplante renal ha presentado alguna complicación (¿de las mencionadas en las variables 69.1 a 69.7) relacionada con el último trasplante renal?:</label>
                  <q-select rounded standout v-model='data.complicacionUltimoTrasplante' :options='complicacionUltimoTrasplante' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>69.1.  Si el paciente con trasplante renal ha presentado infección por Citomegalovirus (CMV), registre la fecha de diagnóstico:</label>
                    <q-input filled v-model='data.fechaTrasplanteRenalInfeccion'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaTrasplanteRenalInfeccion'>
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
                  <label>69.2.  Si el paciente con trasplante renal ha presentado infección por hongos registre la fecha de diagnóstico: </label>
                    <q-input filled v-model='data.fechaTrasplanteRenalHongos'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaTrasplanteRenalHongos'>
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
                  <label>69.3.  Si el paciente con trasplante renal ha presentado infección activa por tuberculosis, registre la fecha de diagnóstico:</label>
                    <q-input filled v-model='data.fechaTrasplanteRenalTuberculosis'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaTrasplanteRenalTuberculosis'>
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
                  <label>69.4.  Si el paciente con trasplante renal ha presentado alguna complicación vascular, registre la fecha de diagnóstico:</label>
                    <q-input filled v-model='data.fechaTrasplanteRenalVarcular'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaTrasplanteRenalVarcular'>
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
                  <label>69.5.  Si el paciente con trasplante renal ha presentado alguna complicación urológica, registre la fecha de diagnóstico:</label>
                    <q-input filled v-model='data.fechaTrasplanteRenalUrologia'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaTrasplanteRenalUrologia'>
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
                  <label>69.6.  Si el paciente con trasplante renal ha presentado alguna complicación de la herida quirúrgica, registre la fecha de diagnóstico</label>
                    <q-input filled v-model='data.fechaTrasplanteRenalQuirurgica'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaTrasplanteRenalQuirurgica'>
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
                  <label>69.7.  Si al paciente con trasplante renal se le diagnóstica cualquier tipo de cáncer posterior al trasplante, registre la fecha del primer diagnóstico de cáncer:</label>
                    <q-input filled v-model='data.fechaTrasplanteRenalCancer'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaTrasplanteRenalCancer'>
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
                  <label>70.  ¿Cuántos medicamentos inmunosupresores recibe el paciente actualmente para el manejo del trasplante renal ):</label>
                  <q-input rounded standout v-model='data.medicamentosInmonosupresorTR' lazy-rules type='number'></q-input>
              </div>
              <div class='item'>
                  <label>70.1.  Actualmente (última prescripción) el paciente recibe Metilprednisolona para el manejo del trasplante renal:</label>
                    <q-select rounded standout v-model='data.ultimaMetilprednisolonaTR' :options='ultimaMetilprednisolonaTR' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>70.2.  Actualmente (última prescripción) el paciente recibe Azatioprina para el manejo del trasplante re nal:</label>
                    <q-select rounded standout v-model='data.ultimaAzatioprinaTR' :options='ultimaAzatioprinaTR' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>70.3.  Actualmente (última prescripción) el paciente recibe Ciclosporina para el manejo del trasplante re nal:</label>
                    <q-select rounded standout v-model='data.ultimaCiclosporinaTR' :options='ultimaCiclosporinaTR' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>70.4.  Actualmente (última prescripción) el paciente recibe Micofenolato para el manejo del trasplante renal:</label>
                    <q-select rounded standout v-model='data.ultimaMocifenolatoTR' :options='ultimaMocifenolatoTR' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>70.5.  Actualmente (última prescripción) el paciente recibe Tacrolimus para el manejo del trasplante renal:</label>
                    <q-select rounded standout v-model='data.ultimaTacrolimusTR' :options='ultimaTacrolimusTR' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>70.6.  Actualmente (última prescripción) el paciente recibe Prednisona para el manejo del trasplante renal:</label>
                    <q-select rounded standout v-model='data.ultimaPrednisonaTR' :options='ultimaPrednisonaTR' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>70.7.  Actualmente (última prescripción) el paciente recibe para el manejo del trasplante renal medicamentos inmunosupresores no incluidos en las variables 70.1 a 70.6 o no incluidos en el plan de be neficios (medicamento 1):</label>
                  <q-select rounded standout v-model='data.medicamentoTRNoIncluido1' :options='medicamentoTRNoIncluido1' label='Seleccionar' />
              </div>
          </div>
          <div class='row dos_items'>
              <div class='item'>
                  <label>70.8.  Actualmente (última prescripción) el paciente recibe para el manejo del trasplante renal medicamentos inmunosupresores no incluidos en las variables 70.1 a 70.6 o no incluidos en el plan de be neficios (medicamento 2):70.4.  Actualmente (última prescripción) el paciente recibe Micofenolato para el manejo del trasplante re nal:</label>
                    <q-select rounded standout v-model='data.medicamentoTRNoIncluido2' :options='medicamentoTRNoIncluido2' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>70.9.  Actualmente (última prescripción) el paciente recibe para el manejo del trasplante renal medicamentos inmunosupresores no incluidos en las variables 70.1 a 70.6 o no incluidos en el plan de be neficios (medicamento 3):</label>
                    <q-select rounded standout v-model='data.medicamentoTRNoIncluido3' :options='medicamentoTRNoIncluido3' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>71.  ¿Cuántos episodios de rechazo agudo confirmados por biopsia en los primeros 12 meses posteriores al trasplante, ha presentado el paciente con trasplante renal?:</label>
                    <q-select rounded standout v-model='data.rechazoBiopsiaTR' :options='rechazoBiopsiaTR' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>72.  Fecha del primer rechazo agudo del injerto (confirmado por biopsia en los primeros 12 meses posteriores al trasplante):</label>
                    <q-input filled v-model='data.fechaRechazoInjerto'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaRechazoInjerto'>
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
                  <label>73.  Fecha de retorno a diálisis por pérdida definitiva del trasplante renal:</label>
                    <q-input filled v-model='data.fechaRetornoDialisis'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaRetornoDialisis'>
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
                  <label>74.  Número de trasplantes renales que ha recibido el paciente:</label>
                  <q-input rounded standout v-model='data.numeroTRRecibido' lazy-rules type='number'></q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>75.  Costo de la terapia postrasplante renal:</label>
                  <q-input rounded standout v-model='data.costoPostrasplanteRenal' lazy-rules type='number'></q-input>
              </div>
              <div class='item'>
                  <label>76.  Tiempo de prestación de servicios:</label>
                  <q-input rounded standout v-model='data.tiempoPrestacionServicio' lazy-rules type='number'></q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>77. Costo Total:</label>
                  <q-input rounded standout v-model='data.costoTotal' lazy-rules type='number'></q-input>
              </div>
              <div class='item'>
                  <label>78.  Código de la EPS de origen:</label>
                  <q-input rounded standout v-model='data.codigoEpsOrigen' lazy-rules type='number'></q-input>
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>79.  Novedad con respecto al reporte anterior:</label>
                  <q-select rounded standout v-model='data.novedadReporteAnterior' :options='novedadReporteAnterior' label='Seleccionar' />
              </div>
              <div class='item'>
                  <label>80.  Causa de Muerte:</label>
                  <q-select rounded standout v-model='data.causaDeMuerte' :options='causaDeMuerte' label='Seleccionar' />
              </div>
          </div>

          <div class='row dos_items'>
              <div class='item'>
                  <label>80.1.  Fecha de muerte:</label>
                    <q-input filled v-model='data.fechaDeMuerte'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaDeMuerte'>
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
                  <label>81.  Código único de identificación (BDUA, BDEX, PVS):</label>
                  <q-input rounded standout v-model='data.codigoUnicoBBP' lazy-rules type='number'></q-input>
              </div>
          </div>

          <div class='row uno_items'>
              <div class='item'>
                  <label>82.  Fecha de corte del reporte:</label>
                    <q-input filled v-model='data.fechaCorteReporte'>
                      <template v-slot:append>
                      <q-icon name='event' class='cursor-pointer'>
                          <q-popup-proxy cover transition-show='scale' mask='YYYY-MM-DD' transition-hide='scale'>
                          <q-date v-model='data.fechaCorteReporte'>
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
      diagnosticoHipertensionHta: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' }
      ],
      costoHtaReporte: [
        { id: '98', label: 'No aplica, paciente sin diagnóstico de HTA o paciente en abandono' }
      ],
      diagConfirmadoMellitus: [
        { id: '1', label: ' Tipo 1' },
        { id: '3', label: ' Tipo 2' },
        { id: '2', label: ' No tiene DM' },
        { id: '4', label: 'Otros (Posquirúrgica, postrasplante, secundaria a medicamentos, MODY)' }
      ],
      costoDmReporte: [
        { id: '98', label: 'No aplica, paciente sin diagnóstico de DM o paciente en abandono' }
      ],
      etilogiaErc: [
        { id: '4', label: 'Enfermedad poliquística renal ' },
        { id: '5', label: 'Otras' },
        { id: '6', label: 'Desconocida o paciente en abandono (solo aplica para pacientes con ERC confirmada) ' },
        { id: '7', label: 'Diabetes.' },
        { id: '8', label: 'Enfermedad vascular renal (incluye Nefroangioesclerosis por hipertensión arterial). ' },
        { id: '9', label: 'Sospecha de glomerulonefritis sin biopsia renal.' },
        { id: '10', label: 'Glomeruloesclerosis focal y segmentaria. ' },
        { id: '11', label: 'Nefropatía membranosa' },
        { id: '12', label: 'Nefropatía por IgA ' },
        { id: '13', label: 'Vasculitis' },
        { id: '14', label: 'Lupus eritematoso sistémico.' },
        { id: '15', label: 'Glomerulopatía familiar o genética (incluye Alport). ' },
        { id: '16', label: 'Otra glomerulonefritis.' },
        { id: '17', label: ' Síndrome hemolítico urémico.' },
        { id: '18', label: 'Nefropatía tóxica (incluye analgésicos). ' },
        { id: '19', label: 'Nefritis intersticial.' },
        { id: '20', label: 'Paraproteinemia (incluye mieloma múltiple). ' },
        { id: '21', label: 'Nefropatía postparto.' },
        { id: '22', label: 'Litiasis.' },
        { id: '23', label: ' Displasia o hipoplasia renal congénita.' },
        { id: '24', label: ' Perdida de unidad renal por trauma o cirugía. ' },
        { id: '25', label: ' Carcinoma renal.' },
        { id: '26', label: 'Nefropatía por reflujo vesicoureteral.' },
        { id: '27', label: 'Obstrucción de cuello de la vejiga (Incluye HPB, cáncer de próstata, valvas, etc.),' },
        { id: '28', label: 'Nefropatía obstructiva de causa diferente a 27 (incluye cáncer de cuello uterino, tumores retroperitoneales, etc.)' },
        { id: '98', label: ' No aplica, no tiene ERC' },
        { id: '55', label: ' No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      creatininaSangre: [
        { id: '98', label: 'No aplica, paciente en diálisis ' },
        { id: '99', label: 'No se realizó el laboratorio.' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      uRecibeEnzimaIeca: [
        { id: '1', label: 'Sí recibe' },
        { id: '2', label: 'No fue formulado dentro del plan terapéutico' },
        { id: '3', label: 'No recibe, aunque fue formulado dentro del plan terapéutico ' },
        { id: '98', label: 'No aplica (pacientes con ERC sin HTA ni DM)' },
        { id: '99', label: 'paciente en abandono, alta voluntaria, fallecidos o desafiliados' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      uRecibeAraII: [
        { id: '1', label: ' Sí recibe' },
        { id: '2', label: ' No fue formulado dentro del plan terapéutico' },
        { id: '3', label: ' No recibe, aunque fue formulado dentro del plan terapéutico ' },
        { id: '98', label: ' No aplica (pacientes con ERC sin HTA ni DM)' },
        { id: '99', label: ' paciente en abandono, alta voluntaria, fallecidos o desafiliados' },
        { id: '55', label: ' No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      uDiagnosticoErc: [
        { id: '0', label: 'No presenta ERC' },
        { id: '1', label: 'Si presenta ERC' },
        { id: '2', label: 'Indeterminado' },
        { id: '3', label: 'Paciente no estudiado para ERC en el periodo de reporte' }
      ],
      estadioErc: [
        { id: '1', label: 'Paciente con TFGe igual o mayor a 90 ml/min y pruebas complementarias que soportan daño renal ' },
        { id: '2', label: 'Paciente con TFGe entre 60 y menor de 90 ml/min y pruebas complementarias que soportan daño renal' },
        { id: '3', label: 'Paciente con TFGe entre 30 y menor de 60 ml/min ' },
        { id: '4', label: 'Paciente con TFGe entre 15 y menor de 30 ml/min' },
        { id: '5', label: 'Paciente con TFGe menor de 15 ml/min o paciente en diálisis' },
        { id: '98', label: 'No aplica, no hay enfermedad renal crónica (Debe tener 0 en la variable 38)' },
        { id: '99', label: 'Desconocido (paciente indeterminado o no estudiado para ERC en el periodo de reporte, también aplica para pacientes con ERC confirmada sin seguimiento de TFGe de acuerdo a Guía de Práctica clínica).' }
      ],
      programaARenalCorte: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No se encuentra en un programa de atención renal o paciente en abandono ' },
        { id: '98', label: 'No aplica, paciente en TRR' },
        { id: '99', label: 'Sin dato en la historia clínica' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      inicioTerapiaReemplazoRenal: [
        { id: '1', label: 'Paciente que inició la TRR diálisis en hospitalización' },
        { id: '2', label: 'Paciente que inició la TRR diálisis ambulatoria' },
        { id: '3', label: 'Sin dato, el paciente inicio la TRR en otra EPS diferente a la que reporta ' },
        { id: '4', label: 'Paciente que inició la TRR con trasplante renal o TMND' },
        { id: '97', label: 'No aplica, paciente que nunca ha recibido TRR' },
        { id: '98', label: 'No aplica, el usuario a la fecha de corte no recibe ninguna de las terapias de reemplazo renal. ' },
        { id: '99', label: 'Paciente que inició la TRR en la EPS que reporta, pero no hay información en la historia clínica o paciente en abandono.' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      hemodialisisCorte: [
        { id: '1', label: 'Paciente en hemodiálisis por fístula arteriovenosa' },
        { id: '3', label: 'Paciente en hemodiafiltración en línea de alto volumen o diálisis expandida. ' },
        { id: '4', label: 'Pacientes en hemodiálisis por catéter tunelizado' },
        { id: '5', label: 'Paciente en hemodiálisis por catéter transitorio' },
        { id: '6', label: 'Pacientes en hemodiálisis por injerto.' },
        { id: '98', label: 'No aplica, el paciente no recibe hemodiálisis a la fecha de corte o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      dialisisPeritonealCorte: [
        { id: '1', label: 'Paciente en diálisis peritoneal manual' },
        { id: '2', label: 'Paciente en diálisis peritoneal automatizada' },
        { id: '98', label: 'No aplica, el paciente no está en diálisis peritoneal o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      vacunaHepatiB: [
        { id: '1', label: 'Tiene esquema completo sin títulos' },
        { id: '2', label: 'Tiene esquema incompleto sin títulos' },
        { id: '3', label: 'No ha recibido vacunación para hepatitis B ' },
        { id: '4', label: 'Títulos >10' },
        { id: '5', label: 'Títulos <10' },
        { id: '6', label: 'Sin respuesta a la vacunación (dos esquemas completos de vacunación y títulos <10) ' },
        { id: '7', label: 'Infección por VHB' },
        { id: '98', label: 'No aplica, el paciente no recibe HD, DP ni ha sido trasplantado' },
        { id: '99', label: 'Sin dato en la historia clínica o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      tratamientoMedicoErc5: [
        { id: '1', label: 'Si, paciente que recibe solamente tratamiento médico especial y multidisciplinario sin diálisis ' },
        { id: '2', label: 'No recibe esta terapia o paciente en abandono' }
      ],
      ultValoracionErcTmnd: [
        { id: '1', label: 'Indicado' },
        { id: '2', label: 'Contraindicado' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      CancerTrasplanteRenal: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      infeccionCronicaTrasRenal: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      pacienteNoTrasplante: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      paContraTrasplante: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      paLimitacionTrasplanterenal: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      enfCardiacaTrasplanteRenal: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      infeccionVihTransplanteRenal: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      infeccionVhcTrasplanteRenal: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      enfInmunologicaTrasplante: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      enfPulmonarCronicaTras: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      otrasEnfCronicasTrasplante: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '97', label: 'No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional' },
        { id: '98', label: 'No aplica, el paciente no tiene ERC o paciente en abandono' },
        { id: '99', label: 'No ha sido valorado por nefrólogo para la posibilidad de trasplante' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      codigoIpsEspera: [
        { id: '98', label: 'No Aplica, el trasplante está contraindicado o paciente en abandono o paciente con trasplante funcional o el paciente no ha sido valorado por nefrólogo en relación a la posibilidad de trasplante.' },
        { id: '99', label: 'Está indicado el trasplante, pero a la fecha de corte no ha ingresado a la lista de espera' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      recibioTrasplanteRenal: [
        { id: '1', label: 'SI, el paciente recibió trasplante renal en la EAPB/Ente territorial que reporta (y está funcional)' },
        { id: '2', label: 'SI, el paciente recibió trasplante renal, en otra EAPB/Ente territorial diferente a la que reporta (y está funcional)' },
        { id: '3', label: 'SI, el paciente recibió trasplante renal en la EAPB/Ente territorial que reporta (y no está funcional)' },
        { id: '4', label: 'SI, el paciente recibió trasplante renal, en otra EAPB/Ente territorial diferente a la que reporta (y no está funcional)' },
        { id: '5', label: 'NO, el paciente no ha recibido trasplante renal o paciente en abandono' }
      ],
      codEpsTrasplanteRenal: [
        { id: '98', label: 'No aplica, el paciente no ha recibido trasplante renal' },
        { id: '99', label: 'Sin dato (solamente cuando el trasplante renal no haya sido realizado por la EAPB/Ente territorial que reporta el usuario y no se dispone de esta información -indicada por el usuario-)' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      codIpsGrupoTrasplante: [
        { id: '98', label: 'No aplica, el paciente no ha recibido trasplante renal' },
        { id: '99', label: 'Sin dato, (solamente cuando el trasplante renal no haya sido realizado por la EAPB/Ente territorial que reporta el usuario y no se dispone de esta información)' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      tipoDonanteUlttrasplanteRenal: [
        { id: '1', label: 'Fallecido' },
        { id: '2', label: 'Vivo' },
        { id: '98', label: 'No aplica, el paciente no ha recibido trasplante renal ' },
        { id: '99', label: 'Sin dato en la historia clínica' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      complicacionUltimoTrasplante: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '98', label: 'No aplica, el paciente no ha recibido trasplante renal o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      ultimaMetilprednisolonaTR: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '98', label: 'No aplica, el paciente no ha recibido trasplante renal o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      ultimaAzatioprinaTR: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '98', label: 'No aplica, el paciente no ha recibido trasplante renal o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      ultimaCiclosporinaTR: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '98', label: 'No aplica, el paciente no ha recibido trasplante renal o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      ultimaMocifenolatoTR: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '98', label: 'No aplica, el paciente no ha recibido trasplante renal o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      ultimaTacrolimusTR: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '98', label: 'No aplica, el paciente no ha recibido trasplante renal o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      ultimaPrednisonaTR: [
        { id: '1', label: 'Si' },
        { id: '2', label: 'No' },
        { id: '98', label: 'No aplica, el paciente no ha recibido trasplante renal o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      medicamentoTRNoIncluido1: [
        { id: '97', label: 'No aplica, paciente con trasplante renal que no recibió medicamento inmunosupresor no POS ' },
        { id: '98', label: 'No Aplica el paciente no ha recibido trasplante renal o paciente en abandono' }
      ],
      medicamentoTRNoIncluido2: [
        { id: '97', label: 'No aplica, paciente con trasplante renal que no recibió medicamento inmunosupresor no POS ' },
        { id: '98', label: 'No Aplica el paciente no ha recibido trasplante renal o paciente en abandono' }
      ],
      medicamentoTRNoIncluido3: [
        { id: '97', label: 'No aplica, paciente con trasplante renal que no recibió medicamento inmunosupresor no POS ' },
        { id: '98', label: 'No Aplica el paciente no ha recibido trasplante renal o paciente en abandono' }
      ],
      rechazoBiopsiaTR: [
        { id: '98', label: 'No aplica, el paciente nunca ha recibido trasplante renal o el paciente no ha presentado episodios de rechazo agudo o paciente en abandono' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
      ],
      novedadReporteAnterior: [
        { id: '1', label: 'Persona que falleció (esta novedad también aplica a los casos de personas que iniciaron TRR crónica dentro del periodo de reporte pero que a la fecha de corte están fallecidas)' },
        { id: '2', label: 'Persona que ingresó a la EPS y traía el diagnóstico de ERC o HTA o DM' },
        { id: '3', label: 'Persona antigua en la EPS y se le realizó nuevo diagnóstico de ERC o HTA o DM.' },
        { id: '4', label: 'Persona antigua en la EPS con diagnóstico antiguo de ERC o HTA o DM que ingresa a la BD para reporte de la CAC' },
        { id: '5', label: 'Persona que firmó alta voluntaria del tratamiento prescrito' },
        { id: '6', label: 'Persona que se desafilió (esta novedad también aplica a los casos de personas que iniciaron TRR crónica dentro del periodo de reporte pero que a la fecha de corte están desafiliadas)' },
        { id: '7', label: 'Persona que abandona la terapia y no es posible de ubicar' },
        { id: '8', label: 'Persona que se elimina de la BD por corrección de la EPS (auditoría interna o auditoria de la CAC porque el caso reportado no tiene diagnóstico de ERC, HTA ni DM)' },
        { id: '9', label: 'Persona que regresa a terapia' },
        { id: '10', label: 'El usuario que cambio de tipo y/o número de identificación respecto al reporte anterior' },
        { id: '11', label: 'Persona con aseguramiento que recibió servicios no incluidos en el plan de beneficios por parte de ente territorial' },
        { id: '12', label: 'Población migrante de la república de Venezuela' },
        { id: '13', label: 'Usuario identificado por fuentes externas con diagnóstico (ERC-HTA-DM) descartado por la entidad' },
        { id: '14', label: 'Usuario identificado por fuentes externas con diagnóstico ERC o HTA o DM, no gestionado por la entidad' },
        { id: '15', label: 'Paciente trasladado de EAPB, que fue glosado en periodo anterior y no fue gestionado por la entidad (receptora) en el periodo.' },
        { id: '98', label: 'No hay novedad respecto al reporte anterior' }
      ],
      causaDeMuerte: [
        { id: '1', label: 'Enfermedad renal crónica ' },
        { id: '2', label: 'Enfermedad cardiovascular ' },
        { id: '3', label: 'Cáncer' },
        { id: '4', label: 'Infección' },
        { id: '5', label: 'Por causa diferente a las descritas en 1, 2, 3 y 4 ' },
        { id: '6', label: 'Causa Externa' },
        { id: '98', label: 'No aplica, el usuario no ha fallecido' },
        { id: '99', label: 'Paciente que fallece, pero no hay información sobre la causa de muerte en la historia clínica' },
        { id: '55', label: 'No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios' }
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
            if (typeof data.error !== 'undefined') {
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
