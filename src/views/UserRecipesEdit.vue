<template>
  <div class="wrapper">
    <section class="module-cover fullscreen parallax" data-background="assets/images/Bolognese.jpg" data-overlay="0.7">
      <div class="container">
        <div class="row">
          <div class="col-md-4 m-auto">
            <div class="text-center">
              <div class="up-as">
                <h5>Edit recipe</h5>
              </div>
              <div class="up-form" v-on:submit.prevent="updateUserRecipe(user_recipe)">
                <form method="post">
                  <div class="form-group">
                    <input
                      class="form-control"
                      v-model="user_recipe.description"
                      type="text"
                      placeholder="Description"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      v-model="user_recipe.new_ingredients"
                      type="text"
                      placeholder="New Ingredients"
                    />
                  </div>
                  <div class="form-group">
                    <input class="form-control" v-model="user_recipe.image_url" type="text" placeholder="Image" />
                  </div>
                  <div class="form-group">
                    <button class="btn btn-block btn-round btn-brand" type="submit">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <svg
      class="footer-circle"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100"
      viewbox="0 0 100 100"
      preserveaspectratio="none"
    >
      <path d="M0 100 C40 0 60 0 100 100 Z"></path>
    </svg>
    <!-- Footer-->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
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

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      recipe: {},
      user_recipe: {},
      inputUser_recipe: {}
    };
  },
  created: function() {
    axios.get("/api/user_recipes/" + this.$router.params.id + "/edit").then(response => {
      this.user_recipe = response.data;
      console.log(this.user_recipe);
    });
  },
  methods: {
    updateUserRecipe: function(inputUser_recipe) {
      var params = {
        directions: inputUser_recipe.directions,
        new_ingredients: inputUser_recipe.new_ingredients,
        image_url: inputUser_recipe.image_url
      };
      axios.patch("/api/user_recipes/" + inputUser_recipe.id, params).then(response => {
        console.log("Successful update", response.data);
        this.name = response.data.name;
      });
    }
  }
};
</script>
