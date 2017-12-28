<template>
  <transition>
    <div>
      <AHeader/>
      <Show/>
      <Platform_1/>
      <Platform_2/>
      <Platform_3/>
      <FootNav/>
      <AFooter/>
    </div>

  </transition>
</template>


<script>
  import AHeader from '../frontPure/common/AHeader'
  import AFooter from '../frontPure/common/AFooter'
  import FootNav from '../frontPure/common/FootNav'
  import Show from '../frontPure/platform/Show'
  import Platform_1 from '../frontPure/platform/Platform_1'
  import Platform_2 from '../frontPure/platform/Platform_2'
  import Platform_3 from '../frontPure/platform/Platform_3'

  export default {
    data () {
      return {

      }
    },
    components: {
      AHeader,
      Show,
      Platform_1,
      Platform_2,
      Platform_3,
      FootNav,
      AFooter
    },
    mounted(){

    },

  }

</script>

<style scoped="scoped" lang="less">
  @import url("../../config/base.less");



</style>
