<template>
    <q-form @submit="saveRegister">
      <div class="row flex cien space-betwen" >
          <div class="wrp_forms w_50" v-if="firstStep">
            <h4 class="titulo_fondo w_100">INFORMACION RELACIONADA A DIAGNÓSTICO, ESTADIFICACIÓN Y OBJETIVO DEL TRATAMIENTO INICIAL</h4>

              <div class="row dos_items">
                  <div class="item-numero">
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
                      <label class="sub_text">CÁNCER DE MAMA Y CÁNCER GÁSTRICO</label>
                      <q-select rounded standout v-model="data.cancerMamaGastrico" :options="cancerMamaGastrico" label="Seleccionar" />
                      <label class="sub_text">CANCER DE PRÓSTATA</label>
                      <q-select rounded standout v-model="data.cancerProstata" :options="cancerProstata" label="Seleccionar" />
                      <label class="sub_text">CANCER DE PULMÓN</label>
                      <q-select rounded standout v-model="data.cancerPulmon" :options="cancerPulmon" label="Seleccionar" />
                      <label class="sub_text">MELANOMA</label>
                      <q-select rounded standout v-model="data.melonoma" :options="melonoma" label="Seleccionar" />
                      <label class="sub_text">CÁNCER DE COLON Y RECTO</label>
                      <q-select rounded standout v-model="data.cancerColonRecto" :options="cancerColonRecto" label="Seleccionar" />
                      <label class="sub_text">CÁNCER ANAL (Agrupador Colon y recto)</label>
                      <q-select rounded standout v-model="data.cancerAnal" :options="cancerAnal" label="Seleccionar" />
                      <label class="sub_text">CÁNCER DE CÉRVIX (FIGO)</label>
                      <q-select rounded standout v-model="data.cancerCervix" :options="cancerCervix" label="Seleccionar" />
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
                      <label class="sub_text">Clasificación de riesgo en linfoma no Hodgkin</label>
                      <q-select rounded standout v-model="data.clasificacionRiesgoNoHodgkin" :options="clasificacionRiesgoNoHodgkin" label="Seleccionar" />
                      <label class="sub_text">Clasificación de riesgo en linfoma de Hodgkin</label>
                      <q-select rounded standout v-model="data.clasificacionRiesgoHodgkin" :options="clasificacionRiesgoHodgkin" label="Seleccionar" />
                      <label class="sub_text">Clasificación del riesgo en adultos (LLA y LMA)</label>
                      <q-select rounded standout v-model="data.riesgosAdultoLla" :options="riesgosAdultoLla" label="Seleccionar" />
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

              <div class="row uno_items">
                  <div class="item">
                      <label>Intervención médica durante el periodo de reporte, </label>
                        <q-input filled v-model="data.clasificacionRiesgoCan">
                          <template v-slot:append>
                      <q-select rounded standout v-model="data.intervencionPeriodoReporte" :options="intervencionPeriodoReporte" label="Seleccionar">
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
      diagnosticoCancer: [
        { id: '5', label:"Inmunohistoquímica "},
        { id: '6', label:"Citometría de flujo "},
        { id: '7', label:"Clínica exclusivamente (incluye estudios imagenológicos y/o de laboratorio en aquellos casos clínicamente justificados en donde fue imposible tomar muestra de estudio histopatológico) "},
        { id: '8', label:"Otro"},
        { id: '9', label:"Genética"},
        { id: '10', label:" Patología básica"},
        { id: '99', label:" Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos. "},
        { id: '55', label:" Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ],
      noDiagnosticoCancer: [
        {id: '1', label:"Clínica, usuario con coagulopatía"},
        {id: '2', label:"Clínica, debido a localización del tumor"},
        {id: '3', label:"Clínica, debido al estado funcional del usuario (deterioro)"},
        {id: '4', label:"Negativa del usuario o su acudiente para realizar el estudio histopatológico, con documentación de soporte"},
        {id: '5', label:"Administrativa"},
        {id: '6', label:"Clínica por reporte de imágenes o laboratorios."},
        {id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        {id: '98', label:"Tiene confirmación por histopatología."},
        {id: '99', label:"Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos."}  
      ],
      codigoIpsConfirma: [
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte. "},
        { id: '96', label:"Diagnóstico fuera del país."},
        { id: '99', label:"Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos."}
      ],
      histologiaTumorBiopsia: [
        { id: '1', label:"Adenocarcinoma, con o sin otra especificación"},
        { id: '2', label:"Carcinoma escamocelular (epidermoide), con o sin otra especificación "},
        { id: '3', label:"Carcinoma de células basales (basocelular)"},
        { id: '4', label:"Carcinoma, con o sin otra especificación diferentes a las anteriores "},
        { id: '5', label:"Oligodendroglioma, con o sin otra especificación"},
        { id: '6', label:"Astrocitoma, con o sin otra especificación "},
        { id: '7', label:"Ependimoma, con o sin otra especificación"},
        { id: '8', label:"Neuroblastoma, con o sin otra especificación "},
        { id: '9', label:"Meduloblastoma, con o sin otra especificación "},
        { id: '10', label:"Hepatoblastoma, con o sin otra especificación" },
        { id: '11', label:"Rabdomiosarcoma, con o sin otra especificación" },
        { id: '12', label:"Leiomiosarcoma, con o sin otra especificación " },
        { id: '13', label:"Osteosarcoma, con o sin otra especificación " },
        { id: '14', label:"Fibrosarcoma, con o sin otra especificación " },
        { id: '15', label:"Angiosarcoma, con o sin otra especificación " },
        { id: '16', label:"Condrosarcoma, con o sin otra especificación " },
        { id: '17', label:"Otros sarcomas, con o sin otra especificación" },
        { id: '18', label:"Pancreatoblastoma, con o sin otra especificación" },
        { id: '19', label:"Blastoma pleuropulmonar, con o sin otra especificación " },
        { id: '20', label:"Otros tipos histológicos no mencionados" },
        { id: '23', label:"Melanoma" },
        { id: '24', label:"Carcinoma papilar de tiroides" },
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente  territorial durante el periodo de reporte. "},
        { id: '98', label:"No se realizó estudio histopatológico (en la variable 21 registró la opción 7)." },
        { id: '99', label:"Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos." } 
      ],
      gradoTumorBiopsia: [
        { id: '1', label:"Bien diferenciado (grado 1)"},
        { id: '2', label:"Moderadamente diferenciado (grado 2)"},
        { id: '3', label:"Mal diferenciado (grado 3)"},
        { id: '4', label:"Anaplásico o indiferenciado (grado 4)"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte. "},
        { id: '94', label:"Es un cáncer sólido cuyo reporte de patología no incluye la descripción de la diferenciación celular. (ejemplo: cáncer de tiroides, carcinoma basocelular, tumores in situ, melanoma, próstata, entre otros). "},
        { id: '95', label:"No es sólido (cáncer hematolinfático)"},
        { id: '98', label:"No se realizó estudio histopatológico (en la variable 21 registró la opción 7)."},
        { id: '99', label:"No hay información en la historia clínica"}
      ],
      tumorSolidoCompatibles: [
        { id: 'CÁNCER DE MAMA Y CÁNCER GÁSTRICO', label:"CÁNCER DE MAMA Y CÁNCER GÁSTRICO"},
        { id: 'CANCER DE PRÓSTATA', label:"CANCER DE PRÓSTATA"},
        { id: 'CANCER DE PULMON', label:"CANCER DE PULMON"},
        { id: 'MELANOMA', label:"MELANOMA"},
        { id: 'CÁNCER DE COLON Y RECTO', label:"CÁNCER DE COLON Y RECTO"},
        { id: 'CÁNCER ANAL (Agrupador Colon y recto)', label:"CÁNCER ANAL (Agrupador Colon y recto)"},
        { id: 'CÁNCER DE CÉRVIX (FIGO)', label:"CÁNCER DE CÉRVIX (FIGO)"},
        { id: 'OTRAS OPCIONES', label:"OTRAS OPCIONES"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '98', label:"No Aplica (Es cáncer de piel basocelular, es cáncer hematológico o es cáncer en SNC, excepto neuroblastoma)."},
        { id: '99', label:"Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos."}
      ],
      cancerMamaGastrico: [
        { id: '0', label:"estadio clínico (ec) 0 (tumor in situ) "},
        { id: '2', label:"ec IA o 1A"},
        { id: '5', label:"ec IB o 1b "},
        { id: '11', label:"ec IIA o 2a "},
        { id: '15', label:" ec IIB"},
        { id: '17', label:" ec IIIA o 3a "},
        { id: '18', label:" ec IIIB o 3b "},
        { id: '19', label:" ec IIIC o 3c "},
        { id: '20', label:" ec IV o 4"}
      ],
      cancerProstata: [
        { id: '0', label:"estadio clínico (ec) o (tumor in situ) "},
        { id: '1', label:"ec I o 1"},
        { id: '11', label:"ec IIA o 2a "},
        { id: '14', label:"ec IIB"},
        { id: '16', label:"ec III o 3"},
        { id: '20', label:"ec IV o 4"},
        { id: '15', label:"ec IIC o 2c "},
        { id: '17', label:"ec IIIA o 3a "},
        { id: '18', label:"ec IIIB o 3b "},
        { id: '19', label:"ec IIIC o 3c "},
        { id: '21', label:"ec IVA o 4a "},
        { id: '22', label:"ec IVB o 4b"}
      ],
      cancerPulmon: [
        { id: '0', label:"estadio clínico (ec) o (tumor in situ) "},
        { id: '2', label:"ec IA o 1A"},
        { id: '5', label:"ec IB o 1b "},
        { id: '11', label:"ec IIA o 2a "},
        { id: '14', label:"ec IIB"},
        { id: '17', label:"ec IIIA o 3a "},
        { id: '18', label:"ec IIIB o 3b "},
        { id: '20', label:"ec IV o 4"},
        { id: '3', label:"ec IA1"},
        { id: '4', label:"ec IA2"},
        { id: '19', label:"ec IIIC o 3c"},
        { id: '21', label:"ec IVA o 4a "},
        { id: '22', label:"ec IVB o 4b "},
        { id: '26', label:"Estadio IAB"}
      ],
      melonoma: [
        { id: '0', label:"estadio clínico (ec) o (tumor in situ) "},
        { id: '2', label:"ec IA o 1A"},
        { id: '5', label:"ec IB o 1b "},
        { id: '11', label:"ec IIA o 2a "},
        { id: '14', label:"ec IIB"},
        { id: '15', label:"ec IIC o 2c "},
        { id: '16', label:"ec III o 3 "},
        { id: '17', label:"ec IIIA o 3a "},
        { id: '18', label:"ec IIIB o 3b "},
        { id: '19', label:"ec IIIC o 3c "},
        { id: '20', label:"ec IV o 4 "},
        { id: '29', label:"ec IIID o 3d"}
      ],
      cancerColonRecto: [
        { id: '0', label:"estadio clínico (ec) o (tumor in situ) "},
        { id: '1', label:"ec I o 1"},
        { id: '11', label:"ec IIA o 2a "},
        { id: '14', label:"ec IIB"},
        { id: '15', label:"ec IIC o 2c "},
        { id: '17', label:"ec IIIA o 3a "},
        { id: '18', label:"ec IIIB o 3b "},
        { id: '19', label:"ec IIIC o 3c "},
        { id: '21', label:"ec IVA o 4a "},
        { id: '22', label:"ec IVB o 4b"}
      ],
      cancerAnal: [
        { id: '0', label:"estadio clínico (ec) o (tumor in situ) "},
        { id: '1', label:"ec I o 1"},
        { id: '10', label:"ec II o 2 "},
        { id: '17', label:"ec IIIA o 3a "},
        { id: '18', label:"ec IIIB o 3b "},
        { id: '20', label:"ec IV o 4"},
        { id: '1', label:"ec I o 1"},
        { id: '11', label:"ec IIA o 2a "},
        { id: '14', label:"ec IIB o 2b "},
        { id: '17', label:"ec IIIA o 3a "},
        { id: '18', label:"ec IIIB o 3b "},
        { id: '19', label:"ec IIIC o 3c "},
        { id: '20', label:"ec IV o 4"}
      ],
      cancerCervix: [
        { id: '0', label:"estadio clínico (ec) o (tumor in situ) "},
        { id: '1', label:"ec I o 1"},
        { id: '2', label:"ec IA o 1A "},
        { id: '3', label:"ec IA1"},
        { id: '4', label:"ec IA2"},
        { id: '5', label:"ec IB o 1b "},
        { id: '6', label:"ec IB1"},
        { id: '7', label:"ec IB2"},
        { id: '10', label:"ec II o 2 "},
        { id: '11', label:"ec IIA o 2a "},
        { id: '12', label:"ec IIA1"},
        { id: '13', label:"ec IIA2"},
        { id: '14', label:"ec IIB"},
        { id: '16', label:"ec III o 3 "},
        { id: '17', label:"ec IIIA o 3a "},
        { id: '18', label:"ec IIIB o 3b "},
        { id: '19', label:"ec IIIC o 3c "},
        { id: '21', label:"ec IVA o 4a "},
        { id: '22', label:"ec IVB o 4b"},
        { id: '27', label:"ec IIIC1 o 3c1"},
        { id: '28', label:"ec IIIC2 o 3c2"},
        { id: '30', label:"ec IB3"}
      ],
      cancerOtrasOpciones: [
        { id: '8', label:"ec IC o 1 "},
        { id: '9', label:"ec IS o 1s"},
        { id: '23', label:"ec IVC o 4c"},
        { id: '24', label:"ec 4S (para neuroblastoma)"},
        { id: '25', label:"ec V o 5"},
        { id: '31', label:"ec IC1"},
        { id: '32', label:"ec IC2"},
        { id: '33', label:"ec IC3"},
        { id: '34', label:"ec IIIA1"},
        { id: '35', label:"ec IIIA2"}
      ],
      cancerCrecimientoAntes: [
        { id: '1', label:"Sí se le realizó "},
        { id: '2', label:"No se le realizó"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '97', label:"No Aplica porque es cáncer de mama in situ "},
        { id: '98', label:"No Aplica (no es cáncer de mama)"},
        { id: '99', label:"Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos"}
      ],
      cancerMamaResultadoHer2: [
        { id: '1', label:" +++ (positivo)"},
        { id: '2', label:" ++ (equivoco o indeterminado) "},
        { id: '3', label:" + (negativo)"},
        { id: '4', label:" cero ó (negativo)"},
        { id: '97', label:" No Aplica porque es cáncer de mama in situ."},
        { id: '98', label:" No Aplica (no es cáncer de mama) o marcó la variable 31 con la opción 2."},
        { id: '99', label:" Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos."},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ],
      cancerColorrectalDukes: [
        { id: '1',  label:"A"},
        { id: '2',  label:"B"},
        { id: '3',  label:"C"},
        { id: '4',  label:"D"},
        { id: '55',  label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '98',  label:"No Aplica (no es cáncer colorrectal)"},
        { id: '99',  label:"Es cáncer colorrectal pero no hay información en la historia clínica acerca de esta estadificación"}
      ],
      clinicaLinfomaHodgkin: [
        { id: '5', label:"Estadio IA"},
        { id: '6', label:"Estadio IB"},
        { id: '7', label:"Estadio IIA"},
        { id: '8', label:"Estadio IIB"},
        { id: '9', label:"Estadio IIIA"},
        { id: '10', label:"Estadio IIIB"},
        { id: '11', label:"Estadio IVA"},
        { id: '12', label:"Estadio IVB"},
        { id: '13', label:"Extranodal cualquier estadio "},
        { id: '14', label:"Primario SNC"},
        { id: '15', label:"Primario Mediastinal"},
        { id: '16', label:"Primario de otros órganos"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '98', label:"No Aplica (porque es un tumor diferente a los enunciados)"},
        { id: '99', label:"Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos."}
      ],
      cancerProstataGleason: [
        { id: '11', label:"Gleason ≤ 6: ≤ 3+3"},
        { id: '12', label:"Gleason 7: 3+4"},
        { id: '13', label:"Gleason 7: 4+3"},
        { id: '14', label:"Gleason 8: 4+4 o 3+5 o 5+3"},
        { id: '15', label:"Gleason 9 o 10: 4+5 o 5+4 o 5+5"},
        { id: '97', label:"Es cáncer de próstata, pero no hay información acerca de esta estadificación porque el diagnóstico fue clínico."},
        { id: '98', label:"No es cáncer de próstata."},
        { id: '99', label:"Es cáncer de próstata, pero no hay información en la historia clínica acerca de esta clasificación a pesar de que fue diagnóstico histopatológico."},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."}
      ],
      riesgosLeucemiaPediatra: [
        { id: 'Clasificación de riesgo en linfoma no Hodgkin', label:"Clasificación de riesgo en linfoma no Hodgkin"},
        { id: 'Clasificación de riesgo en linfoma de Hodgkin', label:"Clasificación de riesgo en linfoma de Hodgkin"},
        { id: 'Clasificación del riesgo en adultos (LLA y LMA)', label:"Clasificación del riesgo en adultos (LLA y LMA)"},
        { id: 'Clasificación del riesgo en Pediatría (LLA y LMA)', label:"Clasificación del riesgo en Pediatría (LLA y LMA)"}
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '98', label:"No Aplica (no es leucemia ni linfoma)"},
        { id: '99', label:"Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos."}
      ],
      clasificacionRiesgoNoHodgkin: [
        { id: '1', label:"Bajo Riesgo"},
        { id: '2', label:"Riesgo intermedio bajo "},
        { id: '3', label:"Intermedio"},
        { id: '4', label:"Riesgo intermedio alto"},
        { id: '5', label:"Riesgo alto"}
      ],
      clasificacionRiesgoHodgkin: [
        { id: '1', label:"Bajo Riesgo"},
        { id: '5', label:"Riesgo alto"}
      ],
      riesgosAdultoLla: [
        { id: '1', label:"Riesgo estándar, bajo "},
        { id: '3', label:"Riesgo intermedio"},
        { id: '5', label:"Riesgo alto"}
      ],
      riesgosPediatraLla: [
        { id: '1', label:"Riesgo estándar, favorable "},
        { id: '3', label:"Riesgo intermedio"},
        { id: '5', label:"Riesgo alto, desfavorable"}
      ],
      objetivoTratamientoInicial: [
        { id: '1', label:"Curación"},
        { id: '2', label:"Paliación (intención paliativa) exclusivamente."},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '99', label:"Desconocido, el dato de esta variable no se encuentra descrito en los soportes clínicos."}
      ],
      intervencionPeriodoReporte: [
        { id: '1', label:"Observación previa a tratamiento (manejo expectante o casos en los que ya tienen orden médica de tratamiento, pero no alcanzó a ser administrado, dado que está cercano a la fecha del corte) "},
        { id: '2', label:"Ofrecer tratamiento curativo (quimioterapia, hormonoterapia, radioterapia, cirugía, terapia biológica) o paliativo dirigido al cáncer inicial o por recaída"},
        { id: '3', label:"Observación o seguimiento oncológico luego de tratamiento inicial (incluye tratamientos médicos para enfermedad general -no oncológica- y métodos diagnósticos de seguimiento)"},
        { id: '4', label:"1 y 2 únicamente"},
        { id: '5', label:"2 y 3 únicamente"},
        { id: '6', label:"1, 2 y 3"},
        { id: '55', label:"Persona con aseguramiento (régimen subsidiado o contributivo y que no son PPNA) que recibió servicios de salud por parte del ente territorial durante el periodo de reporte."},
        { id: '99', label:"No hay intervención en el periodo (abandono de terapia, alta oncológica ó alta voluntaria)"}
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
