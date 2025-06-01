<template>
    <div>
    <p>父组件</p>
    调用子组件第1次<child-comp></child-comp> <br>
    调用子组件第2次<child-comp></child-comp> <br>
    调用子组件第3次<child-comp></child-comp>
    </div>
    </template>
    <script>
    import { reactive, toRefs } from 'vue'
    import ChildComp from './子组件'
    export default {
    components:{
    ChildComp
    },
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
    