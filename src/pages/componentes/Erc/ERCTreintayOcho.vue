<template>
    <q-form @submit="saveRegister">
      <div class="row flex cien space-betwen" >
          <div class="wrp_forms w_50" v-if="firstStep">
            <h4 class="titulo_fondo w_100">INFORMACIÓN RELACIONADA CON DIAGNÓSTICO Y TRATAMIENTO DE LA ENFERMEDAD RENAL CRÓNICA</h4>

              <div class="row dos_items">
                  <div class="item">
                      <label>38.  El usuario tiene diagnóstico de ERC en cualquiera de sus estadios</label>
                      <q-select rounded standout v-model="data.uDiagnosticoErc" :options="uDiagnosticoErc" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>39.  Estadio de la ERC: </label>
                      <q-select rounded standout v-model="data.estadioErc" :options="estadioErc" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>40.  Fecha de diagnóstico de ERC estadio 5 </label>
                        <q-input filled v-model="data.fechaDiagnosticoErc5">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaDiagnosticoErc5">
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
                      <label>41.  La persona se encuentra en un programa de atención renal (reno protección, nefro protección, protección renal, pre diálisis) a la fecha de corte (Aplica para pacientes con HTA, DM y ERC sin TRR)</label>
                      <q-select rounded standout v-model="data.programaARenalCorte" :options="programaARenalCorte" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>42.  TFG medida en la fecha en que el usuario inició la primera TRR:</label>
                        <q-input rounded standout v-model="data.tfgMedidaInicioPrimerTrr" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>43.  Modo de Inicio de la primera Terapia de Reemplazo Renal: </label>
                      <q-select rounded standout v-model="data.inicioTerapiaReemplazoRenal" :options="inicioTerapiaReemplazoRenal" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>44.  Fecha en que se inició la terapia de reemplazo renal que recibe el usuario en el momento de la fecha de corte:</label>
                        <q-input filled v-model="data.fechaInicioTerapiaReemplazoRenal">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaInicioTerapiaReemplazoRenal">
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
                      <label>45.  Fecha de Ingreso a la Unidad Renal Actual que le presta al paciente el servicio de terapia dialítica al momento de la fecha de corte:/label>
                        <q-input filled v-model="data.fechaInicioTerapiaReemplazoRenal">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaInicioTerapiaReemplazoRenal">
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
                      <label>46.  Hemodiálisis (HD) a la fecha de corte:</label>
                      <q-select rounded standout v-model="data.hemodialisisCorte" :options="hemodialisisCorte" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>47.  Dosis de diálisis Kt/V single pool (volumen de fluido filtrado de urea sobre el volumen de agua en el cuerpo del usuario):</label>
                        <q-input rounded standout v-model="data.dosisDialisisSinglePool" lazy-rules type="number"></q-input>
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>48.  Costo total de la hemodiálisis (HD) durante el período de reporte:</label>
                        <q-input rounded standout v-model="data.costoTotalHemodialisisDurante" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>49.  Diálisis peritoneal (DP) a la fecha de corte:</label>
                      <q-select rounded standout v-model="data.dialisisPeritonealCorte" :options="dialisisPeritonealCorte" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>50.  Dosis de diálisis (Kt/V) KTV/dpd de máximo seis meses de antigüedad contados a partir de la fecha de corte:</label>
                        <q-input rounded standout v-model="data.dosisDialisis6Meses" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>51.  Número de horas de hemodiálisis:</label>
                        <q-input rounded standout v-model="data.numHorasHemodialisis" lazy-rules type="number"></q-input>
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>52.  Peritonitis infecciosa</label>
                        <q-input rounded standout v-model="data.numPeritonitisInfecciosa" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>53.  Costo total de la DP durante el período de reporte:</label>
                      <q-input rounded standout v-model="data.costoTotalDpDurante" lazy-rules type="number"></q-input>
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>54.  Vacuna Hepatitis B:</label>
                        <q-select rounded standout v-model="data.vacunaHepatiB" :options="vacunaHepatiB" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>55.  Si el usuario ha presentado infección por Hepatitis B, registre la fecha de diagnóstico:</label>
                        <q-input filled v-model="data.fechaInfeccionHepatiB">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaInfeccionHepatiB">
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
                      <label>56.  Si el usuario ha presentado infección por Hepatitis C, registre la fecha de diagnóstico:</label>
                      <q-input filled v-model="data.fechaInfeccionHepatiC">
                        <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                            <q-date v-model="data.fechaInfeccionHepatiC">
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
                      <label>58.  Costo total del TMND durante el período de reporte:</label>
                      <q-input rounded standout v-model="data.costoTotalTmndReporte" lazy-rules type="number"></q-input>
                  </div>
              </div>      

              <div class="row dos_items">
                  <div class="item">
                      <label>59.  Hemoglobina (g/dl):</label>
                      <q-input rounded standout v-model="data.gdlHemoglobina" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>60.  Albúmina sérica (g/dl):</label>
                      <q-input rounded standout v-model="data.gdlAlbuminaSerica" lazy-rules type="number"></q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>61.  Fósforo sérico(P) mg/dl:</label>
                      <q-input rounded standout v-model="data.mgFosforoSerico" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>62.  Última valoración clínica por nefrología dentro del periodo de reporte de pacientes con ERC estadio 5 en diálisis o con TMND, en relación con la posibilidad de trasplante renal:</label>
                      <q-select rounded standout v-model="data.ultValoracionErcTmnd" :options="ultValoracionErcTmnd" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>62.1.  ¿Se reportó cáncer activo en los últimos 12 meses como contraindicación para el trasplante renal, en la valoración de nefrología?:</label>
                      <q-select rounded standout v-model="data.CancerTrasplanteRenal" :options="CancerTrasplanteRenal" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>62.2.  ¿Se reportó infección crónica o activa no tratada o no controlada hasta en los últimos tres meses antes de la fecha de corte, como contraindicación para el trasplante renal, en la valoración de nefrología?:</label>
                      <q-select rounded standout v-model="data.infeccionCronicaTrasRenal" :options="infeccionCronicaTrasRenal" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>62.3.  ¿Se reportó que el paciente ha manifestado su deseo de NO trasplantarse, como contraindicación para el trasplante, en la valoración por nefrología?:/label>
                      <q-select rounded standout v-model="data.pacienteNoTrasplante" :options="pacienteNoTrasplante" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>62.4.  ¿Se reportó que el paciente tiene una esperanza de vida menor o igual a 6 meses, como contraindicación para el trasplante, en la valoración por nefrología?:</label>
                      <q-select rounded standout v-model="data.paContraTrasplante" :options="paContraTrasplante" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>62.5.  ¿Se reportó que el paciente presenta limitaciones potenciales para el autocuidado y adherencia al tratamiento post trasplante, como contraindicación para el trasplante renal, en la valoración por nefrología?:</label>
                      <q-select rounded standout v-model="data.paLimitacionTrasplanterenal" :options="paLimitacionTrasplanterenal" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>62.6.  ¿Se reportó enfermedad cardiaca, cerebrovascular o vascular periférica, como contraindicación para el trasplante renal, en la valoración de nefrología?:</label>
                      <q-select rounded standout v-model="data.enfCardiacaTrasplanteRenal" :options="enfCardiacaTrasplanteRenal" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>62.7.  ¿Se reportó infección por el VIH, como contraindicación para el trasplante renal, en la valoración de nefrología?:</label>
                      <q-select rounded standout v-model="data.infeccionVihTransplanteRenal" :options="infeccionVihTransplanteRenal" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>62.8.  ¿Se reportó infección por el VHC, como contraindicación para el trasplante renal, en la valoración de nefrología?:</label>
                      <q-select rounded standout v-model="data.infeccionVhcTrasplanteRenal" :options="infeccionVhcTrasplanteRenal" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>62.9.  ¿Se reportó que el paciente presenta enfermedad inmunológica activa los últimos tres meses antes de la fecha de corte, como contraindicación para el trasplante, en la valoración por nefrología?: </label>
                      <q-select rounded standout v-model="data.enfInmunologicaTrasplante" :options="enfInmunologicaTrasplante" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>62.10. ¿Se reportó que el paciente presenta enfermedad pulmonar crónica, como contraindicación para el trasplante, en la valoración por nefrología?:</label>
                        <q-select rounded standout v-model="data.enfPulmonarCronicaTras" :options="enfPulmonarCronicaTras" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>62.11. ¿Se reportó que el paciente presenta otras e nfermedades crónicas, como contraindicación para el trasplante, en la valoración por nefrología?:</label>
                      <q-select rounded standout v-model="data.otrasEnfCronicasTrasplante" :options="otrasEnfCronicasTrasplante" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>63.  Fecha de ingreso a lista de espera para la realización del trasplante renal:</label>
                        <q-input filled v-model="data.fechaEsperaTrasplanteRenal">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaEsperaTrasplanteRenal">
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
                      <label>63.1.  Registre el código de la IPS donde está en lista de espera:</label>
                      <q-select rounded standout v-model="data.codigoIpsEspera" :options="codigoIpsEspera" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>64.  El usuario ha recibido trasplante renal?:</label>
                        <q-select rounded standout v-model="data.recibioTrasplanteRenal" :options="recibioTrasplanteRenal" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>65.  Código de la EPS que realizó el último trasplante renal:</label>
                      <q-select rounded standout v-model="data.codEpsTrasplanteRenal" :options="codEpsTrasplanteRenal" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>66.  Código de la IPS o Grupo de trasplante, que realizó el último trasplante renal:</label>
                        <q-select rounded standout v-model="data.codIpsGrupoTrasplante" :options="codIpsGrupoTrasplante" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>67.   Tipo de donante del último trasplante renal: </label>
                      <q-select rounded standout v-model="data.tipoDonanteUlttrasplanteRenal" :options="tipoDonanteUlttrasplanteRenal" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>68.  Costo del último trasplante realizado en el periodo de reporte:</label>
                      <q-input rounded standout v-model="data.costoUltimoTrasplante" lazy-rules type="number"></q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>69.  ¿El paciente con trasplante renal ha presentado alguna complicación (¿de las mencionadas en las variables 69.1 a 69.7) relacionada con el último trasplante renal?:</label>
                      <q-select rounded standout v-model="data.complicacionUltimoTrasplante" :options="complicacionUltimoTrasplante" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>69.1.  Si el paciente con trasplante renal ha presentado infección por Citomegalovirus (CMV), registre la fecha de diagnóstico:</label>
                        <q-input filled v-model="data.fechaTrasplanteRenalInfeccion">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaTrasplanteRenalInfeccion">
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
                      <label>69.2.  Si el paciente con trasplante renal ha presentado infección por hongos registre la fecha de diagnóstico: </label>
                        <q-input filled v-model="data.fechaTrasplanteRenalHongos">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaTrasplanteRenalHongos">
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
                      <label>69.3.  Si el paciente con trasplante renal ha presentado infección activa por tuberculosis, registre la fecha de diagnóstico:</label>
                        <q-input filled v-model="data.fechaTrasplanteRenalTuberculosis">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaTrasplanteRenalTuberculosis">
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
                      <label>69.4.  Si el paciente con trasplante renal ha presentado alguna complicación vascular, registre la fecha de diagnóstico:</label>
                        <q-input filled v-model="data.fechaTrasplanteRenalVarcular">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaTrasplanteRenalVarcular">
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
                      <label>69.5.  Si el paciente con trasplante renal ha presentado alguna complicación urológica, registre la fecha de diagnóstico:</label>
                        <q-input filled v-model="data.fechaTrasplanteRenalUrologia">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaTrasplanteRenalUrologia">
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
                      <label>69.6.  Si el paciente con trasplante renal ha presentado alguna complicación de la herida quirúrgica, registre la fecha de diagnóstico</label>
                        <q-input filled v-model="data.fechaTrasplanteRenalQuirurgica">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaTrasplanteRenalQuirurgica">
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
                      <label>69.7.  Si al paciente con trasplante renal se le diagnóstica cualquier tipo de cáncer posterior al trasplante, registre la fecha del primer diagnóstico de cáncer:</label>
                        <q-input filled v-model="data.fechaTrasplanteRenalCancer">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaTrasplanteRenalCancer">
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
                      <label>70.  ¿Cuántos medicamentos inmunosupresores recibe el paciente actualmente para el manejo del trasplante renal ):</label>
                      <q-input rounded standout v-model="data.medicamentosInmonosupresorTR" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>70.1.  Actualmente (última prescripción) el paciente recibe Metilprednisolona para el manejo del trasplante renal:</label>
                        <q-select rounded standout v-model="data.ultimaMetilprednisolonaTR" :options="ultimaMetilprednisolonaTR" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>70.2.  Actualmente (última prescripción) el paciente recibe Azatioprina para el manejo del trasplante re nal:</label>
                        <q-select rounded standout v-model="data.ultimaAzatioprinaTR" :options="ultimaAzatioprinaTR" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>70.3.  Actualmente (última prescripción) el paciente recibe Ciclosporina para el manejo del trasplante re nal:</label>
                        <q-select rounded standout v-model="data.ultimaCiclosporinaTR" :options="ultimaCiclosporinaTR" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>70.4.  Actualmente (última prescripción) el paciente recibe Micofenolato para el manejo del trasplante renal:</label>
                        <q-select rounded standout v-model="data.ultimaMocifenolatoTR" :options="ultimaMocifenolatoTR" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>70.5.  Actualmente (última prescripción) el paciente recibe Tacrolimus para el manejo del trasplante renal:</label>
                        <q-select rounded standout v-model="data.ultimaTacrolimusTR" :options="ultimaTacrolimusTR" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>70.6.  Actualmente (última prescripción) el paciente recibe Prednisona para el manejo del trasplante renal:</label>
                        <q-select rounded standout v-model="data.ultimaPrednisonaTR" :options="ultimaPrednisonaTR" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>70.7.  Actualmente (última prescripción) el paciente recibe para el manejo del trasplante renal medicamentos inmunosupresores no incluidos en las variables 70.1 a 70.6 o no incluidos en el plan de be neficios (medicamento 1):</label>
                      <q-select rounded standout v-model="data.medicamentoTRNoIncluido1" :options="medicamentoTRNoIncluido1" label="Seleccionar" />
                  </div>
              </div>
              
              <div class="row dos_items">
                  <div class="item">
                      <label>70.8.  Actualmente (última prescripción) el paciente recibe para el manejo del trasplante renal medicamentos inmunosupresores no incluidos en las variables 70.1 a 70.6 o no incluidos en el plan de be neficios (medicamento 2):70.4.  Actualmente (última prescripción) el paciente recibe Micofenolato para el manejo del trasplante re nal:</label>
                        <q-select rounded standout v-model="data.medicamentoTRNoIncluido2" :options="medicamentoTRNoIncluido2" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>70.9.  Actualmente (última prescripción) el paciente recibe para el manejo del trasplante renal medicamentos inmunosupresores no incluidos en las variables 70.1 a 70.6 o no incluidos en el plan de be neficios (medicamento 3):</label>
                        <q-select rounded standout v-model="data.medicamentoTRNoIncluido3" :options="medicamentoTRNoIncluido3" label="Seleccionar" />
                  </div>
              </div> 

              <div class="row dos_items">
                  <div class="item">
                      <label>71.  ¿Cuántos episodios de rechazo agudo confirmados por biopsia en los primeros 12 meses posteriores al trasplante, ha presentado el paciente con trasplante renal?:</label>
                        <q-select rounded standout v-model="data.rechazoBiopsiaTR" :options="rechazoBiopsiaTR" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>72.  Fecha del primer rechazo agudo del injerto (confirmado por biopsia en los primeros 12 meses posteriores al trasplante):</label>
                        <q-input filled v-model="data.fechaRechazoInjerto">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaRechazoInjerto">
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
                      <label>73.  Fecha de retorno a diálisis por pérdida definitiva del trasplante renal:</label>
                        <q-input filled v-model="data.fechaRetornoDialisis">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaRetornoDialisis">
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
                      <label>74.  Número de trasplantes renales que ha recibido el paciente:</label>
                      <q-input rounded standout v-model="data.numeroTRRecibido" lazy-rules type="number"></q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>75.  Costo de la terapia postrasplante renal:</label>
                      <q-input rounded standout v-model="data.costoPostrasplanteRenal" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>76.  Tiempo de prestación de servicios:</label>
                      <q-input rounded standout v-model="data.tiempoPrestacionServicio" lazy-rules type="number"></q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>77. Costo Total:</label>
                      <q-input rounded standout v-model="data.costoTotal" lazy-rules type="number"></q-input>
                  </div>
                  <div class="item">
                      <label>78.  Código de la EPS de origen:</label>
                      <q-input rounded standout v-model="data.codigoEpsOrigen" lazy-rules type="number"></q-input>
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>79.  Novedad con respecto al reporte anterior:</label>
                      <q-select rounded standout v-model="data.novedadReporteAnterior" :options="novedadReporteAnterior" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>80.  Causa de Muerte:</label>
                      <q-select rounded standout v-model="data.causaDeMuerte" :options="causaDeMuerte" label="Seleccionar" />
                  </div>
              </div>

              <div class="row dos_items">
                  <div class="item">
                      <label>80.1.  Fecha de muerte:</label>
                        <q-input filled v-model="data.fechaDeMuerte">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaDeMuerte">
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
                      <label>81.  Código único de identificación (BDUA, BDEX, PVS):</label>
                      <q-input rounded standout v-model="data.codigoUnicoBBP" lazy-rules type="number"></q-input>
                  </div>
              </div>

              <div class="row uno_items">
                  <div class="item">
                      <label>82.  Fecha de corte del reporte:</label>
                        <q-input filled v-model="data.fechaCorteReporte">
                          <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" mask="YYYY-MM-DD" transition-hide="scale">
                              <q-date v-model="data.fechaCorteReporte">
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
      uDiagnosticoErc: [
        { id: '0', label:"No presenta ERC"},
        { id: '1', label:"Si presenta ERC"},
        { id: '2', label:"Indeterminado"},
        { id: '3', label:"Paciente no estudiado para ERC en el periodo de reporte"}
      ],
      estadioErc: [
        { id: '1', label:"Paciente con TFGe igual o mayor a 90 ml/min y pruebas complementarias que soportan daño renal "},
        { id: '2', label:"Paciente con TFGe entre 60 y menor de 90 ml/min y pruebas complementarias que soportan daño renal"},
        { id: '3', label:"Paciente con TFGe entre 30 y menor de 60 ml/min "},
        { id: '4', label:"Paciente con TFGe entre 15 y menor de 30 ml/min"},
        { id: '5', label:"Paciente con TFGe menor de 15 ml/min o paciente en diálisis"},
        { id: '98', label:"No aplica, no hay enfermedad renal crónica (Debe tener 0 en la variable 38)"},
        { id: '99', label:"Desconocido (paciente indeterminado o no estudiado para ERC en el periodo de reporte, también aplica para pacientes con ERC confirmada sin seguimiento de TFGe de acuerdo a Guía de Práctica clínica)."}
      ],
      programaARenalCorte: [
        { id: '1', label:"Si"},
        { id: '2', label:"No se encuentra en un programa de atención renal o paciente en abandono "},
        { id: '98', label:"No aplica, paciente en TRR"},
        { id: '99', label:"Sin dato en la historia clínica"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      inicioTerapiaReemplazoRenal: [
        { id: '1', label:"Paciente que inició la TRR diálisis en hospitalización"},
        { id: '2', label:"Paciente que inició la TRR diálisis ambulatoria"},
        { id: '3', label:"Sin dato, el paciente inicio la TRR en otra EPS diferente a la que reporta "},
        { id: '4', label:"Paciente que inició la TRR con trasplante renal o TMND"},
        { id: '97', label:"No aplica, paciente que nunca ha recibido TRR"},
        { id: '98', label:"No aplica, el usuario a la fecha de corte no recibe ninguna de las terapias de reemplazo renal. "},
        { id: '99', label:"Paciente que inició la TRR en la EPS que reporta, pero no hay información en la historia clínica o paciente en abandono."},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      hemodialisisCorte: [
        { id: '1', label:"Paciente en hemodiálisis por fístula arteriovenosa"},
        { id: '3', label:"Paciente en hemodiafiltración en línea de alto volumen o diálisis expandida. "},
        { id: '4', label:"Pacientes en hemodiálisis por catéter tunelizado"},
        { id: '5', label:"Paciente en hemodiálisis por catéter transitorio"},
        { id: '6', label:"Pacientes en hemodiálisis por injerto."},
        { id: '98', label:"No aplica, el paciente no recibe hemodiálisis a la fecha de corte o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      dialisisPeritonealCorte: [
        { id: '1', label:"Paciente en diálisis peritoneal manual"},
        { id: '2', label:"Paciente en diálisis peritoneal automatizada"},
        { id: '98', label:"No aplica, el paciente no está en diálisis peritoneal o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      vacunaHepatiB: [
        { id: '1', label:"Tiene esquema completo sin títulos"},
        { id: '2', label:"Tiene esquema incompleto sin títulos"},
        { id: '3', label:"No ha recibido vacunación para hepatitis B "},
        { id: '4', label:"Títulos >10"},
        { id: '5', label:"Títulos <10"},
        { id: '6', label:"Sin respuesta a la vacunación (dos esquemas completos de vacunación y títulos <10) "},
        { id: '7', label:"Infección por VHB"},
        { id: '98', label:"No aplica, el paciente no recibe HD, DP ni ha sido trasplantado"},
        { id: '99', label:"Sin dato en la historia clínica o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      tratamientoMedicoErc5: [
        { id: '1', label:"Si, paciente que recibe solamente tratamiento médico especial y multidisciplinario sin diálisis "},
        { id: '2', label:"No recibe esta terapia o paciente en abandono"}
      ],
      ultValoracionErcTmnd: [
        { id: '1', label:"Indicado"},
        { id: '2', label:"Contraindicado"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      CancerTrasplanteRenal: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      infeccionCronicaTrasRenal: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      pacienteNoTrasplante: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      paContraTrasplante: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      paLimitacionTrasplanterenal: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      enfCardiacaTrasplanteRenal: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      infeccionVihTransplanteRenal: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      infeccionVhcTrasplanteRenal: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      enfInmunologicaTrasplante: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      enfPulmonarCronicaTras: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      otrasEnfCronicasTrasplante: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '97', label:"No aplica, paciente que no tiene ERC estadio 5 (tiene ERC estadio 1 a 4) o ya tiene trasplante funcional"},
        { id: '98', label:"No aplica, el paciente no tiene ERC o paciente en abandono"},
        { id: '99', label:"No ha sido valorado por nefrólogo para la posibilidad de trasplante"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      codigoIpsEspera: [
        { id: '98', label:"No Aplica, el trasplante está contraindicado o paciente en abandono o paciente con trasplante funcional o el paciente no ha sido valorado por nefrólogo en relación a la posibilidad de trasplante."},
        { id: '99', label:"Está indicado el trasplante, pero a la fecha de corte no ha ingresado a la lista de espera"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      recibioTrasplanteRenal: [
        { id: '1', label:"SI, el paciente recibió trasplante renal en la EAPB/Ente territorial que reporta (y está funcional)"},
        { id: '2', label:"SI, el paciente recibió trasplante renal, en otra EAPB/Ente territorial diferente a la que reporta (y está funcional)"},
        { id: '3', label:"SI, el paciente recibió trasplante renal en la EAPB/Ente territorial que reporta (y no está funcional)"},
        { id: '4', label:"SI, el paciente recibió trasplante renal, en otra EAPB/Ente territorial diferente a la que reporta (y no está funcional)"},
        { id: '5', label:"NO, el paciente no ha recibido trasplante renal o paciente en abandono"}
      ],
      codEpsTrasplanteRenal: [
        { id: '98', label:"No aplica, el paciente no ha recibido trasplante renal"},
        { id: '99', label:"Sin dato (solamente cuando el trasplante renal no haya sido realizado por la EAPB/Ente territorial que reporta el usuario y no se dispone de esta información -indicada por el usuario-)"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      codIpsGrupoTrasplante: [
        { id: '98', label:"No aplica, el paciente no ha recibido trasplante renal"},
        { id: '99', label:"Sin dato, (solamente cuando el trasplante renal no haya sido realizado por la EAPB/Ente territorial que reporta el usuario y no se dispone de esta información)"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      tipoDonanteUlttrasplanteRenal: [
        { id: '1', label:"Fallecido"},
        { id: '2', label:"Vivo"},
        { id: '98', label:"No aplica, el paciente no ha recibido trasplante renal "},
        { id: '99', label:"Sin dato en la historia clínica"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      complicacionUltimoTrasplante: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '98', label:"No aplica, el paciente no ha recibido trasplante renal o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      ultimaMetilprednisolonaTR: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '98', label:"No aplica, el paciente no ha recibido trasplante renal o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      ultimaAzatioprinaTR: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '98', label:"No aplica, el paciente no ha recibido trasplante renal o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      ultimaCiclosporinaTR: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '98', label:"No aplica, el paciente no ha recibido trasplante renal o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      ultimaMocifenolatoTR: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '98', label:"No aplica, el paciente no ha recibido trasplante renal o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      ultimaTacrolimusTR: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '98', label:"No aplica, el paciente no ha recibido trasplante renal o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      ultimaPrednisonaTR: [
        { id: '1', label:"Si"},
        { id: '2', label:"No"},
        { id: '98', label:"No aplica, el paciente no ha recibido trasplante renal o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      medicamentoTRNoIncluido1: [
        { id: '97', label:"No aplica, paciente con trasplante renal que no recibió medicamento inmunosupresor no POS "},
        { id: '98', label:"No Aplica el paciente no ha recibido trasplante renal o paciente en abandono"}
      ],
      medicamentoTRNoIncluido2: [
        { id: '97', label:"No aplica, paciente con trasplante renal que no recibió medicamento inmunosupresor no POS "},
        { id: '98', label:"No Aplica el paciente no ha recibido trasplante renal o paciente en abandono"}
      ],
      medicamentoTRNoIncluido3: [
        { id: '97', label:"No aplica, paciente con trasplante renal que no recibió medicamento inmunosupresor no POS "},
        { id: '98', label:"No Aplica el paciente no ha recibido trasplante renal o paciente en abandono"}
      ],
      rechazoBiopsiaTR: [
        { id: '98', label:"No aplica, el paciente nunca ha recibido trasplante renal o el paciente no ha presentado episodios de rechazo agudo o paciente en abandono"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
      ],
      novedadReporteAnterior: [
        { id: '1', label:"Persona que falleció (esta novedad también aplica a los casos de personas que iniciaron TRR crónica dentro del periodo de reporte pero que a la fecha de corte están fallecidas)"},
        { id: '2', label:"Persona que ingresó a la EPS y traía el diagnóstico de ERC o HTA o DM"},
        { id: '3', label:"Persona antigua en la EPS y se le realizó nuevo diagnóstico de ERC o HTA o DM."},
        { id: '4', label:"Persona antigua en la EPS con diagnóstico antiguo de ERC o HTA o DM que ingresa a la BD para reporte de la CAC"},
        { id: '5', label:"Persona que firmó alta voluntaria del tratamiento prescrito"},
        { id: '6', label:"Persona que se desafilió (esta novedad también aplica a los casos de personas que iniciaron TRR crónica dentro del periodo de reporte pero que a la fecha de corte están desafiliadas)"},
        { id: '7', label:"Persona que abandona la terapia y no es posible de ubicar"},
        { id: '8', label:"Persona que se elimina de la BD por corrección de la EPS (auditoría interna o auditoria de la CAC porque el caso reportado no tiene diagnóstico de ERC, HTA ni DM)"},
        { id: '9', label:"Persona que regresa a terapia"},
        { id: '10', label:"El usuario que cambio de tipo y/o número de identificación respecto al reporte anterior"},
        { id: '11', label:"Persona con aseguramiento que recibió servicios no incluidos en el plan de beneficios por parte de ente territorial"},
        { id: '12', label:"Población migrante de la república de Venezuela"},
        { id: '13', label:"Usuario identificado por fuentes externas con diagnóstico (ERC-HTA-DM) descartado por la entidad"},
        { id: '14', label:"Usuario identificado por fuentes externas con diagnóstico ERC o HTA o DM, no gestionado por la entidad"},
        { id: '15', label:"Paciente trasladado de EAPB, que fue glosado en periodo anterior y no fue gestionado por la entidad (receptora) en el periodo."},
        { id: '98', label:"No hay novedad respecto al reporte anterior"}
      ],
      causaDeMuerte: [
        { id: '1', label:"Enfermedad renal crónica "},
        { id: '2', label:"Enfermedad cardiovascular "},
        { id: '3', label:"Cáncer"},
        { id: '4', label:"Infección"},
        { id: '5', label:"Por causa diferente a las descritas en 1, 2, 3 y 4 "},
        { id: '6', label:"Causa Externa"},
        { id: '98', label:"No aplica, el usuario no ha fallecido"},
        { id: '99', label:"Paciente que fallece, pero no hay información sobre la causa de muerte en la historia clínica"},
        { id: '55', label:"No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"}
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
