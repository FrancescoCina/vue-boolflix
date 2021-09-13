<template>
  <main>
    <div class="container">
      <div class="p-5" v-if="movies.length == 0 && series.length == 0">
        <p class="error p-2">La tua ricerca non ha prodotto risultati</p>
      </div>
      <div v-else>
        <Card :movies="movies" :series="series" />
      </div>
    </div>
  </main>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Contents",
  components: { Card },
  props: ["movies", "series"],
};
</script>

<style scoped lang="scss">
main {
  min-height: calc(100vh - 100px);
  background-color: #141414;
}
.error {
  border: 2px solid red;
  color: red;
}
</style>