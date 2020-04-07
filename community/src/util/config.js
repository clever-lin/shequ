//这个文件是axios的配置文件
import axios from 'axios'
//引入路由文件
import router from 'vue-router'
//设置http把axios所有属性和方法赋值
let http = axios.create()

//创建请求拦截器
http.interceptors.request.use(config=>{
    //往请求头中添加token
    //工作中这个token从哪里取，登录之后获取token，存到存储中，在这再获取一下
  //  config.headers.token = 1234567
    return config
})

//创建响应拦截器
http.interceptors.response.use(response=>{
    return response
})

export default http
