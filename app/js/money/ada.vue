<template>
  <Panel title="神券满" :class="$style.panel">
   <div :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270" alt="">
   </div>
  </Panel>
</template>

<script>
import Panel from '../core/panel';
export default {
  name:"",
  components:{
    Panel
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" module>
 @import "../../css/element.scss";
 .panel{
   @include panel;
   >h4{
     display: none;
   }
   .content{
     img{
       width: 100%;
       height: 230px;
       display: block;
     }
   }
 }
</style>
