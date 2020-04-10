<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="waterParticulars">
    <v-backCenter :name="name"></v-backCenter>
    <div class="section">
      <div class="main"
           v-for="item in getWater"
           :key="item.id">
        <!-- 水站信息 -->
        <div class="staff">
          <div class="top">
            <div class="photo">
              <img :src="item.img"
                   alt="">
            </div>
            <div class="info">
              <div class="heard">
                <p>
                  <span class="name">{{item.name}}</span>
                </p>
              </div>
              <van-rate size=12
                        v-model="item.score"
                        readonly />
              <span class="market">月售{{item.count}}桶</span>
              <br>
              <span class="price"><span class="money">￥{{item.price}}</span>/桶</span>
              <p class="location">
                <span class="attention">
                  <van-icon name="good-job" />
                  <span>{{item.readNum}}</span>
                  <span class="good">浏览数{{item.likeNum}}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <!-- 地址和电话 -->
        <div class="relation">
          <div class="address">
            <div class="iconf">
              <span class="iconfont">&#xe604;</span>
            </div>
            <div class="len_info">
              <p class="len">{{item.len}}</p>
              <p class="addres">{{item.address}}</p>
            </div>
          </div>
          <div class="tel" @click="callPhone(item.tel)">
            <span class="iconfont">&#xe66e;</span>
          </div>
        </div>
        <!-- 简介 -->
        <div class="brief">
          <h2 class="title">商家信息</h2>
          <div class="content">
            {{item.des}}
          </div>
        </div>
      </div>
      <!-- 雇主评价 -->
      <div class="evaluate">
        <div class="header">
          <div class="title">TA们都再说</div>
          <div class="write">
            <span class="iconfont">&#xe611;</span>
            <span class="text">写评论</span>
          </div>
        </div>
        <!-- 评价信息 -->
        <div class="comment"
             v-for="item in getRepairComment"
             :key="item.id">
          <div class="main"
               v-if="getRepairComment">
            <div class="photo">
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2151447830,1807870251&fm=11&gp=0.jpg"
                   alt="">
            </div>
            <div class="info">
              <div class="name_time">
                <span class="name">{{item.name}}</span>
                <span class="time">{{item.time | toTime}}</span>
              </div>
              <p class="content_info">{{item.content}}</p>
            </div>
          </div>
          <div class="none"
               v-if="!getRepairComment">暂时还有没评论哦~快去评论吧</div>
        </div>
      </div>
    </div>
    <v-relation></v-relation>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      name: "详细"
    }
  },
  mounted() {
    let id = this.$router.currentRoute.query
    this.$store.dispatch("findWater", id)
    this.$store.dispatch("findRepairComment")
  },
  methods: {
    // 调用拨号功能
    callPhone (phoneNumber) {
        window.location.href = 'tel://' + phoneNumber
    }
  },
  computed: {
    ...mapGetters(["getWater", "getRepairComment"])
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/waterParticulars.less";
</style>