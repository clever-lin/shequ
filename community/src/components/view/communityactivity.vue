<template>
  <div>
    <van-nav-bar left-arrow class="NavBar" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" color="#ffffff" size="0.4rem" />
      </template>
      <template #title>
        <div class="infoTitle">社区活动</div>
      </template>
    </van-nav-bar>
    <div v-for="item in info" :key="item.id" class="con-box" @click="goinfo">
      <div>
        <img :src="item.img" alt class="pic" />
      </div>
      <div class="con">{{item.con}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          id: 1,
          img: "../../../static/ac1.jpg",
          con: "一元超值越购越开心"
        },
        {
          id: 2,
          img: "../../../static/ac2.jpg",
          con: "一元超值越购越开心"
        },
        {
          id: 3,
          img: "../../../static/ac3.jpg",
          con: "一元超值越购越开心"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    //前往详情
    goinfo() {}
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
.con-box {
  border: 0.02rem solid #eee;
  margin: 0.05rem 0.05rem 0.2rem 0.05rem;
}
.pic {
  width: 100%;
  height: 2.5rem;
}
.con {
  font-weight: 600;
  padding: 0.1rem;
}
</style>