<template>
  <div class="picture-consultant-wrap">
    <el-carousel
      height="160px"
      :autoplay="false"
    >
      <el-carousel-item v-for="item in newsList" :key="item.name">
        <!-- <h3 class="small">{{ item }}</h3> -->
        <img :src="item.picture" alt="" width="100%">
        <div style="position: absolute; bottom:0;left: 0; with: 100%;background-color: rgba(0,0,0,0.5);color: #ffffff">{{item.name}}</div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // newsList: []
      newsList: [
        {
            "id": 4,
            "name": "木兰围场",
            "context": null,
            "picture": "http://947255bcd7d3.ngrok.io/uploadFile/1590400862118mulanweichang.jpg",
            "publishName": null,
            "publishDate": null,
            "status": 1,
            "top": 1,
            "detected": false,
            "createDate": null
        },
        {
            "id": 3,
            "name": "古北水镇",
            "context": null,
            "picture": "http://947255bcd7d3.ngrok.io/uploadFile/1590400827916gubeishuizhen.jpg",
            "publishName": null,
            "publishDate": null,
            "status": 1,
            "top": 1,
            "detected": false,
            "createDate": null
        },
        {
            "id": 2,
            "name": "北戴河",
            "context": null,
            "picture": "http://947255bcd7d3.ngrok.io/uploadFile/1590400666793beidaihe.jpg",
            "publishName": null,
            "publishDate": null,
            "status": 1,
            "top": 1,
            "detected": false,
            "createDate": null
        },
        {
            "id": 1,
            "name": "张家口风景秀丽",
            "context": null,
            "picture": "http://947255bcd7d3.ngrok.io/uploadFile/1590400927081zhangjiakou.jpg",
            "publishName": null,
            "publishDate": null,
            "status": 1,
            "top": 1,
            "detected": false,
            "createDate": null
        }
      ],
    }
  },
  created() {
    this.$api.get({
      url: '/news/getTopNews',
      data: {}
    }).then(({success, msg, data}) => {
      if (success) {
        console.log('getNewsTop， pic', data);
        this.newsList = data || this.newsList;
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

  .el-carousel__button
    width 15px
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