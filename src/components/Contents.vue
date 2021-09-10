<template>
  <main>
    <div class="container">
      <Card />
    </div>
  </main>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Contents",
  components: { Card },
  // props: [""],
};
</script>

<style scoped lang="scss">
main {
  height: calc(100vh - 100px);
  background-color: yellow;
}
</style>