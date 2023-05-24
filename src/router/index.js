// 该文件专用创建应用路由器
import VueRouter from 'vue-router'
// 引入组件
// import Note from '../components/Note'
// import Diary from '../components/Diary'
import Login from '../components/Login'
import Home from '../components/Home'
import Edit from '../components/Edit/Edit'

const routes = [
    {
        path:'/',
        name: Home,
        component: Home
    },
    {
        path:'/home',
        name: 'HomeUser',
        component: Home,
    },
    {
        path:'/login',
        component: Login
    },
    {
        path:'/edit/:id',
        component: Edit
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// 前置路由守卫，每次访问时检测是否已经登录，如果没有则强制跳转登录界面
router.beforeEach((to, from, next) => {
    console.log('form', from, to)
    const toPath = to.path
    if (toPath === '/login') {
        next()
    } else {
        // 用户权限校验
        const token = localStorage.getItem('userToken')
        if (token) {
            next()
        } else {
            next({
                path:"/login",
                query: {redirect: to.fullPath} // 将目的路由地址存入login的query中
            })
        }
    }
    // next()
})

// 创建并暴露一个路由器
export default router
