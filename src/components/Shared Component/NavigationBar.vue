<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <nav>
      <router-link to="/">
        <div class="logo">
          <img
            src="https://www.clipartmax.com/png/full/241-2412829_our-closed-api-means-your-data-cannot-be-accessed-by-apple-logo.png"
            alt="My Logo"
          />
        </div>
      </router-link>

      <div class="navbar">
        <ul>
          <li><router-link to="/products">Products</router-link></li>
          <li>
            <router-link to="#">
              <i
                class="fa fa-shopping-cart"
                style="color: white; margin-right: 10px"
              ></i>
              Cart (2)
            </router-link>
          </li>
          <li>
            <router-link to="/SignIn">
              <i
                class="fa fa-user"
                style="color: white; margin-right: 10px"
              ></i>
              Log in
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigationBar",
  components: {},
  props: {},
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
  height: 80px;
  padding: 0 50px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.navbar ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar li {
  margin-left: 80px;
}

.navbar a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.login-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
