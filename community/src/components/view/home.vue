<template>
<!-- 这里更改成你的页面的class名 -->
  <div class="home">
    <van-nav-bar title="龙山家园" left-arrow class="navBar">
      <template #left>
        <van-icon name="wap-nav" size="18" color="#fff"/>
     </template>
      <template #right>
       <van-icon name="location-o" size="18" color="#fff"/>
      </template>
    </van-nav-bar>
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
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    }
  }
}
</script>

<style lang="less" scoped>
body{
  
}
.navBar{
  background-color:rgb(0,122,244);
  height: 1.71rem /* 128/75 */;
  line-height: 1.71rem /* 128/75 */;
  box-sizing: border-box;
  font-size: .23rem /* 17/75 */;
}
.navBar>.van-nav-bar__title{
  color:white
}
</style>