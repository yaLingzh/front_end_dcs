<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './sass/_common.scss'
Vue.use(ElementUI)
export default {
  name: 'App'
}
</script>
