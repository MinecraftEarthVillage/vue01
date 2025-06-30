<template>
  <el-button @click="handleClick">戳我</el-button>
  <div style="display: flex;margin-top: 20px;height: 100px;">
        <transition name="el-fade-in-linear">
            <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
            <div v-show="show" class="transition-box">.el-fade-in</div>
        </transition>
  </div>
  <div style="display: flex;margin-top: 20px;height: 100px;">
            <transition name="el-zoom-in-center">
                <div v-show="show" class="transition-box">.el-zoom-in-center</div>
            </transition>

            <transition name="el-zoom-in-top">
                <div v-show="show" class="transition-box">.el-zoom-in-top</div>
            </transition>

            <transition name="el-zoom-in-bottom">
                <div v-show="show" class="transition-box">.el-zoom-in-bottom</div>
            </transition>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
setup(){
    const state=reactive({
        show:true
    })
    const handleClick=()=>{
        state.show=!state.show
    }
    return{
        ...toRefs(state),handleClick
    }
}
}
</script>

<style  scoped>

.transition-box{
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}

</style>