import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Add from '@/views/Add.vue'
import Edit from '@/views/Edit.vue'
import List from '@/views/List.vue'
import Delete from '@/views/Delete.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/add',
    name: 'Add',
    component: Add
  },

  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },

  {
    path: '/list',
    name: 'List',
    component: List
  },

  {
    path: '/delete',
    name: 'Delete',
    component: Delete
  }

]

const router = new VueRouter({
  routes
})

export default router
