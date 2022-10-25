import Vue from 'vue'
import VueRouter from 'vue-router'
import Body from '../components/Body.vue';

import { fb } from '../../db';
import store from '../store';
Vue.use(VueRouter)

const routes = [


  {
    path: '/dashboard',
    component: Body,
    redirect: { name: 'dashboard' },
    children: [{
      path: 'acceuil',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../pages/dashboard.vue'),
      meta: {
        title: 'Lotus',
      }
    }]
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: Body,
    redirect: { name: 'patient-list' },

    children: [{
      path: 'doctor-list',
      name: 'doctor-list',
      component: () => import(/* webpackChunkName: "about" */ '../pages/doctors/doctor-list.vue'),
      meta: {
        title: 'Liste des docteurs | Lotus',

      }
    },
    {
      path: 'create-doctor',
      name: 'create-doctor',
      component: () => import(/* webpackChunkName: "about" */ '../pages/doctors/create-doctor.vue'),
      meta: {
        title: 'Ajouter un docteur | Lotus',

      }
    }
    ]
  },
  {
    path: '/patients',
    name: 'patients',
    component: Body,
    redirect: { name: 'patient-list' },

    children: [{
      path: 'patient-list',
      name: 'patient-list',
      component: () => import(/* webpackChunkName: "about" */ '../pages/patients/patient-list.vue'),
      meta: {
        title: 'Liste des patients | Lotus',

      }
    },
    {
      path: 'create-patient',
      name: 'create-patient',
      component: () => import(/* webpackChunkName: "about" */ '../pages/patients/create-patient.vue'),
      meta: {
        title: 'Ajouter un patient | Lotus',

      }
    },
    {
      path: 'patient-profile/:id',
      name: 'patient-profile',
      component: () => import(/* webpackChunkName: "about" */ '../pages/patients/patient-profil.vue'),
      meta: {
        title: 'Profil de la patiente | Lotus',

      }
    }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Page de connexion | Lotus',

    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/authentication/index.vue')
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Body,
    redirect: { name: 'patient-list' },

    children: [{
      path: 'mon-profil',
      name: 'Mon profil',
      component: () => import(/* webpackChunkName: "about" */ '../pages/profiles/profile.vue'),
      meta: {
        title: 'Mon profil | Lotus',

      }
    }]
  },
  { path: '**', redirect: { name: 'dashboard' } },
  { path: '/', redirect: { name: 'dashboard' } },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('isLoggedIn')

  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.name === "Login" && isAuth === 'true') {
    next({ name: "patient-list" })
  }
  if (to.name !== "Login" && isAuth == 'false') {
    next({ name: "Login" })
  }
  next()


});
export default router
