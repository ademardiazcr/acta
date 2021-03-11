<!-- =========================================================================================
  File Name: Vacercade.vue
  Description: Profile Page
========================================================================================== -->
<template>
  <div id="profile-page">
    <p>Iconos</p> <br> 
      <feather-icon icon="HomeIcon" />
  <feather-icon icon="ArchiveIcon" />
  <feather-icon icon="AlertCircleIcon" />
    <br><br>
    <vs-divider/>
    <br>
      <div class="">
    <ul class="centerx">
      <li>
        <vs-checkbox v-model="checkBox1">Primary</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="success" v-model="checkBox2">Success</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="danger" v-model="checkBox3">Danger</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="warning" v-model="checkBox4">Warning</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="dark" v-model="checkBox5">Dark</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="rgb(38, 187, 174)" v-model="checkBox6">Color RGB</vs-checkbox>
      </li>
      <li>
        <vs-checkbox color="#720ea8" v-model="checkBox7">Color HEX</vs-checkbox>
      </li>
    </ul>
  </div>

   <br><br>
    <vs-divider border-style="dotted" color="primary">dotted</vs-divider>

     <div class="demo-alignment">

    <vs-button @click="popupActive=true" color="primary" type="border">Modal</vs-button>

    <vs-popup class="holamundo" title="Lorem ipsum dolor sit amet" :active.sync="popupActive">
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </vs-popup>
  </div>
  <br>
  <vs-divider/>
  <br>

  <flat-pickr v-model="date" />
<br><br>
   <vs-divider/>
   <br>
   <ul class="centerx">
  <li>
    <vs-radio v-model="radios1" vs-value="luis">Luis</vs-radio>
  </li>
  <li>
    <vs-radio v-model="radios1" vs-value="carols">Carols</vs-radio>
  </li>
  <li>
    <vs-radio v-model="radios1" vs-value="summer">Summer</vs-radio>
  </li>
 
  <li class="modelx">
   Seleccion:  {{ radios1 }}
  </li>
</ul>
<br>
<vs-divider/>

<div class="vx-row mb-2">
    <div class="vx-col w-full">
      <vs-input class="w-full" icon-pack="feather" icon="icon-user" icon-no-border label-placeholder="First Name" v-model="input21" />
    </div>
  </div>
  <div class="vx-row mb-2">
    <div class="vx-col w-full">
      <vs-input type="email" class="w-full" icon-pack="feather" icon="icon-mail" icon-no-border label-placeholder="Email" v-model="input22" />
    </div>
  </div>
  <div class="vx-row mb-2">
    <div class="vx-col w-full">
      <vs-input class="w-full" icon-pack="feather" icon="icon-smartphone" icon-no-border label-placeholder="Mobile" v-model="input23" />
    </div>
  </div>
  <div class="vx-row mb-6">
    <div class="vx-col w-full">
      <vs-input type="password" class="w-full" icon-pack="feather" icon="icon-lock" icon-no-border label-placeholder="Password" v-model="input24" />
    </div>
  </div>
  <div class="vx-row mb-6">
    <div class="vx-col w-full">
      <vs-checkbox class="inline-flex" v-model="check6">Remember Me</vs-checkbox>
    </div>
  </div>
  <div class="vx-row">
    <div class="vx-col w-full">
      <vs-button class="mr-3 mb-2">Submit</vs-button>
      <vs-button color="warning" type="border" class="mb-2" @click="input21 = input22 = input23 = input24 = ''; check6 = false;">Reset</vs-button>
    </div>
  </div>
  <br><br>
  
    
    
      
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
export default {
  data(){
    return {
      checkBox1:true,
      checkBox2:true,
      checkBox3:true,
      checkBox4:true,
      checkBox5:true,
      checkBox6:true,
      checkBox7:true,
      popupActive: false,
      date: null,
      radios1:'luis',
    }
  
  },
    components: {
     flatPickr
  }
}
</script>






<style lang="scss">
@import "@/assets/scss/vuexy/pages/profile.scss";
</style>
