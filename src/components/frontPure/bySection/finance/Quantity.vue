<template>
  <section>
    <div class="w50 wrapper">
      <h2>交付数量多</h2>
      <p>在与投资者、分析师和员工交流价值的同时，你的工作是驾驭金融船，同时保持不断变化的规章制度。Domo提供了对
        影响您业务的财务指标的实时洞察，并驱动您的底线。如何做:</p>
      <ul class="clearfix">
        <li class="fl">
          <img src="../../../../assets/solution/connection.png" alt="">
          <p>连接你需要的财务数据</p>
        </li>
        <li class="fl">
          <img src="../../../../assets/solution/stats.png" alt="">
          <p>轻松地准备和可视化您的数据</p>
        </li>
        <li class="fl">
          <img src="../../../../assets/solution/clipboard.png" alt="">
          <p>问问题并采取行动</p>
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
        fullBottom:null
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
    padding:64px 0 120px 0 ;
    border-bottom:1px #f5f5f5 solid;
  }
  .w50{
    /*width:50%;*/
    /*width:1000px;*/
    margin:0 auto;
    text-align: center;
    h2{
      font-family: @Microsoft;
      font-size: 24px;
      color: #565656;
      margin-bottom:16px;
      font-weight:normal;
    }
    &>p{
      font-family: @Microsoft;
      font-size: 14px;
      color: #565656;
      line-height: 18px;
      margin-bottom: 62px;
    }
    ul{
      width:100%;
      li{
        width:100%/3;
        p{
          margin-top:16px;
        }
      }
    }
  }



  /*--------------适应手机端屏幕-----------------*/

  @media only screen and(max-width: @iphoneW){
    .wrapper{
      width:100%;
    }
    section{
      padding:0.4rem @lrW;   /* @lrW为左右边距*/
    }
    .w50{
      h2{
        font-size:0.24rem;
        margin-bottom:0.3rem;
      }
      &>p{
          font-size:0.16rem;
          line-height: 0.21rem;
        }
       ul{
         li{
           float:none;
           width:100%;
           p{
             font-size:0.18rem;
             margin-bottom:0.6rem;
           }

          &:last-child p{
             margin-bottom:0;
           }
          }
        }
    }
  }


</style>
