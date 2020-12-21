<template>
  <div class="login">
    <h2>用户登陆</h2>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="用户"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        label="密码"
        required
        @click:append="show = !show"
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        class="mr-4"
        @click="login"
      >
        提交
      </v-btn>

      <v-btn
        class="mr-4"
        @click="reset"
      >
        重置表单
      </v-btn>

      <v-btn @click="resetValidation">
        重置验证
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    valid: true,

    name: 'admin',
    nameRules: [
      v => !!v || '请输入用户名',
      v => (v && v.length <= 10) || '用户名不超过10个字',
    ],
    show: false,
    password: '123456',
    passwordRules: [
      v => !!v || '请输入密码',
      v => (v && v.length <= 10) || '请输入正确的密码',
    ],
    checkbox: false,
  }),

  methods: {
    login () {
      // 表单预验证
      // valid：bool类型
      // this.$refs.form.validate(async valid => {
      // console.log(valid)
      // if (!valid) return false
      // // this.$http.post('login', this.loginForm): 返回值为promise
      // // 返回值为promise，可加await简化操作 相应的也要加async
      // const { data: res } = await this.$http.post('login', this.loginForm)
      // // console.log(res)
      // if (res.meta.status !== 200) return console.log('登录失败')
      // console.log('登录成功')
      // // 1、将登陆成功之后的token, 保存到客户端的sessionStorage中; localStorage中是持久化的保存
      // //   1.1 项目中出现了登录之外的其他API接口，必须在登陆之后才能访问
      // //   1.2 token 只应在当前网站打开期间生效，所以将token保存在sessionStorage中
      // window.sessionStorage.setItem('token', res.data.token)
      // // 2、通过编程式导航跳转到后台主页, 路由地址为：/home
      this.$router.push('/')
      // })

    },


    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },


  }
}
</script>

<style>
.login {
  width: 400px;
  height: 275px;
  margin: 200px auto;
  border: 1px solid #ccc;
  padding: 15px;
}
.login button {
  height: 35px;
  font-size: 14px;
}
</style>