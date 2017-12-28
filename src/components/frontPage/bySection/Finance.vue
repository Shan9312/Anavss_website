<template>
  <transition>
    <div>
      <AHeader/>
      <Show/>
      <Quantity/>
      <Influence/>
      <Plan/>
      <FootNav/>
      <AFooter/>
    </div>
  </transition>
</template>


<script>
  import AHeader from '../../frontPure/common/AHeader'
  import AFooter from '../../frontPure/common/AFooter'
  import FootNav from '../../frontPure/common/FootNav'
  import Show from '../../frontPure/bySection/finance/Show'
  import Quantity from '../../frontPure/bySection/finance/Quantity'
  import Influence from '../../frontPure/bySection/finance/Influence'
  import Plan from '../../frontPure/bySection/finance/Plan'



  export default {
    data () {
      return {

      }
    },
    components: {
      AHeader,
      Show,
      Quantity,
      Influence,
      Plan,
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
