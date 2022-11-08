<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md cien">
        <div class="w_1200 q-pd-md">
            <h3 class="title_out_content">Bienvenido Dashboard</h3>
        </div>
        <div class="w_1200 bg_white q-pa-xl">
            <div class="row cien flex header_two">
                <div class="col-4">
                    <h2 class="con_fonfo titulo_fondo">Informacion del paciente</h2>
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
                    <div class="item">
                        <label>Entidad Reportante</label>
                        <q-input
                          rounded
                          standout
                          v-model="data.entity"
                          lazy-rules
                          :rules="[val => !!val || 'Campo requerido']"
                        >
                      </q-input>
                    </div>
                </div>
                <div class="row un_item">
                    <div class="item">
                        <label>Vinculacion de la entidad reportante al SGSSS</label>
                        <q-select rounded standout v-model="data.bonding" :options="bondings" :rules="[val => !!val || 'Campo requerido']" label="Seleccionar" />
                    </div>
                </div>
                <div class="row dos_items">
                    <div class="item">
                        <label>Tipo de documento de identidad</label>
                        <q-select rounded standout v-model="data.documentType" :options="documentTypes" :rules="[val => !!val || 'Campo requerido']" label="Seleccionar" />
                    </div>
                    <div class="item">
                        <label>Número de documento de identidad</label>
                        <q-input
                        rounded
                        standout
                        v-model="data.identification"
                        lazy-rules
                        :rules="[val => !!val || 'Campo requerido']"
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
                        :rules="[val => !!val || 'Campo requerido']"
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
                        :rules="[val => !!val || 'Campo requerido']"
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
                        <q-input filled v-model="data.birthdate">
                            <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                  <q-date v-model="data.birthdate" mask="YYYY-MM-DD">
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
                        <label>Sexo</label>
                        <q-select rounded standout v-model="data.sex" :options="sexs" :rules="[val => !!val || 'Campo requerido']" label="Seleccionar" />
                    </div>
                    <div class="item">
                        <label>Fecha de afiliacion</label>
                        <q-input filled  v-model="data.membershipDate">
                            <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                  <q-date v-model="data.membershipDate" mask="YYYY-MM-DD">
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
                        <label>Codigo de pertenencia etnica</label>
                        <q-select rounded standout v-model="data.ethnicity" :options="ethnicity" :rules="[val => !!val || 'Campo requerido']" label="Seleccionar" />
                    </div>
                    <div class="item">
                        <label>Poblacion Clave</label>
                        <q-select rounded standout v-model="data.poblation" :options="poblations" :rules="[val => !!val || 'Campo requerido']" label="Seleccionar" />
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
                        :rules="[val => !!val || 'Campo requerido']"
                        >
                      </q-input>
                    </div>
                    <div class="item">
                        <label>Fecha de afiliación a la entidad reportante</label>
                        <q-input filled  v-model="data.entityMembership">
                            <template v-slot:append>
                              <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                  <q-date v-model="data.entityMembership" mask="YYYY-MM-DD">
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
                        <label>Programa</label>
                        <q-select rounded standout v-model="data.program" :options="['VIH', 'Cancer', 'ERC', 'Reumatoide']" :rules="[val => !!val || 'Campo requerido']" label="Seleccionar" />
                    </div>
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
  name: 'crear-pacientes',
  data () {
    return {
      sliders: true,
      user: {},
      patientNid: '',
      date: '2019-02-01',
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

      if (this.data.entity === '05000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2768', 'error')
      }

      if (this.data.entity === '08000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2769', 'error')
      }

      if (this.data.entity === '08001' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2770', 'error')
      }

      if (this.data.entity === '11000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2772', 'error')
      }

      if (this.data.entity === '13000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2772', 'error')
      }

      if (this.data.entity === '13001' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2773', 'error')
      }

      if (this.data.entity === '15000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2774', 'error')
      }

      if (this.data.entity === '17000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2775', 'error')
      }

      if (this.data.entity === '18000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2776', 'error')
      }

      if (this.data.entity === '19000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2777', 'error')
      }

      if (this.data.entity === '20000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2778', 'error')
      }

      if (this.data.entity === '23000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2779', 'error')
      }

      if (this.data.entity === '25000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2780', 'error')
      }

      if (this.data.entity === '27000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2781', 'error')
      }

      if (this.data.entity === '41000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2782', 'error')
      }

      if (this.data.entity === '44000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2783', 'error')
      }

      if (this.data.entity === '47000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2784', 'error')
      }

      if (this.data.entity === '47001' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2785', 'error')
      }

      if (this.data.entity === '50000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2786', 'error')
      }

      if (this.data.entity === '52000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2787', 'error')
      }

      if (this.data.entity === '54000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2788', 'error')
      }

      if (this.data.entity === '63000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2789', 'error')
      }

      if (this.data.entity === '66000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2790', 'error')
      }

      if (this.data.entity === '68000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2791', 'error')
      }

      if (this.data.entity === '70000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2792', 'error')
      }

      if (this.data.entity === '73000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2793', 'error')
      }

      if (this.data.entity === '76000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2794', 'error')
      }

      if (this.data.entity === '76109' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2795', 'error')
      }

      if (this.data.entity === '81000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2796', 'error')
      }

      if (this.data.entity === '85000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2797', 'error')
      }

      if (this.data.entity === '86000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2798', 'error')
      }

      if (this.data.entity === '88000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2799', 'error')
      }

      if (this.data.entity === '91000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2800', 'error')
      }

      if (this.data.entity === '94000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2801', 'error')
      }

      if (this.data.entity === '95000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2802', 'error')
      }

      if (this.data.entity === '97000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2803', 'error')
      }

      if (this.data.entity === '99000' && (this.data.bonding.id !== 'N' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B27804', 'error')
      }

      if (this.data.entity === 'CCF023' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2807', 'error')
      }

      if (this.data.entity === 'CCF024' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2808', 'error')
      }

      if (this.data.entity === 'CCF033' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2810', 'error')
      }

      if (this.data.entity === 'CCF050' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2811', 'error')
      }

      if (this.data.entity === 'CCF055' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2813', 'error')
      }

      if (this.data.entity === 'CCF102' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2814', 'error')
      }

      if (this.data.entity === 'EPS001' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2815', 'error')
      }

      if (this.data.entity === 'EPS002' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2816', 'error')
      }

      if (this.data.entity === 'EPS005' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2817', 'error')
      }

      if (this.data.entity === 'EPS008' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2818', 'error')
      }

      if (this.data.entity === 'EPS010' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2819', 'error')
      }

      if (this.data.entity === 'EPS012' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2820', 'error')
      }

      if (this.data.entity === 'EPS016' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2821', 'error')
      }

      if (this.data.entity === 'EPS017' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2822', 'error')
      }

      if (this.data.entity === 'EPS018' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2823', 'error')
      }

      if (this.data.entity === 'EPS022' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2824', 'error')
      }

      if (this.data.entity === 'EPS025' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2826', 'error')
      }

      if (this.data.entity === 'EPS037' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2828', 'error')
      }

      if (this.data.entity === 'EPS044' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2829', 'error')
      }

      if (this.data.entity === 'EPS045' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2830', 'error')
      }

      if (this.data.entity === 'EPS046' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2831', 'error')
      }

      if (this.data.entity === 'EPSI01' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2832', 'error')
      }

      if (this.data.entity === 'EPSI03' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2833', 'error')
      }

      if (this.data.entity === 'EPSI04' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2834', 'error')
      }

      if (this.data.entity === 'EPSI05' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2835', 'error')
      }

      if (this.data.entity === 'EPSI06' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2836', 'error')
      }

      if (this.data.entity === 'EPSS34' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2838', 'error')
      }

      if (this.data.entity === 'EPSS40' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2839', 'error')
      }

      if (this.data.entity === 'EPSS41' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2840', 'error')
      }

      if (this.data.entity === 'ESS024' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2842', 'error')
      }

      if (this.data.entity === 'ESS062' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2843', 'error')
      }

      if (this.data.entity === 'ESS091' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2845', 'error')
      }

      if (this.data.entity === 'ESS118' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2846', 'error')
      }

      if (this.data.entity === 'ESS207' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2848', 'error')
      }

      if (this.data.entity === 'EAS016' && this.data.bonding.id !== 'C') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2849', 'error')
      }

      if (this.data.entity === 'EAS027' && this.data.bonding.id !== 'C') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2850', 'error')
      }

      if (this.data.entity === 'RES001' && this.data.bonding.id !== 'P') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2851', 'error')
      }

      if (this.data.entity === 'RES002' && this.data.bonding.id !== 'P') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2852', 'error')
      }

      if (this.data.entity === 'RES003' && this.data.bonding.id !== 'P') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2853', 'error')
      }

      if (this.data.entity === 'RES004' && this.data.bonding.id !== 'P') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2854', 'error')
      }

      if (this.data.entity === 'RES006' && this.data.bonding.id !== 'E') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2855', 'error')
      }

      if (this.data.entity === 'RES007' && this.data.bonding.id !== 'E') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2856', 'error')
      }

      if (this.data.entity === 'RES008' && this.data.bonding.id !== 'E') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2857', 'error')
      }

      if (this.data.entity === 'RES009' && this.data.bonding.id !== 'E') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2858', 'error')
      }

      if (this.data.entity === 'RES011' && this.data.bonding.id !== 'E') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2859', 'error')
      }

      if (this.data.entity === 'RES012' && this.data.bonding.id !== 'E') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2860', 'error')
      }

      if (this.data.entity === 'RES014' && this.data.bonding.id !== 'E') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2861', 'error')
      }

      if (this.data.entity === 'REUE04' && this.data.bonding.id !== 'E') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2862', 'error')
      }

      if (this.data.entity === 'REUE05' && this.data.bonding.id !== 'E') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2863', 'error')
      }

      if (this.data.entity === 'REUE09' && this.data.bonding.id !== 'E') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2864', 'error')
      }

      if (this.data.entity === 'EMP002' && this.data.bonding.id !== 'V') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2865', 'error')
      }

      if (this.data.entity === 'EMP015' && this.data.bonding.id !== 'V') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2866', 'error')
      }

      if (this.data.entity === 'EMP017' && this.data.bonding.id !== 'V') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2867', 'error')
      }

      if (this.data.entity === 'EMP029' && this.data.bonding.id !== 'V') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2868', 'error')
      }

      if (this.data.entity === 'EMP023' && this.data.bonding.id !== 'V') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2871', 'error')
      }

      if (this.data.entity === 'EMP025' && this.data.bonding.id !== 'V') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2873', 'error')
      }

      if (this.data.entity === 'EMP028' && this.data.bonding.id !== 'V') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2874', 'error')
      }

      if (this.data.entity === 'ARL142' && this.data.bonding.id !== 'C') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2875', 'error')
      }

      if (this.data.entity === 'ARL144' && this.data.bonding.id !== 'C') {
        return _this.$swal('Advertencia', 'Error en la validación No. B2876', 'error')
      }

      if (this.data.entity === '37086' && this.data.bonding.id !== 'C') {
        return _this.$swal('Advertencia', 'Error en la validación No. B3285', 'error')
      }

      if (this.data.entity === 'EPS048' && (this.data.bonding.id !== 'C' && this.data.bonding.id !== 'S')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B5325', 'error')
      }

      if (this.data.entity === 'PVS1333' && this.data.bonding.id !== 'V') {
        return _this.$swal('Advertencia', 'Error en la validación No. B5720', 'error')
      }

      if (this.data.entity === 'USPEC01' && this.data.poblation.id !== '8') {
        return _this.$swal('Advertencia', 'Error en la validación No. B5721', 'error')
      }

      if (this.data.entity === 'USPEC01' && this.data.bonding.id !== 'I') {
        return _this.$swal('Advertencia', 'Error en la validación No. B5722', 'error')
      }

      if (Date.parse(this.data.membershipDate) <= Date.parse(this.data.birthdate)) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2883', 'error')
      }

      var currentDate = new Date()

      if (Date.parse(currentDate) <= Date.parse(this.data.membershipDate)) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2883', 'error')
      }

      if (Date.parse(currentDate) <= Date.parse(this.data.birthdate)) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2881', 'error')
      }

      if (this.data.documentType === 'MS' && (this.data.bonding.id !== 'S' && this.data.bonding.id !== 'N' && this.data.bonding.id !== 'I')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2877', 'error')
      }

      if (this.data.documentType === 'AS' && (this.data.bonding.id !== 'S' && this.data.bonding.id !== 'N' && this.data.bonding.id !== 'I')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2878', 'error')
      }

      if (this.data.documentType === 'SC' && (this.data.bonding.id !== 'S' && this.data.bonding.id !== 'N' && this.data.bonding.id !== 'C')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2879', 'error')
      }

      if (this.data.documentType === 'PE' && (this.data.bonding.id !== 'S' && this.data.bonding.id !== 'N' && this.data.bonding.id !== 'C')) {
        return _this.$swal('Advertencia', 'Error en la validación No. B2880', 'error')
      }

      if (this.data.sex.id === 'M' && this.data.poblation.id === '4') {
        return _this.$swal('Advertencia', 'Error en la validación No. B4428', 'error')
      }

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
