<template>
    <div>
        <div class="container">
          <div class="welcome">
            <div ref="pinkbox" class="pinkbox">
              <!-- 注册 -->
              <div ref="signup" class="signup nodisplay">
                <h1>Register</h1>
                <form autocomplete="off">
                  <input v-model="registerInfo.user_name" type="text" placeholder="Username">
                  <input v-model="registerInfo.email" type="email" placeholder="Email">
                  <input v-model="registerInfo.password" type="password" placeholder="Password">
                  <input v-model="registerInfo.conPassword" type="password" placeholder="Confirm Password">
                  <button class="button submit" @click="handleregister">Create Account</button>
                </form>
              </div>
              <!-- 登录 -->
              <div ref="signin" class="signin" >
                <h1>Sign In</h1>
                <form class="more-padding" autocomplete="off">
                  <input v-model="userInfo.user_name" type="text" placeholder="Username">
                  <input v-model="userInfo.password" type="password" placeholder="Password">
                  <div class="checkbox">
                    <input v-model="userInfo.isRemember" type="checkbox" id="remember" /><label for="remember">Remember Me</label>
                  </div>
                  <button class="buttom sumbit" @click="handleLogin">
                    Login
                    <!-- <router-link active-class="active" to='/home'>Login</router-link> -->
                  </button>
                </form>
              </div>
            </div>
            <div class="leftbox">
              <h2 class="title"><span>BLOOM</span>&<br>BOUQUET</h2>
              <p class="desc">Pick your perfect <span>bouquet</span></p>
              <img class="flower smaller" src="https://hbimg.huabanimg.com/c09305167a883e60179a45374df73252304001359acca-W3qbYm_fw658/format/webp" />
              <p class="account">Have an account?</p>
              <button class="button" id="signin" @click="showSignIn()">Login</button>
            </div>
            <div class="rightbox">
              <h2 class="title"><span>BLOOM</span>&<br>BOUQUET</h2>
              <p class="desc">Pick your perfect <span>bouquet</span></p>
              <img class="flower" src="https://hbimg.huabanimg.com/b28be92c8198975a74ad656eba00b352c9b9e589819af-lDXUAS_fw658/format/webp" />
              <p class="account">Don't have an account?</p>
              <button class="button" id="signup" @click="showSignUp()">Sign Up</button>
            </div>
          </div>
        </div>   
    </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
        return {
          userInfo: {
            user_name: '',
            password: '',
            // isRemember: false,
          },
          registerInfo: {
            user_name:'',
            email:'',
            password:'',
            conPassword:'',
          }
        }
    },
    methods: {
      showSignUp() {
          this.$refs.pinkbox.style.transform = 'translateX(80%)'
          this.$refs.signin.classList.add('nodisplay')
          this.$refs.signup.classList.remove('nodisplay')
      },
      showSignIn() {
          this.$refs.pinkbox.style.transform = 'translateX(0%)'
          this.$refs.signup.classList.add('nodisplay')
          this.$refs.signin.classList.remove('nodisplay')
      },
      loginFlase() {
        this.$message.error('账号或密码错误，请重新登录');
        this.userInfo.user_name = '';
        this.userInfo.password = '';
      },
      registerFlase1(){
        this.$message.error('两次密码不相同，请重新输入');
      },
      registerFlase2(){
        this.$message.error('用户名存在，请重新输入');
      },
      async handleLogin() {
        // console.log(this.userInfo)
        const res = await fetch('http://localhost:8000/users/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.userInfo),
          mode: 'cors'
        })
        .then(res => res.json())
        .catch(e => {
          console.log('error', e)
        })
        if (res?.code === 0) {
          // localStorage.setItem('notebook_userToken', )
          sessionStorage.setItem('username', this.userInfo.user_name)
          this.$router.push({
            name: 'HomeUser',
            params:{
              user_name: this.userInfo.user_name,
              user_id: res.result.user_id
            }
          })
        }
        else {
          this.loginFlase();
        }
        // console.log(res)
      },
      async handleregister(){
        if(this.registerInfo.conPassword === this.registerInfo.password){
          const res = await fetch('http://localhost:8000/users/register', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.registerInfo),
            mode: 'cors'
          })
          .then(async res => res.json())
          if (res?.code === 0) {
            // 成功...
            this.$router.go(0);
          }
          else{
            this.registerFlase2();
            this.registerInfo.conPassword ='',
            this.registerInfo.password='',
            this.registerInfo.user_name='',
            this.registerInfo.email=''
          }
        }
        else{
          this.registerFlase1();
          console.log("俩次密码不一致重新输入")
          this.registerInfo.conPassword ='',
          this.registerInfo.password=''
        }
      },
    }
  }
</script>
<style scoped>
    /* .login {
        width: 604px;
        height: 400px;
        border:  1px black solid;
        position: absolute;
        top:0;
        bottom: 0;
        left:0;
        right: 0;
        margin: auto;
    }
    .login1 {
        width: 300px;
        height: 400px;
        border:  1px olive solid;
        display: inline-block;
    }
    .login2 {
        width: 300px;
        height: 400px;
        border:  1px olive solid;
        display: inline-block;
    }
    .cover {
        width: 300px;
        height: 400px;
        border:  1px olive solid;
        display: inline-block;
        position: absolute;
        top
    } */
    .container {
    margin: auto;
    width: 650px;
    height: 550px;
    position: relative;
    }

    .welcome {
    background: #f6f6f6;
    width: 650px;
    height: 415px;
    position: absolute;
    top: 25%;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    }

    .pinkbox {
    position: absolute;
    top: -10%;
    left: 5%;
    background: #eac7cc;
    width: 320px;
    height: 500px;
    border-radius: 5px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease-in-out;
    z-index: 2;
    }

    .nodisplay {
        display: none;
        transition: all 0.5s ease;
    }

    .leftbox, .rightbox {
    position: absolute;
    width: 50%;
    transition: 1s all ease;
    }

    .leftbox {
    left: -2%;
    }

    .rightbox {
    right: -2%;
    }

    /* 字体和按钮的样式 */
    h1 {
    font-family: "Open Sans", sans-serif;
    text-align: center;
    margin-top: 95px;
    text-transform: uppercase;
    color: #f6f6f6;
    font-size: 2em;
    letter-spacing: 8px;
    }

    .title {
    font-family: "Lora", serif;
    color: #8e9aaf;
    font-size: 1.8em;
    line-height: 1.1em;
    letter-spacing: 3px;
    text-align: center;
    font-weight: 300;
    margin-top: 20%;
    }

    .desc {
    margin-top: -8px;
    }

    .account {
    margin-top: 45%;
    font-size: 10px;
    }

    p {
    font-family: "Open Sans", sans-serif;
    font-size: 0.7em;
    letter-spacing: 2px;
    color: #8e9aaf;
    text-align: center;
    }

    span {
    color: #eac7cc;
    }

    .flower {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 45%;
    left: 27%;
    opacity: 0.8;
    }

    .smaller {
    width: 130px;
    height: 130px;
    top: 48%;
    left: 30%;
    opacity: 0.9;
    }

    button {
    padding: 12px;
    font-family: "Open Sans", sans-serif;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 11px;
    border-radius: 10px;
    margin: auto;
    outline: none;
    display: block;
    }

    button:hover {
    background: #eac7cc;
    color: #f6f6f6;
    transition: background-color 1s ease-out;
    }

    .button {
    margin-top: 3%;
    background: #f6f6f6;
    color: #ce7d88;
    border: solid 1px #eac7cc;
    }

    /* 表单样式 */
    form {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 7px;
    }

    .more-padding {
    padding-top: 35px;
    }

    .more-padding input {
    padding: 12px;
    }

    .more-padding .sumbit {
    margin-top: 45px;
    }

    .sumbit {
    margin-top: 25px;
    padding: 12px;
    border-color: #ce7d88;
    }

    .sumbit:hover {
    background: #cbc0d3;
    border-color: #bfb1c9;
    }

    input {
    background: #eac7cc;
    width: 65%;
    color: #ce7d88;
    border: none;
    border-bottom: 1px solid rgba(246, 246, 246, 0.5);
    padding: 9px;
    font-weight: 100;
    }

    input::placeholder {
    color: #f6f6f6;
    letter-spacing: 2px;
    font-size: 1.0em;
    font-weight: 100;
    }

    input:focus {
    color: #ce7d88;
    outline: none;
    border-bottom: 1.2px solid rgba(206, 125, 136, 0.7);
    font-size: 1.0em;
    transition: 0.8s all ease;
    }

    input:focus::placeholder {
    opacity: 0;
    }

    label {
    font-family: "Open Sans", sans-serif;
    color: #ce7d88;
    font-size: 0.8em;
    letter-spacing: 1px;
    }

    .checkbox {
    display: inline;
    white-space: nowrap;
    position: relative;
    left: -52px;
    top: 25px;
    }

    input[type=checkbox] {
    width: 15px;
    background: #ce7d88;
    }

    .checkbox input[type=checkbox]:checked + label {
    color: #ce7d88;
    transition: 0.5s all ease;
    }
</style>