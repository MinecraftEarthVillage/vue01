<template>
    <input type="text" v-model="studentName"><br>
    <children></children>
</template>
<script>
import {reactive,readonly,ref,provide}from 'vue'
import children from "./children.vue"
export default{
    components:{children},
    setup(){
        const studentName=ref("刘一丹")
        const grode=reactive({
            Vue:90,jQuery:98,
        })
        const updateLocation=()=>{
            studentName.value="张三"
            grode.vue=99
        }
provide('studentName',readonly(studentName))
provide('grode',readonly(grode))
provide('updateLocation',updateLocation)
return{studentName}
    }
}
</script>