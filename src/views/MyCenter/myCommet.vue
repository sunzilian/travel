<template>
  <div class="my-center">
    <!-- my comment -->
    <div style="margin: 15px 0 20px">我的评论</div>
    <el-table
      :data="tableData"
      :show-header="true"
      border
      max-height="auto"
      style="width: 100%"
      size="small"
    >
      <el-table-column
        prop="name"
        label="评论内容"
        min-width="180"
        :show-overflow-tooltip="false"
        class-name="aa"
      >
        <template slot-scope="scope">
            <a :href="scope.row.url"
              target="_blank"
              class="buttonText">{{scope.row.name}}</a>
          </template>
      </el-table-column>
      <el-table-column
        prop="datePush"
        label="评论日期"
        :width="dateColumnWidth"
        class-name="aa"
      >
      </el-table-column>
      <el-table-column
        prop="reply"
        label="回复内容"
        min-width="180"
        class-name="aa"
      >
      </el-table-column>
      <el-table-column
        prop="replyTime"
        :width="dateColumnWidth"
        label="回复时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      tableData: [],
      tableDateTotal: [
          {
            "id": 1,
            "name": "“云游”武威——待到春暖花开时，邀您云游”武威——待到春暖花开时，邀您云游”武威——待到春暖花开时，邀您云游”武威——待到春暖花开时，邀您云游”武威——待到春暖花开时，邀您如约“天马行空”",
            "reply": '世世代代艺术家们钟情之处',
            "content": "http://www.mafengwo.cn/travel-news/1442049.html",
            "replyTime": '2020-02-18 13:01:22',
            "datePush": "2020-02-18 13:01:22",
            publishName: 'admin'
          },
          {
            "id": 2,
            "name": "“众志成城战疫情”武威市青年音乐家协会助力防控疫情！",
            "reply": '黄山传奇',
            "content": "http://www.mafengwo.cn/travel-news/1442048.html",
            "replyTime": '2020-02-18 13:01:22',
            "datePush": "2020-02-18 13:11:32",
            publishName: 'admin'
          },
          {
            "id": 3,
            "name": "福建武夷山",
            "reply": '大儒之美',
            "content": "http://www.mafengwo.cn/travel-news/1442033.html",
            "replyTime": '2020-02-18 14:07:10',
            "datePush": "2020-02-18 14:07:10",
            publishName: 'admin'
          },
          {
            "id": 4,
            "name": "致敬英雄！海昌海洋公园面向全国医护人员免费开放",
            "reply": '水墨画般美丽的景致绝非偶然',
            "content": "http://www.mafengwo.cn/travel-news/1442017.html",
            "replyTime": '2020-02-18 14:07:10',
            "datePush": "2020-02-18 14:27:34",
            publishName: 'admin'
          },
          {
            "id": 5,
            "name": "@全国医务工作者及家属，新疆昌吉州邀您免费畅游所有A级景区",
            "reply": '戈壁之旅',
            "content": "http://www.mafengwo.cn/travel-news/1442035.html",
            "replyTime": '2020-02-18 14:07:10',
            "datePush": "2020-02-18 14:29:10",
            publishName: 'admin'
          },
          {
            "id": 6,
            "name": "日本签证最新消息，日本签证再次放宽",
            "reply": '很多海外华人都是从开平过去的。为什么要离开这美丽的地方呢？',
            "content": "http://www.mafengwo.cn/travel-news/1439650.html",
            "replyTime": '2020-02-18 14:07:10',
            "datePush": "2020-02-18 14:43:37",
            publishName: 'admin'
          },
          {
            "id": 7,
            "name": "泰国曼谷CENTRAL商圈完全购物指南",
            "reply": '黄山传奇',
            "content": "http://www.mafengwo.cn/travel-news/218980.html",
            "replyTime": '2020-02-18 14:07:10',
            "datePush": "2020-02-18 15:09:54",
            publishName: 'admin'
          },
          {
            "id": 8,
            "name": "让我们在秋末，来一场日本自由行治愈系的邂逅",
            "reply": '大儒之美',
            "content": "http://www.mafengwo.cn/travel-news/219747.html",
            "replyTime": '2020-02-18 14:07:10',
            "datePush": "2020-02-18 15:34:44",
            publishName: 'admin'
          },
          {
            "id": 9,
            "name": "海南南山海上观音像",
            "reply": '水墨画般美丽的景致绝非偶然',
            "content": "<p>　　不错，就这样一个看似普通的滩涂却深得中国摄影家的青睐。</p><p>　　虽然只是中国东南沿海的一个小地方，霞浦却拥有全国最大的滩涂——面积40万平方千米，还有延伸400多千米的海岸线。</p><p>　　狭长斑驳的滩涂上，三三两两的散布着竹房、竹篙、浮筒和渔具等器物。这些人工制品与此地美丽的自然景观交相辉映。</p><p>　　门票：免费。</p><p>　　霞浦滩涂周边最近的交通枢纽是福州市，距离景区约117km。</p><p>　　北京、上海、广州和西安等都有直达福州机场的航班。</p>",
            "replyTime": '2020-02-18 14:07:10',
            "datePush": "2020-02-18 23:09:39",
            publishName: 'admin'
          },
          {
            "id": 10,
            "name": "海南省亚龙湾",
            "reply": '戈壁之旅',
            "content": "<p>　　不，这可不是海市蜃楼！这是中国西北大戈壁滩上实实在在的风景！</p><p>　　环抱月牙泉的鸣沙山由一系列小山丘组成。鸣沙山以其独一无二的外形和随风而鸣的特点而闻名于世。风从山丘上刮过时，可以听到山体响亮的回声。游客可以骑骆驼爬上250米高的山丘。月牙泉边园林里盛开的繁花则与周围漫天的黄沙形成了有趣的对照。</p><p>　　门票：1-11月旺季120元/人，淡季60元/人。</p><p>　　鸣沙山和月牙泉位于敦煌南侧6km处。中国南航每天有往返于西安咸阳机场和敦煌机场的航班。中国国航位于北京和敦煌之间的航班每天只有一班。</p>",
            "replyTime": '2020-02-18 14:07:10',
            "datePush": "2020-02-18 09:54:32",
            publishName: 'admin'
          },
          {
            "id": 11,
            "name": "河北承德避暑山庄/热河行宫",
            "reply": '很多海外华人都是从开平过去的。为什么要离开这美丽的地方呢？',
            "content": "<p>　　20世纪初期，流亡海外的开平人借鉴融合国外众多的建筑风格建造了这些碉楼，其中有伊斯兰风格，罗马风格甚至还有希腊风格。</p><p>　　碉楼既是财富的象征，也是保护当地居民免受战争和劫掠之苦的有效途径。现在开平广袤的田野里依然矗立着大约1800座碉楼。</p><p>　　开平位于广州西南方向130km处。</p><p>　　定期的班车往返于开平客运站和广州不同的长途客运站。开平和香港之间有直达公交和轮渡。</p>",
            "replyTime": '2020-02-18 14:07:10',
            "datePush": "2020-02-18 04:43:56",
            publishName: 'admin'
          }
        ],
      show: this.$route.query.show,
      dateColumnWidth: '90px'
    }
  },
  created() {
    this.tableData = this.tableDateTotal.slice(0, 5)
  }
}
</script>

<style lang="stylus" scoped>
  .my-center
    height 100%
    position absolute
    left 200px
    right 0px
</style>