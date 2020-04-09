<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="housekeeping">
    <V-backCenter :name="name"></V-backCenter>
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
        <van-swipe-item v-for="item in gethousekeepingbanner"
                        :key="item.id"><img :src="item.img"
               alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 分类 -->
    <div class="classify">
      <div class="fl"
           @click="golist('钟点工')">
        <div class="hourly">
          <span class="iconfont">&#xe62c;</span>
        </div>
        <span class="text">钟点工</span>
      </div>
      <div class="fl" @click="golist('保姆')">
        <div class="baby">
          <span class="iconfont">&#xe613;</span>
        </div>
        <span class="text">保姆</span>
      </div>
      <div class="fl" @click="golist('月嫂')">
        <div class="maternity">
          <span class="iconfont">&#xe626;</span>
        </div>
        <span class="text">月嫂</span>
      </div>
      <div class="fl" @click="golist('专业保洁')">
        <div class="clean">
          <span class="iconfont">&#xe61e;</span>
        </div>
        <span class="text">专业保洁</span>
      </div>
      <div class="fl" @click="golist('家电清洗')">
        <div class="rinse">
          <span class="iconfont">&#xe66c;</span>
        </div>
        <span class="text">家电清洗</span>
      </div>
      <div class="fl" @click="golist('家居保养')">
        <div class="maintain">
          <span class="iconfont">&#xe61a;</span>
        </div>
        <span class="text">家居保养</span>
      </div>
      <div class="fl" @click="golist('新居开荒')">
        <div class="home">
          <span class="iconfont">&#xe66d;</span>
        </div>
        <span class="text">新居开荒</span>
      </div>
      <div class="fl" @click="golist('更多')">
        <div class="more">
          <span class="iconfont">&#xe62f;</span>
        </div>
        <span class="text">更多</span>
      </div>
    </div>
    <!-- 临时小时工 -->
    <div class="temporary">
      <div class="advertising">
        <div class="text">临时小时工预约点击这里</div>
        <img src="http://pic.90sjimg.com/design/00/59/20/21/59364f0f3c6b9.png"
             alt="">
      </div>
      <div class="advertising">
        <div class="text">临时小时工预约点击这里</div>
        <img src="http://pic.90sjimg.com/design/00/59/20/21/59364f0f3c6b9.png"
             alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      name: "找家政",
      value: ""
    }
  },
  mounted() {
    this.$store.dispatch("gethousekeepingbanner")
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
    },
    golist(type) {
      this.$router.push({ 
        path: "/houseList", 
        query: {type} 
      })
    }
  },
  computed: {
    ...mapGetters(["gethousekeepingbanner"])
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/housekeeping.less";
</style>