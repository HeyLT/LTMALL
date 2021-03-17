<template>
  <div id="NavbarItem" @click="tolink" :style="activaStyle">
    <div class="item_icon">
      <slot name="icon"></slot>
    </div>
    <div>
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavbarItem",
  data() {
    return {
      isActive: false
    };
  },
  props: {
    link: {
      type: String
    }
  },
  methods: {
    tolink() {
      this.$router.push(this.link);
      this.isActive = !this.isActive;
    }
  },
  computed: {
    cutover() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activaStyle() {
      return this.cutover ? { color: '#fb5430' } : {};
    }
  }
};
</script>
<style scoped>
#NavbarItem {
  flex: 1;
  text-align: center;
}

.item_icon {
  margin-bottom: -0.04rem;
}
</style>
