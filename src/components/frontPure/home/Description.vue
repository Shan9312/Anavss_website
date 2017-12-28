<template>
  <section>
    <div class="showBox">
      <h2>产品特色</h2>
      <div class='wrapper'>
        <div>
          <img src="../../../assets/home/home_1.png" alt="">
          <p class='title'>
            降低计算失误率
          </p>
          <p>减少excel中佣金计算的</p>
          <p>报错率，避免因计算失误而出</p>
          <p>现的多余的应付佣金</p>
        </div>
        <div>
          <img src="../../../assets/home/home_2.png" alt="">
          <p class='title'>
            减少管理成本
          </p>
          <p>降低因佣金计算失误</p>
          <p>而出现的纠错环节，减少时间</p>
          <p>成本</p>
        </div>
        <div>
          <img src="../../../assets/home/home_3.png" alt="">
          <p class='title'>
            减少后勤和行政成本
          </p>
          <p>以平台数据的自动集成，计算自动化，</p>
          <p>清晰的数据报告取代人力计算，</p>
          <p>降低相关人力成本</p>
        </div>
        <div>
          <img src="../../../assets/home/home_4.png" alt="">
          <p class='title'>
            增强团队信任感
          </p>
          <p>透明的计算过程，开</p>
          <p>明的数据访问，提高数据信</p>
          <p>服力</p>
        </div>
        <div>
          <img src="../../../assets/home/home_5.png" alt="">
          <p class='title'>
            提高企业生产力
          </p>
          <p>摆脱人力核算环节，增</p>
          <p>加销售活动投入，促进工作</p>
          <p>增值</p>
        </div>
        <div>
          <img src="../../../assets/home/home_6.png" alt="">
          <p class='title'>
            佣金方案灵活多样
          </p>
          <p>丰富的佣金解决方案库</p>
          <p>您最佳的佣金解决方案</p>
        </div>
        <div>
          <img src="../../../assets/home/home_7.png" alt="">
          <p class='title'>
            智能数据报告及分析
          </p>
          <p>强大的预置计算模型，</p>
          <p>全面报告销售数据，灵活创</p>
          <p>建数据报告</p>
        </div>
        <div>
          <img src="../../../assets/home/home_8.png" alt="">
          <p class='title'>
            数据集成功能
          </p>
          <p>可灵活导入crm系统，</p>
          <p>用友/金蝶等会计系统，集成</p>
          <p>数据，降低数据录入错误率</p>
        </div>
        <div>
          <img src="../../../assets/home/home_9.png" alt="">
          <p class='title'>
            独立的操作系统
          </p>
          <p>在数据可正常导入前提</p>
          <p>下可独立操作，也可系统自</p>
          <p>运行</p>
        </div>
        <div>
          <img src="../../../assets/home/home_10.png" alt="">
          <p class='title'>
            数据可追踪
          </p>
          <p>计划期数据可追踪，</p>
          <p>增强员工业务能力可视化</p>
        </div>
        <div>
          <img src="../../../assets/home/home_11.png" alt="">
          <p class='title'>
            及时计算并预估佣金
          </p>
          <p>实时预算佣金数据，提</p>
          <p>高佣金计算可见性</p>
        </div>
        <div>
          <img src="../../../assets/home/home_12.png" alt="">
          <p class='title'>
            佣金计算透明化
          </p>
          <p>一站式管理佣金数据，</p>
          <p>清晰化佣金报表，降低沟通</p>
          <p>成本</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    data () {
      return {

      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang="less">
  @import url("../../../config/base.less");

  section{
    background: #101010;
    width:100%;
  }
  .showBox{
    background:#fff;
    margin-top:44px;
    &>h2{
      font-size:24px;
      margin:0 auto;
      width:4em;
      color:#000;
      padding-bottom:8px;
      border-bottom:1px solid #000;
      margin-bottom:80px;
    }
     .wrapper{
      margin:0 auto;
      // border:1px solid red;
      max-width:1200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      &>div{
        flex:0 0 25%;
        // border:1px solid red;
        text-align: center;
        margin-bottom:80px;
        &>img{
          height:84px;
        }
        p{
          font-size:12px;
          padding:3px 0;
        }
        .title{
          margin-top:32px;
          margin-bottom:17px;
          font-weight: 700;
          font-size: 14px;
        }
      }
    }
  }
  @media only screen and(max-width: @iphoneW){
    .wrapper{
      width:100%;
      &>div{
        flex:0 0 50%!important;
        align-self: center;
      }
    }
  }

</style>
