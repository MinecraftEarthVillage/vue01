<template>
  <div>
    <input type="text" v-model="name" placeholder="请输入姓名"/>
    <input type="text" v-model="tel" placeholder="请输入电话"/>
    <button @click="add">添加</button>
    <div>{{ info }}</div>
  </div>
</template>

<script>
import {reactive,toRefs,onMounted} from 'vue'
import axios from 'axios'
export default {
    setup(){
        const state=reactive({
            info:"",name:"",tel:""
        });
        const add=()=>{
            let data={name:state.name,tel:state.tel};
            axios.put("http://127.0.0.1:9999/api/insert",data).then(res=>{
                if(res&&res.data) state.info=res.data;
                else alert("接口访问失败");
            })
        }
        return{
            ...toRefs(state),add
        }
    }
}
</script>

<style>

</style>