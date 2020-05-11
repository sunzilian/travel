<template>
  <div class="home-login-register">
    <span @click="loginHandle">
      [会员登录]
    </span>
    <span @click="registerHandle">
      [免费注册]
    </span>
  
  </div>
</template>

<script>
export default {
  methods: {
    loginHandle() {
      this.$router.push('administrator');
    },
    registerHandle() {
      this.$router.push('register')
    }
  }
};
</script>

<style lang="stylus">
.home-login-register
  background-color #002b49
  color #e79042
  text-align right
</style>
