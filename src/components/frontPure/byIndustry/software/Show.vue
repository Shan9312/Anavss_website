<template>
  <section>
    <div class="section">
      <!--<div class="img"><img src="../../../assets/home/bg.png" alt=""></div>-->
      <div class="show wrapper">
        <h1>软件公司的预算和预测</h1>
        <p>针对软件行业的新业务模式，我们专门推出了与之适应的规划
          预算和收入预测模型</p>
        <div>
          <router-link to="">我们的产品</router-link>
        </div>
      </div>
    </div>


    <div class="hideBox">
      <h1>软件公司的预算和预测</h1>
      <p>针对软件行业的新业务模式，我们专门推出了与之适应的规划
        预算和收入预测模型</p>
      <div>
        <router-link to="">我们的产品</router-link>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'},
      }
    },
    mounted () {
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import url("../../../../config/theme.less");

  .section{
    background:url("../../../../assets/byIndustry/software/bg.png") no-repeat;
    background-size: cover;
    background-position: center @th;
    padding-top:60px;
    width:100%;
    height:768px;
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
    .section{
      display:none;
    }
    .hideBox{
      display:block;
      background:url("../../../../assets/byIndustry/software/bg.png") no-repeat;
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
  }
  }


</style>
