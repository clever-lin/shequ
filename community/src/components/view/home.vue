<template>
<!-- 这里更改成你的页面的class名 -->
  <div class="home">
    <div class="navBox">
      <van-nav-bar title="龙山家园" left-arrow class="navBar">
          <template #left>
          <van-icon name="wap-nav" size="25" color="#fff"/>
        </template>
        <template #right>
          <van-icon name="location-o" size="25" color="#fff"/><span class="seat">北京</span>
        </template>
    </van-nav-bar>
    </div>
    <div class="searchBox">
      <input type="text" placeholder="Search" class="search-box">
      <van-button type="info" class="search-button">我要发布</van-button>
    </div>
    <div class="home-banner">
      <img :src="getHomeBanner" alt="">
    </div>
    <div class="home-content">
      <div class="dayBox">
        <div class="sky">
          <span class="iconfont icon-duoyun skyPic"></span>
          <div class="sky-txt">
            <p>
              <span>多云/小雨 </span>&nbsp;
              <span> 27 / 30C</span>
            </p>
            <p class="wind">3-4级 / 4-5级风</p>
          </div>
        </div>
        <div class="date">
          <p>{{this.day}}</p>
          <p>{{this.time}}</p>
        </div>
      </div>
      <ul class="serveList">
        <li>
          <router-link to="">
            <span class="iconfont icon-boshimao"></span>
            <p>找家教</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="iconfont icon-shuiping"></span>
            <p>送水到家</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="iconfont icon-weixiu"></span>
            <p>维修服务</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="iconfont icon-richangbaoji
"></span>
            <p>家政</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="iconfont icon-huizhengongzuoliang
"></span>
            <p>社区互动</p>
          </router-link>
        </li>
        <li>
          <router-link to="">
            <span class="iconfont icon-gengduo1"></span>
            <p>更多服务</p>
          </router-link>
        </li>
      </ul>
    </div>
    <ul>
      <li><router-link to="/findfamil">找家教</router-link></li>
      <li><router-link to="/familyeducationlist">找家教</router-link></li>
      <li><router-link to="/familyparticulars">找家教</router-link></li>
      <li><router-link to="/waterList">找家教</router-link></li>
      <li><router-link to="/waterParticulars">找家教</router-link></li>
      <li><router-link to="/repairlist">找家教</router-link></li>
      <li><router-link to="/repairParticulars">找家教</router-link></li>
      <li><router-link to="/housekeeping">找家教</router-link></li>
      <li><router-link to="/houseList">找家教</router-link></li>
      <li><router-link to="/houseParticulars">找家教</router-link></li>
      <li><router-link to="/center">找家教</router-link></li>
      <li><router-link to="/info">找家教</router-link></li>
      <li><router-link to="/collection">找家教</router-link></li>
    </ul>
  </div>
</template>
<script>
import url from '../../util/api'
import {mapGetters} from 'vuex'
import { Toast } from 'vant';
export default {
  data () {
    return {
      day : "",
      time : ""
    }
  },
  computed: {
    ...mapGetters(["getHomeBanner"])
  },
  mounted() {
    this.$store.dispatch("getHomeBanner");
    this.getTime()
  },
  methods:{
    getTime(){
      let date = new Date();
      let day = date.getDay();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let arr = ["日","一","二","三","四","五","六"];
      let str = "星期"+arr[day];
      this.day = str;
      this.time = hour<10?"0"+hour+":"+minute:hour +":"+minute
    }
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>"; //less的深度选择器
@import "../../assets/style/less/home.less";
</style>