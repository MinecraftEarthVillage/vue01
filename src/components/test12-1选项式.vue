<template>
    <div>
        <p> {{ message }}</p>
        <p> {{ count }}</p>
        <p><button @click="increment">增加</button></p>
    </div>
</template>

<script>

export default {
    data() {

        return { 
            message:'你好Vue3',count:0
         };
    },
    methods:{
        increment(){
            this.count++;
        }
    }
};
</script>

<style></style>