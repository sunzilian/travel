<template>
  <div v-html="content">
    {{content}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      // content: "<p><span style=\"font-size: 16px;\">在经历了多年的传言之后，国内餐饮业巨头海底捞上市终于迎来实质性动作。5月17日晚间，海底捞在开曼群岛注册的海底捞国际控股公司向港交所递交了招股书。</span></p><p><span style=\"font-size: 16px;\">透过海底捞招股书可见，海底捞IPO不仅能让公司创始人获益匪浅，也揭开了海底捞董事长张勇背后的资本帝国，同时，依靠“一锅红汤”而不断壮大的企业也浮出水面。</span></p><p><span style=\"font-size: 16px;\">张勇的资本帝国</span></p><p><span style=\"font-size: 16px;\"><img src=\"https://hdl-emas-app-bucket.oss-cn-beijing.aliyuncs.com/app/news/image/ffe009c3e57d40cf8ab0b45e940b89e7-340-228.png\"><img src=\"https://hdl-emas-app-bucket.oss-cn-beijing.aliyuncs.com/app/news/image/36ce572fa16d4d7f8a6fcccc8dd08df2-340-228.png\"></span></p><p><span style=\"font-size: 16px;\">彼时，1994年，海底捞董事长张勇和他的小伙伴们，四个人合伙在四川省简阳市创办了一家名为“海底捞火锅城”的火锅店，那时火锅店里只有四张桌子。</span></p><p><span style=\"font-size: 16px;\">如今，海底捞在招股书中公布，目前运营的餐厅数量达到了320家，包括中国内地的296家餐厅以及24家位于中国台湾、中国香港以及海外在新加坡、韩国、日本及美国的餐厅。</span></p><p><span style=\"font-size: 16px;\">海底捞还表示，上市募集资金后，海底捞计划将募资的60%用于扩张，20%拟用于研发和实施新技术，15%拟用于还贷，5%作为一般营运资金使用。</span></p><p><span style=\"font-size: 16px;\">伴随着海底捞招股书的面世，公司掌门人张勇的资本帝国也浮出水面。虽然这是海底捞首次上市，但与之有关联的两家公司早已涉足资本市场。一家是颐海国际，另一家是优鼎优。</span></p><p><span style=\"font-size: 16px;\">2016年，作为海底捞底料独家供应商的颐海国际登陆香港交易所；2017年，海底捞旗下冒菜品牌优鼎优登陆新三板。</span></p><p><span style=\"font-size: 16px;\">资料显示，颐海国际的实际控制人是张勇夫妇，直接持股35.59%，并通过合计持股68%的静远投资间接持有颐海国际50%的股份。颐海国际的现任董事长施永宏乃张勇海底捞的合伙创始人。</span></p><p><span style=\"font-size: 16px;\">据公司年报显示，火锅底是料颐海国际主要的收入来源，占全年收入的79%。</span></p>"
      content: '',
      type: this.$route.query.type,
      id: this.$route.query.id
    }
  },
  created() {
    console.log(234234);
    let type = this.type;
    if(type === 'news') {
      this.getNews()
    }
  },
  methods: {
    getNews() {
      this.$api.get({
        url: '/news/getNews',
        data: {
          id: this.id
        }
      }).then(({success, msg, data}) => {
        if (success) {
          console.log('gettnew', data);
        //     "data": {
        //     "id": 1,
        //     "name": "张家口风景秀丽",
        //     "context": null,
        //     "picture": "http://0d05825f.ngrok.io//uploadFile/1590400927081zhangjiakou.jpg",
        //     "publishName": null,
        //     "publishDate": null,
        //     "status": 1,
        //     "top": 1,
        //     "detected": false,
        //     "createDate": null
        // }

          // this.resortMainList = data;
          // this.total = data.length || 10
        }
        else {
          this.$message.error(msg)
        }
      }, error => {
          this.$message.error(error)
      })
    },
  }
}
</script>