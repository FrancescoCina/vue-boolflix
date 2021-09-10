<template>
  <header>
    <div class="h-100 container">
      <div class="row h-100 justify-content-between align-items-center">
        <div class="col">LOGO</div>
        <div class="col">
          <Search />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Search from "@/components/Search.vue";
export default {
  name: "Header",
  components: { Search },
};
</script>

<style scoped lang="scss">
header {
  height: 100px;
  background-color: red;
}
</style>