<template>
  <div class="tabbar_top">
    <div class="item_left">
      <slot name="left"></slot>
    </div>
    <div class="item_center">
      <slot name="center"></slot>
    </div>
    <div class="item_right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tabbar",
  data() {
    return {};
  }
};
</script>
<style scoped>
.tabbar_top {
  display: flex;
  height: .586667rem;
  line-height: .586667rem;
  text-align: center;
}
.item_left,
.item_right {
  width: .8rem;
}
.item_center {
  flex: 1;
}
</style>
