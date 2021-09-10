<template>
  <div class="input-search">
    <input
      v-model="userResearch"
      placeholder="Cerca il tuo contenuto"
      type="search"
    />
    <button v-on:click="$emit('passUserTerm', userResearch)">Cerca</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      userResearch: "",
    };
  },
};
</script>

<style>
</style>