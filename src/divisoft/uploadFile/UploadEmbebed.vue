
<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
<div id="data-list-list-view" class="vx-col md:w-1/2 w-full mb-base">

    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6">
        <div class="p-6">
            <br />
           
             
            <iframe v-show="imageType==1" :src="textBase64" type="application/pdf"></iframe>
            <div>
                <img v-show="imageType==2" style="display:block; width:100px;height:100px;" id="base64image" :src="textBase64" />
            </div>

            <file64Reader @EnviaBase64="EnviaBase64"></file64Reader>
            <br>
            
            <button type="submit" class="btn btn-success" @click="uploadFile()">Subir a BD</button>

        </div>
    </VuePerfectScrollbar>

</div>
</template>


<script>
// lector basico de documentos o imagenes
import { eventBus } from "@/main"; // para que se hablen los componentes
import VuePerfectScrollbar from "vue-perfect-scrollbar";

//componente lee B64
import file64Reader from "./file64Reader";

import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";

export default {
  created() {
      let defaulCMS = [];
      this.$store.commit('MUTSETDATA', defaulCMS);

    //	 cuando se createReadStream
    eventBus.$on("cargaDocUpload", (respuestaCMSUP) => {
      (this.Referencia = "0"), //respuestaCMSUP[0].Referencia;
        (this.LlaveExterna = respuestaCMSUP[0].LlaveExterna);

    //alert(respuestaCMSUP[0].LlaveExterna);

      this.NumNivel = respuestaCMSUP[0].NumNivel;
      this.NumDoc = respuestaCMSUP[0].NumDoc;

      this.EntidadCodigo = respuestaCMSUP[0].EntidadCodigo;

      if (!(this.LlaveExterna > "0"))
        this.mensajeBd = "Datos Incorrectos para Cargar IMAGEN";

      console.log("Cargando Uplodad ", respuestaCMSUP);
    });
  },
  beforeDestroy: function () {
    //Crea un bus  OYENTE
    // SI HAY PROMPT
    eventBus.$off("cargaDocUpload");
  },

  props: {
    tituloUpload: {
      type: String,
      required: false,
    },
    tipoGuardado: {  //14 con imagen  15 solo datos
      type: String,
      required: false
    },
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      mensajeBd: "",
      activaalerta: true,
      yasubio: false,

      Referencia: "0",
      LlaveExterna: "",
      NumNivel: "",
      NumDoc: "",

      DocumentoMimeType: "",
      DescripcionDoc: "",

      bdCMS: divilib.BdCMS,
      CMSpeticion: divilib.CMSpeticion,
      ManipulacionCMS: divilib.ManipulacionCMS,
      textBase64: "",
      textMS: "",
      imageType: 0,
      subeArchivo: false,
      editKey: 0,

      nombreDocumento:"",


      datosdocBitWeb: {
        lote:"REPLACELOTE",
        referencia: "REPLACEREFERENCIA",
        extension: "",
        clase_url: "",
        DocumentoMimeType: "",
        referencia_relacionada: "",
        embebed_code: "",
        descripcion: "",
        descripcion_fr: "",
        descripcion_es: "",
        patronbusqueda: "",
        // van en formulario
        nombreobjeto: "",
        directorio: "",
        DescripcionDoc: "",
        titulo: "",
        ruta_archivo: "",
        detalle: "",
        orden: "",
        url_asociado: ""
      },
    };
  },
  components: {
    file64Reader,
    VuePerfectScrollbar,
  },
  computed: {

    CMSRespuestaIndexa() {
      return this.$store.state.BitWeb.DataCMS;
    },
    
    getCodCia() {
      return this.$store.state.CodCia;
    },
    getProfile() {
      return this.$store.state.dsoaLogin.profile[0];
    },

    CMSDataRespuesta() {
      return this.$store.state.DataCMS;
    },

    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          //this.initValues();
        }
      },
    },
  },
  methods: {
    //Metodo para recibir  Los datos del componente

    EnviaBase64(archivoBase64, datosRespuesta) {
      this.textBase64 = "";

      this.DocumentoMimeType = datosRespuesta[0].DocumentoMimeType;
      this.DescripcionDoc = datosRespuesta[0].descripcionDoc;
      if (this.DescripcionDoc == "") this.DescripcionDoc = "Documento";

      if (
        datosRespuesta[0].DocumentoMimeType.indexOf("PDF") > 0 ||
        datosRespuesta[0].DocumentoMimeType.indexOf("pdf") > 0
      ) {
        this.imageType = 1;
        this.textBase64 = archivoBase64;
      }

      if (
        datosRespuesta[0].DocumentoMimeType.indexOf("mage") > 0 ||
        datosRespuesta[0].DocumentoMimeType.indexOf("MAGE") > 0
      ) {
        this.imageType = 2;
        this.textBase64 = archivoBase64;
      }
    },

    uploadFile() {
      let extension = "";
      this.yasubio = true;

      extension = divilib.getValueExtension(
        divilib.CMSMimeToExtension,
        this.DocumentoMimeType
      );

      let documento=this.textBase64.substr(",");


      if(this.tipoGuardado=='15')
        documento='';

      //alert("tipoGuardado "+this.tipoGuardado);
      let respuestaCMS = {
        CodCia: this.getCodCia,
        CodigoPeticion: this.tipoGuardado, //14
        Repositorio: "",
        GuardaArchivo: "B",
        RutaOrigen: documento,
        ExtensionFinal: "",
        RutaDestino: "",
        EntidadCodigo: this.EntidadCodigo,
        LlaveExterna: this.LlaveExterna,
        NumNivel: this.NumNivel,
        NumDoc: this.NumDoc,
        ReferenciaPadre: "",
        Referencia: this.Referencia,
        hashDoc: "",
        ReferenciaPersonalizada: "",
        IndicadorAtiendeWs: "",
        FormatoImagen: "",
        DirectorioCrear: "",
        DestinoFisico: "",
        DirectorioSeparatorOrigen: "",
        InsertarBd: "",
        DocumentoMimeType: this.DocumentoMimeType,
        NombreObjeto: this.descripcionDoc,
        Descripcion: this.descripcionDoc,
        Extension: extension,
        NuevoNombre: this.descripcionDoc,
        Thumb: "",
        Lote: "",
        FormatoArchivoDestino: "",
      };

      this.bdCMS[0].Encriptado = "";
      this.bdCMS[0].TipoGuardado = "";
      this.bdCMS[0].EntidadCodigo = this.EntidadCodigo;
      this.bdCMS[0].InformacionBusqueda = "";
      this.bdCMS[0].TipoRespuesta = "";
      this.bdCMS[0].DirectorioSeparadorOrigen = "";
      this.bdCMS[0].GuardarImagenDestino = "";
      this.bdCMS[0].Directorio = "";
      this.bdCMS[0].IndMultipleEntidad = "";
      this.bdCMS[0].Size = "";

      //Peticion Minuscula

      this.CMSpeticion[0].dml = "";
      this.CMSpeticion[0].datos = divilib.dataCMSToXml(respuestaCMS);
      this.CMSpeticion[0].manipula = divilib.manipulaCMSToXml(this.ManipulacionCMS[0]);
      this.CMSpeticion[0].bd = divilib.bdCMSToXml(this.bdCMS[0]);
      this.CMSpeticion[0].formato = "N";
      this.CMSpeticion[0].formatoRequest = "N";
      this.CMSpeticion[0].Credencial = this.getProfile.Credencial;
      this.CMSpeticion[0].deserror = "";
      this.CMSpeticion[0].codigoerror = "0";

      console.log("peticion CMS ", this.CMSpeticion[0]);

      //cambia a acDsoaPrueba // acDsoa

      if (this.LlaveExterna > "0")
        this.$store.dispatch("CMSacDsoa", this.CMSpeticion[0]);
      else {
        this.mensajeBd =
          "No hay datos correctos para Guardar  llave extrerna no presente ";
      }
    },
  },

  watch: {

   // controla la respuesta de  la indexacion
    CMSRespuestaIndexa: function () {
      if(this.CMSRespuestaIndexa.codigoerror == "0"){
        this.REFERENCIA = this.CMSDataRespuesta.Referencia;
    
        if (this.REFERENCIA > "0") {
          this.REFERENCIA = this.Referencia;
          this.indicadorDML = "I";
          this.COD_COMPANIA = this.compania;
          this.NUM_PEDIDO = this.pedido;

          this.CMSRespuestaIndexa.Referencia=this.CMSDataRespuesta.Referencia;
          this.CMSRespuestaIndexa.Lote=this.CMSDataRespuesta.Lote;
          this.CMSRespuestaIndexa.Directorio=this.CMSDataRespuesta.Directorio;

          // todo salio bien y llama a  el emit de la funcion padre

          
          this.$emit('closeSidebar');

          this.$emit('ActualizaDatos',this.CMSRespuestaIndexa);
     

          //this.GuardaRegistro();
          //this.agregarImage();

        }

      }else{alert("INDEXANDO DOCUMENTO" + this.CMSDataRespuesta.deserror)}
    },

    // controla la respuesta de la creacion y registro de datos    
    CMSDataRespuesta: function () {
      console.log(
        "respuesta CMSDataRespuesta Y se Cargo en watch CMSDataRespuesta ",
        this.CMSDataRespuesta
      );

      if (this.yasubio == true) {
        this.Referencia = this.CMSDataRespuesta.Referencia;

        if (this.Referencia > "0"){
          //this.mensajeBd = "Documento Guardado correctamente con referencia #" + this.Referencia;
          

          this.CMSDataRespuesta.RutaDestino = '/imagebank/';
          this.CMSDataRespuesta.RutaOrigen= this.textBase64;

          this.CMSDataRespuesta.dml = 'FILEREGISTER';
          this.$store.dispatch("BitWeb/CMSacDsoaPHPCMS",  this.CMSDataRespuesta);

          
        }
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 70%;
    max-width: 90vw;
  }
}
</style>

