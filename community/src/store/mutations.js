let mutations = {
    //模板
    getClassify(state,Data){
        state.Classify = Data.data
        state.Classifyname = Data.arr
    },
    getHomeBanner(state,Data){
        state.homeBanner = Data
    }
}
export default mutations