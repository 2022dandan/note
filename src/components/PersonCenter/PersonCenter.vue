<template>
  <div>个人中心
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="昵称">
        <el-input v-model="form.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="form.sex"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="爱好">
        <el-input v-model="form.hobby"></el-input>
      </el-form-item>
      <el-form-item label="座右铭">
        <el-input v-model="form.motto"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
          <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
        }
      }
    },
    props: ['username'],
    mounted() {
      console.log(this.username);
      this.getUserInfo()
    },
    methods: {
      async getUserInfo() {
        const res = await fetch(`http://localhost:8000/users/getUserInfo?user_name=${this.username}`, {
          method: 'get',
          headers: {
            'Content-Type': 'application/json'
          },
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {         
          this.form = res.result
          console.log(res.result);
        }
      },
      async onSubmit(){
        const res = await fetch('http://localhost:8000/users/editUserInfo', {
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
          console.log('update', res)
        }
      }
    }
  }
</script>