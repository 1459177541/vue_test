<template>
    <div id = "head">
        <a href="/">
			<div id="menu"> 首页 </div>
        </a>
        <div id="menu_user">
            <div v-if="user_name!==null" id="user_home">
                {{user_name}}
			</div>
            <div v-else id="login"> 
				<router-link :to="{name:'login'}">登陆</router-link> 
				<router-link id="register" :to="{name:'register'}">注册</router-link> 
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
	computed:mapState({
		user_name:state=>state.user.name,
	})
}
</script>

<style scoped>
#head{
    margin: 0;
    padding: 0;
	z-index: 999;
    position: fixed;
	background: rgba(50,50,50,0.5);
    width: 100%;
    height: 50px;
}
#menu{
	float:left;
    display: block;
	height: 50px;
    left: 10px;
	padding: 0 15px;
	font-size: 40px;
	color: rgba(255,255,255,0.5);
}
#menu:hover{
	transition: all 500ms;
	background:  rgba(255,255,255,0.5);
	color: white;
}
#menu_user{
	float: right;
    display: block;
	height: 50px;
	width: 100px;
	text-align: center;
	font-size: 30px;
}
#login{
	width:100px;
}
#menu_user a{
	display: block;
	width: 100px;
	height: 50px;
}
#menu_user #register{
	display: none;
}
#menu_user a:hover{
	transition: all 500ms;
	background: rgba(255,255,255,0.5);
}
#menu_user:hover #register{
	display: block;
}
#menu_user #login a{
	color: rgba(255,255,255,0.7);
	text-decoration: none;
}

</style>
