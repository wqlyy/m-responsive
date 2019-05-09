<template>
  <div>
    <top-header/>
    <ISilder/>
    <Welfare/>
    <Service/>
    <CommonFooter/>
    <NavBar/>
  </div>
</template>

<script>
import TopHeader from '../public/header'
import CommonFooter from '../public/footer'
import NavBar from '../public/navbar'
import ISilder from './ISlider'
import Welfare from './welfare'
import Service from './service'

export default {
  name:"home",
  components:{
    TopHeader,
    CommonFooter,
    NavBar,
    ISilder,
    Welfare,
    Service
  }
}
</script>

<style lang="scss">
  @import '../../css/reset.scss';
</style>
