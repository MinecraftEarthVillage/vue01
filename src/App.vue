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

  </ul>
</div>
<div class="content right">
  <router-view></router-view>
</div>
<div class="footer">版权页</div>
</template>

<style scoped src="./app.vue的css代码.css"/>
