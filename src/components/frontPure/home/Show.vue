<template>
  <section>
    <div class="section" :style="fullHeightStyle">
      <!--<div class="img"><img src="../../../assets/home/bg.png" alt=""></div>-->
      <div class="show wrapper">
        <h1>促进销售的佣金管理平台</h1>
        <p>最适合业务的佣金解决方案，准确的佣金计算，多维度的佣金报告和分析，最优的销售投资回报率，更优的销售团队</p>
        <div>
          <router-link to="">了解更多</router-link>
        </div>
      </div>
    </div>


    <div class="hideBox">
      <h1>最适合业务的佣金解决方案，准确的佣金计算，多维度的佣金报告和分析，最优的销售投资回报率，更优的销售团队</h1>
      <!-- 我们为企业管理者提供一站式规划，预测和分析平台 -->
      <div>
        <router-link to="">了解更多</router-link>
      </div>
    </div>
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
  @import url("../../../config/theme.less");

  .section{
    background:url("../../../assets/home/home_bg.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    padding-top:60px;
    width:100%;
    /*height:768px;*/
    position: relative;
  }
  .img{
    width:100%;
    height:100%;
    img{
      width:100%;
      height:100%;
    }
  }
  .show{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    text-align: center;
    h1{
      font-family: @Microsoft;
      font-size: 54px;
      color: #FFFFFF;
      letter-spacing: 0.36px;
      font-weight: normal;
    }
    p{
      font-family: @Microsoft;
      font-size: 30px;
      color: #FFFFFF;
      letter-spacing: 0.11px;
      margin-top:16px;
    }
    a{
      margin-top:48px;
      display:inline-block;
      background-image: linear-gradient(47deg, #FC6600 0%, #F83600 100%);
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
    .section{
      display:none;
    }
    .hideBox{
      display:block;
      background:url("../../../assets/home/H5-bg.png") no-repeat;
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
    }
  }


</style>
