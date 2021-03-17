<template>
  <div id="navbarMain">
    <Navbar>
      <NavbarItem link="/home">
        <div slot="icon" class="icon_home"></div>
        <div slot="text">首页</div>
      </NavbarItem>
      <NavbarItem link="/category">
        <div slot="icon" class="icon_category"></div>
        <div slot="text">分类</div>
      </NavbarItem>
      <NavbarItem link="/car">
        <div slot="icon" class="icon_car"></div>
        <div slot="text">购物车</div>
      </NavbarItem>
      <NavbarItem link="profile">
        <div slot="icon" class="icon_profile"></div>
        <div slot="text">我的</div>
      </NavbarItem>
    </Navbar>
  </div>
</template>
<script>
import Navbar from "conponents/common/navbar/Navbar";
import NavbarItem from "conponents/common/navbar/NavbarItem";
export default {
  name: "navbarMain",
  data() {
    return {};
  },
  components: {
    Navbar,
    NavbarItem
  }
};
</script>
<style scoped>
@import "~assets/fonts/iconfont.css";
.icon_home::before {
  font-family: "iconfont";
  content: "\e602";
  font-size: .266667rem;
}
.icon_category::before {
  font-family: "iconfont";
  content: "\e62b";
  font-size: .266667rem;
}
.icon_car::before {
  font-family: "iconfont";
  content: "\e601";
  font-size: .266667rem;
}
.icon_profile::before {
  font-family: "iconfont";
  content: "\e604";
  font-size: .266667rem;
}

#navbarMain {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
