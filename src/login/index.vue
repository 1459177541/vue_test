<template>
    <div
         id="main"
         :class="page">
        <div id="head">
            <router-link 
                class="link" 
                :class="{check:login}"
                :to="{ name:'login' }">
                登录
            </router-link>
            <router-link 
                class="link" 
                :class="{check:register}"
                :to="{ name:'register' }">
                注册
            </router-link>
        </div>
        <div id="frame">
            <Login v-if="page === 'login'"/>
            <Register v-if="page === 'register'"/>
        </div>
    </div>
</template>

<script>
import Login from './login'
import Register from './register'
export default {
    data:()=>{
        return {
            login:false,
            register:false
        }
    },
    props:{
        page:{
            default:'login'
        }
    },
    components:{
        Login, Register
    },
    created(){
        this.login = this.page === 'login'
        this.register = this.page === 'register'
    },
    watch:{
        '$route' (to, from){
            this.login = this.page === 'login'
            this.register = this.page === 'register'            
        }
    }
}
</script>

<style scoped>
#main {
    position: fixed;
    width: 600px;
    border-radius: 5%;
    border: 2px #64E77F solid;
    background: rgba(230, 230, 230, 0.5);
    margin: 0 auto;
    left: 0;
    right: 0;
}
#head{
    margin: 50px 0 0;
    height: 80px;
    border-bottom: #64E77F 1px solid;
    text-align: center;
}
.link{
    display: inline-block;
    font-size: 3em ;
    height: 80px;
    width: 299px;
    text-decoration: none;
    color: black;
}
.check{
    border-bottom: #64E77F 5px solid;
}
.login {
    top:260px;
    height: 500px;
}
.register{
    top: 100px;
    height: 700px;
}
</style>
