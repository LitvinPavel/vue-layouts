import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./layouts/home.vue')
    },
    {
      path: '/form',
      component: () => import('./layouts/layout_form.vue'),
      children: [
        {
          path: 'sign-in',
          name: 'sign-in',
          component: () => import('./components/SignIn.vue')
        },
        {
          path: 'sign-up',
          name: 'sign-up',
          component: () => import('./components/SignUp.vue')
        },
        {
          path: 'recovery',
          name: 'recovery',
          component: () => import('./components/Recovery.vue')
        },
      ]
    },
    {
      path: '/product',
      component: () => import('./layouts/layout_product.vue'),
      children: [
        {
          path: 'vebinar',
          name: 'vebinar',
          component: () => import('./components/Vebinar.vue')
        }
      ]
    }
  ]
})
