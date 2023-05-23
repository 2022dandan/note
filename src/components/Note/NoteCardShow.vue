<template>
    <div>
        <!-- 卡片展示 -->
      <el-card :body-style="{ padding: '0px' }" style="height:325px; position: relative;">
        <div style="padding: 14px; ">
          <div><span style="font-weight:bolder">卡片主题：</span><span>{{originForm.card_name}}</span> </div>
          <div><span style="font-weight:bolder">卡片时间：</span><span>{{originForm.card_time}}</span></div>
          <div><span style="font-weight:bolder">卡片详情：</span><span style="word-wrap:break-word; ">{{originForm.card_content}}</span></div>
          <div class="note-edit" style="float: right;font-size: 20px; color:black;">
            <i class="el-icon-edit" @click="dialogFormVisible = true"></i>
            <el-popconfirm
              title="确定要删除吗？"
              @confirm="deleteCard"
            >
              <i class="el-icon-delete" slot="reference" style="margin-left: 10px;"></i>
            </el-popconfirm>
          </div>
        </div>
      </el-card>
    <!-- Form -->
    <el-dialog title="卡片信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="卡片主题" :label-width="formLabelWidth">
          <el-input v-model="form.card_name" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="卡片分类" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            v-for="tag in form.card_type"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
        </el-form-item>
        <el-form-item label="卡片详情" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.card_content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="putMassage">修改</el-button>
      </div>
    </el-dialog>
    </div>
</template>
<script>
import lodash from 'lodash'
export default {
    name: 'NoteCard',
    props: ['originForm'],
    data() {
      return{
        dialogTableVisible: false,
        dialogFormVisible: false,
        // form: {
        //   category: 2,
        //   name: '数学笔记',
        //   type:['11','22','333'],
        //   content:'XXXXXX',
        //   time:'2023-5-1'
        // },
        form: {},
        formLabelWidth: '120px',
        // 标签编辑
        inputVisible: false,
        inputValue: '',
      }
    },
    mounted() {
      this.form = lodash.cloneDeep(this.originForm)
    },
    methods:{
      handleClose(tag) {
        this.form.card_type.splice(this.form.card_type.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.form.card_type.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      async putMassage(){
        this.dialogFormVisible = false
        console.log(this.form);
        const cardform = {}
        cardform.card_content = this.form.card_content
        cardform.card_type = JSON.stringify(this.form.card_type)
        cardform.card_name = this.form.card_name
        cardform.card_parent = this.form.card_parent
        cardform.user_name = this.form.user_name
        const res = await fetch('http://localhost:8000/note/reviceNoteCard', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(cardform),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.$emit('getAllCard')
          console.log(res,'修改成功')
        }
        else{
          console.log("卡片修改失败")
        }
      },
      async deleteCard(){
        const deleteform = {}
        deleteform.card_name = this.form.card_name
        deleteform.card_parent = this.form.card_parent
        deleteform.user_name = this.form.user_name
        const res = await fetch('http://localhost:8000/note/deleteNoteCard', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(deleteform),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.$emit('getAllCard')
          console.log(res,'删除成功')
        }
        else{
          console.log("卡片删除失败")
        }
      },
      handleCancel() {
        this.form = lodash.cloneDeep(this.originForm)
        this.dialogFormVisible = false
      }
    }
    
  }
</script>

<style scoped>
    .image {
        width: 100%;
        display: block;
    }  
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }  
    .note-edit {
      position: absolute;
      bottom: 15px;
      right: 14px;
    }
</style>