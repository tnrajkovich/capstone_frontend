<template>
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
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newUserRecipeDescription: "",
      newUserRecipeNewIngredients: "",
      newUserRecipeDirections: "",
      newUserRecipeCategoryId: "",
      newUserRecipeImageUrl: "",
      errors: []
    };
  },
  created: function() {},
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
