<template>
  <div class="center">
    <div class="top">
      <v-back :name="name"></v-back>
    </div>
    <div class="info">
        <div class="login">
          <div class="portrait" @click="gologin">
                <div class="portrait_img">
                    <img v-if="info" :src="info.img" alt="用户图像">
                    <input v-if="isLogin" type="file" name="select-pic" id="select-pic" accept="image/*" @change="previewPic" >
                </div>
                <div v-if="!isLogin" class="portrait_txt">点击登录</div>
                <div v-if="isLogin" class="portrait_txt">{{info.name}}</div>
            </div>
    </div>
  </div>
  <!-- 操作 -->
  <ul class="operation">
    <li class="collect">
      <div class="left">
        <div class="circle">
          <span class="iconfont">&#xe624;</span>
        </div>
        <span class="text">我的收藏</span>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#dddddd" />
      </div>
    </li>
    <li class="information">
      <div class="left">
        <div class="circle">
          <span class="iconfont">&#xe69d;</span>
        </div>
        <span class="text">我的消息</span>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#dddddd" />
      </div>
    </li>
    <li class="Circle">
      <div class="left">
        <div class="circle">
          <span class="iconfont">&#xe64e;</span>
        </div>
        <span class="text">我的圈子</span>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#dddddd" />
      </div>
    </li>
    <li class="photo">
      <div class="left">
        <div class="circle">
          <span class="iconfont">&#xe616;</span>
        </div>
        <span class="text">相册</span>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#dddddd" />
      </div>
    </li>
    <li class="set">
      <div class="left">
        <div class="circle">
          <span class="iconfont">&#xe851;</span>
        </div>
        <span class="text">设置</span>
      </div>
      <div class="right">
        <van-icon name="arrow" color="#dddddd" />
      </div>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:"个人中心",
      isLogin:null,
      pic:null,
      info:null
    }
  },
  mounted(){
    let login = JSON.parse(sessionStorage.getItem("user"))
    if(login){
      this.isLogin = true
      this.info = login
      this.info.img = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2841648446,236398816&fm=26&gp=0.jpg"
    }
  },
  methods:{
    gologin(){
      if(!this.info){
        this.$router.push("/login")
      }
    },
    previewPic:function(e){
        var that = this;
        var file = e.target.files[0];
        var fr =new FileReader();
        fr.readAsDataURL(file);
        fr.onload = function(e){
          that.pic = e.target.result;
        }
 
      }
  }
}
</script>

<style lang="less" scoped>
@deep: ~">>>";
@import "../../assets/style/less/center.less";
</style>