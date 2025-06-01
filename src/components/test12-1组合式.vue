<template>
    <div>
  {{message}}
  {{ count }}
        <p><button @click="increment">增加</button></p>
    </div>
</template>

<script>
import {  reactive, toRefs } from 'vue';
export default {
    setup() {
      
        const state = reactive({//定义状态
            message: '学而时习之',//定义变量
      count:0
        })
        const increment=()=>state.count++;
        return{...toRefs(state),increment}
    }
}
</script>

<style></style>