<!-- =========================================================================================
  MODELO VUE.JS  VUAX DIVISOFT  2020
     Generado por Divisoft Code Robot 06-11-2020:16:31:29    
    AUTOR: ADEMAR DIAZ 
    MODELO DE EDICION DE TABLAS CONFIGURABLE 
    CREADO POR  DIVISOFT SOA 2020
========================================================================================== -->

<template>
<div>
    <div v-if="isNinja" id="GRID7015">

        <!-- {{currentTab}}usuario {{userId}}-->
        {{currentTab}}usuario {{userId}}
        <!-- TABLE ACTION ROW -->
        <div class="flex flex-wrap justify-between items-center">
            <!-- ITEMS PER PAGE / PAGINACIÓN -->
            <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left">
                <vs-dropdown vs-trigger-click class="cursor-pointer">
                    <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                        <span class="mr-2">{{
                  currentPage * paginationPageSize - (paginationPageSize - 1)
                }}
                            -
                            {{
                  getDdatosRow.length - currentPage * paginationPageSize > 0
                    ? currentPage * paginationPageSize
                    : getDdatosRow.length
                }}
                            of {{ getDdatosRow.length }}</span>
                        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                    </div>
                    <vs-dropdown-menu>
                        <vs-dropdown-item @click="gridApi.paginationSetPageSize(10)">
                            <span>10</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                            <span>20</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="gridApi.paginationSetPageSize(50)">
                            <span>50</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="gridApi.paginationSetPageSize(100)">
                            <span>100</span>
                        </vs-dropdown-item>
                        <vs-dropdown-item @click="gridApi.paginationSetPageSize(150)">
                            <span>150</span>
                        </vs-dropdown-item>
                    </vs-dropdown-menu>
                </vs-dropdown>
            </div>
            <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV 
        <div
          class="flex flex-wrap items-center justify-between ag-grid-table-actions-right"
        >-->
            <!--BUSCAR
          <vs-input
            class="mb-4 md:mb-0 mr-4"
            v-model="searchQuery"
            @input="updateSearchQuery"
            placeholder="Buscar..."
          />-->
            <!--EXPORTAR EXCEL
          <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()"
            >Exportar a Excel</vs-button
          >
        </div>-->
        </div>
        <div style="height: 100%">
            <!--COMPONENTE GRID-->
            <ag-grid-vue class="ag-theme-material w-100 my-4 ag-grid-table" :gridOptions="gridOptions" :columnDefs="columnDefs" :defaultColDef="defaultColDef" :rowData="getDdatosRow" rowSelection="single" colResizeDefault="shift" :animateRows="true" :floatingFilter="true" :pagination="true" :suppressDragLeaveHidesColumns="true" :paginationPageSize="paginationPageSize" :suppressPaginationPanel="false" @cellDoubleClicked="onDoubleClicked">
            </ag-grid-vue>
        </div>
        <pre></pre>
    </div>
</div>
</template>

<script>
// importa librerias que necesita

import {
    AgGridVue
} from "ag-grid-vue";
import {
    mapState
} from "vuex"; //, mapMutations, mapActions
import "@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss";

import {
    eventBus
} from "@/main"; // para que se hablen los componentes

import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";
// ESTE ES UN FILTRO GENERICO, Si se necesita  puede incluir  un filtro personalizado
import filtrosDivisoft from "@/divisoft/filtrosDivisoft.vue";
//archivo que contiene constantes y procedimientos miscelaneos de apoyo
import * as datos7015 from "./js/divi7015.js";

//CELL RENDER
import CellRendererActions from './CellRendererActions.vue'
import CellRendererStatus from './CellRendererStatus.vue'

export default {
    components: {
        AgGridVue,
        filtrosDivisoft,
        CellRendererStatus,
        CellRendererActions
    },

    props: {

        currentTab: {
            type: Number,
            required: true,
        },

        userId: {
            type: Number,
            required: true,
        },
    },

    watch: {
        // SI HAY PROMPT
        ///XXXXXXXXX
        // si es E
        respuestaE: function () {
            if (this.respuestaE == 1) {

                this.buscarDatos();
                this.$store.commit("MUTLIMPIADATAGRIDGRID", 1);
            }

        },

        userId: function () {
            this.buscarDatos();
            this.$store.commit("MUTINICIALIZAERROR");
        },
        userId: function () {
            this.buscarDatos();
            this.$store.commit("MUTINICIALIZAERROR");
        },

    },
    // antes de  inciar la pagina  cargalas  Filas que lleva que es una constante
    // en  divi000X.js que es un libreria que guarda constantes y puede contener funciones de apoyo al  Documento
    beforeMount() {
        //DEFINE COLUMNAS DE LA TABLA
        this.columnDefs = datos7015.columnDefs;
        if (this.currentTab == 0)
            this.columnDefs = datos7015.columnDefsAsig;
        if (this.currentTab == 1)
            this.columnDefs = datos7015.columnDefsRevokar;

        columnDefsRevokar

        var defaultdatos = datos7015.datosDefault;
        this.$store.commit("MUTSETDATOSDEFAULT", defaultdatos);
    },

    created() {

        this.$store.commit("MUTINICIALIZAERROR");
        eventBus.$on("asignaTarea", dinamicKey => {
            alert("asignaTarea");

        });
    },

    // Cuando se monta la aplicacion
    mounted() {

        this.buscarDatos();
        this.gridApi = this.gridOptions.api;
        this.gridColumnApi = this.gridOptions.columnApi;
    },

    data() {
        return {
            //APP
            activaEdit: false,
            locallastheader: "", //guarda el ultimo header de este objeto
            locallaststrParametros: "", //guarda el ultimo  parametros de este objeto
            locallaststrFilas: "", //guarda el ultimo filas de este objeto
            paramtxt: "",
            filastxt: "",
            header: "",
            isNinja: true,
            staticKey: [],
            // rowsForm:[],
            dinamicKey: [],

            origenUrl: "J",
            dml: "I",

            //BUSCAR
            searchQuery: "",
            activaFiltro: false,
            //DATA GRID
            gridOptions: {},
            maxPageNumbers: 100,
            gridApi: null,
            exp: null,
            columnDefs: null,

            defaultColDef: {
                sortable: true,
                resizable: true,
                editable: false, //true
                filter: true,
                suppressMenu: false,
            },

            // seccion de filtros  Para llamar al  componente consulta
            filtros: datos7015.filtros,

            // fin de filtros
            //////////////////////////////////////
        };
    },
    computed: {
        ...mapState([
            "datosGrid",
            "tableKey",
            "estadoProcesando",
            "lastBdmsage",
            "respuestaE",
        ]),

        paginationPageSize() {
            if (this.gridApi) return this.gridApi.paginationGetPageSize();
            else return 10;
        },

        getProfile() {
            return this.$store.state.dsoaLogin.profile[0];
        },

        // BUSCA SI EL ROL EN ROLBITWEB EXISTE DEVUELVE UN VALOR DIFERENTE A -1

        totalPages() {
            if (this.gridApi) return this.gridApi.paginationGetTotalPages();
            else return 0;
        },

        currentPage: {
            get() {
                if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1;
                else return 1;
            },
            set(val) {
                this.gridApi.paginationGoToPage(val - 1);
            },
        },

        getDatos() {
            return this.$store.getters.getRows;
            //return   this.$store.state.datosJ.rows;
        },

        getDdatosRow: {
            get() {
                //return this.$store.state.datosGridPhp.rows;
                return this.$store.state.datosGrid.rows; //llena la tabla con los datos obtenidos
            },
        },
        currentRecord() {
            return this.$store.state.rowsForm[0];
        },

        getDdatosPages: {
            get() {
                return 0;
            },
        },
        lastDbmsg() {
            return this.$store.state.lastBdmsage;
        },

    },

    methods: {
        /*
     RowSelected(event) {

        console.log("onRowSelected",event)
      let rowsSelection = this.gridOptions.api.getSelectedRows();
      //console.info("rowsSelection",rowsSelection);
     // alert(JSON.stringify(rowsSelection));
    },
    */
        getRol(nombreRol) {
            return this.$store.getters["dsoaLogin/buscaRol"](nombreRol);
        },

        ajustaUltimoParam(parametros) {
            this.locallaststrParametros = parametros;
        },

        //PARA EDITAR
        onDoubleClicked(event) {
            //LIMPIA TABLEKEY
            if (this.currentTab < 3) {
                var origenUrl = "O";
                var header = {
                    MODO: "E",
                    OBJECTID: "7019",
                    CREDENCIAL: this.getProfile.Credencial,
                    USERNAME: this.getProfile.Username,
                    REGISTROSXPAGINA: "200",
                    PAGINA: "1",
                    ORDERBY: "",
                };

                this.headertxt = divilib.GetHeaderString(header);
                // arma la encabezado peticion
                // agrego las filas
                //this.addFilas();

                this.filastxt = '<Filas/>';

                // RegistroNuevo Gen_CAMPOS_GRID(3)
                var parametros = [];

                parametros.push({
                    NOMBRE: "PV_COD_COMPANIA",
                    OPERADOR: "=",
                    VALOR1: event.node.data.COD_COMPANIA,
                    VALOR2: "",
                    CDATA: "0"
                });
                parametros.push({
                    NOMBRE: "PN_NUM_PEDIDO",
                    OPERADOR: "=",
                    VALOR1: event.node.data.NUM_PEDIDO,
                    VALOR2: "",
                    CDATA: "0"
                });
                parametros.push({
                    NOMBRE: "PN_USUARIO_ASIGNADO",
                    OPERADOR: "=",
                    VALOR1: this.userId,
                    VALOR2: "",
                    CDATA: "0"
                });

                if (this.currentTab == 0) // YA LAS TIENE SE LE QUITA
                    parametros.push({
                        NOMBRE: "PV_ACCION",
                        OPERADOR: "=",
                        VALOR1: "A",
                        VALOR2: "",
                        CDATA: "0"
                    }); // ASIGNAR
                if (this.currentTab == 1) // YA LAS TIENE SE LE QUITA
                    parametros.push({
                        NOMBRE: "PV_ACCION",
                        OPERADOR: "=",
                        VALOR1: "R",
                        VALOR2: "",
                        CDATA: "0"
                    }); // ASIGNAR

                //entrega arreglo de parametros recibe texto de parametros
                this.paramtxt = divilib.paramArraytoStrintg(parametros);

                // cargo la peticion texto
                var petTxt = {
                    header: this.headertxt,
                    parametros: this.paramtxt,
                    filas: this.filastxt,
                };

                this.$store.commit("MUTSETURL", "O");
                this.$store.commit("MUTSETPETICIONTXT", petTxt);

                var pedido = {
                    dml: "E",
                    Credencial: this.getProfile.Credencial,
                    ObjectId: "7017",
                    formatoenvio: "N",
                    formatorecibe: "N",
                    indicador: "7", //execute
                    origenUrl: origenUrl,
                };

                //cambia a acDsoaPrueba // acDsoa
                this.$store.dispatch("acDsoa", pedido);

                //carga la ultima peticion  header parametros y addFilas
                this.locallastheader = this.headertxt;
                this.locallaststrParametros = this.paramtxt;
                this.locallaststrFilas = this.filastxt;
            }
        },

        //FUNCION BUSQUEDA EN EL INPUT DE ARRIBA
        updateSearchQuery(val) {
            this.gridApi.setQuickFilter(val);
        },
        // addFilas Gen_CAMPOS_GRID(1)
        addFilas: function () {
            var filas = [];
            filas.push({
                NOMBRE: "COD_COMPANIA",
                VALOR1: "",
                VALOR2: "",
                CDATA: "0",
            });
            filas.push({
                NOMBRE: "NUM_PEDIDO",
                VALOR1: "",
                VALOR2: "",
                CDATA: "0"
            });
            filas.push({
                NOMBRE: "COD_CLIENTE",
                VALOR1: "",
                VALOR2: "",
                CDATA: "0"
            });
            filas.push({
                NOMBRE: "NOM_CLIENTE",
                VALOR1: "",
                VALOR2: "",
                CDATA: "0"
            });
            filas.push({
                NOMBRE: "DETALLE",
                VALOR1: "",
                VALOR2: "",
                CDATA: "0"
            });
            filas.push({
                NOMBRE: "FECHA",
                VALOR1: "",
                VALOR2: "",
                CDATA: "0"
            });
            filas.push({
                NOMBRE: "IND_ESTADO",
                VALOR1: "",
                VALOR2: "",
                CDATA: "0"
            });
            filas.push({
                NOMBRE: "ENC_K_UTILITY.GETESTADOPEDIDO(IND_ESTADO) AS NOMBRE_ESTADO",
                VALOR1: "",
                VALOR2: "",
                CDATA: "0"
            });

            this.filastxt = divilib.filaArraytoStrintg(filas, "N");
        },

        //TRAE DATOS PARA MOSTRAR en el Grid
        buscarDatos: function () {

            var origenUrl = "O";
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
            // arma la encabezado peticion
            // agrego las filas
            this.addFilas();

            // RegistroNuevo Gen_CAMPOS_GRID(3)
            var parametros = [];

            if (this.getRol("TAVO_CLIENTE") != -1) {
                parametros.push({
                    NOMBRE: "COD_CLIENTE",
                    OPERADOR: "=",
                    VALOR1: this.getProfile.num_user,
                    VALOR2: "",
                    CDATA: "0"
                });
            }

            if (this.currentTab == 0) // sin asignar solo registradas
                parametros.push({
                    NOMBRE: "IND_ESTADO",
                    OPERADOR: "=",
                    VALOR1: "1",
                    VALOR2: "",
                    CDATA: "0"
                });

            if (this.currentTab == 1) // que sean del usuario 
            {
                parametros.push({
                    NOMBRE: "IND_ESTADO",
                    OPERADOR: "IN",
                    VALOR1: "2,3",
                    VALOR2: "",
                    CDATA: "0"
                });

                //if ( getRol('TAVO_ADMIN')==-1  // Si no es administrador 
                parametros.push({
                    NOMBRE: "NUM_USUARIO_ASIGNADO",
                    OPERADOR: "=",
                    VALOR1: this.userId,
                    VALOR2: "",
                    CDATA: "0"
                });

            }

            if (this.currentTab == 2) //  que ya esten concluidas
            {
                //alert(this.userId);
                parametros.push({
                    NOMBRE: "IND_ESTADO",
                    OPERADOR: ">",
                    VALOR1: "4",
                    VALOR2: "",
                    CDATA: "0"
                });
                parametros.push({
                    NOMBRE: "NUM_USUARIO_ASIGNADO",
                    OPERADOR: "=",
                    VALOR1: this.userId,
                    VALOR2: "",
                    CDATA: "0"
                });
            }

            //entrega arreglo de parametros recibe texto de parametros
            this.paramtxt = divilib.paramArraytoStrintg(parametros);

            // cargo la peticion texto
            var petTxt = {
                header: this.headertxt,
                parametros: this.paramtxt,
                filas: this.filastxt,
            };

            this.$store.commit("MUTSETURL", "O");
            this.$store.commit("MUTSETPETICIONTXT", petTxt);

            var pedido = {
                dml: "JJ",
                Credencial: this.getProfile.Credencial,
                ObjectId: "7015",
                formatoenvio: "N",
                formatorecibe: "N",
                indicador: "1", //select
                origenUrl: origenUrl,
            };

            //cambia a acDsoaPrueba // acDsoa
            this.$store.dispatch("acDsoa", pedido);

            //carga la ultima peticion  header parametros y addFilas
            this.locallastheader = this.headertxt;
            this.locallaststrParametros = this.paramtxt;
            this.locallaststrFilas = this.filastxt;
        },
    },
    // busq el  Registro a cargar
}; // fin de Metodos
</script>
