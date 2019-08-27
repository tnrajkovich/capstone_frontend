<template>
  <section class="module-cover fullscreen parallax" data-background="assets/images/Alinea.jpg" data-overlay="0.7">
    <div class="container">
      <div class="row">
        <div class="col-md-4 m-auto">
          <div class="text-center">
            <div class="up-as">
              <h5>Sign into your account</h5>
            </div>
            <div class="up-form">
              <form v-on:submit.prevent="submit()">
                <ul>
                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                </ul>
                <div class="form-group">
                  <label>Email:</label>
                  <input type="email" class="form-control" v-model="email" />
                </div>
                <div class="form-group">
                  <label>Password:</label>
                  <input type="password" class="form-control" v-model="password" />
                </div>
                <input type="submit" class="btn btn-primary" value="Submit" />
              </form>
            </div>
            <div class="up-help">
              <p class="m-b-5">
                Dont have an account yet?
                <a href="/signup">Create account</a>
              </p>
              <p>
                Forgot your username or password?
                <a href="#">Recover account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style type="text/css"></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$emit("changeJwt");
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
