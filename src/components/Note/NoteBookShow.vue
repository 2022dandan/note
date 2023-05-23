<template>
    <div>
        <el-card :body-style="{ padding: '0px' }" style="height:325px">
            <div style="padding: 14px;">
                <span>文件名称{{originForm.noteBook_name}}</span>
                <div class="note-edit" style="float: right;font-size: 20px; color:black;">
                    <i class="el-icon-edit" @click="dialogFormVisible = true"></i>
                    <el-popconfirm
                        title="确定要删除吗？"
                        @confirm="deleteNoteBook"
                        >
                        <i class="el-icon-delete" slot="reference" style="margin-left: 10px;"></i>
                    </el-popconfirm>
                </div>
            </div>
        </el-card>
        <!-- Form -->
        <el-dialog title="文件信息" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="文件名称" :label-width="formLabelWidth">
                <el-input v-model="form.noteBook_name" autocomplete="off" disabled></el-input>
                </el-form-item>
                <el-form-item label="文件类别" :label-width="formLabelWidth">
                <el-tag
                    :key="tag"
                    v-for="tag in form.noteBook_type"
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
                <el-form-item label="文件详情" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="form.noteBook_content"></el-input>
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
        name: 'NoteBookShow',
        props: ['originForm'],
        data() {
            return {
                dialogTableVisible: false,
                dialogFormVisible: false,
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
                this.form.noteBook_type.splice(this.form.noteBook_type.indexOf(tag), 1);
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
                this.form.noteBook_type.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            async putMassage(){
                this.dialogFormVisible = false
                console.log(this.form);
                const noteBookform = {}
                noteBookform.noteBook_content = this.form.noteBook_content
                noteBookform.noteBook_type = JSON.stringify(this.form.noteBook_type)
                noteBookform.noteBook_name = this.form.noteBook_name
                noteBookform.noteBook_parent = this.form.noteBook_parent
                noteBookform.user_name = this.form.user_name
                const res = await fetch('http://localhost:8000/note/reviseNoteBook', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noteBookform),
                mode: 'cors'
                })
                .then(res => res.json())
                .catch(e => {
                console.log('error', e)
                })
                if (res?.code === 0) {
                    this.$emit('getAllNoteBook')
                    console.log(res,'修改成功')
                }
                else{
                console.log("文件修改失败")
                }
            },
            async deleteNoteBook(){
                const deleteform = {}
                deleteform.noteBook_name = this.form.noteBook_name
                deleteform.noteBook_parent = this.form.noteBook_parent
                deleteform.user_name = this.form.user_name
                const res = await fetch('http://localhost:8000/note/deleteNoteBook', {
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
                this.$emit('getAllNoteBook')
                console.log(res,'删除成功')
                }
                else{
                console.log("文件删除失败")
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