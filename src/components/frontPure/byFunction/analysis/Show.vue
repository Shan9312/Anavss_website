<template>
  <section>
    <div class="showBox">
      <div class="wrapper">
        <div class="show">
          <h2>分析与报告</h2>
          <p>分析不够方便？报告需要时间太久？我们为您打造更高效的分析和报告体验。</p>
        </div>
        <div class="img_box">
          <img src="../../../../assets/product/Rectangle.png" alt="">
        </div>
      </div>
    </div>


    <div class="hideBox">
      <h2>分析与报告</h2>
      <p>分析不够方便？报告需要时间太久？我们为您打造更高效的分析和报告体验。</p>
      <div class="hide_img_box">
        <img src="../../../../assets/product/H5-common.png" alt="">
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
  @import url("../../../../config/theme.less");


  .showBox{
    background:url("../../../../assets/product/bg-h1.png") no-repeat;
    background-size: cover;
    background-position: center 50%;    /*@th为header高度*/
    padding-top:@th;
    box-sizing: border-box;
    width:100%;
    height:768px;
  .wrapper{
    height:100%;
    margin:0 auto;
    position: relative;
  }
  }
  .show{
    /*width:55%;*/

    text-align: center;
    padding-top:154px;
  h2{
    font-family: @Microsoft;
    font-size: 64px;
    color: #FFFFFF;
    letter-spacing: 0.13px;
    font-weight: normal;
  }
  p{
    font-family: @Microsoft;
    font-size: 36px;
    color: #FFFFFF;
    letter-spacing: 0.11px;
    margin-top:24px;
  }
  }
  .img_box{
    position: absolute;
    left:50%;
    bottom: -5px;
    transform: translateX(-50%);

  }


  /*适应手机端屏幕*/
  .hideBox{
    display:none;
  }
  @media only screen and(max-width: @iphoneW) {
    .showBox {
      display: none;
    }
    .hideBox{
      display: block;
      background:url("../../../../assets/product/H5-bg3.png") no-repeat;
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
      font-size:0.36rem;
      color:#fff;
      margin-top:0.6rem;
      font-weight: normal;
    }
    p{
      font-size: 0.18rem;
      color: #FFFFFF;
      margin:0.2rem 0 0.83rem 0;
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
  }


</style>
