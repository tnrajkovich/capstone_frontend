<template>
  <div class="container">
    <h1>All Categories</h1>
    <div v-for="category in categories">
      <h2>{{ category.name }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
