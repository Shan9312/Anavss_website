<template>
  <section>
    <div class="showBox">
      <div class="wrapper">
        <h3>平台技术</h3>
        <ul>
          <li v-for="item,index in dataList" :key="index">
            <div class="img"><img :src="item.imgSrc"></div>
            <h4>{{item.title}}</h4>
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
            imgSrc:require('../../../assets/platform/j1.png'),
            title:'客户端',
            text:'Anavss platform是基于网络的软件解决方案。可以兼容市面主流浏览器，您可以在基于云的产品或内部部署之间进行选择。'
          },
          {
            imgSrc:require('../../../assets/platform/j2.png'),
            title:'服务器',
            text:'Anavss platform内部服务器组件基于Java开发，可以在Windows和Linux上运行。 Anavss platform上的应用程序可以跨多个服务器进行扩展。'
          },{
            imgSrc:require('../../../assets/platform/j3.png'),
            title:'数据库',
            text:'支持在MySQL，MS SQL Server，SAP HANA，PostgreSQL，Oracle和其他SQL数据库上的使用。'
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
    background: #fff;
    padding:64px 0 20px 0;
  }
  .wrapper{
    margin:0 auto;
    h3{
      font-size: 24px;
      color: #565656;
      margin-bottom: 50px;
      text-align: center;
    }
    ul {
      width: 100%;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      -moz-box-pack: space-between;
      -webkit--moz-box-pack: space-between;
      box-pack: space-between;
      justify-content: space-between;

     /* -webkit-flex-wrap: wrap;
      flex-wrap: wrap;*/

      li {
        width: 25.5%;
        border-radius: 4px;
        height:400px;
        background: #fff;
        margin-bottom: 60px;

        .img {
          width:250px;
          height:200px;
          text-align:center;
          margin:0 auto;
          /*img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }*/
          &:last-child{
            img{
              display: inline-block;
              width:153px;
              height:179px;
              margin:0 auto;
            }
           }
         }
        h4{
          font-size: 18px;
          color: #565656;
          text-align: center;
          font-weight: normal;
          margin-top:56px;
        }
        p {
          text-align: center;
          font-size: 16px;
          color: #565656;
          line-height: 22px;
          margin: 27px 0 27px 0;
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
