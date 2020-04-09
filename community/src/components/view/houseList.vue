<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="houseList">
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
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <div class="staff" v-for="item in houseList" :key="item.id" @click="goparticulars(item.id)">
        <div class="top">
          <div class="photo">
            <img :src="item.img"
                 alt="">
          </div>
          <div class="info">
            <div class="heard">
              <p>
                <span class="name">{{item.name}}</span>
                <span class="vNum">{{item.vNum.toUpperCase()}}</span>
              </p>
              <span class="price"><span class="money">￥{{item.price}}</span>/小时</span>
            </div>
            <p class="details">
              <span>{{item.city}}</span>
              <span>|</span>
              <span>{{item.age}}岁</span>
              <span>|</span>
              <span>{{item.edu}}</span>
              <span>|</span>
              <span>{{item.experience}}年经验</span>
            </p>
            <p class="introduce">{{item.info}}</p>
            <p class="attention">
              <span class="iconfont">&#xe6cc;</span>
              <span>关注{{item.readNum}}</span>
              <span class="iconfont">&#xe64d;</span>
              <span>好评{{item.likeNum}}</span>
            </p>
          </div>
        </div>
        <p class="location">
          <span class="iconfont">&#xe604;</span>
          <span>距离您{{item.len}}</span>
        </p>
      </div>
      <!-- 骨架屏 -->
      <van-skeleton title
                    avatar
                    :loading="loading"
                    :row="6" />
    </van-list>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import api from '../../util/api'
export default {
  data() {
    return {
      name: "找家政",
      value1: 0,
      value2: "a",
      value3: "e",
      option1: [
        { text: "籍贯", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "工资", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "年龄", value: "d" },
        { text: "好评排序", value: "e" },
        { text: "销量排序", value: "f" }
      ],
      list: [],
      loading: false,
      finished: false,
      type:"",
      houseList:null,
      houseList1:localStorage.getItem('arr') ? JSON.parse(localStorage.getItem('arr')) : [],
      leng:null
    }
  },
  mounted() {
    //获取query参数
    let type = this.$router.currentRoute.query
    this.type = type
    if(JSON.stringify(type) != "{}"){
        this.name = type.type
    }
    api.findHomeWorker(this.type).then(res=>{
          if(res.status == 200){
            this.houseList = res.data.data
            this.leng = res.data.data.length
            // 加载状态结束
            this.loading = false
            if(this.houseList.length == res.data.data.length){
              this.finished = true
            }
          }
        })
    
  },
  methods: {
    onLoad() {
      // 异步更新数据
     
    },
    goparticulars(id){
      this.$router.push({
        path:"/houseParticulars",
        query:{id}
      })
    }
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/houseList.less";
</style>