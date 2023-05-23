<template>
    <div class="search">
        <el-input
            placeholder="请输入内容"
            suffix-icon="el-icon-search"
            v-model="input">
        </el-input>
    </div>
</template>

<script>
    export default {
    data() {
        return {
        input: '',
        }
    },
    }
</script>
<style scoped>

</style>