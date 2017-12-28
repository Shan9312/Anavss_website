<template>
  <header class="clearfix bounce" id="top">
    <div class='z-wrapper'>
      <div class="fl logo">
      <router-link to="/">
        <img class="logo-img" src="../../../assets/home/anavass-logo.png" alt=""/>
      </router-link>
    </div>
    <ul class="nav">
      <li><router-link to="/" :class="{'active':activeState == 'home'}">首页</router-link>
      <!-- <li><a href="/platform" :class="{'active':activeState == 'platform'}">平台</a> -->
      </li>
      <!-- <li><a href="javascript:;" :class="{'active':activeStateSecond == 'byFunction'}">解决方案</a>
        <div class="nav_second " v-show="navState" >
          <div class="center clearfix">
            <ul class="fl">
              <h3>按功能</h3>
              <li><router-link :to="{name:'Budget'}" :class="{'active':activeState == 'budget'}">规划与预算</router-link></li>
              <li><router-link :to="{name:'Simulation'}" :class="{'active':activeState == 'simulation'}">模拟与预测</router-link></li>
              <li><router-link :to="{name:'Analysis'}" :class="{'active':activeState == 'analysis'}">分析与报告</router-link></li>
            </ul>
            <ul class="fl">
              <h3>按行业</h3>
              <li><router-link :to="{name:'Software'}" :class="{'active':activeState == 'software'}">软件行业</router-link></li>
              <li><router-link to="" :class="{'active':activeState == '2'}">零售行业</router-link></li>
              <li><router-link to="" :class="{'active':activeState == '3'}">金融服务和保险行业</router-link></li>
              <li><router-link to="" :class="{'active':activeState == '4'}">消费品行业</router-link></li>
              <li><router-link to="" :class="{'active':activeState == '5'}">医药健康行业</router-link></li>
              <li><router-link to="" :class="{'active':activeState == '6'}">酒店和娱乐行业</router-link></li>
              <li><router-link to="" :class="{'active':activeState == '7'}">生命科学行业</router-link></li>
              <li><router-link to="" :class="{'active':activeState == '8'}">航空交通行业</router-link></li>
            </ul>
            <ul class="fl">
              <h3>按职能</h3>
              <li><router-link :to="{name:''}" :class="{'active':activeState == 'finance'}">财务</router-link></li>
              <li><router-link to="" :class="{'active':activeState == ''}">市场营销</router-link></li>
              <li><router-link to="" :class="{'active':activeState == ''}">运营</router-link></li>
            </ul>
            <ul class="fl">
              <h3>按数据源</h3>
              <li><router-link :to="{name:'Integration'}" :class="{'active':activeState == 'integration'}">数据集成与链接</router-link></li>
            </ul>
          </div>
        </div>
      </li> -->
      <li><router-link to="/price" :class="{'active':activeState == 'price'}">价格</router-link></li>
      <li><router-link to="/recruit" :class="{'active':activeState == 'recruit'}">招聘</router-link></li>
      <li><router-link to="/about" :class="{'active':activeState == 'about'}">关于我们</router-link></li>
      <li><router-link to="/contact" :class="{'active':activeState == 'contact'}">联系我们</router-link></li>
       <li><router-link to="/help" :class="{'active':activeState == 'help'}">帮助</router-link></li>
    </ul>
    <div class="fr right-operate">
      <!--<router-link class="login" to="/login" >登录</router-link>
      <router-link class="register" to="/register" >免费注册</router-link>-->
      <div class='signIn'>
        <a class="login">登录</a>
        <div class='domain'>
          <p class='domain-title'>请输入二级域名进行登录或注册</p>
          <p class='domain-wrapper'>
            <input type="text" v-model='domain' class='domain-input' @change='handleDomainChange'><span class='domain-span'>.anavss.com</span>
          </p>
          <p style='text-align:center;line-height:30px;color:#FF9922;height:30px' v-text='tips'></p>
          <div class='btn-group'>
            <a class='submit' :href='loginURL' :class='{disabled:!domain}'>登录</a>
          </div>
        </div>
      </div>
      <!-- <a class="register" href="http://www.anavss.com/anavss-test/pc/register" >注册</a> -->
      <!-- <a class="login" href='/login' >登录</a>
      <a class="register" href="/register" >免费注册</a> -->
      <a href="javascript:;" class="btn" @click="showList"><i class="iconfont icon-liebiao"></i></a>
    </div>

    <transition name="slide-fade-enter">
      <div class="hideList bounce" v-show="hideList" transition="slide-fade-enter">
        <ul>
          <li><router-link to="/" :class="{'active':activeState == 'home'}">首页</router-link>
          <!-- <li><a href="/platform" :class="{'active':activeState == 'platform'}">平台</a> -->

          </li>
          <!-- <li><a href="javascript:;" :class="{'active':activeStateSecond == 'byFunction'}">解决方案</a>
            <div class="nav_second" v-show="navState">
              <ul>
                <h3>按功能</h3>
                <li><router-link :to="{name:'Budget'}" :class="{'active':activeState == 'budget'}">规划与预算</router-link></li>
                <li><router-link :to="{name:'Simulation'}" :class="{'active':activeState == 'simulation'}">模拟与预测</router-link></li>
                <li><router-link :to="{name:'Analysis'}" :class="{'active':activeState == 'analysis'}">分析与报告</router-link></li>
              </ul>
              <ul>
                <h3>按行业</h3>
                <li><router-link :to="{name:'Software'}" :class="{'active':activeState == 'software'}">软件行业</router-link></li>
                <li><router-link to="" :class="{'active':activeState == '2'}">零售行业</router-link></li>
                <li><router-link to="" :class="{'active':activeState == '3'}">金融服务和保险行业</router-link></li>
                <li><router-link to="" :class="{'active':activeState == '4'}">消费品行业</router-link></li>
                <li><router-link to="" :class="{'active':activeState == '5'}">医药健康行业</router-link></li>
                <li><router-link to="" :class="{'active':activeState == '6'}">酒店和娱乐行业</router-link></li>
                <li><router-link to="" :class="{'active':activeState == '7'}">生命科学行业</router-link></li>
                <li><router-link to="" :class="{'active':activeState == '8'}">航空交通行业</router-link></li>
              </ul>
              <ul>
                <h3>按职能</h3>
                <li><router-link :to="{name:''}" :class="{'active':activeState == 'finance'}">财务</router-link></li>
                <li><router-link to="" :class="{'active':activeState == ''}">市场营销</router-link></li>
                <li><router-link to="" :class="{'active':activeState == ''}">运营</router-link></li>
              </ul>
              <ul>
                <h3>按数据源</h3>
                <li><router-link :to="{name:'Integration'}" :class="{'active':activeState == 'integration'}">数据集成与链接</router-link></li>
              </ul>
            </div>
          </li> -->
          <li><router-link to="/price" :class="{'active':activeState == 'price'}">价格</router-link></li>
          <li><router-link to="/recruit" :class="{'active':activeState == 'recruit'}">招聘</router-link></li>
          <li><router-link to="/about" :class="{'active':activeState == 'about'}">关于我们</router-link></li>
          <li><router-link to="/contact" :class="{'active':activeState == 'contact'}">联系我们</router-link></li>
          <li><router-link to="/help" :class="{'active':activeState == 'help'}">帮助</router-link></li>
        </ul>
      </div>
    </transition>
    </div>
    
  </header>
</template>


<script>
  export default {
    data () {
      return {
        fullWidthStyle: {'min-width': document.documentElement.clientWidth + 'px'},
        navState: true, // 二级导航存在与否
        activeState: false, // 是否显示active的class名
        activeStateSecond: false, // 当二级导航有active名时，相应一级导航也要有active名
        hideList: false, // 隐藏的列表
        domain: '',
        tips: '',
        loginURL: false
      }
    },
    mounted () {
      var value = window.location.pathname
      /* console.log(window.location.pathname);
      value = value.split('/')[1]; */
      //      console.log(value);
      switch (value) {
        case '/':
        case '/#':
          this.activeState = 'home'
          break
        /* case '/product':
            {this.activeState = 'product'}
             break; */
        case '/platform':
          this.activeState = 'platform'
          break
        case '/byFunction/budget':
          this.activeState = 'budget'; this.activeStateSecond = 'byFunction'
          break
        case '/byFunction/simulation':
          this.activeState = 'simulation'; this.activeStateSecond = 'byFunction'
          break
        case '/byFunction/analysis':
          this.activeState = 'analysis'; this.activeStateSecond = 'byFunction'
          break
        case '/byIndustry/software':
          this.activeState = 'software'; this.activeStateSecond = 'byFunction'
          break
        case '/bySection/finance':
          this.activeState = 'finance'; this.activeStateSecond = 'byFunction'
          break
        case '/byData/integration':
          this.activeState = 'integration'; this.activeStateSecond = 'byFunction'
          break
        case '/price':
          this.activeState = 'price'
          break
        case '/recruit':
          this.activeState = 'recruit'
          break
        case '/about':
          this.activeState = 'about'
          break
        case '/contact':
          this.activeState = 'contact'
          break
        case '/help':
          this.activeState = 'help'
          break
      }
    },
    methods: {
      showList () {
        this.hideList = !this.hideList
      },
      handleDomainChange () {
        if (!this.domain) {
          this.tips = '请输入二级域名'
          this.loginURL = false
          return
        }
        this.$http.get(`http://www.call.anavss.com/api/auth/available/${this.domain}`).then(res => {
          if (res.body.code === 'SUCCESS') {
            if (res.body.data[0]) {
              this.tips = '此域名可用，请点击下侧按钮注册'
            } else {
              this.tips = '此域名已被注册，请直接登录'
            }
            this.loginURL = `http://${this.domain}.anavss.com/pc/login`
          }
        })
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import url("../../../config/theme.less");


  header{
    width:100%;
    height:60px;
    line-height: 60px;
    background: #fff;
    position: fixed;
    z-index: 900;
    transition:1s;
    .z-wrapper{
      width:1200px;
      height: 60px;
      margin:0 auto;
    }
    .disabled{
      cursor: not-allowed!important;
    }
    .signIn{
      // border:1px solid red;
      position: relative;
      .domain{
        display: none;
        position: absolute;
        left:-95px;
        width:300px;
        height:200px;
        background:rgba(30,30,30,0.8);
        border-radius: 0 0 5px 5px;
        .domain-title{
          color:#fff;
          text-align: center;
        }
        .domain-wrapper{
          display: flex;
          justify-content: center;
        }
        .btn-group{
          text-align: center;
          line-height: 30px;
          .submit{
            background:#FF9922;
            border:none;
            padding:8px 30px;
            color:#fff;
            border-radius: 5px;
            cursor: pointer;
          }
        }
        .domain-input{
          height: 40px;
          border:none;
          width:45%;
          border-radius:5px 0 0 5px;
          text-align: right;
          padding:0 10px;
          color:#757575;
          font-size: 16px;
        }
        .domain-span{
          display: inline-block;
          background:#555;
          color:#888;
          height:40px;
          line-height: 40px;
          padding-left:20px;
          font-size: 16px;
          font-weight: bold;
          width:45%;
          border-radius: 0 5px 5px 0;
        }
      }
      &:hover{
        .domain{
          display: block;
        }
      }
    }
  }
  .logo{
    width:130px;
    height:100%;
    margin-top:14px;
    margin-left:10px;
  a{
    display: inline-block;
    height:26px;
  img{
    // width:100%;
    // height:100%;
  }
  }
  }
  .nav{
    width:700px;
    height:100%;
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    /*-webkit-justify-content:space-between;
    justify-content:space-between;
    -moz-box-pack:space-between;
    -webkit--moz-box-pack:space-between;
    box-pack:space-between;
    justify-content: space-between;*/
    -webkit-justify-content:center;
    justify-content:center;
    -moz-box-pack:center;
    -webkit--moz-box-pack:center;
    box-pack:center;
    justify-content: center;

    position:absolute;
    left:50%;
     transform:translateX(-50%);
    li{
      position:relative;
      &:hover{
         background-color: #fff;
       }
      a{
        display: inline;
        /*line-height:60px;*/
        padding:4px 20px;
        font-family: @Microsoft;
        font-size: 16px;
        color: #000;
        border:1px solid transparent;
        border-radius: 8px;
        box-sizing: border-box;
        &:hover{
            color:@color;
            /*border-bottom: 2px @color solid;*/
         }
         &.active{
            color:@color;
            /*border-bottom: 2px @color solid;*/
            border:1px solid @color;
          }
      }
      &:hover .nav_second{
        display: block;
      }
    }


    .nav_second{
      display:none;
      width:620px;
      height:auto;
      padding-bottom:5px;
      position:absolute;
      background: rgba(255,255,255,1);
      left:0;
      top:@th;
      h3{
        font-size: 16px;
        color: #101010;
      }
      ul{
        width:150px;
        padding:10px;
        font-size: 16px;
        &:nth-of-type(1){
            margin-left:20px;
         }
      a{
          padding:0;
          font-size:14px;
          margin-top:5px;
          width:100%;
          color: #565656;
          &:hover{
             color:@color;
             /*border-bottom: 2px @color solid;*/
           }
          &.active{
             color:@color;
             /*border-bottom: 2px @color solid;*/
           }
        }
      }
    }

  }

  @media only screen and(max-width: 1280px) {
    .nav{
      li{
        a{
          font-size:14px;
          // padding:18.5px 10px;
        }
      }
    }
  }


  .right-operate{
    margin-right:20px;
    height:60px;
  .btn{
    display:none;
  }
  .iconfont{

    font-size:24px;
    margin-left:20px;
    // color:@ivu-color-picker-alpha-container;
  }
  .register{
  background-image: @lG; /* @lG : linear-gradient*/
  border-radius: 8px;
  font-family: @Microsoft;
  font-size: 16px;
  color: #FFFFFF;
  line-height:60px;
  padding:5px 25px;
  border-radius: 10px;
  }
  .login{
    margin-right:20px;
    font-family: @Microsoft;
    font-size: 16px;
    color: #808080;
    padding:4px 25px;
    border-radius: 10px;
    border:1px solid #b3b3b3;
    line-height: 60px;
    box-sizing: border-box;
    &:hover{
      color:@color;
    }
  }
  }

  /*显示隐藏的列表   ----开始*/
  .hideList{
    width:100%;
    height:400px;
    overflow-y: auto;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
    position:absolute;
    top:-100%;
    left:-100%;
    transition:0.3s;
    transform:translate(100%,@th*2);
    a:hover{
         color:@color;
       }
    a.active{
     color:@color;
    }
    &>ul{
      width:100%;
      padding:10px 20px;
      background:rgba(255,255,255,1);
      &>li{
        width:100%;
        a{
          display: inline-block;
          width:100%;
          color:#000;
          font-size:0.16rem;
        }
      }
    }
    .nav_second{
      padding-left:20px;
      h3{
        font-size:0.14rem;
      }
      li{
        /*margin-top:8px;*/
      }
      a{
        color:#565656;
        font-size:0.14rem;
      }
      a:hover{
        color:@color;
        /*border-bottom: 2px @color solid;*/
      }
      a.active{
        color:@color;
        /*border-bottom: 2px @color solid;*/
      }
    }
  }
  /*显示隐藏的列表   ----结束*/



  @media only screen and(max-width: 866px) {
      .nav{
        display: none;
      }
    .right-operate{
      .btn{
        display:inline-block;
      }
    }

  }
  @media only screen and(max-width: 376px) {
    .logo{
    width:120px;
  }
    .right-operate{
    margin-right:10px;
    .login{
    margin-right:5px;
  }
    .iconfont{
    margin-left:5px;
  }
  }
  }

  /*适应手机端屏幕*/
  @media only screen and(max-width: @iphoneW){
    header{
      width:100%;
    }
    .z-wrapper{
      width:100%!important;
    }
    .register,.login{
      padding: 2px 5px!important;
    }

  }





</style>
