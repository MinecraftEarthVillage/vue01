<template>
    
  <div id="mychart" style="width: 600px;height: 300px;"></div>
</template>

<script>
/* eslint-disable */
import * as echarts from "echarts"
import axios from "axios";
export default {
    name:"mychart",
    methods:{
        myCharts(xData,sData){
            var option={
                title:{text:"ECharts入门"},
                legend:{data:["销量"],},
                xAxis:{data:xData},
                yAxis:{},
                series:[{
                    name:"销量",
                    itemStyle:{normal:{color:"rgb(174,77,255)"}},
                    type:"bar",
                    data:sData
                }]
            }
            var myChart=echarts.init(document.getElementById('mychart'));
            myChart.setOption(option);
        }
    },
    mounted(){
        axios.get("http://localhost:169/").then(res=>{
            console.log(res.data);
            var Data=res.data;
            var xData=Array.from(Data,x=>x.name);
            var sData=Array.from(Data,x=>x.sales);
            this.myCharts(xData,sData);
        })
    }
}
</script>

<style>

</style>



