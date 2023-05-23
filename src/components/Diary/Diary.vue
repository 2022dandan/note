<template>
  <div>
    <el-row class="diary" type="flex" justify="center">
      <!-- 界面主题展示 -->
      <el-col :span="6">
        <div class="title">
          <h2 style="text-align:center">我的日记本</h2>
          <div style="display: flex;">
            <el-button round style="margin-left: 30px;" @click="dialogFormVisible = true">添加日记</el-button>
            <Search style="width: 150px; margin-left: 15px;"></Search>
          </div>
          <el-col :span="22" v-for="(form) in diary" :key="form.date"  style="margin-top: 20px;">
            <DiaryCardShow :diaryForm="form" style="margin-left: 30px;" @getAllDiary="getAllDiary"> </DiaryCardShow>
          </el-col>
        </div>
      </el-col>
      <!-- 中间间隔 -->
      <el-col :span="1">
      </el-col>
      <!-- 日历展示 -->
      <el-col :span="15">
        <div id="calendar">
          <el-calendar>
            <template
              slot="dateCell"
              slot-scope="{data, date}"> 
              <p :class="data.isSelected ? 'is-selected' : ''">
                {{ data.day.split('-').slice(1).join('-') }} 
                <span v-if="judge(date)" class="hasDone">✔️</span>
              </p>
            </template>
          </el-calendar>
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
  import Search from '../Search.vue'
  import DiaryCardShow from './DiaryCardShow.vue'
  import { request } from '../../utils'
  export default {
    name:'Diary',
    components:{Search,DiaryCardShow},
    data() {
      return {
        has: [],
        diary:[
          // {
          //   time:'2023-5-13',
          //   name:'游乐场',
          //   feel:'开心',
          //   weather:'天晴',
          // },
          // {
          //   time:'2023-5-10',
          //   name:'看电影',
          //   feel:'兴奋',
          //   weather:'阴天',
          // },
          // {
          //   time:'2023-5-04',
          //   name:'写作业',
          //   feel:'正常',
          //   weather:'阴天',
          // }
        ],
        // 日记添加
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          user_name: sessionStorage.getItem('username')
        },
        formLabelWidth: '120px'
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
        console.log(this.has, 123)
      }
    },
  }
</script>
<style>
  .diary .title {
    height: calc(100% - 25px);;
    border: #1989FA 1px solid;
    margin-top: 25px;
    border-radius: 20px;
  }

  .diary .is-selected {
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
  .diary .hasDone {
    position: absolute;
  }

</style>