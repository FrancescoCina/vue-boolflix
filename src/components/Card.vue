<template>
  <div class="card-container">
    <ul v-for="movie in movies" :key="movie.id" class="py-5">
      <li>
        <div class="img-container">
          <img
            class="img-fluid"
            :src="getUrlPoster(movie.poster_path)"
            :alt="movie.title || movie.name"
          />
        </div>
      </li>
      <li>{{ movie.title || movie.name }}</li>
      <li
        v-if="
          movie.title !== movie.original_title ||
          movie.name !== movie.original_name
        "
      >
        {{ movie.original_title || movie.original_name }}
      </li>

      <li class="flag-container">
        <img
          class="img-fluid"
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
      baseImgPath: "https://image.tmdb.org/t/p/w342",
    };
  },
  methods: {
    printFlag(language) {
      return require(`@/assets/img/${language}.png`);
    },
    getUrlPoster(finalPath) {
      return this.baseImgPath + finalPath;
    },
  },
};
</script>

<style scoped lang="scss">
.flag-container {
  width: 35px;
}

.img-container {
  width: 150px;
}
</style>