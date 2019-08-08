<template>
  <div class="container">
    <h1>New Photo</h1>
    <form v-on:submit.prevent="createPhoto()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newPhotoName" />
      Width:
      <input type="text" v-model="newPhotoWidth" />
      Height:
      <input type="text" v-model="newPhotoHeight" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newPhotoName: "",
      newPhotoWidth: "",
      newPhotoHeight: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createPhoto: function() {
      var params = {
        name: this.newPhotoName,
        width: this.newPhotoWidth,
        height: this.newPhotoHeight
      };
      axios
        .post("/api/photos", params)
        .then(response => {
          this.$router.push("/photos");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
