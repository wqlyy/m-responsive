<template>
  <div :class="[panelClass,cname]">
    <h4>-{{title}}-</h4>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props:{
    cname:{
      type:String,
      default:''
    },
    title:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      panelClass:'panel'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../css/element.scss';
  .panel{
    @include panel;
  }
</style>