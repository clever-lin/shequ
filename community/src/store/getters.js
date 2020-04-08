 import state from './state'
let getters = {
    // 模板
    //获取TeacherBanner家教轮播图
    getTeacherBanner(){
        return state.TeacherBanner
    },
    //获取teacherTop 家教排行榜
    getteacherTop(){
        return state.teacherTop
    },
    getBanner(){
        return state.imgs
    }
}
export default getters