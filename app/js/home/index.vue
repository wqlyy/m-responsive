<template lang="html">
    <div>
       <top-header/>
       <HomeSilder/>
       <Novice/>
       <Borrow/>
       <Money/>
       <Product/>
       <Life/>
    </div>
</template>

<script>
import TopHeader from '../public/header'
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
    HomeSilder,
    Novice,
    Borrow,
    Money,
    Product,
    Life
  }
}
</script>

<style lang="scss">
  @import '../../css/reset.scss';

</style>
