<template>
    <div>
        <el-container>
            <el-header>{{form.note_name}}</el-header>
            <el-main style="padding: 0;">
                <div class="editToll">
                  <Toolbar
                    style="border-bottom: 1px solid #ccc"
                    :editor="editor"
                    :defaultConfig="toolbarConfig"
                    :mode="mode"
                  />
                </div>
                <div class="article">
                    <div class="title">
                        <textarea rows="1" class="inputTitle" placeholder="请输入标题" v-model="form.note_title"></textarea> 
                    </div>
                    <div class="content" style="text-align: start;">
                        <!-- <textarea rows="1" class="inputArticle" placeholder="输入内容" style="height: 300px; width: 950px;">
                        </textarea> -->
                        <Editor
                          style="min-height: calc(100vh - 190px);"
                          v-model="form.note_details"
                          :defaultConfig="editorConfig"
                          :mode="mode"
                          @onCreated="onCreated"
                        />
                    </div>
                    <div>
                      <el-button @click="handleSave">
                        保存按钮
                      </el-button>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
    
</template>
<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
  data() {
    return {
      title:'',
      noteId:'',
      form: {},
      editor: null,
      html: '',
      toolbarConfig: { },
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'default', // or 'simple'
    }
  },
  components: { Editor, Toolbar },
  mounted() {
    this.getNote()
    // 模拟 ajax 请求，异步渲染编辑器
    // setTimeout(() => {
    //   this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
    // }, 1500)
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  },
  created(){
    const id  = this.$route.params.id
    this.noteId = id
    console.log('获取ID',this.noteId);
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    async handleSave() {
      // console.log('noteinfo',noteinfo)
      const res = await fetch('http://localhost:8000/note/editNote', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form),
        mode: 'cors'
      })
      .then(res => res.json())
      .catch(e => {
        console.log('error', e)
      })
      if (res?.code === 0) {
        console.log(res,'编辑成功')
      }
      else{
        console.log("编辑失败")
      }
    },
    // 获取笔记信息
    async getNote() {
        // 查找指定笔记的逻辑
        const info = {}
        info.user_name = sessionStorage.getItem('username')
        info.id = this.noteId
        console.log(info, 123)
        const res = await fetch('http://localhost:8000/note/viewNote', {
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
          this.form = res.result
          console.log(this.form,'编辑信息')
        }
        else{
          console.log("所有笔记查找失败")
        }
    },
  },
  
}


</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style scoped>
    .el-header {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #F6F6F6;
    color: #333;
    /* text-align: center; */
    /* height: 100vh; */
  }
  .editToll{
    height: 60px;
    border: #333 solid 1px;
    margin-bottom: 30px;
  }
  .article {
    width: 1000px;
    box-sizing: border-box;
    padding: 0 20px;
    /* height: 300px; */
    border: #333 solid 1px;
    margin: auto;
    background: #fff;
  }
  .title {
    height: 60px;
    width: 100%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    height: auto;
    margin: 16px 0;
    padding: 0;
    position: relative;
    width: 100%;
  }
  .content {
    border-top: 1px solid hsla(0,0%,7%,.08);
  }
  .title textarea{
    width: 100%;
    outline: 0;
    resize: none;
    border: 0;
    display: block;
    font-size: 32px;
    font-synthesis: style;
    font-weight: 600;
    height: 44px;
    line-height: 1.4;
    min-height: 44px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .inputTitle {
    font-size: 30px;
    font-weight: 900;
  }
  .inputArticle {
    font-size: 20px;
    font-weight: 400;
  }
</style>
