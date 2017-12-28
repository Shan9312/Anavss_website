<template>
  <section>
    <div class="showBox">
      <h3>平台架构</h3>

        <div class="wrapper">
          <div class="img">
            <img src="../../../assets/platform/P1.png" alt="">
         </div>
      </div>
    </div>


    <!--<div class="hideBox">
      <h3>平台架构</h3>
      <div class="img">
        <div class="wrapper">
          <img src="../../../assets/platform/P1.png" alt="">
        </div>
      </div>
    </div>-->
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

  .showBox{
    width:100%;
    text-align: center;
  .wrapper{
    margin:0 auto;
  }
    h3{
      font-size: 24px;
      color: #565656;
      font-weight: normal;
      margin-top:64px;
    }
    .img{
      width:auto;
      height:auto;
      margin:80px auto;
      img{
        width:auto;
        height:auto;
      }
    }
  }

  /*适应手机端屏幕*/
  /*.hideBox{
    display:none;
  }
  @media only screen and(max-width: @iphoneW){
    .showBox{
      display:none;
    }
    .hideBox{
      display:block;


    }
  }*/


</style>
