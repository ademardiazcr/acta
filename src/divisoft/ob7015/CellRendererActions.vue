<template>
    <div :style="{'direction': $vs.rtl ? 'rtl' : 'ltr'}">
      <feather-icon icon="Edit3Icon" svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer" 
      @click="editRecord" 
      />
    </div>
</template>

<script>
export default {

  

  name: 'CellRendererActions',
  
  created() {
   /*  eventBus.$on("cargaRegistro", dinamicKey => {
              //busca el registro para editarlo 
             this.indicadorDML = "U";
              if (dinamicKey[0].valor == "0") {
                  this.indicadorDML = "I";
                  this.buscarRegistro(this.defaultdatos[0]);
              } else
                  this.buscarRegistro(dinamicKey);
         
    }); */
  },
  methods: {
    editRecord (event) {
//      console.log("editRECORD",event)
       
       
    },
    
    confirmDeleteRecord () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: `You are about to delete "${this.params.data.username}"`,
        accept: this.deleteRecord,
        acceptText: 'Delete'
      })
    },
    deleteRecord () {
      /* Below two lines are just for demo purpose */
      this.showDeleteSuccess()

      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.params.data.id)
      //   .then(()   => { this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'User Deleted',
        text: 'The selected user was successfully deleted'
      })
    }
  }
}
</script>
