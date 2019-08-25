<template>
  <div class="wrapper">
    <!-- Hero-->
    <section
      class="module-cover parallax fullscreen"
      id="home"
      data-background="/src/assets/background.mp4"
      data-overlay="1"
      data-gradient="1"
    >
      <div class="container">
        <div class="row">
          <video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted">
            <source src="/src/assets/background.mp4" type="video/mp4" />
          </video>
          <div class="col-md-12 m-auto">
            <div class="text-center">
              <h1 class="text-uppercase">Social Recipes</h1>
              <p>
                See masters at work.
              </p>
              <div class="space" data-mY="40px"></div>
              <a class="btn btn-white" href="#">Login</a>
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
                <div class="gallery-image" data-background="{{parent_recipe.image_url}}"></div>
                <a href="`/parent_recipes/${parent_recipe.id}`">
                  {{ parent_recipe.title }}
                </a>
              </div>
              <div class="gallery-item">
                <div class="gallery-image" data-background="assets/images/portfolio/5.jpg"></div>
                <a href="assets/images/portfolio/5.jpg" title="Title 2"></a>
              </div>
              <div class="gallery-item">
                <div class="gallery-image" data-background="assets/images/portfolio/3.jpg"></div>
                <a href="assets/images/portfolio/3.jpg" title="Title 3"></a>
              </div>
              <div class="gallery-item">
                <div class="gallery-image" data-background="assets/images/portfolio/4.jpg"></div>
                <a href="assets/images/portfolio/4.jpg" title="Title 4"></a>
              </div>
              <div class="gallery-item">
                <div class="gallery-image" data-background="assets/images/portfolio/2.jpg"></div>
                <a href="assets/images/portfolio/2.jpg" title="Title 5"></a>
              </div>
              <div class="gallery-item">
                <div class="gallery-image" data-background="assets/images/portfolio/6.jpg"></div>
                <a href="assets/images/portfolio/6.jpg" title="Title 6"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <h1>All Recipes</h1>
      <div class="card" v-for="parent_recipe in parent_recipes">
        <img :src="parent_recipe.image_url" />
        <router-link v-bind:to="`/parent_recipes/${parent_recipe.id}`">{{ parent_recipe.title }}</router-link>
        <h4>{{ parent_recipe.ingredients }}</h4>
        <p>{{ parent_recipe.directions }}</p>
      </div>
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
