<template>
  <div class="swiper-slide">
    <dl v-if="financeBanner">
      <dd><img :src="obj.imgSrc" alt=""></dd>
      <dt>
      <h3>{{obj.title}}</h3>
      <p>{{obj.text}}</p>
      </dt>
    </dl>
  </div>
</template>
<script>
  export default {
    name : "bannerItem",
    props : ["obj",'swiperClass'],
    data(){
        return {
        }
    }
  }
</script>

