<template>
  <!-- 基本表格 -->
  <div>
    <a-card>
    <br>
      <v-create-table
        :sourceData="columns"
        :tableData="data"
        :loading="loading"
        @handle-edit="handleEdit"
      >
        <template v-slot:name="{row}">
          <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          {{row.name}}
        </template>
        <template v-slot:rate="{row}">
          <a-rate :value="row.rate" disabled />
        </template>
        <template v-slot:select="{row}">
          <a-popover title="Title">
            <template slot="content">
              <p>{{row.select}}</p>
              <p>{{row.select}}</p>
            </template>
            <a style="display:block;width:120px">更多信息点我</a>
          </a-popover>
        </template>
        <template v-slot:checkbox="{row}">
          <a-tag
            v-for="item in row.checkbox"
            :key="item"
            :color="item=='Apple'?'red':'pink'"
          >{{item}}</a-tag>
        </template>
      </v-create-table>
    </a-card>
    <v-create-form
      :sourceData="columns"
      :defaultData="defaultData"
      model="modal"
      v-model="showForm"
    ></v-create-form>
  </div>
</template>
<script>
const columns = [
  // input基本使用
  {
    title: '编号',
    dataIndex: 'name',
    width: 80,
    tooltip: true,
    fixed: 'left',
    sortable: true,
    formOptions: {
      el: 'input'
    },
    sorter: (a, b) => a.name - b.name
  },
  // input.search
  {
    title: '手机号(固定长度)',
    dataIndex: 'input2',
    width: 150,
    formOptions: {
      el: 'input.search'
    }
  },
  // 自定义
  {
    title: '姓名',
    dataIndex: 'input3',
    tooltip: true,
    width: 100,
    formOptions: {
      el: 'input'
    }
  },
  // 输入框
  {
    title: '备注',
    dataIndex: 'address',
    tooltip: true,
    width: 100,
    formOptions: {
      el: 'input'
    }
  },
  // 开关

  // 日期
  {
    title: '登记日期',
    dataIndex: 'datepicker',
    width: 100,
    formOptions: {
      el: 'datepicker',
      options: {}
    }
  },
]

const data = []
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `${i}`,
    input2: `1592629046${i}`,
    input3: '小陈',
    select: '描述内容',
    selectAsync: '这是一个异步数据输入框',
    address: '描述内容',
    radio: 'artiely',
    switch: true,
    checkbox: ['Apple', 'Pear'],
    datepicker: '2019/10/20',
    timepicker: '23:59:59',
    cascader: ['zhejiang', 'hangzhou', 'xihu'],
    rate: 3,
    textarea: '这是一个文本域',
    slider: 30,
    upload: [
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }
    ],
    tree: []
  })
}

export default {
  data () {
    return {
      data,
      columns,
      loading: false,
      showForm: false,
      defaultData: {}
    }
  },
  methods: {
    handleEdit (text, record) {
      this.showForm = true
      this.defaultData = record
    }
  }
}
</script>
