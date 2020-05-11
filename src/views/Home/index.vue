<template>
  <div class="home">
    <login-register />
    <nav-menu
      activeIndex="1"
    />

    <div class="home-main-pic"></div>

    <consultant-wrapper />

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavMenu from '../../components/NavMenu';
import LoginRegister from '../../components/LoginRegister';
import ConsultantWrapper from './ConsultantWrapper';

console.log(NavMenu);

export default {
  name: 'hxxxxe',
  beforeCreate() {
    console.log('beforeCreate  home');
  },
  created() {
    console.log('created  home');
  },
  beforeMount() {
    console.log('beforeMount  home');
  },
  components: {
    // HelloWorld
    NavMenu,
    LoginRegister,
    ConsultantWrapper
  },
  mounted() {
    // this.$api.exampleModule.getExample().then(res => {
    //   console.log(res);
    // })
    console.log('mounted  home');
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