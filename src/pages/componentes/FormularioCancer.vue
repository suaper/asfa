<template>
  <q-form @submit="saveRegister">
    <div class="row flex cien space-betwen" >
        <div class="wrp_forms w_50" v-if="firstStep">
          <h4 class="titulo_fondo w_100">INFORMACION RELACIONADA A DIAGNÓSTICO, ESTADIFICACIÓN Y OBJETIVO DEL TRATAMIENTO INICIAL</h4>

          <div class="row dos_items">
              <div class="item">
                  <label>Código CIE - 10 de la neoplasia (cáncer o tumor) maligna reportada (Primario) </label>
                  <q-input rounded standout v-model="data.novedadUsuarioReporteAnterior" lazy-rules type="number"></q-input>
              </div>
              <div class="item">
                  <label>Fecha de diagnóstico del cáncer reportado:  </label>
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
                  <label>Fecha de la nota de remisión o interconsulta del médico o institución general hacia la institución o médico que hizo el diagnóstico: </label>
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
                  <label>Fecha de ingreso a la institución que realizó el diagnóstico luego de la remisión o interconsulta: </label>
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
                  <label>Tipo de estudio con el que se realizó el diagnóstico de cáncer:</label>
                  <q-select rounded standout v-model="data.diagnosticoCancer" :options="diagnosticoCancer" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>Motivo por el cual el usuario no tuvo diagnóstico por histopatología (aplica para registros con respuesta igual a 7 en la variable anterior):</label>
                  <q-select rounded standout v-model="data.noDiagnosticoCancer" :options="noDiagnosticoCancer" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>Fecha de recolección de muestra para estudio histopatológico de diagnóstico:</label>
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
                  <label>Fecha de primero o único informe histopatológico válido de diagnóstico: </label>
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
                  <label>Código válido de habilitación de la IPS donde se realiza la confirmación diagnóstica: </label>
                  <q-select rounded standout v-model="data.codigoIpsConfirma" :options="codigoIpsConfirma" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>Fecha de primera consulta con médico tratante de la enfermedad maligna </label>
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
                  <label>Histología del tumor en muestra de biopsia o quirúrgica: </label>
                  <q-select rounded standout v-model="data.histologiaTumorBiopsia" :options="histologiaTumorBiopsia" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>Grado de diferenciación del tumor sólido maligno según la biopsia o informe de primera cirugía:  </label>
                  <q-select rounded standout v-model="data.gradoTumorBiopsia" :options="gradoTumorBiopsia" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                <label>Si es tumor sólido, cuál fue la primera estadificación basada en TNM, FIGO, u otras compatibles con esta numeración según tumor:</label>
                <q-select rounded standout v-model="data.tumorSolidoCompatibles" :options="tumorSolidoCompatibles" label="Seleccionar" />
              </div>
              <div class="item">
                <label class="sub_text">CÁNCER DE MAMA Y CÁNCER GÁSTRICO</label>
                <q-select rounded standout v-model="data.cancerMamaGastrico" :options="cancerMamaGastrico" label="Seleccionar" />
              </div>
              <div class="item">
                <label class="sub_text">CANCER DE PRÓSTATA</label>
                <q-select rounded standout v-model="data.cancerProstata" :options="cancerProstata" label="Seleccionar" />
              </div>
              <div class="item">
                <label class="sub_text">CANCER DE PULMÓN</label>
                <q-select rounded standout v-model="data.cancerPulmon" :options="cancerPulmon" label="Seleccionar" />
              </div>
              <div class="item">
                <label class="sub_text">MELANOMA</label>
                <q-select rounded standout v-model="data.melonoma" :options="melonoma" label="Seleccionar" />
              </div>
              <div class="item">
                <label class="sub_text">CÁNCER DE COLON Y RECTO</label>
                <q-select rounded standout v-model="data.cancerColonRecto" :options="cancerColonRecto" label="Seleccionar" />
              </div>
              <div class="item">
                <label class="sub_text">CÁNCER ANAL (Agrupador Colon y recto)</label>
                <q-select rounded standout v-model="data.cancerAnal" :options="cancerAnal" label="Seleccionar" />
              </div>
              <div class="item">
                <label class="sub_text">CÁNCER DE CÉRVIX (FIGO)</label>
                <q-select rounded standout v-model="data.cancerCervix" :options="cancerCervix" label="Seleccionar" />
              </div>
              <div class="item">
                <label class="sub_text">OTRAS OPCIONES</label>
                <q-select rounded standout v-model="data.cancerOtrasOpciones" :options="cancerOtrasOpciones" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>Fecha en que se realizó esta estadificación  </label>
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
                  <label>Para cáncer de mama, ¿se le realizó a este usuario la prueba HER2 (llamado también receptor 2 del factor de crecimiento epidérmico humano, también llamado erb-B2) antes del inicio del tratamiento?: </label>
                  <q-select rounded standout v-model="data.cancerCrecimientoAntes" :options="cancerCrecimientoAntes" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>Para cáncer de mama, fecha de realización de la única o última prueba HER2:</label>
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
                  <label>Para cáncer de mama, resultado de la única o última prueba HER2:  </label>
                  <q-select rounded standout v-model="data.cancerMamaResultadoHer2" :options="cancerMamaResultadoHer2" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>Para cáncer colorrectal, estadificación de Dukes </label>
                  <q-select rounded standout v-model="data.cancerColorrectalDukes" :options="cancerColorrectalDukes" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>Fecha en que se realizó la estadificación de Dukes: </label>
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
                  <label>Estadificación clínica en linfoma no Hodgkin y linfoma Hodgkin adulto y pediátrico (Ann Arbor -Lugano) </label>
                  <q-select rounded standout v-model="data.clinicaLinfomaHodgkin" :options="clinicaLinfomaHodgkin" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>Para cáncer de próstata, valor de clasificación de la escala Gleason en el momento del diagnóstico:  </label>
                  <q-select rounded standout v-model="data.cancerProstataGleason" :options="cancerProstataGleason" label="Seleccionar" />
              </div>
              <div class="item">
                  <label>Clasificación del riesgo leucemias o linfomas (para toda la población), y sólidos pediátricos: </label>
                  <q-select rounded standout v-model="data.riesgosLeucemiaPediatra" :options="riesgosLeucemiaPediatra" label="Seleccionar" />
              </div>
          </div>

          <div class="row dos_items">
            <div class="item">
              <label class="sub_text">Clasificación de riesgo en linfoma no Hodgkin</label>
              <q-select rounded standout v-model="data.clasificacionRiesgoNoHodgkin" :options="clasificacionRiesgoNoHodgkin" label="Seleccionar" />
            </div>
            <div class="item">
              <label class="sub_text">Clasificación de riesgo en linfoma de Hodgkin</label>
                <q-select rounded standout v-model="data.clasificacionRiesgoHodgkin" :options="clasificacionRiesgoHodgkin" label="Seleccionar" />
            </div>
          </div>

          <div class="row dos_items">
            <div class="item">
              <label class="sub_text">Clasificación del riesgo en adultos (LLA y LMA)</label>
              <q-select rounded standout v-model="data.riesgosAdultoLla" :options="riesgosAdultoLla" label="Seleccionar" />
            </div>
            <div class="item">
              <label class="sub_text">Clasificación del riesgo en Pediatría (LLA y LMA)</label>
              <q-select rounded standout v-model="data.riesgosPediatraLla" :options="riesgosPediatraLla" label="Seleccionar" />
            </div>
          </div>

          <div class="row dos_items">
              <div class="item">
                  <label>Fecha de clasificación de riesgo: </label>
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
                  <label>Objetivo (o intención) del tratamiento médico inicial (al diagnóstico)  </label>
                  <q-select rounded standout v-model="data.objetivoTratamientoInicial" :options="objetivoTratamientoInicial" label="Seleccionar" />
              </div>
          </div>

          <div class="row un_item">
              <div class="item">
                <label>Intervención médica durante el periodo de reporte </label>
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
        <div class="wrp_forms w_50" v-if="secondStep"></div>
        <div class="wrp_forms w_50" v-if="thirdStep"></div>
        <div class="wrp_forms w_50" v-if="fourthStep"></div>

        <div class="wrp_forms w_50" v-if="fiveStep"></div>

        <div class="wrp_forms w_50" v-if="sixStep"></div>
        <div class="wrp_forms w_50" v-if="sevenStep"></div>

        <div class="wrp_forms w_50" v-if="eightStep"></div>

        <div class="wrp_forms w_50" v-if="nineStep"></div>
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
        pregnantWoman: ''
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
        if (typeof this.patient.field_json.sex !== 'undefined') {
          if (this.patient.field_json.sex.id === 'H' && this.data.fum === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && this.data.dateScreeningFirst === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && this.data.dateReportedPregnancy === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && this.data.dateScreeningSecond === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && this.data.dateScreeningThird === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && this.data.dateScreeningBirth === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && typeof this.data.womanVihReported !== 'undefined' && this.data.womanVihReported.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && typeof this.data.ageVihReported !== 'undefined' && this.data.ageVihReported.id === '99') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && typeof this.data.receivedTreatmentVih !== 'undefined' && this.data.receivedTreatmentVih.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && typeof this.data.ageInitTar !== 'undefined' && this.data.ageInitTar.id === '99') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && typeof this.data.tarIntraBirth !== 'undefined' && this.data.tarIntraBirth.id === '99') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && typeof this.data.resultVihReported !== 'undefined' && this.data.resultVihReported.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && this.data.dateCulminationReported === '1845-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && typeof this.data.pharmacologicalSuppression !== 'undefined' && this.data.pharmacologicalSuppression.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && typeof this.data.identificationTypeNewbor !== 'undefined' && this.data.identificationTypeNewbor.id === 'NA') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && this.data.identificationNewborn === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5327', 'error')
          }

          if (this.patient.field_json.sex.id === 'H' && typeof this.data.pregnantWoman !== 'undefined' && this.data.pregnantWoman.id !== '9') {
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

          if (Date.parse(this.data.fechaPruebaPresuntiva) > Date.parse(this.patient.field_json.birthdate) && typeof this.data.comoLlegoLaPrueba !== 'undefined' && parseInt(this.data.comoLlegoLaPrueba.id) >= 13) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4163', 'error')
          }

          if (Date.parse(this.data.fechaPruebaPresuntiva) > Date.parse('1846-01-01') && typeof this.data.comoLlegoLaPrueba !== 'undefined' && parseInt(this.data.comoLlegoLaPrueba.id) >= 13) {
            return _this.$swal('Advertencia', 'Error en la validación No. B5330', 'error')
          }

          if (typeof this.data.comoLlegoLaPrueba !== 'undefined' && parseInt(this.data.comoLlegoLaPrueba.id) <= 13 && this.data.fechaPruebaPresuntiva === '1799-01-01') {
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

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '4' && parseInt(this.data.conteoLinfocitosCd4) <= 3000) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4167', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '2') {
            if ((parseInt(this.data.conteoLinfocitosCd4) < 200 || parseInt(this.data.conteoLinfocitosCd4) >= 500)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B4167', 'error')
            }
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '1') {
            if ((parseInt(this.data.conteoLinfocitosCd4) < 500 || parseInt(this.data.conteoLinfocitosCd4) > 3000)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B5331', 'error')
            }
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && parseInt(this.data.conteoLinfocitosCd4) >= 200) {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.verificacionConteoLinfocitos !== 'undefined' && this.verificacionConteoLinfocitos.id === '1' && (parseInt(this.data.conteoLinfocitosCd4) === 9999 || parseInt(this.data.conteoLinfocitosCd4) === 9998)) {
            return _this.$swal('Advertencia', 'Error en la validación No. B3224', 'error')
          }

          if (typeof this.data.verificacionConteoLinfocitos !== 'undefined' && parseInt(this.verificacionConteoLinfocitos.id) > 1 && parseInt(this.data.conteoLinfocitosCd4) < 5555) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4402', 'error')
          }

          if (typeof this.data.verificacionCargaViral !== 'undefined' && this.data.verificacionCargaViral.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2968', 'error')
          }

          if (typeof this.data.verificacionCargaViral !== 'undefined' && this.data.verificacionCargaViral.id !== '9') {
            if (typeof this.data.verificacionCargaViral !== 'undefined' && this.data.verificacionCargaViral.id === '1' && parseInt(this.data.cargaViralEnresultado) >= 1000000) {
              return _this.$swal('Advertencia', 'Error en la validación No. B4169', 'error')
            }

            if (typeof this.data.verificacionCargaViral !== 'undefined' && parseInt(this.data.verificacionCargaViral.id) > 1 && parseInt(this.data.cargaViralEnresultado) < 5555555) {
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
            if (typeof this.data.medicamento1InicioTar !== 'undefined' && this.data.medicamento1InicioTar.id !== '9') {
              return _this.$swal('Advertencia', 'Error en la validación No. B2978', 'error')
            }

            if (typeof this.data.linfocitosCD4InicioTar !== 'undefined' && this.data.linfocitosCD4InicioTar.id !== '5') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.linfocitosCD4InicioTar !== 'undefined' && this.data.valorLinfocitosCD4InicioTar.id !== '9996') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.linfocitosCD4InicioTar !== 'undefined' && this.data.cargaMomentoInicioTar.id !== '5') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (this.data.cargaViralInicioTar !== '99999996') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.motivoInicioTar !== 'undefined' && this.data.motivoInicioTar.id !== '16') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.hepatitisBInicioTar !== 'undefined' && this.data.hepatitisBInicioTar.id !== '6') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.hepatitisCInicioTar !== 'undefined' && this.data.hepatitisCInicioTar.id !== '6') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }

            if (typeof this.data.tuberculosisInicioTar !== 'undefined' && this.data.tuberculosisInicioTar.id !== '5') {
              return _this.$swal('Advertencia', 'Error en la validación No. B4170', 'error')
            }
          }

          if (typeof this.data.linfocitosCD4InicioTar !== 'undefined' && this.data.linfocitosCD4InicioTar.id === '1' && parseInt(this.data.valorLinfocitosCD4InicioTar) > 3000) {
            return _this.$swal('Advertencia', 'Error en la validación No. B4172', 'error')
          }

          if (typeof this.data.linfocitosCD4InicioTar !== 'undefined' && parseInt(this.data.linfocitosCD4InicioTar.id) < 5 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
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

          if (typeof this.data.motivoInicioTar !== 'undefined' && this.data.motivoInicioTar.id === '16' && this.data.inicioTerapiaAntirretroviral !== '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3255', 'error')
          }

          if (typeof this.data.motivoInicioTar !== 'undefined' && parseInt(this.data.motivoInicioTar.id) < 16 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5341', 'error')
          }

          if (typeof this.data.motivoInicioTar !== 'undefined' && this.data.motivoInicioTar.id === '17' && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5342', 'error')
          }

          if (typeof this.data.hepatitisBInicioTar !== 'undefined' && this.data.hepatitisBInicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2996', 'error')
          }

          if (typeof this.data.hepatitisBInicioTar !== 'undefined' && this.data.hepatitisBInicioTar.id === '6' && this.data.inicioTerapiaAntirretroviral !== '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3256', 'error')
          }

          if (typeof this.data.hepatitisBInicioTar !== 'undefined' && parseInt(this.data.hepatitisBInicioTar.id) < 6 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5343', 'error')
          }

          if (typeof this.data.hepatitisBInicioTar !== 'undefined' && this.data.hepatitisBInicioTar.id === '7' && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5344', 'error')
          }

          if (typeof this.data.hepatitisBInicioTar !== 'undefined' && this.data.hepatitisCInicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B2998', 'error')
          }

          if (typeof this.data.hepatitisBInicioTar !== 'undefined' && this.data.hepatitisCInicioTar.id === '6' && this.data.inicioTerapiaAntirretroviral !== '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3257', 'error')
          }

          if (typeof this.data.hepatitisBInicioTar !== 'undefined' && parseInt(this.data.hepatitisCInicioTar.id) < 6 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5345', 'error')
          }

          if (typeof this.data.hepatitisBInicioTar !== 'undefined' && this.data.hepatitisCInicioTar.id === '7' && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5346', 'error')
          }

          if (typeof this.data.tuberculosisInicioTar !== 'undefined' && this.data.tuberculosisInicioTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3000', 'error')
          }

          if (typeof this.data.tuberculosisInicioTar !== 'undefined' && this.data.tuberculosisInicioTar.id === '5' && this.data.inicioTerapiaAntirretroviral !== '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3258', 'error')
          }

          if (typeof this.data.tuberculosisInicioTar !== 'undefined' && parseInt(this.data.tuberculosisInicioTar.id) < 5 && this.data.inicioTerapiaAntirretroviral === '1799-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5347', 'error')
          }

          if (typeof this.data.cambiosEsquemaInicialTar !== 'undefined' && this.data.cambiosEsquemaInicialTar.id === '9') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3006', 'error')
          }

          if (typeof this.data.cambiosEsquemaInicialTar !== 'undefined' && this.data.cambiosEsquemaInicialTar.id === '1' && this.data.medicamentoEsquemaInicialTar === '1800-01-01') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3227', 'error')
          }

          if (typeof this.data.cambiosEsquemaInicialTar !== 'undefined' && this.data.cambiosEsquemaInicialTar.id === '1' && (parseInt(this.data.cambioMedicamentoTar) > 7 || this.data.cambioMedicamentoTar !== '55')) {
            return _this.$swal('Advertencia', 'Error en la validación No. B3227', 'error')
          }

          if (this.data.medicamentoEsquemaInicialTar !== '1777-01-01' && this.data.medicamentoEsquemaInicialTar !== '1788-01-01' && this.data.medicamentoEsquemaInicialTar !== '1800-01-01' && this.data.medicamentoEsquemaInicialTar !== '1845-01-01' && this.data.medicamentoEsquemaInicialTar !== '1846-01-01') {
            if (Date.parse(this.data.medicamentoEsquemaInicialTar) < Date.parse(this.data.inicioTerapiaAntirretroviral)) {
              return _this.$swal('Advertencia', 'Error en la validación No. B3008', 'error')
            }
          }
        }

        if (this.fiveStep === true) {
          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.infeccionBacteriana !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.candidiasisETBP !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.tuberculosisPulmonar !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.cancerCervix !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.coccidioidomicosis !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.citomegalovirus1Mes !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.retinitisCitomegalovirus !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.herpesMayor1Mes !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.diarreaIsospora1Mes !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.histoplasmosisDiseminada !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.linfomaBurkitt !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.neumoniaPneumocystis !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.neumoniaRecurrente !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.septicemiaSalmonella !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.infeccionKansasiiOtras !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.criptococosisExtrapulmonar !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.sarcamoKaposi !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.sindromeDesgasteVih !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.leucoencefalopatiaMultifocalVih !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.toxoplasmosisCerebral1Mes !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.demenciaAsociadaVih !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }

          if (typeof this.data.estadoClinicoAlMomento !== 'undefined' && this.data.estadoClinicoAlMomento.id === '3' && this.data.neumoniaIntersticialLinfoidea !== '1') {
            return _this.$swal('Advertencia', 'Error en la validación No. B5332', 'error')
          }
        }

        if (this.sixStep === true) {
          if (typeof this.data.estadoClinicoActual !== 'undefined' && this.data.estadoClinicoActual.id !== '3' && this.data.estadoClinicoAlMomento.id === '3') {
            return _this.$swal('Advertencia', 'Error en la validación No. B3260', 'error')
          }

          if (typeof this.data.estadoClinicoActual !== 'undefined' && (parseInt(this.data.estadoClinicoActual.id) <= 1 || parseInt(this.data.estadoClinicoActual.id) >= 4) && this.data.estadoClinicoAlMomento.id === '2') {
            return _this.$swal('Advertencia', 'Error en la validación No. B4168', 'error')
          }

          if (typeof this.data.estadoClinicoActual !== 'undefined' && parseInt(this.data.valorLinfocitosCD4InicioTar) < 500 && (parseInt(this.data.estadoClinicoActual.id) <= 1 || parseInt(this.data.estadoClinicoActual.id) >= 4)) {
            return _this.$swal('Advertencia', 'Error en la validación No. B5336', 'error')
          }

          if (typeof this.data.estadoClinicoActual !== 'undefined' && parseInt(this.data.valorLinfocitosCD4InicioTar) < 200 && this.data.estadoClinicoActual.id !== '3') {
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
