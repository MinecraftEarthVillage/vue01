<template>
  <div>{{ info }}</div>
</template>

<script>
import {reactive,toRefs,onMounted} from 'vue'
import axios from 'axios'

export default {
setup(){
    const state=reactive({
        info:[],
    })
    onMounted(()=>{
        let data={id:2,name:"李世民",tel:"13123456789"};
        axios.post("http://127.0.0.1:9999/api/update",data)
        .then(res=>{
            if(res&&res.data)
            state.info=res.data;
        else alert("接口访问失败");
        })
    });
    return {
        ...toRefs(state)
    }
}
}
</script>

<style>

</style>