
// import PageMain from '@/components/index/PageMain'
// import HelloWorld from '@/components/PageMain'
export default [
  {
    path: '/',
    meta: {
      title: '首页',
    },
    component: resolve => require(['../components/PageMain.vue'], resolve),
    children:[
            { path: '/info', 
              component: resolve => require(['../components/index/PageMain.vue'], resolve) 
            },
    ]
  },
  {
    meta: {
      title: '中止规程列表',
    },
    path: '/stopList', 
    component: resolve => require(['../components/workTest/stopList.vue'], resolve) 
  },
  {
    meta: {
      title: '用户管理',
    },
    path: '/userManage', 
    component: resolve => require(['../components/account/userManage.vue'], resolve) 
  },
  {
    meta: {
      title: '用户组管理',
    },
    path: '/useGropManage', 
    component: resolve => require(['../components/account/userGroupManage.vue'], resolve) 
  },
  {
    meta: {
      title: '用户授权',
    },
    path: '/authorized', 
    component: resolve => require(['../components/account/authorized.vue'], resolve) 
  }


]
