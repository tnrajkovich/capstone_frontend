<template>
  <div class="wrapper">
    <!-- Hero-->
    <section
      class="module-cover parallax fullscreen"
      id="home"
      data-jarallax-video="https://www.youtube.com/watch?v=qKqj85oo2wI"
      data-overlay="1"
      data-gradient="1"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12 m-auto">
            <div class="text-center">
              <h6 class="text-uppercase"></h6>
              <h1 class="display-1">Social Recipes</h1>
              <p>
                See masters at work.
              </p>
              <div class="space" data-mY="40px"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="module no-gutter p-0" id="gallery">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-4 col-lg-12 bg-gray">
            <div class="gallery-shorcode-desc">
              <div class="vertical-body">
                <div class="vertical">
                  <div class="text-center">
                    <p class="subtitle">Photos</p>
                    <h1 class="display-1">Gallery</h1>
                    <div class="divider-border"></div>
                    <div class="space" data-mY="60px"></div>
                    <a class="btn btn-black" href="#">View Gallery</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-lg-12">
            <div class="gallery gallery-shorcode">
              <div class="gallery-item" v-for="parent_recipe in parent_recipes">
                <div class="gallery-image" :data-background="parent_recipe.image_url"></div>
                <a :href="`/parent_recipes/${parent_recipe.id}`" :title="parent_recipe.title"></a>
                <router-link v-bind:to="`/parent_recipes/${parent_recipe.id}`"></router-link>
                <h2>{{ parent_recipe.title }}</h2>
                <h4>{{ parent_recipe.ingredients }}</h4>
                <p>{{ parent_recipe.directions }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.gallery-image {
  height: 300px;
  align-content: center;
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
