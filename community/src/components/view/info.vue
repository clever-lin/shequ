<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="info">
    <van-nav-bar left-arrow class="NavBar" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" color="#ffffff" size="0.4rem" />
      </template>
      <template #title>
        <div class="infoTitle">消息</div>
      </template>
      <template #right>
        <van-icon name="contact" size="0.4rem" color="#ffffff" />
      </template>
    </van-nav-bar>
    <van-tabs v-model="active" line-width="0" line-height="0" title-active-color="#007af5">
      <van-tab title="全部">
        <div class="message-box" v-for="item in messageList" :key="item.id">
          <div class="message-icon-bg">
            <van-icon name="home-o" color="#fff" size="1rem" class="message-icon-center" />
            <!-- <div class="red-circle">{{item.num}}</div> -->
          </div>
          <div class="message-rigth">
            <div class="message-right-top">
              <span class="message-right-top-title">{{item.title}}</span>
              <span class="message-right-top-time">{{item.time}}</span>
            </div>
            <div class="message-con">{{item.con}}</div>
          </div>
        </div>
      </van-tab>

      <van-tab title="未读">
        <div class="message-box" v-for="item in messageList" :key="item.id">
          <div class="message-icon-bg">
            <van-icon name="orders-o" color="#fff" size="1rem" class="message-icon-center" />
            <!-- <div class="red-circle">{{item.num}}</div> -->
          </div>
          <div class="message-rigth">
            <div class="message-right-top">
              <span class="message-right-top-title">{{item.title}}</span>
              <span class="message-right-top-time">{{item.time}}</span>
            </div>
            <div class="message-con">{{item.con}}</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      //全部消息列表
      messageList: [
        {
          id: 1,
          num: 5,
          title: "通知消息",
          time: "08:53",
          con:
            "龙山社区为庆祝国庆将举行大型社区活动，欢迎各个业主积极报名参加。。。"
        },
        {
          id: 2,
          num: 2,
          title: "通知消息",
          time: "09:53",
          con:
            "龙山社区为庆祝国庆将举行大型社区活动，欢迎各个业主积极报名参加。。。"
        }
      ],
      //未读消息列表
      noreadeList: [
        {
          id: 1,
          num: 5,
          title: "通知消息",
          time: "08:53",
          con:
            "龙山社区为庆祝国庆将举行大型社区活动，欢迎各个业主积极报名参加。。。"
        },
        {
          id: 2,
          num: 2,
          title: "通知消息",
          time: "09:53",
          con:
            "龙山社区为庆祝国庆将举行大型社区活动，欢迎各个业主积极报名参加。。。"
        }
      ]
    };
  },
  methods: {
    //返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    //点击跳转到搜索页面
    onClickRight() {}
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #007af5;
}

.infoTitle {
  color: #ffffff;
  font-size: 0.3rem;
}
.message-box {
  display: flex;
  color: #ccc;
  border-bottom: 0.02rem solid #eee;
  margin-top: 0.4rem;
  padding-bottom: 0.2rem;
}
.message-icon-bg {
  width: 1.3rem;
  height: 1.3rem;
  background-color: #f42e2b;
  text-align: center;
  line-height: 1.3rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  position: relative;
}
.message-right-top {
  display: flex;
  justify-content: space-between;
}
.message-rigth {
  flex: 1;
  margin-right: 0.2rem;
}
.message-right-top-title {
  color: #333;
  font-weight: 600;
  font-size: 0.28rem;
}
.message-con {
  margin-top: 0.2rem;
  font-size: 0.24rem;
}
.message-icon-center {
  margin-top: 0.2rem;
}
// .red-circle {
//   position: absolute;
//   right: -0.2rem;
//   top: -0.2rem;
//   width: 0.4rem;
//   height: 0.4rem;
//   background-color: red;
//   border: 0.04rem solid #fff;
//   border-radius: 50%;
//   color: #fff;
//   font-size: 0.3rem;
// }
</style>