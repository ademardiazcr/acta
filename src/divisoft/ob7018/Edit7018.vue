<!-- =========================================================================================
  MODELO VUE.JS  VUAX DIVISOFT  2020  
   Generado por Divisoft Code Robot 17-11-2020:20:41:59 
    AUTOR: ADEMAR DIAZ 
    MODELO DE EDICION DE TABLAS CONFIGURABLE 
    CREADO POR  DIVISOFT SOA 2020
     SECCION HTML DEL COMPONENTE EDIT 
========================================================================================== -->

<template>
<div class="vx-row">
    <!-- LATEST PHOTOS    v-if="pedido>0"   -->
    <vx-card title="Imágenes" class="mt-base" v-if="pedido>0">
        <!--{{ getRowsForm22}}
        TITULO DEL ENCABEZADO  DOCUMENTOS {{getRowsForm22}}  -->

        <vs-divider></vs-divider>
        <div class="chat-card-log">
            <component :is="scrollbarTag" ref="chatLogPS" class="scroll-area pt-6 px-6" :settings="settings" :key="$vs.rtl">
                <div class="vx-row pt-2">
                    <div class="vx-col w-1/2 sm:w-1/2 md:w-1/3 xl:1/4" v-for="(item, index) in getRowsForm22" :key="index">
                        <!--ruta-->
                        <img :src="item.RUTA.S" alt="latest-upload" class="rounded mb-4 user-latest-image responsive" />
                    </div>
                </div>
            </component>
        </div>
    </vx-card>
    <vx-card title="Imágenes" class="mt-base" v-else>
        SIN DOCUMENTOS PRESENTES
    </vx-card>
</div>
</template>

<script>
import {
    mapState
} from "vuex"; //, mapMutations, mapActions
import {
    eventBus
} from "@/main"; // para que se hablen los componentes

import VuePerfectScrollbar from "vue-perfect-scrollbar";

// mensajes de error personalizados
import {
    Validator
} from "vee-validate";
import * as datos7017 from "../ob7017/js/divi7017.js";
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";

//  CMS IMPORT PARA CARGAR Y VER ARCHIVOS
import UploadDefault from "@/divisoft/uploadFile/UploadDefault.vue";

import BaseString from "@/divisoft/inputComponent/BaseString.vue";
import BaseListas from "@/divisoft/inputComponent/BaseListas.vue";
import BaseDate from "@/divisoft/inputComponent/BaseDate.vue";
import BaseN from "@/divisoft/inputComponent/BaseinputDecimal.vue";

const dict = datos7017.mensajesValidacion;
// registra los mensajes personalizados
Validator.localize("en", dict);

export default {
    name: "Autocomplete",
    components: {
        VuePerfectScrollbar,

        Prism,
        //subir una imagen
        UploadDefault,

        BaseString,
        BaseListas,
        BaseDate,
        BaseN,
    },
    props: {
        compania: {
            type: String,
            required: true,
        },
        pedido: {
            type: Number,
            required: true,
        },
    },

    beforeMount() {
        //DEFINE COLUMNAS DE LA TABLA
        this.defaultdatos = datos7017.datosDefault;
        this.$store.commit("MUTSETDATOSDEFAULT", this.defaultdatos);
        this.$store.commit("MUTSETRESPUESTAFORM22", [{}]);
    },

    created() {

        this.COD_COMPANIA = this.compania;
        this.NUM_PEDIDO = this.pedido;
        this.buscarRegistro();
        // alert("create18"+this.pedido);

    },
    beforeDestroy: function () {
        //Crea un bus  OYENTE
        // SI HAY PROMPT

        eventBus.$off("cargaRegistroIMAGENES");
    },

    data() {
        return {
            indicadorDML: "I",
            ruta: [{
                "COD_COMPANIA": "100003",
                "NUM_PEDIDO": "1",
                "REFERENCIA": "100000037866",
                "RUTA": {
                    'DETALLE': 'undefined',
                    'EXTENSION': '.PNG',
                    'DOCUMENT_TYPE': 'image/png',
                    'B': 'http://tavocr.com/imagebank/0000000008/100000037866.webp',
                    'M': 'http://tavocr.com/imagebank/0000000008/100000037866ml.webp',
                    'S': 'http://tavocr.com/imagebank/0000000008/100000037866sl.webp'
                }
            }, {
                "COD_COMPANIA": "100003",
                "NUM_PEDIDO": "1",
                "REFERENCIA": "100000037869",
                "RUTA": {
                    'DETALLE': 'undefined',
                    'EXTENSION': '.PNG',
                    'DOCUMENT_TYPE': 'image/png',
                    'B': 'http://tavocr.com/imagebank/0000000008/100000037869.webp',
                    'M': 'http://tavocr.com/imagebank/0000000008/100000037869ml.webp',
                    'S': 'http://tavocr.com/imagebank/0000000008/100000037869sl.webp'
                }
            }],
            // CMS CMS CMS CMS          DatOS cms Para manejo de EXPEDIENTE DIGITAL  MULTIMEDIA Debe venir en una funcion de Datos con la consulta
            CMSDATA: datos7017.CMSDATA7017,
            PROPSDataCMS: divilib.DataCMS,
            tituloAvatar: "Subir Documentos",
            verDocumento1: false,
            activaUpload: false,

            //////////////// CAMPOS DEL MANTENIMIENTO  LLAMAR A UN DEFAULT

            COD_COMPANIA: "0",
            NUM_PEDIDO: 0,
            REFERENCIA: 0,

            //Datos  Iniciales
            defaultdatos: [],

            // SI No hay lista de Valores puede quitarse
            datosPrompt: [{
                titulo: "",
            }, ],

            origenUrl: "J",
            //scrollbar
            settings: {
                maxScrollbarLength: 60,
            },

            parametros: [],
            locallastheader: "", //guarda el ultimo header de este objeto
            locallaststrParametros: "", //guarda el ultimo  parametros de este objeto
            locallaststrFilas: "", //guarda el ultimo filas de este objeto
            paramtxt: "",
            filastxt: "",
            header: "",
        };
    },

    watch: {
        // SI HAY PROMPT
        //esta es la parte de atencion cuando se Ingresa el documento se sube a base DATOS
        ///XXXXXXXXX

        lastBdmsgcode: function () {
            if (this.lastBdmsgcode != 0) {
                this.$vs.notify({
                    title: "Servicio Restfull",
                    time: 6000,
                    text: this.lastDbmsg,
                    color: "warning",
                });
            }
        },

        rowsForm22: function () {
            //if (this.rowsForm[0].SECUENCIA_BLOG > "0") {}
            //       console.log("rowsform22" + this.rowsForm22[0]);
        },
    },

    computed: {
        ...mapState([
            "dsoaModel",
            "DataCMS", //aqui cae la respuesta de upload base datos
            //"rowsForm22",
        ]),

        getRowsForm22() {
            return this.$store.state.rowsForm22.slice().reverse();
        },

        getProfile() {
            return this.$store.state.dsoaLogin.profile[0];
        },

        CMSDataRespuesta() {
            return this.$store.state.DataCMS;
        },

        scrollbarTag() {
            return this.$store.getters.scrollbarTag;
        },
    },

    methods: {

        /// busca dato para el edit
        buscarRegistro: function (dinamicKey) {
            if (this.NUM_PEDIDO > 0) {
                var header = {
                    MODO: "JJ",
                    OBJECTID: "7017",
                    CREDENCIAL: this.getProfile.Credencial,
                    USERNAME: this.getProfile.Username,
                    REGISTROSXPAGINA: "200",
                    PAGINA: "1",
                    ORDERBY: "",
                };
                this.headertxt = divilib.GetHeaderString(header);

                var origenUrl = "O";
                // agrego las filas

                var filas = datos7017.getMisFilas();
                this.filastxt = divilib.filaArraytoStrintg(filas, "N");

                var parametros = [];
                var parametro1 = {
                    NOMBRE: "",
                    OPERADOR: "=",
                    VALOR1: "",
                    VALOR2: "",
                    CDATA: "0",
                };

                parametro1 = {
                    NOMBRE: 'COD_COMPANIA',
                    OPERADOR: "=",
                    VALOR1: this.COD_COMPANIA,
                    VALOR2: "",
                    CDATA: "0",
                };
                parametros.push(parametro1);

                parametro1 = {
                    NOMBRE: 'NUM_PEDIDO',
                    OPERADOR: "=",
                    VALOR1: this.NUM_PEDIDO,
                    VALOR2: "",
                    CDATA: "0",
                };
                parametros.push(parametro1);

                //entrega arreglo de parametros recibe texto de parametros
                this.paramtxt = divilib.paramArraytoStrintg(parametros);

                // cargo la peticion texto
                //bien
                var petTxt = {
                    header: this.headertxt,
                    parametros: this.paramtxt,
                    filas: this.filastxt,
                };
                this.$store.commit("MUTSETURL", "O");
                this.$store.commit("MUTSETPETICIONTXT", petTxt);

                var pedido22 = {
                    dml: "JJ", //SJ
                    Credencial: this.getProfile.Credencial,
                    ObjectId: "7017",
                    formatoenvio: "N",
                    formatorecibe: "N",
                    indicador: "22", //select
                    origenUrl: origenUrl,
                };

                //cambia a acDsoaPrueba // acDsoa
                console.log("documentos ", pedido22)

                this.$store.dispatch("acDsoa", pedido22);

                this.datosJson = {
                    indicadorDML: "U",
                    locallaststrParametros: this.locallaststrParametros,
                };

                this.$parent.activaEdit = true; // enciende los datos de Edicion
            }
        },
    }, // fin de  methods
};
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
    /deep/ .vs-sidebar--background {
        z-index: 52010;
    }

    /deep/ .vs-sidebar {
        z-index: 52010;
        width: 80%;
        max-width: 90vw;
    }
}
</style>
