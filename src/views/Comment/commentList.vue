<template>
  <div class="comment">
    <div style="text-align:right; margin-top: 40px; padding-right: 40px">
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
        prop="title"
        label="标题"
        min-width="180"
        :show-overflow-tooltip="false"
        class-name="aa"
      >
      </el-table-column>
      <!-- <el-table-column
        prop="userName"
        label="留言者"
        :width="dateColumnWidth"
        class-name="aa"
      >
      </el-table-column> -->
      <el-table-column
        prop="createDate"
        label="评论日期"
        :width="dateColumnWidth"
        class-name="aa"
      >
      </el-table-column>
      
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import NavMenu from "../../components/NavMenu";

export default {
  name: "home",
  data() {
    return {
      commentUserName: '',
      commentContent: '',
      commentList: [],
      commentList1: [
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
      dateColumnWidth: 150
    }
  },
  created() {
    console.log(this.$router.query)
    if (!window.localStorage.getItem('isLogin')) {
      this.$message.warning('请先去登录')
      this.$router.push('/home')
      return;
    }
    this.commentUserName = window.localStorage.getItem('userName') || '匿名';
    this.getAllCommitPage()

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
    getAllCommitPage() {
      this.$api.get({
        url: '/comment/getAllCommitPage',
        data: {
          pageSize: 20,
          pageIndex: 1
        }
      })
      .then(({success, data}) => {
        console.log(data,'dddddddd');
        this.commentList = data.records
        if (success) {
          console.log(data);
          // this.registerForm = data;
        }
      })
    },
    toDetail(info) {
      console.log(info);
      this.$router.push({name:'commentDetail', query: {id: info.id, modify: false}})
    },
    addComment() {
      this.$router.push({name:'commentDetail',query:{modify:true, add: true}})
    }
  },
};
</script>

<style lang="stylus" scoped>
.comment
  padding 0 200px
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
