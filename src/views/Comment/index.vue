<template>
  <div class="comment">
    comment
    <nav-menu activeIndex="5" />
    <div class="comment-main">
      <div class="comment-main-info">
        <div class="comment-maint-info-user comment-main-info-column">
          用户: 匿名
        </div>
        <div class="comment-maint-info-time comment-main-info-column">
          留言时间: 2017/2/24 1:22:23
        </div>
        <div class="comment-maint-info-content comment-main-info-column">
          留言内容: 这个是留言内容
        </div>
        <div class="comment-maint-info-reply-time comment-main-info-column">
          回复时间: 2017/2/27 1:22:23
        </div>
        <div class="comment-maint-info-reply-content comment-main-info-column">
          回复内容: 这个是回复内容
        </div>
      </div>
      <div class="comment-main-info">
        <div class="comment-maint-info-user comment-main-info-column">
          用户: 匿名
        </div>
        <div class="comment-maint-info-time comment-main-info-column">
          留言时间: 2017/2/24 1:22:23
        </div>
        <div class="comment-maint-info-content comment-main-info-column">
          留言内容: 这个是留言内容
        </div>
        <div class="comment-maint-info-reply-time comment-main-info-column">
          回复时间: 2017/2/27 1:22:23
        </div>
        <div class="comment-maint-info-reply-content comment-main-info-column">
          回复内容: 这个是回复内容
        </div>
      </div>
      <span>用户名:</span>
      <el-input
        v-model="commntUserName"
        placeholder="请输入用户名"
        class="comment-user-name"
      />
      <span>(空为匿名)</span>
      <br/>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="commentContent"
        class="comment-content"
      />

      <br />
      <el-button class="comment-confirm" size="small" @click="comfirmHandle">确定</el-button>
      <el-button class="comment-cancel" size="small" @click="cancelHandle">取消</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavMenu from "../../components/NavMenu";

export default {
  name: "home",
  data() {
    return {
      commntUserName: '',
      commentContent: ''
    }
  },
  components: {
    // HelloWorld
    NavMenu
  },
  mounted() {
    this.$api.exampleModule.getExample().then(res => {
      console.log(res);
    });
  },
  methods: {
    comfirmHandle() {
      let {
        commntUserName,
        commentContent
      } = this;
      console.log(commntUserName, commentContent);
    },
    cancelHandle() {
      this.commntUserName = '';
      this.commentContent = '';
    }
  },
};
</script>

<style lang="stylus">
.comment

  .comment-main
    width 80%
    margin 20px auto 0
    padding-left 20px
    .comment-main-info
      margin 15px 0
      .comment-main-info-column
        margin 5px 0
    .comment-user-name
      width 20%
      margin 20px 10px 0
    .comment-content
      margin 10px 0
      width 80%
</style>
