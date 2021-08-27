import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1aac3357 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _662ec080 = () => interopDefault(import('../pages/price.vue' /* webpackChunkName: "pages/price" */))
const _3f919460 = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _26b91611 = () => interopDefault(import('../pages/project1.vue' /* webpackChunkName: "pages/project1" */))
const _26c72d92 = () => interopDefault(import('../pages/project2.vue' /* webpackChunkName: "pages/project2" */))
const _26d54513 = () => interopDefault(import('../pages/project3.vue' /* webpackChunkName: "pages/project3" */))
const _1b7b2ac9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _1aac3357,
    name: "contact"
  }, {
    path: "/price",
    component: _662ec080,
    name: "price"
  }, {
    path: "/project",
    component: _3f919460,
    name: "project"
  }, {
    path: "/project1",
    component: _26b91611,
    name: "project1"
  }, {
    path: "/project2",
    component: _26c72d92,
    name: "project2"
  }, {
    path: "/project3",
    component: _26d54513,
    name: "project3"
  }, {
    path: "/",
    component: _1b7b2ac9,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
