<template>
<div>
  <top-header></top-header>
  <div class="body-content">
    <el-row :gutter="0">
      <el-col :span="4">
        <left-tree></left-tree>
      </el-col>
      <el-col :span="15">
        <div class="grid-content grid-bg-purple">
          <p class="grid-middle-title"><em class="el-icon-minus"></em></p>
          <div class="grid-middle-content">内容</div>
       </div>
       <test-record></test-record>
       <div class="grid-content grid-bg-purple">
         <record></record>
       </div>
    </el-col>
      <el-col :span="5"><div class="grid-content grid-bg-purple-light">
        <p class="grid-middle-title">趋势<em class="el-icon-minus"></em></p>
        <div class="grid-side-content">
          <trend></trend>
        </div>
      </div></el-col>
    </el-row>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     searchText:null,
    }
  },
  methods: {
  },
  components:{
    trend: resolve => require(['./trend/trend.vue'], resolve),
    topHeader: resolve => require(['./_common/header.vue'], resolve),
    record: resolve => require(['./record/record.vue'], resolve),
    testRecord: resolve => require(['./record/testRecord.vue'], resolve),
    leftTree: resolve => require(['./_common/treeOne.vue'], resolve),
  },
}
</script>


