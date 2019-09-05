<template>
  <div class="wrapper">
    <section class="module-cover fullscreen parallax" data-background="assets/images/Bolognese.jpg" data-overlay="0.8">
      <div class="container">
        <div class="row">
          <div class="col-md-4 m-auto">
            <div class="text-center">
              <div class="up-as">
                <h5>Create a new account</h5>
              </div>
              <div class="up-form">
                <form method="post" v-on:submit.prevent="submit()">
                  <div class="form-group">
                    <input class="form-control" type="text" placeholder="First Name" />
                  </div>
                  <div class="form-group">
                    <input class="form-control" type="text" placeholder="Last Name" />
                  </div>
                  <div class="form-group">
                    <input class="form-control" type="text" placeholder="Username" />
                  </div>
                  <div class="form-group">
                    <input class="form-control" type="email" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <input class="form-control" type="password" placeholder="Pasword" />
                  </div>
                  <div class="form-group">
                    <input class="form-control" type="password" placeholder="Confirm password" />
                  </div>
                  <div class="form-group">
                    <button class="btn btn-block btn-round btn-brand" type="submit">Sign Up</button>
                  </div>
                </form>
              </div>
              <div class="up-help"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero end-->

    <!--     <svg
      class="footer-circle"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100"
      viewbox="0 0 100 100"
      preserveaspectratio="none"
    >
      <path d="M0 100 C40 0 60 0 100 100 Z"></path>
    </svg> -->
    <!-- Footer-->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <!--           <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div> -->
        </div>
      </div>
      <div class="small-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer end-->
  </div>
</template>

<style type="text/css">
.up-form {
  padding-bottom: 100px;
}
</style>

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
