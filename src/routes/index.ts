import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/modules/landing/pages/HomePage.vue";



const route = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
      scrollBehavior() {
    return { top: 0 }
  },
    linkActiveClass: 'active',
  linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/servicios',
            name: 'servicios',
            component:() => import('@/modules/landing/pages/ServiciosPage.vue'),

        },
         {
            path: '/nosotros',
            name: 'nosotros',
            component:() => import('@/modules/landing/pages/NosotrosPage.vue'),

        },
        {
            path: '/contacto',
            name: 'contacto',
            component:() => import('@/modules/landing/pages/Contacto.vue'),

        },
         {
            path: '/onpay',
            name: 'onpay',
            component:() => import('@/modules/landing/pages/OnpayPage.vue'),

        },
        //Regulación 
        {
            path:'/calidad',
            name:'calidad',
            component:() => import('@/modules/Regulacion/Pages/CalidadPage.vue')
         },
         {
            path:'/habeas-data',
            name:'habeasdata',
            component:() => import('@/modules/Regulacion/Pages/HabeasData.vue')
         },
         {
            path:'/politica-datos',
            name:'politica-datos',
            component:() => import('@/modules/Regulacion/Pages/PoliticaDatos.vue')
         },
         {
            path:'/internet-sano',
            name:'internet-sano',
            component:() => import('@/modules/Regulacion/Pages/InternetSano.vue')
         },
         {
            path:'/proteccion-usuario',
            name:'proteccion-usuario',
            component:() => import('@/modules/Regulacion/Pages/ProtecionUsuario.vue')
         },
         {
            path:'/actualizacion',
            name:'actualizacion',
            component:() => import('@/modules/Regulacion/Pages/Actualizacion.vue')
         },
         {
            path:'/regimenproteccion',
            name:'regimenproteccion',
            component:() => import('@/modules/Regulacion/Pages/RegimenProteccion.vue')
         },
         {
            path:'/enteregulador',
            name:'enteregulador',
            component:() => import('@/modules/Regulacion/Pages/Enteregulador.vue')
         },

         //SITIMAS
         
         {
            path:'/pqr',
            name:'pqr',
            component:() => import('@/modules/Siti-Mas/PqrPage.vue')
         },
         {
            path:'/cobertura',
            name:'cobertura',
            component:() => import('@/modules/Siti-Mas/CoberturaPge.vue')
         },
         {
            path:'/atencion',
            name:'atencion',
            component:() => import('@/modules/Siti-Mas/CentrodeAtencion.vue')
         },
         {
            path:'/recoleccion',
            name:'recoleccion',
            component:() => import('@/modules/Siti-Mas/RecolecionEquipos.vue')
         },
         {
            path:'/tdt',
            name:'tdt',
            component:() => import('@/modules/Siti-Mas/TdtPage.vue')
         },
         {
            path:'/terminoscondiciones',
            name:'terminos-condiciones',
            component:() => import('@/modules/Siti-Mas/Termininos.vue')
         },
         {
            path:'/politicaprivacidad',
            name:'politica-privacidad',
            component:() => import('@/modules/Siti-Mas/PoliticaPrivacidad.vue')
         }
       
        
        
         
         
         


    ]

})
export default route;