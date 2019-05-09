<template>
  <Panel title="" :class="$style.panel">
   
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
 }
</style>
