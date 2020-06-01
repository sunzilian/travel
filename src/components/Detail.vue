<template>
  <div class="detail-wrapper" style="with:100%">
    <nav-menu
      activeIndex="3"
    />
    <h1>{{title}}</h1>
    <div v-html="content" style="text-algin:center;max-width: 700px;margin: auto">
      {{content}}
    </div>
  </div>
  
</template>

<script>
// import NavMenu from '../../components/NavMenu';
import NavMenu from './NavMenu.vue'

export default {
  components: {
    NavMenu
  },
  data() {
    return {
      content: '<p>入夏以来，全国多地的气温提前开启了“火爆模式”。华强方特集团旗下位于<span class="link"><a href="/travel-scenic-spot/mafengwo/10794.html" target="_blank">郑州</a></span>、<span class="link"><a href="/travel-scenic-spot/mafengwo/10132.html" target="_blank">厦门</a></span>、<span class="link"><a href="/travel-scenic-spot/mafengwo/10803.html" target="_blank">芜湖</a></span>的方特水上乐园将陆续欢乐回归，为广大游客送上酷爽清凉的夏日游玩体验。</p><p><br><p class="pcenter"><img src="http://n1-q.mafengwo.net/s16/M00/4F/1F/CoUBUl7PUVmABux9AAePKP-kkuE161.png?imageView2%2F2%2Fw%2F2000%2Fh%2F600%2Fq%2F90" class="replace-file-img"></p></p><p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri; caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); text-indent: 24pt; line-height: 21px;"><span style="font-size: 12pt; line-height: 24px; font-family: 宋体;"></span></p><p><br></p><p><strong>超凡体验项目助力游客畅快玩水</strong></p><p>方特旗下<span class="link"><a href="/travel-scenic-spot/mafengwo/10794.html" target="_blank">郑州</a></span>方特水上乐园、<span class="link"><a href="/travel-scenic-spot/mafengwo/10132.html" target="_blank">厦门</a></span>方特水上乐园和<span class="link"><a href="/travel-scenic-spot/mafengwo/10803.html" target="_blank">芜湖</a></span>方特水上乐园将分别于5月30日、6月6日和6月19日开业。<span lang="EN-US" style="font-size: 12pt; line-height: 24px;"><o:p></o:p></span></p><p><br><p class="pcenter"><img src="http://b1-q.mafengwo.net/s16/M00/4F/3D/CoUBUl7PUXOAfIANAAvFgZf11mo020.png?imageView2%2F2%2Fw%2F2000%2Fh%2F600%2Fq%2F90" class="replace-file-img"></p></p><p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri; caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); text-indent: 24pt; line-height: 21px;"><span style="font-size: 12pt; line-height: 24px; font-family: 宋体;"></span></p><p>&nbsp;<br><p class="pcenter"><img src="http://n1-q.mafengwo.net/s16/M00/4F/61/CoUBUl7PUZKAQHh9AA84D093QjQ890.png?imageView2%2F2%2Fw%2F2000%2Fh%2F600%2Fq%2F90" class="replace-file-img"></p></p><p><br></p><p>方特水上乐园拥有多项曾获得国际行业旅游协会最佳水上设备奖的主流精品项目。其中，“熊出没”IP主题项目《熊出没水寨》拥有水枪对战区、水上浮桥、水炮喷淋区等多种戏水区域，是小朋友的欢乐天地；明星项目《大喇叭》激爽刺激，深受年轻人的喜爱；还有轻松休闲的《懒人河》，全家人都能畅享徜徉在热带雨林与极地冰雪之间的美妙乐趣。在方特水上乐园，无论是和朋友、恋人还是家人，都能一起畅享清凉，体验别具一格的戏水乐趣。</p><p><br></p><p>除了好玩有趣的水上项目，方特水上乐园还将在开业后推出活力四射的主题演出。届时，游客们不仅能欣赏精彩的主题文化活动，还能参与“水上电音派对”等丰富活动，在激荡的浪花和动感的音乐声中畅享夏日水狂欢。<span lang="EN-US" style="font-size: 12pt; line-height: 24px;"><o:p></o:p></span></p><p><br><p class="pcenter"><img src="http://n1-q.mafengwo.net/s16/M00/4F/85/CoUBUl7PUa2ALtcbAAkjuRLzhJ0722.png?imageView2%2F2%2Fw%2F2000%2Fh%2F600%2Fq%2F90" class="replace-file-img"></p></p><p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri; caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); text-indent: 24pt; line-height: 21px;"><span style="font-size: 12pt; line-height: 24px; font-family: 宋体;"></span></p><p><br></p><p><strong>严格消毒&nbsp;创造安心游玩环境</strong></p><p>方特主题乐园始终将游客的健康与安全放在首位。为了贯彻落实有关部门关于旅游景区有序开放准备工作的指导指示，各地方特水上乐园均针对复园后的各项接待工作推出了一系列防控措施，将以实名游园、体温检测、客流控制、无接触游园、间隔排队等多重举措，切实保证每一名游客放心游玩，开心体验。<o:p></o:p></p><p><br></p><p>同时，方特水上乐园还以高标准保障水上项目、公共区域、餐饮场所等设施的清洁卫生。园区不仅将严格保证所有体验区的水质，还准备了充足的消毒物资与配套措施，对公共空间开展进行高频次消毒，在开园后还将对游客使用过的皮筏、滑毯等水上游乐用具严格执行“一客一消毒”流程，对用具进行彻底酒精消毒后再投入使用。<o:p></o:p></p><p><br></p><p>此外，为了优化游园舒适度，方特水上乐园不断升级园内的遮阳和降温设施。今年三座方特水上乐园将在项目排队区增设遮阳设施，并将在多个主干道旁增设“雾森”系统，营造更为清凉、舒适的室外游玩环境。<span lang="EN-US" style="font-size: 12pt; line-height: 24px;"><o:p></o:p></span></p><p><br><p class="pcenter"><img src="http://b1-q.mafengwo.net/s16/M00/4F/BD/CoUBUl7PUdOANTf1AAygqo8oSb8825.png?imageView2%2F2%2Fw%2F2000%2Fh%2F600%2Fq%2F90" class="replace-file-img"></p></p><p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri; caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); text-indent: 24pt; line-height: 21px;"><span style="font-size: 12pt; line-height: 24px; font-family: 宋体;"></span></p><p><br></p><p>随着方特水上乐园陆续开业，方特旗下全系列主题乐园也将实现全面开业运营。无论是打卡经典项目，还是体验多彩文化，或是畅享玩水乐趣，广大游客都将在方特主题乐园收获高品质游乐体验，畅享欢乐夏天。</p><p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; text-align: justify; font-size: 10.5pt; font-family: Calibri; caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); text-indent: 24pt; line-height: 21px;"><span lang="EN-US" style="font-size: 12pt; line-height: 24px;"><o:p></o:p></span></p>',
      // content: '',
      type: this.$route.query.type,
      id: this.$route.query.id,
      title: '酷爽一夏 方特水上乐园清凉回归 '
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

<style lang="stylus">
.detail-wrapper
  text-align center
  // background-color #fff

  p
    max-width 700px

img.replace-file-img
  width 600px
  height 300px
</style>