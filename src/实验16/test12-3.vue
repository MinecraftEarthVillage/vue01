<template>
    <div ref="total" style="width: 600px;height: 300px;"></div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts"
import axios from "axios";
export default {
    methods:{
    myCharts(xData,sData){
        let Option={
            title:{text:"月总销量变化图"},
            legend:{    data:["月总销量"]        },
        xAxis:{data:xData},
        yAxis:{},
        series:{
            name:"月总销量",
            type:"line",
            data:sData,
        }
        };
        var chart=echarts.init(this.$refs.total);
        mychars.setOption(Option);
    },
},
mounted(){
    axios.get("http://127.0.0.1:169/total/2020").then((res)=>{
        
        if(res&&res.data){
            console.log(res.data);
            res.data.sort((a,b)=>a.month-b.month);
            var xData=Array.from(res.data,(x)=>x.month+'月');
            var sData=Array.from(res.data,(x)=>x.sumsales);
            this.myCharts(xData,sData);
        }
    })
}
}

</script>

<style>

</style>