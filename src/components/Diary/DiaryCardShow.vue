<template>
    <div>
        <!-- 卡片展示 -->
        <el-card class="diary-item" body-style="padding: 10px; font-size: 12px;display: flex; flex-direction: column; position: relative; padding: 14px 18px 18px;">
            <span class="timestamp">{{ new Date(copiedEditDiary.time).toLocaleString().replace(/\//g, '.').slice(0, -3) }}</span>
            <div class="body">
                <div class="title-row">
                    <h1 class="item-title">主题：{{ copiedEditDiary.name }}</h1>
                </div>
                <span class="content"> 心情：{{ copiedEditDiary.feel}}</span>
                <span class="content"> 天气：{{ copiedEditDiary.weather}}</span>
            </div>
            <div class="meta">
                <div class="actions">
                    <el-dropdown trigger="click" :hide-on-click="false" @command="handleEdit"  @click.native="e=>e.stopPropagation()">
                        <span class="el-dropdown-link">
                            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-menu" data-v-44a2c0a0=""><g opacity="0.61"><circle cx="5.5" cy="10" r="1.5" fill="#86909C"></circle><circle cx="10" cy="10" r="1.5" fill="#86909C"></circle><circle cx="14.5" cy="10" r="1.5" fill="#86909C"></circle></g></svg>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-edit" command="edit">编辑</el-dropdown-item>
                            <el-dropdown-item>
                                <el-popconfirm
                                    title="确定要删除吗？"
                                    @confirm="deleteDiary(copiedEditDiary.id)"
                                >
                                    <span slot="reference"><i class="el-icon-delete"></i>删除</span>
                                    
                                </el-popconfirm>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
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
            console.log(this.diaryForm)
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
            handleEdit(command) {
                if (command === 'edit') {
                    this.$emit('handleEdit', this.diaryForm)
                }
            }
        }
    }
</script>

<style scoped>

.diary-item .timestamp {
    font-size: 12px;
    line-height: 20px;
    color:#8a919f
}

.diary-item .body .title-row {
    display: flex;
    align-items: center;
    margin: 8px 0 0 0;
}

.diary-item .body .title-row .item-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    min-height: 24px;
    color: var(--jjext-color-font-1);
    padding: 0;
}

.diary-item .body .content {
    min-height: 24px;
    font-size: 14px;
    line-height: 24px;
    color: #8a919f;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
}

.diary-item .meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
    gap: 8px;
}

.diary-item .actions {
    width: 30px;
    height: 25px;
    display: flex;
    opacity: .61;
    border-radius: 2px;
    margin-left: auto;
    transition: all .15s linear;
    color: #c2c8d1;
    cursor: pointer;
}

.diary-item .actions:hover {
    background-color: #f7f8fa;
}

</style>
