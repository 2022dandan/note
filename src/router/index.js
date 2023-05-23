// 该文件专用创建应用路由器
import VueRouter from 'vue-router'
// 引入组件
// import Note from '../components/Note'
// import Diary from '../components/Diary'
import Login from '../components/Login'
import Home from '../components/Home'
import Edit from '../components/Edit/Edit'
// 创建并暴露一个路由器
export default new VueRouter({
    routes:[
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
})
