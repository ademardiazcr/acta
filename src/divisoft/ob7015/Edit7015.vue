<!-- =========================================================================================
  MODELO VUE.JS  VUAX DIVISOFT  2020
   Generado por Divisoft Code Robot 06-11-2020:16:31:29   
    AUTOR: ADEMAR DIAZ 
    MODELO DE EDICION DE TABLAS CONFIGURABLE 
    CREADO POR  DIVISOFT SOA 2020
     SECCION HTML DEL COMPONENTE EDIT 
========================================================================================== -->  


<script>
import {
    mapState
} from "vuex"; //, mapMutations, mapActions
import {
    eventBus
} from "@/main"; // para que se hablen los componentes

// SI ES POR PASOS

import {
    FormWizard,
    TabContent
} from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

// mensajes de error personalizados
import {
    Validator
} from "vee-validate";
import * as datos7015 from "./js/divi7015.js";
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";

import BaseString from "@/divisoft/inputComponent/BaseString.vue";
import BaseListas from "@/divisoft/inputComponent/BaseListas.vue";
import BaseDate from "@/divisoft/inputComponent/BaseDate.vue";
import BaseN from "@/divisoft/inputComponent/BaseinputDecimal.vue";

import BaseDocumento from "@/divisoft/ob7017/Edit7017.vue";
import CuadriImagen from "@/divisoft/ob7018/Edit7018.vue";
import BaseBlog from "@/divisoft/ob7016/Edit7016.vue";

const dict = datos7015.mensajesValidacion;
// registra los mensajes personalizados
Validator.localize("en", dict);

export default {
    name: "Autocomplete",
    components: {
        FormWizard,
        TabContent,
        Prism,
        BaseString,
        BaseListas,
        BaseDate,
        BaseN,
        BaseDocumento,
        BaseBlog,
        CuadriImagen
    },
    
    props: {
        compania: {
            type: String,
            required: true,
        },
        pedido: {
            type: Number,
            required: false,
        },
        DML: {
            type: String,
            required: false,
        },

    },

    beforeMount() {
        //DEFINE COLUMNAS DE LA TABLA
        this.defaultdatos = datos7015.datosDefault;
        this.$store.commit("MUTSETDATOSDEFAULT", this.defaultdatos);
    },

    created() {

      
        // cargo la llave
        this.COD_COMPANIA = this.compania;
        this.NUM_PEDIDO = this.pedido;
     
        if (this.DML == "I") {

            let defaultdatos = datos7015.datosDefault;
            defaultdatos.IND_ESTADO = "1";
            defaultdatos.NUM_PEDIDO = this.NUM_PEDIDO;
            defaultdatos.FECHA = new Date();

            this.cargaRegistroActual(defaultdatos);

            try {

                if (this.getRol("VISITANTE") >= 0) {
                    this.isReadOnly = false;
                }

                if (

                    this.getRol(this.rolMensajero) >= 0 ||
                    this.getRol(this.rolCliente) >= 0 ||
                    this.getRol(this.rolAdmin) >= 0) {
                    
                    this.cargaPerfil(this.getProfile);
                    this.isReadOnly = true;
                }

            } catch (error) {
                this.navMenuItems = tipoMenu.menuVisitante;
            }

        } else
        if (this.NUM_PEDIDO > 0)
           {
            this.isReadOnly = true; 
            this.buscarRegistro();
           }

    },

    beforeDestroy: function () {
        //Crea un bus  OYENTE
        // SI HAY PROMPT 
        eventBus.$off("datosprompt");
        eventBus.$off("cargaRegistro");
    },

    data() {
        return {
            activaAlmacenado: false,
            messageError: "Sin Errores",
            respuestaProc: [],
            ultimoObjeto: 0,
            indicadorDML: "I",
            isReadOnly: false,
            isReadOnly2: false,

            counterDanger: false,
            comentario: "",

            //este debe venir desde bd
            usersCommented: [{
                comment: "blockiness pandemy metaxylene speckle coppy",
                author: "Jeanie Bulgrin",
                img: require("@/assets/images/portrait/small/avatar-s-8.jpg"),
                time: "Mon Dec 10 2018 08:55:00 GMT+0000 (GMT)",
            }, ],

            // CMS CMS CMS CMS          DatOS cms Para manejo de EXPEDIENTE DIGITAL  MULTIMEDIA Debe venir en una funcion de Datos con la consulta
            // CMSDATA7015: datos7015.CMSDATA7015,  PROPSDataCMS: divilib.DataCMS,  tituloAvatar: "Para Cambiar Avatar",  verDocumento1: false,

            configFechaHoraPicker2: divilib.FechaHoraformat,
            configHoraPicker2: divilib.Horaformat,
            valorAutocomplete: "",
            // CAMPOS DE LISTA  SI LOS HAHAY
            //IND_ESTADO
            LISTA_ESTADO: datos7015.LISTA_ESTADO,
            //////////////// CAMPOS DEL MANTENIMIENTO  LLAMAR A UN DEFAULT

            COD_COMPANIA: "100003",
            NUM_PEDIDO: 0,
            COD_CLIENTE: 0,
            FECHA: "0",
            TIP_COBRO: "0",
            DETALLE: "0",
            NOM_PROVEEDOR: "0",
            ESPECIFICACIONES: "0",
            IND_ESTADO: "0",
            NOM_CLIENTE: "0",
            DIR_EMAIL: "0",
            NUM_TELEFONO: 0,
            NUM_CELULAR: 0,
            //Datos  Iniciales
            actualizo: false,
            iniciado: false,
            defaultdatos: [],
            // SI No hay lista de Valores puede quitarse
            indicadorPrompt: 0,
            rowselectionprompt: [],
            datosPrompt: [{
                titulo: ""
            }],

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
            

            
            rolCliente: "TAVO_CLIENTE",
            rolMensajero: "TAVO_MENSAJERIA",
            rolAdmin: "TAVO_ADMIN",

        };
    },

    watch: {
        // SI HAY PROMPT
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

        rowsForm: function () {

            if (this.rowsForm)

                if (this.rowsForm[0].NUM_PEDIDO > 0)
                    this.cargaRegistroActual(this.rowsForm[0]);

        },
    },

    computed: {

        ...mapState([
            "dsoaModel",
            "DataCMS",
            "rowsForm",
            "DataCMS",
            "tableKey",
            "urlOrigen",
            // "indicadorDML",
            "lastBdmsage",
            "estadoProcesando",
            "selectQuery",
        ]),
         getProfile() {
            return this.$store.state.dsoaLogin.profile[0];
        },

        CMSDataRespuesta() {
            return this.$store.state.DataCMS;
        },
        getAction: {
            get() {
                return this.indicadorDML == "U" ?
                    "Editando Registro 2" :
                    "Insertando Registro";
            },
        },
    },

    methods: {

        getRol(nombreRol) {
        //    alert(nombreRol + this.$store.getters["dsoaLogin/buscaRol"](nombreRol));
            return this.$store.getters["dsoaLogin/buscaRol"](nombreRol);
        },
        // PARA LLAMAR UNA RUTA EXTERNA CON UN FORMULARIO
        llamaRutaVue(routename) {
            this.$router.push(routename);
            // this.$parent.activaEditSimple = false;
        },

        // METODO QUE CARGA LOS DATOS DEL FILTRO PARA LOS PROMPT
        // SI HAY PROMPT

        // FIN DE PROMPT  xxxxxxxxx

        // FIN DE  METODO QUE CARGA LOS DATOS DEL FILTRO PARA LOS PROMPT

        regresa() {
            this.$parent.activaEdit = false;
        },

        //FORMULARIO

        validateStep1() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-1").then((result) => {
                    if (result) {
                        resolve(true);
                    } else {
                        reject("correct all values");
                    }
                });
            });
        },
        validateStep2() {
            return new Promise((resolve, reject) => {
                this.$validator.validateAll("step-2").then((result) => {
                    if (result) {
                        resolve(true);
                    } else {
                        reject("correct all values");
                    }
                });
            });
        },

        // FIN DE VALIDA PASOS ESTO SI ES UN FORMULARIO DE PASOS

        //TRAE DATOS PARA MOSTRAR EN FORMULARIO

        formSubmitted: function () {
          if (!this.isReadOnly2)
            this.$validator.validateAll().then((result) => {
                if (result) this.GuardaRegistro();
                else reject("Valores invalidos");
            });
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
                    OBJECTID: "7015",
                    CREDENCIAL: this.getProfile.Credencial,
                    USERNAME: this.getProfile.Username,
                    REGISTROSXPAGINA: "1",
                    PAGINA: "1",
                };
                this.headertxt = divilib.GetHeaderString(header);

                // agrego las filas(EDIT)
                let filas = datos7015.addFilasToSave(this.$data, this.CMSDataRespuesta);

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
                    ObjectId: "7015",
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

        // CARGA DE una variable Bd a DOM
        cargaRegistroActual: function (datosRow) {

            this.COD_COMPANIA = datosRow.COD_COMPANIA;
            this.NUM_PEDIDO = parseInt(datosRow.NUM_PEDIDO);
            this.COD_CLIENTE = datosRow.COD_CLIENTE; //parseInt(datosRow.COD_CLIENTE);
            this.FECHA = datosRow.FECHA;
            this.TIP_COBRO = datosRow.TIP_COBRO;
            this.DETALLE = datosRow.DETALLE;
            this.NOM_PROVEEDOR = datosRow.NOM_PROVEEDOR;
            this.ESPECIFICACIONES = datosRow.ESPECIFICACIONES;
            this.IND_ESTADO = datosRow.IND_ESTADO;
            this.NOM_CLIENTE = datosRow.NOM_CLIENTE;
            this.DIR_EMAIL = datosRow.DIR_EMAIL;
            this.NUM_TELEFONO = datosRow.NUM_TELEFONO;
            this.NUM_CELULAR = datosRow.NUM_CELULAR;

            if (this.IND_ESTADO>1)
              this.isReadOnly2=true;

             if (this.DML == "I")
               this.isReadOnly2=false;


            //LLAVES  Gen_CAMPOS_GRID(1)
            let dinamicKey = [{
                COD_COMPANIA: datosRow.COD_COMPANIA,
                NUM_PEDIDO: parseInt(datosRow.NUM_PEDIDO),
            }, ];

        }, //FIN DE CARGAREGISTROACTUAL   //cargaRegistroActual funcion completa

        /// busca dato para el edit
        buscarRegistro: function (dinamicKey) {
           
          

            var header = {
                MODO: "JJ",
                OBJECTID: "7015",
                CREDENCIAL: this.getProfile.Credencial,
                USERNAME: this.getProfile.Username,
                REGISTROSXPAGINA: "200",
                PAGINA: "1",
                ORDERBY: "",
            };
            
            this.headertxt = divilib.GetHeaderString(header);

            var origenUrl = "O";
            // agrego las filas
   
            var filas = datos7015.getMisFilas();

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
            var pedido = {
                dml: "JJ", //SJ
                Credencial: this.getProfile.Credencial,
                ObjectId: "7015",
                formatoenvio: "N",
                formatorecibe: "N",
                indicador: "2", //select
                origenUrl: origenUrl,
            };

             
            if (this.NUM_PEDIDO>0)
            {
           
               this.$store.dispatch("acDsoa", pedido);
             }  

            this.datosJson = {
                indicadorDML: "U",
                locallaststrParametros: this.locallaststrParametros,
            };
            this.$parent.indicadorDML = "U";
            this.$parent.activaEdit = true; // enciende los datos de Edicion
        },

        ///////////////////////// CODIGO GENERICO PARA BUSQUEDAS RAPIDAS  ///////////////////////////
        buscarGenerico: function (objectID, dinamicKey, nombreFila, FormatoFila) {
            // METODO GENERICO  PARA PROMPTS Y OTROS
            var pedido = {
                dml: "JJ", //SJ
                Credencial: this.getProfile.Credencial,
                ObjectId: objectID,
                formatoenvio: "N",
                formatorecibe: "N",
                indicador: "8", //select
                origenUrl: this.origenUrl,
                FilaRecupera: nombreFila,
                FormatoFila: FormatoFila,
                parametros: dinamicKey,
            };
            this.$store.dispatch("acQueryGenerico", pedido);
        },

        //carga perfil
        cargaPerfil: function (datosRow) {

 
            this.COD_COMPANIA = datosRow.Empresa;
            this.COD_CLIENTE = datosRow.num_user; //parseInt(datosRow.num_user);
            this.NOM_CLIENTE = datosRow.Nombre;
            this.DIR_EMAIL = datosRow.Email;
            this.NUM_CELULAR = datosRow.Celular;
        }, //FIN DE CARGAREGISTROACTUAL   //cargaRegistroActual funcion completa

        //// METODOS DE CMS SOLO SI LLEVA DOCUMENTOS EL MANTENIMIENTO
        // SI HAY UN DOCUMENTO MULTIMEDIA EN LA LISTA
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


<template>
<vx-card>
    <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" shape="circle" finishButtonText="Guardar" nextButtonText="Siguiente" backButtonText="Atrás" @on-complete="formSubmitted">
        <tab-content title="Datos Personales" class="mb-5" icon="feather icon-user" :before-change="validateStep1">
            <form data-vv-scope="step-1">

                <!-- tab 1 datos personales{{rowsForm}}
                {{getProfile}} -->
                
                <div class="vx-row">
                    <!--div class="vx-col mt-6 md:w-1/2 w-full">
              <BaseString
                tipo="S"
                v-model="COD_COMPANIA"
                label="Cod Compania"
                :readOnly="this.isReadOnly"
                data-vv-name="COD_COMPANIA"
              />
              <span class="text-danger">{{
                errors.first("step-1.COD_COMPANIA")
              }}</span>
            </div-->

                    <div class="vx-col mt-6 md:w-1/2 w-full">

                        <BaseString tipo="S" v-model="NUM_PEDIDO" label="Num Pedido" :readOnly="this.isReadOnly" data-vv-name="COD_CLIENTE" />

                        <span class="text-danger">{{
                errors.first("step-1.NUM_PEDIDO")
              }}</span>
                    </div>

                    <div class="vx-col mt-6 md:w-1/2 w-full">
                        <BaseString tipo="S" v-model="COD_CLIENTE" label="Cod Cliente" :readOnly="this.isReadOnly" data-vv-name="COD_CLIENTE" />
                        <span class="text-danger">{{
                errors.first("step-1.COD_CLIENTE")
              }}</span>
                    </div>

                    <div class="vx-col mt-6 md:w-1/2 w-full">
                        <BaseString tipo="S" v-model="NOM_CLIENTE" label="Nom Cliente" data-vv-name="NOM_CLIENTE" :readOnly="this.isReadOnly" />
                        <span class="text-danger">{{
                errors.first("step-1.NOM_CLIENTE")
              }}</span>
                    </div>

                    <div class="vx-col mt-6 md:w-1/2 w-full">
                        <BaseString tipo="S" v-model="DIR_EMAIL" label="Dir Email" data-vv-name="DIR_EMAIL" :readOnly="this.isReadOnly" />
                        <span class="text-danger">{{
                errors.first("step-1.DIR_EMAIL")
              }}</span>
                    </div>

                    <div class="vx-col mt-6 md:w-1/2 w-full">
                        <BaseString tipo="S" v-model="NUM_TELEFONO" label="Num Telefono" data-vv-name="NUM_TELEFONO" :readOnly="this.isReadOnly" />
                        <span class="text-danger">{{
                errors.first("step-1.NUM_TELEFONO")
              }}</span>
                    </div>

                    <div class="vx-col mt-6 md:w-1/2 w-full">
                        <BaseString tipo="S" v-model="NUM_CELULAR" label="Num Celular" data-vv-name="NUM_CELULAR" :readOnly="this.isReadOnly" />
                        <span class="text-danger">{{
                errors.first("step-1.NUM_CELULAR")
              }}</span>
                    </div>
                </div>
            </form>
        </tab-content>

        <!-- tab 2 datos pedido 
      {{ this.getProfile }}-->
        <tab-content title="Datos Pedido" class="mb-5" icon="feather icon-truck" :before-change="validateStep2">
            <form data-vv-scope="step-2">
                <div class="vx-row">
                    <div class="vx-col mt-6 md:w-1/2 w-full">
                        <BaseDate tipo="FH" v-validate="'required'" v-model="FECHA" label="Fecha" data-vv-name="FECHA" disabled="this.isReadOnly2" data-vv-scope="step-2" />
                        <span class="text-danger">{{
                errors.first("step-2.FECHA")
              }}</span>
                    </div>
                    

                    <div class="vx-col mt-6 md:w-1/2 w-full">
                        <BaseString tipo="S" v-model="DETALLE" label="Detalle" data-vv-name="DETALLE" :readOnly="this.isReadOnly2"/>
                        <span class="text-danger">{{
                errors.first("step-2.DETALLE")
              }}</span>
                    </div>

                    <div class="vx-col mt-6 md:w-1/2 w-full">
                        <BaseString tipo="S" v-model="NOM_PROVEEDOR" label="Nom Proveedor" data-vv-name="NOM_PROVEEDOR"  :readOnly="this.isReadOnly2"/>
                        <span class="text-danger">{{
                errors.first("step-2.NOM_PROVEEDOR")
              }}</span>
                    </div>

                    <div class="vx-col mt-6 md:w-1/2 w-full">
                    Especificaciones del Pedido
                        <textarea class="form-control rounded-0" v-model="ESPECIFICACIONES" label="Especificaciones" data-vv-name="ESPECIFICACIONES" :readOnly="this.isReadOnly2" />
                        <span class="text-danger">{{
                errors.first("step-2.ESPECIFICACIONES")
              }}</span>
                    </div>

                    <div class="vx-col mt-6 md:w-1/2 w-full">
                        <BaseListas label="Ind Estado" tipo="R" v-model="IND_ESTADO" name="IND_ESTADO" label-name="Ind Estado" :jsonlista="LISTA_ESTADO" :readOnly="this.isReadOnly2"/>
                    </div>
                </div>
            </form>
        </tab-content> 
    </form-wizard>
</vx-card>
</template>