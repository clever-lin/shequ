import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//引入一级路由
const Index =()=> import('@/components/index')
const Login =()=> import('@/components/pages/login')
const Register =()=> import('@/components/pages/register')

//引入二级路由
const Home =()=> import('@/components/view/home')
//找家教   家教列表  家教详情
const Findfamil =()=> import('@/components/view/findfamil')
const Familyeducationlist =()=> import('@/components/view/familyeducationlist')
const Familyparticulars =()=> import('@/components/view/familyparticulars')
// 水站列表  水站详情
const WaterList =()=> import('@/components/view/waterList')
const WaterParticulars =()=> import('@/components/view/waterParticulars')
//维修列表  维修详情
const RepairList =()=> import('@/components/view/repairlist')
const RepairParticulars =()=> import('@/components/view/repairParticulars')
//找家政  家政列表 家政详情
const Housekeeping =()=> import('@/components/view/housekeeping')
const HouseList =()=> import('@/components/view/houseList')
const HouseParticulars =()=> import('@/components/view/houseParticulars')
//个人中心
const Center =()=> import('@/components/view/center')
//消息
const Info =()=> import('@/components/view/info')
//发布
const Release =()=> import('@/components/view/release')
//收藏
const Collection =()=> import('@/components/view/collection')
export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {
          path: '/home',
          component: Home
        },
        {
          path: '/findfamil',
          component: Findfamil
        },
        {
          path: '/familyeducationlist',
          component: Familyeducationlist
        },
        {
          path: '/familyparticulars',
          component: Familyparticulars
        },
        {
          path: '/waterList',
          component: WaterList
        },
        {
          path: '/waterParticulars',
          component: WaterParticulars
        },
        {
          path: '/repairlist',
          component: RepairList
        },
        {
          path: '/repairParticulars',
          component: RepairParticulars
        },
        {
          path: '/housekeeping',
          component: Housekeeping
        },
        {
          path: '/houseList',
          component: HouseList
        },
        {
          path: '/houseParticulars',
          component: HouseParticulars
        },
        {
          path: '/center',
          component: Center
        },
        {
          path: '/info',
          component: Info
        },
        {
          path: '/release',
          component: Release
        },
        {
          path: '/collection',
          component: Collection
        },
        {
          path: '',
          redirect: "/home"
        },
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '*',
      redirect: "/"
    },

  ]
})
