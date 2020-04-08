<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="login">
    <van-nav-bar title="登录"
                 left-text="返回"
                 left-arrow
                 @click-left="onClickLeft" />
    <div class="form">
      <div class="name">
        <span class="iconfont">&#xe639;</span>
        <input type="text"
               placeholder="邮箱/手机号" v-model="form.name">
      </div>
      <div class="pass">
        <span class="iconfont">&#xe619;</span>
        <input type="pass"
               placeholder="密码" v-model="form.pass">
      </div>
    </div>
    <van-button type="primary"
                color="#007af5"
                @click="login"
                block>登录</van-button>
    <span class="forget">忘记密码？</span>
    <div class="register">注册</div>

    <div class="order">
      <span style="white-space:pre"> </span><span class="line"></span>
      <span style="white-space:pre"> </span><span class="txt">或者</span>
      <span style="white-space:pre"> </span><span class="line"></span>
    </div>
    <div class="text">社交账号快速登录</div>
    <div class="way">
      <div class="wx">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
      </div>
      <div class="wb">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibo"></use>
        </svg>
      </div>
      <div class="qq">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-QQ"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../util/api'
export default {
  data() {
    return {
      form:{
        type:"2",
        name:"",
        pass:"" 
      }
    }
  },
  mounted(){
    
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home")
    },
    login(){
      this.$store.dispatch("Login",this.form)
    }
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/login.less";
</style>