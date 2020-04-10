<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="houseParticulars">
    <v-backCenter :name="getHomeWorker[0].name"
                  v-if="getHomeWorker"></v-backCenter>
  <div class="main" v-for="item in getHomeWorker" :key="item.id">
        <!-- 个人信息 -->
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
          <p class="btn">
            <van-button type="primary"
                        color="#86d855"
                        size="mini">关注</van-button>
            <van-button type="primary"
                        color="#75bcff"
                        size="mini">向Ta提问</van-button>
          </p>
          <p class="location">
            <span class="attention">
              <span class="iconfont">&#xe6cc;</span>
              <span>关注{{item.readNum}}</span>
              <span class="iconfont">&#xe64d;</span>
              <span>好评{{item.likeNum}}</span>
            </span>
            <span>
              <span class="iconfont">&#xe604;</span>
              <span>距离您{{item.len}}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <!-- 简介 -->
    <div class="brief">
      <h2 class="title">简介</h2>
      <div class="content">
        <p>资格认证 : <span>{{item.qualification}}</span></p>
        <p>服务项目 : <span>{{item.type}}</span></p>
        <p>自我评价 : <span>{{item.info}}</span></p>
      </div>
    </div>
  </div>
  <!-- 雇主评价 -->
  <div class="evaluate">
    <div class="header">
      <div class="title">雇主评价</div>
      <div class="write">
        <span class="iconfont">&#xe611;</span>
        <span class="text">写评论</span>
      </div>
    </div>
    <!-- 评价信息 -->
    <div class="comment" v-for="item in getRepairComment" :key="item.id">
        <div class="main" v-if="getRepairComment">
          <div class="photo">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2151447830,1807870251&fm=11&gp=0.jpg" alt="">
        </div>
        <div class="info">
            <div class="name_time">
                <span class="name">{{item.name}}</span>
                <span class="time">{{item.time | toTime}}</span>
            </div>
            <p class="content_info">{{item.content}}</p>
        </div>
        </div>
        <div class="none" v-if="!getRepairComment">暂时还有没评论哦~快去评论吧</div>
    </div>
  </div>
  <v-relation></v-relation>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {}
  },
  mounted() {
    let id = this.$router.currentRoute.query
    this.$store.dispatch("findHomeWorker", id)
    this.$store.dispatch("findRepairComment")
  },
  computed: {
    ...mapGetters(["getHomeWorker","getRepairComment"])
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/houseParticulars.less";
</style>