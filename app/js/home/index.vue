<template lang="html">
    <div>
       <top-header/>
       <HomeSilder/>
       <Novice/>
    </div>
</template>

<script>
import TopHeader from '../public/header'
import HomeSilder from './HSlider'
import Novice from './Novice'
export default {
  name:"home",
  components:{
    TopHeader,
    HomeSilder,
    Novice
  }
}
</script>

<style lang="scss">
  @import '../../css/reset.scss';

</style>
