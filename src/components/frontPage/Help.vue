<template>
  <transition>
    <div class='help'>
      <AHeader/>
      <div class='imgShow'> </div>
      <div class='content'>
        <div class='item' v-for='(item,index) in contentData' :key='index'>
          <span class='title' v-html='item.title'></span>
          <p class='text' v-text='item.text'> </p>
        </div>
      </div>
      <FootNav/>
      <AFooter/>
    </div>
  </transition>
</template>


<script>
  import AHeader from '../frontPure/common/AHeader'
  import AFooter from '../frontPure/common/AFooter'
  import FootNav from '../frontPure/common/FootNav'

  export default {
    data () {
      return {
        contentData: [
          {
            title: '我们公司的佣金和奖金计划非常繁杂，核心可以支撑超绝的复杂化的计划吗？&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            text: '本核心使用独有的技术，使得复杂规则处理和运算简单化。核心特色的专有技术可使没有经验的用户在无预先设定的特定程序下都可创建和处理最复杂的计划规则。'
          },
          {
            title: '是否能够以月读，季度，年度的方式跟踪把控收集到的代理产品及佣金等数据信息？',
            text: '激励管理的所有方面都在核心应用中得到支持，包括数据覆盖，拆分，团队池，加速器，奖金和退款，底点，峰值和增加的目标。核心可以根据用户指定的字段和配置，跟踪和存储数据关联人，组织和活动。该应用程序还支持不限数量的佣金周期和付款时间表。任何周期都可以很容易的被定义和跟踪，并且可以同时运营多个循环。'
          },
          {
            title: '可以直接以excel/csv的文件格式上传数据吗？&nbsp;&nbsp;',
            text: '当然可以，核心可以整合任何形式的表格请求，可以满足标准的excel/csv文件导入导出功能。核心可实时审核记录并允许用户在文件上传过程中的数据纠错。因此，您不用为系统内的数据错误而担心。'
          },
          {
            title: '核心可以把数据整合到salesforce.com平台吗？',
            text: '作为force.com发展中的一员，核心可以把数据充分整合到salesforce.com平台。'
          },
          {
            title: '可以在区域内计算重叠或分离的佣金吗？ ',
            text: '分割，重置，奖金，配额，加速器，底值，峰值，退款，增加的目标和多层的佣金都是核心支持的一部分。'
          },
          {
            title: '平台可以整合会计软件和微软系统吗？&nbsp;&nbsp;&nbsp;&nbsp;',
            text: '是的，整合当下流行的财会软件和crm技术是本平台的基本要求。但因为客户主体要求不同（保险，时间，个人领域等）,我们通常会有区别的整合系统。'
          },
          {
            title: '购买后提供何种形式的使用培训？',
            text: '培训及完整的文档提供了各种级别的支持，以使您尽可能快速和高效地运行。网上有一个问题系统和知识库，并配备现场技术人员回答客户问题。'
          },
          {
            title: '可以多快上手操作核心功能？&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            text: '根据您计划需求的复杂性，客户机部署可以从一天到几周不等。对于一个中等规模的2-3个数据源计划和10-12个独特的支付组件，实现通常需要一周的时间。'
          },
          {
            title: '可以批量提供折扣吗？&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            text: '是的，我们就根据您的需求提供相应的价格选择，包括批量折扣。'
          },
          {
            title: '核心提供何种形式的报告功能？&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
            text: '核心有灵活的基于web的报告模块，自定义报告设定器，交互式的“拖放”分析和仪表板板块是我们最常用的功能。批量的电子邮件分发引擎允许您通过一个按钮的点击发送多个个性化的信息报告。'
          }
        ]
      }
    },
    components: {
      AHeader,
      FootNav,
      AFooter
    },
    mounted () {
    }
  }

</script>

<style scoped="scoped" lang="less">
  @import url("../../config/base.less");
  .help{
    .imgShow{
      width:100%;
      height:684px;
      background:#ffbf00 url('../../assets/help/help_bg.jpg') no-repeat 50% 80px;
    }
    .content{
      max-width:1200px;
      margin:0 auto;
      padding:80px 0 70px 80px;
      .item{
        margin-bottom:30px;
        .title{
          display: inline-block;
          background: #00a0e9;
          border-radius: 24px 0 24px 0;
          font-size:15px;
          padding:8px 16px;
          color:#fff;
        }
        .text{
          padding-left:23px;
          margin-top:20px;
          color:#645e5e;
          width:60%;
        }
      }
    }
  }


</style>
