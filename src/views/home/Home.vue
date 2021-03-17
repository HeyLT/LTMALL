<template>
  <div id="home">
    <tabbar class="home_tab">
      <div slot="left"></div>
      <div slot="center">购物车</div>
      <div slot="right"></div>
    </tabbar>
  </div>
</template>
<script>
import { getHomeNetData } from "network/home";
import tabbar from 'conponents/common/tabbar/Tabbar'
export default {
  name: "home",
  data() {
    return {};
  },
  components:{
    tabbar
  },
  created() {
    getHomeNetData().then(res => {
      console.log(res);
    });
  }
};
</script>
<style scoped>
  .home_tab {
    background-color: purple;
    color: #fff;
    font-size: .24rem;
  }
</style>
