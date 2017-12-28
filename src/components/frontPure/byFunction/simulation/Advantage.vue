<template>
  <section>
    <div class="wrapper">
      <h3>我们的优势</h3>
      <ul class="clearfix">
        <li>更快地找到洞察</li>
        <li>统一的模型</li>
        <li>遇见变化对财务的影响</li>
        <li>持续改进的模型和算法</li>
        <li>行业平均数据和指标</li>
        <li>完整的可追溯性</li>
      </ul>
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

  section{
    width:100%;
    /*height:472px;*/
    padding:64px 0 24px 0;
    box-sizing: border-box;
    background-color: #1D1C1C;
  }
  .wrapper{
    height:100%;
    margin:0 auto;
  }

  h3{
    font-size: 24px;
    text-align: center;
    font-weight:normal;
    color:#fff;
    margin-bottom:40px;
  }
  ul{
    width:100%;
    /*display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;*/
     /*-webkit-justify-content:space-between;
     justify-content:space-between;
     -moz-box-pack:space-between;
     -webkit--moz-box-pack:space-between;
     box-pack:space-between;
     justify-content: space-between;*/
    /*-webkit-justify-content:center;
    justify-content:center;
    -moz-box-pack:center;
    -webkit--moz-box-pack:center;
    box-pack:center;
    justify-content: center;*/
   /* -webkit-justify-content:space-around;
    justify-content:space-around;
    -moz-box-pack:space-around;
    -webkit--moz-box-pack:space-around;
    box-pack:space-around;
    justify-content: space-around;*/

  }
  li{
    float: left;
    width:30%;
    height:120px;
    margin:0 1.65% 40px 1.65%;
    line-height: 120px;
    text-align: center;
    font-size:18px;
    color:#fff;
    border: 1px solid #FFFFFF;
    border-radius: 40px 0 40px 0;
    position: relative;
    overflow:hidden;
    &:before{
       content: "";
       width:20px;
       height:20px;
       background-color: #fff;
       border-radius: 50%;
       position: absolute;
       top:0;
       right:0;
       transform: translate(50%,-50%);
     }
    &:after{
       content: "";
       width:20px;
       height:20px;
       background-color: #fff;
       border-radius: 50%;
       position: absolute;
       bottom:0;
       left:0;
       transform: translate(-50%,50%);
     }
  }


  /*适应手机端屏幕*/

  @media only screen and(max-width: @iphoneW) {
    .wrapper{
      width:100%;
    }
    h3{
      font-size: 0.24rem;
    }
    ul{
      width:100%;
      padding:0 0.38rem;
    li{
      width:100%;
      font-size:0.18rem;
    }
  }
  }

</style>
