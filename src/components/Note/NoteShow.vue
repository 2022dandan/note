<template>
  <div>
    <!-- 笔记展示 -->
    <el-card :body-style="{ padding: '0px' }" style="height:325px">
        <router-link active-class="active" :to="'/edit/' + form.id" >
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        </router-link>
        <div style="padding: 14px;">
            <span>{{form.note_name}}</span>
            <div class="note-edit" style="float: right;font-size: 20px; color:black;">
              <i class="el-icon-edit" @click="dialogFormVisible = true"></i>
              <el-popconfirm
                title="确定要删除吗？"
                @confirm="deleteNote"
              >
                <i class="el-icon-delete" slot="reference" style="margin-left: 10px;"></i>
              </el-popconfirm>
            </div>
          </div>
    </el-card>
    <!-- Form -->
    <el-dialog title="笔记信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="笔记名称" :label-width="formLabelWidth">
          <el-input v-model="form.note_name" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="笔记类别" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            v-for="tag in form.note_type"
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
        <el-form-item label="笔记本详情" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.note_content"></el-input>
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
    name: 'NoteShow',
    props: ['originForm'],
    //   'form':{
    //     category:Number,
    //     name:String,
    //     type:Array,
    //     content:String,
    //     time:Date,
    //   }
    // },
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
        formLabelWidth: '120px',
        // 标签编辑
        inputVisible: false,
        inputValue: '',
        form: {}
      }
    },
    mounted() {
      this.form = lodash.cloneDeep(this.originForm)
    },
    methods:{
      handleClose(tag) {
        this.form.note_type.splice(this.form.note_type.indexOf(tag), 1);
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
          this.form.note_type.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      async putMassage(){
        this.dialogFormVisible = false
        console.log(this.form);
        const noteform = {}
        noteform.note_content = this.form.note_content
        noteform.note_type = JSON.stringify(this.form.note_type)
        noteform.note_name = this.form.note_name
        noteform.note_parent = this.form.note_parent
        noteform.user_name = this.form.user_name
        const res = await fetch('http://localhost:8000/note/reviceNote', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(noteform),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.$emit('getAllNote')
          console.log(res,'修改成功')
        }
        else{
          console.log("笔记修改失败")
        }
      },
      async deleteNote(){
        const deleteform = {}
        deleteform.note_name = this.form.note_name
        deleteform.note_parent = this.form.note_parent
        deleteform.user_name = this.form.user_name
        const res = await fetch('http://localhost:8000/note/deleteNote', {
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
          this.$emit('getAllNote')
          console.log(res, this, '删除成功')
        }
        else{
          console.log("笔记删除失败")
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
</style>