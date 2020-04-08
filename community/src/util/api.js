//这里面是共通的接口
//引入axios配置文件
import http from './config'
let baseUrl = '/api'
//设置一个接口对象
let getData={}
//模板
getData.login = (data)=>{
    return  http.post(baseUrl+'/login',data)
}
//查找用户信息
getData.finduser = (data)=>{
    return http.post(baseUrl + '/findUser',data)
}
getData.banner = (data)=>{
    return http.get(baseUrl+'/banner',{
        params:data
    })
}

//暴露出这个接口对象
export default getData
