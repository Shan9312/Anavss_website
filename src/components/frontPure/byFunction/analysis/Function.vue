<template>
  <section>
    <div class="showBox">
      <div class="wrapper">
        <h3>分析与报告的主要功能包括</h3>
        <ul>
          <li>
            <img src="../../../../assets/product/h1-1.png" alt="">
            <p>用户多样选择</p>
          </li>
          <li>
            <img src="../../../../assets/product/h3-2.png" alt="">
            <p>使用方便</p>
          </li>
          <li>
            <img src="../../../../assets/product/h3-3.png" alt="">
            <p>真实唯一版本</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-4.png" alt="">
            <p>高级可视化</p>
          </li>
        </ul>
        <ul>
          <li>
            <img src="../../../../assets/product/h3-5.png" alt="">
            <p>财务专用</p>
          </li>
          <li>
            <img src="../../../../assets/product/h3-6.png" alt="">
            <p>合作报告</p>
          </li>
          <li>
            <img src="../../../../assets/product/h3-7.png" alt="">
            <p>监理管理报告</p>
          </li>
          <li>
            <img src="../../../../assets/product/h3-8.png" alt="">
            <p>集成服务</p>
          </li>
        </ul>
      </div>
    </div>


    <div class="hideBox">
      <h3>分析与报告的主要功能包括</h3>
      <ul class="clearfix">
        <li v-for="(item,index) in dataList" :key="index" class="fl">
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
        dataList: [
          {
            icon: 'icon-shoucex',
            text: '用户多样选择'
          },
          {
            icon: 'icon-fangbianx',
            text: '使用方便'
          },
          {
            icon: 'icon-banbenx',
            text: '真实唯一版本'
          },
          {
            icon: 'icon-kongzhishenjicopyx',
            text: '高级可视化'
          },
          {
            icon: 'icon-caiwux',
            text: '财务专用'
          },
          {
            icon: 'icon-hezuox',
            text: '合作报告'
          },
          {
            icon: 'icon-jianguanx',
            text: '监理管理报告'
          },
          {
            icon: 'icon-jichengfuwux',
            text: '集成服务'
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
