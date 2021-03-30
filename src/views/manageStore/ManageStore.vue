<template>
  <div class="manageStore">
    <el-card>
      <el-row class="addShop_row">
        <el-col>
          <el-button type="primary" @click="showAddDialog">添加店铺</el-button>
        </el-col>
      </el-row>

      <el-table :data="shopList" border stripe >
        <el-table-column type="index" width="50px" align="center"/>
        <el-table-column prop="shop_id" label="店铺编号" class="cell" align="center"/>
        <el-table-column prop="shop_name" label="店铺名称" align="center"/>
        <el-table-column prop="shop_phone" label="店铺号码" align="center"/>
        <el-table-column prop="shop_address" label="店铺地址" align="center"/>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="showEditDialog(scope.row)">编辑</el-button>
            <el-button type="danger" size="small" @click="deleteShop(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 修改店铺对话框 -->
    <el-dialog title="修改店铺" :visible.sync="isShowEditDialog" width="50%"
               :close-on-click-modal="false"
               @close="editDialogClose">
      <el-form ref="shop" :model="shop" label-width="100px">
        <el-form-item label="店铺编号：">
          <span>{{shop.shop_id}}</span>
        </el-form-item>
        <el-form-item label="店铺名称：">
          <el-input v-model="shop.shop_name"></el-input>
        </el-form-item>
        <el-form-item label="店铺号码：">
          <el-input v-model="shop.shop_phone"
                    oninput="value = value.replace(/[^\d]/g, '')"></el-input>
        </el-form-item>
        <el-form-item label="店铺地址：">
          <el-input v-model="shop.shop_address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowEditDialog = false">取 消</el-button>
        <el-button type="primary" @click="editShop">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加店铺对话框 -->
    <el-dialog title="添加店铺" :visible.sync="isShowAddDialog" width="50%"
               :close-on-click-modal="false"
               @close="addDialogClose">
      <el-form ref="shop" :model="shop" label-width="100px">
        <el-form-item label="店铺名称：">
          <el-input v-model="shop.shop_name"></el-input>
        </el-form-item>
        <el-form-item label="店铺号码：">
          <el-input v-model="shop.shop_phone"
                    oninput ="value = value.replace(/[^\d]/g, '')"></el-input>
        </el-form-item>
        <el-form-item label="店铺地址：">
          <el-input v-model="shop.shop_address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowAddDialog = false">取 消</el-button>
        <el-button type="primary" @click="addShop">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  // 导入店铺数据
  import {shopList} from "../data/shopData"

  export default {
    name: "ManageStore",
    data() {
      return {
        shopList,
        isShowEditDialog: false, // 控制修改对话框的显示与隐藏
        isShowAddDialog: false, // 控制添加对话框的显示与隐藏
        shop: {
          shop_id: '',
          shop_name: '',
          shop_phone: '',
          shop_address: ''
        }
      }
    },
    methods: {
      // 显示修改店铺对话框
      showEditDialog(shop) {
        this.shop = {
          shop_id: shop.shop_id,
          shop_name: shop.shop_name,
          shop_phone: shop.shop_phone,
          shop_address: shop.shop_address
        }
        // 显示对话框
        this.isShowEditDialog = true
      },
      // 关闭修改对话框
      editDialogClose() {
        this.shop = {}
        this.isShowEditDialog = false
      },
      // 显示添加对话框
      showAddDialog() {
        this.shop = {
          shop_id: '10' + (this.shopList.length + 1), // id为自增索引
          shop_name: '',
          shop_phone: '',
          shop_address: ''
        }
        // 显示对话框
        this.isShowAddDialog = true
      },
      // 关闭添加对话框
      addDialogClose() {
        this.shop = {}
        this.isShowAddDialog = false
      },
      // 删除店铺信息
      deleteShop(shop) {
        // 加一成确定提示框
        this.$confirm('此操作将永久删除此商品，是否继续？', '友情提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const id = shop.shop_id
          this.shopList.forEach(shop => {
            if(shop.shop_id === id) {
              this.shopList.splice(this.shopList.indexOf(shop), 1)
            }
          })
          this.$message.success('删除成功')
        }).catch(() => {
          this.$message.warning('已取消删除')
        })
      },
      // 修改店铺
      editShop() {
        if(this.shop.shop_name === '' || this.shop.shop_phone === '' || this.shop.shop_address === '') {
          return this.$message.warning('输入的内容不能为空')
        }
        if(this.shop.shop_phone.length !== 11) {
          return this.$message.warning('请输入正确的手机号格式')
        }
        // 修改店铺
        const id = this.shop.shop_id
        this.shopList.forEach(shop => {
          // 找到该商品
          if(id === shop.shop_id) {
            // 修改店铺信息
            shop.shop_name = this.shop.shop_name
            shop.shop_phone = this.shop.shop_phone
            shop.shop_address = this.shop.shop_address
            return null
          }
        })
        this.$message.success('修改成功')
        this.isShowEditDialog = false
      },
      // 添加店铺
      addShop() {
        if(this.shop.shop_name === '' || this.shop.shop_phone === '' || this.shop.shop_address === '') {
          return this.$message.warning('添加的内容不能为空')
        }
        if(this.shop.shop_phone.length !== 11) {
          return this.$message.warning('请输入正确的手机号格式')
        }
        // 添加店铺
        this.shopList.push(this.shop)
        this.$message.success('添加成功')
        // 关闭对话框
        this.isShowAddDialog = false
      }
    }
  }
</script>

<style scoped>
  .addShop_row {
    margin-bottom: 20px;
  }
</style>
