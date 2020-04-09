import api from '../util/api'
import { Toast } from "vant"
import router from '../router'
let actions = {
    // 模板
    // getClassify(){
    //     api.getClassify()
    //     .then(res=>{
    //         let {data:{code,data}} = res
    //         if(code == 200){
    //             //{ text: '母婴专区' }
    //             var arr = []
    //             for(let i = 0 ;i < data.length;i++){
    //                 let obj = { "text" : data[i].name}
    //                 arr.push(obj)
    //             }
    //             let Data ={}
    //             if(arr.length == data.length){
    //                 Data.data = data
    //                 Data.arr = arr
    //                 this.commit("getClassify",Data)
    //             }
    //         }
    //     })
    //     .catch(err=>{})
    // }
    Login(state,form){
        api.login(form).then(res=>{
            if(res.data.code != 0){
                Toast(res.data.info);
            }
            else{
                Toast.success(res.data.info);
                api.finduser({name:form.name}).then(res=>{
                    sessionStorage.setItem("user",JSON.stringify(res.data.data[0]))
                    router.push("/home")
                })
                .catch(err=>{})
            }
        })
        .catch(err=>{})
    },
    //首页的图
    getHomeBanner(){
        api.banner()
        .then(res=>{
            let {data:{data},status} = res
            if(status == 200){
                this.commit("getHomeBanner",data[0].img)
            }
        })
        .catch()
    },
    //获取家教轮播图
    getTeacherBanner(){
        api.getTeacherBanner().then(res=>{
            if(res.status == 200){
                this.commit("setTeacherBanner",res.data.data)
            }
        })
        .catch(err=>{})
    },
    //获取家教轮播图
    getteacherTop(){
        api.getteacherTop().then(res=>{
            if(res.status == 200){
                this.commit("setteacherTop",res.data.data)
            }
        })
        .catch(err=>{})
    },
    //获取家政轮播图
    gethousekeepingbanner(){
        api.gethousekeepingbanner().then(res=>{
            if(res.status == 200){
                this.commit("sethousekeepingbanner",res.data.data)
            }
        })
        .catch(err=>{})
    },
    //获取家政员工信息
    findHomeWorker(state,id){
        api.findHomeWorker(id).then(res=>{
            if(res.status == 200){
                this.commit("setHomeWorker",res.data.data)
            }
        })
        .catch(err=>{})
    },
    //获取维修评论接口
    findRepairComment(){
        api.findRepairComment().then(res=>{
            if(res.status == 200){
                this.commit("setRepairComment",res.data.data)
            }
        })
        .catch(err=>{})
    },
}
export default actions