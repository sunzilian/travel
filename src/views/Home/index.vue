<template>
  <div class="home">
    <!-- <login-register /> -->
    <nav-menu
      activeIndex="1"
    />

    <div class="home-main-pic"></div>

    <consultant-wrapper />
    <home-footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavMenu from '../../components/NavMenu';
// import LoginRegister from '../../components/LoginRegister';
import homeFooter from '../../components/HomeFooter';
import ConsultantWrapper from './ConsultantWrapper';
// import axios from '../../api/axios';

export default {
  name: 'hxxxxe',
  components: {
    // HelloWorld
    NavMenu,
    // LoginRegister,
    ConsultantWrapper,
    homeFooter
  },
  mounted() {
    this.$api.get({
      url: '/news/getNewsPage',
      data: {
        pageIndex: 1,
        pageSize: 10
      }
    }).then(res => {
      console.log(res,222);
    }, rej => {
      console.log(rej, 333);
    })
    this.$api.post({
      url: '/comment/addComment',
      data: {
        comment: {
          answerContext: "生生世世发发发",
          answerDate: "2020-05-23T09:57:26.104Z",
          context: "string",
          createDate: "2020-05-23T09:57:26.104Z",
          detected: true,
          id: 0,
          status: 0,
          title: "是生生世世",
          userId: 0
          }
      }
    }).then(res => {
      console.log(res,222);
    }, rej => {
      console.log(rej, 333);
    })
  },
  
}
</script>

<style lang="stylus">
.home
  background-image url(../../assets/bg.jpg)
  height 100%
  &-main-pic
    // width 180px
    height 340px
    background-image url(../../assets/bpic.jpg);

</style>