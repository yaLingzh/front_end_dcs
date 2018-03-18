
import PageMain from '@/components/index/PageMain'
import HelloWorld from '@/components/PageMain'
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
            }
    ]
  },


]
