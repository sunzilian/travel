<template>
  <div class="my-center">
    <v-header />
    <v-sidebar />
     <router-view></router-view>
  </div>
</template>

<script>
import vSidebar from '../../common/sidebar.vue'
import vHeader from '../../common/header.vue'

export default {
  components: {
    vSidebar,
    vHeader
  },
}
</script>

<style lang="stylus" scoped>
  .my-center
    height 100%
</style>