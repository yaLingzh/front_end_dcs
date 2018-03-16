
import PageMain from '@/components/index/PageMain'
import HelloWorld from '@/components/HelloWorld'
export default [
  {
    path: '/',
    meta: {
      title: '首页',
    },
    component: PageMain//require('../components/index/PageMain.vue'),
  },
  {
    path: 'HelloWorld',
    meta: {
      title: '首页',
    },
    component: HelloWorld,
  },

]
