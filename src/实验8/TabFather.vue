<template>
    <div id="dynamic-component-demo" class="demo">
        <button v-for="(tab,index) in tabsName" v-bind:key="index" v-bind:class="['tab-button',{active:currentTab===index}]" v-on:click="currentTab=index">
        {{ tab }}
        </button>
        <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>
</template>

<script>
import { reactive,toRefs,computed } from 'vue'
import tabhome from './TabHome.vue'
import tabposts from './TabPosts.vue'
import tabarchive from './TabArchive.vue'

export default{
    components:{
        tabhome,tabarchive,tabposts
    },
    setup(){
        const state =reactive({
            currentTab:0,
            tabsCompName:['tabhome','tabposts','tabarchive'],
            tabsName:['学校主页','大千世界','校内档案']
        })
        const currentTabComponent=computed(()=>{return state.tabsCompName[state.currentTab]})
        return {
            ...toRefs(state),
            currentTabComponent,
            tabhome,
            tabposts,
            tabarchive
        }
    }
}
</script>

<style scoped>
.tab-button{
    padding: 6px 10px;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}
.tab-button:hover{
    background: #f5d1d1;
}
.tab-button.active{background: #e0e0e0;}
.demo-tab{border: 1px solid #ccc;padding: 10px;}
</style>
