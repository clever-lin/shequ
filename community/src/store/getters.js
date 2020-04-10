 import state from './state'
let getters = {
    // 模板
    // getClassify(){
    //     return state.Classify
    // },
    getHomeBanner(){
        return state.homeBanner
    },
    //获取TeacherBanner家教轮播图
    getTeacherBanner(){
        return state.TeacherBanner
    },
    //获取teacherTop 家教排行榜
    getteacherTop(){
        return state.teacherTop
    },
    //获取teacherTop 家教轮播图
    gethousekeepingbanner(){
        return state.housekeepingbanner
    },
    //获取HomeWorker 家政员工信息
    getHomeWorker(){
        return state.HomeWorker
    },
    //获取setRepairComment 维修评论
    getRepairComment(){
        return state.RepairComment
    },
    //获取setRepair 维修列表
    getRepair(){
        return state.Repair
    },
    //获取setWater 水站列表
    getWater(){
        return state.Water
    },
    getBanner(){
        return state.imgs
    }
}

export default getters