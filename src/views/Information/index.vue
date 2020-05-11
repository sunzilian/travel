<template>
  <div class="information">
      <login-register />

      <nav-menu
        activeIndex="2"
      />

    <div class="home-main-pic"></div>

    <div class="ifor-csl-table">
      <table-consultant
        dateColumnWidth="300px"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import NavMenu from '../../components/NavMenu';
import LoginRegister from '../../components/LoginRegister';
import TableConsultant from '../../components/TableConsultant';

export default {
  name: 'information',
  components: {
    // HelloWorld
    NavMenu,
    LoginRegister,
    TableConsultant
  },
  mounted() {
    this.$api.exampleModule.getExample().then(res => {
      console.log(res);
    })
  }
}
</script>

<style lang="stylus">
.home
  &-main-pic
    // width 180px
    height 340px
    background-image url(../../assets/bpic.jpg);

.ifor-csl-table
  width 80%
  margin 20px auto

</style>