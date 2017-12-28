<template>
  <section>
    <div class="wrapper">
      <div class="show">
        <h1>数据集成与连接</h1>
        <p>汇集您的所有业务数据，轻松连接到ERP，CRM和其他数据源，以实现快速，可靠和准确的预算与分析</p>
        <div>
          <router-link to="">我们的产品</router-link>
        </div>
      </div>
    </div>


    <!--<div class="hideBox">
      <h1>数据集成与连接</h1>
      <p>汇集您的所有业务数据，轻松连接到ERP，CRM和其他数据源，以实现快速，可靠和准确的预算与分析</p>
      <div>
        <router-link to="">我们的产品</router-link>
      </div>
    </div>-->
  </section>
</template>


<script>
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'}
      }
    },
    mounted () {
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import url("../../../../config/theme.less");

  section{
    background:url("../../../../assets/byData/integration/bg.png") no-repeat;
    background-size: cover;
    background-position: center @th;    /*@th为header高度*/
    width:100%;
    height:708px+@th;
  }
  .wrapper{
    height:100%;
    margin:0 auto;
    position: relative;
  }
  .show{
    width:100%;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    text-align: center;
  h1{
    font-family: @Microsoft;
    font-size: 64px;
    color: #FFFFFF;
    letter-spacing: 0.36px;
    font-weight: normal;
  }
  p{
    font-family: @Microsoft;
    font-size: 36px;
    color: #FFFFFF;
    line-height: 50px;
    margin-top:16px;
  }
  a{
    margin-top:48px;
    display:inline-block;
    background-image: @lG;
    border-radius: 4px;
    font-family: @Microsoft;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0.1px;
    padding:10px 18px;
  }
  }

  /*@media only screen and(min-width: 1400px) and(max-width: 1920px) {
  h1{
    font-size: 30px;
    }
  }*/
  @media only screen and(max-width: 700px) {
    h1{
      font-size: 30px;
    }
  }

  /*适应手机端屏幕*/
  .hideBox{
    display:none;
  }
  @media only screen and(max-width: @iphoneW){
    /*.section{
      display:none;
    }*/
    /*.hideBox{
      display:block;
      background:url("../../../../assets/home/H5-bg.png") no-repeat;
      background-size: cover;
      background-position: center;
      padding-top:60px;
      box-sizing: border-box;
      width:100%;
      height:4.2rem;
      position: relative;
    h1{
      width:3.2rem;
      font-size: 0.24rem;
      color: #FFFFFF;
      line-height: 0.35rem;
      font-weight: normal;
      margin:0.88rem auto 0 auto;
      text-align: center;
    }
    p{
      width:3.2rem;
      margin:0.2rem auto;
      font-size:0.16rem;
      color:#fff;
      text-align: center;
    }
  &>div{
      width:100%;
      position:relative;
      margin-top:0.6rem;
    a{
      display: inline-block;
      padding:0.14rem 0.16rem;
      background-image:@lG;
      border-radius: 4px;
      font-size: 0.16rem;
      color: #FFFFFF;
      position: absolute;
      left:50%;
      transform: translateX(-50%);
    }
  }
  }*/

    section{
      background:url("../../../../assets/byData/integration/bg.png") no-repeat;
      background-size: cover;
      width:100%;
      height:4.2rem;
      padding-top:@th;
      box-sizing: border-box;
    }
    .wrapper{
      width:100%;
    }
    .show{
      padding:0 @lrW;
    h1{
      font-size: 0.36rem;
    }
    p{
      font-size: 0.18rem;
      line-height: 0.24rem;
    }
    a{
      margin-top: 0.6rem;
      font-size: 0.16rem;
      padding:0.1rem 0.1rem;
    }
  }
  }



</style>
