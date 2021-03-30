<template>
  <div class="rights">
    <el-card>
<!--      <el-row class="addShop_row">-->
<!--        <el-col>-->
<!--          <el-button type="primary" @click="showAddDialog">添加店铺</el-button>-->
<!--        </el-col>-->
<!--      </el-row>-->

      <el-table :data="shopList" border stripe>
        <el-table-column type="index" width="50px" align="center"/>
        <el-table-column prop="shop_id" label="店铺编号" class="cell" align="center"/>
        <el-table-column prop="shop_name" label="店铺名称" align="center"/>
        <el-table-column label="操作权限" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.shop_status"
              active-color="#13ce66"
              inactive-color="#eee" @change="statusChange(scope.row)">
            </el-switch>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

  </div>
</template>

<script>
  // 导入店铺数据
  import {shopList} from "../data/shopData"

  export default {
    name: "Rights",
    data() {
      return {
        shopList
      }
    },
    methods: {
      // 修改状态
      statusChange(shop) {
        this.$message.success('修改成功')
      }
    }
  }
</script>

<style scoped>

</style>
