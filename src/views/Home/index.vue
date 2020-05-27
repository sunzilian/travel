<template>
  <div class="home">
    <!-- <login-register /> -->
    <nav-menu
      activeIndex="1"
    />

    <div class="home-main-pic"></div>

    <consultant-wrapper />
    <div class="home-pic-list">
      <div
        v-for="(item, index) in [1, 2, 3, 4, 5, 7, 8, 6]"
        :key="index"
        class="home-pic-list-item"
      >
        <img src="http://xm.visitxm.com/userfiles/image/g1(1).jpg" alt="">
        <span>泰国曼谷</span>
      </div>
    </div>
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
    this.$api.axios()
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
          context: "暑假想去木兰围场,不知道需要准备多少钱",
          title: "咨询下木兰围场的费用问题",
          userId: 1
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
  
  .home-pic-list
    width 96%
    margin auto
    display flex
    flex-wrap wrap
    justify-content space-between
    align-items center

    &-item
      // width 23%
      flex  0 23%

      img
        width 100%

</style>