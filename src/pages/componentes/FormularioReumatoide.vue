<template>
  <q-form @submit="saveRegister">
    <div class="row flex cien space-betwen">
      <div class="wrp_forms w_50" v-if="firstStep">
        <h4 class="titulo_fondo w_100">
          INFORMACION RELACIONADA AL DIAGNÓSTICO Y TRATAMIENTO INICIAL
        </h4>

        <div class="row dos_items">
          <div class="item">
            <label>17. Fecha inicio síntomas de AR: </label>
            <q-input filled v-model="data.v17">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v17">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="item">
            <label
              >18. Fecha de la primera consulta por especialista en relación a
              la impresión diagnóstica:
            </label>
            <q-input filled v-model="data.v18">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v18">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
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
            <label>19. Fecha de diagnóstico de AR:</label>
            <q-input filled v-model="data.v19">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v19">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="item">
            <label>20. Talla: </label>
            <q-input
              rounded
              standout
              v-model="data.v20"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>21. Peso inicial:</label>
            <q-input
              rounded
              standout
              v-model="data.v21"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label>22. Radiografía de manos al diagnóstico: </label>
            <q-select
              rounded
              standout
              v-model="data.v22"
              :options="v22"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>23. Radiografía de pies al diagnóstico: </label>
            <q-select
              rounded
              standout
              v-model="data.v23"
              :options="v23"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label
              >24. VSG (Velocidad de sedimentación globular) Inicial:
            </label>
            <q-input
              rounded
              standout
              v-model="data.v24"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>25. PCR (Proteína C Reactiva) Inicial:</label>
            <q-select
              rounded
              standout
              v-model="data.v25"
              :options="v25"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>26. Factor reumatoideo inicial: </label>
            <q-select
              rounded
              standout
              v-model="data.v26"
              :options="v26"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>27. Hemoglobina inicial: </label>
            <q-input
              rounded
              standout
              v-model="data.v27"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label>28. Leucocitos inicial:</label>
            <q-input
              rounded
              standout
              v-model="data.v28"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>29. Creatinina Inicial: </label>
            <q-input
              rounded
              standout
              v-model="data.v29"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label>30. TFG Inicial: </label>
            <q-input
              rounded
              standout
              v-model="data.v30"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>31. Parcial de Orina inicial:</label>
            <q-select
              rounded
              standout
              v-model="data.v31"
              :options="v31"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>32. ALT Inicial: </label>
            <q-select
              rounded
              standout
              v-model="data.v32"
              :options="v32"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>33. Anti-CCP al diagnóstico:</label>
            <q-select
              rounded
              standout
              v-model="data.v33"
              :options="v33"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>34. HTA al diagnóstico</label>
            <q-select
              rounded
              standout
              v-model="data.v34"
              :options="v34"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>35. DM al diagnóstico:</label>
            <q-select
              rounded
              standout
              v-model="data.v35"
              :options="v35"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>36. ECV (Enfermedad Cardiovascular) al diagnóstico: </label>
            <q-select
              rounded
              standout
              v-model="data.v36"
              :options="v36"
              label="Seleccionar"
            />
          </div>
        </div>
        <div class="row dos_items">
          <div class="item">
            <label>37. ERC al diagnóstico:</label>
            <q-select
              rounded
              standout
              v-model="data.v37"
              :options="v37"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>38. Osteoporosis al diagnóstico:</label>
            <q-select
              rounded
              standout
              v-model="data.v38"
              :options="v38"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>39. Síndrome de Sjögren al diagnóstico:</label>
            <q-select
              rounded
              standout
              v-model="data.v39"
              :options="v37"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>40. Fecha del primer DAS 28 realizado: </label>
            <q-input filled v-model="data.v40">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v40">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
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
            <label>41. Profesional que realizó el primer DAS 28: </label>
            <q-select
              rounded
              standout
              v-model="data.v41"
              :options="v41"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>42. Resultado del primer DAS 28:</label>
            <q-input
              rounded
              standout
              v-model="data.v42"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >43. Fecha del primer HAQ (Health Assessment Questionnaire)
              realizado:
            </label>
            <q-input filled v-model="data.v43">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v43">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="item">
            <label
              >44. Resultado de HAQ (Health Assessment Questionnaire)
              inicial:</label
            >
            <q-input
              rounded
              standout
              v-model="data.v44"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >45.1. Fecha de inicio del tratamiento inicial SIN DMARD (Fármacos
              Antirreumáticos Modificadores de la Enfermedad), hace referencia
              al tratamiento con analgésicos, AINES y/o glucocorticoides
              relacionados en la Var 45.2 a la 45.5:</label
            >
            <q-input filled v-model="data.v45_1">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v45_1">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="item">
            <label
              >45.2. Analgésicos No Opioides (Acetaminofén - Dipirona) al
              inicio:
            </label>
            <q-select
              rounded
              standout
              v-model="data.v45_2"
              :options="v45_2"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >45.3. Analgésicos Opioides (Codeína - Tramadol) al inicio:</label
            >
            <q-select
              rounded
              standout
              v-model="data.v45_3"
              :options="v45_3"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>45.4. AINES al inicio: </label>
            <q-select
              rounded
              standout
              v-model="data.v45_4"
              :options="v45_4"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>45.5. Corticoides al inicio: </label>
            <q-select
              rounded
              standout
              v-model="data.v45_5"
              :options="v45_5"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label
              >45.6. Fecha inicio tratamiento con DMARD (Fármacos
              Antirreumáticos Modificadores de la Enfermedad sintéticos y
              biológicos):</label
            >
            <q-input filled v-model="data.v45_6">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v45_6">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
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
            <label
              >45.8. Antecedente de linfoma antes del inicio de DMARD (Fármacos
              Antirreumáticos Modificadores de la Enfermedad sintéticos y
              biológicos):
            </label>
            <q-select
              rounded
              standout
              v-model="data.v45_8"
              :options="v45_8"
              label="Seleccionar"
            />
          </div>
          <div class="item"></div>
        </div>
        <div class="row dos_items">
          <div class="row actions cien q-mt-xl">
            <div class="item align_right cien">
              <q-btn
                rounded
                class="azul_boton btn_crear"
                text-color="white"
                icon-right="save"
                label="Guardar"
                type="submit"
                @click="type = 'borrador'"
                v-if="status !== 'finalizado'"
              />
            </div>
            <div class="item cien align_right cien q-mt-md">
              <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
              <q-btn
                rounded
                class="bg_botn_verde btn_crear"
                text-color="white"
                icon-right="chevron_right"
                @click="type = 'siguiente'"
                type="submit"
                label="Siguiente"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="wrp_forms w_50" v-if="secondStep">
        <h4 class="titulo_fondo w_100">
          Medicamentos al momento del diagnóstico
        </h4>

        <div class="row dos_items">
          <div class="item">
            <label>46.1. Azatioprina: </label>
            <q-select
              rounded
              standout
              v-model="data.v46_1"
              :options="v46_1"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>46.2. Ciclosporina:</label>
            <q-select
              rounded
              standout
              v-model="data.v46_2"
              :options="ciclosporina"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>46.3 Ciclofosfamida: </label>
            <q-select
              rounded
              standout
              v-model="data.v46_3"
              :options="ciclofosfamida"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>46.4. Cloroquina:</label>
            <q-select
              rounded
              standout
              v-model="data.v46_4"
              :options="cloroquina"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>46.5. D-penicilamina: </label>
            <q-select
              rounded
              standout
              v-model="data.v46_5"
              :options="dPenicilamina"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>46.6. Etanercept:</label>
            <q-select
              rounded
              standout
              v-model="data.v46_6"
              :options="Etanercept"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>46.7. Leflunomida:</label>
            <q-select
              rounded
              standout
              v-model="data.v46_7"
              :options="leflunomida"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>46.8. Metotrexate: </label>
            <q-select
              rounded
              standout
              v-model="data.v46_8"
              :options="metotrexate"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>46.9. Rituximab: </label>
            <q-select
              rounded
              standout
              v-model="data.v46_9"
              :options="rituximab"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>46.10. Sulfasalazina: </label>
            <q-select
              rounded
              standout
              v-model="data.v46_10"
              :options="sulfasalazina"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>47.1. Abatacept: </label>
            <q-select
              rounded
              standout
              v-model="data.v47_1"
              :options="abatacept"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>47.2. Adalimumab:</label>
            <q-select
              rounded
              standout
              v-model="data.v47_2"
              :options="adalimumab"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>47.3. Certolizumab: </label>
            <q-select
              rounded
              standout
              v-model="data.v47_3"
              :options="certolizumab"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>47.4. Golimumab:</label>
            <q-select
              rounded
              standout
              v-model="data.v47_4"
              :options="golimumab"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>47.5. Hidroxicloroquina: </label>
            <q-select
              rounded
              standout
              v-model="data.v47_5"
              :options="hidroxicloroquina"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>47.6. Infliximab: </label>
            <q-select
              rounded
              standout
              v-model="data.v47_6"
              :options="infliximab"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>47.7. Sales de oro:</label>
            <q-select
              rounded
              standout
              v-model="data.v47_7"
              :options="salesdeOro"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>47.8. Tocilizumab: </label>
            <q-select
              rounded
              standout
              v-model="data.v47_8"
              :options="tocilizumab"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>47.9. Tofacitinib: </label>
            <q-select
              rounded
              standout
              v-model="data.v47_9"
              :options="tofacitinib"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>47.10. Anakinra: </label>
            <q-select
              rounded
              standout
              v-model="data.v47_10"
              :options="anakinra"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >47.11. Otro medicamento DMARD No enunciado en variables 46.1 a
              47.10 (medicamento1):
            </label>
            <q-input
              rounded
              standout
              v-model="data.v47_11"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label
              >47.12. Otro medicamento DMARD No enunciado en variables 46.1 a
              47.10 (medicamento2)
            </label>
            <q-input
              rounded
              standout
              v-model="data.v47_12"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >47.13. Otro medicamento DMARD No enunciado en variables 46.1a
              47.10 (medicamento3) R</label
            >
            <q-input
              rounded
              standout
              v-model="data.v47_13"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label
              >47.14. Otro medicamento DMARD No enunciado en variables 46.1 a
              47.10 (medicamento4)
            </label>
            <q-input
              rounded
              standout
              v-model="data.v47_14"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >45.7. Tamizaje para TB realizado dentro del período antes de
              inicio o cambio de DMARD BIOLÓGICOS (Fármacos Antirreumáticos
              Modificadores de la Enfermedad como: Abatacept, Adalimumab,
              Anakinra, Certolizumab, Etanercept, Golimumab, Infliximab,
              Rituximab, Tocilizumab) o DMARD de compuestos químicos sintéticos
              específicos(Tofacitinib, Baricitinib).</label
            >
            <q-select
              rounded
              standout
              v-model="data.v45_7"
              :options="v45_7"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>48. Peso último semestre: </label>
            <q-input
              rounded
              standout
              v-model="data.v48"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >49. Radiografía de manos (últimas realizadas, diferente a la del
              diagnóstico):
            </label>
            <q-select
              rounded
              standout
              v-model="data.v49"
              :options="v49"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label
              >50. Radiografía de pies (últimas realizadas, diferente a la del
              diagnóstico):
            </label>
            <q-select
              rounded
              standout
              v-model="data.v50"
              :options="v50"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>51. (Proteína C Reactiva) de seguimiento:</label>
            <q-select
              rounded
              standout
              v-model="data.v51"
              :options="v51"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label
              >52. VSG (Velocidad de Sedimentación globular) de seguimiento:
              R</label
            >
            <q-input
              rounded
              standout
              v-model="data.v52"
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
              v-model="data.v53"
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
              v-model="data.v54"
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
              v-model="data.v55"
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
              v-model="data.v56"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>57. Parcial de Orina de seguimiento: </label>
            <q-select
              rounded
              standout
              v-model="data.v57"
              :options="v57"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>58. ALT de seguimiento: </label>
            <q-select
              rounded
              standout
              v-model="data.v58"
              :options="v58"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>59. HTA actual:</label>
            <q-select
              rounded
              standout
              v-model="data.v59"
              :options="v59"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>60. DM actual: </label>
            <q-select
              rounded
              standout
              v-model="data.v60"
              :options="v60"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>61. ECV (Enfermedad cardiovascular) actual: </label>
            <q-select
              rounded
              standout
              v-model="data.v61"
              :options="v61"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>62. ERC actual:</label>
            <q-select
              rounded
              standout
              v-model="data.v62"
              :options="v62"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>63. Osteoporosis actual: </label>
            <q-select
              rounded
              standout
              v-model="data.v63"
              :options="v63"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>64. Síndrome de Sjögren actual: </label>
            <q-select
              rounded
              standout
              v-model="data.v64"
              :options="v64"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>65. Fecha del último DAS 28 realizado:</label>
            <q-input filled v-model="data.v65">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v65">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="item">
            <label>66. Profesional que realizó el último DAS 28: </label>
            <q-select
              rounded
              standout
              v-model="data.v66"
              :options="v66"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>67. Resultado del último DAS 28:</label>
            <q-input
              rounded
              standout
              v-model="data.v67"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label
              >68. Estado de actividad actual de la AR según DAS 28:
            </label>
            <q-select
              rounded
              standout
              v-model="data.v68"
              :options="v68"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >69. Fecha del último HAQ (Health Assessment Questionnaire)
              realizado:
            </label>
            <q-input filled v-model="data.v69">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v69">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="item">
            <label
              >70. Resultado del último HAQ (Health Assessment Questionnaire)
              realizado:
            </label>
            <q-input
              rounded
              standout
              v-model="data.v70"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >71.1. Analgésicos No Opioides (Acetaminofén - Dipirona):
            </label>
            <q-input
              rounded
              standout
              v-model="data.v71_1"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label>71.2. Analgésicos Opioides (Codeína - Tramadol): </label>
            <q-select
              rounded
              standout
              v-model="data.v71_2"
              :options="v71_2"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>71.3. AINES:</label>
            <q-select
              rounded
              standout
              v-model="data.v71_3"
              :options="v71_3"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>71.4. Corticoides:</label>
            <q-select
              rounded
              standout
              v-model="data.v71_4"
              :options="v71_4"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >71.5. Meses de uso de Glucocorticoides a dosis de 10 mg/día o
              mayores durante los 12 meses previos a la fecha de reporte:
            </label>
            <q-input
              rounded
              standout
              v-model="data.v71_5"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label>71.6. Calcio:</label>
            <q-select
              rounded
              standout
              v-model="data.v71_6"
              :options="v71_6"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>71.7. Vitamina D: </label>
            <q-select
              rounded
              standout
              v-model="data.v71_7"
              :options="v71_7"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label
              >72. Fecha inicio tratamiento actual con DMARD (Fármacos
              Antirreumáticos Modificadores de la Enfermedad sintéticos y
              biológicos):
            </label>
            <q-input filled v-model="data.v72">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v72">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
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
            <q-btn
              rounded
              class="azul_boton btn_crear"
              text-color="white"
              icon-right="save"
              label="Guardar"
              type="submit"
              @click="type = 'borrador'"
              v-if="status !== 'finalizado'"
            />
          </div>
          <div class="item cien align_right cien q-mt-md">
            <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
            <q-btn
              rounded
              class="bg_botn_verde btn_crear"
              text-color="white"
              icon-right="chevron_right"
              @click="type = 'siguiente'"
              type="submit"
              label="Siguiente"
            />
          </div>
        </div>
      </div>
      <div class="wrp_forms w_50" v-if="thirdStep">
        <h4 class="titulo_fondo w_100">Medicamentos al corte actual</h4>

        <div class="row dos_items">
          <div class="item">
            <label>73.1. Azatioprina: </label>
            <q-select
              rounded
              standout
              v-model="data.v73_1"
              :options="azatioprina"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>73.2. Ciclosporina: </label>
            <q-select
              rounded
              standout
              v-model="data.v73_2"
              :options="ciclosporina"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>73.3. Ciclofosfamida: </label>
            <q-select
              rounded
              standout
              v-model="data.v73_3"
              :options="ciclofosfamida"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>73.4. Cloroquina:</label>
            <q-select
              rounded
              standout
              v-model="data.v73_4"
              :options="cloroquina"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>73.5. D-penicilaimina:</label>
            <q-select
              rounded
              standout
              v-model="data.v73_5"
              :options="dPenicilamina"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>73.6. Etanercept: </label>
            <q-select
              rounded
              standout
              v-model="data.v73_6"
              :options="Etanercept"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>73.7. Leflunomida: </label>
            <q-select
              rounded
              standout
              v-model="data.v73_7"
              :options="leflunomida"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>73.8. Metotrexate: </label>
            <q-select
              rounded
              standout
              v-model="data.v73_8"
              :options="metotrexate"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>73.9. Rituximab: </label>
            <q-select
              rounded
              standout
              v-model="data.v73_9"
              :options="rituximab"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>73.10. Sulfasalazina: </label>
            <q-select
              rounded
              standout
              v-model="data.v73_10"
              :options="sulfasalazina"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>74.1. Abatacept: </label>
            <q-select
              rounded
              standout
              v-model="data.v74_1"
              :options="abatacept"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>74.2. Adalimumab:</label>
            <q-select
              rounded
              standout
              v-model="data.v74_2"
              :options="adalimumab"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>74.3. Certolizumab: </label>
            <q-select
              rounded
              standout
              v-model="data.v74_3"
              :options="certolizumab"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>74.4. Golimumab:</label>
            <q-select
              rounded
              standout
              v-model="data.v74_4"
              :options="golimumab"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>74.5. Hidroxicloroquina: </label>
            <q-select
              rounded
              standout
              v-model="data.v74_5"
              :options="hidroxicloroquina"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>74.6. Infliximab: </label>
            <q-select
              rounded
              standout
              v-model="data.v74_6"
              :options="infliximab"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>74.7. Sales de oro:</label>
            <q-select
              rounded
              standout
              v-model="data.v74_7"
              :options="salesdeOro"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>74.8. Tocilizumab: </label>
            <q-select
              rounded
              standout
              v-model="data.v74_8"
              :options="tocilizumab"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>74.9. Tofacitinib: </label>
            <q-select
              rounded
              standout
              v-model="data.v74_9"
              :options="tofacitinib"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>74.10. Anakinra: </label>
            <q-select
              rounded
              standout
              v-model="data.v74_10"
              :options="anakinra"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >74.11. Otro medicamento DMARD No enunciado en variables 73.1 a
              74.10 (medicamento1):
            </label>
            <q-input
              rounded
              standout
              v-model="data.v74_11"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label
              >74.12. Otro medicamento DMARD No enunciado en variables 73.1 a
              74.10 (medicamento2)
            </label>
            <q-input
              rounded
              standout
              v-model="data.v74_12"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >74.13. Otro medicamento DMARD No enunciado en variables 73.1a
              74.10 (medicamento3) R</label
            >
            <q-input
              rounded
              standout
              v-model="data.v74_13"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label
              >74.14. Otro medicamento DMARD No enunciado en variables 73.1 a
              74.10 (medicamento4)
            </label>
            <q-input
              rounded
              standout
              v-model="data.v74_14"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >75.1. Número de consultas con reumatólogo en el último año (1 de
              julio de 2021 a 30 de junio 2022):</label
            >
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
            <label
              >75.2. Número de consultas con el internista por AR en el último
              año (1 de julio de 2021 a 30 de junio 2022):
            </label>
            <q-input
              rounded
              standout
              v-model="data.v75_2"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >75.3. Número de consultas con el médico familiar por AR en el
              último año (1 de julio de 2021 a 30 de junio 2022):
            </label>
            <q-input
              rounded
              standout
              v-model="data.v75_3"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
          <div class="item">
            <label>75.4. Reemplazo articular 1 por AR:</label>
            <q-select
              rounded
              standout
              v-model="data.v75_4"
              :options="v75_4"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>75.5. Reemplazo articular 2 por AR: </label>
            <q-select
              rounded
              standout
              v-model="data.v75_5"
              :options="v75_5"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>75.6. Reemplazo articular 3 por AR: </label>
            <q-select
              rounded
              standout
              v-model="data.v75_6"
              :options="v75_6"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>75.7. Reemplazo articular 4 por AR:</label>
            <q-select
              rounded
              standout
              v-model="data.v75_7"
              :options="v75_7"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label
              >76. Número de hospitalizaciones por AR o eventos cardiovasculares
              relacionados con AR en el último año (1 de julio de 2021 a 30 de
              junio de 2022):
            </label>
            <q-input
              rounded
              standout
              v-model="data.v76"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >77. Código de habilitación de la sede de la IPS donde se hace el
              seguimiento y atención de la AR al paciente actualmente:
            </label>
            <q-input
              rounded
              standout
              v-model="data.v77"
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
              v-model="data.v78"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >79. Fecha de ingreso a la IPS actual donde se hace el seguimiento
              y atención de la AR al paciente:
            </label>
            <q-input filled v-model="data.v79">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v79">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="item">
            <label
              >80. Quien hace la atención clínica para AR al paciente
              actualmente:
            </label>
            <q-select
              rounded
              standout
              v-model="data.v80"
              :options="v80"
              label="Seleccionar"
            />
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >81. Novedad del paciente respecto al reporte anterior: l</label
            >
            <q-select
              rounded
              standout
              v-model="data.v81"
              :options="v81"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label>82. Fecha de desafiliación de la EAPB: </label>
            <q-input filled v-model="data.v82">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v82">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
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
            <label
              >83. EAPB o Ente territorial al cual se trasladó el paciente
              desafiliado:
            </label>
            <q-input
              rounded
              standout
              v-model="data.v83"
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
              v-model="data.v84"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>85. Causa de muerte: </label>
            <q-select
              rounded
              standout
              v-model="data.v85"
              :options="v85"
              label="Seleccionar"
            />
          </div>
          <div class="item">
            <label
              >86. Costo anual de DMARD incluido en el plan de beneficios (PBS):
              R</label
            >
            <q-input
              rounded
              standout
              v-model="data.v86"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >87. Costo anual de DMARD no incluido en el plan de beneficios (NO
              PBS): R</label
            >
            <q-input
              rounded
              standout
              v-model="data.v87"
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
              v-model="data.v88"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label
              >89. Costo anual de incapacidades laborales relacionadas con la AR
              (Solo para personas que se encuentran afiliadas y son cotizantes)
            </label>
            <q-input
              rounded
              standout
              v-model="data.v89"
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
              v-model="data.v90"
              lazy-rules
              type="number"
            >
            </q-input>
          </div>
        </div>

        <div class="row dos_items">
          <div class="item">
            <label>91. Fecha de corte: </label>
            <q-input filled v-model="data.v91">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    mask="YYYY-MM-DD"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.v91">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Cerrar"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="item"></div>
        </div>
        <div class="row dos_items">
          <div class="row actions cien q-mt-xl">
            <div class="item align_right cien">
              <q-btn
                rounded
                class="azul_boton btn_crear"
                text-color="white"
                icon-right="save"
                label="Guardar"
                type="submit"
                @click="type = 'borrador'"
                v-if="status !== 'finalizado'"
              />
            </div>
            <div class="item cien align_right cien q-mt-md">
              <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
              <q-btn
                rounded
                class="bg_botn_verde btn_crear"
                text-color="white"
                icon-right="chevron_right"
                @click="type = 'siguiente'"
                type="submit"
                label="Siguiente"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="wrp_forms w_50" v-if="fourthStep">
        <div class="row dos_items">
          <div class="row actions cien q-mt-xl">
            <div class="item align_right cien">
              <q-btn
                rounded
                class="azul_boton btn_crear"
                text-color="white"
                icon-right="save"
                label="Guardar"
                type="submit"
                @click="type = 'borrador'"
                v-if="status !== 'finalizado'"
              />
            </div>
            <div class="item cien align_right cien q-mt-md">
              <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
              <q-btn
                rounded
                class="bg_botn_verde btn_crear"
                text-color="white"
                icon-right="chevron_right"
                @click="type = 'siguiente'"
                type="submit"
                label="Siguiente"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="wrp_forms w_50" v-if="fiveStep">
        <div class="row dos_items">
          <div class="row actions cien q-mt-xl">
            <div class="item align_right cien">
              <q-btn
                rounded
                class="azul_boton btn_crear"
                text-color="white"
                icon-right="save"
                label="Guardar"
                type="submit"
                @click="type = 'borrador'"
                v-if="status !== 'finalizado'"
              />
            </div>
            <div class="item cien align_right cien q-mt-md">
              <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
              <q-btn
                rounded
                class="bg_botn_verde btn_crear"
                text-color="white"
                icon-right="chevron_right"
                @click="type = 'siguiente'"
                type="submit"
                label="Siguiente"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="wrp_forms w_50" v-if="sixStep">
        <div class="row dos_items">
          <div class="row actions cien q-mt-xl">
            <div class="item align_right cien">
              <q-btn
                rounded
                class="azul_boton btn_crear"
                text-color="white"
                icon-right="save"
                label="Guardar"
                type="submit"
                @click="type = 'borrador'"
                v-if="status !== 'finalizado'"
              />
            </div>
            <div class="item cien align_right cien q-mt-md">
              <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
              <q-btn
                rounded
                class="bg_botn_verde btn_crear"
                text-color="white"
                icon-right="chevron_right"
                @click="type = 'siguiente'"
                type="submit"
                label="Siguiente"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="wrp_forms w_50" v-if="sevenStep">
        <div class="row dos_items">
          <div class="row actions cien q-mt-xl">
            <div class="item align_right cien">
              <q-btn
                rounded
                class="azul_boton btn_crear"
                text-color="white"
                icon-right="save"
                label="Guardar"
                type="submit"
                @click="type = 'borrador'"
                v-if="status !== 'finalizado'"
              />
            </div>
            <div class="item cien align_right cien q-mt-md">
              <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
              <q-btn
                rounded
                class="bg_botn_verde btn_crear"
                text-color="white"
                icon-right="chevron_right"
                @click="type = 'siguiente'"
                type="submit"
                label="Siguiente"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="wrp_forms w_50" v-if="eightStep">
        <div class="row dos_items">
          <div class="row actions cien q-mt-xl">
            <div class="item align_right cien">
              <q-btn
                rounded
                class="azul_boton btn_crear"
                text-color="white"
                icon-right="save"
                label="Guardar"
                type="submit"
                @click="type = 'borrador'"
                v-if="status !== 'finalizado'"
              />
            </div>
            <div class="item cien align_right cien q-mt-md">
              <!-- <q-btn rounded class="bg_botn_verde btn_crear" text-color="white" icon-right="chevron_right" @click="type = 'finalizar'" type="submit" label="Finalizar" />-->
              <q-btn
                rounded
                class="bg_botn_verde btn_crear"
                text-color="white"
                icon-right="chevron_right"
                @click="type = 'siguiente'"
                type="submit"
                label="Siguiente"
              />
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
          <q-btn
            rounded
            class="bg_botn_verde btn_crear cambiar_pdf"
            @click="popcambiarpdf = true"
            text-color="white"
            icon-right="autorenew"
            label="Cambiar pdf"
          />
          <q-btn
            rounded
            class="bg_botn_verde btn_crear cambiar_pdf"
            v-if="auditor"
            @click="popuprealizaranotacion = true"
            text-color="white"
            icon-right="border_color"
            label="Realizar anotación"
          />
        </div>
        <div class="anotaciones_pdf doc-note" v-if="anotations.length !== 0">
          <h5 class="titulo_nota">
            Anotaciones
          </h5>
          <ul>
            <li v-for="(item, key) in anotations" :key="key">
              <span>{{ item.title }}</span>
              <q-btn
                @click="openPopupAnotations(item)"
                rounded
                class="bg_botn_azul"
                text-color="white"
                icon-right="visibility"
                label="Ver"
              />
            </li>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
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
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero.
            </p>
          </div>
          <q-btn
            class="close_pop"
            icon="close"
            flat
            round
            dense
            v-close-popup
          />
        </q-card-section>
        <q-card-section class="q-pa-sm listado">
          <ul class="list_pdf">
            <li v-for="(item, key) in pdfs" :key="key">
              <p>
                <q-icon name="article" class="blanco_iconos" size="25px" /><span
                  >{{ item.title }}</span
                >
              </p>
              <a href="#" @click="setPdf($event, item)">Seleccionar</a>
            </li>
          </ul>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- habilitar al terminar las validaciones <q-dialog v-model="popupanotacion">
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
    -->
    <q-dialog v-model="popuprealizaranotacion">
      <q-card style="width: 700px; max-width: 80vw;" class="pop_cambiarpsf">
        <q-card-section class="q-pa-md">
          <h4>Crear Anotaciones</h4>
          <div class="desc_pop">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
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
              <q-btn
                rounded
                class="azul_boton btn_crear"
                text-color="white"
                type="button"
                icon-right="save"
                label="Guardar"
                @click="saveAnnotation"
              />
            </div>
          </q-form>
          <q-btn
            class="close_pop"
            icon="close"
            flat
            round
            dense
            v-close-popup
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-form>
</template>

<script>
import configServices from "../../services/config";
export default {
  name: "FormularioErc",
  props: {
    patient: Object
  },
  data() {
    return {
      urlSite: 'https://cac.asfaips.com.co',
      show: true,
      firstStep: true,
      annotationText: "",
      secondStep: false,
      thirdStep: false,
      fourthStep: false,
      fiveStep: false,
      sixStep: false,
      sevenStep: false,
      eightStep: false,
      nineStep: false,
      data: {
        pregnantWoman: "",
        tumorSolidoCompatibles: {
          id: "",
          label: ""
        },
        riesgosLeucemiaPediatra: {
          id: "",
          label: ""
        }
      },
      popcambiarpdf: false,
      popupanotacion: false,
      popuprealizaranotacion: false,
      tool: false,
      registerNid: "",
      date: "YYYY-MM-DD",
      auditor: false,
      status: "",
      type: "",
      pdfs: [],
      pdf: "",
      anotations: [],
      anotation: [],
      v22: [
        {
          id: "0",
          label: " Sin erosiones."
        },
        {
          id: "1",
          label: "Con erosiones."
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v50: [
        {
          id: "0",
          label: " Sin erosiones."
        },
        {
          id: "1",
          label: "Con erosiones."
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v23: [
        {
          id: "0",
          label: " Sin erosiones."
        },
        {
          id: "1",
          label: "Con erosiones."
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v25: [
        {
          id: "0",
          label: "No reactiva."
        },
        {
          id: "1",
          label: "Reactiva"
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v26: [
        {
          id: "0",
          label: "Negativo"
        },
        {
          id: "1",
          label: "Positivo"
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v31: [
        {
          id: "0",
          label: "Sin proteinuria."
        },
        {
          id: "1",
          label: "Con proteinuria."
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v32: [
        {
          id: "0",
          label: "Normal"
        },
        {
          id: "1",
          label: "Anormal"
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v33: [
        {
          id: "0",
          label: "Negativo"
        },
        {
          id: "1",
          label: "Positivo"
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v34: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v35: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v36: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v37: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v38: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v41: [
        {
          id: "1",
          label: " Médico general."
        },
        {
          id: "2",
          label: " Médico familiar."
        },
        {
          id: "3",
          label: " Internista."
        },
        {
          id: "4",
          label: " Fisiatra."
        },
        {
          id: "5",
          label: " Ortopedista."
        },
        {
          id: "6",
          label: " Reumatólogo."
        },
        {
          id: "7",
          label: " Enfermero."
        },
        {
          id: "9",
          label: " Sin Dato."
        },
        {
          id: "55",
          label:
            " No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"
        }
      ],
      v45_2: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v45_3: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v45_4: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v45_5: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v45_8: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "300",
          label: "Sin dato"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      uSoporteNutricion: [
        {
          id: "55",
          label:
            "Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."
        }
      ],
      v46_1: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      azatioprina: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      ciclosporina: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      ciclofosfamida: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      cloroquina: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      dPenicilamina: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      Etanercept: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      leflunomida: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      metotrexate: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      rituximab: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      sulfasalazina: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      abatacept: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      adalimumab: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      certolizumab: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      golimumab: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      hidroxicloroquina: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      infliximab: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      salesdeOro: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      tocilizumab: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      tofacitinib: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      anakinra: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v45_7: [
        {
          id: "0",
          label: "No"
        },
        {
          id: "1",
          label: "Si"
        },
        {
          id: "2",
          label:
            " No aplica (porque el paciente no inició DMARD en el período ni cambio DMARD en el período) incluir abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v49: [
        {
          id: "0",
          label: " Sin erosiones."
        },
        {
          id: "1",
          label: "Con erosiones."
        },
        {
          id: "300",
          label: "Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v51: [
        {
          id: "0",
          label: "No reactiva."
        },
        {
          id: "1",
          label: "Reactiva"
        },
        {
          id: "300",
          label: "Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      velocidadDeSedimentacion: [
        {
          id: "0",
          label: "No reactiva."
        },
        {
          id: "1",
          label: "Reactiva"
        },
        {
          id: "300",
          label: "Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v57: [
        {
          id: "0",
          label: "Sin proteinuria."
        },
        {
          id: "1",
          label: "Con proteinuria."
        },
        {
          id: "300",
          label: "Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v58: [
        {
          id: "0",
          label: "Normal."
        },
        {
          id: "1",
          label: "Anormal."
        },
        {
          id: "300",
          label: ": Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v59: [
        {
          id: "0",
          label: "No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "300",
          label: ": Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v60: [
        {
          id: "0",
          label: "No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "300",
          label: ": Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v61: [
        {
          id: "0",
          label: "No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "300",
          label: ": Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v62: [
        {
          id: "0",
          label: "No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "300",
          label: ": Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v63: [
        {
          id: "0",
          label: "No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "300",
          label: ": Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v64: [
        {
          id: "0",
          label: "No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "300",
          label: ": Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v66: [
        {
          id: "1",
          label: " Médico general."
        },
        {
          id: "2",
          label: " Médico familiar."
        },
        {
          id: "3",
          label: " Internista."
        },
        {
          id: "4",
          label: " Fisiatra."
        },
        {
          id: "5",
          label: " Ortopedista."
        },
        {
          id: "6",
          label: " Reumatólogo."
        },
        {
          id: "7",
          label: " Enfermero."
        },
        {
          id: "9",
          label: " Sin dato o paciente en abandono."
        },
        {
          id: "55",
          label:
            " No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"
        }
      ],
      v68: [
        {
          id: "0",
          label: "Remisión (>=0 y <2.6)."
        },
        {
          id: "1",
          label: "Baja actividad (>=2.6 y <=3.2)"
        },
        {
          id: "2",
          label: "Activa (>3.2 y <=10)"
        },
        {
          id: "300",
          label: ": Sin dato o paciente en abandono"
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      AlangesicosNoOpioides: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v71_2: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v71_3: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v71_4: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v71_6: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v71_7: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      prueba: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: "Si."
        },
        {
          id: "55",
          label:
            "No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v75_4: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: " Cadera."
        },
        {
          id: "2",
          label: " Rodilla."
        },
        {
          id: "3",
          label: " Tobillo."
        },
        {
          id: "4",
          label: " Hombro."
        },
        {
          id: "5",
          label: " Codo."
        },
        {
          id: "55",
          label:
            " No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v75_5: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: " Cadera."
        },
        {
          id: "2",
          label: " Rodilla."
        },
        {
          id: "3",
          label: " Tobillo."
        },
        {
          id: "4",
          label: " Hombro."
        },
        {
          id: "5",
          label: " Codo."
        },
        {
          id: "55",
          label:
            " No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v75_6: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: " Cadera."
        },
        {
          id: "2",
          label: " Rodilla."
        },
        {
          id: "3",
          label: " Tobillo."
        },
        {
          id: "4",
          label: " Hombro."
        },
        {
          id: "5",
          label: " Codo."
        },
        {
          id: "55",
          label:
            " No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v75_7: [
        {
          id: "0",
          label: " No."
        },
        {
          id: "1",
          label: " Cadera."
        },
        {
          id: "2",
          label: " Rodilla."
        },
        {
          id: "3",
          label: " Tobillo."
        },
        {
          id: "4",
          label: " Hombro."
        },
        {
          id: "5",
          label: " Codo."
        },
        {
          id: "55",
          label:
            " No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ],
      v80: [
        {
          id: "1",
          label: " Médico general."
        },
        {
          id: "2",
          label: " Médico familiar."
        },
        {
          id: "3",
          label: " Internista."
        },
        {
          id: "4",
          label: " Fisiatra."
        },
        {
          id: "5",
          label: " Ortopedista."
        },
        {
          id: "6",
          label: " Reumatólogo."
        },
        {
          id: "9",
          label: " No aplica, paciente en abandono"
        },
        {
          id: "55",
          label:
            " No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios"
        }
      ],
      v81: [
        {
          id: "0",
          label: " No presenta ninguna novedad"
        },
        {
          id: "1",
          label: " Ingreso a EAPB con diagnóstico de AR"
        },
        {
          id: "2",
          label:
            " Usuario antiguo en EAPB a quien se le realizó nuevo diagnóstico de AR"
        },
        {
          id: "3",
          label:
            " Usuario antiguo en EAPB y antiguo diagnóstico de AR que no había sido incluido en reporte"
        },
        {
          id: "4",
          label: " Suspensión del tratamiento por orden médica"
        },
        {
          id: "5",
          label: " Persona que firmó alta voluntaria del tratamiento"
        },
        {
          id: "6",
          label: " Usuario abandonó el tratamiento."
        },
        {
          id: "7",
          label: " Usuario con cambio de tipo o número de identificación"
        },
        {
          id: "8",
          label:
            " Usuario con diagnóstico confirmado de AR no incluido en reporte anterior y que está desafiliado en el momento del reporte actual"
        },
        {
          id: "9",
          label:
            " Usuario con diagnóstico confirmado de AR no incluido en reporte anterior y que está fallecido en el momento del reporte actual"
        },
        {
          id: "10",
          label:
            " Usuario para eliminar de la base por corrección luego de auditoría interna o de la CAC"
        },
        {
          id: "11",
          label: " Usuario que se desafilió"
        },
        {
          id: "12",
          label: " Usuario que falleció"
        },
        {
          id: "13",
          label:
            " Persona con aseguramiento que recibió servicios no incluidos en el plan de beneficios por parte del ente territorial."
        },
        {
          id: "14",
          label: " Comunidad migrante de la República de Venezuela"
        },
        {
          id: "15",
          label:
            " Usuario identificado por fuentes externas con diagnóstico AR descartado por la entidad."
        },
        {
          id: "16",
          label:
            " Usuario identificado por fuente externas con diagnóstico AR no gestionado por la entidad."
        },
        {
          id: "17",
          label:
            " Paciente trasladado que fue glosado en periodo anterior que no fue gestionado por la entidad en el periodo."
        }
      ],
      v85: [
        {
          id: "1",
          label: "Muerte por artritis reumatoide."
        },
        {
          id: "2",
          label: "Muerte por otra patología."
        },
        {
          id: "3",
          label: "Muerte por causa externa."
        },
        {
          id: "55",
          label:
            " No aplica, paciente reportado por ente territorial por prestación de servicios no incluidos en el plan de beneficios."
        }
      ]
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));

    if (this.user !== {}) {
      this.user.roles.map((item, key) => {
        if (item === "auditor") {
          this.auditor = true;
        }
      });
    }

    this.registerNid = localStorage.getItem("registerNid");
    if (this.registerNid !== "") {
      this.getRegister();
      this.getAnotations();
    }

    var step = localStorage.getItem("step");
    if (step !== "" && step !== null) {
      switch (step) {
        case "FirstStep":
          this.firstStep = true;
          break;
        case "SecondStep":
          this.secondStep = true;
          this.firstStep = false;
          break;
        case "ThirdStep":
          this.thirdStep = true;
          this.secondStep = false;
          this.firstStep = false;
          break;
        case "FourthStep":
          this.fourthStep = true;
          this.secondStep = false;
          this.firstStep = false;
          this.thirdStep = false;
          break;
        case "FiveStep":
          this.fiveStep = true;
          this.fourthStep = false;
          this.secondStep = false;
          this.firstStep = false;
          this.thirdStep = false;
          break;
        case "SixStep":
          this.sixStep = true;
          this.fiveStep = false;
          this.fourthStep = false;
          this.secondStep = false;
          this.firstStep = false;
          this.thirdStep = false;
          break;
        case "SevenStep":
          this.sevenStep = true;
          this.sixStep = false;
          this.fiveStep = false;
          this.fourthStep = false;
          this.secondStep = false;
          this.firstStep = false;
          this.thirdStep = false;
          break;
        case "EightStep":
          this.eightStep = true;
          this.sevenStep = false;
          this.sixStep = false;
          this.fiveStep = false;
          this.fourthStep = false;
          this.secondStep = false;
          this.firstStep = false;
          this.thirdStep = false;
          break;
        case "NineStep":
          this.nineStep = true;
          this.eightStep = false;
          this.sevenStep = false;
          this.sixStep = false;
          this.fiveStep = false;
          this.fourthStep = false;
          this.secondStep = false;
          this.firstStep = false;
          this.thirdStep = false;
          break;
      }
    }
    this.getPdfs();
  },
  methods: {
    openPopupAnotations(item) {
      this.anotation = item;
      this.popupanotacion = true;
    },
    setPdf(e, item) {
      e.preventDefault();
      this.pdf = item.field_pdf;
      this.popcambiarpdf = false;
    },
    getPdfs() {
      var _this = this;
      configServices.loadData(this, "pdfs/" + this.patient.nid + "/json", {
        callBack: data => {
          if (data.length !== 0) {
            _this.pdfs = data;
            _this.pdf = data[0].field_pdf;
          }
          _this.$q.loading.hide();
        }
      });
    },
    saveAnnotation() {
      var _this = this;
      var data = {
        type: "saveAnnotation",
        data: {
          comment: this.annotationText
        },
        user: this.user.uid,
        status: "Finalizado"
      };
      if (this.registerNid !== "") {
        data.id = this.registerNid;
      }

      configServices.consumerStandar(this, "asfa-rest/post", data, {
        callBack: data => {
          if (typeof data.error !== "undefined") {
            return _this.$swal(
              "Advertencia",
              "Error al crear registro verifique que no haya un registro previamente creado para el paciente",
              "error"
            );
          }
          _this.getAnotations();
          _this.popuprealizaranotacion = false;
          return _this.$swal(
            "Advertencia",
            "Anotación guardada correctamente",
            "success"
          );
        }
      });
    },
    getAnotations() {
      var _this = this;
      configServices.loadData(
        this,
        "anotaciones/" + this.registerNid + "/json",
        {
          callBack: data => {
            _this.anotations = data;
            _this.$q.loading.hide();
          }
        }
      );
    },
    getRegister() {
      var _this = this;

      configServices.loadData(this, "registros/json/" + this.registerNid, {
        callBack: data => {
          if (data[0].field_status === "Finalizado") {
            _this.status = "finalizado";
          }

          data.map((item, key) => {
            var json = data[key].field_json
              .replace(/&quot;/g, '\\"')
              .replaceAll("\\", "");
            data[key].field_json = JSON.parse(json);

            var jsonPatient = data[key].field_json_1
              .replace(/&quot;/g, '\\"')
              .replaceAll("\\", "");
            data[key].field_json_1 = JSON.parse(jsonPatient);
          });

          _this.data = data[0].field_json;
          _this.$q.loading.hide();
        }
      });
    },
    previousStep() {
      if (this.secondStep) {
        this.firstStep = true;
        this.secondStep = false;
      }

      if (this.thirdStep) {
        this.secondStep = true;
        this.thirdStep = false;
      }
    },
    saveRegister() {
      if (this.status !== 'finalizado') {
        if (this.data.v17 === '1846-01-01') {
          if (this.data.v81 !== '13') {
            this.errors.push('La V18 es 13 revisar V17 debe ser 1846-01-01');
            this.error = true;
          }
        }
        if (typeof this.data.v17 !== 'undefined' && typeof this.data.v19 !== 'undefined' && this.data.v17 === '1800-01-01' && Date.parse(this.data.v19) < Date.parse('2014-01-01')) {
          this.errors.push('La V19 es < 2014-01-01 revisar V17 debe ser 1800-01-01')
          this.error = true
        }
        //v17
        if (Date.parse(this.data.v17) < this.patient.field_json.birthdate) {
          this.errors.push('La V17 debe ser >= V10')
          this.error = true
        }
        if (typeof this.data.v17 !== 'undefined' && typeof this.data.v91 !== 'undefined' && Date.parse(this.data.v17) > Date.parse(this.data.v91)) {
          if (
            this.data.v17 !== '1799-01-01' &&
            this.data.v17 !== '1800-01-01' &&
            this.data.v17 !== '1811-01-01' &&
            this.data.v17 !== '1846-01-01') {
            this.errors.push('La V17 debe ser <= V91 o = 1799-01-01 o 1800-01-01 o 1811-01-01 o 1846-01-011)')
            this.error = true
          }
        }
        //v18
        if (typeof this.data.v18 !== 'undefined' && typeof this.data.v18 !== 'undefined' && this.data.v18 === '1846-01-01' && this.data.v81.id !== '13') {
          this.errors.push('La V81 es 13, revisar la V18 que debe ser 1846-01-01')
          this.error = true
        }
        if (Date.parse(this.data.v18) > Date.parse('1846-01-01') && Date.parse(this.data.v17) >= Date.parse(this.data.v18)) {
          this.errors.push('La V18 es > 1846-01-01 revisar la V17 debe ser < V18')
          this.error = true
        }
        if (typeof this.data.v18 !== 'undefined' && typeof this.data.v19 !== 'undefined' &&  Date.parse(this.data.v18) === '1800-01-01' && Date.parse(this.data.v19) < Date.parse('2014-01-01')) {
          this.errors.push('La V19 es < 2014-01-01 revisar la V18 debe ser 1800-01-01')
          this.error = true
        }
        if (typeof this.data.v18 !== 'undefined' && this.data.v18 < this.patient.field_json.birthdate) {
          this.errors.push('La V18 debe ser >= V10 Fecha de nacimiento')
          this.error = true
        }
        if (typeof this.data.v18 !== 'undefined' && typeof this.data.v91 !== 'undefined' && this.data.v18 > this.data.v91) {
          if (
            this.data.v18 !== '1799-01-01' &&
            this.data.v18 !== '1800-01-01' &&
            this.data.v18 !== '1811-01-01' &&
            this.data.v18 !== '1822-01-01' &&
            this.data.v18 !== '1846-01-01') {
            this.errors.push('La V18debe ser <= V91 o = 1799-01-01 o 1800-01-01 o 1811-01-01 o 1846-01-01 0 1822-01-01')
          this.error = true
          }
        }
        //v19
        if (typeof this.data.v19 !== 'undefined' && Date.parse(this.data.v19) > '1846-01-01') {
          if (typeof this.data.v17 !== 'undefined' && typeof this.data.v19 !== 'undefined' && this.data.v17 > this.data.v19) {
            this.errors.push('La V19 es > 1846-01-01 revisar V17 debe ser < V19')
            this.error = true
          }
        }
        if (typeof this.data.v19 !== 'undefined' && Date.parse(this.data.v19) >= Date.parse('2021-07-01')) {
          if (typeof this.data.v45_1 !== 'undefined' && this.data.v45_1 === '1800-01-01') {
            this.errors.push(
              'La V45.1 es <> 1800-01-01 revisar la V19 debe ser >= 2021-07-01'
            );
            this.error = true;
          }
        }
        if (typeof this.data.v19 !== 'undefined' && this.data.v19 === '1846-01-01') {
          if (typeof this.data.v81 !== 'undefined' && this.data.v81 !== '13') {
            this.errors.push(
              'La V81 es 13 revisar la V19 debe ser = 1846-01-01'
            );
            this.error = true;
          }
        }
        if (typeof this.data.v19 !== 'undefined' && this.data.v19 < this.patient.field_json.birthdate) {
          this.errors.push('La V19 debe ser >= V10');
          this.error = true;
        }
        if (typeof this.data.v19 !== 'undefined' && typeof this.data.v91 !== 'undefined' && this.data.v19 > this.data.v91 &&
          this.data.v91 !== '1799-01-01' &&
          this.data.v91 !== '1800-01-01' &&
          this.data.v91 !== '1811-01-01' &&
          this.data.v91 !== '1846-01-01') {
          this.errors.push('V19 debe ser menor o igual a V91 o igual a 1799-01-01, 1800-01-01, 1811-01-01 o 1846-01-01')
        this.error = true
        }
        // v20
        if (typeof this.data.v20 !== 'undefined' && parseInt(this.data.v20) < 100 ||(parseInt(this.data.v20) > 210 && parseInt(this.data.v20) !== 555)) {
          this.errors.push('V20 debe ser mayor o igual a 100 y menor o igual a 210 o debe ser igual a 555.')
          this.error = true
        }
        if (typeof this.data.v20 !== 'undefined' && this.data.v20 == '555') {
          if (typeof this.data.v81 !== 'undefined' && this.data.v81.id != '13') {
            this.errors.push('La V81 debe ser 13, revisar la V20 debe ser 555')
            this.error = true
          }
        }
        // v21
        if (typeof this.data.v21 !== 'undefined' && parseInt(this.data.v21.id) < 15 || parseInt(this.data.v21.id) > 300 || this.data.v21.id != 555) {
          this.errors.push('La V21 debe ser > = 15 o < = 300 o = 555')
          this.error = true
        }
        if (typeof this.data.v21 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v21 === 555 && this.data.v81 !== 13) {
          this.errors.push('La V81 es 13 revisar la V21 debe ser = 555')
          this.error = true
        }
        //v 22
        if (typeof this.data.v22 !== 'undefined' && this.data.v22.id === '55') {
          if (typeof this.data.v81 !== 'undefined' && this.data.v81.id !== '13') {
            this.errors.push('La V81 es 13 revisar la V22 debe ser 55');
            this.error = true;
          }
        }
        if (typeof this.data.v22 !== 'undefined' && this.data.v22.id !== '1' && this.data.v22.id !== '300' && this.data.v22.id !== '55'
        ) {
          this.errors.push('V22 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        // 23
        if (typeof this.data.v23 !== 'undefined' && this.data.v23 === '55') {
          if (typeof this.data.v81 !== 'undefined' && this.data.v81 !== '13') {
            this.errors.push('La V81 es 13 revisar V23 debe ser 55')
            this.error = true
          }
        }
        if (typeof this.data.v23 !== 'undefined' && parseInt(this.data.v23.id) > '1' && this.data.v23.id !== '300' && this.data.v23.id !== '55') {
          this.errors.push('V23 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        // v24
        if (
          typeof this.data.v24 !== 'undefined' &&  parseInt(this.data.v24.id) < '0' && parseInt(this.data.v24.id) > '150' && this.data.v24.id !== '300' && this.data.v24.id !== '555') {
          this.errors.push('La V24 debe ser  >= 0  y < = 150 o = 300 o 555')
          this.error = true
        }
        if (typeof this.data.v24 !== 'undefined' && this.data.v24 === '555') {
          if (typeof this.data.v81 !== 'undefined' && this.data.v81 !== '13') {
            this.errors.push('V81 es 13 revisar la V24 que debe ser = 555')
            this.error = true
          }
        }
        // v25
        if (typeof this.data.v25 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v25.id === '55' && this.data.v81.id !== '13') {
          this.errors.push('La V81 debe ser 13. Verifique que V25 sea 55')
          this.error = true
        }
        if (
          typeof this.data.v25 !== 'undefined' && parseInt(this.data.v25.id) > 1 && this.data.v25.id !== '300' && this.data.v25.id !== '55') {
          this.errors.push('V25 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        // v26
        if (typeof this.data.v26 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v26.id === '55' && this.data.v81.id != '13') {
          this.errors.push('La V81 es 13 verificar V26 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v21 !== 'undefined' && parseInt(this.data.v26.id) > 1 && this.data.v26.id !== '300' && this.data.v26.id !== '55') {
          this.errors.push('V26 debe ser igual a 1, 300 o 55.')
          this.error = true;
        }
        // v27
        if (typeof this.data.v27 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v27.id === '55' && this.data.v81.id != '13') {
          this.errors.push('La V81 es 13 verificar V27 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v27 !== 'undefined' && parseInt(this.data.v27.id) > 1 && this.data.v27.id !== '300' && this.data.v27.id !== '55') {
          this.errors.push('V27 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        // v28
        if (
          (typeof this.data.v28 !== 'undefined' && parseInt(this.data.v28.id) < 0 && parseInt(this.data.v28.id) > 20000) || this.data.v28.id !== '55555' || this.data.v28.id !== '22222') {
          this.errors.push('La V28 debe ser >= 0 y <= 20000  o = 55555 o 22222')
          this.error = true
        }
        if (typeof this.data.v28 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v28.id === '55555' && this.data.v81.id !== '13') {
          this.errors.push('La V81 es 13 verificar V28 debe ser = 55555')
          this.error = true
        }
        // v29
        if (typeof this.data.v29 !== 'undefined' && parseInt(this.data.v29) < 0 || parseInt(this.data.v29) > 20) {
          if (typeof this.data.v29 !== 'undefined' && this.data.v29.id !== '300') {
            this.errors.push('El campo V29 debe ser igual a 300')
            this.error = true
          }

          if (typeof this.data.v29 !== 'undefined' && this.data.v29.id !== '55') {
            this.errors.push('El campo V29 debe ser igual a 55')
            this.error = true
          }
        }
        if (typeof this.data.v29 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v29.id == '55' && this.data.v81.id !== '13') {
          this.errors.push('La V81 es 13 verificar V29 debe ser = 55')
          this.error = true
        }
        // v30
        if (typeof this.data.v30 !== 'undefined' && parseInt(this.data.v30) < 0 || parseInt(this.data.v30) > 250) {
          if (typeof this.data.v30 !== 'undefined' && this.data.v30 !== '555') {
            this.errors.push('V30 debe ser igual a 555')
            this.error = true
          }

          if (typeof this.data.v30 !== 'undefined' && this.data.v30 !== '300') {
            this.errors.push('V30 debe ser igual a 300')
            this.error = true
          }
        }

        if (typeof this.data.v30 !== 'undefined' && this.data.v30 === '55') {
          if (typeof this.data.v81 !== 'undefined' && this.data.v81 !== '13') {
            this.errors.push('La V81 es 13 verificar V30 debe ser = 55')
            this.error = true
          }
        }
        // v31
        if (typeof this.data.v31 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v31.id === '55' && this.data.v81.id != '13') {
          this.errors.push('La V81 es 13 verificar v31 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v31 !== 'undefined' && parseInt(this.data.v31.id) > 1 && this.data.v31.id !== '300' && this.data.v31.id !== '55') {
          this.errors.push('V31 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        // v32
        if (typeof this.data.v32 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v32.id === '55' && this.data.v81.id != '13') {
          this.errors.push('La V81 es 13 verificar v32 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v32 !== 'undefined' && parseInt(this.data.v32.id) > 1 && this.data.v32.id !== '300' && this.data.v32.id !== '55') {
          this.errors.push('V32 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        // v33
        if (typeof this.data.v33 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v33.id === '55' && this.data.v81.id != '13') {
          this.errors.push('La V81 es 13 verificar v33 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v33 !== 'undefined' && parseInt(this.data.v33.id) > 1 && this.data.v33.id !== '300' && this.data.v33.id !== '55') {
          this.errors.push('V33 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        // v34
        if (typeof this.data.v34 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v34.id === '55' && this.data.v81.id != '13') {
          this.errors.push('La V81 es 13 verificar v34 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v34 !== 'undefined' && parseInt(this.data.v34.id) > 1 && this.data.v34.id !== '300' && this.data.v34.id !== '55') {
          this.errors.push('V34 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        if (typeof this.data.v34 !== 'undefined' && this.data.v34.id === '1') {
          if (typeof this.data.v59 !== 'undefined' && this.data.v59.id !== '1' || this.data.v59.id !== '300') {
            this.errors.push('La V59 es 1 o 300  revisar V34 es 1')
            this.error = true
          }
        }
        // v35
        if (typeof this.data.v35 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v35.id === '55' && this.data.v81.id != '13') {
          this.errors.push('La V81 es 13 verificar v35 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v21 !== 'undefined' && parseInt(this.data.v35.id) > 1 && this.data.v35.id !== '300' && this.data.v35.id !== '55') {
          this.errors.push('V35 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        if (typeof this.data.v35 !== 'undefined' && this.data.v35.id === '1') {
          if (typeof this.data.v59 !== 'undefined' && this.data.v59.id !== '1' || this.data.v59.id !== '300') {
            this.errors.push('La V59 es 1 o 300  revisar V35 es 1')
            this.error = true
          }
        }
        // v36
        if (typeof this.data.v36 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v36.id === '55' && this.data.v81.id != '13') {
          this.errors.push('La V81 es 13 verificar v36 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v36 !== 'undefined' && parseInt(this.data.v36.id) > 1 && this.data.v36.id !== '300' && this.data.v36.id !== '55') {
          this.errors.push('V36 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        if (typeof this.data.v36 !== 'undefined' && typeof this.data.v61 !== 'undefined' && this.data.v36.id === '1' && this.data.v61.id !== '1') {
          this.errors.push('La V61 es 1 revisar V36 debe ser 1')
          this.error = true
        }
        // v37
        if (typeof this.data.v37 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v37.id === '55' && this.data.v81.id != '13') {
          this.errors.push('La V81 es 13 verificar v37 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v21 !== 'undefined' && parsInt(this.data.v37.id) > 1 && this.data.v37.id !== '300' && this.data.v37.id !== '55') {
          this.errors.push('V37 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        if (typeof this.data.v37 !== 'undefined' && typeof this.data.v62 !== 'undefined' && this.data.v37.id === '1' && this.data.v62.id !== '1') {
          this.errors.push('La V61 es 1 revisar V37 debe ser 1')
          this.error = true
        }
        // v38
        if (typeof this.data.v38 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v38.id === '55' && this.data.v81.id != '13') {
          this.errors.push('La V81 es 13 verificar v38 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v21 !== 'undefined' && parseInt(this.data.v38.id) > 1 && this.data.v38.id !== '300' && this.data.v38.id !== '55') {
          this.errors.push("V38 debe ser igual a 1, 300 o 55.")
          this.error = true
        }
        if (typeof this.data.v38 !== 'undefined' && typeof this.data.v63 !== 'undefined' && this.data.v38.id === "1" && this.data.v63.id !== "1") {
          this.errors.push("La V61 es 1 revisar V38 debe ser 1")
          this.error = true
        }
        // v39
        if (typeof this.data.v39 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v39.id === "55" && this.data.v81.id != "13") {
          this.errors.push("La V81 es 13 verificar v39 debe ser = 55")
          this.error = true
        }
        if (typeof this.data.v39 !== 'undefined' && parseInt(this.data.v39.id) > 1 && this.data.v39.id !== '300' && this.data.v39.id !== '55') {
          this.errors.push('V39 debe ser igual a 1, 300 o 55.')
          this.error = true
        }
        if (typeof this.data.v39 !== 'undefined' && typeof this.data.v64 !== 'undefined' && this.data.v39.id === '1' && this.data.v64.id !== '1') {
          this.errors.push('La V61 es 1 revisar V39 debe ser 1')
          this.error = true
        }
        // v40
        if (typeof this.data.v40 !== 'undefined' && Date.parse(this.data.v40) == '1800-01-01' && Date:parse(this.data.v19) >= '2014-01-01') {
          this.errors.push('La V40 es 1800-01-01 revisar V19 debe ser < 2014-01-01')
          this.error = true
        }
        if (
          typeof this.data.v40 !== 'undefined' && typeof this.data.v19 !== 'undefined' && this.data.v40 >= this.patient.field_json.birthdate &&
          this.data.v19 > this.data.v40) {
          this.errors.push('La V40 es >= V10 revisar V19 debe ser <= V40')
          this.error = true
        }
        if (typeof this.data.v40 !== 'undefined' && Date.parse(this.data.v40) === '1846-01-01') {
          if (typeof this.data.v81 !== 'undefined' && this.data.v81 !== '13') {
            this.errors.push('La V81 es 13 verificar V40 debe ser = 1846-01-01')
            this.error = true
          }
        }
        if (typeof this.data.v40 !== 'undefined' && parseInt(this.data.v40) > '1846-01-01') {
          if (typeof this.data.v40 !== 'undefined' && parseInt(this.data.v42) > 10) {
            this.errors.push('La V42es < = 10 revisar la V40 debe ser > 1846-01-01')
            this.error = true
          }
        }
        if (
          typeof this.data.v40 !== 'undefined' && typeof this.data.v91 !== 'undefined' && this.data.v40.id < this.patient.field_json.birthdate &&
          this.data.v40.id > this.data.v91) {
          this.errors.push('La V40 debe ser >= V10')
          this.error = true
          if (
            typeof this.data.v40 !== 'undefined' && Date.parse(this.data.v40.id) !== '1799-01-01' &&
            this.data.v40.id !== '1800-01-01' &&
            this.data.v40.id !== '1811-01-01' &&
            this.data.v40.id !== '1846-01-01') {
            this.errors.push('La V40 debe ser <= V91 o = 1799-01-01 o 1800-01-01 o 1811-01-01 o 1846-01-01')
            this.error = true
          }
        }
        // v41

        if (typeof this.data.v40 !== 'undefined' && parseInt(this.data.v41) <= 7) {
          if (this.patient.field_json.birthdate < '1846-01-01') {
            this.errors.push('La V41 es <= 7 revisar V40 debe ser >= 1846-01-01')
            this.error = true
          }
        }

        if (typeof this.data.v41 !== 'undefined' && this.data.v41 == '9') {
          if (typeof this.data.v42 !== 'undefined' && this.data.v42.id != '300') {
            this.errors.push('La V42 es 300  y es < 1846-01-01  revisar V41 debe ser 9')
            this.error = true
          }
        }

        if (typeof this.data.v41 !== 'undefined' && this.data.v41 == '9') {
          if (this.patient.field_json.birthdate >= '1846-01-01') {
            this.errors.push('V40 debe ser < 1846-01-01')
            this.error = true
          }
        }
        if (typeof this.data.v41 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v41 === '55' && this.data.v81 !== '13') {
          this.errors.push('La V81 es 13 verificar V41 debe ser = 55')
          this.error = true
        }
        if (typeof this.data.v41 !== 'undefined' && parseInt(this.data.v41) < 1 || parseInt(this.data.v41) > 10 || this.data.v41 !== '55') {
          this.errors.push('La V41 debe ser > =1  y < 10  o 55')
          this.error = true
        }
        // 42
        if (
          (typeof this.data.v42 !== 'undefined' && parseInt(this.data.v42.id) < 0 && parseInt(this.data.v42.id) > 10) || this.data.v42.id !== '300' || this.data.v42.id !== '55') {
          this.errors.push('Error en el valor de V42')
          this.error = true
        }
        if (typeof this.data.v42 !== 'undefined' && this.data.v42.id === '55') {
          if (typeof this.data.v81 !== 'undefined' && this.data.v81.id !== '13') {
            this.errors.push('La V81 es 13 verificar V42 debe ser = 55')
            this.error = true
          }
        }

        if (typeof this.data.v42 !== 'undefined' && parseInt(this.data.v42.id) <= 10) {
          if (typeof this.data.v40 !== 'undefined' && Date.parse(this.data.v40.id) <= '1846-01-01' || this.data.v41 !== '7') {
            this.errors.push('La V42 es <= 10 revisar V40 debe ser > 1846-01-01 y V41 debe ser <= 7')
            this.error = true
          }
        }
        if (typeof this.data.v42 !== 'undefined' && this.data.v42.id <= 300) {
          if (typeof this.data.v41 !== 'undefined' && this.data.v41.id !== '9') {
            this.errors.push('La V42 es igual o menor a 300, revisar la V41 debe ser igual a 9')
            this.error = true
          }
        }

        if (typeof this.data.v42 !== 'undefined' && this.data.v42.id == '300') {
          if (this.patient.field_json.birthdate >= '1846-01-01') {
            this.errors.push('La V42 es igual a 300, revisar la V40 debe ser menor a 1846-01-01')
            this.error = true
          }
        }
        // 43
        if (
          typeof this.data.v43 !== 'undefined' && typeof this.data.v19 !== 'undefined' && this.data.v43 >= this.patient.field_json.birthdate &&
          parseInt(this.data.v19) > parseInt(this.data.v43)) {
          this.errors.push('La V43 es >= V10 revisar la V19 debe ser <= 43')
          this.error = true
        }

        if (typeof this.data.v43 !== 'undefined' && Date.parse(this.data.v43) == '1800-01-01' && Date.parse(this.data.v19) >= '2014-01-01') {
          this.errors.push('La V19 debe ser < 2014-01-01')
          this.error = true
        }
        if (
          typeof this.data.v43 !== 'undefined' && typeof this.data.v91 !== 'undefined' && this.data.v43 < this.patient.field_json.birthdate && this.data.v43 > this.data.v91) {
          this.errors.push('La V43 debe ser >= V10')
          this.error = true
          if (
            this.data.v43 !== '1799-01-01' &&
            this.data.v43 !== '1800-01-01' &&
            this.data.v43 !== '1811-01-01' &&
            this.data.v43 !== '1846-01-01'
          ) {
            this.errors.push('La V43 debe ser <= V91 o = 1799-01-01 o 1800-01-01 o 1811-01-01 o 1846-01-01 ')
            this.error = true
          }
        }
        // 44
        if (typeof this.data.v44 !== 'undefined' && parseInt(this.data.v44.id) < 0 || parseInt(this.data.v44.id) > 3 || this.data.v44.id !== '300' || this.data.v44.id !== '55') {
          this.errors.push('El valor de v44 debe ser mayor o igual a 0 y menor o igual a 3 o ser igual a 300 o igual a 55')
          this.error = true
        }
        if (typeof this.data.v44 !== 'undefined' && this.data.v44.id == '300') {
          if (
            this.data.v43 != '1799-01-01' &&
            this.data.v43 != '1800-01-01' &&
            this.data.v43 != '1811-01-01' &&
            this.data.v43 != '1846-01-01') {
            this.errors.push('Cuando V44 sea = 300 Entonces V43Fecha del primer HAQ Health Assessment Questionnaire realizado DEBE SER = 1799-01-01, 1800-01-01, 1811-01-01 o 1846-01-01')
            this.error = true
          }
        }
        if (typeof this.data.v44 !== 'undefined' && typeof this.data.v81 !== 'undefined' && this.data.v44.id === '55' && this.data.v81.id !== '13') {
          this.errors.push('La V81 es 13 revisar la V44 debe ser 55')
          this.error = true
        }
      }
    }
  }
};
</script>
