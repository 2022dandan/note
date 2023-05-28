<template>
    <div class="background">
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
                    <input v-model="isRemember" type="checkbox" id="remember" /><label for="remember">记住我</label>
                  </div>
                  <button type="button" class="buttom sumbit" @click="handleLogin">
                    Login
                    <!-- <router-link active-class="active" to='/home'>Login</router-link> -->
                  </button>
                </form>
              </div>
            </div>
            <div class="leftbox">
              <!-- <h2 class="title"><span>BLOOM</span>&<br>BOUQUET</h2>
              <p class="desc">Pick your perfect <span>bouquet</span></p>
              <img class="flower smaller" src="https://hbimg.huabanimg.com/c09305167a883e60179a45374df73252304001359acca-W3qbYm_fw658/format/webp" />
              <p class="account">Have an account?</p> -->
              <div class="book" style="display: inline-block;     margin-left: 60px; margin-top: 81px;">
                <svg t="1685082208120" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9056" width="200" height="200"><path d="M81.92 174.08a81.92 81.92 0 0 0-81.92 81.92v563.2a81.92 81.92 0 0 0 81.92 81.92h274.87232a225.28 225.28 0 0 1 136.8576 46.336c5.29408 4.0448 11.69408 6.4512 18.35008 6.4512 6.656 0 13.056-2.4064 18.35008-6.4512A225.28 225.28 0 0 1 667.20768 901.12H942.08a81.92 81.92 0 0 0 81.92-81.92V256a81.92 81.92 0 0 0-81.92-81.92H667.20768a225.28 225.28 0 0 0-144.896 52.77696L512 235.52l-10.31168-8.66304A225.28 225.28 0 0 0 356.79232 174.08H81.92z" fill="#08979C" p-id="9057"></path><path d="M81.92 102.4a81.92 81.92 0 0 0-81.92 81.92v563.2a81.92 81.92 0 0 0 81.92 81.92h274.87232a225.28 225.28 0 0 1 136.8576 46.336c5.29408 4.0448 11.69408 6.4512 18.35008 6.4512 6.656 0 13.056-2.4064 18.35008-6.4512A225.28 225.28 0 0 1 667.20768 829.44H942.08a81.92 81.92 0 0 0 81.92-81.92V184.32a81.92 81.92 0 0 0-81.92-81.92H667.20768a225.28 225.28 0 0 0-144.896 52.7872L512 163.84l-10.31168-8.6528A225.28 225.28 0 0 0 356.79232 102.4H81.92z" fill="#36CFC9" p-id="9058"></path><path d="M665.6 286.72a30.72 30.72 0 0 1 30.72-30.72h204.8a30.72 30.72 0 1 1 0 61.44H696.32a30.72 30.72 0 0 1-30.72-30.72zM665.6 471.04a30.72 30.72 0 0 1 30.72-30.72h204.8a30.72 30.72 0 1 1 0 61.44H696.32a30.72 30.72 0 0 1-30.72-30.72zM665.6 655.36a30.72 30.72 0 0 1 30.72-30.72h204.8a30.72 30.72 0 1 1 0 61.44H696.32a30.72 30.72 0 0 1-30.72-30.72zM92.16 256a30.72 30.72 0 0 1 30.72-30.72h204.8a30.72 30.72 0 1 1 0 61.44H122.88a30.72 30.72 0 0 1-30.72-30.72zM92.16 440.32a30.72 30.72 0 0 1 30.72-30.72h204.8a30.72 30.72 0 1 1 0 61.44H122.88a30.72 30.72 0 0 1-30.72-30.72zM92.16 624.64a30.72 30.72 0 0 1 30.72-30.72h204.8a30.72 30.72 0 1 1 0 61.44H122.88a30.72 30.72 0 0 1-30.72-30.72z" fill="#B5F5EC" p-id="9059"></path>
                </svg>
              </div>
              <button class="button" id="signin" @click="showSignIn()">Login</button>
            </div>
            <div class="rightbox">
              <!-- <h2 class="title"><span>BLOOM</span>&<br>BOUQUET</h2>
              <p class="desc">Pick your perfect <span>bouquet</span></p>
              <img class="flower" src="https://hbimg.huabanimg.com/b28be92c8198975a74ad656eba00b352c9b9e589819af-lDXUAS_fw658/format/webp" />
              <p class="account">Don't have an account?</p> -->
              <div class="book" style="display: inline-block;     margin-left: 60px; margin-top: 81px;">
<svg t="1685082630422" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11221" width="200" height="200"><path d="M815.264 801.472l-17.728 17.728c-19.68 19.68-45.28 29.536-72.864 29.536h-51.2c-47.264 0-98.464-37.408-98.464-102.4v-49.216c0-39.392 17.728-63.008 27.584-76.8l212.672-216.608c5.92-5.92 11.808-19.68 11.808-27.584V212.672c0-51.2-43.328-94.528-94.528-94.528H228.416c-51.2 0-94.528 47.264-94.528 94.528h-31.52c-35.456 0-63.008 29.536-63.008 64.992s27.584 63.008 63.008 63.008h31.52v128h-31.52c-35.456 0-63.008 27.584-63.008 63.008s27.584 63.008 63.008 63.008h31.52v128h-31.52c-35.456 0-63.008 29.536-63.008 63.008 0 35.456 27.584 63.008 63.008 63.008h31.52c0 63.008 43.328 94.528 94.528 94.528h504.128c51.2 0 94.528-43.328 94.528-94.528V807.36c0-9.856-3.936-11.808-11.808-5.92z m-161.472-445.056a31.104 31.104 0 0 1-31.52 31.52H307.2a31.104 31.104 0 0 1-31.52-31.52v-31.52c0-17.728 13.792-31.52 31.52-31.52h315.072c17.728 0 31.52 13.792 31.52 31.52v31.52zM512 738.464a31.104 31.104 0 0 1-31.52 31.52H307.2a31.104 31.104 0 0 1-31.52-31.52v-31.52c0-17.728 13.792-31.52 31.52-31.52h173.28c17.728 0 31.52 13.792 31.52 31.52v31.52z m47.264-191.008a31.104 31.104 0 0 1-31.52 31.52H307.2a31.104 31.104 0 0 1-31.52-31.52v-31.52c0-17.728 13.792-31.52 31.52-31.52h220.544c17.728 0 31.52 13.792 31.52 31.52v31.52zM974.784 460.8l-19.68-19.68a30.912 30.912 0 0 0-43.328 0l-240.256 248.128c-1.984 0-1.984 3.936-1.984 3.936v53.184c0 3.936 0 7.872 3.936 7.872h51.2c1.984 0 3.936-1.984 5.92-1.984l242.208-244.192c15.744-13.792 15.744-33.472 1.984-47.264z" fill="#d2cc55" p-id="11222"></path></svg>
              </div>
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
          },
          isRemember: false
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
          console.log( res.result.rootNoteBook,"root")
          let objStr = JSON.stringify(res.result.rootNoteBook)
          sessionStorage.setItem('rootNoteBook', [objStr])
          sessionStorage.setItem('username', this.userInfo.user_name)
          // console.log( JSON.parse(sessionStorage.getItem('rootNoteBook')),'kkkk')
          localStorage.setItem('userToken', res.result.token)
          if (this.isRemember) {
          }
          const redirect = this.$route.query.redirect || '/home'
          this.$router.push({
            path: redirect,
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
          console.log("两次密码不一致重新输入")
          this.registerInfo.conPassword ='',
          this.registerInfo.password=''
        }
      },
    }
  }
</script>
<style scoped>
  .background {
    height: 100vh;
    background-image: url('~@/assets/10.jpg');
    background-size: 100% 100%;
  }
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
    background: #3db1b0;
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
    background: #3db1b0;
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
    left: -80px;
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

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  input:-internal-autofill-selected {
    -webkit-transition-delay: 99999s !important;
    -webkit-transition: color 99999s ease-out, background-color 99999s ease-out;
  }
  
  button {
    cursor: pointer;
  }
</style>