let mutations = {
    //模板
    getClassify(state,Data){
        state.Classify = Data.data
        state.Classifyname = Data.arr
    },
    getBanner(state,image){
        state.imgs = image
    }
}
export default mutations