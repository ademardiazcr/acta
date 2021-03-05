<!-- =========================================================================================
  MODELO VUE.JS  VUAX DIVISOFT  2020  
   Generado por Divisoft Code Robot 17-11-2020:17:25:40 
    AUTOR: ADEMAR DIAZ 
    MODELO DE EDICION DE TABLAS CONFIGURABLE 
    CREADO POR  DIVISOFT SOA 2020
     SECCION HTML DEL COMPONENTE EDIT 
========================================================================================== -->
<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full lg:w-1/2">
        <vx-card title="Agregar Comentario">
          <!-- TITULO DEL ENCABEZADO 
          {{getRowsForm21}}-->
          {{ COD_COMPANIA }}
          {{ NUM_PEDIDO }}
          <vs-divider></vs-divider>
          <vx-card v-if="NUM_PEDIDO != 0" class="mt-4">
            <vs-textarea
              class="mb-2"
              counter="4000"
              label="Comentario"
              :counter-warning.sync="counterDanger"
              v-model="TEXTO_BLOG"
            />
            <vs-button size="small" @click="GuardaRegistro()"
              >Publicar</vs-button
            >
          </vx-card>
        </vx-card>
      </div>
      <div class="vx-col w-full lg:w-1/2">
        <vx-card title="Publicaciones">
          <!-- TITULO DEL ENCABEZADO -->
          <vs-divider></vs-divider>
          <div class="chat-card-log">
            <component
              :is="scrollbarTag"
              ref="chatLogPS"
              class="scroll-area pt-6 px-6"
              :settings="settings"
              :key="$vs.rtl"
            >
              <ul ref="chatLog" class="mt-2">
                <li
                  v-for="(comentario, index) in getRowsForm21"
                  :key="index"
                  class="commented-user flex items-center mb-4"
                >
                  <div>
                    <div class="flex items-center">
                      <div class="mr-3">
                        <vs-avatar
                          class="m-0"
                          :src= comentario.AVATAR
                          size="30px"
                        ></vs-avatar>
                      </div>
                      <div class="leading-tight">
                        <p class="m-0 font-semibold text-justify">
                          {{ comentario.ID_USUARIO }}
                        </p>
                        <p class="text-xs text-justify">{{comentario.FECHA_HORA}}</p>
                      </div>
                    </div>
                    <div class="leading-tight">
                      <p class="ml-12  post-content">
                        {{ comentario.TEXTO_BLOG }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </component>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState } from "vuex"; //, mapMutations, mapActions
import { eventBus } from "@/main"; // para que se hablen los componentes

import VuePerfectScrollbar from "vue-perfect-scrollbar";

// mensajes de error personalizados
import { Validator } from "vee-validate";
import * as datos7016 from "./js/divi7016.js";
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";

import BaseString from "@/divisoft/inputComponent/BaseString.vue";
import BaseListas from "@/divisoft/inputComponent/BaseListas.vue";
import BaseDate from "@/divisoft/inputComponent/BaseDate.vue";
import BaseN from "@/divisoft/inputComponent/BaseinputDecimal.vue";


const dict = datos7016.mensajesValidacion;
// registra los mensajes personalizados
Validator.localize("en", dict);

export default {
  name: "Autocomplete",
  components: {
    VuePerfectScrollbar,
    Prism,
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
  mounted() {
    //funcionamiento scrollbar
  const scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS;
   scroll_el.scrollTop = this.$refs.chatLog.scrollHeight;
  },

  beforeMount() {
    //DEFINE COLUMNAS DE LA TABLA
    this.defaultdatos = datos7016.datosDefault;
    this.$store.commit("MUTSETDATOSDEFAULT", this.defaultdatos);
  },

  created() {

   // alert("create16");

     

      this.COD_COMPANIA = this.compania;
      this.NUM_PEDIDO = this.pedido;
      if (parseInt(this.NUM_PEDIDO)>0)      
          this.buscarRegistro();
    
    
  },
   

  data() {
    return {
 
 
      indicadorDML: "I",

      COD_COMPANIA: "0",
      NUM_PEDIDO: 0,
      ID_USUARIO: "",
      TEXTO_BLOG: "",
      FECHA_HORA: "",
      AVATAR: "",

      //Datos  Iniciales
      actualizo: false,
      iniciado: false,
      defaultdatos: [],

      // SI No hay lista de Valores puede quitarse
      indicadorPrompt: 0,
      rowselectionprompt: [],

      //Formulario
      counterDanger: false,
      origenUrl: "J",
      activaPrompt: false,
      //scrollbar
      settings: {
        maxScrollbarLength: 200,
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
    lastBdmsgcode: function() {
      if (this.lastBdmsgcode != 0) {
        this.$vs.notify({
          title: "Servicio Restfull",
          time: 6000,
          text: this.lastDbmsg,
          color: "warning",
        });
      }
    },

    rowsForm21: function() {
      //if (this.rowsForm[0].SECUENCIA_BLOG > "0") {}
      console.log("rowsform21" + JSON.stringify(this.rowsForm21[0]));
    },
  },

  computed: {
    ...mapState([
      "dsoaModel",
      "DataCMS",
     // "rowsForm21",
      "DataCMS",
      "tableKey",
      "urlOrigen",
      // "indicadorDML",
      "lastBdmsage",
      "estadoProcesando",
      "selectQuery",
    ]),

    getRowsForm21(){
      return this.$store.state.rowsForm21.slice().reverse();
    },

    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },

    getProfile() {
      return this.$store.state.dsoaLogin.profile[0];
    },
    CMSDataRespuesta() {
      return this.$store.state.DataCMS;
    },
  },

  methods: {
    // PARA LLAMAR UNA RUTA EXTERNA CON UN FORMULARIO
    llamaRutaVue(routename) {
      this.$router.push(routename);
      // this.$parent.activaEditSimple = false;
    },

      agregarComentario: function () {
      // METODO GENERICO  PARA PROMPTS Y OTROS

      var pedido = { 
        SECUENCIA_BLOG: "6", 
        COD_COMPANIA: this.COD_COMPANIA, 
        NUM_PEDIDO: this.NUM_PEDIDO ,
        ID_USUARIO: "Gustavo Mendez", 
        TEXTO_BLOG: "Como va el pedido", 
        FECHA_HORA: "20/11/20", 
        AVATAR: "" }
       
      this.$store.commit("MUTFORM21",pedido);
    },

    /////////// GUARDA DATOS GUARDA DATOS  GUARDA DATOS  GUARDA DATOS   ////////////
    GuardaRegistro: function() {
      if (
        this.indicadorDML == "I" ||
        this.indicadorDML == "U" ||
        this.indicadorDML == "D"
      ) {

        //toma usuario del sistema
        this.ID_USUARIO = this.getProfile.Nombre;

        //agregarComentario();

        var header = {
          MODO: this.indicadorDML,
          OBJECTID: "7016",
          CREDENCIAL: this.getProfile.Credencial,
          USERNAME: this.getProfile.Username,
          REGISTROSXPAGINA: "1",
          PAGINA: "1",
        };
//
        this.headertxt = divilib.GetHeaderString(header);

        //alert("insert" + JSON.stringify(this.$data));
        let filas = datos7016.addFilasToSave(this.$data);

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
          ObjectId: "7016",
          formatoenvio: "N",
          formatorecibe: "N",
          indicador: "3", // CRUD
          origenUrl: this.origenUrl,
        };

        //cambia a acDsoaPrueba // acDsoa
        this.$store.dispatch("acDsoa", pedido);

        this.$parent.activaEdit = false;
      } else alert(" Crud No presente"); 


      //AGREGA EL VISOR 
      this.agregarComentario();

      this.TEXTO_BLOG = "";
    }, // fin de  metodo

    // CARGA DE una variable Bd a DOM ---* no se usan
    cargaRegistroActual: function(datosRow) {
      this.TEXTO_BLOG = datosRow.TEXTO_BLOG;
    },  

    agregarComentario: function () {
      // METODO GENERICO  PARA PROMPTS Y OTROS

      var pedido =  {
        COD_COMPANIA: this.COD_COMPANIA,
        NUM_PEDIDO: this.NUM_PEDIDO ,
        SECUENCIA_BLOG: "",
        ID_USUARIO: this.getProfile.Nombre,
        TEXTO_BLOG:  this.TEXTO_BLOG,
        FECHA_HORA: "", 
        AVATAR: ""
      };
      this.$store.commit("MUTFORM21",pedido);
    },

    /// busca dato para el edit
    buscarRegistro: function(dinamicKey) {
      var header = {
        MODO: "JJ",
        OBJECTID: "7016",
        CREDENCIAL: this.getProfile.Credencial,
        USERNAME: this.getProfile.Username,
        REGISTROSXPAGINA: "200",
        PAGINA: "1",
        ORDERBY: "",
      };
      this.headertxt = divilib.GetHeaderString(header);
 
      var origenUrl = "O";
      // agrego las filas
      var filas = datos7016.getMisFilas();
     
      this.filastxt = divilib.filaArraytoStrintg(filas, "N");

      var parametros = [];

      var parametro1 = {
        NOMBRE: "NUM_PEDIDO",
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
      this.$store.commit("MUTSETPETICIONTXT", "");
      this.$store.commit("MUTSETPETICIONTXT", petTxt);

      var pedido = {
        dml: "JJ", //SJ
        Credencial: this.getProfile.Credencial,
        ObjectId: "7016",
        formatoenvio: "N",
        formatorecibe: "N",
        indicador: "21", //select
        origenUrl: origenUrl,
      };

      //cambia a acDsoaPrueba // acDsoa
      this.$store.dispatch("acDsoa", pedido);

      this.datosJson = {
        indicadorDML: "U",
        locallaststrParametros: this.locallaststrParametros,
      };
    },

    ///////////////////////// CODIGO GENERICO PARA BUSQUEDAS RAPIDAS  ///////////////////////////
    buscarGenerico: function(objectID, dinamicKey, nombreFila, FormatoFila) {
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
