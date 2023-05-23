<template>
<div>
    <div class="dropdown" v-if="username">头像</div>
    <div class="dropdown" v-else>
        <router-link active-class="active" to='/login' >Login</router-link>
    </div>
    <el-menu class="el-menu-vertical-demo">
        <el-menu-item index="1" style="padding: 0px;" @click="changModel(1)">
            <!-- <router-link active-class="active" to='/home/note' style="text-decoration:none;"> -->
                <i class="el-icon-edit-outline" style="font-size: 30px; color:black;"></i>
                <div class="gname">笔记</div>
            <!-- </router-link> -->
        </el-menu-item>
        <el-menu-item index="2" style="padding: 0px;" @click="changModel(2)">
            <!-- <router-link active-class="active" to='/home/note' style="text-decoration:none;"> -->
                <i class="el-icon-date" style="font-size: 30px; color:black;"></i>
                <div class="gname">日历记事</div>  
            <!-- </router-link>                   -->
        </el-menu-item>
        <el-menu-item index="3" style="padding: 0px;" @click="changModel(3)">
            <!-- <router-link active-class="active" to='/home/diary' style="text-decoration:none;"> -->
                <i class="el-icon-notebook-1" style="font-size: 30px; color:black;"></i>
                <div class="gname">日记本</div>
            <!-- </router-link>    -->
        </el-menu-item>
        <el-menu-item index="4" style="padding: 0px;" @click="changModel(4)">
            <!-- <router-link active-class="active" to='/home/diary' style="text-decoration:none;"> -->
                <i class="el-icon-collection" style="font-size: 30px; color:black;"></i>
                <div class="gname">收藏夹</div>
            <!-- </router-link> -->
        </el-menu-item>
        <el-menu-item index="5" style="padding: 0px;" @click="changModel(5)">
            <!-- <router-link active-class="active" to='/home/diary' style="text-decoration:none;"> -->
                <i class="el-icon-document" style="font-size: 30px; color:black;"></i>
                <div class="gname">主题</div>
            <!-- </router-link> -->
        </el-menu-item>
        <el-menu-item index="6" style="padding: 0px;" @click="changModel(6)">
            <!-- <router-link active-class="active" to='/home/diary' style="text-decoration:none;"> -->
                <i class="el-icon-user" style="font-size: 30px; color:black;"></i>
                <div class="gname">个人</div>
            <!-- </router-link> -->
        </el-menu-item>
    </el-menu>
</div>
</template>
<script>
    export default {
        name: 'Aside',
        components: {
            
        },
        data() {
            return {
                model: 1,
            }
        },
        props: ['username'],
        methods: {
            changModel(a){
                this.model = a;
                this.$emit('getModel',this.model)
            }
        },
        mounted() {
            
        }
    }
</script>
<style scoped>
    .dropdown {
        padding: 0px;
        margin: 40px auto 0px;
        width: 40px;
        height: 40px;
        border: 1px black solid;
        border-radius: 5px;
    }
    .el-menu-vertical-demo{
        margin: 0px;
        padding: 0px;
    }
    .el-menu-item {
        margin: auto;
        padding: 0px;
        /* height: 50px; */
        line-height: 0px;
        margin-top: 30px;
        width: 40px;
        text-align: center;
    }
    /* .router-link:hover{
        color:#409eff;
    } */
    .gname {
        font-size: 12px;
        margin: 0px;
        padding: 0px;
        height: 20px;
        line-height: 20px;
        color:black;
    }
</style>