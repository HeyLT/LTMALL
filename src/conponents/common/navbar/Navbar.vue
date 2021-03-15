<template>
  <div id="navbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>
<style scoped>
#navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 49px;
  width: 100%;
  background-color: #f3f3f3;
}
</style>
