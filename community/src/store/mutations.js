let mutations = {
  //模板
  //设置家教轮播图
  setTeacherBanner(state, data) {
    state.TeacherBanner = data;
  },
  //设置家教排行榜
  setteacherTop(state, data) {
    state.teacherTop = data;
  },
  //设置家政轮播图
  sethousekeepingbanner(state, data) {
    state.housekeepingbanner = data;
  },
  //设置家政员工信息
  setHomeWorker(state, data) {
    state.HomeWorker = data;
  },
  //设置维修评论
  setRepairComment(state, data) {
    state.RepairComment = data;
  },
  //设置维修列表
  setRepair(state, data) {
    state.Repair = data;
  },
  //设置水站列表
  setWater(state, data) {
    state.Water = data;
  },
  getHomeBanner(state, Data) {
    state.homeBanner = Data;
  },
  //设置城市
  setCity(state, data) {
    state.city = data;
  }
};
export default mutations;
