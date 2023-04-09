<template>
  <div id="app">
    <router-view />
  </div>
</template>


<script>
export default {
  name: "App",
  props: {},

  async created() {
    this.$store.dispatch("getData");
    console.log(this.$store.state.products);
  },
};
</script>


<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}
</style>
