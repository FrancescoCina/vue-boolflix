<template>
  <div id="app">
    <Header @passToApp="catchSearchTerm" />
    <Contents />
  </div>
</template>

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
    };
  },
  methods: {
    catchSearchTerm(searchTerm) {
      this.termFromHeader = searchTerm;
      axios
        .get(
          `${this.baseUri}/search/movie?api_key=${this.apiKey}&query=${this.termFromHeader}`
        )
        .then((res) => {
          console.log(res.data.results);
        });
    },
  },
};
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
