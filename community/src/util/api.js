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
//家教轮播图接口
getData.getTeacherBanner = (data)=>{
    return http.get(baseUrl + '/TeacherBanner',{
        params:data
    })
}
//家教排行接口
getData.getteacherTop = (data)=>{
    return http.get(baseUrl + '/teacherTop ',{
        params:data
    })
}
//家政轮播图接口
getData.gethousekeepingbanner = (data)=>{
    return http.get(baseUrl + '/homeBanner',{
        params:data
    })
}
//家政员工信息接口
getData.findHomeWorker = (data)=>{
    return http.get(baseUrl + '/findHomeWorker',{
        params:data
    })
}
//获取维修评论接口
getData.findRepairComment = (data)=>{
    return http.get(baseUrl + '/findRepairComment',{
        params:data
    })
}
//获取维修列表接口
getData.findRepair = (data)=>{
    return http.get(baseUrl + '/findRepair',{
        params:data
    })
}
//获取水站列表接口
getData.findWater = (data)=>{
    return http.get(baseUrl + '/findWater',{
        params:data
    })
}
getData.banner = (data)=>{
    return http.get(baseUrl+'/banner',{
        params:data
    })
}

//暴露出这个接口对象
export default getData
