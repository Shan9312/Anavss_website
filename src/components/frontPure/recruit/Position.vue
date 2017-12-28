<template>
  <section>
    <div class="wrapper">
      <h2>当前空缺职位</h2>
      <div class="showBox">
        <Tabs >
          <TabPane v-for="item,index in jobList" :key="index" :label="item.name" >
            <h3>{{item.name}}</h3>
            <h6>{{item.address}}</h6>
            <p>{{item.desc}}</p>
            <h6>你的工作内容：</h6>
            <ul>
              <li v-for="obj,index in item.workContent">{{obj}}</li>
            </ul>
            <h6>你们都是什么：</h6>
            <ul>
              <li v-for="obj,index in item.isWhat">{{obj}}</li>
            </ul>
            <h6>我们需要这样的你：</h6>
            <ul>
              <li v-for="obj,index in item.demand">{{obj}}</li>
            </ul>
            <h6>申请方式：</h6>
            <p>{{item.way}}</p>
          </TabPane>
        </Tabs>
      </div>


      <div class="hideBox">
        <Banner :bannerList="bannerList" :swiperClass="swiperClass"/>
      </div>
    </div>
  </section>
</template>


<script>
  import Tabs from 'iview/src/components/tabs';
  import TabPane from 'iview/src/components/tabs/pane.vue'
  import job from '../../../enums/job'
  import Banner from "../common/Banner.vue";
  export default {
    data () {
      return {
        jobList:job.list,
        //swiper
        swiperClass:"recruitBanner",
        bannerList:job.list
      }
    },
    mounted () {
    },
    components: {
      Tabs, TabPane,Banner
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import url("../../../config/theme.less");

  section{
    width:100%;
    padding:64px 0 40px 0;
  }
  .wrapper{
    height:100%;
    margin:0 auto;
  }
  h2 {
    font-family: @Microsoft;
    font-size: 24px;
    color: #565656;
    margin-bottom: 60px;
    text-align: center;
    font-weight: normal;
  }
  h3{
    font-family: @Microsoft;
    font-size: 20px;
    color: #565656;
    margin-top:24px;
  }
  h6{
    font-family: @Microsoft;
    font-size: 14px;
    color: #565656;
    margin-top:24px;
    margin-bottom:10px;
  }
  p,li{
    font-family: @Microsoft;
    font-size: 14px;
    color: #565656;
    line-height: 20px;
  }
  li{
    line-height: 24px;
  }




  /*适应手机端屏幕*/
  .hideBox{
    display:none;
  }
  @media only screen and(max-width: @iphoneW) {
    section{
      padding:0.4rem @lrW;
    }
    .wrapper{
      width:100%;
    }
    .showBox{
      display: none;
    }
    .hideBox {
      display: block;
    }

    h2 {
      font-size: 0.24rem;
      margin-bottom: 0.4rem;
    }
  }

</style>
