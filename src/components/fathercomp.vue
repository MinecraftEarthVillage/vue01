<template>
    <div>区块链技术的五大应用场景：<br>
    <blogpost v-for="post in posts" :key="post.id" :title="post.title" :id="post.id"></blogpost>
    </div>
    </template>
    <script>
    import { reactive, toRefs } from 'vue'
    import blogpost from './ChildComp'
    export default {
    components:{
    blogpost
    },
    setup () {
    const state = reactive({
    posts:[
    { id:1,title:"数字货币"},
    { id:2,title:"金融资产交易结算"},
    { id:3,title:"数字政务"},
    { id:4,title:"存证防伪"},
    {id:5,title:"数据服务"}
    ]
    })
    return {...toRefs(state),  }
    }
    }
    </script>
    