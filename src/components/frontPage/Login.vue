<template>
  <transition>
    <div class="login_page" :style="fullHeightStyle">
        <div class="login_box">
          <div class="img"><router-link to="/"><img src="../../assets/login/Group.png" alt=""></router-link></div>
          <!--<form action="">-->
            <input type="text" placeholder="请输入您的邮箱" class="mail" ref="mail"/><br/>
            <input type="password" placeholder="请输入您的密码" class="pwd" ref="pwd"><br/>
            <div class="forgetPwd clearfix"><router-link to="/forgot-password" class="fr">忘记密码？</router-link></div>
            <div class="login_operate">
              <a href="javascript:;" @click="toLogin">登录</a>
            </div>
            <p class="noAccount">没有账号？<router-link to="/register">注册</router-link></p>
          <!--</form>-->
        </div>
    </div>
  </transition>
</template>


<script>
//  import userService from '../../http/service/user'
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'},
      }
    },
    components: {

    },
    mounted(){

    },
    methods:{
        toLogin(){
          var mail = this.$refs.mail.value;
          var pwd = this.$refs.pwd.value;
          if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail))){
              alert("邮箱格式输入错误");
          }else if(!(/^[A-Za-z0-9]{8,20}$/).test(pwd)){
              alert("请输入有效密码，至少8位字符");
          }
          /*userService.login(this.user).then(function(data){
            console.log(data);
          })*/
        }
    }


  }

</script>

<style scoped="scoped" lang="less">
  @import url("../../config/theme.less");

  .login_page{
    width:100%;
    /*height:100%;*/
    background:url("../../assets/login/bg.png") no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .login_box{
    padding:30px 30px;
    width:391px;

    /*position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    z-index:100;*/

    height:443px;
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
  .mail{
    margin-top:40px;
  }
  .forgetPwd{
    a{
      font-size:14px;
      color:#565656;
      line-height: 54px;
    }
  }
  .login_operate{
    width:100%;
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
  .noAccount{
    text-align: center;
    font-size: 14px;
    color: #565656;
    margin-top:20px;
    a{
      color:@color;
    }
  }

</style>
