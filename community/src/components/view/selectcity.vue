<template>
  <div>
    <van-nav-bar left-arrow class="NavBar" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <van-icon name="arrow-left" color="#ffffff" size="0.4rem" />
      </template>
      <template #title>
        <div class="infoTitle">城市列表</div>
      </template>
      <template #right>
        <van-icon name="contact" size="0.4rem" color="#ffffff" />
      </template>
    </van-nav-bar>
    <div class="positioning-title">系统定位的城市是：</div>
    <div class="current-positioning">
      <span>{{getCity}}</span>
      <van-icon name="arrow" />
    </div>
    <div class="other-positioning-box">
      <div class="other-postioning">如果不是请选择：</div>
    </div>
    <van-area
      :area-list="areaList"
      :columns-placeholder="['请选择', '请选择', '请选择']"
      title="标题"
      @confirm="surecity"
      value="110000"
      @change="onchange"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import areaList from "../../assets/js/allCity";
export default {
  data() {
    return {
      areaList,
      cityInfo: []
    };
  },
  methods: {
    //返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    surecity() {
      this.$store.commit("setCity", this.cityInfo[0].name);
      this.$router.push("/home");
    },
    onchange(picker, value, index) {
      this.cityInfo = value;
    }
  },
  computed: {
    ...mapGetters(["getCity"])
  },
  mounted() {}
};
</script>

<style lang="less">
.van-nav-bar {
  background-color: #007af5;
}

.infoTitle {
  color: #ffffff;
  font-size: 0.3rem;
}
.positioning-title {
  color: #555;
  font-size: 0.24rem;
  padding: 0.15rem 0rem 0.15rem 0.25rem;
  border-bottom: 0.01rem solid #ccc;
}
.current-positioning {
  vertical-align: middle;
  padding: 0.15rem 0.25rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
}
.van-icon {
  margin-top: 0.05rem;
  font-size: 0.3rem;
}
.other-positioning-box {
  padding-top: 0.2rem;
  background-color: #ccc;
}
.other-postioning {
  background-color: #fff;
  padding: 0.15rem 0.25rem;
  color: #555;
}
</style>