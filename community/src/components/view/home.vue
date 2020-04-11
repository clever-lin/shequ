<template>
<!-- 这里更改成你的页面的class名 -->
  <div class="home">
    <div class="box">
    <!-- 主体内容开始 -->
    <div class="move" ref="move" @click="back">
    <!-- 导航栏开始 -->
      <div class="navBox">
      <van-nav-bar title="龙山家园" left-arrow class="navBar">
          <template #left>
          <van-icon name="wap-nav" size="25" color="#fff" @click.stop="mine"/>
        </template>
        <template #right>
          <van-icon name="location-o" size="25" color="#fff"/><span class="seat">北京</span>
        </template>
    </van-nav-bar>
    </div>
    <!-- 导航栏结束 -->
    <!-- 搜索框开始 -->
    <div class="searchBox">
      <span class="iconfont icon-fangdajing searchIcon"></span>
      <input type="text" placeholder="Search" class="search-box">
      <van-button type="info" class="search-button">我要发布</van-button>
    </div>
    <!-- 搜索框结束 -->
    <div class="home-banner">
      <van-swipe :autoplay="3000" class="son">
        <van-swipe-item v-for="item in getHomeBanner" :key="item.id" class="son">
          <img :src="item.img" alt="" class="son">
          </van-swipe-item>
      </van-swipe>
    </div>
    <div class="home-content">
      <!-- 天气开始 -->
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
      <!-- 天气结束 -->
      <!-- 服务列表开始 -->
      <ul class="serveList">
        <li v-for="item in serviceList" :key="item.id">
          <router-link to="">
            <span :class="`iconfont ${item.icon}`" :style="{background:item.bgc}"></span>
            <p>{{item.txt}}</p>
          </router-link>
        </li>
      </ul>
      <!-- 服务列表结束 -->
    </div>
    </div>
    <!-- 菜单栏开始 -->
    <div class="showBox">
      <div class="main">
        <div class="headPortrait"><img src="../../../static/timg.jpg" alt=""></div>
        <span class="nickname">我我我我嚄我我我我</span>
      </div>
      <ul class="menu-list">
        <li class="menu-item active-color" @click="active('/findfamil')">
          <span class="iconfont icon-shexiangji"></span>
          <span class="menu-item-txt">找家教</span>
        </li>
        <li class="menu-item" @click="active('/waterList')">
          <span class="iconfont icon-huaban-"></span>
          <span class="menu-item-txt">送水到家</span>
        </li>
        <li class="menu-item" @click="active('/repairlist')">
          <span class="iconfont icon-weibolu"></span>
          <span class="menu-item-txt">维修服务</span>
        </li>
        <li class="menu-item" @click="active('/housekeeping')">
          <span class="iconfont icon-zuqiu"></span>
          <span class="menu-item-txt">家政服务</span>
        </li>
        <li class="menu-item" @click="active('/#')">
          <span class="iconfont icon-yinle"></span>
          <span class="menu-item-txt">社区活动</span>
        </li>
        <li class="menu-item" @click="active('/info')">
          <span class="iconfont icon-dianying"></span>
          <span class="menu-item-txt">消息中心</span>
        </li>
        <li class="menu-item" @click="active('/collection')">
          <span class="iconfont icon-i"></span>
          <span class="menu-item-txt">我的收藏</span>
        </li>
        <li class="menu-item" @click="active('/release')">
          <span class="iconfont icon-B"></span>
          <span class="menu-item-txt">我的发布</span>
        </li>
        <li class="menu-item" @click="active('#')">
          <span class="iconfont icon-xin"></span>
          <span class="menu-item-txt">账号设置</span>
        </li>
      <li class="menu-item" @click="active('#')">
          <span class="iconfont icon-jurassic_export"></span>
          <span class="menu-item-txt">退出登录</span>
        </li>
      </ul>
      <div></div>
    </div>
    <!-- 菜单栏结束 -->
    </div>
  </div>
</template>
</script>
<script>
import url from '../../util/api'
import {mapGetters} from 'vuex'
import { Toast } from 'vant';
export default {
  data () {
    return {
      day : "",//日期
      time : "",//时间
      //服务列表假json
      serviceList:[
        {
          id:1,
          icon:"icon-boshimao",
          bgc:"rgb(253,144,76)",
          txt:"找家教"
        },
        {
          id:2,
          icon:"icon-shuiping",
          bgc:"rgb(137,212,57)",
          txt:"送水到家"
        },
        {
          id:3,
          icon:"icon-weixiu",
          bgc:"rgb(0,166,236)",
          txt:"维修服务"
        },
        {
          id:4,
          icon:"icon-swticonjiazheng",
          bgc:"rgb(79,211,190)",
          txt:"家政"
        },
        {
          id:5,
          icon:"icon-huizhengongzuoliang",
          bgc:"rgb(242,196,12)",
          txt:"社区互动"
        },
        {
          id:6,
          icon:"icon-gengduo1",
          bgc:"rgb(249,101,99)",
          txt:"更多服务"
        }
      ],
      //控制菜单栏显示隐藏
      controller:false,
      timer:null,
      l:0
    }
  },
  computed: {
    ...mapGetters(["getHomeBanner"])
  },
  mounted() {
    this.$store.dispatch("getHomeBanner");
    this.getTime();
  },
  methods:{
    //封装了一个时间函数
    getTime(){
      let date = new Date();
      let day = date.getDay();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let arr = ["日","一","二","三","四","五","六"];
      let str = "星期"+arr[day];
      this.day = str;
      this.time = hour<10?"0"+hour+":"+minute:hour +":"+minute
    },
    //控制菜单栏显示隐藏的函数
    mine(){
      this.back=null;
      this.controller = !this.controller;
      if(this.controller){
        this.fun(this,10,0,374)
      }else{
        this.fun(this,10,374,0)
      }
    },
    //点击页面空白处让菜单栏关闭
    back(){
      if(this.controller){
        this.fun(this,10,374,0);
        this.controller = false;
      }else{
        return
      }
    },
    //封装一个定时器函数
    fun(that,step,origin,end){
        //设表先关
        clearInterval(that.timer);
        //判断方向设置步长
        step = origin<end? step : -step;
        //设置定时器
        that.timer = setInterval(function(){
        //设置变量保存当前位置值
        that.l += step;
        if(step>0 && that.l>=end || step<0 && that.l<=end){
        that.l=end;
        clearInterval(that.timer);
        }
        return that.$refs.move.style.left = that.l/100+'rem';
    },2)
    },
    active(path){
      console.log(path)
    }
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>"; //less的深度选择器
@import "../../assets/style/less/home.less";
</style>