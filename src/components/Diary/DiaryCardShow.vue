<template>
    <div>
        <!-- 卡片展示 -->
        <el-card body-style="padding: 10px; font-size: 12px;display: flex;">
            <div style="width: 225px;font-size: 14px;">
                <div><span style="font-weight:bolder">日记时间：</span><span>{{copiedEditDiary.date}}</span> </div>
                <div><span style="font-weight:bolder">今日主题：</span><span>{{copiedEditDiary.name}}</span></div>
                <div><span style="font-weight:bolder">今日心情：</span><span>{{copiedEditDiary.feel}}</span></div>
                <div><span style="font-weight:bolder">今日天气：</span><span>{{copiedEditDiary.weather}}</span></div>
            </div>
            <div style="font-size: 24px;">
                <i class="el-icon-edit" @click="editedDiary(form)"></i>
                <el-popconfirm
                title="确定要删除吗？"
                @confirm="deleteDiary(copiedEditDiary.id)"
                >
                <i class="el-icon-delete" slot="reference" style="margin-left: 20px;"></i>
                </el-popconfirm>
            </div>
        </el-card>
        <!-- 修改卡片 -->
        <el-dialog title="修改事件" :visible.sync="dialogEditFormVisible">
            <el-form :model="copiedEditDiary">
                <el-form-item label="日记主题" :label-width="formLabelWidth">
                <el-input v-model="copiedEditDiary.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="日记时间" :label-width="formLabelWidth">
                    <div class="block">
                        <el-date-picker
                            v-model="copiedEditDiary.date"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </el-form-item>
                <el-form-item label="心情" :label-width="formLabelWidth">
                    <el-input v-model="copiedEditDiary.feel" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="天气" :label-width="formLabelWidth">
                <el-input v-model="copiedEditDiary.weather" autocomplete="off"></el-input>
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
        name:'DiaryCardShow',
        props:['diaryForm'],
        components:{},  
        data() {
            return {
                form:{},
                dialogEditFormVisible: false,
                copiedEditDiary:{},
                formLabelWidth: '120px',
            }
        },
        mounted(){
            this.copiedEditDiary = lodash.cloneDeep(this.diaryForm)
        },
        methods:{
            editedDiary(){
                this.dialogEditFormVisible = true;
            },
            async handleMassage(){
                this.dialogEditFormVisible = false
                const res = await request('http://localhost:8000/diary/reviceDiary', 'post', this.copiedEditDiary)
                return res.result
            },
            async deleteDiary(id){
                const res = await request('http://localhost:8000/diary/deleteDiary', 'post', { id: id})
                this.$emit('getAllDiary')
                return res.result
            },
            handleCancel(){
                this.dialogEditFormVisible = false
                this.copiedEditDiary = lodash.cloneDeep(this.diaryForm)
            },
        }
    }
</script>

<style scoped>

</style>
