<template>
  <div class="container show">
    <section class="module" id="popular">
      <div class="container">
        <div class="row">
          <div class="col-md-6 m-auto text-center">
            <h1 class="display-1">{{ parent_recipe.title }}</h1>
            <p class="lead"></p>
            <div class="divider-border"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="space" data-mY="60px"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="menu-simple">
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/1.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <img :src="parent_recipe.image_url" />
                  <h4>
                    <span>{{ parent_recipe.ingredients }}</span>
                    <span class="pull-right"></span>
                  </h4>
                  <p>{{ parent_recipe.directions }}</p>
                </div>
              </div>
              <div
                class="menu-simple-item"
                v-for="user_recipe in parent_recipe.user_recipes"
                v-bind:key="user_recipe.vote"
              >
                <div class="menu-simple-item-img">
                  <img :src="user_recipe.image_url" />
                </div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>{{ user_recipe.description }}</span>
                    <span class="pull-right">
                      {{ user_recipe.vote }}
                      <button v-on:click="vote()"></button>
                    </span>
                  </h6>
                  <p>Ingredient variation: {{ user_recipe.new_ingredients }}</p>
                  <router-link v-bind:to="`/UserRecipesEdit`">Edit</router-link>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <router-link v-bind:to="`/`">Back to all recipes</router-link>

        <div class="row">
          <div class="col-md-12">
            <div class="space" data-mY="60px"></div>
            <h3>New Recipe Mod</h3>
            <form v-on:submit.prevent="createUserRecipe()">
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
              Description:
              <input type="text" v-model="description" />
              New Ingredients:
              <input type="text" v-model="newIngredients" />
              Parent Recipe:
              <input type="text" v-model="parentRecipeid" />
              Image:
              <input type="file" v-on:change="setFile($event)" ref="fileInput" />
              <input type="submit" value="Create" v-on:click="createUserRecipe()" />
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style type="text/css">
img {
  width: 300px;
}

.vote {
  display: inline-block;
  overflow: hidden;
  width: 40px;
  height: 25px;
  cursor: pointer;
  background: url("http://i.stack.imgur.com/iqN2k.png");
  background-position: 0 -25px;
}

.vote.on {
  background-position: 0 2px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      recipe: {},
      parent_recipe: {},
      user_recipe: {},
      description: "",
      newIngredients: "",
      parentRecipeid: "",
      image: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/parent_recipes/" + this.$route.params.id).then(response => {
      this.parent_recipe = response.data;
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    createUserRecipe: function() {
      var params = {
        description: this.description,
        new_ingredients: this.newIngredients,
        parent_recipe_id: 2,
        image: this.image
      };
      axios
        .post("/api/user_recipes", params)
        .then(response => {
          this.$router.go;
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
