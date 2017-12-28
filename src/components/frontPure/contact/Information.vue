<template>
  <section>
    <div class="wrapper">
      <h2>联系方式</h2>
      <h6>商务合作：</h6>
      <p>business@anavss.com</p>
      <h6>媒体垂询：</h6>
      <p>media@anavss.com</p>
      <h6>地址：</h6>
      <p>上海市虹口区柳营路125号明凯大厦1006室</p>

     <!-- <div class="map">
        <img src="../../../assets/contact/cmap.png" alt="">
      </div>-->
      <!--百度地图容器-->
      <div style="width:100%;height:423px;border:#ccc solid 1px;font-size:12px" id="map"></div>
    </div>
  </section>
</template>


<script>
  export default {
    data () {
      return {

      }
    },
    mounted () {
      //创建和初始化地图函数：
      function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMapOverlay();//向地图添加覆盖物
      }
      function createMap(){
        map = new BMap.Map("map");
        map.centerAndZoom(new BMap.Point(121.474833,31.277472),17);
      }
      function setMapEvent(){
        map.enableScrollWheelZoom();
        map.enableKeyboard();
        map.enableDragging();
        map.enableDoubleClickZoom()
      }
      function addClickHandler(target,window){
        target.addEventListener("click",function(){
          target.openInfoWindow(window);
        });
      }
      function addMapOverlay(){
        var markers = [
          {content:"我们期待听到您的声音",title:"上海市虹口区柳营路125号明凯大厦1006室",imageOffset: {width:-46,height:-21},position:{lat:31.277503,lng:121.474833}}
        ];
        for(var index = 0; index < markers.length; index++ ){
          var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
          var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
            imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
          })});
          var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
          var opts = {
            width: 200,
            title: markers[index].title,
            enableMessage: false
          };
          var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
          marker.setLabel(label);
          addClickHandler(marker,infoWindow);
          map.addOverlay(marker);
        };
      }
      //向地图添加控件
      function addMapControl(){
        var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        scaleControl.setUnit(BMAP_UNIT_METRIC);
        map.addControl(scaleControl);
        var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:0});
        map.addControl(navControl);
        var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
        map.addControl(overviewControl);
      }
      var map;
      initMap();
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
  h6{
    font-family: @Microsoft;
    font-size: 14px;
    color: #565656;
    margin-top:30px;
    margin-bottom:12px;
     &:nth-of-type(1){
       margin-top:0;
     }

  }
  p{
    font-family: @Microsoft;
    font-size: 14px;
    color: #565656;
    line-height: 20px;
  }
  .map{
    width:100%;
    height:auto;
    margin-top:20px;
    img{
      width:100%;
      height:100%;
    }
  }
  #map{
    margin-top:20px;
  }


  /*--------------适应手机端屏幕-----------------*/

  @media only screen and(max-width: @iphoneW){
    section{
      padding:0.4rem 0;
    }
    .wrapper{
      width:100%;
      padding:0 @lrW;
    }
    h2 {
      font-size:0.24rem;
      margin-bottom: 0.3rem;
    }
    h6{
      font-size:0.18rem;
      margin-top:0.3rem;
      margin-bottom:0.12rem;
      font-weight:500;
      &:nth-of-type(1){
         margin-top:0;
       }
    }
    p{
      font-size: 0.16rem;
      line-height: 0.2rem;
    }
  }
</style>
