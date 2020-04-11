<template>
<!-- 这里更改成你的页面的class名 -->
  <div class="repairlist">
    <v-backSearch :name="name"></v-backSearch>
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
        <div class="info" v-for="item in getRepair" :key="item.id">
          <div class="info_left" @click="golist(item.id)">
            <div class="title">
              <span class="tit">{{item.name}}</span>
              <van-rate size=14 v-model="item.score" readonly />
            </div>
            <div class="type">{{item.type}}</div>
            <div class="address">
              <span class="iconfont">&#xe604;</span>
              <span>{{item.address}}</span>
            </div>
          </div>
          <div class="info_right">
            <div class="circle" @click="callPhone(item.tel)">
              <span class="iconfont">&#xe66e;</span>
            </div>
            <span class="len">{{item.len}}</span>
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
      name: "商家列表",
      value:5,
      value1: 0,
      value2: "a",
      value3: "d",
      option1: [
        { text: "手机维修", value: 0 },
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
  },
  methods: {
    // 调用拨号功能
    callPhone (phoneNumber) {
        window.location.href = 'tel://' + phoneNumber
    },
    golist(id) {
      this.$router.push({ 
        path: "/repairParticulars", 
        query: {id} 
      })
    }
  },
  computed: {
    ...mapGetters(["getRepair"])
  },
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/repairlist.less";
</style>