<template>
  <div class="container show">
    <h2>{{ parent_recipe.title }}</h2>
    <h4>{{ parent_recipe.ingredients }}</h4>
    <p>{{ parent_recipe.directions }}</p>
    <img :src="parent_recipe.image_url" />
    <router-link v-bind:to="`/`">Back to all recipes</router-link>

    <div class="card" v-for="user_recipe in parent_recipe.user_recipes">
      <img :src="user_recipe.image_url" />
      {{ user_recipe.vote }}
      <h4>{{ user_recipe.description }}</h4>
      <p>{{ user_recipe.new_ingredients }}</p>
    </div>

    <div class="container mod">
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
