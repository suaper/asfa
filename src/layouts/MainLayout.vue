<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container style="height: 900px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="!drawer || miniState"
        @click.capture="drawerClick"

        :width="250"
        :breakpoint="1000"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <!-- <span @click="miniState = true"> <img alt="logo" src="../assets/iconos/i-corazon.png"/></span> -->

            <q-item class="event_nav" clickable v-ripple>
              <q-item-section @click="miniState = true" avatar>
                <img alt="logo" src="../assets/iconos/i-corazon.png"/>
              </q-item-section>

              <q-item-section @click="miniState = true" avatar >
                <img alt="logo" src="../assets/logo-asfa-blanco.png"/>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img alt="logo" src="../assets/iconos/i-inicio.png"/>
              </q-item-section>

              <q-item-section @click="irDashboard">
                Inicio
                <q-icon name="chevron_right" class="cursor-pointer"></q-icon>
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <img alt="logo" src="../assets/iconos/i-paciente.png"/>
              </q-item-section>

              <q-item-section @click="irPacientes">
                Pacientes
                <q-icon name="chevron_right" class="cursor-pointer"></q-icon>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img alt="logo" src="../assets/iconos/i-registro.png"/>
              </q-item-section>

              <q-item-section @click="irRegistros">
                Registros
                <q-icon name="chevron_right" class="cursor-pointer"></q-icon>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img alt="logo" src="../assets/iconos/i-reporte.png"/>
              </q-item-section>

              <q-item-section @click="irReportes">
                Reportes
                <q-icon name="chevron_right" class="cursor-pointer"></q-icon>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <img alt="logo" src="../assets/iconos/i-doc.png"/>
              </q-item-section>

              <q-item-section @click="irDocumentos">
                Documentos
                <q-icon name="chevron_right" class="cursor-pointer"></q-icon>
              </q-item-section>
            </q-item>

            <!--<q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section @click="irResumen">
                Resumen
              </q-item-section>
            </q-item>-->
          </q-list>
        </q-scroll-area>

        <!--
          in this case, we use a button (can be anything)
          so that user can switch back
          to mini-mode
        -->
      </q-drawer>

      <q-page-container class="fdo_gris">
          <div class="header_search w_1200">
            <div class="logo_content">
               <img alt="logo" src="../assets/logo-asfa-blanco.png"/>
              </div>
            <div class="wrp_head">
              <div class="w_60">
                <div class="wrp_dss">
                  <span class="minilabel">
                    paciente
                  </span>
                  <div class="wrp_search">
                    <q-input
                        rounded
                        standout
                        class="q-mb-sm"
                        v-model="search"
                        >
                    </q-input>
                    <q-btn rounded class="bg_botn_verde" text-color="white" icon-right="search" label="Buscar" />
                  </div>
                </div>
              </div>
              <div class="treinta">
                <div>
                  <q-avatar size="42px">
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                  </q-avatar>
                  <q-btn class="btn_user" color="primary" icon-right="keyboard_arrow_down" label="Nombre Usuario">
                    <q-menu
                      transition-show="rotate"
                      transition-hide="rotate"
                    >
                      <q-list style="min-width: 100px">
                        <q-item clickable>
                          <q-item-section>Perfil</q-item-section>
                        </q-item>
                        <q-item clickable>
                          <q-item-section>Ejemplo</q-item-section>
                        </q-item>
                        <q-separator />
                        <q-item clickable>
                          <q-item-section>Ejemplo</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
          <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>

export default {
  name: 'pacientes',
  data () {
    return {
      drawer: false,
      miniState: false,
      search: ''
    }
  },
  methods: {
    drawerClick (e) {
      // if in "mini" state and user
      // click on drawer, we switch it to "normal" mode
      if (this.miniState) {
        this.miniState = false

        // notice we have registered an event with capture flag;
        // we need to stop further propagation as this click is
        // intended for switching drawer to "normal" mode only
        e.stopPropagation()
      }
    },
    irDashboard () {
      this.$router.push('/dashboard')
    },
    irRegistros () {
      this.$router.push('/registros')
    },
    irReportes () {
      this.$router.push('/reportes')
    },
    irResumen () {
      this.$router.push('/resumen')
    },
    irPacientes () {
      this.$router.push('/pacientes')
    },
    irDocumentos () {
      this.$router.push('/documentos')
    }
  }
}
</script>
