

<template>
<div class="footer-wrapper boxed-style">
    <!-- Get Footer Widget -->
    <div class="custom-sidebar">
      <div class="textwidget">
        <h1>旅游网</h1>
        <span>文化和旅游局官网</span><br>
        <span>十佳旅游目的地网站</span>
      </div>
      <div class="custom-sidebar">
        <h3 class="custom-sidebar-title">联系我们</h3>
        <div class="gdl-recent-post-widget">
          <div><img alt="" src="http://english.visitxm.com/images/ico_mail.png">xxxxx@xxxxxx.com</div>
          <div><img alt="" src="http://english.visitxm.com/images/ico_tel.png">12345</div>
        </div>
      </div>
    </div>
    <div class="copyright-wrapper">
      <div class="copyright-border"></div>
      <div class="copyright-left">Copyright © 2019 All Right Reserved, <a href="http://english.visitxm.com">visitxm.com</a></div>
    </div>
  </div>
</template>

<script>
import { navMenuRouters, navMenu } from "../router/router.config";

export default {
  name: "footer",
  props: {
    activeIndex: {
      type: String,
      require: true,
    },
  },
  data() {
    let userName = window.localStorage.getItem('userName');
    let isLogin = window.localStorage.getItem('isLogin');
    return {
      userName,
      isLogin,
      // activeIndex: "2",
      // activeIndex2: "1",
      navMenuRouters,
      navMenu,
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
    signout() {
      window.localStorage.clear();
      window.location.reload();
    }
  },
};
</script>

<style lang="stylus" scoped>
.footer-wrapper 
  width 100%
  background-color #282828
  color #a5a5a5
  .custom-sidebar
    // text-align center
    width 90%
    margin 15px auto
    .textwidget
      display inline-block
      width 40%
      height 140px
      padding-right 40px
      border-right 1px solid #494949
      text-align left
      h1
        color #fff
        font-size 30px
        font-weight bold
      span
        font-size 14px
        line-height 24px
        color #f2f2f2
        letter-spacing: 3px

    .custom-sidebar
      width 40%
      display inline-block
      text-align left
      margin-left 40px
      h3
        color #3389d7
        font-size 16px
        line-height 19px
        padding-left 15px
      .gdl-recent-post-widget
        div
          line-height 30px
          height 30px
          img
            width 20px
            display inline-block
            position relative
            top 5px
            margin-right 10px
  .copyright-wrapper
    text-align center
    margin-top 15px
    text-align center
    .copyright-border
      display inline-block
      width 90%
      border-style: solid;
      border-top-width: 1px;
      border-bottom-width: 1px
    .copyright-left
      padding 20px 0 25px
      font-size 14px
</style>
