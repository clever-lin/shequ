<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="collection">
    <van-nav-bar left-arrow class="NavBar" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" color="#ffffff" size="0.4rem" />
      </template>
      <template #title>
        <div class="infoTitle">我的收藏</div>
      </template>
      <template #right>
        <van-icon name="contact" size="0.4rem" color="#ffffff" />
      </template>
    </van-nav-bar>
    <div class="collection-box" v-for="(item,index) in collectionList" :key="item.id">
      <div class="collection-box-rigth">
        <div class="collection-box-right-title">{{item.title}}</div>
        <div class="collection-box-right-con">{{item.con}}</div>
        <div class="collection-box-right-adress">
          <span class="iconfont icon-icon-test weizhi"></span>
          {{item.adress}}
        </div>
      </div>
      <div class="collection-box-left" @click="del(index)">
        <span class="iconfont icon-yichu quxiao"></span>
        <span>取消收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collectionList: [
        {
          id: 1,
          title: "百家手机维修中心1",
          con: "手机，电视，电脑维修，数据恢复",
          adress: "石门山古城地铁北星座大厦201"
        },
        {
          id: 1,
          title: "百家手机维修中心2",
          con: "手机，电视，电脑维修，数据恢复",
          adress: "石门山古城地铁北星座大厦201"
        },
        {
          id: 1,
          title: "百家手机维修中心3",
          con: "手机，电视，电脑维修，数据恢复",
          adress: "石门山古城地铁北星座大厦201"
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
    onClickRight() {},
    //取消收藏事件
    del(i) {
      this.collectionList.splice(i, 1);
    }
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
.collection-box {
  display: flex;
  justify-content: space-between;
  border: 0.02rem solid #eee;
  margin: 0.2rem;
}
.collection-box-rigth {
  margin-left: 0.4rem;
  width: 3.5rem;
}
.collection-box-right-title {
  font-size: 0.28rem;
  font-weight: 700;
  margin: 0.15rem 0rem;
}
.collection-box-right-con {
  color: #ccc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.collection-box-right-adress {
  color: #ccc;
  font-size: 0.2rem;
  margin: 0.1rem 0rem;
}
.weizhi {
  font-size: 0.2rem;
}
.collection-box-left {
  display: flex;
  width: 1.1rem;
  flex-direction: column;
  text-align: center;
  margin-right: 0.1rem;
  border-left: 0.02rem solid #eee;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
}
.quxiao {
  margin-top: 0.27rem;
  color: red;
}
</style>