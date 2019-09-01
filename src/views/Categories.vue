<template>
  <div class="container">
    <div id="map"></div>
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
                Categories
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
                  <div class="text-center"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 col-lg-12">
            <div class="gallery gallery-shorcode">
              <div class="gallery-item" v-for="category in categories">
                <div class="gallery-image"></div>
                <a :href="`/categories/${category.id}`" :title="category.name"></a>
                <router-link v-bind:to="`/categories/${category.id}`"></router-link>
                <h2>{{ category.name }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style type="text/css">
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>

<script>
import axios from "axios";

mapboxgl.accessToken = "pk.eyJ1IjoidG5yYWprb3ZpY2giLCJhIjoiY2p6eGMxdmZxMWF5NDNqcW9pc2QwbHdpOCJ9.CqVN6JmE6DOL3ojj6Edl_g"; // replace this with your access token
var map = new mapboxgl.Map({
  container: "map",
  style: "", // replace this with your style URL
  center: [-87.661557, 41.893748],
  zoom: 10.7
});
// code from the next step will go here

export default {
  data: function() {
    return {
      categories: []
    };
  },
  created: function() {
    axios.get("/api/categories").then(response => {
      this.categories = response.data;
    });
  },
  methods: {}
};
</script>
