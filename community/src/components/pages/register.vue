<template>
  <div class="register">
    <v-back :name="name"></v-back>
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
        <div class="getcode">验证码</div>
      </div>
      <div class="pass">
        <span class="iconfont">&#xe619;</span>
        <input type="pass"
               placeholder="6~32位密码" v-model="form.pass">
      </div>
    </div>
    <van-button type="primary"
                color="#007af5"
                block>注册</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:"注册页",
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