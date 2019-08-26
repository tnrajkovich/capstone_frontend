<template>
  <div class="container show">
    <section class="module" id="popular">
      <div class="container">
        <div class="row">
          <div class="col-md-6 m-auto text-center">
            <h1 class="display-1">{{ parent_recipe.title }}</h1>
            <p class="lead"></p>
            <div class="divider-border"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="space" data-mY="60px"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="menu-simple">
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/1.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <img :src="parent_recipe.image_url" />
                  <h4>
                    <span>{{ parent_recipe.ingredients }}</span>
                    <span class="pull-right"></span>
                  </h4>
                  <p>{{ parent_recipe.directions }}</p>
                </div>
              </div>
              <div class="menu-simple-item" v-for="user_recipe in parent_recipe.user_recipes">
                <div class="menu-simple-item-img">
                  <img :src="user_recipe.image_url" />
                </div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>{{ user_recipe.description }}</span>
                    <span class="pull-right">{{ user_recipe.vote }}</span>
                  </h6>
                  <p>{{ user_recipe.new_ingredients }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <router-link v-bind:to="`/`">Back to all recipes</router-link>

        <div class="row">
          <div class="col-md-12">
            <div class="space" data-mY="60px"></div>
            <h1>New Recipe Mod</h1>
            <form v-on:submit.prevent="createUserRecipe()">
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
              Description:
              <input type="text" v-model="newUserRecipeDescription" />
              New Ingredients:
              <input type="text" v-model="newUserRecipeNewIngredients" />
              Parent Recipe:
              <input type="text" v-model="newUserRecipeDirections" />
              Image:
              <input type="text" v-model="newUserRecipeImageUrl" />
              <input type="submit" value="Create" />
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style type="text/css">
img {
  width: 300px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      recipe: {},
      parent_recipe: {},
      user_recipe: {},
      newUserRecipeDescription: "",
      newUserRecipeNewIngredients: "",
      newUserRecipeDirections: "",
      newUserRecipeCategoryId: "",
      newUserRecipeImageUrl: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/parent_recipes/" + this.$route.params.id).then(response => {
      this.parent_recipe = response.data;
    });
  },
  methods: {
    createUserRecipe: function() {
      var params = {
        description: this.newUserRecipeDescription,
        new_ingredients: this.newUserRecipeNewIngredients,
        parent_recipe_id: this.newUserRecipeParentRecipeId,
        user_id: this.newUserRecipeUserId,
        vote: this.newUserRecipeVote,
        image_url: this.newUserRecipeImageUrl
      };
      axios
        .post("/api/user_recipes", params)
        .then(response => {
          this.$router.push("/user_recipes");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
