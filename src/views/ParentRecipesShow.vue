<template>
  <div class="container show">
    <h2>{{ parent_recipe.title }}</h2>
    <h4>{{ parent_recipe.ingredients }}</h4>
    <p>{{ parent_recipe.directions }}</p>
    <router-link v-bind:to="`/`">Back to all recipes</router-link>
    <div class="card" v-for="user_recipe in user_recipes">
      {{ user_recipe.title }}
      <h4>{{ user_recipe.ingredients }}</h4>
      <p>{{ user_recipe.directions }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      recipe: {},
      parent_recipe: {},
      user_recipes: [],
      user_recipe: {}
    };
  },
  created: function() {
    axios.get("/api/parent_recipes/" + this.$route.params.id).then(response => {
      this.parent_recipe = response.data;
    });
  },
  methods: {}
};
</script>
