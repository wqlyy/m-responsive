<template lang="html">
    <div>
       <top-header/>
       <HomeSilder/>
       <Novice/>
       <Borrow/>
       <Money/>
       <Product/>
       <Life/>
       <CommonFooter/>
       <NavBar/>
    </div>
</template>

<script>
import TopHeader from '../public/header'
import CommonFooter from '../public/footer'
import NavBar from '../public/navbar'
import HomeSilder from './HSlider'
import Novice from './Novice'
import Borrow from './Borrow'
import Money from './Money'
import Product from './Product'
import Life from './Life'
export default {
  name:"home",
  components:{
    TopHeader,
    CommonFooter,
    HomeSilder,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    NavBar
  }
}
</script>

<style lang="scss">
  @import '../../css/reset.scss';

</style>
