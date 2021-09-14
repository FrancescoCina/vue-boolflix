<template>
  <div class="container">
    <!-- Section MOVIES -->
    <h3 v-if="movies.length !== 0" class="text-center white py-5">Movies</h3>
    <div class="row flex-wrap">
      <div
        v-for="(movie, index) in movies"
        :key="movie.id + index"
        class="
          col-12 col-sm-6 col-md-4 col-lg-3
          card
          border-0
          bg-darkgrey
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
        <div class="content-information h-100 p-3 text-center">
          <ul class="py-5">
            <li></li>
            <li>Title: {{ movie.title }}</li>
            <li v-if="movie.title !== movie.original_title">
              Original Title: {{ movie.original_title }}
            </li>
            <li class="flag-container">
              <img
                class="img-fluid"
                v-if="flags.includes(movie.original_language)"
                :src="printFlag(movie.original_language)"
                :alt="movie.original_title"
              />
              <span v-else>
                Original Language: {{ movie.original_language }}</span
              >
            </li>
            <li>
              Vote:
              <i
                v-for="number in 5"
                :key="number"
                :class="
                  number <= getAverageValue(movie.vote_average)
                    ? 'fas fa-star'
                    : 'far fa-star'
                "
              ></i>
            </li>
            <li
              v-for="(genere, index) in genresMoviesCompared(
                movie.genre_ids,
                moviesGenres
              )"
              :key="index"
              class="movies-genres"
            >
              {{ genere }}
            </li>
            <li class="pt-5">
              <p v-if="movie.overview == ''">...</p>
              <p v-else>Overview: {{ movie.overview }}</p>
            </li>
            <!--  <li>
              {{ getCastFromIdMovie(movie.id) }}
              <span v-for="(actorName, index) in fiveActorsName" :key="index">
                {{ actorName }}
              </span>
            </li> -->
          </ul>
        </div>
      </div>

      <!-- Section SERIES -->

      <h3 v-if="series.length !== 0" class="text-center white py-5">
        Tv Series
      </h3>
      <div class="row flex-wrap">
        <div
          v-for="(serie, index) in series"
          :key="serie.id + index"
          class="
            col-12 col-sm-6 col-md-4 col-lg-3
            card
            border-0
            bg-darkgrey
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
          <div class="content-information h-100 p-3 text-center">
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
              <li>
                Voto:
                <i
                  v-for="number in 5"
                  :key="number"
                  :class="
                    number <= getAverageValue(serie.vote_average)
                      ? 'fas fa-star'
                      : 'far fa-star'
                  "
                ></i>
              </li>
              <li
                v-for="(genere, index) in genresSeriesCompared(
                  serie.genre_ids,
                  seriesGenres
                )"
                :key="index"
                class="movies-genres"
              >
                {{ genere }}
              </li>
              <li class="pt-5">
                <p v-if="serie.overview == ''">...</p>
                <p v-else>Overview: {{ serie.overview }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
// import axios from "axios";
export default {
  name: "Card",
  props: ["movies", "series", "moviesGenres", "seriesGenres"],
  data() {
    return {
      baseUri: "https://api.themoviedb.org/3",
      apiKey: "7cc65adcc4f7b2a8a3bef496a2b1b091",
      originalLanguage: "",
      flags: ["en", "it"],
      baseImgPath: "https://image.tmdb.org/t/p/w342",
      newContentAverage: 0,
      starsReview: "",
      casts: [],
      fiveActorsName: [],
    };
  },
  methods: {
    /* getNameFiveActors() {
      for (let i = 0; i < 5; i++) {
        this.fiveActorsName.push(this.casts[i].name);
      }
    },
    getCastFromIdMovie(idMovie) {
      axios
        .get(`${this.baseUri}/movie/${idMovie}/credits?api_key=${this.apiKey}`)
        .then((res) => {
          this.casts = res.data.cast;
        });
      this.getNameFiveActors();
    },  */
    printFlag(language) {
      return require(`@/assets/img/${language}.png`);
    },
    getUrlPoster(finalPath) {
      if (finalPath) {
        return this.baseImgPath + finalPath;
      } else {
        return require(`@/assets/img/img-not-found.jpg`);
      }
    },
    getAverageValue(average) {
      return (this.newContentAverage = Math.ceil(average / 2));
    },
    genresMoviesCompared(idsMovie, moviesGeneres) {
      let signleMovieGenres = [];
      moviesGeneres.forEach((moviesGenre) => {
        if (idsMovie.includes(moviesGenre.id)) {
          signleMovieGenres.push(moviesGenre.name);
        }
      });
      return signleMovieGenres;
    },
    genresSeriesCompared(idsTv, serieGenres) {
      let singleTvGenres = [];
      serieGenres.forEach((tvGenre) => {
        if (idsTv.includes(tvGenre.id)) {
          singleTvGenres.push(tvGenre.name);
        }
      });
      return singleTvGenres;
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

.white {
  color: #fff;
}

.card:hover .content-information {
  transform: rotateY(0deg);
  display: block;
}

.bg-darkgrey {
  background-color: #141414;
}
</style>