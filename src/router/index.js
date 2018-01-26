import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/home.vue'
import Category from '@/pages/category/category.vue'
import Cart from '@/pages/cart/cart.vue'
import Mine from '@/pages/mine/mine.vue'
import Shop from '@/pages/shop/shop.vue'
import Login from '@/pages/login/login.vue'
import editAddr from '@/pages/edit-addr/edit-addr.vue'
import addAddr from '@/pages/add-Addr/add-Addr.vue'
Vue.use(Router)
export default new Router({
 routes:[
     {
         path:'/',
         component:Home
     },
     {
        path:'/cart',
        component:Cart
    },
    {
        path:'/mine',
        component:Mine
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/shop',
        component:Shop
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/editAddr',
        component:editAddr
    },
    {
        path:'/addAddr',
        component:addAddr
    }
 ]
})