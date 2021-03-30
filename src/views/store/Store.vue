<template>
  <div class="store">
    <el-card>
      <el-table :data="shopList" border stripe>
        <el-table-column type="index" width="50px" align="center"/>
        <el-table-column prop="shop_id" label="店铺编号" align="center"/>
        <el-table-column prop="shop_name" label="店铺名称" align="center"/>
        <el-table-column prop="shop_phone" label="店铺号码" align="center"/>
        <el-table-column prop="shop_address" label="店铺地址" align="center"/>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  // 导入店铺数据
  import {shopList} from "../data/shopData"

  export default {
    name: "Shop",
    data() {
      return {
        shopList
      }
    }
  }
</script>

<style scoped>

</style>
