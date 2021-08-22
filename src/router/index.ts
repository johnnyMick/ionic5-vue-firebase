import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue';
import Registration from '@/views/Registration.vue';
import ResetPassword from '@/views/ResetPassword.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/tab1'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/home/',
    component: Home,
    children: [
      {
        path: '',
        redirect: '/home/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: "NotFound",
    component: () => import("@/views/NotFound.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
