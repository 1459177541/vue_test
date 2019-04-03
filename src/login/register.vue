<template>
  <form class="form">
    <div>
      <input
        class="input"
        :class="{ err: idErr, success: idSuccess }"
        type="text"
        placeholder="请输入用户id"
        v-model="id"
      />
    </div>
    <div>
      <input
        class="input"
        :class="{ err: nameErr }"
        type="text"
        placeholder="请输入用户名称"
        v-model="name"
      />
    </div>
    <div>
      <input
        class="input"
        :class="{ err: pwd1Err, success: pwdSuccess }"
        type="password"
        placeholder="请输入密码"
        v-model="password"
      />
    </div>
    <div>
      <input
        class="input"
        :class="{ err: pwd2Err, success: pwdSuccess }"
        type="password"
        placeholder="请输入密码"
        v-model="password2"
      />
    </div>
    <p id="error">{{ this.errMsg }}</p>
    <button class="submit" @click="submit">注册</button>
  </form>
</template>

<script>
let lodash = require('lodash');
export default {
  data() {
    return {
      id: '',
      name: '',
      password: '',
      password2: '',
      errMsg: '',
      idSuccess: false,
      idErr: false,
      nameErr: false,
      pwd1Err: false,
      pwd2Err: false,
      pwdSuccess: false,
    };
  },
  watch: {
    id: function(id) {
      if (this.errMsg === 'id不能为空') {
        this.errMsg = '';
      }
      if (id === '') {
        this.errMsg = 'id不能为空';
        this.idSuccess = false;
        return;
      }
      this.debouncedCheckId();
    },
    name: function(name) {
      if (this.errMsg === '名字不能为空') {
        this.errMsg = '';
      }
      if (name === '') {
        this.errMsg = '名字不能为空';
        this.nameErr = true;
        return;
      }
      this.nameErr = false;
    },
    password: function(pwd) {
      if (this.errMsg === '密码不能为空') {
        this.errMsg = '';
      }
      if (pwd === '') {
        this.errMsg = '密码不能为空';
        this.pwd1Err = true;
        this.pwdSuccess = false;
        return;
      }
      this.pwd1Err = false;
      this.checkpwd();
    },
    password2: function(pwd) {
      if (this.errMsg === '密码不能为空') {
        this.errMsg = '';
      }
      if (pwd === '') {
        this.errMsg = '密码不能为空';
        this.pwd2Err = true;
        this.pwdSuccess = false;
        return;
      }
      this.pwd2Err = false;
      this.checkpwd();
    },
  },
  created() {
    this.debouncedCheckId = lodash.debounce(this.checkId, 500);
  },
  methods: {
    submit: () => {
      this.checkId();
      this.checkName();
      this.checkpwd();
      if (this.idErr || this.nameErr || this.pwd1Err || this.pwd2Err) {
        return;
      }
      this.$store.dispatch(
        'user/register',
        this.id,
        this.name,
        this.password,
        data => {
          this.errMsg = data.msg;
        },
      );
      this.$router.push('/login');
    },
    checkpwd: function() {
      if (this.password !== this.password2) {
        this.pwd1Err = true;
        this.pwd2Err = true;
        this.pwdSuccess = false;
        this.errMsg = '两次密码不一致';
        return;
      }
      if (this.errMsg === '两次密码不一致') {
        this.errMsg = '';
      }
      this.pwdSuccess = true;
    },
    checkId: function() {
      this.$store.dispatch('user/checkName', this.id, data => {
        if (data.msg === 'exist') {
          this.errMsg = '用户已存在';
          this.idErr = true;
          this.idSuccess = false;
        } else if (data.msg === 'non-exist') {
          this.idErr = false;
          this.idSuccess = true;
        } else {
          this.idErr = false;
          this.idSuccess = false;
        }
      });
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
.form div .err {
  border-bottom: red 3px solid;
}
.form div .success {
  border-bottom: green 3px solid;
}
</style>
