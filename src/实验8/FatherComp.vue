<template>
  <navbar @event="handleClick"></navbar>
  <br>{{ mytext }}<br>
  <p>以下是不传递参数的组件：</p>
  <listbar v-if="isShow"></listbar>
</template>

<script>
import {reactive,toRefs} from 'vue'
import navbar from './ChildComp'
import listbar from './ListComp'
export default {
components:{navbar,listbar},
setup(){
    const state =reactive({
        isShow:false,
        mytext:'原有内容'
    })
    const handleClick=(sonData)=>{
        state.isShow=!state.isShow
        if (state.isShow) state.mytext=sonData
        else state.mytext=''
    }
    return{
        ...toRefs(state),
        handleClick
    }
}
}
</script>

<style>

</style>