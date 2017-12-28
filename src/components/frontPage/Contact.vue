<template>
  <transition>
    <div>
      <AHeader/>
      <Show/>
      <Information/>
      <FootNav/>
      <AFooter/>
    </div>
  </transition>
</template>


<script>
  import AHeader from '../frontPure/common/AHeader'
  import AFooter from '../frontPure/common/AFooter'
  import FootNav from '../frontPure/common/FootNav'
  import Show from '../frontPure/contact/Show'
  import Information from '../frontPure/contact/Information'



  export default {
    data () {
      return {

      }
    },
    components: {
      AHeader,
      Show,
      Information,
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
