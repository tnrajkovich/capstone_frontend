<template>
  <div class="container show">
    <p>Description: {{ inputUser_recipe.description }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      user_recipe: {},
      inputUser_recipe: {}
    };
  },
  created: function() {
    axios.get("/api/parent_recipes/" + this.$router.inputUser_recipe.id + "/edit").then(response => {
      this.user_recipe = response.data;
      console.log(this.user_recipe);
    });
  },
  methods: {
    updateProduct: function(inputUser_recipe) {
      var params = {
        name: inputUser_recipe.name,
        price: inputUser_recipe.price,
        description: inputUser_recipe.description,
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
