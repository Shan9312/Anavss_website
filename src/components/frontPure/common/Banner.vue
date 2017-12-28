<template>
  <div :class="'swiper-container ' | classFilter(swiperClass)">
    <div class="swiper-wrapper">
      <BannerItem v-for="(item , index) in bannerList" :obj="item" :swiperClass="swiperClass" :key="index"></BannerItem>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <!--<div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>-->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div>-->
  </div>
</template>


<script>
  import Swiper from 'swiper'
  import BannerItem from './BannerItem'
  export default {
    name: 'banner',
    props: {
      bannerList: {
        type: Array,
        required: true
      },
      swiperClass: {
        type: String
      }
    },
    data () {
      return {
        swiperObj: null
      }
    },
    filters: {
      classFilter: function (input, item) {
        return input + item
      }
    },
    components: {
      BannerItem
    },
    mounted () {
      var className = '.swiper-container'
      if (this.swiperClass) className = '.' + this.swiperClass
      // console.log(className);
      this.swiperObj = new Swiper(className, {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 5000,
        loop: true,
        autoplayDisableOninteraction: false
      })
    }
    /* updated: function () {
      this.swiperObj.update();
    } */

  }

</script>
<style lang="less">
  @import url("../../../config/theme.less");

  .financeBanner,.aboutBanner{
    padding-top:0.3rem;
  dl{
    height:5rem;
    /*-moz-box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);
    box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);*/
    -moz-box-shadow:0 20px 45px -14px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow:0 20px 45px -14px rgba(0, 0, 0, 0.3);
    box-shadow: 0 20px 45px -14px rgba(0, 0, 0, 0.3);
    background: #FFFFFF;
    border-radius: 0.06rem;
    /*margin:0 0.1rem;*/
    margin:0 0.2rem 0.3rem 0.2rem;
  dd{
    width:100%;
    height:1.51rem;
  /*padding:0 0.2rem;*/
  img{
    width:100%;
    height:100%;
    border-top-left-radius: 0.06rem;
    border-top-right-radius: 0.06rem;
  }
  }
  dt{
    padding:0 0.16rem;
    width:100%;
  h3{
    font-size:0.18rem;
    color:#565656;
    font-weight:normal;
    margin: 0.15rem 0;
  }
  p{
    font-size: 0.16rem;
    color: #565656;
    line-height: 0.21rem;
  }
  }
  }
  }

  .priceBanner{
    margin-top:0.3rem;
    margin-bottom:0.2rem;
    padding-top:0.3rem;
    .box{
      height:3.6rem;
      text-align: center;
      /*-moz-box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);
      box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);*/
      -moz-box-shadow:0 20px 45px -14px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow:0 20px 45px -14px rgba(0, 0, 0, 0.3);
      box-shadow: 0 20px 45px -14px rgba(0, 0, 0, 0.3);
      background: #FFFFFF;
      border-radius: 0.06rem;
      margin:0 0.2rem 0.3rem 0.2rem;

      position:relative;
      h4{
        font-size: 0.18rem;
        color: #565656;
        margin-top:0.1rem;
        font-weight: 500;
      }
      h5{
        color:@color;
        font-size: 0.24rem;
        margin-top:0.6rem;
      }
      h6{
        color:@color;
        font-size:0.14rem;
        position: absolute;
        top:0.3rem;
        left:50%;
        transform: translateX(-50%);
      }
      .desc{
        margin-top:0.34rem;
      p{
        font-size: 0.14rem;
        color: #262626;
        line-height: 0.21rem;
      }
      }
      a{
        display: inline-block;
        width:1.4rem;
        height:0.4rem;
        line-height:40px;
        position: absolute;
        bottom:0.32rem;
        left:50%;
        transform:translateX(-50%);
        background-image: linear-gradient(47deg, #F83600 0%, #FC6600 100%);
        border-radius: 4px;
        color:#fff;
      }
    }
  }

  .recruitBanner{
    .box{
      /*-moz-box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);
      box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);*/
      -moz-box-shadow:0 20px 45px -14px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow:0 20px 45px -14px rgba(0, 0, 0, 0.3);
      box-shadow: 0 20px 45px -14px rgba(0, 0, 0, 0.3);
      background: #FFFFFF;
      border-radius: 0.06rem;
      margin:0 0.1rem 0.3rem 0.1rem;
      padding:0.3rem 0.2rem;

      h3{
        font-size:0.24rem;
        font-weight: normal;
        margin-top:0.1rem;
      }
      h6{
        font-size: 0.18rem;
        margin-top:0.24rem;
        margin-bottom:0.1rem;
        font-weight:500;
      }
      p,li{
        font-size: 0.16rem;
        line-height: 0.21rem;
      }
      li{
        line-height: 0.21rem;
      }

    }
  }
</style>
