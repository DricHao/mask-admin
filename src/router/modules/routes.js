import { loader } from '@core'
import { App, Home } from '@layouts'
export default [
  {
    path: '/',
    name: 'home',
    redirect: '/analysis',
    component: Home,
    meta: {
      title: '数据概览',
      icon: 'icon-shop_fill'
    },
    children: [
      {
        path: '/analysis',
        name: 'analysis',
        component: loader('views/dashboard/analysis'),
        meta: {
          auth: true,
          title: '数据概览',
          icon: 'icon-picture'
        }
      }
    ]
  },
  {
    path: '/live-home',
    name: 'live-home',
    component: Home,
    meta: {
      title: '数据明细',
      icon: 'icon-redpacket'
    },
    children: [
      // {
      //   path: '/crud',
      //   name: 'crud',
      //   component: loader('views/crud/crud.vue'),
      //   meta: {
      //     auth: true,
      //     title: '表单生成器',
      //     icon: 'icon-task'
      //   }
      // },
      // {
      //   path: '/index2',
      //   name: 'index2',
      //   component: loader('views/live/workspace.vue'),
      //   meta: {
      //     auth: true,
      //     title: '首页',
      //     icon: 'icon-supply'
      //   }
      // },
      // {
      //   path: '/scrollbar',
      //   name: 'scrollbar',
      //   component: loader('views/live/scrollbar.vue'),
      //   meta: {
      //     auth: true,
      //     title: 'scrollbar',
      //     icon: 'icon-questions'
      //   }
      // },
      // {
      //   path: '/index3',
      //   name: 'index3',
      //   component: loader('views/live/workspace.vue'),
      //   meta: {
      //     auth: true,
      //     title: '首页',
      //     icon: 'icon-publishgoods_fill',
      //     hide: true
      //   }
      // },
      // {
      //   path: '/antd-table',
      //   name: 'antd-table',
      //   component: loader('views/live/antd-table.vue'),
      //   meta: {
      //     auth: true,
      //     title: '表格生成器',
      //     icon: 'icon-publishgoods_fill'
      //   }
      // },
      {
        path: '/antd-table-creater',
        name: 'antd-table-creater',
        component: loader('views/crud/antd-table-creater.vue'),
        meta: {
          auth: true,
          title: '管理员列表',
          icon: 'icon-publishgoods_fill'
        }
      },
      {
        path: '/antd-table-data',
        name: 'antd-table-data',
        component: loader('views/crud/and-table-data.vue'),
        meta: {
          auth: true,
          title: '数据统计',
          icon: 'icon-publishgoods_fill'
        }
      },
    ]
  },
  
]
