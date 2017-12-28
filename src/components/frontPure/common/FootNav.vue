<template>
  <section>
    <!-- <div class='footLogo'><img src='../../../assets/home/logo.png' alt=''></div> -->
    <div class='wrapper footFlex'>
        <ul>
          <p>产品</p>
          <li v-for='(item,index) in products' :key='index'>
            <router-link :to='item.url'>{{item.name}}</router-link>
          </li>
        </ul>
        <ul>
          <p>解决方案</p>
          <li v-for='(item,index) in solutions' :key='index'>
            <router-link :to='item.url'>{{item.name}}</router-link>
          </li>
        </ul>
        <ul>
          <p>资源中心</p>
          <li v-for='(item,index) in resources' :key='index'>
            <router-link :to='item.url'>{{item.name}}</router-link>
          </li>
        </ul>
        <ul>
          <p>服务</p>
          <li v-for='(item,index) in services' :key='index'>
            <router-link :to='item.url'>{{item.name}}</router-link>
          </li>
        </ul>
        <ul>
          <p>关于公司</p>
          <li v-for='(item,index) in abouts' :key='index'>
            <router-link :to='item.url'>{{item.name}}</router-link>
          </li>
        </ul>
    </div>
    <!--<div class='wrapper'>-->
      <Collapse accordion class='footHide'>
        <Panel name='1' class='panel'>
          产品
          <p slot='content' class='slot' v-for='(item,index) in products' :key='index'>
            <router-link :to='item.url'>{{item.name}}</router-link>
          </p>
        </Panel>
        <Panel name='2' class='panel'>
          解决方案
          <p slot='content' class='slot' v-for='(item,index) in solutions' :key='index'>
            <router-link :to='item.url'>{{item.name}}</router-link>
          </p>
        </Panel>
        <Panel name='3' class='panel'>
          资源中心
          <p slot='content' class='slot' v-for='(item,index) in resources' :key='index'>
            <router-link :to='item.url'>{{item.name}}</router-link>
          </p>
        </Panel>
        <Panel name='4' class='panel'>
          服务
          <p slot='content' class='slot' v-for='(item,index) in services' :key='index'>
            <router-link :to='item.url'>{{item.name}}</router-link>
          </p>
        </Panel>
        <Panel name='5' class='panel'>
          关于公司
          <p slot='content' class='slot' v-for='(item,index) in abouts' :key='index'>
            <router-link :to='item.url'>{{item.name}}</router-link>
          </p>
        </Panel>
      </Collapse>
    <!--</div>-->
  </section>
</template>


<script>
  import Collapse from 'iview/src/components/collapse'
  import Panel from 'iview/src/components/collapse/panel.vue'
  export default {
    data () {
      return {
        products: [
          {
            name: '数据集成',
            url: '/home'
          },
          {
            name: '数据分发',
            url: ''
          },
          {
            name: '数据可视化',
            url: ''
          },
          {
            name: '数据分析',
            url: ''
          },
          {
            name: '开放平台',
            url: ''
          }
        ],
        solutions: [
          {
            name: '行业',
            url: ''
          },
          {
            name: '角色',
            url: ''
          },
          {
            name: '部门',
            url: ''
          },
          {
            name: '应用中心',
            url: ''
          },
          {
            name: '连接器',
            url: ''
          }
        ],
        resources: [
          {
            name: '文章',
            url: ''
          },
          {
            name: '案列',
            url: ''
          },
          {
            name: '获取Demo',
            url: ''
          },
          {
            name: '下载',
            url: ''
          }
        ],
        services: [
          {
            name: '咨询',
            url: ''
          },
          {
            name: '技术支持',
            url: ''
          }
        ],
        abouts: [
          {
            name: '关于我们',
            url: '/about'
          },
          {
            name: '客户',
            url: ''
          }
        ]
      }
    },
    mounted () {
    },
    components: {
      Collapse, Panel
    }
  }
</script>

<style scoped='scoped' lang='less'>
  @import url('../../../config/base.less');

  a:hover{
    color:@color;
  }

 section{
   width:100%;
   background: #425066;
   .wrapper{
     margin:0 auto;
   }
   .footFlex{
    padding:54px 0 60px 100px;
    text-align: left;      
   }
 }
  .footLogo{
    width:100%;
    text-align: center;
    margin-bottom:40px;
  }
  .footFlex{
    // display:-webkit-box;
    // display: -moz-box;
    // display: -ms-flexbox;
    // display: -webkit-flex;
    // display: flex;
    // -webkit-justify-content:space-between;
    // justify-content:space-between;
    // -moz-box-pack:space-between;
    // -webkit--moz-box-pack:space-between;
    // box-pack:space-between;
    // justify-content: space-between;
    height:300px;
  }
  ul{
    float: left;
    text-align: center;
    margin-right:63px;
    p{
      font-family: @Microsoft;
      font-size: 14px;
      color: #FFFFFF;
      letter-spacing: 0.09px;
      margin-bottom:22px;
      text-align: left;
      line-height:1em;
    }
    li{
      text-align: left;
      line-height: 1em;
    }
    a{
      font-family: @Microsoft;
      font-size: 14px;
      color: #ece9e9;
      letter-spacing: 0.08px;
      display: inline-block;
      margin-top:16px;
    }
  }
  .footHide{
    display:none;
  }


/*适应链接在手机端打开的效果*/
  @media only screen and(max-width: @iphoneW){
    section{
      padding:0.3rem 0 0.1rem 0;
    }
    .footLogo{
      text-align: left;
      margin-bottom:0.2rem;
      img{
        margin-left:0.3rem;
      }
    }
    .footFlex{
      display:none;
    }
    .footHide{
      width:100%;
      display: block;
      background: #425066;
      /*font-size:0.16rem;*/
      border:0;
      /*color:#b8b8b8;*/
      a{
        color:#b8b8b8;
        &:hover{
            color:@color;
         }
      }
      .panel{
        padding:0.1rem 0;
        font-size:0.16rem;
        border-top: 1px solid #2A2A2A;
        &:nth-of-type(1){
           border-top:0;
         }
         a{
           font-size:0.14rem;
           display: inline-block;
           width:100%;
         }
      }
      .slot{
        margin-left:0.3rem;
      }
    }
  }

</style>
