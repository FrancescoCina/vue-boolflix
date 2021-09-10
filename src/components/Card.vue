<template>
  <div class="card-container">
    <ul v-for="movie in movies" :key="movie.id" class="py-5">
      <li>{{ movie.title }}</li>
      <li v-if="movie.title !== movie.original_title">
        {{ movie.original_title }}
      </li>
      <li>{{ movie.original_language }}</li>
      <li>{{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["movies"],
};
</script>

<style>
</style>