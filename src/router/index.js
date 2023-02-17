import { createRouter,createWebHistory } from "vue-router"
import Posts from "@/views/Posts"
import UserDetail from "@/views/UserDetail"
import Users from "@/views/Users"
const routes = [
    {
        path : '/',
        component : Posts
    },
    {
        path : '/users',
        component : Users
    },
    {
        path : '/userdetail',
        component : UserDetail
    }
]
const router = createRouter({
    history : createWebHistory(),
    routes,
})
export default router;