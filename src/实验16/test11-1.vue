<template>
  <div ref="month" style="width:600px;height:300px"></div>
</template>

<script>
import {reactive,toRefs,ref,onMounted} from 'vue'
import * as echarts from "echarts"
export default {
    setup(){
        let month=ref(null);
        let myChart=null;
        const state=reactive({
            title:{text:"ECharts入门",},
            legend:{data:["销量"],},
            xAxis:{
                data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
            },
            yAxis:{},
            series:{
                name:"销量",
                type:"bar",
                data:[5,20,36,
                {
                    value:200,
                    itemStyle:{color:'#a90000'}
                }
                ,10,10,20],
            },
        })
        onMounted(()=>{
            myChart=echarts.init(month.value);
            myChart.setOption(state);
        })
        return {
            ...toRefs(state),month
        }
    }
}
</script>

<style>

</style>