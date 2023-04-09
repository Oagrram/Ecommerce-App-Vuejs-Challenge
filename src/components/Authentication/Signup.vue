<template>
  <div>
    <title>Sign Up</title>
    <div class="container">
      <form>
        <h1>Sign Up</h1>
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Sign Up" />
        <div class="login-link" @click="handleSignIn">
          Already have an account? <a href="#">Sign In</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script >
export default {
  name: "SignUp",
  components: {},
  props: {},
  methods: {
    handleSignIn() {
        this.$router.push({ path:"/SignIn" })
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
input[type="text"],
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
.login-link {
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}
</style>