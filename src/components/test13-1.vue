<template>
    <div>
        <button v-for="(item,index) in arr" v-bind:key="index" @click="selectOneFun(index)">
            {{ index }}:{{ item }}
        </button>
    </div>
    <div>你选择了【{{selectOne}}】</div>
</template>
<script>
import { reactive,toRefs,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onDeactivated, } 
from "vue";
export default{
    name:"App",
    setup(){
        console.log("1...setup()开始创建组件");
        const data=reactive({
            arr:["YES","NO"],
            selectOne:"",
            selectOneFun:(index)=>{     data.selectOne=data.arr[index];     },
        });
        onBeforeMount(()=>{
            console.log("2...onBeforeMount()组件挂在到页面之前执行");
        });        
        onMounted(()=>{
            console.log("3...onMounted()组件挂在到页面之后执行");
        });        
        onBeforeUpdate(()=>{
            console.log("4...onBeforeUpdate()在组件更新之前执行");
        });
        onUpdated(()=>{
            console.log("5...onUpdated()在组件更新之后执行");
        });        
        onBeforeUnmount(()=>{
            console.log("6...onBeforeUnmount()在组件卸载之前执行");
        });        
        onUnmounted(()=>{
            console.log("7...onUnmounted()在组件卸载之后执行");
        });        
        onDeactivated(()=>{
            console.log("8...onDeactivated()在组件切换中老组件消失的时候执行");
        });
        const refData=toRefs(data);
        return {...refData,};
    },
};
</script>