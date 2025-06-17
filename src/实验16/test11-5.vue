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
        xAxis:{
            type:'category',
            data:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
        },
        yAxis:{
            type:"value"
        },
        series:[
            {
                type:'line',//设置为折线图
                data:[150,230,224,218,135,147,260],
            }
        ]
    })
    onMounted(()=>{
        myChart=echart.init(test.value);
        myChart.setOption(state)
    })
    return{
test//test变量必须要写 否则拿不到div元素
    }
},
}
</script>