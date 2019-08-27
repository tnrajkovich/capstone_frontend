<template>
  <div class="container mod">
    <h1>New Recipe Mod</h1>
    <form v-on:submit.prevent="createUserRecipe()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Description:
      <input type="text" v-model="description" />
      New Ingredients:
      <input type="text" v-model="newIngredients" />
      Parent Recipe:
      <input type="text" v-model="parentRecipeid" />
      Image:
      <input type="text" v-model="image" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      description: "",
      newIngredients: "",
      parentRecipeid: 2,
      userId: "",
      vote: "",
      image: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createUserRecipe: function() {
      var params = {
        description: this.description,
        new_ingredients: this.newIngredients,
        parent_recipe_id: this.parentRecipeid,
        user_id: this.userId,
        vote: this.vote,
        image: this.image
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
