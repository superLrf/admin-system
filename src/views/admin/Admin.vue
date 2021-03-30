<template>
  <div class="admin">
    <div class="admin-container">
      <el-container>
        <el-aside width="200px">
          <el-menu background-color="#333744"
                   text-color="#fff"
                   active-text-color="#409EFF"
                   :default-active="defaultPath"
                   class="admin-menu" router>
            <el-menu-item v-for="(item, index) in themes"
                          :index="item.path"
                          :key="index"
                          @click="saveState(item.path)">
              <template slot="title">
                <span>{{item.title}}</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <!-- 头部 -->
          <el-header class="header">
            <div class="container">
              <h3 class="title">外卖管理系统</h3>
              <el-button class="out-login" @click="outLogin">退出</el-button>
            </div>
          </el-header>
          <!-- 主题 -->
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Admin",
    data() {
      return {
        themes: [
          {title: '旗下店铺', path: '/store'},
          {title: '店铺管理', path: '/manageStore'},
          {title: '分配权限', path: '/rights'},
          {title: '数据统计', path: '/record'}
        ],
        defaultPath: '', // 默认路劲
      }
    },
    created() {
      this.defaultPath = '/store'
    },
    methods: {
      // 保存path状态
      saveState(path) {
        this.defaultPath = path
      },
      // 退出系统
      outLogin() {
        this.$message.success('退出成功！')
        // 清空session
        this.Storage.session.clear()
        setTimeout(() => {
          this.$router.replace('/admin/login')
        }, 800)
      }
    }
  }
</script>

<style scoped>
  .admin, .admin-container, .el-container {
    height: 100%;
  }

  .el-aside > ul {
    border-right: none;
  }

  .admin-menu {
    height: 100%;
  }

  .el-header {
    background-color: #fff;
  }
  .el-main {
    height: 100%;
    background-color: #ccc;
  }

  .header .container {
    height: 100%;
    position: relative;
    line-height: 60px;
    text-align: center;
  }

  .header .container .title {
    display: inline-block;
    font-size: 23px;
  }

  .header .container .out-login {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
