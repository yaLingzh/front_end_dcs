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
		          <li :class="{navFirstCurrent: currentNav == 'variable'}" @click="currentNav='variable'">变量组管理</li>
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
		          <dd><a href="javascript:;"><em class="iconfont icon-header-config"></em>
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
		          <dd class="navChildCurrent"><a href="javascript:;"><em class="iconfont icon-header-goon"></em>
		          <p>自动执行</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-singleplay"></em>
		          <p>单步执行</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-play"></em>
		          <p>继续</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-pause"></em>
		          <p>暂停</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-out"></em>
		          <p>退出</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-repeat"></em>
		          <p>循环运行</p></a></dd>
		          <dd><router-link to="/stopList"><em class="iconfont icon-header-stop"></em>
		          <p>中止规程列表</p></router-link></dd>
		          <dt>规程测试</dt>
		        </dl>
		      </div>
		      <!-- 趋势 -->
		      <div class="ovh" v-if="currentNav == 'trend'">
		        <dl class="header-nav-child">
		          <dd class="header-nav-child-current"><a href="javascript:;"><em class="iconfont icon-header-trendAll"></em>
		          <p>趋势组管理</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-fullscreen"></em>
		          <p>趋势组全屏</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-trendtime"></em>
		          <p>闭环响应时间</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-signal"></em>
		          <p>信号仿真</p></a></dd>
		          <dt>趋势</dt>
		        </dl>
		      </div>
		      <!-- 记录 -->
		      <div class="ovh" v-if="currentNav == 'record'">
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
		      <!-- 变量组管理 -->
		      <div class="ovh" v-if="currentNav == 'variable'">
		        <dl class="header-nav-child">
		          <dd class="header-nav-child-current"><a href="javascript:;"><em class="iconfont icon-header-showlist"></em>
		          <p>显示列</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-cancelcurrent"></em>
		          <p>取消当前组强制</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-cancelall"></em>
		          <p>取消所有强制</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-search"></em>
		          <p>搜索</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-edit"></em>
		          <p>编辑组</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-save"></em>
		          <p>保存新组</p></a></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-all"></em>
		          <p>所有强制列表</p></a></dd>
		          <dt>变量组管理</dt>
		        </dl>
		      </div>
		      <!-- 账户管理 -->
		      <div class="ovh" v-if="currentNav == 'account'">
		        <dl class="header-nav-child">
		          <dd class="header-nav-child-current"><router-link to="/userManage"><em class="iconfont icon-header-usergroup"></em>
		          <p>用户管理</p></router-link></dd>
		          <dd><router-link to="/useGropManage"><em class="iconfont icon-header-user"></em>
		          <p>用户组管理</p></router-link></dd>
		          <dd><router-link to="/authorized"><em class="iconfont icon-header-warrant"></em>
		          <p>授权管理</p></router-link></dd>
		          <dd><a href="javascript:;"><em class="iconfont icon-header-loginout"></em>
		          <p>用户登出</p></a></dd>
		          <dt>账户管理</dt>
		        </dl>
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
 			currentNav: 'files',
 			childNav:''
 		}
 	},

 }
</script>