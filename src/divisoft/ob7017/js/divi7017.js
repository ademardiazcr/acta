/*=========================================================================================
 MODELO VUE.JS  VUAX DIVISOFT  2020  
  Generado por Divisoft Code Robot 17-11-2020:19:57:36 
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
    if (CmsDAta.Referencia > 0)
        filas.push({
            NOMBRE: "REFERENCIA",
            VALOR1: CmsDAta.Referencia,
            VALOR2: "",
            CDATA: "0"
        });
    else

        filas.push({
        NOMBRE: "REFERENCIA",
        VALOR1: data.REFERENCIA,
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
        NOMBRE: "REFERENCIA",
        VALOR1: "",
        VALOR2: "999999999999",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "CRM_K_UTILITY.CRM_F_getRutaDocumento(COD_COMPANIA, REFERENCIA) AS RUTA",
        VALOR1: "",
        VALOR2: "JSON",
        CDATA: "0"
    });

    return filas;
};
//addFilasDet funcion completa 


// RegistroNuevo Gen_CAMPOS_GRID(4)
export const filtros = [{
    "NOMBRE_CAMPO": "Cod Compania",
    "NOMBRE_INTERNO": "COD_COMPANIA",
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
        }, {
            "TIPO": "LIKE",
            "LABEL": "texto"
        },
    ]
}, {
    "NOMBRE_CAMPO": "Num Pedido",
    "NOMBRE_INTERNO": "NUM_PEDIDO",
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
}, {
    "NOMBRE_CAMPO": "Referencia",
    "NOMBRE_INTERNO": "REFERENCIA",
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
    COD_COMPANIA: "0",
    NUM_PEDIDO: 0,
    REFERENCIA: 0,
    FECHA_ADICION: "0",
}];





export const mensajesValidacion = {
    custom: {
        COD_COMPANIA: {
            required: "El Cod Compania es obligatorio"
        },
        NUM_PEDIDO: {
            required: "El Num Pedido es obligatorio"
        },
        REFERENCIA: {
            required: "El Referencia es obligatorio"
        },
    }
};
// RegistroNuevo Gen_CAMPOS_GRID(5)
export const columnDefs = [{
        headerName: "Cod Compania",
        field: "COD_COMPANIA",
        filter: true,
        lockPosition: true,
        width: 150
    },
    {
        headerName: "Num Pedido",
        field: "NUM_PEDIDO",
        filter: true,
        lockPosition: true,
        width: 150
    },
    {
        headerName: "Referencia",
        field: "REFERENCIA",
        filter: true,
        lockPosition: true,
        width: 150
    },
]; // De defincion de  Columnas



/// solo si lleva ALGUN DOCUMENTO MULTIMEDIA    CMS       pendiente de crear en oracle   
export const CMSDATA7017 = [{
    EntidadCodigo: "26",
    LlaveExterna: "9000",
    NumNivel: 1265,
    NumDoc: 0,
    Encriptado: "",
    IndMultipleEntidad: "1",
    Directorio: "1",
    llavegenerica: ""
}];