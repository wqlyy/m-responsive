<template>
  <div>
    <top-header/>
    <MoneySilder/>
    <Ada/>
    <Money/>
    <Adb/>
    <Finance/>
    <Adc/>
    <CommonFooter cname="mfooter"/>
    <NavBar/>
  </div>
</template>

<script>
import TopHeader from '../public/header'
import CommonFooter from '../public/footer'
import NavBar from '../public/navbar'
import MoneySilder from './MSlider'
import Ada from './ada'
import Adb from './adb'
import Adc from './adc'
import Money from './money'
import Finance from './finance'
export default {
  name:"home",
  components:{
    TopHeader,
    CommonFooter,
    MoneySilder,
    NavBar,
    Ada,
    Adb,
    Adc,
    Money,
    Finance
  }
}
</script>

<style lang="scss">
  @import '../../css/reset.scss';
  .mfooter{
    margin-top: 0!important;
    ul{
      li:first-child{
        display: none
      }
    }
  }
</style>
