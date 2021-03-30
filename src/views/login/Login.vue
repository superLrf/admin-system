<template>
  <div class="login-container">
    <el-form ref="loginForm" v-model="loginForm" class="login-form">
      <div class="title-container">
        <h3 class="title">商品后台管理系统</h3>
      </div>

      <el-form-item prop="username" class="login-item">
        <el-input ref="username" type="text" v-model="loginForm.username" placeholder="用户名" name="username">
          <span slot="prefix" class="icon-container">
            <i class="el-input__icon el-icon-user"></i>
          </span>
        </el-input>
      </el-form-item>

      <el-form-item prop="password" class="login-item">
        <el-input ref="password" type="password" v-model="loginForm.password" placeholder="密码" name="password">
          <span slot="prefix" class="icon-container">
            <i class="el-input__icon el-icon-lock"></i>
          </span>
        </el-input>
      </el-form-item>

      <el-form-item prop="loginBtn" class="login-btn login-item">
        <el-button @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      // const validateUsername = (rule, value, callback) => {
      //   console.log(value)
      //   if(!value) callback(new Error('用户名不能为空'))
      //   else if(value.length < 6) callback(new Error('长度必须大于6'))
      //   else callback()
      // }
      // const validatePassword = (rule, value, callback) => {
      //     if (value.length < 6) callback(new Error('长度必须大于6'))
      //     else callback()
      // }
      return {
        loginForm: {
          username: 'admin',
          password: '123456'
        },
        // loginRules: {
        //   username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        //   password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        // }
        user: {} // 用户
      }
    },
    methods: {
      // 登录处理函数
      handleLogin() {
        this.$message.success('登录成功')
        // 创建一名用户
        this.user = {
          username: this.loginForm.username,
          password: this.loginForm.password
        }
        // 将该用户装换为json数据存储到session中
        this.Storage.session.set('user', JSON.stringify(this.user))
        setTimeout(() => {
          this.$router.replace('/welcome')
        }, 800)
      }
    }
  }
</script>

<style scoped>
  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: #006266;
    overflow: hidden;
  }

  .login-form {
    position: relative;
    width: 327px;
    max-height: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .icon-container {
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    font-size: 26px;
    color: #eee;
    margin: 0 auto 40px auto;
    text-align: center;
    font-weight: bold;
  }

  .login-btn {
    text-align: center;
    outline: none;
  }

  .login-btn button:active {
    color: #409EFF;
  }
</style>
