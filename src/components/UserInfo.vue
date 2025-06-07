<template>
    <p>
    <table width="300" height="300" align="center" border="1">
        <caption>
            <h3>用户详细信息</h3>
        </caption>
        <tr align="center">
            <td>编号</td>
            <td>{{ userlist[index].id }}</td>
        </tr>
        <tr align="center">
            <td>姓名</td>
            <td>{{ userlist[index].name }}</td>
        </tr>
        <tr align="center">
            <td>年龄</td>
            <td>{{ userlist[index].age }}</td>
        </tr>
        <tr align="center">
            <td>性别</td>
            <td>{{ userlist[index].sex }}</td>
        </tr>
        <tr align="center">
            <td>生日</td>
            <td>{{ userlist[index].birthday }}</td>
        </tr>
        <tr align="center">
            <td>电话</td>
            <td>{{ userlist[index].telphone }}</td>
        </tr>
    </table>
    </p>
</template>

<script>
import {reactive, toRefs} from 'vue'
import { useRoute } from 'vue-router'
export default{
    setup(){
        const state=reactive({
            userlist:[{id:1,name:'张三',age:25,sex:'男',birthday:'1995.04.01',telphone:'13712345678'}],
            userlist:[{id:2,name:'李四',age:18,sex:'女',birthday:'2002.08.13',telphone:'13787654321'}],
            userlist:[{id:3,name:'王二',age:17,sex:'女',birthday:'2003.09.20',telphone:'13787654321'}],
index:0
        })
        const route=useRoute()//读取路由传送过来的id参数
        state.index=route.query.id
        const router=useRoute()
        const goback=()=>router.go(-1)
        return{
            ...toRefs(state),
            goback
        }
    }
}
</script>