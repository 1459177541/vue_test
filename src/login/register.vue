<template>
        <form id="login" class="form">
            <div>&nbsp;&nbsp;登录id:
                <input 
                    class="input" 
                    @blur="checkId"
                    type="text" 
                    placeholder="请输入用户id" 
                    v-model="id">
            </div>
            <div>&nbsp;&nbsp;用户名:
                <input 
                    class="input" 
                    :class="{err:nameErr}" 
                    @blur="checkName"
                    type="text" 
                    placeholder="请输入用户id" 
                    v-model="name">
            </div>
            <div>&nbsp;&nbsp;&nbsp;密码:
                <input 
                    class="input" 
                    :class="{err:pwdErr}" 
                    @blur="checkpwd"
                    type="password" 
                    placeholder="请输入密码" 
                    v-model="password">
            </div>
            <div>重复密码:
                <input 
                    class="input" 
                    :class="{err:pwd2Err}" 
                    @blur="checkpwd"
                    type="password" 
                    placeholder="请输入密码" 
                    v-model="password2">
            </div>
            <p id="error">{{this.errMsg}}</p>
            <button @click="submit">注册</button>
        </form>
</template>

<script>
export default {
    data(){
        return{
            id:"",
            name:"",
            password:"",
            password2:"",
            errMsg:"",
        }
    },
    watch:{
        idStatus:()=>{
            return this.$store.dispatch('user/checkName', this.id, data=>{
                if(data.msg === 'exist'){
                    this.errMsg = "用户已存在";
                    return 'err';
                }else if(data.msg === 'non-exist'){
                    return 'success';
                }
                return 'non';
            });
        }
    },
    computed:{
        idStatus:()=>{
            if(this.id == ""){
                this.errMsg = "id不能为空";
                return 'err';
            }
        },
        nameErr:()=>{
            if(this.name == ""){
                this.errMsg = "名字不能为空"
                return true;
            }
        },
        pwdErr:()=>{
            if(this.password == ""){
                this.errMsg = "密码不能为空"
                return true;
            }  
        },
        pwd2Err:()=>{
            if(this.password2 == ""){
                this.errMsg = "密码不能为空"
                return true;
            }
        }
    },
    methods:{
        submit:()=>{
            this.checkId();
            this.checkName();
            this.checkpwd();
            if(this.idErr || this.nameErr || this.pwdErr || this.pwd2Err){
                return;
            }
            this.$store.dispatch('user/register', this.id, this.name, this.password, data=>{
                this.errMsg = data.msg;
            })
            this.$router.push('/login')
        },
        checkpwd:()=>{   
            if(this.password !== this.password2){
                this.pwdErr = true;
                this.pwdErr = true;
                this.errMsg = "两次密码不一致"
            }
        },
    }
}
</script>

<style scoped>
#err{
    border-bottom: red 3px solid;
}
#success{
    border-bottom: green 3px solid;
}
.form div{
	font-size: 25px;
	display: block;
	height: 50px;
	margin: 30px 15px;
}
#error{
    text-align: center;
    color: red;
    font-size: 20px;
}
.form div .input{
	position: absolute;
    transition: all 0.30s ease-in-out;
	border: none;
	background: rgba(0,0,0,0);
    color: black;
    border-bottom: white 3px solid;
	height: 35px;
	width: 430px;
	right: 5%;
	font-size: 30px;
}
.form div .input:focus{
	transition: all 0.5s;
	border: none;
	border-bottom: blue 3px solid;
}
.form .submit {
    position: absolute;
    width: 300px;
    height: 100px;
    left: 150px;
    bottom: 50px;
    background: rgba(150, 255, 150, 0.7);
    color: white;
    text-shadow: 2px 2px 3px black;
    border: none;
    border-radius: 20px;
    font-size: 30px;
}
</style>
