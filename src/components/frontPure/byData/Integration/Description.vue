
<template>
  <section>
    <div class="w50 wrapper">
      <h2>自适应集成</h2>
      <p>如果您没有自动化数据如何从事务系统迁移到规划工具，那么变更的步伐就很难成功地建模，预测和分析业务。手动拉动，按摩和导入CSV和工作表不会缩放。自适应集成使财务团队能够自动化其数据流，从而可以花费更多时间了解和分析数据，而不是将其从一个地方排列。我们的客户利用自适应集成功能来减少错误风险，从低附加值任务中释放财务时间，并加快月末报告周期。</p>
      <div class="showBox">
        <dl class="clearfix">
          <dd class="fl"><img src="../../../../assets/byData/integration/i-1.png" alt=""></dd>
          <dt class="fr">
          <h3>提高团队生产力，减少错误风险</h3>
          <p>自动数据流使您可以一致和可靠地访问您的CRM，ERP或您的业务所依赖的任何交易系统的源数据。您的模型和报告中的数据是最新和准确的。您不必担心上传正确的CSV文件，或者如果有人在您用于合并的数百个电子表格中的一个中打破了公式。由于数据直接来自源，您知道您正在使用_real_数字。这可以让您的团队通过分析，查询和了解您的业务增加更多的价值。</p>
          </dt>
        </dl>
        <dl class="clearfix">
          <dt class="fl">
          <h3>财务管理的数据集成</h3>
          <p>在自适应套件的集成方法，使企业用户，而不仅仅是IT，在平台来管理和维护他们的数据。我们用于计算和转换的点击非代码方法可以节省时间，但也可以为熟悉公式和数学但不想编写代码的财务用户提供。我们让用户在将其加载到模型之前，在分段区域中测试和可视化其源数据。此外，您可以组合来自多个源系统的数据，为您提供更完整的图像。</p>
          </dt>
          <dd class="fr"><img src="../../../../assets/byData/integration/i-2.png" alt=""></dd>
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
              <dd class=""><img src="../../../../assets/solution/Rectangle_1.png" alt=""></dd>
              <dt class="">
              <h3>提高团队生产力，减少错误风险</h3>
              <p>自动数据流使您可以一致和可靠地访问您的CRM，ERP或您的业务所依赖的任何交易系统的源数据。您的模型和报告中的数据是最新和准确的。您不必担心上传正确的CSV文件，或者如果有人在您用于合并的数百个电子表格中的一个中打破了公式。由于数据直接来自源，您知道您正在使用_real_数字。这可以让您的团队通过分析，查询和了解您的业务增加更多的价值。</p>
              </dt>
            </dl>
          </CarouselItem>
          <CarouselItem class="solution_carouselItem">
            <dl class="">
              <dd class=""><img src="../../../../assets/solution/Rectangle_1.png" alt=""></dd>
              <dt class="">
              <h3>财务管理的数据集成</h3>
              <p>在自适应套件的集成方法，使企业用户，而不仅仅是IT，在平台来管理和维护他们的数据。我们用于计算和转换的点击非代码方法可以节省时间，但也可以为熟悉公式和数学但不想编写代码的财务用户提供。我们让用户在将其加载到模型之前，在分段区域中测试和可视化其源数据。此外，您可以组合来自多个源系统的数据，为您提供更完整的图像。</p>
              </dt>
            </dl>
          </CarouselItem>
          <!--<CarouselItem class="solution_carouselItem">
            <dl class="">
              <dd class=""><img src="../../../../assets/solution/Rectangle_1.png" alt=""></dd>
              <dt class="">
              <h3>财政性能影响</h3>
              <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>-->
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
  @import url("../../../../config/theme.less");

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
