<template>
    <div>
        <button @click="handleClick">axios访问服务器</button>
        <table border="1" width="500" align="center">
            <caption><h2>作者信息</h2></caption>
            <tr align="center">     <td>姓名</td>   <td>省份</td>   <td>城市</td>   </tr>
            <tr v-for="(item,index) in lists" :key="index" align="center">
                <td>{{ item.name }}</td>    <td>{{ item.province }}</td>    <td>{{ item.city }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
import axios from 'axios'
export default{
    setup(){
        const state=reactive({
            lists:[]
        })
        const handleClick=()=>{
            axios({
                method:'get',
                url:'http://localhost:168'
            }).then(res=>{
                console.log(res)
                if (res.status=='200') {
                    if(res.data&&res.data.length>0)
                    state.lists=res.data                    
                }
            }).catch(function(error){
                console.log(error)
            })
        }
        return {
            ...toRefs(state),   handleClick
        }
    }
}
</script>