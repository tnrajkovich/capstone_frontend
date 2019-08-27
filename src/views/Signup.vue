<template>
  <section class="module-cover fullscreen parallax" data-background="assets/images/Bolognese.jpg" data-overlay="0.7">
    <div class="container">
      <div class="row">
        <div class="col-md-4 m-auto">
          <div class="text-center">
            <div class="up-as">
              <h5>Create a new account</h5>
            </div>
            <div class="up-form">
              <form v-on:submit.prevent="submit()">
                <ul>
                  <li class="text-danger" v-for="error in errors">{{ error }}</li>
                </ul>
                <div class="form-group">
                  <label>First Name:</label>
                  <input type="text" class="form-control" v-model="firstName" />
                </div>
                <div class="form-group">
                  <label>Last Name:</label>
                  <input type="text" class="form-control" v-model="lastName" />
                </div>
                <div class="form-group">
                  <label>Username:</label>
                  <input type="text" class="form-control" v-model="username" />
                </div>
                <div class="form-group">
                  <label>Email:</label>
                  <input type="email" class="form-control" v-model="email" />
                </div>
                <div class="form-group">
                  <label>Password:</label>
                  <input type="password" class="form-control" v-model="password" />
                </div>
                <div class="form-group">
                  <label>Password Confirmation:</label>
                  <input type="password" class="form-control" v-model="passwordConfirmation" />
                </div>
                <input type="submit" class="btn btn-primary" value="Submit" />
              </form>
            </div>
            <div class="up-help">
              <p>
                By clicking "Sign Up", you agree to our
                <br />
                <a href="#">software services agreement</a>
                .
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
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      admin: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.firstName,
        last_name: this.firstName,
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        admin: false
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
