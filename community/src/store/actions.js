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
            console.log(res)
        })
        .catch(err=>{})
    },
    getBanner(){
        api.banner()
        .then(res=>{
            let {data:{data},status} = res
            if(status == 200){
                this.commit("getBanner",data)
                console.log(data,"1111")
            }
            console.log(res)
        })
        .catch()
    }
}
export default actions