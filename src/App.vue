<template>
  <div id="app">
    <!-- <nav-menu></nav-menu> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import NavMenu from './components/NavMenu';
export default {
  components: {
    // NavMenu
  }
}
</script>

<style lang="stylus" >
html, body{
  height: 100%;
  background: #c4e8ff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  height: 100%;
  background: #c4e8ff;
  position: relative;
  vertical-align: middle;
}

h3
    font-size 36px
    text-align center

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
