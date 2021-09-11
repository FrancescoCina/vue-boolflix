<template>
  <div class="card-container">
    <!-- Section MOVIES -->
    <h3 v-if="movies.length !== 0">Movies</h3>
    <ul v-for="movie in movies" :key="movie.id" class="py-5">
      <li>
        <div class="img-container">
          <img
            class="img-fluid"
            :src="getUrlPoster(movie.poster_path)"
            :alt="movie.title"
          />
        </div>
      </li>
      <li>TItolo: {{ movie.title }}</li>
      <li v-if="movie.title !== movie.original_title">
        Titolo Originale: {{ movie.original_title }}
      </li>

      <li class="flag-container">
        <img
          class="img-fluid"
          v-if="flags.includes(movie.original_language)"
          :src="printFlag(movie.original_language)"
          :alt="movie.original_title"
        />
        <span v-else> Lingua Originale: {{ movie.original_language }}</span>
      </li>
      <li>Voto: {{ getStarsReview(movie.vote_average) }}</li>
    </ul>

    <!-- Section SERIES -->

    <h3 v-if="series.length !== 0">Serie TV</h3>

    <ul v-for="serie in series" :key="serie.id" class="py-5">
      <li>
        <div class="img-container">
          <img
            class="img-fluid"
            :src="getUrlPoster(serie.poster_path)"
            :alt="serie.name"
          />
        </div>
      </li>
      <li>Titolo: {{ serie.name }}</li>
      <li v-if="serie.name !== serie.original_name">
        Titolo Orginale: {{ serie.original_name }}
      </li>

      <li class="flag-container">
        <img
          class="img-fluid"
          v-if="flags.includes(serie.original_language)"
          :src="printFlag(serie.original_language)"
          :alt="serie.original_name"
        />
        <span v-else> Lingua Originale: {{ serie.original_language }}</span>
      </li>
      <li>Voto: {{ getStarsReview(serie.vote_average) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["movies", "series"],
  data() {
    return {
      originalLanguage: "",
      flags: ["en", "it"],
      baseImgPath: "https://image.tmdb.org/t/p/w342",
      newContentAverage: 0,
      starsReview: "",
    };
  },
  methods: {
    printFlag(language) {
      return require(`@/assets/img/${language}.png`);
    },
    getUrlPoster(finalPath) {
      return this.baseImgPath + finalPath;
    },
    getStarsReview(contentAverage) {
      this.newContentAverage = Math.ceil(contentAverage / 2);

      switch (this.newContentAverage) {
        case "0":
          this.starsReview =
            '`<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`';
          break;
        case "1":
          this.starsReview =
            '`<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`';
          break;
        case "2":
          this.starsReview =
            '`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`';
          break;
        case "3":
          this.starsReview =
            '`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>`';
          break;
        case "4":
          this.starsReview =
            '`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>`';
          break;
        case "5":
          this.starsReview =
            '`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`';
          break;
      }
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

li {
  list-style-type: none;
  font-weight: bold;
}
</style>