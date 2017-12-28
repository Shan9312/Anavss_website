<template>
  <section>
    <div class="wrapper">
      <div class="show">
        <h1>Hi</h1>
        <p>我们期待听到您的声音</p>
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
    background:url("../../../assets/contact/bg-contact.png") no-repeat;
    background-size: cover;
    background-position: center @th;    /*@th为header高度*/
    /*padding-top:@th;*/
    box-sizing: border-box;
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
      font-weight: normal;
    }
    p{
      font-family: @Microsoft;
      font-size: 36px;
      color: #FFFFFF;
      margin-top:16px;
    }
  }


  /*适应手机端屏幕*/

  @media only screen and(max-width: @iphoneW){
    section{
      background:url("../../../assets/contact/H5-bg.png") no-repeat;
      background-size: cover;
      background-position: center @th;    /*@th为header高度*/
      width:100%;
      height:4.2rem;
      /*padding-top:@th;*/
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
    }
  &>div{
      display: none;
    }
  }
  }


</style>
