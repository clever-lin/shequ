<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="release">
    <van-nav-bar left-arrow class="NavBar" @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" color="#ffffff" size="0.4rem" />
      </template>
      <template #title>
        <div class="infoTitle">我要发布</div>
      </template>
    </van-nav-bar>
    <div class="img-box">
      <van-uploader v-model="fileList" multiple />
    </div>
    <van-field v-model="infoList.title" label="标题" label-width="1rem" class="input-comm" />
    <van-field v-model="infoList.tag" label="标签" label-width="1rem" class="input-comm" />
    <van-field v-model="infoList.price" label="价格" label-width="1rem" class="input-comm" />
    <van-field v-model="infoList.phone" label="联系方式" label-width="1rem" class="input-comm" />
    <van-field
      v-model="infoList.con"
      label="描述"
      label-width="1rem"
      type="textarea"
      class="input-comm"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      infoList: {
        title: "",
        tag: "",
        price: "",
        phone: "",
        con: ""
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.release {
  width: 100vw;
  height: 100vh;
  background-color: #eee;
}
.van-nav-bar {
  background-color: #007af5;
}

.infoTitle {
  color: #ffffff;
  font-size: 0.3rem;
}

.img-box {
  margin: 0.4rem 0.2rem 0.2rem 0.2rem;
}
.van-cell {
  border: 0.02rem solid #dddddd;
}
.input-comm {
  margin: 0rem 0.2rem 0.2rem 0.2rem;
  // padding: 0.2rem 0rem;
  width: auto;
}
</style>