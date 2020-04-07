 import state from './state'
let getters = {
    // 模板
    getClassify(){
        return state.Classify
    },
    getBanner(){
        return state.imgs
    }
}
export default getters