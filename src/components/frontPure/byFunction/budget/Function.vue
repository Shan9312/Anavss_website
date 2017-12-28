<template>
  <section>
    <div class="showBox">
      <div class="wrapper">
        <h3>通过这些预算和规划能力，领先于其他行业</h3>
        <ul>
          <li>
            <img src="../../../../assets/product/h1-1.png" alt="">
            <p>预算和性能手册</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-2.png" alt="">
            <p>假设情景规划</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-3.png" alt="">
            <p>强大的分配引擎</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-4.png" alt="">
            <p>控制和审计</p>
          </li>
        </ul>
        <ul>
          <li>
            <img src="../../../../assets/product/h1-5.png" alt="">
            <p>协作工作流程</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-6.png" alt="">
            <p>综合预测与建模</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-7.png" alt="">
            <p>过程可视化</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-8.png" alt="">
            <p>详细钻取</p>
          </li>
        </ul>
        <ul>
          <li>
            <img src="../../../../assets/product/h1-9.png" alt="">
            <p>金融情报</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-10.png" alt="">
            <p>行政</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-11.png" alt="">
            <p>报告和分析</p>
          </li>
          <li>
            <img src="../../../../assets/product/h1-12.png" alt="">
            <p>绩效管理</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="hideBox">
      <h3>通过这些预算和规划能力，领先于其他行业</h3>
      <ul class="clearfix">
        <li v-for="item,index in dataList" :key="index" class="fl">
          <div :class="'iconfont ' + item.icon"></div>
          <p>{{item.text}}</p>
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
        dataList:[
          {
              icon:'icon-shoucex',
              text:'预算和性能手册'
          },
          {
            icon:'icon-guihuax',
            text:'假设情景规划'
          },
          {
            icon:'icon--clipboardcopy',
            text:'强大的分配引擎'
          },
          {
            icon:'icon-kongzhishenjicopyx',
            text:'控制和审计'
          },
          {
            icon:'icon-guihuacopyx',
            text:'协作工作流程'
          },
          {
            icon:'icon-yucejianmox',
            text:'综合预测与建模'
          },
          {
            icon:'icon-keshihuax',
            text:'过程可视化'
          },
          {
            icon:'icon-xiangxix',
            text:'详细钻取'
          },
          {
            icon:'icon-qingbaox',
            text:'金融情报'
          },
          {
            icon:'icon-hangzhengx',
            text:'行政'
          },
          {
            icon:'icon-baogaofenxix',
            text:'报告和分析'
          },
          {
            icon:'icon-guanlix',
            text:'绩效管理'
          }

        ]
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
  }
  li{
    width:130px;
    text-align: center;
    margin-top:60px;
    p{
      margin-top:16px;
    }
  }


  /*适应手机端屏幕*/
  .hideBox{
    display:none;
  }
  @media only screen and(max-width: @iphoneW) {
    .showBox {
      display: none;
    }
    .hideBox {
      display: block;
      h3{
        font-size:0.24rem;
        font-weight:normal;
        padding:0 @lrW;
        line-height: 0.35rem;
      }
      ul{
        width:100%;
        display:block;
        li{
          width:40%;
          margin:0 5%;
          margin-top:0.6rem;
          .iconfont{
            font-size: 0.54rem;
            color:@color;
          }
          p{
            font-size: 0.18rem;
            margin-top:0.18rem;
          }

        }
      }
    }
  }

</style>
