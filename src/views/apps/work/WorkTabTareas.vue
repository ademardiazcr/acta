<!-- =========================================================================================
    File Name: WorkTabTareas.vue
    Description: Muestra las tareas de cada mensajero
========================================================================================== -->

<template>
  <div>
    <vx-card :title="getConts2.displayName">
 
     <!-- {{currentTab}}usuario {{userId}}-->
      <vs-divider class="d-theme-border-grey-light m-0" />

      <vs-tabs alignment="fixed" :color="colorx" v-model="currentTab">
        <vs-tab
          label="Pendientes"
          class="m-6"
       
          @click="
            colorx = '#8B0000';
            editRecord($event);
          "
        > 
          <div class="">
            <grid7015A :nombre_tab="nombre_tab" :currentTab="currentTab"  :userId="userId"></grid7015A>
          </div>
        </vs-tab>
        <vs-tab
          label="En Proceso"
          class="m-6" 
          @click="
            colorx = '#FFA500';
            editRecord($event);
          "
        >
          <div class="">
           <grid7015A  :nombre_tab="nombre_tab"   :currentTab="currentTab"  :userId="userId"></grid7015A>
          </div>
        </vs-tab>
        
        <vs-tab
          label="Terminadas"
          class="m-6"
          @click="
            colorx = '#FFA500';
            editRecord($event);
          "
        >
          <div class="">
           <grid7015A  :nombre_tab="nombre_tab" :currentTab="currentTab" :userId="userId"></grid7015A>
          </div>
        </vs-tab>

        <vs-tab
          label="Ubicación"
          class="m-4"
          @click="
            colorx = '#FFA500';
            editRecord($event);
          "
        >
          <div class="">
            <grid7015A  :nombre_tab="nombre_tab"  :currentTab="currentTab"  :userId="userId"></grid7015A>
          </div>

        </vs-tab>
      </vs-tabs>
    </vx-card>
  </div>
</template>
<script>
import VxTimeline from "@/components/timeline/VxTimeline.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import Grid7015A from "@/divisoft/ob7015/grid7015A.vue";

export default {
  components: {
    VxTimeline,
    VuePerfectScrollbar,
    Grid7015A,
  },

  props: {
    userId: {
      type: Number,
      required: true,
    },
  },

  mounted() {
    //funcionamiento scrollbar
    //const scroll_el = this.$refs.chatLogPS.$el || this.$refs.chatLogPS;
    // scroll_el.scrollTop = this.$refs.chatLog.scrollHeight;
  },

  methods: {
    editRecord(event) {
      //console.log(event.srcElement.outerText);

      this.nombre_tab = event.srcElement.outerText;
      let datos={"datos":{"page":"1",
             "total":"1", 
             "registros":"4",
            "rows":[   {"COD_COMPANIA":"100003","NUM_PEDIDO":"0","NOM_CLIENTE":"","COD_CLIENTE":"0","DETALLE":"0","FECHA":"2020-26-12","IND_ESTADO":"1","NOMBRE_ESTADO":"Registrado "},
]} }


      this.$store.commit("MUTSETRESPUESTAGRID",datos);
    },
  },

  computed: {
    getConts2() {
      return this.$store.getters["chat/contact"](this.userId);
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
  },

  data() {
    return {
      //scrollbar
      nombre_tab:"",
      currentTab:1,
      settings: {
        maxScrollbarLength: 100,
      },
      activeChatUser: "118",
      colorx: "#8B0000",

      active_tab: 0,
      tabs: [
        { index: 0, name: "tab1", router: "" },
        { index: 1, name: "tab2" },
        { index: 2, name: "tab3" },
      ],
    };
  },
};
</script>
