// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入font字体
import "./assets/style/css/iconfont.css"
import './assets/js/iconfont'
//引入公共less
import "!style-loader!css-loader!less-loader!./assets/style/less/commend.less"
//引入remjs文件
import "./assets/js/remScale.js"
//引入axios  先npm install axios --save-dev
// import axios from 'axios';

//   # 安装插件
// npm i babel-plugin-import -D  自动按需引入
  //引入vant
  import Vant from 'vant';
  import 'vant/lib/index.css';
  import { Icon } from 'vant';
  import { Popup } from 'vant';
  import { Swipe, SwipeItem } from 'vant';
  import { Lazyload } from 'vant';
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use(Popup);
  Vue.use(Vant);
  Vue.use(Icon);import { SwipeCell } from 'vant';
  Vue.use(SwipeCell);
  Vue.use(Lazyload, {
    lazyComponent: true,
    loading:'../static/img/default.jpg'
  });

// //原型全局挂载axios
// Vue.prototype.$axios = axios;
//挂载store
import store from './store'

//封装全局组件
import comComponent from './common'
for(let i in comComponent){
  Vue.component(i,comComponent[i])
}
//封装全局过滤器
import comFilter from './filter'
for(let i in comFilter){
  Vue.filter(i,comFilter[i])
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
