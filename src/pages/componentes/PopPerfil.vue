<template>
<div class="row_cien flex">
    <div class="w_20">
        <ul>
            <li class="info_top">
                <img alt="logo" src="../../assets/iconos/perfil-paciente1.png"/>
                <p><span>{{ patient.title }}</span></p>
                <p><span>25 años</span></p>
                <p><span v-show="patient.field_json.sex" v-html="patient.field_json.sex.id === 'H' ? 'Hombre' : 'Mujer'"></span></p>
            </li>
            <li>
                <p class="desc_perfil">
                  {{ patient.field_json.patientText }}
                </p>
            </li>
            <li class="action">
                <q-btn rounded class="bg_botn_verde btn_crear" @click="editPatient(patient.nid)" text-color="white" icon-right="chevron_right" type="submit" label="Editar" />
            </li>
        </ul>
    </div>

    <div class="w_78">
        <div class="wrp_forms w_73">
            <div class="row dos_items">
                <div class="item">
                  <label>Entidad Reportante</label>
                    <div class="input_lectura"><span>{{ patient.field_json.entity }}</span></div>
                </div>
                <div class="item">
                    <label>Vinculación de la entidad reportante al SGSSS</label>
                    <div class="input_lectura"><span>{{ patient.field_json.bonding.id }} - {{ patient.field_json.bonding.label }}</span></div>
                  </div>
            </div>

            <div class="row dos_items">
                <div class="item">
                  <label>Tipo de documento de identidad</label>
                    <div class="input_lectura"><span>{{ patient.field_json.documentType.label }}</span></div>
                </div>
                <div class="item">
                    <label>Número de documento de identidad</label>
                    <div class="input_lectura"><span>{{ patient.field_json.identification }}</span></div>
                  </div>
            </div>

            <div class="row dos_items">
                <div class="item">
                  <label>Primer apellido</label>
                    <div class="input_lectura"><span>{{ patient.field_json.firstName }}</span></div>
                </div>
                <div class="item">
                    <label>Segundo apellido</label>
                    <div class="input_lectura"><span>{{ patient.field_json.secondName }}</span></div>
                  </div>
            </div>

            <div class="row dos_items">
                <div class="item">
                  <label>Primer nombre</label>
                    <div class="input_lectura"><span>{{ patient.field_json.firstLastname }}</span></div>
                </div>
                <div class="item">
                    <label>Segundo nombre</label>
                    <div class="input_lectura"><span>{{ patient.field_json.secondLastname }}</span></div>
                  </div>
            </div>

            <div class="row tres_items">
                <div class="item">
                  <label>Fecha de nacimiento</label>
                    <div class="input_lectura"><span>{{ patient.field_json.birthdate }}</span></div>
                </div>
                <div class="item">
                    <label>Sexo</label>
                      <div class="input_lectura"><span>{{ patient.field_json.sex.id }} - {{ patient.field_json.sex.label }}</span></div>
                  </div>
                  <div class="item">
                    <label>Fecha de afiliación</label>
                      <div class="input_lectura"><span>{{ patient.field_json.membershipDate }}</span></div>
                  </div>
            </div>

            <div class="row dos_items">
                <div class="item">
                  <label>Código de pertenencia étnica</label>
                    <div class="input_lectura"><span>{{ patient.field_json.ethnicity.label }}</span></div>
                </div>
                <div class="item">
                    <label>Población Clave</label>
                    <div class="input_lectura"><span>{{ patient.field_json.poblation.label }}</span></div>
                  </div>
            </div>

            <div class="row un_item">
                <div class="item">
                    <label>Código Municipio o distrito de residencia</label>
                    <div class="input_lectura"><span>{{ patient.field_json.municipality }}</span></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'PopPerfiñ',
  props: {
    patient: Object
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    editPatient (nid) {
      localStorage.setItem('patientNid', nid)
      this.$router.push('/crear-paciente')
    }
  }
}
</script>
