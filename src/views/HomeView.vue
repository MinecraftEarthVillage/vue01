<template>
  <div class="home">
    <h1>网站首页</h1>
    <router-link to="/news">新闻</router-link>&nbsp;&nbsp;
    <router-link to="/msg">消息</router-link>
    <router-view/>
    <div>
      <hr>
      <h2>效果图3</h2><br>
      <img src="../assets/images/效果图3.png" alt="3">
    <hr>
    </div>
    
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
