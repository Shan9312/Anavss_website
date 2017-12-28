<template>
  <section>
    <div class="wrapper">
      <div class="main_top">
        <h2>3种套餐供您选择</h2>
        <p>我们提供几个计划来满足客户的需求。 我们的计划是灵活的，包括免费实施以消除风险和资本投资。没有看到有效的计划吗？ 没问题。 我们的软件是模块化的，因此组件可以单独购买，也可以作为套件一起购买。 这使我们能够定制我们的产品，使其非常适合您团队不断变化的需求。</p>
      </div>
      <div class="main_mid">
        <ul>
          <li>
            <h4>规划与预算</h4>
            <h5>3000元/月</h5>
            <div class="desc">
              <p>无限用户许可证</p>
              <p>高级支持</p>
              <p>ANA-PRO报告</p>
            </div>
            <a href="javascript:void(0);" class="buy">立即购买</a>
          </li>
          <li>
            <h4>套件</h4>
            <h6>最受欢迎的</h6>
            <h5>6000元/月</h5>
            <div class="desc">
              <p>无限用户许可证</p>
              <p>高级支持</p>
              <p>ANA-PRO报告</p>
              <p>ANA-PRO计划</p>
              <p>ANA-PRO分析</p>
            </div>
            <a href="javascript:void(0);">立即购买</a>
          </li>
          <li>
            <h4>分析与报告</h4>
            <h5>3000元/月</h5>
            <div class="desc">
              <p>无限用户许可证</p>
              <p>高级支持</p>
              <p>ANA-PRO报告</p>
              <p>ANA-PRO计划</p>
            </div>
            <a href="javascript:void(0);">立即购买</a>
          </li>
        </ul>
      </div>

      <div class="hideBox">
        <Banner :bannerList="bannerList" :swiperClass="swiperClass"/>
      </div>

      <div class="main_bot">
        <p>需要定制化？没问题。我们的软件是模块化的，不同的组件可以单独购买，也可以作为套件一起购买。我们的团队将根据您的需求为您量身定制。具体合作方式请联系徐经理xuqian@anavss.com</p>
      </div>
    </div>
  </section>
</template>


<script>
  import Banner from '../common/Banner.vue'
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'},
        // swiper
        swiperClass: 'priceBanner',
        bannerList: [
          {
            title1: '规划与预算',
            title2: '',
            title3: '3000元/月',
            text: ['无限用户许可证', '高级支持', 'ANA-PRO报告'],
            operate: '立即购买',
            operateUrl: ''
          },
          {
            title1: '套件',
            title2: '最受欢迎的',
            title3: '6000元/月',
            text: ['无限用户许可证', '高级支持', 'ANA-PRO报告', 'ANA-PRO计划', 'ANA-PRO分析'],
            operate: '立即购买',
            operateUrl: ''
          },
          {
            title1: '分析与报告',
            title2: '',
            title3: '3000元/月',
            text: ['无限用户许可证', '高级支持', 'ANA-PRO报告', 'ANA-PRO计划'],
            operate: '立即购买',
            operateUrl: ''
          }
        ]
      }
    },
    mounted () {
    },
    components: {
      Banner
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import url("../../../config/theme.less");

  section{
    width:100%;
    padding:64px 0 51px 0;
    box-sizing: border-box;
  }
  .wrapper{
    height:100%;
    margin:0 auto;
  }
  h2{
    font-size:24px;
    text-align: center;
    font-weight:normal;
    margin-bottom:40px;
  }
  p{
    font-size:16px;
    line-height:24px;
    text-align: center;
  }
  .main_mid{
    margin:30px 0;
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

      li{
        width:313px;
        height:390px;
        border: 1px solid #D1D1D1;
        border-radius: 4px;
        text-align: center;
        position:relative;
        h4{
          font-size: 18px;
          color: #565656;
          margin-top:30px;
        }
        h5{
          color:@color;
          font-size: 24px;
          margin-top:60px;
        }
        h6{
          color:@color;
          font-size:14px;
          position: absolute;
          top:60px;
          left:50%;
          transform: translateX(-50%);
        }
        .desc{
          margin-top:34px;
          p{
            font-size: 14px;
            color: #262626;
            line-height: 21px;
          }
        }
        a{
          display: inline-block;
          width:140px;
          height:40px;
          line-height:40px;
          position: absolute;
          bottom:32px;
          left:50%;
          transform:translateX(-50%);
          background-image: linear-gradient(47deg, #F83600 0%, #FC6600 100%);
          border-radius: 4px;
          color:#fff;
        }
      }
    }
  }


  /*适应手机端屏幕*/
  .hideBox{
    display:none;
  }
  @media only screen and(max-width: @iphoneW){
    .main_mid{
      display:none;
    }
    .hideBox{
      display:block;
    }
    section{
      padding:0.4rem 0;
    }
    .wrapper{
      width:100%;
      padding:0 @lrW;
      h2{
        font-size:0.24rem;
        margin-bottom:0.4rem;
      }
      p{
        font-size:0.16rem;
        line-height: 0.24rem;
      }
    }

  }
</style>
