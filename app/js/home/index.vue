<template lang="html">
    <div>
       <top-header/>
       <HomeSilder/>
       <Novice/>
       <Borrow/>
       <Money/>
       <Product/>
    </div>
</template>

<script>
import TopHeader from '../public/header'
import HomeSilder from './HSlider'
import Novice from './Novice'
import Borrow from './Borrow'
import Money from './Money'
import Product from './Product'
export default {
  name:"home",
  components:{
    TopHeader,
    HomeSilder,
    Novice,
    Borrow,
    Money,
    Product
  }
}
</script>

<style lang="scss">
  @import '../../css/reset.scss';

</style>
