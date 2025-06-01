<template>
    <div>
    <button v-on:click="count++">Hello world!打招呼{{count}}次</button>
    </div>
    </template>
    
    <script>
    import { reactive, toRefs } from 'vue'
    export default {
    setup () {
    const state = reactive({
    count: 0,
    })
    return {
    ...toRefs(state),
    }
    }
    }
    </script>

