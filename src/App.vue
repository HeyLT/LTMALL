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
#app {
  min-width: 320px;
  max-width: 750px;
  width: 100%;
  margin: 0 auto;
  line-height: 1.5;
  background-color: #f7f7f7;
  font-family: -apple-system, Helvetica, sans-serif;
  color: #666666;

}
</style>
