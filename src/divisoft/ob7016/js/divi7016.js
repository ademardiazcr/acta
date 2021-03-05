/*=========================================================================================
 MODELO VUE.JS  VUAX DIVISOFT  2020  
  Generado por Divisoft Code Robot 17-11-2020:17:25:40 
   AUTOR: ADEMAR DIAZ 
   MODELO DE EDICION DE TABLAS CONFIGURABLE 
   CREADO POR  DIVISOFT DSOA 2020
   COMPONENTE JS   
   LIBRERIA ESPECIFICA PARA EL OBJETO 
========================================================================================== */
// carga las filas a Actualizar 
export function addFilasToSave(data, CmsDAta) {
    var filas = [];

    filas.push({
        NOMBRE: "COD_COMPANIA",
        VALOR1: data.COD_COMPANIA,
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "NUM_PEDIDO",
        VALOR1: data.NUM_PEDIDO,
        VALOR2: "9999999",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "ID_USUARIO",
        VALOR1: data.ID_USUARIO,
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "TEXTO_BLOG",
        VALOR1: data.TEXTO_BLOG,
        VALOR2: "",
        CDATA: "0"
    });
    return filas;
};
//addFilasDet funcion completa 


// carga las filas a Editar
export function getMisFilas() {
    var filas = [];

    filas.push({
        NOMBRE: "SECUENCIA_BLOG",
        VALOR1: "",
        VALOR2: "9999999999",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "COD_COMPANIA",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "NUM_PEDIDO",
        VALOR1: "",
        VALOR2: "9999999",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "ID_USUARIO",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "TEXTO_BLOG",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "FECHA_HORA",
        VALOR1: "",
        VALOR2: process.env.VUE_APP_FECHA_FORMAT,
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "CRM_K_UTILITY.CRM_F_getMiAvatar(COD_COMPANIA,NUM_USUARIO) as AVATAR",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    return filas;
};
//addFilasDet funcion completa 


// RegistroNuevo Gen_CAMPOS_GRID(4)
export const filtros = [{
    "NOMBRE_CAMPO": "Secuencia Blog",
    "NOMBRE_INTERNO": "SECUENCIA_BLOG",
    "VALOR": "",
    "TIPO_FILTRO": [{
            "TIPO": "IGUAL",
            "LABEL": "="
        },
        {
            "TIPO": "MAYOR",
            "LABEL": ">"
        },
        {
            "TIPO": "MENOR",
            "LABEL": "<"
        },
        {
            "TIPO": "MAYORIGUAL",
            "LABEL": "= >"
        },
        {
            "TIPO": "MENORIGUAL",
            "LABEL": "< ="
        },
        {
            "TIPO": "IN",
            "LABEL": "In"
        },
        {
            "TIPO": "NOTIN",
            "LABEL": "Not In"
        }
    ]
}, ]; // fin de filtros


//////////////////////////////////////

// RegistroNuevo  Gen_CAMPOS_MANTE(1)
export const datosDefault = [{
    SECUENCIA_BLOG: 0,
    COD_COMPANIA: "0",
    NUM_PEDIDO: 0,
    IND_COMENTARIO: "0",
    TEXTO_BLOG: "0",
}];





export const mensajesValidacion = {
    custom: {
        SECUENCIA_BLOG: {
            required: "El Secuencia Blog es obligatorio"
        },
        COD_COMPANIA: {
            required: "El Cod Compania es obligatorio"
        },
        NUM_PEDIDO: {
            required: "El Num Pedido es obligatorio"
        },
    }
};
// RegistroNuevo Gen_CAMPOS_GRID(5)
export const columnDefs = [{
    headerName: "Secuencia Blog",
    field: "SECUENCIA_BLOG",
    filter: true,
    lockPosition: true,
    width: 150
}, ]; // De defincion de  Columnas



/// solo si lleva ALGUN DOCUMENTO MULTIMEDIA    CMS       pendiente de crear en oracle   
export const CMSDATA7016 = [{
    EntidadCodigo: "26",
    LlaveExterna: "9000",
    NumNivel: 1265,
    numDoc: 0,
    Encriptado: "",
    IndMultipleEntidad: "1",
    Directorio: "1",
    llavegenerica: ""
}];