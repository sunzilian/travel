<template>
  <div class="resort">
      <!-- resort -->
      <nav-menu
        activeIndex="3"
      />
      <div class="resort-title">旅游景点</div>
      <div class="resort-keys-list">
        <span
          class="resort-keys-item"
          v-for="item in resortKeysList"
          :key="item.name"
        >
          {{item.name}}
        </span>
      </div>
      <!-- <div class="resort-key-search-wrapper">
        <el-form :inline="true" :model="resortSearch" class="resort-search-form">
          <el-form-item label="关键词">
            <el-input v-model="resortSearch.key" placeholder="请输入关键词"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"  @click="onSubmit" >查询</el-button>
          </el-form-item>
        </el-form>
      </div> -->
      <div class="resort-main-list">
        <div
          v-for="item in resortMainList"
          :key="item.title"
          class="resort-main-list-item"
        >
          <img :src="item.imgUrl" :alt="item.title">
          <span>{{item.title}} {{item.price}}</span>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import NavMenu from '../../components/NavMenu';
const resortKeysList = [
  {
    name: '购物'
  },
  {
    name: '度假'
  },
  {
    name: '人文'
  },
  {
    name: '自然'
  },
  {
    name: '出境'
  },
  {
    name: '湖水'
  }
];
const resortMainList = [
  {
    title: '泰国曼谷',
    price: '180',
    imgUrl: 'http://xm.visitxm.com/userfiles/image/g1(1).jpg'
  },
  {
    title: '南京总统府',
    price: '180',
    imgUrl: 'http://www.visitxm.com/userfiles/image/21437ea9-2804-44de-99a6-d4e9e84ea13f.jpg'
  },
  {
    title: '拙政园',
    price: '180',
    imgUrl: 'http://www.visitxm.com/tpImagesUpload/3/v01.jpg'
  },
  {
    title: '承德避暑山庄',
    price: '180',
    imgUrl: 'http://www.visitxm.com/tpImagesUpload/3/%E3%80%8A%E7%82%AE%E5%8F%B0%E5%85%A8%E6%99%AF%E3%80%8B-15362220729.jpg'
  },
  {
    title: '夫子庙-秦淮风光带',
    price: '10',
    imgUrl: 'http://xm.visitxm.com/userfiles/image/g1(1).jpg'
  },
  {
    title: '泰国曼谷1',
    price: '180',
    imgUrl: 'http://www.visitxm.com/tpImagesUpload/3/v01.jpg'
  }
];
export default {
  name: 'resort',
  data() {
    return {
      resortKeysList,
      resortMainList,
      resortSearch: {
        key: ''
      }
    }
  },
  components: {
    NavMenu
  },
  mounted() {
    this.$api.exampleModule.getExample().then(res => {
      console.log(res);
    })
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.resortSearch.key);
    }
  },
}
</script>

<style lang="stylus">
// $bgColor = #2bc4ea
$bgColor = #0062a5
$fontColor = #eee
setBgFont($font) {
  background $bgColor
  color $fontColor
  font-size $font
}
.resort
  .resort-title
    setBgFont(26px)
    margin-top 20px
    padding 4px 10px

  .resort-keys-list
    setBgFont(18px)
    margin-top 10px
    padding 4px 
  .resort-key-search-wrapper
    margin-top 5px
    padding 4px
    color #e36435
    background $bgColor
    .el-form-item
      margin-bottom 0
    .el-form-item__label
      color #000
    .el-button--primary
      background #03893a
  .resort-main-list
    margin-top 8px
    .resort-main-list-item
      display inline-block
      text-align center
      width 240px
      margin 10px 20px

      img
        width 100%
        height 100%

</style>