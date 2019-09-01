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

mapboxgl.accessToken = "pk.eyJ1IjoidG5yYWprb3ZpY2giLCJhIjoiY2p6eGMxdmZxMWF5NDNqcW9pc2QwbHdpOCJ9.CqVN6JmE6DOL3ojj6Edl_g";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9"
});

var size = 200;

var pulsingDot = {
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),

  onAdd: function() {
    var canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext("2d");
  },

  render: function() {
    var duration = 1000;
    var t = (performance.now() % duration) / duration;

    var radius = (size / 2) * 0.3;
    var outerRadius = (size / 2) * 0.7 * t + radius;
    var context = this.context;

    // draw outer circle
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = "rgba(255, 200, 200," + (1 - t) + ")";
    context.fill();

    // draw inner circle
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(255, 100, 100, 1)";
    context.strokeStyle = "white";
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // update this image's data with data from the canvas
    this.data = context.getImageData(0, 0, this.width, this.height).data;

    // keep the map repainting
    map.triggerRepaint();

    // return `true` to let the map know that the image was updated
    return true;
  }
};

map.on("load", function() {
  map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

  map.addLayer({
    id: "points",
    type: "symbol",
    source: {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [0, 0]
            }
          }
        ]
      }
    },
    layout: {
      "icon-image": "pulsing-dot"
    }
  });
});

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
