<template>
  <transition>
    <div>
      <AHeader/>
      <Show/>
      <Advantage/>
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
  import Show from '../../frontPure/byFunction/analysis/Show'
  import Advantage from '../../frontPure/byFunction/analysis/Advantage'
  import Function from '../../frontPure/byFunction/analysis/Function'


  export default {
    data () {
      return {

      }
    },
    components: {
      AHeader,
      Show,
      Advantage,
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
