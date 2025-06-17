<template>
  <div ref="month" style="width: 600px;height: 300px;"></div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts"
import axios from "axios";
export default {
methods:{
    mychars(Data){
        let Option={
            title:{text:"使用数据集显示柱状图"},
            legend:{formatter(name){
                if(name=="sales") return "销量";
                if(name=="profit") return "利润";
                return name
            },
        },
        xAxis:{type:"category"},
        yAxis:{},
        series:[ { type: "line" } ,{ type: "bar" }],
        dataset:{
            source:Data
        }
        };
        var mychars=echarts.init(this.$refs.month);
        mychars.setOption(Option);
    },
},
mounted(){
    axios.get("http://127.0.0.1:169").then((res)=>{
        console.log(res.data);
        if(res&&res.data) this.mychars(res.data);
    })
}
}
</script>

<style>

</style>