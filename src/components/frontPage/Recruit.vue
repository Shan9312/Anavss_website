<template>
  <transition>
    <div>
      <AHeader/>
      <Show/>
      <Position/>
      <FootNav/>
      <AFooter/>
    </div>
  </transition>
</template>


<script>
  import AHeader from '../frontPure/common/AHeader'
  import AFooter from '../frontPure/common/AFooter'
  import FootNav from '../frontPure/common/FootNav'
  import Show from '../frontPure/recruit/Show'
  import Position from '../frontPure/recruit/Position'

  export default {
    data () {
      return {

      }
    },
    components: {
      AHeader,
      Show,
      Position,
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
