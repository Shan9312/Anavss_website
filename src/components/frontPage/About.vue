<template>
  <transition>
    <div>
      <AHeader/>
      <Show/>
      <Description/>
      <Value/>
      <FootNav/>
      <AFooter/>
    </div>
  </transition>
</template>


<script>
  import AHeader from '../frontPure/common/AHeader'
  import AFooter from '../frontPure/common/AFooter'
  import FootNav from '../frontPure/common/FootNav'
  import Show from '../frontPure/about/Show'
  import Description from '../frontPure/about/Description'
  import Value from '../frontPure/about/Value'



  export default {
    data () {
      return {

      }
    },
    components: {
      AHeader,
      Show,
      Description,
      Value,
      FootNav,
      AFooter
    },
    mounted () {
    }
  }

</script>

<style scoped="scoped" lang="less">
  @import url("../../config/base.less");



</style>
