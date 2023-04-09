<template>
  <div>
    <div class="container">
      <div class="product-image">
        <img :src="product.image" class="image" alt="" />
      </div>
      <div class="product-details">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-description">{{ product.description }}</div>
        <div class="product-price">{{ product.price }}$</div>
        <div>
          <a
            @click="addToCart(product.id)"
            :id="product.id"
            class="add-to-cart"
            href="#"
            ><span></span>Add To Cart</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  GetProductByCategorie,
  GetProductById,
} from "../../services/GetResources";

export default {
  name: "ProductDetails",
  props: {},
  data() {
    return {
      product: [],
    };
  },
  components: {},
  methods: {
    async addToCart(id) {
      console.log("add to carte");
      this.$store.commit("AddToCart", await GetProductById(id));
      console.log(this.$store.state.cart);
    },
  },
  async created() {
    if (this.$route.params.categorie) {
      this.product = await GetProductByCategorie(
        this.$route.params.categorie,
        this.$route.params.id
      );
    } else {
      this.product = await GetProductById(this.$route.params.id);
      console.log(this.product);
    }

    console.log("run detail again");
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10% auto;
  width: 80%;
  /* background-color: white; */
  border-radius: 20px;
  color: black;
  /* border: 2px solid red; */
}

.product-image {
  background-color: whitesmoke;

  /* border: 2px solid red; */
}
.image {
  height: 400px;
  width: 400px;
  object-fit: contain;
}

.product-details {
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 3rem;
  font-weight: bold;
}

.product-description {
  font-size: 1.5rem;
  margin: 2rem 0;
}

.product-price {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}
a.add-to-cart {
  background-color: black;
  color: white;
  font-family: Trebuchet MS;
  font-size: 18px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 12px 15px;
  border: 0px solid #000;
  border-radius: 22px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
a.add-to-cart span {
  margin-right: 15px;
  display: block;
  width: 25px;
  height: 25px;
  background-image: url("https://icons8.com/icon/85180/shopping-cart");
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(0deg);
}
a.add-to-cart:hover {
  background-color: black;
}
a.add-to-cart:active {
  transform: scale(0.95);
}
</style>
