<template>
  <div class="welcome">
    <div class="container">
      <div class="title-container">
        <h3>欢迎回来！{{username}}</h3>
      </div>

      <div class="go-container">
        <el-button @click="toBehind">进入后台</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Welcome",
    data() {
      return {
        username: ''
      }
    },
    created() {
      this.handle()
    },
    methods: {
      handle() {
        const user = this.Storage.session.get('user')
        if(user) {
          this.username = user.username
        } else {
          this.$message('您还未登录，请登录！')
        }
      },
      toBehind() {
        setTimeout(() => {
          this.$router.replace("/admin/container")
        }, 400)
      }
    }
  }
</script>

<style scoped>
  .welcome {
    position: relative;
    height: 100%;
    background-color: #2b4b6b;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .title-container {
    font-size: 26px;
    margin: 0 auto 40px auto;
  }

  .go-container {
    text-align: center;
  }

  .go-container button:active {
    color: #409EFF;
  }
</style>
