<template>
  <transition>
    <div>
      <AHeader/>
      <Show/>
      <Description/>
      <Function/>
      <FootNav/>
      <AFooter/>
    </div>
  </transition>
</template>


<script>
  import AHeader from '../../frontPure/common/AHeader'
  import AFooter from '../../frontPure/common/AFooter'
  import FootNav from '../../frontPure/common/FootNav'
  import Show from '../../frontPure/byData/Integration/Show'
  import Description from '../../frontPure/byData/Integration/Description'
  import Function from '../../frontPure/byData/Integration/Function'


  export default {
    data () {
      return {

      }
    },
    components: {
      AHeader,
      Show,
      Description,
      Function,
      FootNav,
      AFooter
    },
    mounted(){

    },
  }

</script>

<style scoped="scoped" lang="less">
  @import url("../../../config/base.less");



</style>



