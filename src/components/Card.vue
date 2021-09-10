<template>
  <div class="card-container">
    <ul v-for="movie in movies" :key="movie.id" class="py-5">
      <li>{{ movie.title || movie.name }}</li>
      <li
        v-if="
          movie.title !== movie.original_title ||
          movie.name !== movie.original_name
        "
      >
        {{ movie.original_title || movie.original_name }}
      </li>

      <li>
        <img
          v-if="flags.includes(movie.original_language)"
          :src="printFlag(movie.original_language)"
          :alt="movie.original_title || movie.original_name"
        />
        <span v-else v-text="movie.original_language" />
      </li>
      <li>{{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["movies"],
  data() {
    return {
      originalLanguage: "",
      flags: ["en", "it"],
    };
  },
  methods: {
    printFlag(language) {
      return require(`@/assets/img/${language}.png`);
    },
  },
};
</script>

<style>
</style>