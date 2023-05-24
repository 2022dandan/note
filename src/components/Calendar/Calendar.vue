<template>
  <div style="height: 100%;">
    <!-- 页面构建 -->
    <el-row class="calendar" type="flex" justify="center" style="height: 100%; overflow: hidden; padding: 40px 0; box-sizing: border-box;" >
        <!-- 主题栏 -->
        <el-col :span="6">
            <div class="leftContent">
                <div class="title">
                    <!-- <i class="el-icon-s-home" style="line-height: 60px;"></i> -->
                    <h2 style="text-align:center; line-height: 60px; margin: 0;">我的日历记事本</h2>
                    <i class="el-icon-plus" style="color: crimson;" @click="dialogFormVisible = true"></i>
                </div>
                <span class="day">{{selectedDay}}</span>
                <div>
                    <div class="block">
                      <el-timeline v-if="showList[showDay.toLocaleDateString()]?.length">
                        <el-timeline-item v-for="(form) in showList[showDay.toLocaleDateString()]" :timestamp="(new Date(form.time).toTimeString().slice(0, 8))" placement="top" :key="form.updatedAt">
                          <el-card body-style="padding: 10px; font-size: 12px; display: flex; justify-content: space-around;">
                            <div style="width: 200px;font-size: 14px; display: flex;" @click="lookThing(form)">
                              <el-checkbox @change="handleChangeStastus(form)" @click.native="(e) => e.stopPropagation()" v-model="form.hasDone" style="margin-right: 10px;"/>
                              <span style="max-width: 140px; display: inline-block; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{{form.name}}</span>
                              <el-tag size="mini" :color="degreeColor[form.degree-1].color" effect="dark" style="border-color: transparent; margin-left: 5px;">{{ state[form.degree-1] }}</el-tag>
                              <!-- <div><span>地点：{{form.address}}</span></div>  -->
                            </div>
                            <div class="edit">
                              <span><i class="el-icon-edit" @click="editedThing(form)"></i></span>
                              <el-popconfirm
                                title="确定要删除吗？"
                                @confirm="deleteThing(form.id)"
                                style="margin-left: 10px;"
                              >
                                <i class="el-icon-delete" slot="reference"></i>
                              </el-popconfirm>
                            </div>
                          </el-card>
                        </el-timeline-item>
                      </el-timeline>
                      <el-empty description="暂无事件" v-else>
                      </el-empty>
                    </div>
                </div>
            </div>
        </el-col>
        <!-- 间距 -->
        <el-col :span="1">
        </el-col>
        <!-- 日历展示 -->
        <el-col :span="15">
            <div id="calendar" style="height: 100%; position: relative;">
                <el-calendar v-model="showDay">
                    <template
                        slot="dateCell"
                        slot-scope="{data, date}"
                    > 
                        <p :class="data.isSelected ? 'is-selected' : ''" @click="updateDay(date)">
                            {{ date.getDate() }}
                        </p>
                        <div class="items">
                          <span v-for="(item, i) in showList[date.toLocaleDateString()]" :key="item.time + i" class="item" :style="`backgroundColor: ${degreeColor[item.degree-1].color}`" @click="lookThing(item)"> {{ item.name }} </span>
                        </div>
                    </template>
                </el-calendar>
                <div style="left: 160px; display: inline-block; position: absolute; top: 28px;">
                  <span v-for="(item, i) in degreeColor" :key="item.color" style="display: inline-flex; align-items: center; font-size: 14px; margin-right: 20px; cursor: pointer;" @click="handleColorSelect(item, i)">
                    <span :style="`display: inline-block; width: 28px; height: 14px; border-radius: 3px; margin-right: 5px;background-color: ${item.show ? item.color : '#ccc'};`" />
                    {{ state[i] }}
                  </span>
                </div>
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
          state: ['普通','一般','紧急'],
          degreeColor: [{color: '#67C23A', show: true},{color: '#F09819', show: true}, {color: '#FF4B2B', show: true}],
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
        // 点击颜色后执行
        handleColorSelect(item, i) {
          item.show = !item.show
          this.showList = this.calendarList.reduce((obj, current) => {
            // 如果show为false则跳过不添加
            if (!this.degreeColor[current.degree-1].show) {
              return obj
            }

            const day = new Date(current.time).toLocaleDateString()
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
        },
        async handleChangeStastus(form) {
          request('http://localhost:8000/cale/reviceCale', 'post', form)
          this.initData()
        }
      },
    }
</script>
<style >
    .calendar .leftContent {
      /* height: calc(100% - 25px);;
      margin-top: 25px; */
      height: 100%;
      border-radius: 10px;
      border: 2px solid #ddd;
      background-color: #fff;
    }
    .calendar .title {
      display: flex;
      position: relative;
      justify-content: space-around;
      height: 60px;
    }

    .calendar .title i {
      position: absolute;
      right: 22px;
      line-height: 60px;
      font-size: 20px;
      font-weight: bolder;
      cursor: pointer;
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

    .calendar .el-timeline .edit {
      display: flex;
      font-size: 15px;
      color: rgba(0,0,0,.7);
    }

    .calendar .el-timeline .edit span {
      cursor: pointer;
    }

    .calendar .el-timeline .edit span:hover {
      color: #000;
    }
  
    .calendar .is-selected {
      color: #1989FA;
    }
    .calendar .el-calendar{
      margin: 0 auto;
      border-radius: 10px;
      border: 2px solid #ddd;
      background-color: #fff;
      box-sizing: border-box;
      padding: 10px 0;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .calendar .el-calendar__body {
      /* height: 400px; */
      /* margin: 0 0 5px 30px; */
      flex: 1;
      padding-bottom: 0;
    }

    .calendar td:hover {
      cursor: pointer;
      background-color: #F2F8FE;
    }
    
    .calendar .el-calendar-day {
      height: 100%;
      max-height: 45px;
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
      zoom: .9;
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

    .el-calendar-table {
      height: 100%;
    }
  
</style>