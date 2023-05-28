<template>
    <div>
        <!-- 卡片展示 -->
      <el-card :body-style="{ padding: '0px' }" style="height:170px; position: relative;">
        <div style="padding: 14px; ">
          <div style="margin: 5px 0 0 15px"><span style="font-weight:bolder;font-size: larger;">卡片主题：</span><span>{{originForm.card_name}}</span> </div>
          <div style="margin: 5px 0 0 15px"><span style="font-weight:bolder;font-size: larger;">卡片时间：</span><span>{{originForm.card_time}}</span></div>
          <div style="margin: 5px 0 0 15px"><span style="font-weight:bolder;font-size: larger;">卡片详情：</span>
            <span style="
                word-wrap:break-word;
                width: calc(100% - 100px);
                overflow-wrap: break-word;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
                vertical-align: sub;"
            >{{originForm.card_content}}
            </span>
          </div>
          <div class="note-edit">
            <span @click="dialogTableVisible = true" class="icon">
            <svg  @click="dialogTableVisible = true" t="1684923169670" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="76144" width="32" height="32"><path d="M755.4048 954.624H269.1584c-107.264 0-194.2016-86.9376-194.2016-194.2016V274.1248c0-107.264 86.9376-194.2016 194.2016-194.2016h486.2464c107.264 0 194.2016 86.9376 194.2016 194.2016v486.2464c0.0512 107.264-86.9376 194.2528-194.2016 194.2528z" fill="#F6648C" p-id="76145"></path><path d="M700.416 216.8832H316.0576c-70.6048 0-128 62.4128-128 139.1104v322.6624c0 76.6976 57.3952 139.1104 128 139.1104h229.12c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6H316.0576c-42.3424 0-76.8-39.424-76.8-87.9104V355.9936c0-48.4864 34.4576-87.9104 76.8-87.9104h384.3584c42.3424 0 76.8 39.424 76.8 87.9104v131.584c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6v-131.584c0-76.6976-57.4464-139.1104-128-139.1104z" fill="#F7F8F8" p-id="76146"></path><path d="M640.8704 387.5328c0-14.1312-11.4688-25.6-25.6-25.6H349.5936c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h265.6768c14.1312 0 25.6-11.4176 25.6-25.6zM349.5936 507.0848c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h112.5888c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6H349.5936zM766.4128 712.3968c23.6032-28.3648 34.8672-64.2048 31.5904-101.0176-6.7072-76.3392-74.24-132.9664-150.528-126.2592-76.3392 6.7072-132.9664 74.24-126.2592 150.528 6.3488 72.192 67.1232 126.8224 138.2912 126.8224 4.0448 0 8.1408-0.1536 12.2368-0.5632 19.712-1.7408 38.4512-7.5264 55.2448-16.8448l42.2912 50.0224c5.0688 5.9904 12.288 9.0624 19.5584 9.0624 5.8368 0 11.7248-1.9968 16.4864-6.0416 10.8032-9.1136 12.1344-25.2928 3.0208-36.096l-41.9328-49.6128z m-99.1232-1.4848c-48.2304 4.1984-90.8288-31.5392-95.0784-79.7184-4.2496-48.1792 31.5392-90.8288 79.7184-95.0784 2.6112-0.2048 5.1712-0.3584 7.7312-0.3584 44.9536 0 83.3536 34.4576 87.3472 80.0768 2.048 23.3472-5.12 46.08-20.1728 64.0512a87.07072 87.07072 0 0 1-59.5456 31.0272z" fill="#F7F8F8" p-id="76147"></path>
            </svg>              
            </span>
            <span class="icon">
                <svg v-if="!form.card_collect" @click="handleCollect" t="1684923486479"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="81706" width="32" height="32"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z" fill="#f4ea2a" p-id="81707"></path>
                </svg>
                <svg v-else @click="handleCollect" t="1684923519179" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="81957" width="32" height="32"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z" fill="#f4ea2a" p-id="81958"></path>
                </svg>
              </span>
            <span @click="dialogFormVisible = true" class="icon">
            <svg   t="1684923368434"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="80608" width="32" height="32"><path d="M342.86 69.412s-54.368 20.798-154.31 120.74c-99.586 99.574-120.464 154.044-120.62 154.442-2.42 47.45-3.93 102.94-3.93 167.592 0 192.9 13.414 304.242 24.696 363.804 7.24 38.26 37.09 64.486 75.824 68.664 52.258 5.64 144.492 11.718 299.246 11.718 154.756 0 246.99-6.08 299.248-11.72 38.734-4.176 68.584-30.4 75.824-68.662 11.28-59.56 24.696-170.906 24.696-363.804 0-192.9-13.414-304.244-24.696-363.804-7.24-38.262-37.09-64.486-75.824-68.664C710.756 74.078 618.522 68 463.766 68c-45.528 0-85.638 0.526-120.906 1.412z" fill="#A871FF" p-id="80609"></path><path d="M206.666 428.05c0-16.306 12.268-29.768 28.544-30.596 25.686-1.306 70.572-2.788 142.124-2.788 71.552 0 116.436 1.48 142.122 2.788 16.278 0.828 28.544 14.29 28.544 30.596v18.568c0 16.304-12.266 29.766-28.544 30.594-25.686 1.308-70.57 2.788-142.122 2.788-71.552 0-116.438-1.48-142.124-2.788-16.276-0.828-28.544-14.29-28.544-30.594v-18.568zM206.666 618.716c0-16.306 12.268-29.916 28.524-30.96 18.708-1.202 45.674-2.422 78.144-2.422 32.468 0 59.434 1.22 78.144 2.42 16.256 1.046 28.522 14.656 28.522 30.96v18.57c0 16.306-12.266 29.916-28.522 30.96-18.71 1.202-45.676 2.422-78.144 2.422-32.47 0-59.436-1.22-78.144-2.42-16.256-1.046-28.524-14.656-28.524-30.96v-18.57z" fill="#FFFFFF" p-id="80610"></path><path d="M67.932 344.592c63.96 16.086 139.452 17.154 204.68-2.77 27.56-8.424 49.06-29.902 58.366-57.188 23.186-67.976 28.916-151.18 11.88-215.224 0 0-54.366 20.798-154.308 120.74-99.942 99.94-120.62 154.442-120.62 154.442z" fill="#CFAEFF" p-id="80611"></path><path d="M933.98 524.526c34.692-34.694 34.692-90.94 0-125.634l-68.202-68.194c-34.692-34.694-90.948-34.694-125.64 0L489.8 581.058a88.772 88.772 0 0 0-26.032 62.818v112.61c0 24.532 19.88 44.418 44.42 44.418h112.6a88.852 88.852 0 0 0 62.83-26.02l250.366-250.36z" fill="#FCBF28" p-id="80612"></path>
            </svg>
            </span>
            <el-popconfirm
            title="确定要删除吗？"
            @confirm="deleteCard"
            >
            <span slot="reference" class="icon">
            <svg   t="1684923790815"  viewBox="0 0 1105 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="97757" width="32" height="32"><path d="M0 1024v-132.825791h199.644432l-132.549538-147.225467C11.533554 682.240777 21.737641 582.289067 89.782154 520.995481l246.814595-222.1763L668.410872 0 1105.011128 484.892696 710.090511 840.430026l-56.338302 50.744183h408.819586v132.825791z m604.199366-132.825791l83.721859-75.399743-392.175356-435.547043-183.725366 165.475416C57.598705 594.685911 48.499629 673.676941 91.733189 721.710393l152.526068 169.463816z m108.411951-97.758953L320.470493 357.954542z" fill="#347ED5" p-id="97758"></path>
            </svg>
            </span>
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
    <!-- 卡片展示 -->
    <el-dialog title="卡片信息" :visible.sync="dialogTableVisible">
      <el-form :model="form">
        <el-form-item label="卡片主题" :label-width="formLabelWidth">
          <el-input v-model="form.card_name" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="卡片分类" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            v-for="tag in form.card_type"
          >
            {{tag}}
          </el-tag>
        </el-form-item>
        <el-form-item label="卡片详情" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.card_content" disabled></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    </div>
</template>
<script>
import { request } from '../../utils'
import lodash from 'lodash'
export default {
    name: 'NoteCard',
    props: ['originForm'],
    data() {
      return{
        dialogTableVisible: false,
        dialogFormVisible: false,
        isCollect:false,
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
      this.intit()
    },
    methods:{
      intit(){
        this.originForm.card_time = new Date(this.originForm.card_time).toLocaleDateString().replace(/\//g, '-')
        this.form = lodash.cloneDeep(this.originForm)
      },
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
      async handleCollect(){
        // console.log("11111111111")
        // this.isCollect = !this.isCollect
        const collectform = {}
        collectform.card_name = this.form.card_name
        collectform.id = this.form.id
        collectform.card_parent = this.form.card_parent
        collectform.user_name = this.form.user_name
        if(this.form.card_collect === 1){
          this.form.card_collect = 0
          collectform.card_collect = 0
        }
        else{
          this.form.card_collect = 1
          collectform.card_collect = 1
        }
        console.log(collectform)
        const res = await request('http://localhost:8000/note/collectNoteCard', 'post', collectform)
        // console.log(res,"sh/oucang")
        this.$emit('getAllCard')
        // this.intit()
        // console.log(this.isCollect,"收藏")
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
      margin-left: 30px;
      margin-top: 15px;
    }
    .note-edit .icon{
      margin-left: 20px;
    }
</style>