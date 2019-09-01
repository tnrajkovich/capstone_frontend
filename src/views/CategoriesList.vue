<template>
  <div class="container show">
    <section class="module" id="popular" data-background="assets/images/Steak.jpg" data-overlay="0.4">
      <div class="container">
        <div class="row">
          <div class="col-md-6 m-auto text-center" v-for="parent_recipe in category.parent_recipes">
            <img :src="parent_recipe.image_url" />
            <h1 class="display-1">{{ parent_recipe.title }}</h1>
            <p class="lead">{{ parent_recipe.ingredients }}</p>
            <p class="lead">{{ parent_recipe.directions }}</p>
            <div class="divider-border"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="space" data-mY="60px"></div>
          </div>
        </div>

        <router-link v-bind:to="`/`">Back to all recipes</router-link>
      </div>
    </section>
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
    axios.get("/api/parent_recipes").then(response => {
      this.parent_recipe = response.data;
    });
    this.username = localStorage.getItem("username");
  },
  methods: {}
};
</script>
