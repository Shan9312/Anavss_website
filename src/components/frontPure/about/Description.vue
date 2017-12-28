<template>
  <section>
    <div class="main_top">
      <div class="wrapper">
        <h2>我们的使命</h2>
        <p>当我们打算创办艾尼韦思时，我们的使命就非常明确：提供强大、直观的解决方案，连接财务和业务，用数据去驱动业务。通过艾尼韦思，各种规模和行业的公司可以更智能地做规划和预算，更快地进行分析和报告，并以前所未有的方式实现更好的业务绩效。
        </p>
        <p>作为国内智能化预算与分析系统的先行者，艾尼韦思将牢牢把握以客户为中心的发展理念。我们将提供国内唯一一站式财务规划、预测和分析平台，包括完整的企业绩效管理（CPM）和商业智能（BI）产品，提供广受新一代企业管理者和财务从业者喜爱的用户体验，提供无与伦比的服务和领先的专业知识。我们很荣幸，能够与国内广大企业管理者一同实现数字化转型，为中国经济的持续稳健发展作出自己的一份贡献。
        </p>
        <p>我们将不断以高标准要求自己，提供更好的产品，更好的用户体验，更好的客户满意度，成为企业信任的合作伙伴和预算与分析系统供应商。
        </p>
      </div>
    </div>
    <div class="main_bot">
      <div class="wrapper">
        <h2>我们的创新技术</h2>
        <!--<h3>艾尼韦思的软件即服务（SaaS）交付模式比传统的内部部署企业绩效管理软件具有显着的优势。</h3>-->
        <ul>
          <li><strong>更快的部署：</strong><span>与传统软件相比，我们的平均部署时间只需要几周，而不是几个月或超过一年。</span></li>
          <li class="clearfix"><strong>更易于使用</strong>：<span>我们直观的用户界面结合了大多数人熟悉的To C类应用程序以及Excel，专为所有类型的业务用户而设计。这大大减少了培训时间，加快了上手速度，从而节省了更快的时间。 </span></li>
          <li><strong>对IT要求很低</strong>：<span>国内大多数中小企业的It基础设施比较差，而我们的软件并不需要新的硬件，软件或IT支持 - 只需浏览器和互联网连接。</span></li>
          <li><strong>自动升级</strong>：<span>所有用户都可以立即访问新功能，无需持续的IT支持。</span></li>
          <li><strong>降低成本</strong>：<span>按月／按年订阅付费、快速的项目部署、无需硬件支持和专业It支持维护等，这一切能为您节约75％的成本。</span></li>
        </ul>
      </div>
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
  @import url("../../../config/theme.less");

  section{
    background:url("../../../assets/about/bg-about.png") no-repeat;
    background-size: cover;
    background-position: center @th;    /*@th为header高度*/
    width:100%;
    /*padding-top:@th;*/
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
    margin-bottom: 40px;
  }
  h3{
    font-size: 16px;
    text-align: center;
    font-weight:normal;
    color:#fff;
    margin-top:10px;
  }
  p{
    font-size:16px;
    line-height:24px;
    margin-top:40px;
    text-indent: 30px;
  }
  strong{
    font-weight: 900;
  }
  .main_top{
    background:#fff;
    padding:64px 40px;
    h2,p{
      color:#565656;
    }
  }
  .main_bot{
    background: #101010;
    padding:64px 40px;
    h2{
      color:#fff;
    }
    li{
      list-style: disc;
      line-height:30px;
      font-size: 16px;
      color:#f0f0f0;
      margin-bottom:25px;
      p{
        display: inline-block;
      }
    }

  }



  /*适应手机端屏幕*/

  @media only screen and(max-width: @iphoneW){
    .wrapper{
      width:100%;
    }
    .main_top{
      padding:0.4rem 0.2rem 0.2rem 0.2rem;
    }
    h2{
      font-size:0.24rem;
      margin-bottom:0.2rem;
    }
    p{
      font-size:0.16rem;
      line-height: 0.22rem;
      margin-top:0.2rem;
      text-indent: 0.3rem;
    }
    .main_bot{
      padding:0.4rem 0.2rem 0.2rem 0.4rem;
      li{
        line-height:0.24rem;
        font-size:0.16rem;
        margin-bottom:0.25rem;
      }
    }
  }
</style>
