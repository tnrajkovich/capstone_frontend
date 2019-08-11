<template>
  <div class="container">
    <h1>New Recipe</h1>
    <form v-on:submit.prevent="createParentRecipe()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Title:
      <input type="text" v-model="newParentRecipeTitle" />
      Ingredients:
      <input type="text" v-model="newParentRecipeIngredients" />
      Directions:
      <input type="text" v-model="newParentRecipeDirections" />
      Category:
      <input type="text" v-model="newParentRecipeCategoryId" />
      Image:
      <input type="text" v-model="newParentRecipeImageUrl" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newParentRecipeTitle: "",
      newParentRecipeIngredients: "",
      newParentRecipeDirections: "",
      newParentRecipeCategoryId: "",
      newParentRecipeImageUrl: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createParentRecipe: function() {
      var params = {
        ttile: this.newParentRecipeTitle,
        ingredients: this.newParentRecipeIngredients,
        directions: this.newParentRecipeDirections,
        category_id: this.newParentRecipeCategoryId,
        user_id: this.newParentRecipeUserId,
        image_url: this.newParentRecipeImageUrl
      };
      axios
        .post("/api/parent_recipes", params)
        .then(response => {
          this.$router.push("/parent_recipes");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
