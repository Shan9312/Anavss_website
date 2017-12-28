<template>
  <section>
    <div class="showBox">
      <div class="wrapper">
        <div class="show">
          <h2>财务</h2>
          <p>财务有效输出，但是没有正确高效的工具，在正确的时间给客户带来高效数据，使数据带动业务，增加公司效益在正确的时间给客户带来高效数据，使数据带动业务，增加公司效益</p>
        </div>
        <div class="img_box" :style="fullBottom">
          <img src="../../../../assets/solution/show.png" alt="">
        </div>
      </div>
      <div class="all_logo" >
        <div class="wrapper">
          <p>选择连接你想要的数据</p>
          <ul>
            <li><router-link to="/"><img src="../../../../assets/solution/logo-yongyou.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="../../../../assets/solution/logo-Kingdee.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="../../../../assets/solution/logo-Oracle.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="../../../../assets/solution/logo-netsuite.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="../../../../assets/solution/logo-sap.png" alt=""></router-link></li>
            <li><router-link to="/"><img src="../../../../assets/solution/logo-Excel.png" alt=""></router-link></li>
          </ul>
          <p><router-link to="/">查看如何连接</router-link></p>
        </div>
      </div>
    </div>


    <div class="hideBox">
      <div class="hide_show">
        <h2>财务</h2>
        <p>财务有效输出，但是没有正确高效的工具，在正确的时间给客户带来高效数据，使数据带动业务，增加公司效益在正确的时间给客户带来高效数据，使数据带动业务，增加公司效益</p>
        <div class="hide_img_box">
          <img src="../../../../assets/solution/show.png" alt="">
        </div>
      </div>
      <div class="hide_all_logo" >
          <p>选择连接你想要的数据</p>
          <ul class="clearfix">
            <li><router-link to="/" class="btn"><img src="../../../../assets/solution/logo-yongyou.png" alt=""></router-link></li>
            <li><router-link to="/" class="btn"><img src="../../../../assets/solution/logo-Kingdee.png" alt=""></router-link></li>
            <li><router-link to="/" class="btn"><img src="../../../../assets/solution/logo-Oracle.png" alt=""></router-link></li>
            <li><router-link to="/" class="btn"><img src="../../../../assets/solution/logo-netsuite.png" alt=""></router-link></li>
            <li><router-link to="/" class="btn"><img src="../../../../assets/solution/logo-sap.png" alt=""></router-link></li>
            <li><router-link to="/" class="btn"><img src="../../../../assets/solution/logo-Excel.png" alt=""></router-link></li>
          </ul>
          <p><router-link to="/">查看如何连接</router-link></p>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'},
        fullBottom:null //展示部分图片随屏幕大小的变化一直贴着logo
      }
    },
    mounted () {
        var bottom;
        bottom = document.getElementsByClassName('all_logo')[0].offsetHeight - 5;
        this.fullBottom = {'bottom': bottom+'px'};

//        移动端触摸
        var btns=document.querySelector(".btn");
        for(var i = 0;i<btns.length;i++){
            btns[i].ontouchstart=function(){
              this.className="btn active";
            }
        }
        btns.ontouchend=function(){
          for(var i = 0;i<btns.length;i++){
            btns[i].className="btn";
          }
        }
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import url("../../../../config/theme.less");


  .showBox{
    background:url("../../../../assets/solution/bg-solution.png") no-repeat;
    background-size: cover;
    background-position: center 50%;    /*@th为header高度*/
    padding-top:@th;
    box-sizing: border-box;
    width:100%;
    height:768px+@th;
    position: relative;
    .wrapper{
      height:100%;
      margin:0 auto;
    }
  }
  .show{
    width:55%;
    position: absolute;
    top:128px;
    left:50%;
    transform: translateX(-50%);
    text-align: center;
    h2{
      font-family: @Microsoft;
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0.13px;
      font-weight: normal;
    }
    p{
      font-family: @Microsoft;
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: 0.11px;
      margin-top:16px;
    }
  }
  .img_box{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
  /*@media only screen and(min-width: 950px) and(max-width: 1883px) {
    .img_box{
      position: absolute;
      left:50%;
      bottom:242px !important;
      transform: translateX(-50%);
      width:600px;
      height:270px;
    img{
      width:100%;
      height:100%;
    }
  }
  .show{
  p{
    font-size:16px;
  }
  }

  }
  @media only screen and(max-width: 950px) {
    .img_box{
      position: absolute;
      left:50%;
      bottom:318px !important;
      transform: translateX(-50%);
      width:500px;
      height:200px;
      img{
        width:100%;
        height:100%;
      }
    }
  .show{
    p{
      font-size:16px;
    }
  }

  }*/
  .all_logo{
    width:100%;
    position: absolute;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
    text-align: center;
    background: rgba(16,16,16,0.69);
    padding:20px 0;
    p{
      color:#fff;
      font-size:14px;
      a{
        color:#fff;
        &:hover{
          color:@color;
         }
      }
    }
    ul{
      width:80%;
      margin-left:auto;
      margin-right:auto;

        display:-webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
       /* -webkit-justify-content:space-between;
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

    }
    li{
      width:140px;
      height:60px;
      margin-top:20px;
      a{
        display: inline-block;
        width:115px;
        &:hover{
           background: #FB5F00;
           box-shadow: 0 0 16px 0 rgba(255,255,255,0.14);
           margin-top:-2px;
         }
      }
    }
  }

  /*适应手机端屏幕*/
  .hideBox{
     display:none;
   }
  @media only screen and(max-width: @iphoneW){
    .showBox{
      display:none;
    }
    .hideBox{
      display:block;
      .hide_show{
        background:url("../../../../assets/solution/H5-bg.png") no-repeat;
        background-size: cover;
        background-position: center;    /*@th为header高度*/
        padding-top:@th;
        box-sizing: border-box;
        width:100%;
        /*height:3.6rem;*/
        text-align: center;
        padding-left:@lrW;   /*@lrW为左右边距*/
        padding-right:@lrW;
        h2{
          font-size:0.24rem;
          color:#fff;
          margin-top:0.3rem;
        }
        p{
          font-size: 0.16rem;
          color: #FFFFFF;
          line-height:0.24rem;
          margin:0.16rem 0 0.29rem 0;
        }
        .hide_img_box{
          width:100%;
          height:1.43rem;
        img{
          width:100%;
          height:100%;
            }
        }
      }
      .hide_all_logo{
        padding:0.4rem @lrW;
        text-align: center;
        background: rgba(0,0,0,0.85);
        p{
          color:#fff;
          font-size:0.18rem;
          a{
            color:#fff;
            font-size:0.18rem;
            &:hover{
               color:@color;
             }
            }
        }
        ul{
          margin:0.4rem 0 0.2rem 0;
        }
        li{
          width:1.36rem;
          height:0.6rem;
          float: left;
          margin:0.06rem 0.15rem;
          a{
            display: inline-block;
            width:1.2rem;
            &.active{
               background: @color;
               box-shadow: 0 0 16px 0 rgba(255,255,255,0.14);
               margin-top:-2px;
             }
          }
        }
      }
    }
  }



</style>
