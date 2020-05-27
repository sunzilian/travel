<template>
  <div class="picture-consultant-wrap">
    <el-carousel
      height="150px"
    >
      <el-carousel-item v-for="item in newsList" :key="item.name">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <img :src="item.picture" alt="" width="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: []
    }
  },
  created() {
    this.$api.get({
      url: '/news/getTopNews',
      data: {}
    }).then(({success, msg, data}) => {
      if (success) {
        console.log('getNewsTop， pic', data);
        this.newsList = data;
      }
      else {
        this.$message.error(msg)
      }
    }, error => {
        this.$message.error(error)
    })
  }
}
</script>

<style lang="stylus">
.picture-consultant-wrap
    margin 10px auto
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>