<template>
  <section>
    <div class="wrapper">
      <h3>通过这些预算和规划能力，领先于其他行业</h3>
      <p>我们已经在150多个不同的源系统中完成了超过1500个集成，包括Oracle，SAP，NetSuite，Intacct，MS Dynamics（Great Plains），Salesforce.com，Deltek Vision，Epicor，Sage，Workday，Plex，Multiview和还有很多。我们的平台在基于云的，内部部署和基于文件的应用程序中似乎无懈可击。我们了解到，每个业务对于他们的数据应该在其规划系统中的行为有一套独特的要求和需求。我们的专业服务团队拥有深厚的专业知识，可以支持任何规模的企业，在任何行业，满足最复杂和复杂场景的数据需求。</p>
      <div class="bot">
        <img src="../../../../assets/byData/integration/i-3.png" alt="">
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'},
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
  p{
    font-size: 16px;
    color: #565656;
    line-height: 24px;
    text-align: center;
    margin:40px 0 60px 0;
  }
  .bot{
    width:100%;
    text-align: center;
  }



</style>
