 /*=========================================================================================
  MODELO VUE.JS  VUAX DIVISOFT  2020  
    AUTOR: ADEMAR DIAZ 
    MODELO DE EDICION DE TABLAS CONFIGURABLE 
    CREADO POR  DIVISOFT DSOA 2020
    COMPONENTE JS   
    LIBRERIA ESPECIFICA PARA EL OBJETO 
========================================================================================== */ 


 // carga las filas a Editar
    export function getMisFilas() {
      var filas = [];
 
      filas.push({
        NOMBRE: "COD_CATEGORIA",
        VALOR1:null,
        VALOR2: "999",
        CDATA: "0"
      }); 
      filas.push({
        NOMBRE: "DES_CATEGORIA",
        VALOR1:null,
        VALOR2: "",
        CDATA: "0"
      }); 
      filas.push({
        NOMBRE: "IMG_AVATAR",
        VALOR1:null,
        VALOR2: "999999999999",
        CDATA: "0"
      }); 
      filas.push({
        NOMBRE: "HASH_AVATAR",
        VALOR1:null,
        VALOR2: "",
        CDATA: "0"
      }); 
      filas.push({
        NOMBRE: "IND_ESTADO",
        VALOR1:null,
        VALOR2: "",
        CDATA: "0"
      });  return filas; 
    }; 
   //addFilasDet funcion completa 
   
   
  // RegistroNuevo Gen_CAMPOS_GRID(4)
  export const filtros= [ 
     { 
                "NOMBRE_CAMPO":"Cod Categoria",
                "NOMBRE_INTERNO":"COD_CATEGORIA",
                "VALOR":"",
                "TIPO_FILTRO":[ 
                   { 
                      "TIPO":"IGUAL",
                      "LABEL":"="
                  },
                  { 
                      "TIPO":"MAYOR",
                      "LABEL":">"
                  },
                  { 
                      "TIPO":"MENOR",
                      "LABEL":"<"
                  },
                  { 
                      "TIPO":"MAYORIGUAL",
                      "LABEL":"= >"
                  },
                  { 
                      "TIPO":"MENORIGUAL",
                      "LABEL":"< ="
                  },
                  { 
                      "TIPO":"IN",
                      "LABEL":"In"
                  },
                  { 
                      "TIPO":"NOTIN",
                      "LABEL":"Not In"
                  } 
     ]
                      },  ];   // fin de filtros

 
//////////////////////////////////////
 
             // RegistroNuevo  Gen_CAMPOS_MANTE(1)
             export const datosDefault =[{
     COD_CATEGORIA:0,
     DES_CATEGORIA:"0",
     IMG_AVATAR:0,
     HASH_AVATAR:"0",
     IND_ESTADO:"0",
}];

             
  
             
   
    export const mensajesValidacion = {
    custom: {
 COD_CATEGORIA : {
            required: "El Cod Categoria es obligatorio" 
        },DES_CATEGORIA : {
            required: "El Des Categoria es obligatorio" 
        },IND_ESTADO : {
            required: "El Ind Estado es obligatorio" 
        },   }
};    
 // RegistroNuevo Gen_CAMPOS_GRID(5)
              export const columnDefs = [
  {
                                  headerName: "Cod Categoria",
                                  field: "COD_CATEGORIA",
                                  filter: true,
                                  lockPosition: true,
                                  width: 150
                                }, 
                              {
                                  headerName: "Des Categoria",
                                  field: "DES_CATEGORIA",
                                  filter: true,
                                  lockPosition: true,
                                  width: 500
                                }, 
                              ];   // De defincion de  Columnas

  
 
/// solo si lleva ALGUN DOCUMENTO MULTIMEDIA    CMS       pendiente de crear en oracle   
export const CMSDATA2526 =[{ 
  EntidadCodigo:"26",
  LlaveExterna:"9000",
  NumNivel:1265,
  numDoc:0,
  Encriptado:"", 
  IndMultipleEntidad:"1",
  Directorio:"1",
  llavegenerica:""
}];


 export const LI_ESTADO= [
{ text: "Inactivo", value: "0" },{ text: "Activo", value: "1" },]; 