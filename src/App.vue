<template>
  <div id="app">
    <router-view></router-view>
    <navbarMain></navbarMain>
    
  </div>
</template>

<script>
import navbarMain from "conponents/content/navMain";
export default {
  name: "app",
  components: {
    navbarMain
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
