import api from '../util/api'
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