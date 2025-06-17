<template>
<div class="header">Vue-实验作业集</div>
<div class="content left">
  <ul>
    <li><router-link to="/计数器+1">计数器加1测试</router-link></li>
    <li><router-link to="/区块链">区块链的应用场景</router-link></li>
    <li><router-link to="/实验8-1">实验8-1</router-link></li>
    <li><router-link to="/实验8-2">实验8-2</router-link></li>
    <li><router-link to="/实验12">实验12</router-link></li>
    <li><router-link to="/实验12_2">实验12_2</router-link></li>
    <li><router-link to="/实验12_test12_1">test12-1</router-link></li>
    <li><router-link to="/test12_1组合式">test12-1组合式</router-link></li>
    <li><router-link to="/test12_1选项式">test12-1选项式</router-link></li>
    <li><router-link to="/test13_1">test13-1</router-link></li>
    <li><router-link to="/test13_fathers">test13-fathers</router-link></li>
    <li><router-link to="/test13_2">test13-2</router-link></li>
    <li><router-link to="/test10_1">test10-1</router-link></li>
    <li><router-link to="/test10_2">test10-2</router-link></li>
    <li><router-link to="/test10_3">test10-3</router-link></li>
    <li><router-link to="/test10_4">test10-4</router-link></li>
    <li><router-link to="/test11-1">test11-1</router-link></li>
    <li><router-link to="/test11-2">test11-2</router-link></li>
    <li><router-link to="/test11-3">test11-3</router-link></li>
    <li><router-link to="/test11-4">test11-4</router-link></li>
    <li><router-link to="/test11-5">test11-5</router-link></li>
    <li><router-link to="/test12-1">test12-1</router-link></li>
    <li><router-link to="/test12-2">test12-2</router-link></li>
    <li><router-link to="/test12-3">test12-3</router-link></li>


  </ul>
</div>
<div class="content right">
  点进去千万不要刷新！！！<br>
  本站没有设置独立域名解析，而是挂载到earthvillage.top/vue01/<br>
  再次进入网页浏览器会认为网页文件在earthvillage.top的仓库里的vue01文件夹里，但实际上没有文件，就会请求失败，本地部署无此问题<br>
  具体请参考：<a href="https://yuanbao.tencent.com/bot/app/share/chat/JR7KPYnuYf3l">GitHubPages绑定域名机制</a>

  <router-view></router-view>
</div>
<div class="footer">源码仓库：https://github.com/MinecraftEarthVillage/vue01</div>
</template>

<style scoped src="./app.vue的css代码.css"/>
