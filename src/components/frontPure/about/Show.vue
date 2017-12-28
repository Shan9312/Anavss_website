<template>
  <section>
    <div class="wrapper">
      <div class="show">
        <h1>我们是谁</h1>
        <p>我们致力于通过创新技术帮助企业实现数字化转型</p>
        <div>
          <router-link to="">我们的产品</router-link>
        </div>
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
  @import url("../../../config/theme.less");

  section{
    background:url("../../../assets/about/bg-about.png") no-repeat;
    background-size: cover;
    background-position: center @th;    /*@th为header高度*/
    width:100%;
    height:708px+@th;
    /*padding-top:@th;*/
    box-sizing: border-box;
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
      font-weight: normal;

    }
    p{
      font-family: @Microsoft;
      font-size: 36px;
      color: #FFFFFF;
      margin-top:16px;
    }
  a{
    margin-top:48px;
    display:inline-block;
    background-image: linear-gradient(47deg, #F83600 0%, #FC6600 100%);
    border-radius: 4px;
    font-family: @Microsoft;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0.1px;
    padding:10px 18px;
  }
  }


  /*适应手机端屏幕*/

  @media only screen and(max-width: @iphoneW){
    section{
      background:url("../../../assets/about/H5-bg.png") no-repeat;
      background-size: cover;
      width:100%;
      height:4.2rem;
      padding-top:@th;
      box-sizing: border-box;
    }
    .wrapper{
      width:100%;
    }
    .show {
      padding: 0 @lrW;

    h1 {
      font-size: 0.36rem;
    }

    p {
      font-size: 0.18rem;
      margin-top:0.13rem;
    }
    a{
      margin-top: 0.6rem;
      font-size: 0.16rem;
      padding:0.1rem 0.1rem;
    }
  }

  }

</style>
