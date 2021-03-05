<!-- =========================================================================================
    File Name: Carousel.vue
    Description: Carousel demo
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="extra-component-vue-awesome-swiper-demo">
  
    <carousel-parallax /> 
  </div>
</template>

<script>
 
import CarouselParallax from "./CarouselParallax.vue"; 

export default {
  components: {
 
    CarouselParallax, 
  },
};
</script>
