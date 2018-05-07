import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
// import S from 'storejs'
import store from './store'
Vue.use(Router)
import routes from './router'
import 'assets/less/index.less'
const router = new Router({
  mode: 'history',
  routes
})
// Vue.prototype.$S = S
// 全局导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     if (S('token')) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       })
//     }
//   } else {
//     next()
//   }
// })

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})