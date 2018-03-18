<template>
<div>
  <div class="header">
    <div class="common-content">
      <div class="header-top">
        <p class="header-top-name"><em class="iconfont icon-logo"></em>project name - DCS测试管理软件</p>
        <ul class="header-nav-first">
          <li class="header-nav-first-current">文件</li>
          <li>规程测试</li>
          <li>趋势</li>
          <li>记录</li>
          <li>账户管理</li>
        </ul>
      </div>
      <div class="ovh">
        <dl class="header-nav-child">
          <dd class="header-nav-child-current"><a href="javascript:;"><em class="iconfont icon-header-build"></em>
          <p>新建</p></a></dd>
          <dd><a href="javascript:;"><em class="iconfont icon-header-open"></em>
          <p>打开</p></a></dd>
          <dd><a href="javascript:;"><em class="iconfont icon-header-save"></em>
          <p>保存</p></a></dd>
          <dd><a href="javascript:;"><em class="iconfont icon-header-addFirst"></em>
          <p>初始化导入</p></a></dd>
          <dd><a href="javascript:;"><em class="iconfont icon-header-add"></em>
          <p>导入</p></a></dd>
          <dd><a href="javascript:;"><em class="iconfont icon-header-zu"></em>
          <p>新建用例组</p></a></dd>
          <dt>基础操作</dt>
        </dl>
        <em class="header-nav-line"></em>
        <dl class="header-nav-child">
          <dd class=""><a href="javascript:;"><em class="iconfont icon-header-test"></em>
          <p>测试环境</p></a></dd>
          <dd><a href="javascript:;"><em class="iconfont icon-header-set"></em>
          <p>网络配置</p></a></dd>
          <dd><a href="javascript:;"><em class="iconfont icon-header-see"></em>
          <p>环境自检</p></a></dd>
          <dd><a href="javascript:;"><em class="iconfont icon-header-goon"></em>
          <p>执行参数</p></a></dd>
          <dd><a href="javascript:;"><em class="iconfont icon-header-language"></em>
          <p>语言切换</p></a></dd>
          <dt>配置</dt>
        </dl>
      </div>
    </div>
  </div>
  <div class="body-content">
    <el-row :gutter="0">
      <el-col :span="5">
        <div class="grid-content grid-bg-purple-dark">
          <p class="left-menu-tree-title">项目资源 <em class class="el-icon-minus"></em></p>
          <p class="left-menu-tree-tool">
            <em class="iconfont icon-menu-see"></em><em class="iconfont icon-menu-break"></em>
             <el-input placeholder="请输入内容" auto-complete="on" v-model="searchText" size="mini" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </p>
          <div class="grid-left-content">内容 trees</div>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="grid-content grid-bg-purple">
        <p class="grid-middle-title"><em class="el-icon-minus"></em></p>
        <div class="grid-middle-content">内容</div>
       </div>
       <div class="grid-content grid-bg-purple">
         <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
            <el-tab-pane
              :key="item.name"
              v-for="(item, index) in editableTabs"
              :label="item.title"
              :name="item.name"
            >
              <div class="grid-middle-content">{{item.content}}</div>
            </el-tab-pane>
          </el-tabs>
       </div>
    </el-col>
      <el-col :span="6"><div class="grid-content grid-bg-purple-light">
        <p class="grid-middle-title">趋势<em class="el-icon-minus"></em></p>
        <div class="grid-side-content">
          <TREND></TREND>
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
     editableTabsValue: '2',
      editableTabs: [{
        title: '工具',
        name: '1',
        content: '工具 content'
      }, {
        title: '记录',
        name: '2',
        content: '记录 content'
      }],
      tabIndex: 2
    }
  },
  methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
  },
  components:{
    TREND: resolve => require(['./trend/trend.vue'], resolve)
  },
}
</script>


