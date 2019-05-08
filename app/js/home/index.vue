<template lang="html">
    <div>
       <top-header/>
       <HomeSilder/>
    </div>
</template>

<script>
import TopHeader from '../public/header'
import HomeSilder from './HSlider'
export default {
  name:"home",
  components:{
    TopHeader,
    HomeSilder
  }
}
</script>

<style lang="scss">
  @import '../../css/reset.scss';

</style>
