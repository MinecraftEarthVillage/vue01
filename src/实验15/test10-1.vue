<template>
  <div>
    {{ info }}
  </div>
</template>

<script>
import {reactive,toRefs,onMounted} from 'vue'
import axios from 'axios'
export default {
    setup(){
        const state=reactive({
            info:[],
        });
        onMounted(()=>{
            axios.get('http://127.0.0.1:9999/api/select').then(res=>{state.info=res.data,console.log(res.data)})
        });
        return{
            ...toRefs(state),
        };
    }
}
</script>

<style>

</style>