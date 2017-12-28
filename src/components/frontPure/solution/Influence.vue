<template>
  <section>
    <div class="w50 wrapper">
      <h2>减少对财务决策的怀疑</h2>
      <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们需要看到财务数据与业务
        其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
      <div class="showBox">
        <dl class="clearfix">
          <dt class="fl">
          <h3>财政性能影响</h3>
          <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
          </dt>
          <dd class="fr"><img src="../../../assets/solution/Rectangle_1.png" alt=""></dd>
        </dl>
        <dl class="clearfix">
          <dd class="fl"><img src="../../../assets/solution/Rectangle_2.png" alt=""></dd>
          <dt class="fr">
          <h3>财政性能影响</h3>
          <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
          </dt>
        </dl>
        <dl class="clearfix">
          <dt class="fl">
          <h3>财政性能影响</h3>
          <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
          </dt>
          <dd class="fr"><img src="../../../assets/solution/Rectangle_3.png" alt=""></dd>
        </dl>
      </div>

      <div class="hideBox">
        <Carousel class="solution_carousel"
          type="card"
          v-model="value"
          :autoplay="setting.autoplay"
          :autoplay-speed="setting.autoplaySpeed"
          :dots="setting.dots"
          :trigger="setting.trigger"
          :arrow="setting.arrow">
          <CarouselItem class="solution_carouselItem">
            <dl class="">
              <dd class=""><img src="../../../assets/solution/Rectangle_1.png" alt=""></dd>
              <dt class="">
              <h3>财政性能影响</h3>
              <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
          <CarouselItem class="solution_carouselItem">
            <dl class="">
              <dd class=""><img src="../../../assets/solution/Rectangle_1.png" alt=""></dd>
              <dt class="">
              <h3>财政性能影响</h3>
              <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
          <CarouselItem class="solution_carouselItem">
            <dl class="">
              <dd class=""><img src="../../../assets/solution/Rectangle_1.png" alt=""></dd>
              <dt class="">
              <h3>财政性能影响</h3>
              <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  </section>
</template>


<script>
  import Carousel from 'iview/src/components/Carousel';
  import CarouselItem from 'iview/src/components/Carousel/carousel-item.vue'
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'},
        fullBottom:null,

        value: 0,
        setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'outside',
          trigger: 'click',
          arrow: 'hover'
        }
      }
    },
    mounted () {

    },
    components:{
      Carousel,CarouselItem
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import url("../../../config/theme.less");

  section{
    width:100%;
    padding:64px 0 0 0;
    border-bottom:1px #f5f5f5 solid;
  }
  .w50{
    margin:0 auto;
    h2{
      font-family: @Microsoft;
      font-size: 24px;
      color: #565656;
      margin-bottom:16px;
      text-align: center;
      font-weight:normal;
    }
    &>p{
      font-family: @Microsoft;
      font-size: 14px;
      color: #565656;
      line-height: 18px;
      margin-bottom: 62px;
        text-align: center;
      }
    dl{
      margin-bottom:60px;
      position:relative;
      dt{
        width:40%;
        margin-top:5%;
        /*position:absolute;
        top:50%;
        transform:translateY(-50%);
        &:nth-of-type(2){
          right:0;
         }*/
        h3{
          font-size: 16px;
          color: #565656;
          margin-bottom:15px;
        }
        p{
          font-size: 14px;
          color: #565656;
          /*line-height: 18px;*/
        }
      }
      dd{
        width:45%;
        img{
          width:100%;
          height:auto;
        }
      }
    }
  }

  @media only screen and(max-width: 1280px) {
    dt{
      margin-top:0;
      p{
        font-size:12px;
      }
    }
  }



  /*--------------适应手机端屏幕-----------------*/
  .hideBox{
    display: none;
  }
  @media only screen and(max-width: @iphoneW){
    section{
      padding:0.4rem @lrW;
    }
    .wrapper{
      width:100%;
    }
    .showBox{
      display: none;
    }
    .hideBox{
      display: block;
      h2{
        font-size:0.24rem;
      }
      p{
        font-size:0.16rem;
        line-height: 0.21rem;
      }
      dl{
        height:5rem;
        /*-moz-box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);
        box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);*/
        -moz-box-shadow:0 20px 45px -20px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow:0 20px 45px -20px rgba(0, 0, 0, 0.3);
        box-shadow: 0 20px 45px -20px rgba(0, 0, 0, 0.3);
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
          }
          p{
            font-size: 0.16rem;
            color: #565656;
            line-height: 0.21rem;
          }
        }
      }
    }
  }






</style>
