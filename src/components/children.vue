<template>
    学生姓名：{{ studentName }}<br>
    vue成绩：{{ grode.Vue }}<br>
    jquery成绩：{{ grode.jQuery }}<br>
    <button @click="updateLocation">调用父组件方法</button>
</template>
<script>
    import { inject } from "vue";
    export default{
        setup(){
            const studentName=inject("studentName","The Universe")
            const grode=inject("grode")
            const updateLocation=inject("updateLocation")
            return{
                studentName,
                grode,
                updateLocation
            }
        }
    }
</script>