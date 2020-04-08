<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="goback">
    <van-nav-bar title="找家教"
                 left-text=""
                 @click-left="onClickLeft"
                 @click-right="onClickRight"
                 left-arrow>
      <template #right>
        <span class="iconfont">&#xe639;</span>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods:{
    onClickLeft(){
      this.$router.push("/home")
    },
    onClickRight(){
      this.$router.push("/center")
    }
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@{deep}.van-nav-bar{
        background-color: #007af4;
        
    }
    @{deep}.van-icon{
        color: #fff;
        font-size: 0.4rem;
    }
    @{deep}.van-nav-bar__title{
        color: #fff;
        font-size: 0.3rem;
    }
    @{deep}.van-nav-bar__right{
        display: flex;
        align-items: center;
    }
    span{
        color: #fff;
        font-size: 0.4rem;
    }

</style>