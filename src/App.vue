<template>
  <div id="app">
    <Header />
    <Contents />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Contents from "@/components/Contents.vue";

export default {
  name: "App",
  components: { Header, Contents },
};
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
