<template>
  <div class="consultant-wrapper">
    <div class="csl-pic">
      <div class="csl-title">图片咨询</div>
      <picture-consultant />
    </div>

    <div class="csl-tourist">
      <div class="csl-title">旅客咨询</div>
      <table-consultant />
    </div>

    <div class="csl-notice">
      <div class="csl-title">站内公告</div>
      <div class="quee">
        <ul class="csl-notice-list">
          <li class="csl-notice-list-item">欢迎光临本站，本站竭诚为您服务欢迎光临本站!</li>
          <!-- <li class="csl-notice-list-item">欢迎光临本站，本站竭诚为您服务欢迎光临本站，本站sfsafsdfs竭诚为您服务</li> -->
          <!-- <li class="csl-notice-list-item">2222欢迎光临本站，本站竭诚为您服务欢迎光临本站，本站sfsafsdfs竭诚为您服务</li>
          <li class="csl-notice-list-item">333欢迎光临本站，本站竭诚为您服务欢迎光临本站，本站sfsafsdfs竭诚为您服务</li>
          <li class="csl-notice-list-item">444欢迎光临本站，本站竭诚为您服务欢迎光临本站，本站sfsafsdfs竭诚为您服务</li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PictureConsultant from '../../components/PictureConsultant';
import TableConsultant from '../../components/TableConsultant';
export default {
  components: {
    PictureConsultant,
    TableConsultant
  }
}
</script>


<style lang="stylus">
.consultant-wrapper
  width 96%
  min-width 980px
  overflow hidden
  margin 20px auto 0

  .csl-pic
    display inline-block
    width 30%

  .csl-tourist
    display inline-block
    width 44%
    margin 0 2%

  .csl-notice
    display inline-block
    width 22%
    .quee
      height 160px
      overflow hidden 

      .csl-notice-list
        padding 0
        margin 0
        // animation quee 8s infinite
        .csl-notice-list-item
          margin-top 10px
          list-style none

  .csl-title
    background-color #9e032e
    margin-bottom 20px
    color #ffffff
    text-align center
  @keyframes quee
    0%
      transform translateY(0)
    100%
      transform translateY(-100%)
</style>