<template>
  <div class="container show">
    <p>Name: {{ inputParent_recipe.name }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      parent_recipes: [],
      parent_recipe: {},
      inputParent_recipe: {}
    };
  },
  created: function() {
    axios.get("/api/parent_recipes/" + this.$router.inputParent_recipe.id + "/edit").then(response => {
      this.parent_recipe = response.data;
      console.log(this.parent_recipe);
    });
  },
  methods: {
    updateProduct: function(inputParent_recipe) {
      var params = {
        name: inputParent_recipe.name,
        price: inputParent_recipe.price,
        description: inputParent_recipe.description,
        image_url: inputParent_recipe.image_url
      };
      axios.patch("/api/parent_recipes/" + inputParent_recipe.id, params).then(response => {
        console.log("Successful update", response.data);
        this.name = response.data.name;
      });
    }
  }
};
</script>
