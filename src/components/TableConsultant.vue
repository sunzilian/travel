<template>
  <el-table
    :data="tableData"
    :show-header="false"
    border
    max-height="300px"
    style="width: 100%"
    size="small"
   >
    <el-table-column
      prop="name"
      label="姓名"
      min-width="180"
      :show-overflow-tooltip="true"
      class-name="aa"
    >
      <template slot-scope="scope">
          <a :href="scope.row.url"
            target="_blank"
            class="buttonText">{{scope.row.name}}</a>
        </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      :width="dateColumnWidth"
      class-name="aa"
    >
    </el-table-column>
    <!-- <el-table-column
      prop="address"
      min-width="200px"
      label="地址">
    </el-table-column> -->
  </el-table>
</template>

<script>
  export default {
    props: {
        dateColumnWidth: {
            type: String,
            default: '100px'
        }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎王小虎王小虎王小虎王小虎王小虎王小虎',
          url: '/#/resort',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style lang="stylus">
.aa
  background-color #f8f8f8
</style>