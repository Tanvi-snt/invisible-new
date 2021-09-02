import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7972eaf3 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4df08e5c = () => interopDefault(import('../pages/price.vue' /* webpackChunkName: "pages/price" */))
const _3efded6c = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _be6d5c16 = () => interopDefault(import('../pages/project1.vue' /* webpackChunkName: "pages/project1" */))
const _be512d14 = () => interopDefault(import('../pages/project2.vue' /* webpackChunkName: "pages/project2" */))
const _be34fe12 = () => interopDefault(import('../pages/project3.vue' /* webpackChunkName: "pages/project3" */))
const _c6f9cd36 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7972eaf3,
    name: "contact"
  }, {
    path: "/price",
    component: _4df08e5c,
    name: "price"
  }, {
    path: "/project",
    component: _3efded6c,
    name: "project"
  }, {
    path: "/project1",
    component: _be6d5c16,
    name: "project1"
  }, {
    path: "/project2",
    component: _be512d14,
    name: "project2"
  }, {
    path: "/project3",
    component: _be34fe12,
    name: "project3"
  }, {
    path: "/",
    component: _c6f9cd36,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
