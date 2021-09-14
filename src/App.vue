<template>
  <div id="app">
    <Header @passToApp="catchSearchTerm" />
    <Contents
      :movies="movies"
      :series="series"
      :moviesGenres="moviesGenres"
      :seriesGenres="seriesGenres"
    />
  </div>
</template>
bn         
<script>
import axios from "axios";
import Header from "@/components/Header.vue";
import Contents from "@/components/Contents.vue";

export default {
  name: "App",
  components: { Header, Contents },
  data() {
    return {
      termFromHeader: "",
      baseUri: "https://api.themoviedb.org/3",
      apiKey: "7cc65adcc4f7b2a8a3bef496a2b1b091",
      movies: {},
      series: {},
      moviesGenres: {},
      seriesGenres: {},
    };
  },
  methods: {
    catchSearchTerm(searchTerm) {
      if (!searchTerm) this.movies = this.series = {};
      this.termFromHeader = searchTerm;
      this.getMoviesFromApi();
      this.getSeriesFromApi();
      this.getGenresMoviesFromApi();
      this.getGenresSeriesFromApi();
    },
    getMoviesFromApi() {
      axios
        .get(
          `${this.baseUri}/search/movie?api_key=${this.apiKey}&query=${this.termFromHeader}`
        )
        .then((res) => {
          this.movies = res.data.results;
        });
    },
    getSeriesFromApi() {
      axios
        .get(
          `${this.baseUri}/search/tv?api_key=${this.apiKey}&query=${this.termFromHeader}`
        )
        .then((res) => {
          this.series = res.data.results;
        });
    },
    getGenresMoviesFromApi() {
      axios
        .get(`${this.baseUri}/genre/movie/list?api_key=${this.apiKey}`)
        .then((res) => {
          this.moviesGenres = res.data.genres;
        });
    },
    getGenresSeriesFromApi() {
      axios
        .get(`${this.baseUri}/genre/tv/list?api_key=${this.apiKey}`)
        .then((res) => {
          this.seriesGenres = res.data.genres;
        });
    },
  },
};
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
