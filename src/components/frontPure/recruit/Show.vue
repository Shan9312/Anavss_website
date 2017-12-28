<template>
  <section>
    <div class="wrapper">
      <div class="show">
        <h1>和我们一起</h1>
        <p>让每一家企业都能便捷使用数据去驱动业务</p>
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
    background:url("../../../assets/recruit/bg-recruit.png") no-repeat;
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
  }



  /*--------------适应手机端屏幕-----------------*/

  @media only screen and(max-width: @iphoneW){
    section{
      background:url("../../../assets/recruit/H5-bg.png") no-repeat;
      background-size: cover;
      background-position: center @th;    /*@th为header高度*/
      width:100%;
      height:4.2rem;
      box-sizing: border-box;
    }
    .wrapper{
      width:100%;
      padding:0 @lrW;
    }
    .show{
      h1{
        font-size:0.36rem;
      }
      p{
        font-size:0.18rem;
        line-height: 0.26rem;
      }
    }
  }

</style>
