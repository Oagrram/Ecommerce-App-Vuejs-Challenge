<template>
  <div>
    <navigationBar></navigationBar>
    <ProductDetails />
  </div>
</template>

<script>
import navigationBar from "@/components/Shared Component/NavigationBar.vue";
import ProductDetails from "@/components/Shared Component/ProductDetails.vue";

export default {
  name: "ProductDetailsView",
  props: {},
  components: {
    ProductDetails,
    navigationBar,
  },
};
</script>
