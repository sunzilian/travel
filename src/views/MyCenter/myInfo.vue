<template>
  <div class="my-center">
    my info
  </div>
</template>

<script>

export default {
  components: {
  },
  created() {
    this.$api.get({
      url: '/user/getUser',
      data: {
        id: 1
      }
    }).then(({success, msg, data}) => {
      if(success) {
        console.log(data);
      }
      else {
        this.$message.error(msg)
      }
    })
  },
}
</script>

<style lang="stylus" scoped>
  .my-center
    height 100%
</style>