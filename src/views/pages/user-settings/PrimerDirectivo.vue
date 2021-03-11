<template>
  <vx-card no-shadow>


<div class="container">
  <div class="row">
    <div class="col-sm">
      <h2>{{directivo.nombre}}</h2>
      <h4>{{directivo.cargo}}</h4> <br>
      
       {{directivo.contenido}}
      <br><br>
      
  
  <div class="demo-inline-spacing">


 <vs-list>
  <vs-list-header title="Información" color="primary"></vs-list-header>
  <br>

  <a href="#"><div class="info"><span class="material-icons md-48">attach_file</span>&nbsp;&nbsp;  Ver curriculum Vitae</div> </a>
  <hr>
  <div class="info"><span class="material-icons md-48">alternate_email</span>&nbsp;&nbsp;  stevejobs@gmail.com</div> 



  
</vs-list>

</div>
      <br> 
       <vs-button class="mb-4 md:mb-0" @click="setDirectivo()">Ajustar Nombre</vs-button>
     
    </div>
    <div class="col-sm">
      <img :src="directivo.urlphoto" width="100%">
    </div>
    
    
  </div>
  
</div>


  </vx-card>

</template>

<style>
.info{
  
  display: flex;
  align-items: center;
 
  
}


</style>  

<script>
  export default {

    computed: {  
        directivo() {
            return this.$store.state.directivo;
        } 
    },

    
    methods: {
       setDirectivo() 
       {
 
 const  directivo={
        nombre:"RENAN GALVAN",
        cargo:"Secretario",
        contenido:"Contenido reemplazado dinámicamente en el ciclo de vida de vue",
        urlphoto:"http://www.grupodivisoft.com/slide_divisoft/documentation/assets/images/image_1.png"
    
  };
 this.$store.dispatch("setDirectivo", directivo);
          
        }
    }  
    
/*
    userDefaults = {
  uid: 0, // From Auth
  displayName: "John Doe", // From Auth
  about:
    "Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.",
  photoURL: require("@/assets/images/portrait/small/avatar-s-11.jpg"), // From Auth
  status: "online",
  userRole: "admin",
};*/


     
}; // fin de Metodos 
</script>


