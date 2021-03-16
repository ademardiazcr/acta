/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/**
 * tavoadmin
 */

// para visitante
export const menuVisitante = [{
        url: "/dashboard/analytics",
        name: "Principal",
        slug: "dashboard",
        icon: "HomeIcon",
    },

    // {
    //     url: "/acercade",
    //     name: "Quienes Somos",
    //     slug: "acercade",
    //     icon: "UserIcon",

    // },
    // {
    //     url: "/oficinas",
    //     name: "Oficinas",
    //     slug: "oficinas",
    //     icon: "MapIcon",
    // },
    // {
    //     url: "/servicios",
    //     name: "Servicios",
    //     slug: "servicios",
    //     icon: "GlobeIcon",
    // },

    // {
    //     url: "/admin/solicitud/0/VerifyKey/0",
    //     name: "Mis Pedidos",
    //     slug: "SOLICITUD_PEDIDO",
    //     icon: "TruckIcon",
    // },

    

    // {
    //     url: "/pages/login",
    //     name: "Iniciar Sesión",
    //     slug: "page-login",
    //     icon: "LogInIcon",
    // },

    {
        url: "/pruebas",
        name: "Pruebas",
        slug: "page-login",
        icon: "LogInIcon",
    },

    {
        url: "/pages/login2",
        name: "Login",
        slug: "page-login",
        icon: "LogInIcon",
    },

    

    {
        url: "/pages/user-settings",
        name: "Directorio",
        slug: "page-login",
        icon: "LogInIcon",
    },

    {
        url: "/pages/registro",
        name: "Actas",
        slug: "page-login",
        icon: "LogInIcon",
    },
];

//OFICINA Y CLIENTE
export const menuBasico = [{
        header: "Principal Basico",
        icon: "HomeIcon",
        name: "Dashboard",
        items: [{
                url: "/dashboard/analytics",
                name: "Principal",
                slug: "dashboard",
                icon: "HomeIcon",
                //isDisabled: true
                rol: [{ rol: "admin" }, { rol: "general" }]
            },
            {
                url: "/apps/chat/0",
                name: "chat",
                slug: "chat",
                icon: "HomeIcon",
                i18n: "Chat"
            },

            {
                url: "/clasificaPedido",
                name: "Pedidos",
                slug: "Pedido",
                icon: "HomeIcon",
                i18n: "Clasifica"
            },
            {
                url: "/asignaTareas",
                name: "Asignar Tareas",
                slug: "asignaTareas",
                icon: "HomeIcon",
            },
            {
                url: "/consultaViajes",
                name: "Consultar Viajes",
                slug: "consultaViajes",
                icon: "HomeIcon",
            },
            {
                url: "/clientes",
                name: "Clientes Registrados",
                slug: "clientes",
                icon: "HomeIcon",
            },
        ]
    },
    {
        url: "/admin/solicitud/0/VerifyKey/0",
        name: "Mis Mandados",
        slug: "SOLICITUD_PEDIDO",
        icon: "TruckIcon",
    },

    {
        url: "/acercade",
        name: "Quienes Somos",
        slug: "acercade",
        icon: "UserIcon",

    },
    {
        url: "/oficinas",
        name: "Oficinas",
        slug: "oficinas",
        icon: "MapIcon",
    },
    {
        url: "/servicios",
        name: "Servicios",
        slug: "servicios",
        icon: "GlobeIcon",
    },
    {
        url: "/Modulo/SOLICITUD_PEDIDO",
        name: "Realizar Pedido",
        slug: "SOLICITUD_PEDIDO",
        icon: "TruckIcon",
    },
    {
        url: "/apps/work/0",
        name: "Prueba Dash",
        slug: "work",
        icon: "HomeIcon"
    },
    {
        url: "/pages/login",
        name: "Iniciar Sesión",
        slug: "page-login",
        icon: "LogInIcon",
    },
];

//export const menuMensa = [{
export const menuAdmin = [{
        header: "Principal Admin",
        icon: "HomeIcon",
        name: "Dashboard",
        items: [{
                url: "/dashboard/analytics",
                name: "Principal",
                slug: "dashboard-analytics",
                icon: "HomeIcon",
                //isDisabled: true
                rol: [{ rol: "admin" }, { rol: "general" }]
            },
            {
                url: "/apps/chat/0",
                name: "chat",
                slug: "chat",
                icon: "HomeIcon",
                i18n: "Chat"
            },
            {
                url: "/apps/work/0",
                name: "Prueba Dash",
                slug: "work",
                icon: "HomeIcon"
            },

            {
                url: "/clasificaPedido",
                name: "Pedidos",
                slug: "Pedido",
                icon: "HomeIcon",
                i18n: "Clasifica"
            },
            {
                url: "/asignaTareas",
                name: "Asignar Tareas",
                slug: "asignaTareas",
                icon: "HomeIcon",
            },
            {
                url: "/consultaViajes",
                name: "Consultar Viajes",
                slug: "consultaViajes",
                icon: "HomeIcon",
            },
            {
                url: "/clientes",
                name: "Clientes Registrados",
                slug: "clientes",
                icon: "HomeIcon",
            },
            {
                url: "/sitioMensajeria",
                name: "Mensajeria",
                slug: "Mensajeria",
                icon: "HomeIcon",
                i18n: "Mensajeria"
            },

        ]
    },

    {
        url: "/acercade",
        name: "Quienes Somos",
        slug: "acercade",
        icon: "UserIcon",

    },
    {
        url: "/oficinas",
        name: "Oficinas",
        slug: "oficinas",
        icon: "MapIcon",
    },
    {
        url: "/servicios",
        name: "Servicios",
        slug: "servicios",
        icon: "GlobeIcon",
    },
    {
        url: "/admin/solicitud/0/VerifyKey/0",
        name: "Mandados En Proceso",
        slug: "SOLICITUD_PEDIDO",
        icon: "TruckIcon",
    },

    {
        url: "/usuarios/lista-usuarios",
        name: "Usuarios",
        slug: "lista-usuarios",
        icon: "UserIcon",
    },
    
    {
        url: "/pages/login",
        name: "Iniciar Sesión",
        slug: "page-login",
        icon: "LogInIcon",
    },
];