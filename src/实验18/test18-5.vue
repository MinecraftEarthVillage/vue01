<template>
    <el-table stripe="true" :data="tableData" style="width:100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="id" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    setup() {
        const state = reactive({
            tableData: [
                {
                    id: '1', name: '刘兵', address: '武汉市'
                },
                {
                    id: '2', name: '汪琼', address: '荆州'
                },
                {
                    id: '3', name: '刘艺丹', address: '多伦多'
                },
                {
                    id: '4', name: '李四', address: '北京市'
                },
            ],
            multipleSelection: []
        })
        return { ...toRefs(state) }
    }
}
</script>

<style></style>