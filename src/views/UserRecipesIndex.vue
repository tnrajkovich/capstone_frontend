<template>
  <div class="container">
    <div class="card" v-for="user_recipe in user_recipes">
      <img :src="user_recipe.image_url" />
      <h2>{{ user_recipe.title }}</h2>
      <h4>{{ user_recipe.ingredients }}</h4>
      <p>{{ user_recipe.directions }}</p>
      <router-link v-bind:to="`/`">Back to all recipes</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      recipe: {},
      user_recipe: {},
      user_recipes: [],
      errors: []
    };
  },
  created: function() {
    axios.get("/api/user_recipes/" + this.$route.params.id).then(response => {
      this.user_recipe = response.data;
    });
  },
  methods: {}
};
</script>
