<template>
  <div ref="test" style="width: 800px;height: 600px;"></div>
</template>

<script>
import * as echarts from 'echarts'
import {ref,onMounted,reactive} from 'vue'
export default {
setup(){
    let test=ref(null);//获取div元素，这里与vue2.x的写法不一样了
    let myChart=null;
    const state=reactive({
        title:{
            text:"这是一个饼图！",
            textStyle:{color:"red",
                                    fontStyle:"oblique",
        },
        },
        series:{
            type:'pie',
            data:[
                {name:"西瓜",value:200},
                {name:"西红柿",value:210},
                {name:"苹果",value:150},
                {name:"香蕉",value:20},
                {name:"橘子",value:50},
                {name:"哈密瓜",value:100},
            ]
        }
    })
    onMounted(()=>{
        myChart=echarts.init(test.value);
        myChart.setOption(state)
    })
    return{
        test//test变量必须要写，如果没写就拿不到div元素
    }
}
}
</script>

<style>

</style>