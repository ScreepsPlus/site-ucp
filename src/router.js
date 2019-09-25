import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/assets/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/hosted-agent',
      name: 'hosted-agent',
      meta: { requiresAuth: true },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "hosted-agent" */ './views/HostedAgent.vue')
    },
    {
      path: '/auth/login',
      name: 'login',
      meta: { layout: 'blank' },
      alias: ['/login', '/register', '/signup', '/auth/register'],
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/auth/recover',
      name: 'recover',
      meta: { layout: 'blank' },
      alias: ['/recover'],
      component: () => import(/* webpackChunkName: "recover" */ './views/Recover.vue')
    },
    {
      path: '/auth/recover/end',
      name: 'recover-end',
      meta: { layout: 'blank' },
      alias: ['/recover/end'],
      props (route) {
        return { token: route.query.token }
      },
      component: () => import(/* webpackChunkName: "recoverEnd" */ './views/RecoverEnd.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: 'blank' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      meta: { layout: 'blank' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: {
        async beforeRouteEnter (to, from, next) {
          await auth.logout()
          next('/login')
        }
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const loggedIn = await auth.loggedIn()
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
      return
    }
  }
  next()
})

export default router
