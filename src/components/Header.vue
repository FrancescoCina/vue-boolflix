<template>
  <header>
    <div class="h-100 container">
      <div class="row h-100 justify-content-between align-items-center">
        <div class="col">LOGO</div>
        <div class="col">
          <div class="input-search">
            <input placeholder="Cerca il tuo contenuto" type="search" />
            <button>Cerca</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
header {
  height: 100px;
  background-color: red;
}
</style>