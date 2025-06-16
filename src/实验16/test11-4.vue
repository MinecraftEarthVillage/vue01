<template>
    <div ref="test" style="width: 800px;height: 600px;"></div>

</template>

<script>
import * as echart from 'echarts'
import {ref,reactive,onMounted} from "vue"
export default {
setup(){
    let test=ref(null);//获取div元素，这里与vue2.x的写法不一样了
    let myChart=null;
    const state=reactive({
        title:{
            text:"这是一个南丁格尔饼图！",
        textStyle:{color:"red",fontStyle:"oblique",},
    },
    legend:{left:"right",//图例的布局朝向
        orient:"verical"},
    series:[
        {
            name:"销量统计",type:'pie',//设置为饼状图
    data:[
        {value:67,name:"美食",itemStyle:{normal:{color:"green"}}},
        {value:44,name:"运动",itemStyle:{normal:{color:"yellow"}}},
        {value:88,name:"摄影",itemStyle:{normal:{color:"pink"}}},
        {value:32,name:"电影",itemStyle:{normal:{color:"gray"}}},
        {value:53,name:"阅读",itemStyle:{normal:{color:"blue"}}},

],
radius:["40%","70%"],//设置饼图的半径 第一项内半径 第二项外半径 设置环形图
//设置环形图的文本标签
label:{
    show:true,
    position:"inside"//outside外侧显示 inside内显示 center中心显示
},
roseType:"area",//是否设置为南丁格尔图
itemStyle:{color:'#c23531',shadowBlur:200,shadowColor:"reba(0,0,0,.5)"}
    }
    ]
})
onMounted(()=>{
    myChart=echart.init(test.value);
    myChart.setOption(state)
})
return{
    test//test变量必须要写 否则拿不到div元素
} },
}
</script>

<style>

</style>