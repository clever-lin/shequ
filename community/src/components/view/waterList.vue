<template>
<!-- 这里更改成你的页面的class名 -->
  <div class="waterList">
    <v-backCenter :name="name"></v-backCenter>
    <!-- 条件选择 -->
    <div class="screen">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1"
                           :options="option1" />
        <van-dropdown-item v-model="value2"
                           :options="option2" />
        <van-dropdown-item v-model="value3"
                           :options="option3" />
      </van-dropdown-menu>
    </div>
    <!-- 列表 -->
    <div class="infolist">
        <div class="info" v-for="item in getWater" :key="item.id">
          <div class="img">
            <img :src="item.img" alt="">
          </div>
          <div class="info_right">
            <div class="info_left" @click="golist(item.id)">
            <div class="title">
              <span class="tit">{{item.name}}</span>
              <van-rate size=14 v-model="item.score" readonly />
            </div>
            <div class="des">{{item.des}}</div>
            <div class="address">
              <span class="iconfont">&#xe604;</span>
              <span>{{item.address}}</span>
            </div>
          </div>
          <div class="phone">
            <div class="circle" @click="callPhone(item.tel)">
              <span class="iconfont">&#xe66e;</span>
            </div>
            <span class="len">{{item.len}}</span>
          </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      name: "送水到家",
      value:5,
      value1: 0,
      value2: "a",
      value3: "d",
      option1: [
        { text: "水站", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "区域", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "智能排序", value: "d" },
        { text: "好评排序", value: "e" },
        { text: "销量排序", value: "f" }
      ],
    }
  },
  mounted() {
    this.$store.dispatch("findRepair")
    this.$store.dispatch("findWater")
  },
  methods: {
    // 调用拨号功能
    callPhone (phoneNumber) {
        window.location.href = 'tel://' + phoneNumber
    },
    golist(id) {
      this.$router.push({ 
        path: "/waterParticulars", 
        query: {id} 
      })
    }
  },
  computed: {
    ...mapGetters(["getRepair","getWater"])
  },
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/waterList.less";
</style>