<template>
  <q-page class="flex flex-center azul_fondo wiew_reportes">
    <div class="q-pb-md all_width ">
        <div class="w_1200 q-pd-md">
            <h3 class="title_out_content">Bienvenido Dashboard</h3>
        </div>
        <div class="w_1200 bg_white q-pa-xl">
            <div class="row cien flex header_two">
                <div class="col-3 flex wrp_title_icon">
                    <q-icon name="post_add" class="azul_iconos" size="25px" />
                    <h2>Reportes</h2>
                </div>

                <div class="w_60 flex-end">
                    <div class="wrp_search rango_fechas">

                    </div>
                </div>
            </div>
            <div class="desc_seccion cien q-pa-md">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem</p>
            </div>
            <div class="wrp_table tipo_grilla q-mt-xl">
                <q-card class="grillas_tabs">
                    <q-tabs
                    v-model="tab"
                    dense
                    class="text-grey"
                    active-color="primary"
                    indicator-color="primary"
                    align="justify"
                    narrow-indicator
                    >
                    <q-tab name="finalizados" label="Finalizados" />
                    </q-tabs>

                    <q-separator />

                    <q-tab-panels v-model="tab" animated>
                        <q-tab-panel name="finalizados">
                            <div class="wrp_table tipo_grilla">
                                <h4 class="aviso_busque">Listado Reportes</h4>
                                <table class="grilla">
                                  <tr>
                                    <td>
                                        <q-icon name="person" class="azul_iconos" size="25px" />
                                        <span class="name_usuario">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span>
                                    </td>
                                    <td class="action">
                                        <q-btn rounded class="bg_botn_azul" text-color="white" icon-right="visibility" label="Auditar" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                        <q-icon name="person" class="azul_iconos" size="25px" />
                                        <span class="name_usuario">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span>
                                    </td>
                                    <td class="action">
                                        <q-btn rounded class="bg_botn_azul" text-color="white" icon-right="visibility" label="Auditar" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                        <q-icon name="person" class="azul_iconos" size="25px" />
                                        <span class="name_usuario">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</span>
                                    </td>
                                    <td class="action">
                                        <q-btn rounded class="bg_botn_azul" text-color="white" icon-right="visibility" label="Auditar" />
                                    </td>
                                  </tr>
                                </table>
                            </div>
                        </q-tab-panel>
                    </q-tab-panels>
                </q-card>
            </div>
        </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'reportes',
  data () {
    return {
      sliders: true,
      patients: [],
      search: null,
      tab: 'finalizados',
      drafts: [],
      fixes: []
    }
  },
  created () {
    this.getRegistros()
  },
  methods: {
    crearRegistro (nid) {
      localStorage.setItem('patientNid', nid)
      this.$router.push('/crear-registro-vih')
    }
  }
}
</script>
