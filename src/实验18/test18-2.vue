<template>
  <el-icon><edit/></el-icon>
  <el-icon><fold/></el-icon>
  <el-icon><aim/></el-icon>
  <!-- SVG图标 -->
  <edit style="width: 2em;height: 2em;margin-right: 8px;color: red;"/>
  <share style="width: 2em;height: 2em;margin-right: 8px;"/>
  <delete style="width: 2em;height: 2em;margin-right: 8px;"/>
  <search style="width: 2em;height: 2em;margin-right: 8px;"/>
</template>

<script>
import { Fold } from "../../node_modules/@element-plus/icons-vue";
import { Edit } from "../../node_modules/@element-plus/icons-vue";
import { Aim } from "../../node_modules/@element-plus/icons-vue";
import { Share } from "../../node_modules/@element-plus/icons-vue";
import { Search } from "../../node_modules/@element-plus/icons-vue";
import {Delete} from "../../node_modules/@element-plus/icons-vue";
export default {
components:{Fold,Edit,Aim,Share,Search,Delete,}
}
</script>

<style>

</style>