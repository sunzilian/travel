<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
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
</template>

<script>
import {navMenuRouters, navMenu} from '../router/router.config';

export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
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
