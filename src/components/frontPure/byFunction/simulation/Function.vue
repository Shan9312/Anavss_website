<template>
  <section>
    <div class="showBox">
      <div class="wrapper">
        <h3>建模和预测关键功能包括</h3>
        <ul>
          <li>
            <img src="../../../../assets/product/h2-1.png" alt="">
            <p>假设情景播放</p>
          </li>
          <li>
            <img src="../../../../assets/product/h2-2.png" alt="">
            <p>盈利能力和成本分配</p>
          </li>
          <li>
            <img src="../../../../assets/product/h2-3.png" alt="">
            <p>现金流量建模</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-4.png" alt="">
            <p>预测</p>
          </li>
        </ul>
        <ul>
          <li>
            <img src="../../../../assets/product/h2-5.png" alt="">
            <p>成本核算</p>
          </li>
          <li>
            <img src="../../../../assets/product/h2-6.png" alt="">
            <p>先进的技术</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-7.png" alt="">
            <p>过程可视化</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-11.png" alt="">
            <p>报告和分析</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="hideBox">
      <h3>建模和预测关键功能包括</h3>
      <ul class="clearfix">
        <li v-for="item,index in dataList" :key="index" class="fl">
          <div :class="'iconfont ' + item.icon"></div>
          <p>{{item.text}}</p>
        </li>
      </ul>
    </div>
  </section>
</template>


<script>
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'},
        dataList:[
          {
            icon:'icon-qingjingbofangx',
            text:'假设情景播放'
          },
          {
            icon:'icon-jichengfuwux',
            text:'盈利能力和成本分配'
          },
          {
            icon:'icon-xianjinliuliangx',
            text:'现金流量建模'
          },
          {
            icon:'icon-kongzhishenjicopyx',
            text:'预测'
          },
          {
            icon:'icon-chengbenhesuanx',
            text:'成本核算'
          },
          {
            icon:'icon-xianjinjishux',
            text:'先进的技术'
          },
          {
            icon:'icon-keshihuax',
            text:'过程可视化'
          },
          {
            icon:'icon-baogaofenxix',
            text:'报告和分析'
          }
        ]
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
    padding:64px 0;
    background-color: #fff;
  }
  .wrapper{
    height:100%;
    margin:0 auto;
  }

  h3{
    font-size: 24px;
    text-align: center;
    font-weight:normal;
    color:#565656;
  }
  ul{
    width:100%;
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content:space-between;
    justify-content:space-between;
    -moz-box-pack:space-between;
    -webkit--moz-box-pack:space-between;
    box-pack:space-between;
    justify-content: space-between;
  }
  li{
    width:130px;
    text-align: center;
    margin-top:60px;
    p{
      margin-top:16px;
    }
  }



  /*适应手机端屏幕*/
  .hideBox{
    display:none;
  }
  @media only screen and(max-width: @iphoneW) {
    .showBox {
      display: none;
    }
    .hideBox {
      display: block;
    h3{
      font-size:0.24rem;
      font-weight:normal;
      padding:0 @lrW;
      line-height: 0.35rem;
    }
    ul{
      width:100%;
      display:block;
    li{
      width:40%;
      margin:0 5%;
      margin-top:0.6rem;
    .iconfont{
      font-size: 0.54rem;
      color:@color;
    }
    p{
      font-size: 0.18rem;
      margin-top:0.18rem;
    }

  }
  }
  }
  }


</style>
