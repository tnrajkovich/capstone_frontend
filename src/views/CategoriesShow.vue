<template>
  <div class="wrapper" data-background="/assets/images/floor-tile.png">
    <div class="container" data-background="/assets/images/floor-tile.png">
      <div class="row-50">
        <div class="col-md-6 m-auto text-center" v-for="parent_recipe in category.parent_recipes">
          <img :src="parent_recipe.image_url" />
          <h1 class="display-1">
            <router-link v-bind:to="`/parent_recipes/${parent_recipe.id}`">{{ parent_recipe.title }}</router-link>
          </h1>
          <p class="lead">{{ parent_recipe.ingredients }}</p>
          <p class="lead">{{ parent_recipe.directions }}</p>
          <div class="divider-border"></div>
        </div>
      </div>
      <div class="row">
        <router-link v-bind:to="`/`">Back to all recipes</router-link>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
img {
  width: 300px;
}

.row-50 {
  padding-top: 100px;
  padding-bottom: 10px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      category: {},
      recipe: {},
      parent_recipe: {},
      user_recipe: {},
      user: {},
      description: "",
      new_ingredients: "",
      parent_recipe_id: "",
      vote: "",
      image_url: "",
      errors: [],
      username: null
    };
  },
  created: function() {
    axios.get("/api/categories/" + this.$route.params.id).then(response => {
      this.category = response.data;
    });
    this.username = localStorage.getItem("username");
  },
  methods: {}
};
</script>
