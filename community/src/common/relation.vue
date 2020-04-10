<template>
  <!-- 这里更改成你的页面的class名 -->
  <div class="relation">
      <div class="share">分享</div>
      <div class="questions">与我联系</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
.relation{
    position: fixed;
    bottom: 0;
    left: 2.5%;
    width: 95%;
    color:#fff;
    text-align: center;
    display: flex;
    line-height: 35px;
    background-color: #fff;
    border-radius: 10px;
    .share{
        width: 20%;
        height: 33px;
        border-radius: 5px;
        border: 1px solid #ff6600;
        color:#000;
        margin-right: 10px;
        background-color: #fff;
    }
    .questions{
        width: 80%;
        height: 35px;
        background-color: #ff6600;
        border-radius: 10px;
    }
}
</style>