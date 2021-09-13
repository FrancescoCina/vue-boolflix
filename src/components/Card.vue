<template>
  <div class="container">
    <!-- Section MOVIES -->
    <h3 v-if="movies.length !== 0" class="text-center py-5">Movies</h3>
    <div class="row flex-wrap">
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="
          col-12 col-sm-6 col-md-4 col-lg-3
          card
          border-0
          bg-yellow
          clickable
        "
      >
        <div class="poster-card py-5">
          <img
            class="img-fluid"
            :src="getUrlPoster(movie.poster_path)"
            :alt="movie.title"
          />
        </div>
        <div class="content-information h-100 p-5 text-center">
          <ul class="py-5">
            <li></li>
            <li>Titolo: {{ movie.title }}</li>
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
              <span v-else>
                Lingua Originale: {{ movie.original_language }}</span
              >
            </li>
            <li>Voto: {{ getStarsReview(movie.vote_average) }}</li>
          </ul>
        </div>
      </div>

      <!-- Section SERIES -->

      <h3 v-if="series.length !== 0" class="text-center py-5">Tv Series</h3>
      <div class="row flex-wrap">
        <div
          v-for="serie in series"
          :key="serie.id"
          class="
            col-12 col-sm-6 col-md-4 col-lg-3
            card
            border-0
            bg-yellow
            clickable
          "
        >
          <div class="poster-card py-5">
            <img
              class="img-fluid"
              :src="getUrlPoster(serie.poster_path)"
              :alt="serie.name"
            />
          </div>
          <div class="content-information h-100 p-5 text-center">
            <ul class="py-5">
              <li></li>
              <li>Titolo: {{ serie.name }}</li>
              <li v-if="serie.name !== serie.name">
                Titolo Originale: {{ serie.original_name }}
              </li>
              <li class="flag-container">
                <img
                  class="img-fluid"
                  v-if="flags.includes(serie.original_language)"
                  :src="printFlag(serie.original_language)"
                  :alt="serie.original_title"
                />
                <span v-else>
                  Lingua Originale: {{ serie.original_language }}</span
                >
              </li>
              <li>Voto: {{ getStarsReview(serie.vote_average) }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
        case 0:
          this.starsReview =
            '<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>';
          break;
        case 1:
          this.starsReview =
            '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>';
          break;
        case 2:
          this.starsReview =
            '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>';
          break;
        case 3:
          this.starsReview =
            '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>';
          break;
        case 4:
          this.starsReview =
            '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>';
          break;
        case 5:
          this.starsReview =
            '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';
          break;
      }
      return this.starsReview;
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
.black {
  color: black;
}

.poster-card {
  width: 100%;
}

.content-information {
  transform: rotateY(-180deg);
  background-color: #000;
  color: #fff;
  display: none;
}

.card:hover .poster-card {
  transform: rotateY(180deg);
  display: none;
}

.card:hover .content-information {
  transform: rotateY(0deg);
  display: block;
}

.bg-yellow {
  background-color: yellow;
}
</style>