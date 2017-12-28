<template>
  <section>
    <div class="showBox">
      <div class="wrapper">
        <h3>平台特色</h3>
        <ul>
          <li v-for="item,index in dataList" :key="index">
            <div class="img"><img :src="item.imgSrc"></div>
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
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
              imgSrc:require('../../../assets/platform/t1.png'),
              text:'可视化图形驱动树'
          },
          {
            imgSrc:require('../../../assets/platform/t2.png'),
            text:'多条件模拟'
          },{
            imgSrc:require('../../../assets/platform/t3.png'),
            text:'快速内存引擎'
          },
          {
            imgSrc:require('../../../assets/platform/t4.png'),
            text:'灵活的分析'
          },
          {
            imgSrc:require('../../../assets/platform/t5.png'),
            text:'广泛的数据集成和连接'
          },
          {
            imgSrc:require('../../../assets/platform/t6.png'),
            text:'高效的协同作用'
          }
        ]
      }
    },
    mounted () {
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import url("../../../config/theme.less");

  .showBox{
    width:100%;
    background: #1D1C1C;
    padding:64px 0 20px 0;
  }
  .wrapper{
    margin:0 auto;
    h3{
      font-size: 24px;
      color: #FFFFFF;
      margin-bottom: 50px;
      text-align: center;
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

      -webkit-flex-wrap:wrap;
      flex-wrap:wrap;

      li{
        width:25.5%;
        border-radius: 4px;
        /*height:310px;*/
        background:#fff;
        margin-bottom:60px;
        .img{
          width:100%;
          height:75%;
          img{
            width:100%;
            height:100%;
          }
        }
        p{
          text-align: center;
          font-size: 18px;
          color: #565656;
          margin:27px 0 27px 0;
        }
      }
    }
  }

  /*适应手机端屏幕*/
  .hideBox{
    display:none;
  }
  @media only screen and(max-width: @iphoneW){
    .section{
      display:none;
    }
    .hideBox{
      display:block;

    }
  }


</style>
