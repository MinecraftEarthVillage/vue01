<template>
  <div>
    <el-button type="danger">{{ message }}</el-button><br>
    <el-button type="warning">{{ message1 }}</el-button><br>
    <el-button>默认按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="primary" plain>主要按钮</el-button>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
setup(){
    const state=reactive({
        message:"阳光总在风雨后",
        message1:"好好学习"
    })
    return{
        ...toRefs(state),
    }
}
}
</script>

<style>

</style>