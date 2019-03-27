<template>
    <div>
        <a href="/index">
			<div id="menu"> 首页 </div>
        </a>
        <div id="menu_user">
            <div id="login"> <a href="/login">登陆</a> <a id="register" href="/register">注册</a> 
            </div>
            <div style="display:none" id="user_home">
                欢迎你，<span th:value="${user.name}"></span> 
			</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
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
