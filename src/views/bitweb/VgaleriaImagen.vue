<!-- =========================================================================================
  File Name: VGaleriaImagen.vue
  Description: Profile Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="vx-row">
    <!-- LATEST PHOTOS -->
    <vx-card title="Imágenes" class="mt-base">
      <div class="vx-row pt-2">
        <div
          class="vx-col w-1/2 sm:w-1/2 md:w-1/3 xl:1/4"
           v-for="(item, index) in publicacionesMulti"
            :key="index"
        >
          <img
            :src="item.urlImg"
            alt="latest-upload"
            class="rounded mb-4 user-latest-image responsive"
          />
          
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>

import "video.js/dist/video-js.css";

export default {
  created() {
    //carga los publicaciones basicas
    let pedido = {
      dml: "JU",
      Credencial: this.getProfile.Credencial,
      ObjectId: "8107E",
      ObjectId2: "8105C", // el de las publicaciones
      formatoenvio: "N",
      formatorecibe: "N",
      indicador: "3",
      categoria: this.catSlider,
    }; 
    this.$store.dispatch("BitWeb/acDsoaPublicaciones", pedido);
  },
  data() {
    return {
         wasSidebarOpen: null,
    };
  },
computed: {
   getProfile() {
      return this.$store.state.dsoaLogin.profile[0];
    },
   catSlider() {
      return this.$store.state.BitWeb.catSlider;
    },
    publicacionesMulti() {
      return this.$store.state.BitWeb.publicacionesMulti;
    },
  },
  mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit("TOGGLE_REDUCE_BUTTON", true);
  },
  beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit("TOGGLE_REDUCE_BUTTON", false);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/pages/profile.scss";
</style>
