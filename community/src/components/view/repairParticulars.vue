<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="repairParticulars">
    <div class="section">
      <div class="header">
        <v-backCenter :name="name"></v-backCenter>
      </div>
      <!-- 信息 -->
      <div class="info"
           v-for="item in getRepair"
           :key="item.id">
        <!-- 基础信息 -->
        <div class="basic">
          <div class="title">
            <div class="name">{{item.name}}</div>
            <div class="score">
              <van-rate size=14
                        v-model="item.score"
                        readonly />
            </div>
          </div>
          <div class="content">
            <div class="content_left">
              <span class="iconfont">&#xe604;</span>
            </div>
            <div class="content_right">
              <p class="len">距离您{{item.len}}</p>
              <p class="address">{{item.address}}</p>
              <p class="time">营业时间 : 09:00 - 18:00</p>
              <p class="btn">
                <van-button type="primary"
                            color="#86d855"
                            size="mini">关注</van-button>
                <van-button type="primary"
                            color="#75bcff"
                            size="mini">向Ta提问</van-button>
              </p>
              <div class="location">
                <p class="attention">
                  <span class="iconfont">&#xe6cc;</span>
                  <span>关注{{item.likeNum}}</span>
                  <span class="iconfont">&#xe64d;</span>
                  <span>好评{{item.readNum}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 商家信息 -->
        <div class="Business">
          <div class="title">商家信息</div>
          <p class="info">{{item.info}}</p>
        </div>
      </div>
      <!-- 雇主评价 -->
      <div class="evaluate">
        <div class="header">
          <div class="title">TA们都在说</div>
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
      name: "商家详情",
      value: 4
    }
  },
  mounted() {
    let id = this.$router.currentRoute.query
    console.log(id)
    this.$store.dispatch("findRepair", id)
    this.$store.dispatch("findRepairComment")
  },
  computed: {
    ...mapGetters(["getRepairComment", "getRepair"])
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/repairParticulars.less";
</style>