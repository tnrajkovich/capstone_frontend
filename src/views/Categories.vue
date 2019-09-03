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
      places: [
        {
          lat: 18.7953,
          long: 98.962,
          description: "The original Pad Thai"
        },
        {
          lat: 41.9028,
          long: 12.4964,
          description: "Carbonara to die for"
        },
        {
          lat: 10.8231,
          long: 106.6297,
          description: "The home of Pho"
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
      var popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);
      var marker = new mapboxgl.Marker()
        .setLngLat([place.long, place.lat])
        .setPopup(popup)
        .addTo(map);
      // .setHTML("<h3><a href=" + "/categories/2" + ">" + "</a></h3>");

      // marker.on("click", function() {
      //   window.location = this.url;
      // });
    });
    // for (var i = 0; i < this.places.length; i++) {
    //   var place = this.places[i];
    //   var popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);
    //   var marker = new mapboxgl.Marker()
    //     .setLngLat([place.long, place.lat])
    //     .setPopup(popup)
    //     .addTo(map);
    // }
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
