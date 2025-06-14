<template>
    <div>
  <input type="text" v-model="id" placeholder="请输入ID">
  <button @click="del">删除</button>
  <div>{{ info }}</div>
</div>
</template>

<script>
import {reactive,toRefs} from 'vue'
import axios from 'axios'
export default {
setup(){
    const state=reactive({
        info:"",id:""
    })
    const del=()=>{
        let data={id:state.id};
        axios.delete("http://127.0.0.1:9999/api/delete",{params:data})
        .then(res=>{
            console.log(res)
            if(res&&res.data)
            state.info=res.data;
        else
        alert("接口访问失败")
        })
    }
    return{...toRefs(state),del}
}
}
</script>

<style>

</style>