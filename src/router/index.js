import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '@/views/Projects.vue'),
    children: [
      {
        path: ':id',
        name: 'ProjectModal',
        component: () => import(/* webpackChunkName: "project" */ '@/views/Project.vue'),
      },
    ],
  },
  {
    path: '/projects/:id',
    name: 'Project',
    component: () => import(/* webpackChunkName: "project" */ '@/views/Project.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "resume" */ '@/views/Resume.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: { layout: 'Error' },
    component: () => import(/* webpackChunkName: "fileNotFound" */ '@/views/FileNotFound.vue'),
  },
  {
    path: '*',
    redirect: { name: '404' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
