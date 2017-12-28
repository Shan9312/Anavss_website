<template>
  <div class="swiper-slide">
    <dl v-if="swiperClass == 'financeBanner' || swiperClass == 'aboutBanner'">
      <dd><img :src="obj.imgSrc" alt=""></dd>
      <dt>
      <h3>{{obj.title}}</h3>
      <p>{{obj.text}}</p>
      </dt>
    </dl>


    <div class="box" v-if="swiperClass == 'priceBanner'">
        <h4>{{obj.title1}}</h4>
        <h6>{{obj.title2}}</h6>
        <h5>{{obj.title3}}</h5>
        <div class="desc">
          <p v-for="(item,index) in obj.text" :key='index'>{{item}}</p>
        </div>
        <a :href="obj.operateUrl">{{obj.operate}}</a>
    </div>

    <div class="box" v-if="swiperClass == 'recruitBanner'">
      <h3>{{obj.name}}</h3>
      <h6>{{obj.address}}</h6>
      <p>{{obj.desc}}</p>
      <h6>你的工作内容：</h6>
      <ul>
        <li v-for="(item,index) in obj.workContent" :key='index'>{{item}}</li>
      </ul>
      <h6>你们都是什么：</h6>
      <ul>
        <li v-for="(item,index) in obj.isWhat" :key='index'>{{item}}</li>
      </ul>
      <h6>我们需要这样的你：</h6>
      <ul>
        <li v-for="(item,index) in obj.demand" :key='index'>{{item}}</li>
      </ul>
      <h6>申请方式：</h6>
      <p>{{obj.way}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'bannerItem',
    props: ['obj', 'swiperClass'],
    data () {
      return {
      }
    },
    mounted () {
      // console.log(this.swiperClass)
    }
  }
</script>

