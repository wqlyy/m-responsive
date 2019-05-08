<template>
  <div :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="item.href">
          <img :src="item.src" :alt="item.href">
        </router-link>
      </swiper-slide>
      <div v-if="options.pagination" class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name:'Slider',
  components: {
    swiper,
    swiperSlide
  },
  props:{
    cname:{
      type:String,
      default:''
    },
    options:{
      type:Object,
      default(){
        return {
          autoplay:true,
          loop:true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick:false
        }
      }
    },
    items:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~swiper/dist/css/swiper.css'
</style>
