<template>
    <h1>格桑花</h1>
   <img src="../assets/images/效果图1.png">
</template>

<script>
import { reactive,toRef,toRefs } from 'vue'

export default {
    setup(){
        const state=reactive({
            count:0,
        })
        return{...toRefs(state)}
    }
}
</script>
