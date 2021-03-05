<!-- =========================================================================================
  MODELO VUE.JS  VUAX DIVISOFT  2020  
   Generado por Divisoft Code Robot 17-11-2020:20:41:59 
    AUTOR: ADEMAR DIAZ 
    MODELO DE EDICION DE TABLAS CONFIGURABLE 
    CREADO POR  DIVISOFT SOA 2020
     SECCION HTML DEL COMPONENTE EDIT 
========================================================================================== -->

<template>
<vx-card :title="getAction">

    <!--   v-if="pedido>0"  TITULO DEL ENCABEZADO 
     {{CMSDataRespuesta}}
    
    bd {{DataCMS}}-->
    <vs-divider class="mb-0"></vs-divider>
    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6">
        <vx-input-group class="mb-base">
            <div class="vx-row">

                <div class="vx-col w-full mt-2" v-if="1==2" >
                    <span class="text-danger">Referencia</span>
                    <UploadEmbebed v-if="1==2"  tipoGuardado="15" :tituloUpload="tituloAvatar" @ActualizaDatos="ActualizaDatos" />

                    <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="uploadAvatar">
                        <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                        Referencia Documento:
                        <span class="ml-2 text-base text-primary">{{ REFERENCIA  }}</span>
                    </div>

                </div>

                <div class="vx-col w-full mt-2"    >
                    <span class="text-danger">Referencia</span>

                    <upload-default v-show="activaUpload"   :isSidebarActive="activaUpload" tipoGuardado="15" :tituloUpload="tituloAvatar" @ActualizaDatos="ActualizaDatos" @closeSidebar="activaUpload = false" />
                    <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="uploadAvatar">
                        <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                        <span class="ml-2 text-base text-primary">{{ REFERENCIA }}</span>
                    </div>
                </div>

            </div>
            <br />
            <button v-if="1==2" type="submit" class="btn btn-success" @click="GuardaRegistro()">
                Salvar Datos
            </button>
        </vx-input-group>
    </VuePerfectScrollbar>
</vx-card>
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
import * as datos7017 from "./js/divi7017.js";
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";
//  CMS IMPORT PARA CARGAR Y VER ARCHIVOS

import UploadDefault from "@/divisoft/uploadFile/UploadDefault.vue";
import UploadEmbebed from "@/divisoft/uploadFile/UploadEmbebed.vue";

import downloadDefault from "@/divisoft/downloadFile/dowloadImage.vue";

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

        UploadEmbebed,
        downloadDefault,
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
            type: String,
            required: true,
        },
    },

    beforeMount() {
        //DEFINE COLUMNAS DE LA TABLA
        this.defaultdatos = datos7017.datosDefault;
        this.$store.commit("MUTSETDATOSDEFAULT", this.defaultdatos);
    },

    created() {

        // DESTRUYE EL CARADOR DE  DOCUMENTOS
        let defaulCMS = [];
        this.$store.commit('MUTSETDATA', defaulCMS);

        this.COD_COMPANIA = this.compania;
        this.NUM_PEDIDO = this.pedido;

        if (parseInt(this.NUM_PEDIDO) > 0)
            this.NUM_PEDIDO = this.pedido;

    },
    beforeDestroy: function () {

        eventBus.$off("cargaDoc");

        //eventBus.$off("cargaRegistro");
    },

    watch: {
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

        rowsForm: function () {
            //if (this.rowsForm[0].COD_COMPANIA > "0")
            //this.cargaRegistroActual(this.rowsForm[0]);
        },
    },

    data() {
        return {
            rutaRaizCMS: process.env.VUE_APP_RAIZURLCMS,
            activaAlmacenado: false,
            messageError: "Sin Errores",
            respuestaProc: [],
            ultimoObjeto: 0,
            indicadorDML: "I",

            // CMS CMS CMS CMS          DatOS cms Para manejo de EXPEDIENTE DIGITAL  MULTIMEDIA Debe venir en una funcion de Datos con la consulta
            CMSDATA: datos7017.CMSDATA7017,
            PROPSDataCMS: divilib.DataCMS,
            tituloAvatar: "Subir Documentos",
            verDocumento1: false,
            activaUpload: false,
            // CMSDATA7017: datos7017.CMSDATA7017,  PROPSDataCMS: divilib.DataCMS,  tituloAvatar: "Para Cambiar Avatar",  verDocumento1: false,

            configFechaHoraPicker2: divilib.FechaHoraformat,
            configHoraPicker2: divilib.Horaformat,
            valorAutocomplete: "",
            // CAMPOS DE LISTA  SI LOS HAHAY

            userLatestPhotos: [],
            //////////////// CAMPOS DEL MANTENIMIENTO  LLAMAR A UN DEFAULT

            CMSDataRespuesta: [],
            COD_COMPANIA: "0",
            NUM_PEDIDO: 0,
            REFERENCIA: 0,
            FECHA_ADICION: "0",
            //Datos  Iniciales
            actualizo: false,
            iniciado: false,
            defaultdatos: [],
            // SI No hay lista de Valores puede quitarse
            indicadorPrompt: 0,
            rowselectionprompt: [],
            datosPrompt: [{
                titulo: "",
            }, ],

            //Formulario
            counterDanger: false,
            origenUrl: "J",
            activaPrompt: false,
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

    computed: {
        ...mapState([
            "dsoaModel",
            //"DataCMS", //aqui cae la respuesta de upload base datos
            "rowsForm",
            "tableKey",
            "urlOrigen",
            "CMSImagen",
            "lastBdmsage",
            "estadoProcesando",
            "selectQuery",
        ]),
        getProfile() {
            return this.$store.state.dsoaLogin.profile[0];
        },

        getAction: {
            get() {
                return this.indicadorDML == "U" ?
                    "Editar Documentos" :
                    "Agregar Documentos";
            },
        },
    },

    methods: {

        ActualizaDatos(CMSDataRespuesta) {
            //alert("actualiza Datos ");
            if (this.NUM_PEDIDO > 0) {
                this.CMSDataRespuesta = CMSDataRespuesta;

                // alert(CMSDataRespuesta.Referencia)
                // si no fallo  graba los datos
                if (CMSDataRespuesta.codigoerror == "0") {
                    this.REFERENCIA = CMSDataRespuesta.Referencia;

                    if (this.REFERENCIA > "0") {

                        this.indicadorDML = "I";
                        this.COD_COMPANIA = this.compania;
                        this.NUM_PEDIDO = this.pedido;
                        // GUARDA EL REGISTRO EN BASE DATOS

                        this.GuardaRegistro();

                        //AGREGA EL VISOR 

                        this.agregarImage();
                    } else {
                        alert("Referencia de Documento No se pudo obtener ")
                    }

                } else {
                    alert("INDEXANDO DOCUMENTO" + this.CMSDataRespuesta.deserror)
                }
            } else {
                alert("No hay Documento  a Cargar " + this.REFERENCIA)
            }

        },

        // PARA LLAMAR UNA RUTA EXTERNA CON UN FORMULARIO
        llamaRutaVue(routename) {
            this.$router.push(routename);
            // this.$parent.activaEditSimple = false;
        },

        /////////// GUARDA DATOS GUARDA DATOS  GUARDA DATOS  GUARDA DATOS   ////////////
        GuardaRegistro: function () {
            if (
                this.indicadorDML == "I" ||
                this.indicadorDML == "U" ||
                this.indicadorDML == "D"
            ) {
                //HEADER
                var header = {
                    MODO: this.indicadorDML,
                    OBJECTID: "7017",
                    CREDENCIAL: this.getProfile.Credencial,
                    USERNAME: this.getProfile.Username,
                    REGISTROSXPAGINA: "1",
                    PAGINA: "1",
                };
                this.headertxt = divilib.GetHeaderString(header);

                // agrego las filas(EDIT)

                let filas = datos7017.addFilasToSave(this.$data, this.CMSDataRespuesta);

                this.filastxt = divilib.filaArraytoStrintg(filas, "S");
                this.filastxt = this.filastxt.replaceAll("undefined", "");

                this.paramtxt = " <Param><ParamItem/></Param>";
                // cargo la peticion texto
                var petTxt = {
                    header: this.headertxt,
                    parametros: this.paramtxt,
                    filas: this.filastxt,
                };

                this.$store.commit("MUTSETURL", "O"); //indUrl
                this.$store.commit("MUTSETPETICIONTXT", petTxt);

                var pedido = {
                    dml: this.indicadorDML,
                    Credencial: this.getProfile.Credencial,
                    ObjectId: "7017",
                    formatoenvio: "N",
                    formatorecibe: "N",
                    indicador: "3", // CRUD
                    origenUrl: this.origenUrl,
                };

                //cambia a acDsoaPrueba // acDsoa
                this.$store.dispatch("acDsoa", pedido);

                this.$parent.activaEdit = false;
            } else alert(" Crud No presente");
        }, // fin de  metodo

        agregarImage: function () {
            // METODO GENERICO  PARA PROMPTS Y OTROS

            var pedido = {
                COD_COMPANIA: this.COD_COMPANIA,
                NUM_PEDIDO: this.NUM_PEDIDO,
                REFERENCIA: this.CMSDataRespuesta.Referencia,
                RUTA: {
                    DETALLE: "undefined",

                    B: this.rutaRaizCMS + "/imagebank/" + this.CMSDataRespuesta.Lote + "/" + this.CMSDataRespuesta.Referencia + ".webp",
                    M: this.rutaRaizCMS + "/imagebank/" + this.CMSDataRespuesta.Lote + "/" + this.CMSDataRespuesta.Referencia + "ml.webp",
                    S: this.rutaRaizCMS + "/imagebank/" + this.CMSDataRespuesta.Lote + "/" + this.CMSDataRespuesta.Referencia + "sl.webp",
                },
            };

            this.$store.commit("MUTFORM22", pedido);
        },

        uploadAvatar() {

            if (this.CMSDATA[0].EntidadCodigo > 0 && this.NUM_PEDIDO > 0) {
                if (this.CMSDATA[0].NumNivel > 0) {
                    this.activaUpload = true;

                    let respuestaCMS = [{
                        EntidadCodigo: this.CMSDATA[0].EntidadCodigo,
                        Referencia: 0,
                        LlaveExterna: this.CMSDATA[0].LlaveExterna,
                        NumNivel: this.CMSDATA[0].NumNivel,
                        NumDoc: this.CMSDATA[0].NumDoc,
                    }, ];

                    eventBus.$emit("cargaDocUpload", respuestaCMS);

                } else
                    alert(" No hay Nivel o Tag a Agregar Documento");
            } else
                alert(" No hay entidad o Pedido " + this.CMSDATA[0].EntidadCodigo + "   " + this.NUM_PEDIDO);

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
