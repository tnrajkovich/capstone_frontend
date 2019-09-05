<template>
  <div class="wrapper" data-background="/assets/images/floor-tile.png">
    <!-- Hero-->
    <section
      class="module-cover parallax fullscreen"
      id="home"
      data-background="/assets/images/Dessert.jpg"
      data-overlay=".9"
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

    <section class="module no-gutter p-0" id="gallery" data-background="/assets/images/floor-tile.png">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-12">
            <div class="gallery gallery-shorcode">
              <div class="gallery-item" v-for="parent_recipe in parent_recipes">
                <div class="gallery-image" :data-background="parent_recipe.image_url">
                  <router-link v-bind:to="`/parent_recipes/${parent_recipe.id}`"></router-link>
                </div>
                <h2>{{ parent_recipe.title }}</h2>
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
  height: 200px;
  align-content: center;
  padding-left: 40px;
  padding-right: 40px;
}
.gallery {
  padding-top: 50px;
  padding-bottom: 50px;
  align-content: center;
}

.gallery-item {
  padding-left: 40px;
  padding-right: 40px;
}

.gallery-item h4 {
  min-height: 3em;
}
</style>

<script>
/* global $ */
import Vue from "vue";
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      parent_recipes: [],
      searchFilter: "",
      sortAttribute: "title",
      currentRecipe: {}
    };
  },
  created: function() {},
  mounted: function() {
    // $('.gallery').magnificPopup({
    //   delegate:        'a',
    //   type:            'image',
    //   fixedContentPos: false,
    //   gallery: {
    //     enabled: true,
    //     navigateByImgClick: true,
    //     preload: [0,1]
    //   },
    //   image: {
    //     titleSrc: 'title',
    //     tError: 'The image could not be loaded.',
    //   },
    //   callbacks: {

    //     open: function() {
    //       $('body').addClass('noscroll');
    //       $('html').css('margin-right', '17px');
    //     },

    //     close: function() {
    //       $('body').removeClass('noscroll');
    //       $('html').css('margin-right', 0);
    //     }
    //   }
    // });

    axios.get("/api/parent_recipes").then(response => {
      this.parent_recipes = response.data;
      Vue.nextTick().then(function() {
        $("[data-background]").each(function() {
          $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
        $(".gallery").magnificPopup({
          disableOn: function() {
            return true;
          }
        });
      });
    });
  },
  methods: {}
};
</script>
