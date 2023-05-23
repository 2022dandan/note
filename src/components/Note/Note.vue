<template>
  <div>
    <!-- 标题和添加 -->
    <div class="title">
      <div>我的主页</div>
      <div>
        <el-tooltip class="item" effect="light" content="添加卡片" placement="bottom-start">
          <i @click="showAddCardDialog" class="el-icon-circle-plus-outline" style="font-size: 20px;"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="添加笔记" placement="bottom-start">
          <i @click="showAddNoteDialog" class="el-icon-document-add" style="font-size: 20px;"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="添加笔记本" placement="bottom-start">
          <i @click="showAddNoteBookDialog" class="el-icon-folder-add" style="font-size: 20px;"></i>
        </el-tooltip>
      </div>
      <Search></Search>  
    </div>
    <!-- 内容展示 -->
    <el-row :gutter="20">
      <!-- 笔记展示 -->
      <el-col :span="4" v-for="(form) in noteForm" :key="'note' + form.note_name"  style="margin-top: 20px;">
        <NoteShow :originForm="form" @getAllNote="getAllNote"></NoteShow>
      </el-col>
      <!-- 卡片展示 -->
      <el-col :span="4" v-for="(form) in cardForm" :key="'note-card' + form.card_name"  style="margin-top: 20px;">
        <NoteCardShow :originForm="form" @getAllCard="getAllCard"></NoteCardShow>
      </el-col>
      <el-col :span="4" v-for="(form) in noteBookForm" :key="'note-book' + form.noteBook_name"  style="margin-top: 20px;">
        <NoteBookShow :originForm="form" @getAllNoteBook="getAllNoteBook"></NoteBookShow>
      </el-col>
    </el-row>
    <!-- 添加记事卡片 -->
    <el-dialog title="添加记事卡片" :visible.sync="addCardDialogVisible">
      <el-form :model="cardFormInfo">
        <el-form-item label="卡片主题" :label-width="formLabelWidth">
          <el-input placeholder="请输入卡片主题名称" v-model="cardFormInfo.card_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="卡片详情" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="cardFormInfo.card_content"></el-input>
        </el-form-item>
        <el-form-item label="卡片分类" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            v-for="tag in cardFormInfo.card_type"
            closable
            :disable-transitions="false"
            @close="handleCardClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputCardVisible"
            v-model="inputCardValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleCardInputConfirm"
            @blur="handleCardInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showCardInput">+ New Tag</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCardCancel">取 消</el-button>
        <el-button type="primary" @click="handleAddCard">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 添加笔记 -->
    <el-dialog title="添加笔记" :visible.sync="addNoteDialogVisible">
      <el-form :model="noteFormInfo">
        <el-form-item label="笔记名称" :label-width="formLabelWidth">
          <el-input placeholder="请输入笔记名称" v-model="noteFormInfo.note_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="笔记类别" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            v-for="tag in noteFormInfo.note_type"
            closable
            :disable-transitions="false"
            @close="handleNoteClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputNoteVisible"
            v-model="inputNoteValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleNoteInputConfirm"
            @blur="handleNoteInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showNoteInput">+ New Tag</el-button>
        </el-form-item>
        <el-form-item label="笔记详情" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="noteFormInfo.note_content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleNoteCancel">取 消</el-button>
        <el-button type="primary" @click="handleAddNote">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 添加笔记本 -->
    <el-dialog title="添加笔记本" :visible.sync="addNoteBookDialogVisible">
      <el-form :model="noteBookFormInfo">
        <el-form-item label="笔记本名称" :label-width="formLabelWidth">
          <el-input placeholder="请输入笔记本名称" v-model="noteBookFormInfo.noteBook_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="笔记类别" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            v-for="tag in noteBookFormInfo.noteBook_type"
            closable
            :disable-transitions="false"
            @close="handleNoteBookClose(tag)"
          >
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputNoteBookVisible"
            v-model="inputNoteBookValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleNoteBookInputConfirm"
            @blur="handleNoteBookInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showNoteBookInput">+ New Tag</el-button>
        </el-form-item>
        <el-form-item label="笔记本详情" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="noteBookFormInfo.noteBook_content"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleNoteBookCancel">取 消</el-button>
        <el-button type="primary" @click="handleAddNoteBook">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  import NoteShow from "./NoteShow.vue"
  import NoteCardShow from "./NoteCardShow.vue"
  import NoteBookShow from "./NoteBookShow.vue"
  import Search from '../Search.vue'
  export default {
    name: 'Note',
    components: {
      NoteShow,NoteCardShow,Search,NoteBookShow
    },
    // props:['username'],
    data() {
      return{
        username: sessionStorage.getItem('username'),
        currentFile: 0,
        //笔记的类别
        noteType: ['一单元','二单元'],
        inputNoteVisible: false,
        inputNoteValue: '',
        // 笔记本类别
        noteBookType: ['数学','语文'],
        inputNoteBookVisible: false,
        inputNoteBookValue: '',
        // 卡片类型
        inputCardVisible: false,
        inputCardValue: '',
        // 卡片
        cardForm:[
          // {
          //   name:'事件1',
          //   time:'2023-5-4',
          //   type:['11','22','333'], 
          //   content:'具体事件1XXXXXXXXXXXXXX'
          // },
          // {
          //   name:'事件2', 
          //   type:['11','22','333'],
          //   content:'具体事件2XXXXXXXXXXXXXX',
          //   time:'2023-5-1',
          // },
          // {
          //   name:'事件3', 
          //   type:['11','22','333'],
          //   content:'具体事件3333333333333XXXXXXXXXXXXXX',
          //   time:'2023-5-1',
          // },
          // {
          //   name:'事件4', 
          //   type:['11','22','333'],
          //   content:'具体事件4444444444444444444',
          //   time:'2023-5-1',
          // },
        ],
        // noteName: ['数学笔记','语文笔记','英语笔记'],
        noteForm: [
          // {
          //   category: 2,
          //   name: '数学笔记',
          //   type:['11','22','333'],
          //   content:'XXXXXX',
          //   time:'2023-5-1'
          // },
          // {
          //   category: 2,
          //   name: '语文笔记',
          //   type:['11','22','333'],
          //   content:'XXXXXX',
          //   time:'2023-5-5'
          // },
          // {
          //   category: 2,
          //   name: '英语笔记',
          //   type:['11','22'],
          //   content:'XXXXXX',
          //   time:'2023-5-1'
          // },
        ],
        noteBookForm: [
          // {
          //   category: 1,
          //   name: '数学笔记',
          //   type:['11','22','333'],
          //   content:'XXXXXX',
          //   time:'2023-5-1'
          // },
          // {
          //   category: 1,
          //   name: '语文笔记',
          //   type:['11','22','333'],
          //   content:'XXXXXX',
          //   time:'2023-5-5'
          // },
        ],
        formLabelWidth: '120px',
        // 卡片数据
        cardFormInfo: {
          user_name:'',
          card_category: 1,
          card_parent: '',
          card_name: '',
          card_content: '',
          card_type:[],
          card_time: new Date()
        },
        // 笔记数据
        noteFormInfo: {
          user_name:'',
          note_category: 2,
          note_parent: '',
          note_name: '',
          note_type:[],
          note_content: '',
          note_details: '',
          note_time: new Date()
        },
        // 笔记本数据
        noteBookFormInfo: {
          user_name:'',
          noteBook_notebookId:'',
          noteBook_category: 3,
          noteBook_parent: '',
          noteBook_name: '',
          noteBook_type: [],
          noteBook_content: '',
          noteBook_haveType:'',
        },
        // 对话框判断
        addCardDialogVisible: false,
        addNoteDialogVisible: false,
        addNoteBookDialogVisible: false,
      }
    },
    mounted(){
      if(sessionStorage.getItem('username')){
        this.getAllNote()
        this.getAllCard()
        this.getAllNoteBook()
      }
      
    },
    methods: {
      // 获取文件信息
      // async getNoteBookInfo() {
      //   const res = await fetch('http://localhost:8000/note/viewnoteBook', {
      //     method: 'post',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(),
      //     mode: 'cors'
      //   })
      //   .then(res => res.json())
      //   .catch(e => {
      //     console.log('error', e)
      //   })
      //   if (res?.code === 0) {         
      //     this.noteForm = res.result
      //     console.log(res.result);
      //   }
      // },
      // 记事卡片逻辑
      showAddCardDialog() {
        this.addCardDialogVisible = true
      },
      handleCardCancel() {
        this.addCardDialogVisible = false
      },
      async handleAddCard() {
        // 增加卡片的逻辑
        this.cardFormInfo.user_name = sessionStorage.getItem('username')
        this.cardFormInfo.card_parent = this.currentFile
        this.addCardDialogVisible = false
        console.log(this.cardFormInfo, 123)
        const res = await fetch('http://localhost:8000/note/createNoteCard', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.cardFormInfo),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.getAllCard()
          console.log(res)
          this.cardFormInfo = {
            user_name:'',
            card_category: 1,
            card_parent: '',
            card_name: '',
            card_content: '',
            card_type:[],
            card_time: new Date()
          }
        }
        else{
          console.log("相同名字，重新创建")
        }
      },
      // 卡片类型添加
      handleCardClose(tag) {
        this.cardFormInfo.card_type.splice(this.cardFormInfo.card_type.indexOf(tag), 1);
      },
      showCardInput() {
        this.inputCardVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleCardInputConfirm() {
        let inputValue = this.inputCardValue;
        console.log(this.cardFormInfo.card_type)
        if (inputValue) {
          this.cardFormInfo.card_type.push(inputValue);
        }
        this.inputCardVisible = false;
        this.inputCardValue = '';
      },
      // 笔记
      showAddNoteDialog() {
        this.addNoteDialogVisible = true
      },
      handleNoteCancel() {
        this.addNoteDialogVisible = false
      },
      handleAddNote() {
        // 增加笔记的逻辑
        console.log(this.noteFormInfo)
        this.addNoteDialogVisible = false
      },
      async handleAddNote() {
        // 增加笔记的逻辑
        console.log(sessionStorage.getItem('username'))
        this.noteFormInfo.user_name = sessionStorage.getItem('username')
        this.noteFormInfo.note_parent = this.currentFile
        this.addNoteDialogVisible = false
        console.log(this.noteFormInfo, 123)
        const res = await fetch('http://localhost:8000/note/createNote', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.noteFormInfo),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.getAllNote()
          this.noteFormInfo = {
            user_name:'',
            note_category: 2,
            note_parent: '',
            note_name: '',
            note_type:[],
            note_content: '',
            note_details: '',
            note_time: new Date()
          }
          console.log(res)
        }
        else{
          console.log("相同名字，重新创建")
        }

      },
      // 笔记本
      showAddNoteBookDialog() {
        this.addNoteBookDialogVisible = true
      },
      handleNoteBookCancel() {
        this.addNoteBookDialogVisible = false
      },
      async handleAddNoteBook() {
        // 增加笔记的逻辑
        console.log(sessionStorage.getItem('username'))
        this.noteBookFormInfo.user_name = sessionStorage.getItem('username')
        this.noteBookFormInfo.noteBook_parent = this.currentFile
        this.addNoteBookDialogVisible = false
        console.log(this.noteBookFormInfo, 123)
        const res = await fetch('http://localhost:8000/note/createNoteBook', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.noteBookFormInfo),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.noteBookFormInfo = {
            user_name:'',
            noteBook_notebookId:'',
            noteBook_category: 3,
            noteBook_parent: '',
            noteBook_name: '',
            noteBook_type: [],
            noteBook_content: '',
            noteBook_haveType:'',
          }
          this.getAllNoteBook()
          console.log(res)
        }
        else{
          console.log("相同名字，重新创建")
        }

      },
      // 笔记类别添加
      handleNoteClose(tag) {
        this.noteFormInfo.note_type.splice(this.noteFormInfo.note_type.indexOf(tag), 1);
      },
      showNoteInput() {
        this.inputNoteVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleNoteInputConfirm() {
        let inputNoteValue = this.inputNoteValue;
        if (inputNoteValue) {
          this.noteFormInfo.note_type.push(inputNoteValue);
        }
        this.inputNoteVisible = false;
        this.inputNoteValue = '';
      },
      // 笔记本类别添加
      handleNoteBookClose(tag) {
        this.noteBookFormInfo.noteBook_type.splice(this.noteBookFormInfo.noteBook_type.indexOf(tag), 1);
      },
      showNoteBookInput() {
        this.inputNoteBookVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleNoteBookInputConfirm() {
        let inputNoteBookValue = this.inputNoteBookValue;
        if (inputNoteBookValue) {
          this.noteBookFormInfo.noteBook_type.push(inputNoteBookValue);
        }
        this.inputNoteBookVisible = false;
        this.inputNoteBookValue = '';
      },
      async getAllNote() {
        // 展示所有笔记的逻辑
        const info = {}
        info.user_name = sessionStorage.getItem('username')
        info.note_parent = this.currentFile
        console.log(info, 123)
        const res = await fetch('http://localhost:8000/note/AllNote', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.noteForm = res.result.map(item => {
            item.note_type = JSON.parse(item.note_type)
            return item
          })
          console.log(this.noteForm)
        }
        else{
          console.log("所有笔记查找失败")
        }
      },
      async getAllCard() {
        // 展示所有卡片
        const info = {}
        info.user_name = sessionStorage.getItem('username')
        info.card_parent = this.currentFile
        console.log(info, 123)
        const res = await fetch('http://localhost:8000/note/AllCard', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.cardForm = res.result.map(item => {
            item.card_type = JSON.parse(item.card_type)
            return item
          })
          console.log(this.cardForm, "卡片列表")
        }
        else{
          console.log("所有卡片查找失败")
        }

      },
      async getAllNoteBook() {
        // 展示所有文件
        const info = {}
        info.user_name = sessionStorage.getItem('username')
        info.noteBook_parent = this.currentFile
        console.log(info, 123)
        const res = await fetch('http://localhost:8000/note/AllNoteBook', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          this.noteBookForm = res.result.map(item => {
            item.noteBook_type = JSON.parse(item.noteBook_type)
            return item
          })
          console.log(this.cardForm, "文件列表")
        }
        else{
          console.log("所有文件列表查询失败")
        }

      },
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    align-items: center;
    height: 80px;
    line-height: 80px;
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
  .title div .item:first-child {
    margin-left: 60px;
  }
  .item {
    margin-left: 20px;
  }
  .search {
    width: 300px;
    margin-left: 600px;
  }
</style>

