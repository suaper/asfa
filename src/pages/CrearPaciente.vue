<template>
  <q-page class="flex flex-center azul_fondo">
    <div class="q-pb-md cien">
        <div class="w_1200 q-pd-md">
            <h3>Bienvenido Dashboard</h3>
        </div>
        <div class="w_1200 bg_white q-pa-xl">
            <div class="row cien flex header_two">
                <div class="col-3">
                    <h2 class="con_fonfo">Información del paciente</h2>
                </div>

                <div class="w_50">
                    <img alt="logo" src="../assets/sellos-icontec.png"/>
                </div>
            </div>
            <div class="wrp_forms q-mt-xl">
              <div class="row dos_items">
                  <div class="item">
                      <img alt="logo" src="../assets/iconos/perfil-paciente1.png"/>
                  </div>
                  <div class="item">
                      <label>Tiene VIH</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
              </div>
              <div class="row dos_items">
                  <div class="item">
                      <label>Entidad Reportante</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Vinculación de la entidad reportante al SGSSS</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
              </div>
              <div class="row dos_items">
                  <div class="item">
                      <label>Tipo de documento de identidad</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Número de documento de identidad</label>
                      <q-input
                      rounded
                      standout
                      v-model="numero_documento"
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
                      v-model="primer_apellido"
                      lazy-rules
                      >
                    </q-input>
                  </div>
                  <div class="item">
                      <label>Segundo apellido</label>
                      <q-input
                      rounded
                      standout
                      v-model="segundo_apellido"
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
                      v-model="primer_nombre"
                      lazy-rules
                      >
                    </q-input>
                  </div>
                  <div class="item">
                      <label>Segundo nombre</label>
                      <q-input
                      rounded
                      standout
                      v-model="segundo_nombre"
                      lazy-rules
                      >
                    </q-input>
                  </div>
              </div>
              <div class="row tres_items">
                  <div class="item">
                    <label>Fecha de nacimiento</label>
                      <q-input filled v-model="date" mask="date" :rules="['date']">
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="date">
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
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Fecha de afiliación</label>
                      <q-input filled  v-model="date" mask="date" :rules="['date']">
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                <q-date v-model="date">
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
                      <label>Código de pertenencia étnica</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
                  <div class="item">
                      <label>Población Clave</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
              </div>
              <div class="row un_item">
                  <div class="item">
                      <label>Código Municipio o distrito de residencia</label>
                      <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                  </div>
              </div>
              <div class="row un_item">
                  <div class="item">
                      <label>Información detallada del paciente</label>
                      <q-input
                      v-model="text"
                      filled
                      type="textarea"
                    />
                  </div>
              </div>
              <div class="row un_item cien">
                  <div class="item align_right cien">
                    <q-btn rounded class="bg_botn_verde btn_crear" @click="irCrearPaciente" text-color="white" icon-right="save" label="Guardar" />
                  </div>
            </div>
          </div>
        </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'pacientes',
  data () {
    return {
      sliders: true,
      date: '2019/02/01'
    }
  },
  methods: {
    irCrearPaciente () {
      this.$router.push('/crear-paciente')
    }
  }
}
</script>
