<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md cien">
        <div class="w_1200 q-pd-md">
            <h3>Bienvenido Dashboard</h3>
        </div>
        <div class="w_1200 bg_white q-pa-xl">
            <div class="row cien flex header_two">
                <div class="col-3">
                    <h2 class="con_fonfo">Informacion del paciente</h2>
                </div>

                <div class="w_50">
                    <img alt="logo" src="../assets/sellos-icontec.png"/>
                </div>
            </div>
            <q-form
            @submit="savePatient"
            >
            <div class="wrp_forms q-mt-xl">
                <div class="row dos_items">
                    <div class="item">
                        <img alt="logo" src="../assets/iconos/perfil-paciente1.png"/>
                    </div>
                </div>
                <div class="row dos_items">
                    <div class="item">
                        <label>Entidad Reportante</label>
                        <q-input
                          rounded
                          standout
                          v-model="data.entity"
                          lazy-rules
                        >
                      </q-input>
                    </div>
                    <div class="item">
                        <label>Vinculacion de la entidad reportante al SGSSS</label>
                        <q-select rounded standout v-model="data.bonding" :options="bondings" label="Seleccionar" />
                    </div>
                </div>
                <div class="row dos_items">
                    <div class="item">
                        <label>Tipo de documento de identidad</label>
                        <q-select rounded standout v-model="data.documentType" :options="documentTypes" label="Seleccionar" />
                    </div>
                    <div class="item">
                        <label>Número de documento de identidad</label>
                        <q-input
                        rounded
                        standout
                        v-model="data.identification"
                        lazy-rules
                        >
                      </q-input>
                    </div>
                </div>
                <div class="row dos_items">
                    <div class="item">
                        <label>Primer apellido</label>
                        <q-input
                        rounded
                        standout
                        v-model="data.firstLastname"
                        lazy-rules
                        >
                      </q-input>
                    </div>
                    <div class="item">
                        <label>Segundo apellido</label>
                        <q-input
                        rounded
                        standout
                        v-model="data.secondLastname"
                        lazy-rules
                        >
                      </q-input>
                    </div>
                </div>
                <div class="row dos_items">
                    <div class="item">
                        <label>Primer nombre</label>
                        <q-input
                        rounded
                        standout
                        v-model="data.firstName"
                        lazy-rules
                        >
                      </q-input>
                    </div>
                    <div class="item">
                        <label>Segundo nombre</label>
                        <q-input
                        rounded
                        standout
                        v-model="data.secondName"
                        lazy-rules
                        >
                      </q-input>
                    </div>
                </div>
                <div class="row tres_items">
                    <div class="item">
                      <label>Fecha de nacimiento</label>
                        <q-input filled v-model="data.birthdate" mask="date" :rules="['date']">
                            <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                  <q-date v-model="data.birthdate">
                                    <div class="row items-center justify-end">
                                      <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                  </q-date>
                                </q-popup-proxy>
                              </q-icon>
                            </template>
                        </q-input>
                    </div>
                    <div class="item">
                        <label>Sexo</label>
                        <q-select rounded standout v-model="data.sex" :options="sexs" label="Seleccionar" />
                    </div>
                    <div class="item">
                        <label>Fecha de afiliacion</label>
                        <q-input filled  v-model="data.membershipDate" mask="date" :rules="['date']">
                            <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                  <q-date v-model="data.membershipDate">
                                    <div class="row items-center justify-end">
                                      <q-btn v-close-popup label="Close" color="primary" flat />
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
                        <label>Codigo de pertenencia etnica</label>
                        <q-select rounded standout v-model="data.ethnicity" :options="ethnicity" label="Seleccionar" />
                    </div>
                    <div class="item">
                        <label>Poblacion Clave</label>
                        <q-select rounded standout v-model="data.poblation" :options="poblations" label="Seleccionar" />
                    </div>
                </div>
                <div class="row dos_items">
                    <div class="item">
                        <label>Codigo Municipio o distrito de residencia</label>
                        <q-input
                        rounded
                        standout
                        v-model="data.municipality"
                        lazy-rules
                        >
                      </q-input>
                    </div>
                    <div class="item">
                        <label>Fecha de afiliación a la entidad reportante</label>
                        <q-input filled  v-model="data.entityMembership" mask="date" :rules="['date']">
                            <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                  <q-date v-model="data.entityMembership">
                                    <div class="row items-center justify-end">
                                      <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                  </q-date>
                                </q-popup-proxy>
                              </q-icon>
                            </template>
                        </q-input>
                    </div>
                </div>
                <div class="row un_item">
                    <div class="item">
                        <label>Informacion detallada del paciente</label>
                        <q-input
                        v-model="data.patientText"
                        filled
                        type="textarea"
                      />
                    </div>
                </div>
                <div class="row un_item cien">
                    <div class="item align_right cien">
                      <q-btn rounded class="bg_botn_verde btn_crear" type="submit" text-color="white" icon-right="save" label="Guardar" />
                    </div>
              </div>
            </div>
            </q-form>
        </div>
    </div>
  </q-page>
</template>

<script>
import configServices from '../services/config'

export default {
  name: 'pacientes',
  data () {
    return {
      sliders: true,
      user: {},
      patientNid: '',
      date: '2019/02/01',
      data: {},
      bondings: [
        { id: 'C', label: 'Contributibo' },
        { id: 'S', label: 'Subsidiado' },
        { id: 'P', label: 'Excepcion' },
        { id: 'E', label: 'Especial' },
        { id: 'I', label: 'Fondo Atencion en Salud para PPL' },
        { id: 'V', label: 'Planes voluntarios en salud' },
        { id: 'N', label: 'No Asegurado' }
      ],
      documentTypes: [
        { id: 'CC', label: 'Cedula ciudadania' },
        { id: 'CE', label: 'Cedula de extranjeria' },
        { id: 'CD', label: 'Carne diplomatico' },
        { id: 'PA', label: 'Pasaporte' },
        { id: 'SC', label: 'Salvoconducto' },
        { id: 'PE', label: 'Permiso Especial de Permanencia' },
        { id: 'RC', label: 'Registro civil' },
        { id: 'TI', label: 'Tarjeta de identidad' },
        { id: 'CN', label: 'Certificado de nacido vivo' },
        { id: 'AS', label: 'Adulto sin identificar' },
        { id: 'MS', label: 'Menor sin identificar' }
      ],
      sexs: [
        { id: 'H', label: 'Hombre' },
        { id: 'M', label: 'Mujer' },
        { id: 'I', label: 'Intersexual (De acuerdo a lo registrado por el medico tratante en la historia clinica)' }
      ],
      ethnicity: [
        { id: '1', label: 'Indigena' },
        { id: '2', label: 'ROM (Gitano)' },
        { id: '3', label: 'Raizal (del Archipielago de San Andres y Providencia)' },
        { id: '4', label: 'Palenquero de San Basilio de Palenque' },
        { id: '5', label: 'Negro(a), Mulato(a), Afrocolombiano(a) o Afrodescendiente' },
        { id: '6', label: 'Ninguna de las anteriores' }
      ],
      poblations: [
        { id: '1', label: 'Personas trabajadoras sexuales' },
        { id: '2', label: 'Mujeres transgenero' },
        { id: '3', label: 'Hombres transgenero' },
        { id: '4', label: 'Hombres que tienen relaciones sexuales con otros hombres.' },
        { id: '5', label: 'Consumidores de sustancias psicoactivas por via diferente a la inyectada' },
        { id: '6', label: 'Personas que se inyectan drogas' },
        { id: '7', label: 'Habitantes de calle' },
        { id: '8', label: 'Poblacion Privada de la Libertad' },
        { id: '9', label: 'No pertenece a ninguna de estas poblaciones' }
      ]
    }
  },
  created () {
    this.user = JSON.parse(localStorage.getItem('user'))

    this.patientNid = localStorage.getItem('patientNid')

    if (this.patientNid !== '') {
      this.getPatient()
    }
  },
  methods: {
    getPatient () {
      var _this = this
      configServices.loadData(this, 'pacientes/json/' + this.patientNid, {
        callBack: (data) => {
          data.map((item, key) => {
            var json = data[key].field_json.replace(/&quot;/g, '\\"').replaceAll('\\', '')
            data[key].field_json = JSON.parse(json)
          })

          _this.data = data[0].field_json
          _this.$q.loading.hide()
        }
      })
    },
    savePatient () {
      var _this = this
      var data = {
        type: 'savePatient',
        data: this.data,
        user: this.user.uid
      }

      if (this.patientNid !== '') {
        data.id = this.patientNid
      }

      configServices.consumerStandar(this, 'asfa-rest/post', data, {
        callBack: (data) => {
          if (typeof data.error !== 'undefined') {
            return _this.$swal('Advertencia', 'Error al crear paciente', 'error')
          }

          _this.$swal('', 'Paciente guardado correctamente', 'success')

          _this.$router.push('/pacientes')
        }
      })
    }
  }
}
</script>
