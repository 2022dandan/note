<template>
    <div class="edit">
        <el-container>
            <el-header>
              <span>
                {{form.note_name}}  
              </span>
            </el-header>
            <el-main class="edit-main" style="padding: 0;">
                <div class="edit-toll">
                  <Toolbar
                    style="display: inline-block;"
                    :editor="editor"
                    :defaultConfig="toolbarConfig"
                    :mode="mode"
                  />
                </div>
                <div class="article">
                    <div class="title">
                        <textarea rows="1" class="inputTitle" placeholder="请输入标题..." v-model="form.note_title"></textarea> 
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
                    <el-divider></el-divider>
                    <div class="publish-setting">
                      <div class="publish-title">
                        发布设置
                      </div>
                      <div style="box-sizing: border-box; margin: 0; min-width: 0; padding-bottom: 11px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex;">
                        <span class="add-cover">添加封面</span>
                        <div style="box-sizing: border-box; margin: 0; min-width: 0; -webkit-flex: 1; -ms-flex: 1; flex: 1;">
                          <div>
                            <div v-if="coverUrl" class="cover-wrapper" style="box-sizing: border-box; margin: 0px; min-width: 0px; position: relative; width: 150px; height: 100px;">
                              <img class="cover-img" :src="coverUrl" alt="封面图" width="100%" height="100%">
                                <div class="operate-cover">
                                  <span @click="handleChangeCover">替换</span>
                                  <span @click="handleDeleteCover">删除</span>
                                </div>
                              </div>
                            <el-upload
                              ref="upload"
                              v-show="!coverUrl"
                              action="http://localhost:8000/file/uploadFile/"
                              list-type="picture-card"
                              :show-file-list="false"
                              :on-success="handleAddCover"
                            >
                              <i class="el-icon-plus"></i>
                            </el-upload>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <el-button @click="handleSave">
                        保存
                      </el-button>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
    
</template>
<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { request } from '../../utils'

export default {
  data() {
    return {
      title:'',
      noteId:'',
      form: {},
      editor: null,
      html: '',
      toolbarConfig: { },
      editorConfig: { 
        placeholder: '请输入内容...',
        MENU_CONF: {
          uploadImage: {
            fieldName: 'file',
            server: 'http://localhost:8000/file/uploadFile',
            // customInsert(res, insertFn) {
            //   // 因为自定义插入导致onSuccess与onFailed回调函数不起作用,自己手动处理

            //   console.log(res, 'file')
            //   if (res.code === 200) {
                
            //   } else {
            //   }
            //   // 从 res 中找到 url alt href ，然后插入图片
            //   insertFn(res.data.url);
            // }
          },
          uploadVideo: {
            fieldName: 'file',
            server: 'http://localhost:8000/file/uploadFile',
          }
        }
      },
      mode: 'default', // or 'simple'
      coverUrl: ''
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
      this.form.note_cover = this.coverUrl
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
        this.$router.go(-1);
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
          this.coverUrl = res.result.note_cover
          console.log(this.form,'编辑信息')
        }
        else{
          console.log("所有笔记查找失败")
        }
    },
    async handleAddCover(res) {
      console.log(res)
      this.coverUrl = res.data.url
    },
    handleChangeCover() {
      this.$refs.upload.$children[0].handleClick()
    },
    handleDeleteCover() {
      this.coverUrl = ''
    },
  },
  
}

</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style>
  .edit{
    background-image: url('~@/assets/14.jpg');
    background-size: 100% 100%;
    overflow: auto;
  }
  .el-header {
    /* background-color: #fff; */
    font-size: 24px;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main.edit-main {
    /* background-color: #F6F6F6; */
    color: #333;
    text-align: center;
    /* height: 100vh; */
  }
  .edit-main .edit-toll {
    width: 100%;
    background-color: #fff;
  }
  .edit-main .article {
    width: 1000px;
    box-sizing: border-box;
    padding: 0 20px;
    /* height: 300px; */
    /* border: #333 solid 1px; */
    margin: auto;
    background: #fff;
  }
  .edit-main .title {
    height: 60px;
    width: 100%;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    height: auto;
    padding: 16px 0;
    position: relative;
    width: 100%;
  }

  .edit-main .content {
    border-top: 1px solid hsla(0,0%,7%,.08);
  }

  .edit-main .title textarea{
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
  .edit-main .inputTitle {
    font-size: 30px;
    font-weight: 900;
  }
  .edit-main .inputArticle {
    font-size: 20px;
    font-weight: 400;
  }

  .edit-main .el-divider--horizontal {
    margin: 0;
  }

  .edit-main .publish-setting {
    text-align: left;
  }

  .edit-main .publish-title {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    color: #444444;
    line-height: 61px;
    font-size: 17px;
    font-weight: 500;
  }

  .edit-main .add-cover {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    color: #444444;
    margin-right: 3px;
    display: flex;
    line-height: 38px;
    font-size: 15px;
    font-weight: 400;
    width: 110px;
    padding-left: 10px;
  }

  .edit-main .el-upload--picture-card {
    width: 150px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .edit-main .cover-wrapper {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    position: relative;
    width: 150px;
    height: 100px;
  }

  .edit-main .cover-wrapper:hover .operate-cover {
    display: flex;
  }

  .edit-main .cover-img {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    max-width: 100%;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 4px;
    object-fit: cover;
  }

  .edit-main .operate-cover {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    display: none;
    height: 32px;
    position: absolute;
    left: 50%;
    bottom: 8px;
    transform: translateX(-50%);
    z-index: 1;
    background: rgba(18, 18, 18, 0.75);
    border-radius: 4px;
    border: 0px;
    align-items: center;
    transition: all .3s;
    cursor: pointer;
  }

  .edit-main .operate-cover span {
    color: rgb(255, 255, 255);
    font-size: 13px;
    border-radius: 4px;
    height: 32px;
    width: 47px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 0px;
    padding: 0px;
  }


</style>
