<template>
  <div>
    <top-header/>
    <RSilder/>
    <Daily/>
    <In/>
    <More/>
    <CommonFooter cname="mfooter"/>
    <NavBar/>
  </div>
</template>

<script>
import TopHeader from '../public/header'
import CommonFooter from '../public/footer'
import NavBar from '../public/navbar'
import RSilder from './rslider'
import Daily from './daily'
import In from './in'
import More from './more'

export default {
  name:"home",
  components:{
    TopHeader,
    CommonFooter,
    NavBar,
    RSilder,
    Daily,
    In,
    More
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
