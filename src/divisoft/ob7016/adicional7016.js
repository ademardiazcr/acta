
         // seccion de  PARA AGREGAR EN  ROUTER 
       
          { 

                    path: '/Modulo/CC_SOLI_PEDIDO_BLOG',
                    name: 'CC_SOLI_PEDIDO_BLOG',
                    component: () => import('./divisoft/ob7016/wr7016.vue'),
                    meta: {
                        breadcrumb: [
                            { title: 'Home', url: '/'},
                            { title: 'CC_SOLI_PEDIDO_BLOG' },
                            { title: 'Principal', active: true },
                        ],
                        pageTitle: 'Principal',
                        rule: 'editor'
                    },
                }, 
                
                /// FIN DE ROUTER
               
        //  SECCION DEL MENU 
           {
                url: "/Modulo/CC_SOLI_PEDIDO_BLOG" ,
                slug: "CC_SOLI_PEDIDO_BLOG",
                name: "CC_SOLI_PEDIDO_BLOG",
                icon: "UserIcon",
                i18n: "obj7016",
              },  
               