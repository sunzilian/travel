<template>
  <div class="comment">
    <!-- comment -->
    <nav-menu activeIndex="5" />
    <!-- <div style="text-align:right">
      <el-button @click="addComment()" size="medium" type="primary">新建</el-button>
    </div>
    <el-table
      :data="commentList"
      :show-header="true"
      border
      max-height="auto"
      style="width: 98%; margin: 20px auto 0"
      size="small"
      @row-click="toDetail"
    >
      <el-table-column
        prop="content"
        label="标题"
        min-width="180"
        :show-overflow-tooltip="false"
        class-name="aa"
      >
      </el-table-column>
      <el-table-column
        prop="userName"
        label="留言者"
        :width="dateColumnWidth"
        class-name="aa"
      >
      </el-table-column>
      <el-table-column
        prop="time"
        label="评论日期"
        :width="dateColumnWidth"
        class-name="aa"
      >
      </el-table-column>
      
    </el-table>
    <div class="comment-main">
      <div class="comment-main-info" v-for="item in commentList" :key="item.time">
        <div class="comment-maint-info-user comment-main-info-column">
          用户:{{item.userName}}
        </div>
        <div class="comment-maint-info-time comment-main-info-column">
          留言时间: {{item.time}}
        </div>
        <div class="comment-maint-info-content comment-main-info-column">
          留言内容: {{item.content}}
        </div>
        <div class="comment-maint-info-reply-time comment-main-info-column" v-if="item.replyTime">
          回复时间: {{item.replyTime}}
        </div>
        <div class="comment-maint-info-reply-content comment-main-info-column" v-if="item.replyContent">
          回复内容: {{item.replyContent}}
        </div>
      </div>
      <span>用户名:</span>
      <el-input
        v-model="commentUserName"
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
    </div> -->
    <router-view></router-view>
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
      commentUserName: '',
      commentContent: '',
      commentList: [
        {
          userName: '匿名',
          content: '5.1推荐去哪里玩',
          time: '2020/2/24 14:22:23',
          replyContent: 'xxxxxxxxxxxxxxxxxxxxx',
          replyTime: '2020/2/24 16:12:39'
        },
        {
          userName: 'username',
          content: 'content',
          time: 'time',
          replyContent: 'replyContent',
          replyTime: 'replyTime'
        },
        
      ],
      dateColumnWidth: 120
    }
  },
  components: {
    // HelloWorld
    NavMenu
  },
  created() {
    if (!window.localStorage.getItem('isLogin')) {
      this.$message.warning('请先去登录')
      this.$router.push('/home')
      return;
    }
    this.commentUserName = window.localStorage.getItem('userName') || '匿名';

    // this.$api.get({
    //   url: '/news/getTopNews',
    //   data: {}
    // }).then(({success, msg, data}) => {
    //   if (success) {
    //     console.log('getNewsTop', data);
    //   }
    //   else {
    //     this.$message.error(msg)
    //   }
    // }, error => {
    //     this.$message.error(error)
    // })
  },
  // mounted() {
  //   this.$api.exampleModule.getExample().then(res => {
  //     console.log(res);
  //   });
  // },
  methods: {
    comfirmHandle() {
      let {
        commentUserName,
        commentContent,
        commentList
      } = this;
      console.log(commentUserName, commentContent);
      commentList.push({
          userName: commentUserName,
          content: commentContent,
          time: new Date().getTime(),
          replyContent: '',
          replyTime: ''
        },)
      this.commentList = commentList
      this.cancelHandle()
    },
    cancelHandle() {
      this.commentUserName = '';
      this.commentContent = '';
    },
    toDetail(info) {
      console.log(info);
      this.$router.push({name:'commentDetail'})
    },
    addComment() {
      this.$router.push({name:'commentDetail',query:{modify:true, add: true}})
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
