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
    getBanner(state,image){
        state.imgs = image
    }
}
export default mutations