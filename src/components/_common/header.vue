<template>
  <div>
  	<div class="header">
		    <div class="common-content">
		      <div class="header-top">
		        <p class="header-top-name"><em class="iconfont icon-logo"></em>project name - DCS测试管理软件</p>
		        <ul class="header-nav-first">
		          <li :class="{navFirstCurrent: currentNav == 'files'}"  @click="currentNav = 'files'">文件</li>
		          <li :class="{navFirstCurrent: currentNav == 'workTest'}" @click="currentNav='workTest'">规程测试</li>
		          <li :class="{navFirstCurrent: currentNav == 'trend'}" @click="currentNav='trend'">趋势</li>
		          <li :class="{navFirstCurrent: currentNav == 'record'}" @click="currentNav='record'">记录</li>
		          <li :class="{navFirstCurrent: currentNav == 'account'}" @click="currentNav='account'">账户管理</li>
		        </ul>
		      </div>
		      <div class="ovh" v-if="currentNav == 'files'">
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
		      <!-- 规程测试 -->
		      <div class="ovh" v-if="currentNav == 'workTest'">
		        <dl class="header-nav-child">
		          <dd class="navChildCurrent"><a href="javascript:;"><em class="iconfont icon-header-record"></em>
		          <p>测试记录</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-report"></em>
		          <p>统计报表</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-log"></em>
		          <p>日志</p></a></dd>
		          <dt>记录</dt>
		        </dl>
		      </div>
		      <!-- 趋势 -->
		      <div class="ovh" v-if="currentNav == 'trend'">
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
		      <!-- 记录 -->
		      <div class="ovh" v-if="currentNav == 'record'">
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
		      <!-- 账户管理 -->
		      <div class="ovh" v-if="currentNav == 'account'">
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
  </div>
</template>
<script>
 export default{
 	name:'headerNav',
 	data(){
 		return {
 			currentNav: 'files'
 		}
 	},

 }
</script>