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
            <div class="wrp_search">
                <q-input
                    rounded
                    standout
                    class="q-mb-sm"
                    v-model="search"
                    >
                </q-input>
                <q-btn rounded class="bg_botn_verde" @click="executeSearch" text-color="white" icon-right="search" label="Buscar" />
            </div>
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
                <div class="wrp_30">
                  <q-tree
                    :nodes="simple"
                    node-key="label"
                    selected-color="primary"
                    :selected.sync="selected"
                    default-expand-all
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
                  <q-tab-panel name="Relax Hotel">
                    <div class="text-h4 q-mb-md">Welcome</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                  </q-tab-panel>

                  <q-tab-panel name="marzo">
                    <div class="wrp_table tipo_grilla">
                      <table class="grilla">
                        <tr>
                          <td>
                              <q-icon name="file_present" class="azul_iconos" size="25px" />
                              <span class="name_usuario">Nombre del usuario</span>
                          </td>
                          <td class="action">
                              <q-icon name="delete_outline" color="red" size="25px" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <q-icon name="file_present" class="azul_iconos" size="25px" />
                              <span class="name_usuario">Nombre del usuario</span>
                          </td>
                          <td class="action">
                              <q-icon name="delete_outline" color="red" size="25px" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <q-icon name="file_present" class="azul_iconos" size="25px" />
                              <span class="name_usuario">Nombre del usuario</span>
                          </td>
                          <td class="action">
                            <q-icon name="delete_outline" color="red" size="25px" />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </q-tab-panel>

                  <q-tab-panel name="mayo">
                    <div class="wrp_table tipo_grilla">
                      <table class="grilla">
                        <tr>
                          <td>
                              <q-icon name="file_present" class="azul_iconos" size="25px" />
                              <span class="name_usuario">Nombre del usuario</span>
                          </td>
                          <td class="action">
                              <q-icon name="delete_outline" color="red" size="25px" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <q-icon name="file_present" class="azul_iconos" size="25px" />
                              <span class="name_usuario">Nombre del usuario</span>
                          </td>
                          <td class="action">
                              <q-icon name="delete_outline" color="red" size="25px" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                              <q-icon name="file_present" class="azul_iconos" size="25px" />
                              <span class="name_usuario">Nombre del usuario</span>
                          </td>
                          <td class="action">
                            <q-icon name="delete_outline" color="red" size="25px" />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </q-tab-panel>
                </q-tab-panels>
                <div class="btns_actions align_right">
                  <div class="row_1">
                    <q-btn rounded class="bg_botn_rojo btn_crear" text-color="white" icon-right="delete" label="Eliminar Carpeta" />
                    <q-btn rounded class="bg_botn_verde btn_crear" @click="popSubir = true"  text-color="white" icon-right="file_present" label="Cargar Archivo" />
                  </div>
                  <div class="row_1">
                    <q-btn rounded class="bg_botn_azul btn_crear" text-color="white" icon-right="save" label="Guardar" />
                  </div>
                </div>
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
              <q-uploader
                url="http://localhost:4444/upload"
                style="max-width: 200px"
                label="Seleccionar Archivo"
              />
            </div>
            <div class="wrp_button flex-end q-py-md">
              <q-btn rounded class="bg_botn_verde btn_crear"  text-color="white" icon-right="upload_file" label="Subir Archivo" />
            </div>
            <div class="wrp_button flex-end q-py-md">
              <q-btn rounded class="azul_boton btn_crear" text-color="white" type="button" icon-right="save" label="Guardar" />
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
              <q-btn rounded class="azul_boton btn_crear" text-color="white" type="button" icon-right="save" label="Guardar" />
            </div>
          </q-form>
          <q-btn class="close_pop" icon="close" flat round dense v-close-popup />
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
      patients: [],
      search: '',
      splitterModel: 27,
      selected: 'marzo',
      popSubir: false,
      popCrearCarpeta: false,
      nombre: '',
      simple: [
        {
          label: 'nombre del usuario',
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
  methods: {
    editPage (nid) {
      localStorage.setItem('patientNid', nid)
      this.$router.push('/crear-paciente')
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
