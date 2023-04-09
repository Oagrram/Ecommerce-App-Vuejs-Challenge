<template>
  <div>
    <title>Sign In</title>
    <div class="container">
      <form>
        <h1>Sign In</h1>
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Sign In" />
        <div class="signup-link" @click="hanleSignup">
          Don't have an account? <a href="#">Sign Up</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  components: {},
  props: {},
  methods: {
    hanleSignup() {
      this.$router.push({ path: "/SignUp" });
    },
  },
  computed: {
    getCategories() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>


	<style scoped>
body {
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  max-height: 400px;
  height: 100%;
}
input[type="email"],
input[type="password"] {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  background-color: #f2f2f2;
  color: #000;
}
input[type="submit"] {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  width: 150px;
  font-size: 16px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #444;
}
.signup-link {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}
</style>