<template>
  <div class="container">
    <h1>All Recipes</h1>
    <div class="card" v-for="parent_recipe in parent_recipes">
      <img :src="parent_recipe.image_url" />
      <router-link v-bind:to="`/parent_recipes/${parent_recipe.id}`">{{ parent_recipe.title }}</router-link>
      <h4>{{ parent_recipe.ingredients }}</h4>
      <p>{{ parent_recipe.directions }}</p>
    </div>
  </div>
</template>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

img {
  border-radius: 20px 20px 0 0;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      parent_recipes: [],
      parent_recipe: {}
    };
  },
  created: function() {
    axios.get("/api/parent_recipes").then(response => {
      this.parent_recipes = response.data;
    });
  },
  methods: {}
};
</script>
