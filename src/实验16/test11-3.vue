<template>
  <div ref="radar" style="width: 800px;height: 600px;"></div>
</template>

<script>
import * as echart from 'echarts'
import {ref,reactive,onMounted} from "vue"
export default {
setup(){
    let radar=ref(null);
    let myChart=null;
    let option=reactive({
        title:{
            text:"这是一个雷达图的测试",
            textStyle:{fontStyle:"oblique",fontSize:20,color:'red'},
            left:"center"
        },
        legend:{
            orient:"vertical",
            left:'20%',
            data:["测试数据","图例测试"]
        },
        radar:{
            indicator:[
                {name:"1",max:1000},
                {name:"2",max:1000},
                {name:"3",max:1000},
                {name:"4",max:1000},
                {name:"5",max:1000},
        ],
        axisName:{show:true}
        },
        series:{type:"radar",
    areaStyle:{},
    data:[{
        name:"测试数据",
        value:[100,200,223,490,980]
    },
{name:"图例测试",
value:[400,400,33,290,880]}
]
}
    })
    onMounted(()=>{
        myChart=echart.init(radar.value,option);
        myChart.setOption(option)
    })
    return {radar,myChart,option}
}
}
</script>

<style>

</style>