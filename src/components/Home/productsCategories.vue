<template>
  <div>
    <h1 style="color: black; margin: 50px">Product Categories :</h1>
    <div id="categories">
      <div
        class="categorie"
        v-for="categorie in getCategories"
        :key="categorie.id"
        @click="handlecategorieroute(categorie.name)"
      >
        <div class="categorie-image">
          <img :src="categorie.image" alt="" />
        </div>
        <h2>{{ categorie.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productsCategories",
  components: {},
  props: {},
  methods: {
    handlecategorieroute(categorie) {
      console.log("cliked on " + categorie);
      console.log(this.$route);
      this.$router.push(`/categorie/${categorie}`);
    },
  },
  computed: {
    getCategories() {
      return this.$store.state.Products;
    },
  },
};
</script>



<style scoped>
#categories {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: black;
}

.categorie {
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.categorie:hover {
  transform: scale(1.05);
}

.categorie-image {
 
}

.categorie-image > img {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.categorie > h2 {
  margin-top: 30px;
  font-size: 22px;
  text-align: center;
}
</style>