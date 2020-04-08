<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="findfamil">
    <!-- 顶部返回 -->
    <div class="top">
      <van-nav-bar title="找家教"
                   left-text=""
                   @click-left="onClickLeft"
                   @click-right="onClickRight"
                   left-arrow>
        <template #right>
          <span class="iconfont">&#xe642;</span>
        </template>
      </van-nav-bar>
    </div>
    <!-- 搜索框 -->
    <form action="/">
      <van-search v-model="value"
                  show-action
                  placeholder="请输入搜索关键词"
                  @search="onSearch">
        <template #action>
          <div class="release"
               @click="onCancel">我要发布</div>
        </template>
      </van-search>
    </form>
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe"
                 :autoplay="3000"
                 indicator-color="white">
        <van-swipe-item v-for="item in getTeacherBanner"
                        :key="item.id"><img :src="item.img"
               alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 周边和提问 -->
    <div class="operation">
      <div class="teacher">
        <span class="iconfont">&#xe642;</span>
        <div class="text">
          <h3>周边老师</h3>
          <span>发现身边好老师</span>
        </div>
      </div>
      <div class="quiz">
        <span class="iconfont">&#xe726;</span>
        <div class="text">
          <h3>我要提问</h3>
          <span>难题名师帮你解</span>
        </div>
      </div>
    </div>
    <!-- 年级分类 -->
    <div class="classify">
      <div class="fl">
        <div class="primary">
          <span class="iconfont">&#xe64f;</span>
        </div>
        <span class="text">小学</span>
      </div>
      <div class="fl">
        <div class="junior">
          <span class="iconfont">&#xe762;</span>
        </div>
        <span class="text">初中</span>
      </div>
      <div class="fl">
        <div class="senior">
          <span class="iconfont">&#xe726;</span>
        </div>
        <span class="text">高中</span>
      </div>
      <div class="fl">
        <div class="interest">
          <span class="iconfont">&#xe64d;</span>
        </div>
        <span class="text">兴趣</span>
      </div>
    </div>
    <!-- 中划线分割，家教排行榜 -->
    <van-divider :style="{color:'#000',borderColor:'#dadada'}">top排行榜</van-divider>
    <!-- 家教排行 -->
    <div class="content">
      <div class="organization" v-for="item in getteacherTop" :key="item.id">
        <img :src="item.img" alt="家教机构图片">
        <div class="num">
          <span>已报名{{item.num}}人</span>
          <img :src="item.img" class="photo" alt="家教负责人头像">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      value: ""
    }
  },
  mounted() {
    this.$store.dispatch("getTeacherBanner")
    this.$store.dispatch("getteacherTop")
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home")
    },
    onClickRight() {},
    onSearch(val) {
      Toast(val)
    },
    onCancel() {
      this.$router.push("/release")
    }
  },
  computed: {
    ...mapGetters(["getTeacherBanner","getteacherTop"])
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/findfamil.less";
</style>