<template>
    <el-container>
        <el-aside width="auto">
            <Aside @getModel="attendModel" :update="updateAvatar"></Aside><!-- 父子间组件通信 -->
        </el-aside>
        <el-main style="padding: 0; background: rgba(0, 0, 0, .02); height: 100vh; overflow: hidden;">
            <Note v-if="model === 1"></Note>
            <Calendar v-if="model === 2"></Calendar>
            <Diary v-if="model === 3"></Diary>
            <Collect :username="username" v-if="model === 4"></Collect>
            <Theme v-if="model === 5"></Theme>
            <PersonCenter v-if="model === 6" @udpateInfo="udpateInfo"></PersonCenter>
        </el-main>
    </el-container>
</template>

<script>
    import Aside from './Aside.vue'
    import Note from './Note/Note.vue'
    import PersonCenter from './PersonCenter/PersonCenter.vue'
    import Calendar from './Calendar/Calendar.vue'
    import Diary from './Diary/Diary.vue'
    import Collect from './Collect/Collect.vue'
    import Theme from './Theme.vue'
    
    export default {
        name: 'Home',
        components: {
            Aside,Note,PersonCenter,Calendar,Diary,Theme,Collect
        },
        data() {
            return {
                model: 1,
                username: '',
                userId:'',
                updateAvatar: ''
            }
        },
        mounted() {
            this.username = this.$route.params.user_name;
            this.userId = this.$route.params.user_id;
            console.log(this.username)
        },
        methods: {
            attendModel(a){
                this.model = a;
            },
            udpateInfo(avatar) {
                this.updateAvatar = avatar
            }
            
        }
    }
</script>


<style scoped>
.el-aside {
    border-right: 1px #e1e1e1 solid;
    height: 100vh;
}
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>