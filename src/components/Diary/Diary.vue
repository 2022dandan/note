<template>
  <div style="height: 100%;">
    <el-row class="diary" type="flex" justify="center" style="height: 100%; overflow: hidden; padding: 40px 0; box-sizing: border-box; user-select: none;">
      <!-- 界面主题展示 -->
      <el-col :span="6">
        <div class="leftContent">
          <div class="title">
            <h2 style="text-align:center">我的日记本</h2>
            <el-tooltip class="item" effect="light" content="表格布局" placement="right">
              <i @click="changeLayout" :class="{'el-icon-menu': true, active: layout === 'card'}"></i>
            </el-tooltip>
          </div>
          <div style="display: flex; padding-left: 10px; padding-right: 6px;">
            <div class="search" style="flex: 1; background-color: #f2f3f5;border-radius: 2px; overflow: hidden;">
              <el-input
                placeholder="搜索日记"
                suffix-icon="el-icon-search"
                size="mini"
                v-model="search"
              >
              </el-input>
            </div>
            <el-button style="margin-left: 5px; padding: 0 5px;" @click="dialogFormVisible = true">写日记</el-button>
          </div>
          <div style="flex: 1; overflow: hidden; padding: 10px 0;">
            <div v-if="layout === 'card'" style="display: flex; flex-direction: column; align-items: center; width: 100%; height: 100%; overflow: auto; padding-right: 30px; padding-left: 10px; padding-bottom: 20px;">
              <div v-for="(form) in diary" :key="form.date" style="margin-top: 20px; width: 100%; cursor: pointer;" @click="handleClickCard(form)" @dblclick="handleEdit">
                <DiaryCardShow :diaryForm="form" @handleEdit="handleEdit" @getAllDiary="getAllDiary"></DiaryCardShow>
              </div>
            </div>
            <div v-else style="display: flex; flex-direction: column; align-items: center; width: 100%; height: 100%; overflow: auto; padding-right: 30px; padding-left: 10px; padding-bottom: 20px; margin-top: 20px;">
              <el-tree style="width: 100%;" default-expand-all node-key="id" highlight-current :current-node-key="defaultCheckedKeys" :data="diaryTreeList" @node-click="handleNodeClick"></el-tree>
            </div>
          </div>
        </div>
      </el-col>
      <!-- 中间间隔 -->
      <el-col :span="1">
      </el-col>
      <!-- 日历展示 -->
      <el-col :span="15">
        <div style="height: 100%; border-radius: 10px; border: 2px solid #ddd; background-color: #fff; overflow: hidden;">
          <div v-if="!editting" style="height: calc(100vh - 88px); overflow-y: auto; padding: 0 20px;" @dblclick="handleEdit">
            <Viewer v-if="markdown" :value="markdown" />
            <el-empty v-else description="该日记还未写内容哦，点击下方按钮开始编写">
              <el-button type="primary" @click="handleEdit">Start</el-button>
            </el-empty>
          </div>
          <div v-else style="height: calc(100vh - 80px); overflow-y: auto;">
            <Editor style="height: 100%;" :value="markdown" :plugins="plugins" @change="handleChange" />
          </div>
        </div>
      </el-col>
    </el-row>
     <!-- 添加日历弹窗 -->
    <el-dialog title="日记" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="日记主题：" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日记时间：" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker
              v-model="form.time"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="心情：" :label-width="formLabelWidth">
          <el-input v-model="form.feel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="天气：" :label-width="formLabelWidth">
          <el-input v-model="form.weather" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancle">取 消</el-button>
        <el-button type="primary" @click="handleMessage">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import { Editor, Viewer } from '@bytemd/vue'
  import Search from '../Search.vue'
  import DiaryCardShow from './DiaryCardShow.vue'
  import { request } from '../../utils'
  import 'juejin-markdown-themes/dist/channing-cyan.min.css'
  import 'bytemd/dist/index.css'


  export default {
    name:'Diary',
    components:{Search, DiaryCardShow, Editor, Viewer},
    data() {
      return {
        has: [],
        diary:[
        ],
        // 搜索
        search: '',
        // 日记添加
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          user_name: sessionStorage.getItem('username')
        },
        formLabelWidth: '120px',

        // markdown预览
        markdown: '',
        plugins: [],
        editting: false,

        // 布局模式
        layout: 'tree'

      }
    },
    computed: {
      diaryTreeList() {
        const res = []
        const obj = {}
        this.diary.forEach(item => {
          const time = new Date(item.time)
          const year = time.getFullYear()
          const month = time.getMonth() + 1
          const day = time.getDate()
          if (!obj[year]) {
            obj[year] = {}
          }
          if (!obj[year][month]) {
            obj[year][month] = {}
          }
          obj[year][month][day] = item
        })
        Object.keys(obj).forEach(year => {
          res.push({
            id: year,
            label: year + '年',
            children: Object.keys(obj[year]).map(month => ({
              id: `${year}/${month}`,
              label: month + '月',
              children: Object.keys(obj[year][month]).map(day => ({
                id: `${year}/${month}/${day}`,
                label: day + '日',
                data: obj[year][month][day],
                isLeaf: true
              }))
            }))
          })
        })
        return res
      },
      defaultCheckedKeys() {
        return new Date().toLocaleDateString()
      }
    },
    mounted(){
      this.getAllDiary()
    },
    methods: {
      judge(date) {
        return this.has.includes(new Date(date).toLocaleDateString().replace(/\//g, '-'))
      },
      handleCancle(){
        this.dialogFormVisible = false
      },
      async handleMessage(){
        this.dialogFormVisible = false
        console.log(this.form)
        const res = await request('http://localhost:8000/diary/createDiary', 'post', this.form)
        console.log(res)
        this.getAllDiary()
        this.form={
          user_name: sessionStorage.getItem('username')
        }
      },
      async getAllDiary(){
        this.has=[]
        const res = await request('http://localhost:8000/diary/allDiary', 'post', {user_name:sessionStorage.getItem('username')})
        this.diary = res.result
        this.diary.forEach(item => {
          item.date = new Date(item.time).toLocaleDateString().replace(/\//g, '-')
          this.has.push(item.date)
        })

        // 按时间排序
        this.diary.sort((a, b) => {
          const aTime = new Date(a.time).getTime()
          const bTime = new Date(b.time).getTime()
          return bTime - aTime

        })
        this.markdown = this.diary[0].content || ''
        console.log('tree', this.diaryTreeList)
      },
      handleChange(v) {
        this.markdown = v
      },
      handleClickCard(form) {
        console.log(form)
        this.markdown = form.content
        this.editting = false
      },
      handleEdit() {
        this.editting = true
      },
      handleNodeClick(data) {
        console.log(data)
        if (data.isLeaf) {
          this.markdown = data.data.content
          this.editting = false
        }
      },
      changeLayout() {
        this.layout = this.layout === 'card' ? 'tree' : 'card' 
      }
    },
  }
</script>
<style>

  .diary .leftContent {
    /* height: calc(100% - 25px);;
    margin-top: 25px; */
    height: 100%;
    border-radius: 10px;
    border: 2px solid #ddd;
    background-color: #fff;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
  }

  .diary .search .el-input__inner {
    background-color: transparent;
    border: 0;
    border-radius: 5px;
  }

  .diary .title {
    display: flex;
    position: relative;
    justify-content: space-around;
    align-items: center;
    height: 60px;
  }

  .diary .title i {
    position: absolute;
    right: 20px;
    top: 50%;
    font-size: 20px;
    transform: translateY(-50%);
    color: #ccc;
    cursor: pointer;
  }

  .diary .title i:hover,
  .diary .title i.active {
    color: #1989FA;
  }

  .diary .el-calendar{
    margin: 0 auto;
    margin-top: 25px;
    width: 800px;
    border: #1989FA 1px solid;
    border-radius: 20px;
  }
  .diary .el-calendar__body {
    /* height: 400px; */
    width: 700px;
    margin: 0 0 0 30px;
    padding-bottom: 0;
  }
  .diary .el-calendar-day {
    height: auto !important;
    /* height: 78px !important; */
  }
  .diary p {
    position: relative;
    text-align: center;
    margin: 20px 0;
    padding: 0;
  }

  .diary .icon {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
  }

  .diary .hasDone {
    position: absolute;
  }

  .bytemd {
    height: 100%;
    border: 0;
  }

  .bytemd-toolbar {
    border: 0;
  }

  .bytemd .markdown-body h1 {
    max-width: 100%;
  }

</style>