import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Register.vue')
  },
  {
    path: '/detail:id',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Detail.vue')
  },
  {
    path: '/category',
    name: 'Category',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Category.vue')
  },
  {
    path: '/Filtercategory/:name',
    name: 'FilterCategory',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/FilterCategory.vue')
  },
  {
    path: '/ingredients',
    name: 'Ingredients',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Ingredients.vue')
  },
  {
    path: '/Filteringredients/:name',
    name: 'FilterIngredients',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/FilterIngredients.vue')
  },
  {
    path: '/area',
    name: 'Area',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Area.vue')
  },
  {
    path: '/Filterarea',
    name: 'FilterArea',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/FilterArea.vue')
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/favorite',
    name: 'Favorite',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Favorite.vue')
  },
  {
    path: '/footer',
    name: 'Footer',
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "search" */ '../views/Footer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
