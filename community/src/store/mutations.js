let mutations = {
    //模板
    //设置家教轮播图
    setTeacherBanner(state,data){
        state.TeacherBanner = data
    },
    //设置家教排行榜
    setteacherTop(state,data){
        state.teacherTop = data
    },
    //设置家政轮播图
    sethousekeepingbanner(state,data){
        state.housekeepingbanner = data
    },
    //设置家政员工信息
    setHomeWorker(state,data){
        state.HomeWorker = data
    },
    getHomeBanner(state,Data){
        state.homeBanner = Data
    }
}
export default mutations