import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      transition: 'fade',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: { transition: 'slide-left' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/robots',
      name: 'robots',
      meta: { transition: 'fade' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RobotsPage.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      transition: 'fade',

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TasksPage.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      transition: 'fade',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfilePage.vue')
    }  
    ,
    {
      path: '/pay',
      name: 'pay',
      transition: 'fade',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Pay.vue')
    },
    ,
    {
      path: '/robots/:id',
      name: 'myrobot',
      transition: 'fade',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MyRobot.vue')
    } ,
    {
      path: '/login',
      name: 'login',
      transition: 'fade',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    }  ,
    {
      path: '/signup',
      name: 'signup',
      transition: 'fade',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/trading/:id',
      name: 'trading',
      transition: 'fade',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Trading.vue')
    }     ,
    {
      path: '/mining/:id',
      name: 'mining',
      transition: 'fade',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Mining.vue')
    }                  
  ]
})

export default router
