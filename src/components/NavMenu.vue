<template>
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
        {{item}}
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
import {navMenuRouters, navMenu} from '../router/router.config';

export default {
  name: 'navmenu',
  props: {
    activeIndex: {
      type: String,
      require: true
    }
  },
  beforeCreate() {
    console.log('beforeCreate  navmenu');
  },
  created() {
    console.log('created  navmenu');
  },
  beforeMount() {
    console.log('beforeMount  navmenu');
  },
  mounted() {
    console.log('mounted  navmenu');
  },
  data() {
    return {
      // activeIndex: "2",
      // activeIndex2: "1",
      navMenuRouters,
      navMenu
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="stylus">
.home-nav-wrapper
  width 100%
  background-color #002b49
  vertical-align middle
  .home-nav
    margin auto
    width 80%
    background-color #002b49
  .el-menu.el-menu--horizontal
    border-bottom none
</style>