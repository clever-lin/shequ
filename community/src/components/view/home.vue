<template>
<!-- 这里更改成你的页面的class名 -->
  <div class="home">
    <h1>我是首页</h1>
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
      <li v-for="item in getBanner" :key="item.id">
        <img :src="item.img" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import url from '../../util/api'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted(){
    console.log(this,"1111111111111")
    this.$store.dispatch("getBanner")
  },
  computed: {
    ...mapGetters(['getClassify','getBanner'])
  },
}
</script>

<style lang="less" scoped>

</style>