import Vue from 'vue'
import Router from 'vue-router'

import Index from './Index'
import Login from './login'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:"/",
            alias:'/index',
            name:"index",
            component:Index
        },
        {
            path:"/login",
            name:"login",
            props:{
                page: 'login'
            },
            component:Login
        },
        {
            path:"/register",
            name:"register",
            props:{
                page:'register'
            },
            component:Login
        }
    ]
});