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
        <div class="info">
          <div class="info_left">
            <div class="title">
              <span class="tit">杨鑫维修中心阿萨</span>
            </div>
            <div class="type">电脑、手机</div>
            <div class="address">
              <span class="iconfont">&#xe604;</span>
              <span>背景阿森纳大三暑假</span>
            </div>
          </div>
          <div class="info_right">
            <div class="circle">
              <span class="iconfont">&#xe66e;</span>
            </div>
            <span class="len">200米</span>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: "商家列表",
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
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/repairlist.less";
</style>