<template>
  <footer>
    <!-- <div>
      <router-link to=""><img src="../../../assets/home/QQ.png" alt=""/></router-link>
      <router-link to=""><img src="../../../assets/home/wechat.png" alt=""/></router-link>
      <router-link to=""><img src="../../../assets/home/weibo.png" alt=""></router-link>
    </div> -->
    <p>© Copyright 2017. Anavss All Rights Reserved. <a href="http://www.miitbeian.gov.cn">沪ICP备17002256号</a></p>
  </footer>
</template>


<script>
  export default {
    data () {
      return {

      }
    },
    components: {

    },
    mounted () {
    }
  }

</script>

<style scoped="scoped" lang="less">
  @import url("../../../config/theme.less");

  footer{
    width:100%;
    height:36px;
    line-height: 36px;
    background: #2f3b4c;
    // padding:35px 0 40px 0;
    text-align: center;
    // img{
    //   margin-right:30px;
    // }
    p{
      font-family: @Microsoft;
      font-size: 14px;
      color: #B8B8B8;
      letter-spacing: 0.43px;
      // margin-top:35px;
    }
  }

  @media only screen and(max-width: @iphoneW){
      footer{
        padding:0.3rem 0.28rem;
        p{
          margin-top:0.24rem;
        }
      }
  }

</style>
