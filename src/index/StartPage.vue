<template>
  <div>
    <h1>请选择一个开始</h1>
    <div id="login_button">
      <router-link :to="{ name: 'login' }">
        <div id="loginButton" class="button">登陆</div>
      </router-link>
      或
      <router-link :to="{ name: 'register' }">
        <div id="register" class="button">注册</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#login_button {
  font-size: 50px;
  margin: 0 auto;
  text-align: center;
}
#login_button a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}
#login_button a div {
  border: rgba(255, 255, 255, 0.8) 2px solid;
  font-size: 60px;
  color: white;
  padding: 10px;
  margin: 20px;
  display: inline;
}
#login_button div:hover {
  transition: all 500ms;
  background: rgba(255, 255, 255, 0.7);
}
h1 {
  padding: 300px 0 0;
  text-align: center;
  margin: 50px;
  font-size: 100px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
