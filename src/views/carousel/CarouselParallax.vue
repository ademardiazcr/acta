<!-- =========================================================================================
  File Name: CarouselParallax.vue
  Description: Parallax Carousel demo
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div>
    {{ publicacionesMulti }}
    <!-- swiper slot="parallax-bg"
            style="
          background-image: url(../../assets/images/pages/carousel/banner-4.jpg);
        "
    -->
    <swiper class="swiper" :options="swiperOption">
      <div class="parallax-bg" data-swiper-parallax="-23%"></div>
      <swiper-slide
        v-for="(item, index) in publicacionesMulti"
        :key="index"
        img="http://tavocr.com/bitweb/imagebank/1/152sl.webp"
      >
        <div class="title" data-swiper-parallax="-100">{{ item.titulo }}</div>
        <div class="text" data-swiper-parallax="-300">{{ item.contenido }}</div>
        <router-link v-if="item.link" :to="item.link">
          <base-button tag="a" type="primary" class="mt-4">{{
            item.detalle
          }}</base-button>
        </router-link>
        <router-link v-else v-show="item.link2" :to="item.link2">
          <base-button tag="a" type="primary" class="mt-4">{{
            item.detalle
          }}</base-button>
        </router-link>
        <!-- Opacity parallax -->
        <div data-swiper-parallax-opacity="0.5">I will change opacity</div>
        <!-- Scale parallax -->
        <div data-swiper-parallax-scale="0.15">I will change scale</div>
      </swiper-slide>
      <div
        class="swiper-pagination swiper-pagination-white"
        slot="pagination"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapState } from "vuex";

export default {
  components: {
    swiper,
    swiperSlide,
  },
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
    //if (this.getSlider[0].titulo=="0")
    this.$store.dispatch("BitWeb/acDsoaPublicaciones", pedido);
  },
  data() {
    return {
      swiperOption: {
        speed: 600,
        parallax: true,

        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    getProfile() {
      return this.$store.state.dsoaLogin.profile[0];
    },

    catSlider() {
      return this.$store.state.BitWeb.catSlider;
    },
    slider() {
      return this.$store.state.BitWeb.slider;
    },
    publicacionesMulti() {
      return this.$store.state.BitWeb.publicacionesMulti;
    },
  },
};
</script>

<style scoped>
.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
  background-color: transparent !important;
  justify-content: space-around !important;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}
</style>
