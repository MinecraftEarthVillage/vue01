<template>
  <ul>
    <li v-for="item in posts" :key="item.id">
        {{ item.id }}:{{ item.title }}
    </li>
  </ul>
</template>

<script>
import {reactive,toRefs} from 'vue'

export default {
setup(){
    const state=reactive({
        post:[
            {id:1,title:'HTML'},
            {id:2,title:'CSS'},
            {id:3,title:'JavaScript'},
            {id:4,title:'jQuery'}
        ]
    })
    return{...toRefs(state)}
}
}
</script>

<style scoped>
ul li{
    list-style: none;background-color: yellow;
}
</style>