import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryProductsView from "../views/CategoryProductsView";
import SignIn from "../components/Authentication/Signin";
import SignUp from "../components/Authentication/Signup";
import ProductDetailsView from "../views/ProductDetailsView";
import AllProductsView from "../views/AllProductsView";
AllProductsView
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categorie/:categorie",
    name: "categories",
    component: CategoryProductsView,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/categorie/:categorie/product/:id",
    name: "ProductDetails",
    component: ProductDetailsView,
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: ProductDetailsView,
  },
  {
    path: "/products",
    name: "Allproducts",
    component: AllProductsView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
