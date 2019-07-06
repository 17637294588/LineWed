import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import show from '@/components/show'
import show_video from '@/components/show_video'
import file from '@/components/file'
import ckenitor from '@/components/ckenitor'
import socket from '@/components/socket'
import socket_push from '@/components/socket_push'
import falter from '@/components/falter'
import webssh from '@/components/webssh'
import run_horse from '@/components/run_horse'

Vue.use(Router)

export default new Router({
  mode: 'history', //去除 # 
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/show',
      name: 'show',
      component: show
    },
    {
      path: '/show_video',
      name: 'show_video',
      component: show_video
    },
    {
      path: '/file',
      name: 'file',
      component: file
    },
    {
      path: '/ckenitor',
      name: 'ckenitor',
      component: ckenitor
    },
    {
      path: '/socket',
      name: 'socket',
      component: socket
    },
    {
      path: '/socket_push',
      name: 'socket_push',
      component: socket_push
    },
    {
      path: '/falter',
      name: 'falter',
      component: falter
    },
    {
      path: '/webssh',
      name: 'webssh',
      component: webssh
    },
    {
      path: '/run_horse',
      name: 'run_horse',
      component: run_horse
    },
  ]
})
