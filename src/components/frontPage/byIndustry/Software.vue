<template>
  <transition>
    <div>
      <AHeader/>
      <Show/>
      <Description/>
      <FootNav/>
      <AFooter/>
    </div>
  </transition>
</template>


<script>
  import AHeader from '../../frontPure/common/AHeader'
  import AFooter from '../../frontPure/common/AFooter'
  import FootNav from '../../frontPure/common/FootNav'
  import Show from '../../frontPure/byIndustry/software/Show'
  import Description from '../../frontPure/byIndustry/software/Description'


  export default {
    data () {
      return {

      }
    },
    components: {
      AHeader,
      Show,
      Description,
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



