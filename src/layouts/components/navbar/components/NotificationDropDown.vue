 <!-- NotificationDropDown.vue -->
<template>
  <!-- NOTIFICACIONES.vue -->
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
 
    <feather-icon
      icon="BellIcon"
      class="cursor-pointer mt-1 sm:mr-6 mr-2"
      :badge="getDdatosRow.length"
    />
    
    <!--
 {{getRolMensajero}}+{{getRolAdmin }}+{{getRolCliente }}
 {{getDdatosRow}}
 -->
     
    <vs-dropdown-menu
      class="notification-dropdown dropdown-custom vx-navbar-dropdown"
    >
      <div class="notification-top text-center p-5 bg-primary text-white">
        <h3 class="text-white">{{getDdatosRow.length}} Nuevas</h3>
        <p class="opacity-75">Notificaciones</p>
      </div>
 
      <component
        :is="scrollbarTag"
        ref="mainSidebarPs"
        class="scroll-area--nofications-dropdown p-0 mb-10"
        :settings="settings"
        :key="$vs.rtl"
      >
      
        <ul class="bordered-items">
          <li
            v-for="ntf in getDdatosRow"
            :key="ntf.NUM_PEDIDO"
            class="flex justify-between px-4 py-4 notification cursor-pointer"
          >
            <div class="flex items-start">
              <feather-icon
                :icon="ntf.icon"
                :svgClasses="[
                  `text-${ntf.category}`,
                  'stroke-current mr-1 h-6 w-6',
                ]">
                </feather-icon>

              <router-link :to="'/admin/solicitud/'+ntf.NUM_PEDIDO+'/VerifyKey/0'">
              <div class="mx-2">
                
                <span
                  class="font-medium block notification-title"
                  :class="[`text-primary`]"
                  >Cliente:{{ ntf.NOM_CLIENTE}}</span
                >
                <small>{{ntf.NUM_PEDIDO}}- {{ ntf.DETALLE }}</small>
                   
              </div>
 </router-link>
            </div>
            <small class="mt-1 whitespace-no-wrap">{{ntf.FECHA}}</small>
          </li>
        </ul>
      </component>

      <div
        class="checkout-footer fixed bottom-0 rounded-b-lg text-primary w-full p-2 font-semibold text-center border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light cursor-pointer"
      >
        <!--span>View All Notifications</span-->
      </div>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";
import datos7015 from "@/divisoft/ob7015/js/divi7015.js";

 

export default {
  components: {
    VuePerfectScrollbar,
  },
  mounted() { 
    
   this.buscarDatos();    
  },


  data() {
    return {
       rolCliente:  "TAVO_CLIENTE",
       rolMensajero:"TAVO_MENSAJERIA",
       rolAdmin:"TAVO_ADMIN",



     /* unreadNotifications: [
        {
          index: 0,
          title: "New Message",
          msg: "Are your going to meet me tonight?",
          icon: "MessageSquareIcon",
          time: this.randomDate({ sec: 10 }),
          category: "primary",
        },
        {
          index: 1,
          title: "New Order Recieved",
          msg: "You got new order of goods.",
          icon: "PackageIcon",
          time: this.randomDate({ sec: 40 }),
          category: "success",
        },
        {
          index: 2,
          title: "Server Limit Reached!",
          msg: "Server have 99% CPU usage.",
          icon: "AlertOctagonIcon",
          time: this.randomDate({ min: 1 }),
          category: "danger",
        },
        {
          index: 3,
          title: "New Mail From Peter",
          msg: "Cake sesame snaps cupcake",
          icon: "MailIcon",
          time: this.randomDate({ min: 6 }),
          category: "primary",
        },
        {
          index: 4,
          title: "Bruce's Party",
          msg: "Chocolate cake oat cake tiramisu",
          icon: "CalendarIcon",
          time: this.randomDate({ hr: 2 }),
          category: "warning",
        },
        {
          index: 5,
          title: "New Message",
          msg: "Are your going to meet me tonight?",
          icon: "MessageSquareIcon",
          time: this.randomDate({ sec: 10 }),
          category: "primary",
        },
      ],*/
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },
  computed: {

    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
     getProfile() {
      return this.$store.state.dsoaLogin.profile[0];
    }, 
    getDdatosRow: {
      get() {
        //return this.$store.state.datosGridPhp.rows;
        return this.$store.state.datosGrid24.rows; //llena la tabla con los datos obtenidos
      },
    },
 
    // BUSCA SI EL ROL EN ROLBITWEB EXISTE DEVUELVE UN VALOR DIFERENTE A -1
    getRolCliente() {
      return this.$store.getters["dsoaLogin/buscaRol"](this.rolCliente);
    },
    getRolMensajero() {
      return this.$store.getters["dsoaLogin/buscaRol"](this.rolMensajero);
    },
    getRolAdmin() {
      return this.$store.getters["dsoaLogin/buscaRol"](this.rolAdmin);
    },
  },
  methods: {
     
    addFilas: function () {
      var filas = [];
      filas.push({NOMBRE: "COD_COMPANIA",VALOR1: "",VALOR2: "",CDATA: "0"});
      filas.push({ NOMBRE: "NUM_PEDIDO", VALOR1: "", VALOR2: "", CDATA: "0" });
      filas.push({ NOMBRE: "COD_CLIENTE", VALOR1: "", VALOR2: "", CDATA: "0" });
      filas.push({ NOMBRE: "NOM_CLIENTE", VALOR1: "", VALOR2: "", CDATA: "0" });
      filas.push({ NOMBRE: "DETALLE", VALOR1: "", VALOR2: "", CDATA: "0" });
      filas.push({ NOMBRE: "FECHA", VALOR1: "", VALOR2: "", CDATA: "0" });
      filas.push({ NOMBRE: "IND_ESTADO", VALOR1: "", VALOR2: "", CDATA: "0" });
      filas.push({ NOMBRE: "ENC_K_UTILITY.GETESTADOPEDIDO(IND_ESTADO) AS NOMBRE_ESTADO", VALOR1: "", VALOR2: "", CDATA: "0" });

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
      // AGREGAR EMPRESA
 
      if (this.getRolMensajero >=0) {
       // alert("getRolMensajero ")
        parametros.push({ NOMBRE: "NUM_USUARIO_ASIGNADO",OPERADOR: "=", VALOR1: this.getProfile.num_user, VALOR2: "", CDATA: "0" });
        //solo las de el asignadas sin terminar
        parametros.push({ NOMBRE: "IND_ESTADO",OPERADOR: "=", VALOR1: "2", VALOR2: "", CDATA: "0" });
        }

      if  (this.getRolAdmin >=0)       //administrador
      {
        // alert("getRolAdmin")
        //solo las de el asignadas sin asignar de todos los usuarios 
       parametros.push({ NOMBRE: "IND_ESTADO",OPERADOR: "=", VALOR1: "1", VALOR2: "", CDATA: "0" });
      }
       

      if  (this.getRolCliente >=0) {
        //alert("getRolCliente ")
          //solo las de el asignadas sin asignar de todos los usuarios 
           parametros.push({ NOMBRE: "COD_CLIENTE",OPERADOR: "=", VALOR1: this.getProfile.num_user, VALOR2: "", CDATA: "0" });
            parametros.push({ NOMBRE: "IND_ESTADO",OPERADOR: "MENOR", VALOR1: "3", VALOR2: "", CDATA: "0" });
      }
   
  
 if (
    this.getRolMensajero >=0 ||
     this.getRolAdmin >=0 || 
     this.getRolCliente >=0 ) 
    {
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
                indicador: "24", //Grid
                origenUrl: origenUrl,
              };
        
              //cambia a acDsoaPrueba // acDsoa
        
              console.log("pedidos",pedido)
              this.$store.dispatch("acDsoa", pedido);

              //carga la ultima peticion  header parametros y addFilas
              this.locallastheader = this.headertxt;
              this.locallaststrParametros = this.paramtxt;
              this.locallaststrFilas = this.filastxt;
        
       }
      else 
      this.$store.commit("MUTLIMPIADATAGRIDGRID", 24);
        
    
    },
   },
};
</script>

