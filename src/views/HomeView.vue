<template>
  <div >
    <navigationBar></navigationBar>
    <productsCategories />
  </div>
</template>

<script>
import productsCategories from "@/components/Home/productsCategories.vue";
import navigationBar from "@/components/Shared Component/NavigationBar";

export default {
  name: "HomeView",
  props: {},
  components: {
    productsCategories,
    navigationBar,
  },
};
</script>
