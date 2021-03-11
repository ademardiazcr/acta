<template>
  <vs-tabs :position="isSmallerScreen ? 'top' : 'left'" class="tabs-shadow-none" id="profile-tabs" :key="isSmallerScreen">

    <!-- GENERAL -->
    <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'Directivo 1' : ''">
      <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
        <primer-directivo />
      </div>
    </vs-tab>
    <vs-tab icon-pack="feather" icon="icon-lock" :label="!isSmallerScreen ? 'Directivo 2' : ''">
      <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
        <segundo-directivo/>
      </div>
    </vs-tab>
 
   
  </vs-tabs>
</template>

<script>
import PrimerDirectivo from './PrimerDirectivo.vue'
import SegundoDirectivo from './SegundoDirectivo.vue'


export default {
  components: {
    PrimerDirectivo,
    SegundoDirectivo

  },
  data () {
    return {

    }
  },
  computed: {
    isSmallerScreen () {
      return this.$store.state.windowWidth < 768
    }
  }
}
</script>

<style lang="scss">
#profile-tabs {
  .vs-tabs--content {
    padding: 0;
  }
}
</style>
