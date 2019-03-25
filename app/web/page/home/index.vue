<!-- element-ui的el-table不支持服务端渲染 -->
<template>
  <Layout description="vue server side render" keywords="egg, vue, webpack, server side render">
    <el-table v-bind:data="tableDatas" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <ul class="smart-artiles" id="articleList">
      <li v-for="item in tableDatas">
        <div class="point">+{{item.name}}</div>
        <div class="card">
          <h2><a :href="item.url" target="_blank">{{item.data}}</a></h2>
          <div>
            <ul class="actions">
              <li>
                <time class="timeago">{{item.province}}</time>
              </li>
              <li class="tauthor">
                <a href="#" target="_blank" class="get">Sky</a>
              </li>
              <li><a>+收藏</a></li>
              <li>
                <span class="timeago">{{item.city}}</span>
              </li>
              <li>
                <span class="timeago"></span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    console.log('==========data');
    return {
      message: 'hello'
      // tableData: [{
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1518 弄',
      //   zip: 200333
      // }, {
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1517 弄',
      //   zip: 200333
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1519 弄',
      //   zip: 200333
      // }, {
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   province: '上海',
      //   city: '普陀区',
      //   address: '上海市普陀区金沙江路 1516 弄',
      //   zip: 200333
      // }]
    }
  },
  computed: {
    tableDatas() {
      console.log('============computed', this.tableData, this.message);
      return this.tableData;
    }
  },
  created() {
    console.log('============created', this.tableData, this.message);
  }
}
</script>