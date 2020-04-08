<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="login">
    <v-back :name="name"></v-back>
    <div class="form">
      <div class="name">
        <span class="iconfont">&#xe639;</span>
        <input type="text"
               placeholder="邮箱/手机号"
               v-model="form.name">
      </div>
      <div class="pass">
        <span class="iconfont">&#xe619;</span>
        <input type="pass"
               placeholder="密码"
               v-model="form.pass">
      </div>
    </div>
    <van-button type="primary"
                color="#007af5"
                @click="login"
                block>登录</van-button>
    <span class="forget">忘记密码？</span>
    <div class="register"><span @click="goregister">注册</span></div>

    <van-divider :style="{color:'#000',borderColor:'#dadada'}">或者</van-divider>
    <div class="text">社交账号快速登录</div>
    <div class="way">
      <div class="wx">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
      </div>
      <div class="wb">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-weibo"></use>
        </svg>
      </div>
      <div class="qq">
        <svg class="icon"
             aria-hidden="true">
          <use xlink:href="#icon-QQ"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../util/api"
export default {
  data() {
    return {
      name: "登录页",
      form: {
        type: "2",
        name: "",
        pass: ""
      }
    }
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.push("/home")
    },
    login() {
      this.$store.dispatch("Login", this.form)
    },
    goregister() {
      this.$router.push("/register")
    }
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/login.less";
</style>