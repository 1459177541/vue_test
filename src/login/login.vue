<template>
  <form class="form">
    <div>
      <input
        class="input"
        type="text"
        placeholder="请输入用户id"
        v-model="id"
      />
    </div>
    <div>
      <input
        class="input"
        type="password"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <p id="error">{{ errMsg }}</p>
    <button class="submit" @click="submit()">登录</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      password: '',
      errMsg: '',
    };
  },
  methods: {
    submit() {
      this.$store.dispatch('user/login', {
        id: this.id,
        password: this.password,
        err: data => {
          this.errMsg = data.msg;
        },
      });
      if (this.errMsg === '') {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped>
.form div {
  font-size: 25px;
  height: 50px;
  margin: 30px 15px;
}
#error {
  text-align: center;
  color: red;
  font-size: 20px;
}
.form div .input {
  position: absolute;
  transition: all 0.3s ease-in-out;
  border: none;
  background: rgba(0, 0, 0, 0);
  color: black;
  border-bottom: white 3px solid;
  height: 35px;
  width: 80%;
  left: 10%;
  font-size: 30px;
}
.form div .input:focus {
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
