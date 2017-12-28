<template>
  <section>
    <div class="w50 wrapper">
      <h2>我们的价值观</h2>

      <div class="showBox">
        <Tabs >
          <TabPane  v-for="(item,index) in bannerList" :label="item.title" :key="index">
            <dl class="clearfix">
              <dd class="fl"><img :src="item.imgSrc" alt=""></dd>
              <dt class="fr">
              <h3>{{item.title}}</h3>
              <p>{{item.text}}</p>
              </dt>
            </dl>
          </TabPane>
        </Tabs>
      </div>

      <!--适应手机端屏幕打开效果-->
      <div class="hideBox">
        <!--<Carousel class="solution_carousel"
                  v-model="value"
                  :autoplay="setting.autoplay"
                  :autoplay-speed="setting.autoplaySpeed"
                  :dots="setting.dots"
                  :trigger="setting.trigger"
                  :arrow="setting.arrow">
          <CarouselItem class="solution_carouselItem">
            <dl>
              <dd><img src="../../../../assets/solution/P5.png" alt=""></dd>
              <dt>
              <h3>领导</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
          <CarouselItem class="solution_carouselItem">
            <dl>
              <dd><img src="../../../../assets/solution/P5.png" alt=""></dd>
              <dt>
              <h3>控制器</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
          <CarouselItem class="solution_carouselItem">
            <dl>
              <dd><img src="../../../../assets/solution/P5.png" alt=""></dd>
              <dt>
              <h3>会计师</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
          <CarouselItem class="solution_carouselItem">
            <dl>
              <dd><img src="../../../../assets/solution/P5.png" alt=""></dd>
              <dt>
              <h3>分析</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
        </Carousel>-->
        <Banner :bannerList="bannerList" :swiperClass="swiperClass"/>
      </div>





    </div>
  </section>
</template>


<script>
  import Tabs from 'iview/src/components/tabs'
  import TabPane from 'iview/src/components/tabs/pane.vue'
  import Banner from '../common/Banner.vue'
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'},
        // swiper
        swiperClass: 'aboutBanner',
        bannerList: [
          {
            imgSrc: require('../../../assets/about/1.png'),
            title: '让客户更好',
            text: '软件即服务（SaaS）是一种新的服务模式，与传统的软件公司相比，在业务上有深刻的文化差异。这种基于订阅的商业模式很好地将我们的利益与我们的客户的利益邦在一起:只有当我们的客户成功并随着时间的推移，我们才会盈利。因此，我们专注于提供特殊的价值来吸引和留住满意的顾客。'
          },
          {
            imgSrc: require('../../../assets/about/2.png'),
            title: '让合作伙伴更好',
            text: '企业绩效管理涉及到的面非常广，从规划到预算，从预算到实际执行后的分析，特别是模拟与预测方面，我们需要与不同的合作伙伴合作，才能为客户提供更专业的解决方案。因此，我们奉行广泛的开放和合作策略，我们做好平台的开发和推广工作，协助各方面的合作伙伴做好解决方案的部署和执行。'
          },
          {
            imgSrc: require('../../../assets/about/3.png'),
            title: '让员工更好',
            text: '作为国内智能预算与分析系统的先行者，我们需要与全体员工一同集思广益，刻苦工作，才能不断推出新的功能，新的解决方案。因此，我们必须让员工切实享受企业发展壮大所带来的精神和物质财富。'
          },
          {
            imgSrc: require('../../../assets/about/4.png'),
            title: '让投资者更好',
            text: '软件即服务（SaaS）是一种新的服务模式，与传统的软件公司相比，在商业模式上有大的不同。这种基于订阅的商业模式使得我们在产品前期的开发和推广中，需要投资者的信任和资金支持，同时，这些信任和支持，需要经过较长时间才能得到回报。因此，我们也会通过努力，让投资者得到更满意的回报。'
          }
        ]
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      },
      change (i) {
        var animate = document.getElementsByClassName('ivu-tabs-ink-bar')[0]
        animate.style.transform = "translateX(i+'px')"
      }
    },
    mounted () {

    },
    components: {
      Tabs, TabPane, Banner

    }
  }
</script>

<style scoped="scoped" lang="less">
  @import url("../../../config/theme.less");

  section {
    width: 100%;
    padding: 64px 0 0 0;
    border-bottom: 1px #f5f5f5 solid;
  }

  .w50 {
    margin: 0 auto;
    overflow: hidden;

    h2 {
      font-family: @Microsoft;
      font-size: 24px;
      color: #565656;
      margin-bottom: 16px;
      text-align: center;
      font-weight: normal;
    }
    dl {
      margin-top: 20px;
      margin-bottom: 60px;
      position: relative;
      dt {
        position:absolute;
        right:0;
        top:50%;
        transform: translateY(-50%);
        width: 47%;
        h3 {
          font-size: 16px;
          color: #565656;
          margin-bottom: 15px;
        }
        p {
          font-size: 14px;
          color: #565656;
          line-height: 20px;
        }
      }
      dd {
        width: 43%;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }


  @media only screen and(max-width: 1280px) {
    dt {
      margin-top: 0;

    p {
      font-size: 12px;
      line-height: 0;
    }
  }

  }


  /*--------------适应手机端屏幕-----------------*/
  .hideBox{
    display: none;
  }
  @media only screen and(max-width: @iphoneW) {
    section {
      padding: 0.4rem @lrW;
    }

    .wrapper {
      width: 100%;
    }

    .showBox {
      display: none;
    }

    .hideBox {
      display: block;

    h2 {
      font-size: 0.24rem;
    }

    p {
      font-size: 0.16rem;
      line-height: 0.21rem;
    }
  }

  }

</style>
