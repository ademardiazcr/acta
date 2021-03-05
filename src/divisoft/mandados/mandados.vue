<!-- =========================================================================================
    File Name: WorkTabTareas.vue
    Description: Muestra las tareas de cada mensajero
========================================================================================== -->

<template>
<div>
    <h3 color="red"> Pedido: {{GNUM_PEDIDO}} Nombre: {{GNOMBRE}} </h3>

    <vx-card :title="getConts2.displayName">
        <vs-divider class="d-theme-border-grey-light m-0" />

        <vs-tabs alignment="fixed" :color="colorx" v-model="tabprincial">

            <div class="vx-row">

                <div class="vx-col md:w  w-full">

                    <vs-tab label="Lista de Pedios" class="m-6" @click="
            colorx = '#8B0000';
            editRecord($event); 
          ">
                        <div class="">
                            <grid7015 :currentTab="CurrentTab" :pedido="GNUM_PEDIDO" ></grid7015>
                        </div>

                    </vs-tab>
                </div>
                <div class="vx-col md:w  w-full">
                    <vs-tab label="Datos del Solicitante" icon="account_circle" class="m-6" @click="
            colorx = '#8B0000';
            editRecord($event);
          " v-show="GNUM_PEDIDO>0 ||DML=='I'">

                        <div class="">
                            <edit7015 :currentTab="CurrentTab" :compania="GCOD_COMPANIA" :pedido="GNUM_PEDIDO" :DML="DML"></edit7015>
                        </div>
                    </vs-tab>
                </div>
                <div class="vx-col md:w  w-full">
                    <vs-tab label="Agregar Documentos" icon="account_circle" class="m-6" @click="
            colorx = '#FFA500';
            editRecord($event);
          " v-show="GNUM_PEDIDO>0  && DML=='U'">
                        <div class="">
                            <BaseDocumento :currentTab="CurrentTab" :compania="GCOD_COMPANIA" :pedido="GNUM_PEDIDO" />

                        </div>
                    </vs-tab>
                </div>
                <div class="vx-col md:w  w-full">
                    <vs-tab label="Documentos Adjuntos" class="m-6" @click="
            colorx = '#FFA500';
            editRecord($event);
          " v-show="GNUM_PEDIDO>0  && DML=='U'">
                        <div class="">
                            <CuadriImagen :currentTab="CurrentTab" :compania="GCOD_COMPANIA" :pedido="GNUM_PEDIDO" />

                        </div>
                    </vs-tab>
                </div>
                <div class="vx-col md:w  w-full">
                    <vs-tab label="Blog sobre el Pedido" class="m-4" id=4 @click="
            colorx = '#FFA500';
            editRecord($event);
          " v-show="GNUM_PEDIDO>0  && DML=='U'">
                        <div class="">
                            <BaseBlog :currentTab="CurrentTab" :compania="GCOD_COMPANIA" :pedido="GNUM_PEDIDO" />
                        </div>
                    </vs-tab>
                </div>
            </div>
        </vs-tabs>
    </vx-card>
</div>
</template>

<script>
import VxTimeline from "@/components/timeline/VxTimeline.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

import {
    eventBus
} from "@/main"; // para que se hablen los componentes

import edit7015 from "@/divisoft/ob7015/Edit7015.vue";
import grid7015 from "@/divisoft/ob7015/grid7015.vue";

import BaseDocumento from "@/divisoft/ob7017/Edit7017.vue";
import CuadriImagen from "@/divisoft/ob7018/Edit7018.vue";
import BaseBlog from "@/divisoft/ob7016/Edit7016.vue";

export default { 

    components: {
        VxTimeline,
        VuePerfectScrollbar,
        edit7015,
        grid7015,
        BaseDocumento,
        BaseBlog,
        CuadriImagen
    },
    created() {
        eventBus.$on("metActualizaDatos", datos => {
            this.tabprincial = 1;
            try {
                this.GCOD_COMPANIA = datos[0].valor;
                this.GNUM_PEDIDO = datos[1].valor;
                this.DML = datos[2].valor;
                this.GNOMBRE = datos[3].valor + " - " + datos[4].valor;
            } catch (error) {

            }

        })
         this.GNUM_PEDIDO=this.$route.params.pedido;

         if (this.$route.params.pedido>0)
          {
           this.tabprincial=0;
           this.tabprincial=1;
          }
           
           
    },

    mounted() {
        // busca si el parametro viene cargado y llama al edit

        
    },

    methods: {
        editRecord(event) {
            console.log(event.srcElement.outerText);
            this.CurrentTab = event.srcElement.outerText;

        }
    },

    computed: {
        getConts2() {
            return "ademar"
        },
        scrollbarTag() {
            return this.$store.getters.scrollbarTag;
        },
    },

    data() {
        return {

            CurrentTab: "",
            DML: 'U',
            tabprincial: 0,

            GNUM_PEDIDO: 0,
            GCOD_COMPANIA: '100003',
            GNOMBRE: "",
            //scrollbar
            settings: {
                maxScrollbarLength: 100,
            },
            activeChatUser: "118",
            colorx: "#8B0000",

            active_tab: 0,
            tabs: [{
                    index: 0,
                    name: "tab1",
                    router: ""
                },
                {
                    index: 1,
                    name: "tab2"
                },
                {
                    index: 2,
                    name: "tab3"
                },
            ],
        };
    },
};
</script>
