<template>
  <div class="register">
    <van-nav-bar title="注册"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft" />
    <div class="form">
      <div class="name">
        <span class="iconfont">&#xe692;</span>
        <input type="text"
               placeholder="手机号码/邮箱" v-model="form.name">
      </div>
      <div class="code">
        <span class="iconfont">&#xe6c3;</span>
        <input type="code"
               placeholder="手机验证码" v-model="form.code">
        <button class="getcode">验证码</button>
      </div>
      <div class="pass">
        <span class="iconfont">&#xe619;</span>
        <input type="pass"
               placeholder="6~32位密码" v-model="form.pass">
      </div>
    </div>
    <van-button type="primary"
                color="#007af5"
                block>登录</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form:{
        name:"",
        pass:"" 
      }
    }
  },
  methods:{ 
    onClickLeft(){
      this.$router.push("/login")
    }
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/register.less";
</style>