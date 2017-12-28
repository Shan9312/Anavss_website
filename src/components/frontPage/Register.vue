<template>
  <transition>
    <div class="register_page" :style="fullHeightStyle">
      <div class="register_box">
        <div class="img"><router-link to="/"><img src="../../assets/login/Group.png" alt=""></router-link></div>
        <!--<form action="">-->
        <input type="text" placeholder="请输入您的全名" class="userName"/><br/>
        <input type="text" placeholder="请输入您的邮箱" class="mail"/><br/>
        <input type="password" @input="p_len" v-model="password" placeholder="您的密码必须至少8个字符" class="pwd">
        <span :class="{ valid_password_length: valid_password_length , show_password_length: typed}" class="password_length">{{password_length}}</span>
        <div class="lnu_container">
          <p :class="{ lovercase_valid: contains_lovercase }">大小写字母</p>
          <p :class="{ number_valid: contains_number }">纯数字</p>
          <p :class="{ uppercase_valid: contains_uppercase }">特殊字符</p>
        </div>
        <div class="valid_password_container" :class="{show_valid_password_container : valid_password }">
          <svg width="100%" height="100%" viewBox="0 0 140 100">
            <path class="tick" :class="{checked: valid_password }"
                  d="M10,50 l25,40 l95,-70" />
          </svg>
        </div>

        <p class="terms">点击“注册”意味着你已经阅读并同意了<router-link to="/terms">使用条款</router-link>和<router-link to="/private">隐私政策</router-link></p>
        <div class="register_operate">
          <a href="javascript:;" style='background:#ccc'>注册</a>
        </div>
        <p class="noAccount">已有账号了？<router-link to="/login">登录</router-link></p>
        <!--</form>-->

        <div style='color:red; width:80%; font-size:18px; position:absolute; left:50%; top:140px; transform:translateX(-50%);'>目前产品处于内测期，暂不开放注册。</div>
      </div>
    </div>
  </transition>
</template>


<script>
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'},
        password: null,
        password_length: 0,
        typed: false,
        contains_lovercase: false,
        contains_number: false,
        contains_uppercase: false,
        valid_password_length: false,
        valid_password: false
      }
    },
    methods: {
      p_len: function () {
        this.password_length = this.password.length
        if (this.password_length > 7) {
          this.valid_password_length = true
        } else {
          this.valid_password_length = false
        }

        if (this.password_length > 0) {
          this.typed = true
        } else {
          this.typed = false
        }

        this.contains_lovercase = /[a-zA-Z]/.test(this.password)
        this.contains_number = /\d/.test(this.password)
        // eslint-disable-next-line
        this.contains_uppercase = /[\_\-\+\.\$\%\*\&\^]+/.test(this.password)

        // Check if the password is valid
        if (this.contains_lovercase === true && this.contains_number === true) {
          this.valid_password = false
          if (
            this.contains_uppercase === true &&
            this.valid_password_length === true
          ) { this.valid_password = true }
        } else {
          this.valid_password = false
        }
      }
    },
    components: {

    },
    mounted () {
    }

  }

</script>

<style scoped="scoped" lang="less">
  @import url("../../config/theme.less");
  @import url("../../config/pwdValidate/normalize.min.css");
  .register_page{
    width:100%;
    height:100%;
    background:url("../../assets/login/bg.png") no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .register_box{
    padding:30px 30px;
    width:391px;

     /*position: absolute;
     left:50%;
     top:50%;
     transform: translate(-50%,-50%);*/

    height:550px;
    margin:auto;
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;

    background: #fff;
    border-right:4px;
    box-shadow: 0 0 16px 0 rgba(0,0,0,0.5);
  }
  .img{
    text-align: center;
    a{
      display: inline-block;
      widht:124px;
      height:93px;
      img{
        width:100%;
        height:100%;
      }
    }

  }
  input{
    width:100%;
    font-size: 16px;
    height:54px;
    border:none;
    border-bottom:2px solid #F3F3F3;
    outline: none;
    color: #565656;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #aaa; opacity:1;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #aaa;opacity:1;
  }
  input:-ms-input-placeholder{
    color: #aaa;opacity:1;
  }
  input::-webkit-input-placeholder{
    color: #aaa;opacity:1;
  }
  .userName{
    margin-top:40px;
  }

  .register_operate{
    width:100%;
  margin-top:10px;
  a{
    display: inline-block;
    width:100%;
    line-height: 30px;
    text-align: center;
    background: @color;
    border-radius: 2px;
    font-size: 14px;
    color: #FFFFFF;
  }
  }
  p{
    text-align: center;
    font-size: 12px;
    color: #565656;
    margin-top:20px;
  a{
    color:@color;
  }
  }
  .noAccount{
    font-size:14px;
  }




  input[type="password"] {
    /*position: relative;*/
    -webkit-transition: all .1s;
    transition: all .1s;
  }

  .password_length {
    padding: 2px 10px;
    position: relative;
    top: -35px;
    left:90%;
    transform: translateX(-50%);
    /*-webkit-transform: translateY(-50%);*/
    /*transform: translateY(-50%);*/
    background: @color;
    /*color: rgba(71, 87, 98, 0.8);*/
    color: rgba(255, 255, 255, 0.9);
    border-radius: 4px;
    font-size: 13px;
    display: none;
    -webkit-transition: all .1s;
    transition: all .1s;
  }

  .valid_password_length {
    background: #00AD7C;
    color: rgba(255, 255, 255, 0.9);
  }

  .show_password_length {
    display: inline-block;
  }

  .lnu_container {
    display: block;
    margin: 10px auto;
    width: 320px;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .lnu_container p {
    width: 100px;
    height: auto;
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    border-radius: 2px;
    color: rgba(71, 87, 98, 0.8);
    background: -webkit-linear-gradient(left, #00AD7C 50%, #eee 50%);
    background: linear-gradient(to right, #00AD7C 50%, #eee 50%);
    background-size: 201% 100%;
    background-position: right;
    -webkit-transition: background .3s;
    transition: background .3s;
    margin-top:0;
  }

  .lovercase_valid,
  .number_valid,
  .uppercase_valid {
    background-position: left !important;
    color: rgba(255, 255, 255, 0.9) !important;
  }

  .valid_password_container {
    display: block;
    margin: 10px auto;
    border-radius: 4px;
    position: relative;
    background: #00AD7C;
    width: 20px;
    height: 20px;
    visibility: hidden;
    opacity: 0;
  }

  .show_valid_password_container {
    visibility: visible;
    opacity: 1;
  }

  .tick {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: white;
    stroke-width: 25;
    stroke-linecap: round;
    stroke-dasharray: 180;
    stroke-dashoffset: 180;
  }

  .checked {
    -webkit-animation: draw 0.5s ease forwards;
    animation: draw 0.5s ease forwards;
  }

  @-webkit-keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }


</style>
