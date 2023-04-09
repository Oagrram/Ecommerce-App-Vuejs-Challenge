<template>
  <div>
    <navigationBar></navigationBar>
    <div v-if="loading">sbar chwiya</div>
    <section class="product-list dark-theme" v-else>
      <div
        class="product"
        v-for="(product, index) in products"
        :key="product.id"
        @mouseover="showAddToCart(index)"
        @mouseleave="hideAddToCart(index)"
      >
        <div>
          <div class="top-bar">
            <div>
              <img
                src="https://www.clipartmax.com/png/full/241-2412829_our-closed-api-means-your-data-cannot-be-accessed-by-apple-logo.png"
                alt="My Logo"
                class="fa-apple"
              />
            </div>
            <div class="stocks">
              <span>In Stock</span>
            </div>
          </div>
        </div>
        <div>
          <img
            @click="showProductDeatails(product.id)"
            :src="product.image"
            alt="iPhone 13"
            class="product-image"
          />
        </div>

        <div @click="showProductDeatails(product.id)">
          <h3>{{ product.name }}</h3>
        </div>
        <div>
          <p>${{ product.price }}</p>
        </div>
        <div>
          <a
            style="display: none"
            ref="addToCartButton"
            class="add-to-cart"
            @click="addToCart(product.id)"
            ><span></span>Add To Cart</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import navigationBar from "../components/Shared Component/NavigationBar";
import {
  GetProductsBycategorie,
  GetResources,
  GetProductById,
} from "../services/GetResources";
export default {
  name: "ProdutListView",
  components: { navigationBar },
  props: {},
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  methods: {
    showAddToCart(index) {
      this.$refs.addToCartButton[index].style.display = "inline-flex";
    },
    hideAddToCart(index) {
      this.$refs.addToCartButton[index].style.display = "none";
    },
    showProductDeatails(id) {
      if (this.$route.name === "Allproducts") {
        this.$router.push(`/products/${id}`);
      } else {
        this.$router.push(this.$route.params.categorie + `/product/${id}`);
      }
    },
    async addToCart(id) {
      console.log("add to carte");
      this.$store.commit("AddToCart", await GetProductById(id));
      console.log(this.$store.state.cart);
    },
  },
  async created() {
    if (this.$route.name === "Allproducts") {
      const categories = await GetResources();
      this.products = categories.reduce((acc, curr) => {
        return [...acc, ...curr.products];
      }, []);
    } else {
      this.products = await GetProductsBycategorie(
        this.$route.params.categorie
      );
    }
    this.loading = false;
  },
};
</script>



<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 30px;
  color: #000;
  width: 90%;
  margin: 100px auto 100px auto;
}

.product {
  display: flex;
  /* flex: 1 0 21%; */
  flex-basis: 30%;
  flex-direction: column;
  height: 410px;
  width: 200px;
  color: white;
  background-color: #010101;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 7px 5px -5px #4d4b4b;
  transition: transform 0.2s ease-in-out;
}

.product:hover {
  transform: scale(1.05);
}

.product .image-container {
  margin: 0 auto;
}

.product-image {
  height: 185px;
  width: 185px;
  object-fit: contain;
}

.product h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.product p {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}
.top-bar {
  display: flex;
  transform: translateY(0.5rem);
  justify-content: space-between;
  align-items: baseline;
  padding: 0 1rem;
  margin-bottom: 30px;
}
.fa-apple {
  font-size: 1.5rem;
  width: 10%;
  height: 10%;
  width: 20px;
  align-self: flex-start;
  /* color: white; */
}
.stocks {
  align-self: flex-end;
  font-size: 0.9rem;
  color: lightgreen;
}
a.add-to-cart {
  background-color: #ffffff;
  color: #000000;
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
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(0deg);
}
a.add-to-cart:hover {
  background-color: #ffffff;
}
a.add-to-cart:active {
  transform: scale(0.95);
}
</style>
