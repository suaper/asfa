<template>
    <div class="row flex cien">
        <h4 class="titulo_fondo">Información de mujeres gestantes</h4>
        <div class="wrp_forms w_73">
            <div class="row un_item">
                <div class="item">
                    <label>Mujer gestenta</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
            </div>
            <div class="row dos_items">
                <div class="item">
                    <label>Niño o niña menor de 12 meses que es hijo(a) de madre que vive con VIH</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
                <div class="item">
                    <label>Persona con tuberculosis activa</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
            </div>
            <div class="row un_item">
                <div class="item">
                    <label>Condición respecto al diagnóstico de infección por VIH*</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
            </div>
            <div class="row dos_items">
                <div class="item">
                    <label>Fecha del diagnóstico de la gestación reportada</label>
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
                    <label>Fecha de realización de tamizaje para VIH en el primer trimestre de la gestación</label>
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
            </div>
            <div class="row dos_items">
                <div class="item">
                    <label>Fecha de realización de tamizaje para VIH en el segundo trimestre de la gestación*</label>
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
                    <label>Fecha de realización de tamizaje para VIH en el tercer trimestre de la gestación*</label>
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
            </div>
            <div class="row dos_items">
                <div class="item">
                    <label>¿Mujer con diagnóstico de VIH en cualquier momento de la gestación reportada?</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
                <div class="item">
                    <label>Edad gestacional al momento del diagnóstico de VIH durante la gestación reportada.</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
            </div>
            <div class="row dos_items">
                <div class="item">
                    <label>¿Recibió tratamiento para VIH durante la gestación reportada?</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
                <div class="item">
                    <label>Edad gestacional al inicio de la terapia antirretroviral (TAR) en la gestación reportada.</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
            </div>
            <div class="row dos_items">
                <div class="item">
                    <label>Terapia antirretroviral (TAR) durante el intraparto en la gestación reportada.</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
                <div class="item">
                    <label>Resultado de la gestación reportada en gestantes con VIH</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
            </div>
            <div class="row dos_items">
                <div class="item">
                    <label>Fecha de culminación de la gestación reportada en gestantes con VIH.</label>
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
                    <label>Gestante con VIH que no ha culminado la gestación.</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
            </div>
            <div class="row dos_items">
                <div class="item">
                    <label>Supresión farmacológica de la lactancia materna en gestantes con VIH.</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
                <div class="item">
                    <label>Tipo de identificación del recién nacido vivo expuesto al VIH resultado de la gestación reportada.</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
            </div>
            <div class="row dos_items">
                <div class="item">
                    <label>Número de identificación del recién nacido vivo expuesto al VIH resultado de la gestación reportada</label>
                    <q-select rounded standout v-model="model" :options="options" label="Seleccionar" />
                </div>
                <div class="item">
                    <label>Tipo de identificación del recién nacido vivo expuesto al VIH resultado de la gestación reportada.</label>
                      <q-input
                      rounded
                      standout
                      v-model="segundo_nombre"
                      lazy-rules
                      >
                    </q-input>
                </div>
                <div class="row actions cien q-mt-xl">
                  <div class="item align_right cien">
                    <q-btn rounded class="azul_boton btn_crear" @click="irCrearPaciente" text-color="white" icon-right="save" label="Guardar" />
                  </div>
                  <div class="item cien align_right cien q-mt-md">
                    <q-btn rounded class="bg_botn_white_border_green btn_crear q-mr-md" @click="irCrearPaciente" text-color="white" icon="chevron_left" label="Atrás" />
                    <q-btn rounded class="bg_botn_verde btn_crear" @click="irCrearPaciente" text-color="white" icon-right="chevron_right" label="Siguiente" />
                  </div>
                </div>
            </div>
        </div>
        <div class="w_25">
            <img class="provicional" alt="logo" src="../../assets/simulapdf.png"/>
        </div>
    </div>
</template>

<script>

export default {
  name: 'FormularioVih'
}
</script>
