<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md all_width ">
      <div class="w_1200 q-pd-md">
          <h3 class="title_out_content">Bienvenido Dashboard</h3>
      </div>
      <div class="w_1200 bg_white q-pa-xl">
        <div class="row cien flex header_two">
          <div class="col-3 flex wrp_title_icon">
              <q-icon name="person_outline" class="azul_iconos" size="25px" />
              <h2>Documentos</h2>
          </div>
          <div class="w_60">
            <q-btn rounded class="bg_botn_verde btn_crear" @click="popCrearCarpeta = true" text-color="white" icon-right="add" label="Crear Carpeta" />
          </div>
        </div>
        <div class="desc_seccion">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem</p>
        </div>
        <div class="w_1200">
          <div class="wrp_tree">
            <q-splitter
              v-model="splitterModel"
              style="height: 400px"
            >
              <template v-slot:before>
                <div class="wrp_30 q-pa-sm">
                  <q-tree
                    :nodes="simple"
                    node-key="key"
                    selected-color="primary"
                    :selected.sync="selected"
                    default-expand-all
                    @update:selected="updateSelected"
                  />
                </div>
              </template>

              <template v-slot:after>
                <q-tab-panels
                  v-model="selected"
                  animated
                  transition-prev="jump-up"
                  transition-next="jump-up"
                >
                  <q-tab-panel :name="selected">
                    <div class="wrp_table tipo_grilla">
                      <table class="grilla">
                        <tr v-for="(item, key) in pdfs" :key="key">
                          <td>
                              <q-icon name="file_present" class="azul_iconos" size="25px" />
                              <span @click="verPdf(item)" class="name_usuario">{{ item.title }}</span>
                          </td>
                          <td class="action">
                              <q-btn rounded class="bg_botn_rojo" @click="deleteFile(item)" text-color="white" icon-right="delete" />
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="btns_actions align_right">
                      <div class="row_1">
                        <q-btn rounded class="bg_botn_rojo btn_crear" @click="deleteCarpeta" text-color="white" icon-right="delete" label="Eliminar Carpeta" />
                        <q-btn rounded class="bg_botn_verde btn_crear" @click="popSubir = true"  text-color="white" icon-right="file_present" label="Cargar Archivo" />
                      </div>
                    </div>
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="popSubir">
      <q-card style="width: 700px; max-width: 80vw;" class="pop_cambiarpsf">
        <q-card-section class="q-pa-md">
          <h4>Subir Archivo</h4>
          <div class="desc_pop">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
          <q-form class="row_flex">
            <div class="content_input_anota">
              <q-file outlined v-model="pdf" accept=".pdf" @rejected="onRejected">
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>
            <div class="wrp_button flex-end q-py-md">
              <q-btn rounded class="bg_botn_verde btn_crear"  text-color="white" icon-right="upload_file" label="Subir Archivo" @click="uploadPhoto"/>
            </div>
          </q-form>
          <q-btn class="close_pop" icon="close" flat round dense v-close-popup />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="popCrearCarpeta">
      <q-card style="width: 700px; max-width: 80vw;" class="pop_cambiarpsf">
        <q-card-section class="q-pa-md">
          <h4>Crear Carpeta</h4>
          <div class="desc_pop">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
          <q-form class="row_flex">
            <div class="content_input_anota">
              <q-input v-model="nombre" label="Nombre Carpeta" />
            </div>
            <div class="wrp_button flex-end q-py-md">
              <q-btn rounded class="azul_boton btn_crear" text-color="white" type="button" icon-right="save" label="Guardar" @click="createFolder"/>
            </div>
          </q-form>
          <q-btn class="close_pop" icon="close" flat round dense v-close-popup />
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="popupPdf">
      <q-card style="width: 900px; max-width: 80vw; height: 600px;">
        <q-card-section style="width: 900px; max-width: 80vw; height: 600px;">
          <q-pdfviewer
            v-model="show"
            type="html5"
            :src="urlSite + pdfSelected"
            v-if="pdfSelected.length !== 0"
            content-class="container"
            inner-content-class="container"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
  </template>
<script>
import configServices from '../services/config'

export default {
  name: 'documentos',
  data () {
    return {
      sliders: true,
      show: true,
      patients: [],
      search: '',
      splitterModel: 40,
      patient: [],
      pdf: [],
      pdfSelected: '',
      popupPdf: false,
      urlSite: 'http://saspdev.com',
      pdfs: [],
      selected: '',
      popSubir: false,
      popCrearCarpeta: false,
      nombre: '',
      simple: [
        {
          label: '',
          icon: 'folder_open',
          class: 'first',
          children: [
            {
              label: '2022',
              icon: 'folder',
              children: [
                {
                  label: 'marzo',
                  icon: 'folder_special'
                },
                {
                  label: 'mayo',
                  icon: 'folder'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  created () {
    var patientFolder = localStorage.getItem('patientFolder')
    if (typeof patientFolder !== 'undefined' && patientFolder !== '' && patientFolder !== null) {
      this.patient = JSON.parse(patientFolder)
      this.simple[0].label = this.patient.title + ' - ' + this.patient.field_json.program
      this.getFolders()
    }
  },
  methods: {
    verPdf (item) {
      this.pdfSelected = item.field_pdf
      this.popupPdf = true
    },
    onRejected (rejectedEntries) {
      this.$q.notify({
        type: 'negative',
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      })
    },
    uploadPhoto () {
      var _this = this
      var reader = new FileReader()
      reader.readAsDataURL(this.pdf)

      reader.onload = function () {
        var base64result = reader.result.split(',')[1]
        var data = {
          type: 'savePdf',
          data: base64result,
          mime: _this.pdf.type,
          name: _this.pdf.name,
          patient: _this.patient.nid,
          folder: _this.selected
        }
        configServices.consumerStandar(_this, 'asfa-rest/post', data, {
          callBack: (data) => {
            if (data.status === 200) {
              _this.$swal('', 'Archivo guardado correctamente', 'success')
              _this.popSubir = false
              _this.updateSelected()
            }
          }
        })
      }

      reader.onerror = function () {
        console.log(reader.error)
      }
    },
    deleteFile (item) {
      var _this = this

      var data = {
        type: 'deleteFile',
        file: item.nid
      }

      configServices.consumerStandar(this, 'asfa-rest/post', data, {
        callBack: (data) => {
          _this.$swal('', 'Archivo eliminado correctamente', 'success')
          _this.updateSelected()
        }
      })
    },
    deleteCarpeta () {
      var _this = this

      var data = {
        type: 'deleteFolder',
        folder: this.selected
      }

      configServices.consumerStandar(this, 'asfa-rest/post', data, {
        callBack: (data) => {
          if (typeof data.error !== 'undefined') {
            return _this.$swal('Advertencia', 'Error al eliminar carpeta, puede que contenga archivos', 'error')
          }

          _this.$swal('', 'Carpeta eliminada correctamente', 'success')
          _this.popCrearCarpeta = false
          _this.selected = ''
          _this.getFolders()
        }
      })
    },
    updateSelected () {
      var _this = this
      configServices.loadData(this, '/carpetas/pdfs/' + this.selected + '/json', {
        callBack: (data) => {
          _this.pdfs = data

          _this.$q.loading.hide()
        }
      })
    },
    createFolder () {
      var _this = this

      var data = {
        type: 'createFolder',
        title: this.nombre,
        patient: this.patient.nid
      }

      configServices.consumerStandar(this, 'asfa-rest/post', data, {
        callBack: (data) => {
          if (typeof data.error !== 'undefined') {
            return _this.$swal('Advertencia', 'Error al crear carpeta', 'error')
          }

          _this.$swal('', 'Carpeta guardada correctamente', 'success')
          _this.popCrearCarpeta = false
          _this.getFolders()
        }
      })
    },
    getFolders () {
      var _this = this

      configServices.loadData(this, 'carpetas/' + this.patient.nid, {
        callBack: (data) => {
          var folders = []
          data.map((item, key) => {
            var nameFolder = item.created[0].value.split('T')
            nameFolder = nameFolder[0].split('-')

            const isFound = folders.find((element, index) => {
              if (element.label === nameFolder[0]) {
                folders.splice(index, 1)
                return element
              }
            })

            var folder = {
              label: nameFolder[0],
              icon: 'folder',
              children: []
            }

            if (typeof isFound !== 'undefined') {
              folder = isFound
            }

            var subFolder = {
              label: item.title[0].value,
              icon: 'folder',
              key: item.nid[0].value
            }

            folder.children.push(subFolder)
            folders.push(folder)
          })

          _this.simple[0].children = folders

          _this.$q.loading.hide()
        }
      })
    },
    executeSearch () {
      var _this = this

      if (this.search !== '') {
        configServices.loadData(this, 'pacientes/json/?field_json_value=' + this.search, {
          callBack: (data) => {
            if (data.length === 0) {
              return _this.$swal('Advertencia', 'No se encontraron pacientes relacionados a su búsqueda', 'error')
            }
            data.map((item, key) => {
              var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
              data[key].field_json = JSON.parse(json)
            })

            _this.patients = data

            _this.$q.loading.hide()
          }
        })
      }
    }
  }
}
</script>
