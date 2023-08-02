// 引入路由类和Vue类
import Vue from "vue"
import Router from "vue-router"

import Home from "../components/Home"
import Course from "../components/Course"
import Login from "../components/Login"
import Cart from "../components/Cart"
import Detail from "../components/Detail"
// 注册路由类
Vue.use(Router)

// 初始化路由对象
export default new Router({
  mode:"history",  // 设置地址显示模式  hash、history  # hash 就是a标签的锚点，会自动在地址栏上面增加#，二history则不会
  // 注册路由列表
  routes:[
    {
      name: "Home", // 路由别名
      path: "/home", // 访问路由
      component: Home, // 路由地址绑定的组件
    },
    {
      name: "Home", // 路由别名
      path: "/", // 访问路由
      component: Home, // 路由地址绑定的组件
    },
    {
      name:"Course",
      path: "/course",
      component: Course,
    },
    {
      name:"Login",
      path: "/login",
      component: Login,
    },
    {
      name:"Cart",
      path: "/cart",
      component: Cart,
    },
    {
      name:"Detail",
      path: "/course/detail/:id",
      component: Detail,
    },
  ]
})
