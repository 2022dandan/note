<template>
  <div>
    <!-- 页面构建 -->
    <el-row class="calendar" type="flex" justify="center">
        <!-- 主题栏 -->
        <el-col :span="6">
            <div class="leftContent">
                <div class="title">
                    <i class="el-icon-s-home" style="line-height: 60px;"></i>
                    <h2 style="text-align:center; line-height: 60px; margin: 0;">我的日历记事本</h2>
                    <i class="el-icon-circle-plus-outline" style="line-height: 60px;" @click="dialogFormVisible = true"></i>
                </div>
                <span class="day">{{selectedDay}}</span>
                <div>
                    <div class="block">
                      <el-timeline>
                        <el-timeline-item v-for="(form) in showList[showDay.toLocaleDateString()]" :timestamp="(new Date(form.time).toTimeString().slice(0, 8))" placement="top" :key="form.updatedAt">
                          <el-card body-style="padding: 10px; font-size: 12px;display: flex;">
                            <div style="width: 200px;font-size: 14px;" @click="lookThing(form)">
                              <div><span>主题：{{form.name}}</span></div>
                              <div><span>地点：{{form.address}}</span></div> 
                            </div>
                            <div style="font-size: 24px;">
                              <i class="el-icon-edit" @click="editedThing(form)"></i>
                              <el-popconfirm
                                title="确定要删除吗？"
                                @confirm="deleteThing(form.id)"
                              >
                                <i class="el-icon-delete" slot="reference" style="margin-left: 20px;"></i>
                              </el-popconfirm>
                            </div>
                          </el-card>
                        </el-timeline-item>
                      </el-timeline>
                    </div>
                </div>
            </div>
        </el-col>
        <!-- 间距 -->
        <el-col :span="1">
        </el-col>
        <!-- 日历展示 -->
        <el-col :span="15">
            <div id="calendar">
                <el-calendar v-model="showDay">
                    <template
                        slot="dateCell"
                        slot-scope="{data, date}"
                    > 
                        <p :class="data.isSelected ? 'is-selected' : ''" @click="updateDay(date)">
                            {{ date.getDate() }}
                        </p>
                        <div class="items">
                          <span v-for="(item) in showList[date.toLocaleDateString()]" :key="item.day + item.time" class="item" :style="`backgroundColor: ${item.backgroundColor}`" @click="lookThing(item)"> {{ item.name }} </span>
                        </div>
                    </template>
                </el-calendar>
            </div>
        </el-col>   
    </el-row>
    <!-- 添加弹窗 -->
    <el-dialog title="添加事件" :visible.sync="dialogFormVisible">
      <el-form :model="addForm">
        <el-form-item label="主题：" :label-width="formLabelWidth">
          <el-input v-model="addForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="时间：" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker
              v-model="addForm.time"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="情况：" :label-width="formLabelWidth">
          <el-radio-group v-model="addForm.degree">
            <el-radio :label="1">普通</el-radio>
            <el-radio :label="2">一般</el-radio>
            <el-radio :label="3">紧急</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="地点：" :label-width="formLabelWidth">
          <el-input v-model="addForm.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详情：" :label-width="formLabelWidth">
          <el-input v-model="addForm.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddEvent">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 具体事件展示 -->
    <el-dialog :visible.sync="dialogTableVisible">
      <el-descriptions title="事件详情"  class="margin-top" :column="1"  size="medium" border>
        <template slot="extra"><el-button type="primary" size="small" @click="editedThing(viewThing)">修改</el-button></template>
        <template slot="extra">
          <el-popconfirm
            title="确定要删除吗？"
            @confirm="deleteThing(viewThing.id)"
          >
            <el-button type="primary" size="small" slot="reference">删除</el-button>
          </el-popconfirm>
        </template>
        <el-descriptions-item>
          <template slot="label">事件主题</template>{{viewThing.name}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">情况</template>{{state[viewThing.degree-1]}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">事件时间</template>{{new Date(viewThing.time).toLocaleString()}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">事件地址</template>{{viewThing.address}}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">事件详情</template>{{viewThing.content}}
        </el-descriptions-item>
      </el-descriptions>
    </el-dialog>
    <!-- 修改弹窗 -->
    <el-dialog title="修改事件" :visible.sync="dialogEditFormVisible">
      <el-form :model="copiedEditThing">
        <el-form-item label="事件主题" :label-width="formLabelWidth">
          <el-input v-model="copiedEditThing.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="时间" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker
              v-model="copiedEditThing.time"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="情况" :label-width="formLabelWidth">
          <el-radio-group v-model="copiedEditThing.degree">
            <el-radio :label="1">普通</el-radio>
            <el-radio :label="2">一般</el-radio>
            <el-radio :label="3">紧急</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="地点" :label-width="formLabelWidth">
          <el-input v-model="copiedEditThing.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详情" :label-width="formLabelWidth">
          <el-input v-model="copiedEditThing.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleMassage">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import lodash from 'lodash'
import { request } from '../../utils'
    export default {
      name:'Calendar',
      components:{},
      data() {
        return {
          // has: ['2023-05-13', '2023-05-04', '2023-05-10'],
          // 事件数据
          calendarList:[],
          // 按照日期分类的用于展示的内容
          showList: {
            
          },
          copiedEditThing: {},
          showThing:{},
          // 添加弹窗和数据
          dialogTableVisible: false,
          dialogFormVisible: false,
          dialogEditFormVisible: false,
          addForm: {
            degree: 1,
            user_name: sessionStorage.getItem('username')
          },
          formLabelWidth: '120px',
          state:['普通','一般','紧急'],
          // 当前展示的日期
          showDay: new Date,
          viewThing:{},
        }
      },
      computed: {
        selectedDay() {
          return this.showDay.toLocaleDateString()
        }
      },
      mounted() {
        // 按照时间进行分类
        this.initData()
      },
      methods: {
        async initData() {
          this.getCalendarList()
            .then(res => {
              console.log(res)
              this.calendarList = res
              this.showList = res.reduce((obj, current) => {
                const day = new Date(current.time).toLocaleDateString()
                current.backgroundColor = this.getRandomColor()
                let temp = obj[day]
                if (!temp) {
                  obj[day] = []
                  temp = obj[day]
                }
                if (temp.length >= 3) {
                  return obj
                }   
                temp.push(current)
                return obj
              }, {})
              console.log('list', this.showList)
            })
        },
        async getCalendarList() {
          const res = await request('http://localhost:8000/cale/allCale', 'post', { user_name: this.addForm.user_name})
          return res.result
        },
        getRandomColor() {
          const r = Math.random() * 255
          const g = Math.random() * 255
          const b = Math.random() * 255
          return `rgba(${r}, ${g}, ${b})`
        },
        async handleAddEvent() {
          console.log(this.addForm)
          const res = await fetch('http://localhost:8000/cale/createCale', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.addForm),
            mode: 'cors'
          })
          .then(res => res.json())
          .catch(e => {
            console.log('error', e)
          })
          console.log(res)
          this.addForm = {
            degree: 1,
            user_name: sessionStorage.getItem('username')
          }
          this.initData()
          this.dialogFormVisible = false
        },
        updateDay(date){
          this.day = date
          console.log(this.day);
        },
        lookThing(form){
          this.dialogTableVisible = true
          this.viewThing = form
          this.copiedEditThing = lodash.cloneDeep(this.viewThing)
        },
        editedThing(form){
          this.viewThing = form
          this.dialogTableVisible = false
          this.copiedEditThing = lodash.cloneDeep(this.viewThing)
          this.dialogEditFormVisible = true;
        },
        handleCancel(){
          this.dialogEditFormVisible = false
          this.copiedEditThing = lodash.cloneDeep(this.viewThing)
        },
        async handleMassage(){
          this.dialogEditFormVisible = false
          // this.viewThing= lodash.cloneDeep(this.copiedEditThing)
          const res = await request('http://localhost:8000/cale/reviceCale', 'post', this.copiedEditThing)
          this.initData()
          return res.result
        },
        async deleteThing(id){
          this.dialogTableVisible = false
          console.log(this.viewThing)
          const res = await request('http://localhost:8000/cale/deleteCale', 'post', { id: id})
          this.initData()
          return res.result
        }
      },
    }
</script>
<style >
    .calendar .leftContent {
      height: calc(100% - 25px);;
      border: #1989FA 1px solid;
      margin-top: 25px;
      border-radius: 20px;
    }
    .calendar .title {
        display: flex;
        justify-content: center;
        height: 60px;
    }

    .calendar .day {
      display: block;
      text-align: center;
    }

    .calendar .el-timeline {
      padding-left: 25px;
      padding-right: 40px;
      margin-top: 20px;
    }
  
    .calendar .is-selected {
      color: #1989FA;
    }
    .calendar .el-calendar{
      margin: 0 auto;
      margin-top: 25px;
      width: 800px;
      border: #1989FA 1px solid;
      border-radius: 20px;
    }
    .calendar .el-calendar__body {
      /* height: 400px; */
      width: 700px;
      margin: 0 0 5px 30px;
      padding-bottom: 0;
    }
    .calendar .el-calendar-day {
      height: auto !important;
      min-height: 70px;
    }
    .calendar p {
      position: relative;
      text-align: center;
      margin: 0;
      padding: 0;
    }
    .calendar .items {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
    .calendar .items .item {
      box-sizing: border-box;
      border-radius: 3px;
      margin-bottom: 1px;
      width: 100%;
      font-size: 10px;
      color: #fff;
      padding: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .calendar .hasDone {
      position: absolute;
    }
  
</style>