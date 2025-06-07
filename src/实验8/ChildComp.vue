<template>
  <button @click="showList">显示列表</button>
</template>

<script>
import {reactive,toRefs} from 'vue'

export default {
setup(props,{emit}){
    const state=reactive({
        count:0
    })
    const showList=()=>{
        emit('event','这是子组件传递的内容，什么都可以')
    }
    return{...toRefs(state),showList}
}
}
</script>

<style>

</style>