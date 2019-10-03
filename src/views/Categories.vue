<template>
  <div class="wrapper">
    <div id="map"></div>
  </div>
</template>

<style type="text/css">
#map {
  height: 1000px;
}
</style>

<script>
/* global mapboxgl, mapboxSdk */
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      category: {},
      categories: [],
      currentFeature: {},
      places: [
        {
          lat: 18.7953,
          long: 98.962,
          name: "Thai",
          id: 2
        },
        {
          lat: 41.9028,
          long: 12.4964,
          name: "Italian",
          id: 1
        },
        {
          lat: 10.8231,
          long: 106.6297,
          name: "Vietnamese",
          id: 3
        },
        {
          lat: 48.8566,
          long: 2.3522,
          name: "French",
          id: 4
        },

        {
          lat: 34.6937,
          long: 135.5023,
          name: "Japanese",
          id: 5
        },
        {
          lat: 19.076,
          long: 72.8777,
          name: "Indian",
          id: 6
        },
        {
          lat: 37.9838,
          long: 23.7275,
          name: "Greek",
          id: 7
        },
        {
          lat: -12.0464,
          long: -77.0428,
          name: "Peruvian",
          id: 8
        }
      ]
    };
  },
  mounted: function() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidG5yYWprb3ZpY2giLCJhIjoiY2swMWR1OTRrMW1kbDNsa2lraDRzMnluZSJ9.KuawrUb6lA4iw248Ph4jgQ";
    var map = new mapboxgl.Map({
      container: "map", // container id
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [67.0011, 24.8607], // starting position [lng, lat]
      zoom: 3 // starting zoom
    });
    // var popup = new mapboxgl.Popup({ offset: 25 }).setText("Construction on the Washington Monument began in 1848.");
    // var marker = new mapboxgl.Marker()
    //   .setLngLat([30.5, 50.5])
    //   .setPopup(popup)
    //   .addTo(map);
    this.places.forEach(function(place) {
      var popup = new mapboxgl.Popup({ offset: 25 })
        .setText(place.name)
        .setHTML("<a href=/categories/" + place.id + "><h3>" + place.name + "</h3></a>");
      var marker = new mapboxgl.Marker()
        .setLngLat([place.long, place.lat])
        .setPopup(popup)
        .addTo(map);

      // marker.on("click", function() {
      //   window.location = this.url;
      // });
    });

    var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    mapboxClient.geocoding
      .forwardGeocode({
        query: "Merchandise Mart, Chicago",
        autocomplete: false,
        limit: 1
      })
      .send()
      .then(function(response) {
        if (response && response.body && response.body.features && response.body.features.length) {
          var feature = response.body.features[0];
          new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
        }
      });
  },
  // created: function() {
  //   axios.get("/api/categories").then(response => {
  //     this.categories = response.data;
  //   });
  // },
  methods: {}
};
</script>
