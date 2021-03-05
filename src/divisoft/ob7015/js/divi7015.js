/*=========================================================================================
 MODELO VUE.JS  VUAX DIVISOFT  2020  
  Generado por Divisoft Code Robot 06-11-2020:16:31:29 
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
        NOMBRE: "COD_CLIENTE",
        VALOR1: data.COD_CLIENTE,
        VALOR2: "9999999999",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "FECHA",
        VALOR1: data.FECHA,
        VALOR2: process.env.VUE_APP_FECHA_FORMAT,
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "TIP_COBRO",
        VALOR1: data.TIP_COBRO,
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "DETALLE",
        VALOR1: data.DETALLE,
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "NOM_PROVEEDOR",
        VALOR1: data.NOM_PROVEEDOR,
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "ESPECIFICACIONES",
        VALOR1: data.ESPECIFICACIONES,
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "IND_ESTADO",
        VALOR1: data.IND_ESTADO,
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "NOM_CLIENTE",
        VALOR1: data.NOM_CLIENTE,
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "DIR_EMAIL",
        VALOR1: data.DIR_EMAIL,
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "NUM_TELEFONO",
        VALOR1: data.NUM_TELEFONO,
        VALOR2: "999999999999",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "NUM_CELULAR",
        VALOR1: data.NUM_CELULAR,
        VALOR2: "9999999999",
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
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "COD_CLIENTE",
        VALOR1: "",
        VALOR2: "9999999999",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "FECHA",
        VALOR1: "",
        VALOR2: process.env.VUE_APP_FECHA_FORMAT,
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "TIP_COBRO",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "DETALLE",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "NOM_PROVEEDOR",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "ESPECIFICACIONES",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "IND_ESTADO",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "NOM_CLIENTE",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "DIR_EMAIL",
        VALOR1: "",
        VALOR2: "",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "NUM_TELEFONO",
        VALOR1: "",
        VALOR2: "999999999999",
        CDATA: "0"
    });
    filas.push({
        NOMBRE: "NUM_CELULAR",
        VALOR1: "",
        VALOR2: "9999999999",
        CDATA: "0"
    });
    return filas;
};
//addFilasDet funcion completa 


// RegistroNuevo Gen_CAMPOS_GRID(4)
export const filtros = []; // fin de filtros


//////////////////////////////////////

// RegistroNuevo  Gen_CAMPOS_MANTE(1)
export const datosDefault = [{
    COD_COMPANIA: "0",
    NUM_PEDIDO: 0,
    COD_CLIENTE: 0,
    FECHA: "0",
    TIP_COBRO: "1",
    DETALLE: "",
    NOM_PROVEEDOR: "",
    ESPECIFICACIONES: "",
    IND_ESTADO: "1",
    NOM_CLIENTE: "",
    DIR_EMAIL: "",
    NUM_TELEFONO:0 ,
    NUM_CELULAR: 0,
}];





export const mensajesValidacion = {
    custom: {
        FECHA: {
            required: "El Fecha es obligatorio"
        },
         
        IND_ESTADO: {
            required: "El Ind Estado es obligatorio"
        },
    }
};
// RegistroNuevo Gen_CAMPOS_GRID(5)
export const columnDefs = [ 
    {
        headerName: "Num Pedido",
        field: "NUM_PEDIDO",
        filter: true,
        lockPosition: true,
        width: 200
    },
    {
        headerName: "Cliente",
        field: "NOM_CLIENTE",  
        filter: true,
        lockPosition: true,
        width: 300
    },
    {
        headerName: "Descripción",
        field: "DETALLE",
        filter: true,
        lockPosition: true,
        width: 400
    },
    {
        headerName: "Fecha",
        field: "FECHA",
        filter: true,
        lockPosition: true,
        width: 200
    },
    {
        headerName: "Estado",
        field: "NOMBRE_ESTADO",
        filter: true,
        lockPosition: true,
        width: 200,
        cellRendererFramework: 'CellRendererStatus'
    },
]; // De defincion de  Columnas



export const columnDefsAsig = [
    {
        headerName: 'Asignar',
        field: 'transactions',
        filter: false,
        lockPosition: true,
        width: 110,
        cellRendererFramework: 'CellRendererActions'
      },
    {
        headerName: "Num Pedido",
        field: "NUM_PEDIDO",
        filter: true,
        lockPosition: true,
        width: 200
    },
    {
        headerName: "Cliente",
        field: "NOM_CLIENTE",  
        filter: true,
        lockPosition: true,
        width: 300
    },
    {
        headerName: "Descripción",
        field: "DETALLE",
        filter: true,
        lockPosition: true,
        width: 400
    },
    {
        headerName: "Fecha",
        field: "FECHA",
        filter: true,
        lockPosition: true,
        width: 200
    },
    {
        headerName: "Estado",
        field: "NOMBRE_ESTADO",
        filter: true,
        lockPosition: true,
        width: 200,
        cellRendererFramework: 'CellRendererStatus'
    },
]; // De defincion de  Columnas
 

export const columnDefsRevokar = [
    {
        headerName: 'Quitar Asig',
        field: 'transactions',
        filter: false,
        lockPosition: true,
        width: 110,
        cellRendererFramework: 'CellRendererActions'
      },
    {
        headerName: "Num Pedido",
        field: "NUM_PEDIDO",
        filter: true,
        lockPosition: true,
        width: 200
    },
    {
        headerName: "Cliente",
        field: "NOM_CLIENTE",  
        filter: true,
        lockPosition: true,
        width: 300
    },
    {
        headerName: "Descripción",
        field: "DETALLE",
        filter: true,
        lockPosition: true,
        width: 400
    },
    {
        headerName: "Fecha",
        field: "FECHA",
        filter: true,
        lockPosition: true,
        width: 200
    },
    {
        headerName: "Estado",
        field: "NOMBRE_ESTADO",
        filter: true,
        lockPosition: true,
        width: 200,
        cellRendererFramework: 'CellRendererStatus'
    },
]; // De defincion de  Columnas


/// solo si lleva ALGUN DOCUMENTO MULTIMEDIA    CMS       pendiente de crear en oracle   
export const CMSDATA7015 = [{
    EntidadCodigo: "26",
    LlaveExterna: "9000",
    NumNivel: 1265,
    numDoc: 0,
    Encriptado: "",
    IndMultipleEntidad: "1",
    Directorio: "1",
    llavegenerica: ""
}];


export const LISTA_ESTADO = [

    { text: "Registrado", value: "1" },
    { text: "Atendido", value: "2" },
    { text: "Aceptado", value: "3" },

    { text: "Realizado", value: "4" },

    { text: "Proceso de Envio", value: "5" },
    { text: "Concluido", value: "6" },
    { text: "Rechazado", value: "7" },
    { text: "Suspendido", value: "8" },

];