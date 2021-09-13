<template>
  <div id="app">
    <Header @passToApp="catchSearchTerm" />
    <Contents :movies="movies" :series="series" />
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
    };
  },
  methods: {
    catchSearchTerm(searchTerm) {
      this.termFromHeader = searchTerm;
      this.getMoviesFromApi();
      this.getSeriesFromApi();
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
  },
};
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
