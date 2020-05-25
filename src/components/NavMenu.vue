<template>
<div class="home-header">
  <div class="home-nav-wrapper">
    <el-menu
      class="home-nav"
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#002b49"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item
        v-for="(item, index) in navMenu"
        :key="item"
        :index="(index + 1).toString()"
        :route="navMenuRouters[item]"
      >
        {{ item }}
      </el-menu-item>
    </el-menu>
  </div>
  <div  v-if="!isLogin" class="home-login-register">
    <span @click="loginHandle">
      [会员登录]
    </span>
    <span @click="registerHandle" style="margin-left: 15px">
      [免费注册]
    </span>
  </div>
  <div v-else class="home-login-register">
    <span @click="mycenter">
      {{ userName }}
    </span>
    <span @click="signout" style="margin-left: 15px">
      退出
    </span>
  </div>
</div>
</template>

<script>
import { navMenuRouters, navMenu } from "../router/router.config";

export default {
  name: "navmenu",
  props: {
    activeIndex: {
      type: String,
      require: true,
    },
  },
  data() {console.log(navMenu);
    let userName = window.localStorage.getItem('userName');
    let isLogin = window.localStorage.getItem('isLogin');
    let newnavMenu = navMenu.filter(item => {
      if (isLogin) {
        return true
      }
      return item !== '个性推荐'
    })
    console.log(newnavMenu);
    return {
      userName,
      isLogin,
      // activeIndex: "2",
      // activeIndex2: "1",
      navMenuRouters,
      navMenu: newnavMenu,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    loginHandle() {
      this.$router.push('administrator');
    },
    registerHandle() {
      this.$router.push('register')
    },
    mycenter() {
      this.$router.push('mycenter')
    },
    signout() {
      window.localStorage.clear();
      window.location.reload();
    }
  },
};
</script>

<style lang="stylus">

.home-header
  width 100%
  display flex
  align-items center
  background-color #002b49

.home-login-register
  width 18%
  color #e79042
  text-align right


.home-nav-wrapper
  width 80%
  .home-nav
    margin auto
    width 80%
  .el-menu.el-menu--horizontal
    border-bottom none
</style>
