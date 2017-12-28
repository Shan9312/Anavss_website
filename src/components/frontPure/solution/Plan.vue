<template>
  <section>
    <div class="w50 wrapper">
      <h2>每个角色的解决方案</h2>

      <!--
            <el-tabs v-model="activeName" @tab-click="handleClick" class="el_tabs">
              <el-tab-pane label="领导" name="first">
                <dl class="clearfix">
                  <dd class="fl"><img src="../../../assets/solution/Rectangle_2.png" alt=""></dd>
                  <dt class="fr">
                  <h3>财政性能影响</h3>
                  <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
                  </dt>
                </dl>
              </el-tab-pane>
              <el-tab-pane label="控制器" name="second">
                <dl class="clearfix">
                  <dd class="fl"><img src="../../../assets/solution/Rectangle_2.png" alt=""></dd>
                  <dt class="fr">
                  <h3>财政性能影响</h3>
                  <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
                  </dt>
                </dl>
              </el-tab-pane>
              <el-tab-pane label="会计师" name="third">
                <dl class="clearfix">
                  <dd class="fl"><img src="../../../assets/solution/Rectangle_2.png" alt=""></dd>
                  <dt class="fr">
                  <h3>财政性能影响</h3>
                  <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
                  </dt>
                </dl>
              </el-tab-pane>
              <el-tab-pane label="分析" name="fourth">
                <dl class="clearfix">
                  <dd class="fl"><img src="../../../assets/solution/Rectangle_2.png" alt=""></dd>
                  <dt class="fr">
                  <h3>财政性能影响</h3>
                  <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
                  </dt>
                </dl>
              </el-tab-pane>
            </el-tabs>
      -->
      <div class="showBox">
        <Tabs value="name1">
          <TabPane label="领导" name="name1">
            <dl class="clearfix">
              <dd class="fl"><img src="../../../assets/solution/P5.png" alt=""></dd>
              <dt class="fr">
              <h3>领导</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </TabPane>
          <TabPane label="控制器" name="name2">
            <dl class="clearfix">
              <dd class="fl"><img src="../../../assets/solution/P5.png" alt=""></dd>
              <dt class="fr">
              <h3>控制器</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </TabPane>
          <TabPane label="会计师" name="name3">
            <dl class="clearfix">
              <dd class="fl"><img src="../../../assets/solution/P5.png" alt=""></dd>
              <dt class="fr">
              <h3>会计师</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </TabPane>
          <TabPane label="分析" name="name4">
            <dl class="clearfix">
              <dd class="fl"><img src="../../../assets/solution/P5.png" alt=""></dd>
              <dt class="fr">
              <h3>分析</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </TabPane>
        </Tabs>
      </div>

      <!--适应手机端屏幕打开效果-->
      <div class="hideBox">
        <Carousel class="solution_carousel"
                  v-model="value"
                  :autoplay="setting.autoplay"
                  :autoplay-speed="setting.autoplaySpeed"
                  :dots="setting.dots"
                  :trigger="setting.trigger"
                  :arrow="setting.arrow">
          <CarouselItem class="solution_carouselItem">
            <dl>
              <dd><img src="../../../assets/solution/P5.png" alt=""></dd>
              <dt>
              <h3>领导</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
          <CarouselItem class="solution_carouselItem">
            <dl>
              <dd><img src="../../../assets/solution/P5.png" alt=""></dd>
              <dt>
              <h3>控制器</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
          <CarouselItem class="solution_carouselItem">
            <dl>
              <dd><img src="../../../assets/solution/P5.png" alt=""></dd>
              <dt>
              <h3>会计师</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
          <CarouselItem class="solution_carouselItem">
            <dl>
              <dd><img src="../../../assets/solution/P5.png" alt=""></dd>
              <dt>
              <h3>分析</h3>
              <p>
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
              </dt>
            </dl>
          </CarouselItem>
        </Carousel>
      </div>


      <!--<div data-v-0c4a3456="" class="ivu-tabs">
        <div class="ivu-tabs-bar">
          <div class="ivu-tabs-nav-container">
            <div class="ivu-tabs-nav-wrap">
              <div class="ivu-tabs-nav-scroll">
                <div class="ivu-tabs-nav">
                  <div class="ivu-tabs-ink-bar ivu-tabs-ink-bar-animated"
                       ></div>
                  <div class="ivu-tabs-tab ivu-tabs-tab-active">&lt;!&ndash;&ndash;&gt; 领导 &lt;!&ndash;&ndash;&gt;</div>
                  <div class="ivu-tabs-tab">&lt;!&ndash;&ndash;&gt; 控制器 &lt;!&ndash;&ndash;&gt;</div>
                  <div class="ivu-tabs-tab">&lt;!&ndash;&ndash;&gt; 会计师 &lt;!&ndash;&ndash;&gt;</div>
                  <div class="ivu-tabs-tab">&lt;!&ndash;&ndash;&gt; 分析 &lt;!&ndash;&ndash;&gt;</div>
                </div> &lt;!&ndash;&ndash;&gt;</div>
            </div>
          </div>
        </div>
        <div class="ivu-tabs-content ivu-tabs-content-animated" style="transform: translateX(0%) translateZ(0px);">
          <div data-v-0c4a3456="" class="ivu-tabs-tabpane">
            <dl data-v-0c4a3456="" class="clearfix">
              <dd data-v-0c4a3456="" class="fl"><img data-v-0c4a3456="" src="../../../assets/solution/P5.png" alt=""></dd>
              <dt data-v-0c4a3456="" class="fr">
              <h3 data-v-0c4a3456="">领导</h3>
              <p data-v-0c4a3456="">
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p></dt>
            </dl>
          </div>
          <div data-v-0c4a3456="" class="ivu-tabs-tabpane">
            <dl data-v-0c4a3456="" class="clearfix">
              <dd data-v-0c4a3456="" class="fl"><img data-v-0c4a3456="" src="../../../assets/solution/P5.png" alt=""></dd>
              <dt data-v-0c4a3456="" class="fr">
              <h3 data-v-0c4a3456="">控制器</h3>
              <p data-v-0c4a3456="">
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p></dt>
            </dl>
          </div>
          <div data-v-0c4a3456="" class="ivu-tabs-tabpane">
            <dl data-v-0c4a3456="" class="clearfix">
              <dd data-v-0c4a3456="" class="fl"><img data-v-0c4a3456="" src="../../../assets/solution/P5.png" alt=""></dd>
              <dt data-v-0c4a3456="" class="fr">
              <h3 data-v-0c4a3456="">会计师</h3>
              <p data-v-0c4a3456="">
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p></dt>
            </dl>
          </div>
          <div data-v-0c4a3456="" class="ivu-tabs-tabpane">
            <dl data-v-0c4a3456="" class="clearfix">
              <dd data-v-0c4a3456="" class="fl"><img data-v-0c4a3456="" src="../../../assets/solution/P5.png" alt=""></dd>
              <dt data-v-0c4a3456="" class="fr">
              <h3 data-v-0c4a3456="">分析</h3>
              <p data-v-0c4a3456="">
                财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p></dt>
            </dl>
          </div>
        </div>
      </div>-->

      <!--<div data-v-0c4a3456="" class="ivu-tabs">
        <div class="ivu-tabs-bar">
          <div class="ivu-tabs-nav-container">
            <div class="ivu-tabs-nav-wrap">
              <div class="ivu-tabs-nav-scroll">
                <div class="ivu-tabs-nav">
                  <div class="ivu-tabs-ink-bar ivu-tabs-ink-bar-animated"
                       style="display: block; width: 64px; transform: translate3d(0px, 0px, 0px);"></div>
                  <div v-for="item,index in lists" :key="index" @click="selectStyle (item, $index) " class="ivu-tabs-tab">{{item.name}}</div>
                </div> &lt;!&ndash;&ndash;&gt;</div>
            </div>
          </div>
        </div>
        <div class="ivu-tabs-content ivu-tabs-content-animated" style="transform: translateX(0%) translateZ(0px);">
          <div v-for="item,index in lists" :key="index" data-v-0c4a3456="" class="ivu-tabs-tabpane">
            <dl data-v-0c4a3456="" class="clearfix">
              <dd data-v-0c4a3456="" class="fl"><img data-v-0c4a3456="" :src="item.imgUrl" alt=""></dd>
              <dt data-v-0c4a3456="" class="fr">
              <h3 data-v-0c4a3456="">{{item.name}}</h3>
              <p data-v-0c4a3456="">
                {{item.text}}
              </p></dt>
            </dl>
          </div>
        </div>
      </div>-->

      <!-- <ul>
       <li>领导</li>
       <li>控制器</li>
       <li>会计师</li>
       <li>分析</li>
     </ul>
       <div class="clearfix banner">
         <dl class="clearfix fl">
           <dd class="fl"><img src="../../../assets/solution/P5.png" alt=""></dd>
           <dt class="fr">
           <h3>财政性能影响</h3>
           <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
           </dt>
         </dl>
         <dl class="clearfix fl">
           <dd class="fl"><img src="../../../assets/solution/P5.png" alt=""></dd>
           <dt class="fr">
           <h3>财政性能影响</h3>
           <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
           </dt>
         </dl>
         <dl class="clearfix fl">
           <dd class="fl"><img src="../../../assets/solution/P5.png" alt=""></dd>
           <dt class="fr">
           <h3>财政性能影响</h3>
           <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
           </dt>
         </dl>
         <dl class="clearfix fl">
           <dd class="fl"><img src="../../../assets/solution/P5.png" alt=""></dd>
           <dt class="fr">
           <h3>财政性能影响</h3>
           <p>财政绩效每天影响执行决策。但财务报告只是其中的一部分。为了做出明智的决定，高管们重视数据的重要性，每天会花费大量时间集中财务工作，因为财务本身细节繁琐，根据每个实际情况，不得不做出人力物力的投入高管们需要看到财务数据与业务其他方面的指标。你的工作就是以一种对每个人都有意义的方式来传达这种宏大的图景。</p>
           </dt>
         </dl>
       </div>-->

    </div>
  </section>
</template>


<script>
  import Tabs from 'iview/src/components/tabs';
  import TabPane from 'iview/src/components/tabs/pane.vue'
  import Carousel from 'iview/src/components/Carousel';
  import CarouselItem from 'iview/src/components/Carousel/carousel-item.vue'
//import planList from '../../../../static/plan'
  export default {
    data () {
      return {
        fullHeightStyle: {'min-height': document.documentElement.clientHeight + 'px'},
        activeName: 'first',
//        lists:planList.list

        value: 0,
        setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          dots: 'outside',
          trigger: 'click',
          arrow: 'hover'
        }
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      change(i){
        var animate = document.getElementsByClassName('ivu-tabs-ink-bar')[0];
        animate.style.transform = "translateX(i+'px')";
      }
    },
    mounted () {
      /*var arr = document.getElementsByClassName("ivu-tabs-tab");
      var animate = document.getElementsByClassName('ivu-tabs-ink-bar');
      for(var i = 0;i<arr.length;i++){
          arr[i].onclick = function(){
//            console.log(this);
            for(var i = 0;i<arr.length;i++){
              arr[i].classList.remove("ivu-tabs-tab-active");
            }
            this.classList.add("ivu-tabs-tab-active");
            animate
          }
      }
*/
    },
    components: {
      Tabs, TabPane, Carousel,CarouselItem
    }
  }
</script>

<style scoped="scoped" lang="less">
  @import url("../../../config/theme.less");

  section {
    width: 100%;
    padding: 64px 0 0 0;
    border-bottom: 1px #f5f5f5 solid;
  }

  .w50 {
    margin: 0 auto;
    /*overflow: hidden;*/

  h2 {
    font-family: @Microsoft;
    font-size: 24px;
    color: #565656;
    margin-bottom: 16px;
    text-align: center;
    font-weight: normal;
  }

  dl {
    margin-top: 20px;
    margin-bottom: 60px;
    position: relative;

  dt {
    width: 40%;
    position:absolute;
    right:0;
    top:50%;
    transform: translateY(-50%);

  h3 {
    font-size: 16px;
    color: #565656;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    color: #565656;
    /*line-height: 18px;*/
  }

  }
  dd {
    width: 45%;

  img {
    width: 100%;
    height: auto;
  }

  }
  }
  }


/*

  .ivu-tabs {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    color: #495060;
    zoom: 1;
  }

  .ivu-tabs-bar {
    border-bottom: 1px solid #dddee1;
    margin-bottom: 16px;
  }

  .ivu-tabs-bar {
    outline: none;
  }

  .ivu-tabs-nav-container {
    margin-bottom: -1px;
    line-height: 1.5;
    font-size: 14px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    zoom: 1;
  }

  .ivu-tabs-nav-container:before, .ivu-tabs-nav-container:after {
    content: "";
    display: table;
  }

  .ivu-tabs-nav-wrap {
    overflow: hidden;
    margin-bottom: -1px;
  }

  .ivu-tabs-nav-scroll {
    overflow: hidden;
    white-space: nowrap;
  }

  .ivu-tabs-nav-scroll .ivu-tabs-nav {
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .ivu-tabs-nav {
    padding-left: 0;
    margin: 0;
    float: left;
    list-style: none;
    box-sizing: border-box;
    position: relative;
    transition: transform 0.5s ease-in-out;
  }

  .ivu-tabs-nav:before, .ivu-tabs-nav:after {
    display: table;
    content: " ";
  }

  .ivu-tabs-nav-scroll .ivu-tabs-ink-bar {
    color: #FB5F00;
  }
  .ivu-tabs-tab-active{
    color: #FB5F00;
  }
  .ivu-tabs-ink-bar {
    height: 2px;
    box-sizing: border-box;
    background-color: #FB5F00;
    position: absolute;
    left: 0;
    bottom: 1px;
    z-index: 1;
    transition: transform 0.3s ease-in-out;
    transform-origin: 0 0;
  }

  .ivu-tabs-ink-bar {
    height: 2px;
    box-sizing: border-box;
    background-color: #FB5F00;
    position: absolute;
    left: 0;
    bottom: 1px;
    z-index: 1;
    transition: transform .3s ease-in-out;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    display: block; width: 64px;
  }

  .ivu-tabs-nav .ivu-tabs-tab {
    display: inline-block;
    height: 100%;
    padding: 8px 16px;
    margin-right: 16px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease-in-out;
  }

  .ivu-tabs-nav-scroll .ivu-tabs-tab {
    font-size: 16px;
    !*color: #565656;*!
  }

  .ivu-tabs .ivu-tabs-content-animated {
    display: flex;
    flex-direction: row;
    will-change: transform;
    transition: transform 0.3s ease-in-out;
  }

  .ivu-tabs .ivu-tabs-tabpane {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    opacity: 1;
  }

  .ivu-tabs-ink-bar{  !*bar*!
    display: block;
    width: 64px;
  }
  .ivu-tabs-tab-active{   !*tab*!

  }
  .ivu-tabs-content-animated{    !*content*!
    transform: translateX(0%) translateZ(0px)
  }
*/


  /*

    ul{
      width:100%;
      display:-webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content:space-around;
      justify-content:space-around;
      -moz-box-pack:space-around;
      -webkit--moz-box-pack:space-around;
      box-pack:space-around;
      justify-content: space-around;
      li{
        padding:12px 40px;
        !*background-color: red;*!
        &:hover{
           border-bottom:-3px #565656 solid;
            cursor: pointer;
            .banner{
              dl{
                transform: tanslateX(-950px);
                background-color: #11b95c;
              }
            }
         }
      }
    }
    .banner{
      width:5000px;
      dl{
        width:951px;

      }
    }
  */

  @media only screen and(max-width: 1280px) {
    dt {
      margin-top: 0;

    p {
      font-size: 12px;
    }
  }

  }


  /*--------------适应手机端屏幕-----------------*/
  .hideBox{
    display: none;
  }
  @media only screen and(max-width: @iphoneW){
    section{
      padding:0.4rem @lrW;
    }
    .wrapper{
      width:100%;
    }
    .showBox{
      display: none;
    }
    .hideBox{
      display: block;
    h2{
      font-size:0.24rem;
    }
    p{
      font-size:0.16rem;
      line-height: 0.21rem;
    }
    dl{
      height:5rem;
      /*-moz-box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);
      box-shadow:0 8px 15px rgba(0, 0, 0, 0.3);*/
      -moz-box-shadow:0 20px 45px -20px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow:0 20px 45px -20px rgba(0, 0, 0, 0.3);
      box-shadow: 0 20px 45px -20px rgba(0, 0, 0, 0.3);
      background: #FFFFFF;
      border-radius: 0.06rem;
      /*margin:0 0.1rem;*/
      margin:0 0.2rem 0.3rem 0.2rem;
    dd{
      width:100%;
      height:1.51rem;
    /*padding:0 0.2rem;*/
    img{
      width:100%;
      height:100%;
      border-top-left-radius: 0.06rem;
      border-top-right-radius: 0.06rem;
    }
  }
  dt{
    padding:0 0.16rem;
    width:100%;
    margin-top:0.4rem;
  h3{
    font-size:0.18rem;
    color:#565656;
    font-weight:normal;
  }
  p{
    font-size: 0.16rem;
    color: #565656;
    line-height: 0.21rem;
  }
  }
  }
  }
  }




</style>
