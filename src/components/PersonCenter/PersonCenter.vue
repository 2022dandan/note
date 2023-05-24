<template>
  <div class="wrapper" style="width: 100%; height: 100%;">
    <div>
      <!-- <p>个人中心</p> -->
      <el-form ref="form" :model="form" label-width="60px">
        <el-form-item  class="avatar">
          <el-avatar :size="70" :src="form.avatar"></el-avatar>
          <el-upload
            class="avatar-uploader changeAvatar"
            action="http://localhost:8000/file/uploadFile/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
          >
            <div style="color: #fff;">更换头像</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="姓名">
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
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birthday" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
          <el-button @click="resetUserInfo">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: sessionStorage.getItem('username'),
        originInfo: {},
        form: {
        }
      }
    },
    mounted() {
      console.log(this.username)
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
          this.originInfo = {...res.result}
          this.form = {...res.result}
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
          this.$emit('udpateInfo', this.form.avatar)
        }
      },
      resetUserInfo() {
        this.form = this.originInfo
      },
      handleAvatarSuccess(res, file) {
        console.log('修改头像成功', res)
        this.form.avatar = res.data.url
        console.log(this.form)
      }
    }
  }
</script>

<style>

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .el-form {
  background: #fff;
  padding: 30px 30px 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.wrapper .el-form-item.avatar {
  position: relative;
  text-align: center;
  cursor: pointer;
}

.wrapper .el-form-item.avatar .el-form-item__content {
  margin-left: 0 !important;
  display: inline-block;
  width: 70px;
  height: 70px;
  line-height: 70px;
}

.changeAvatar {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  background: rgba(0,0,0,.6);
  font-size: 12px;
  color: #fff;
  line-height: 70px;
  text-align: center;
  opacity: 0;
  border-radius: 50%;
  transition: opacity .2s;
  user-select: none;
}

.wrapper .el-form-item.avatar .el-form-item__content:hover .changeAvatar {
  opacity: 1;
}


</style>