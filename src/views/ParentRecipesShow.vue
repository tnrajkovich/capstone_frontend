<template>
  <div class="container show">
    <section class="module" id="popular" data-background="assets/images/Steak.jpg" data-overlay="0.4">
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
              <div>
                <h1>Recipe mods</h1>
              </div>
              <div
                class="menu-simple-item"
                v-for="user_recipe in parent_recipe.user_recipes"
                v-bind:key="user_recipe.vote"
              >
                <div class="menu-simple-item-img">
                  {{ username }}
                  <img :src="user_recipe.image_url" />
                </div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>{{ user_recipe.description }}</span>
                    <span class="pull-right">
                      {{ user_recipe.vote }}
                      <div>
                        <button class="up" v-on:click="upvote(user_recipe)">△</button>
                      </div>
                      <div>
                        <button class="down" v-on:click="downvote(user_recipe)">▽</button>
                      </div>
                    </span>
                  </h6>
                  <p>Ingredient variation: {{ user_recipe.new_ingredients }}</p>
                  <router-link v-bind:to="`/user_recipes/${user_recipe.id}/edit`">
                    Edit
                  </router-link>
                  <button class="delete" v-on:click="destroyUserRecipe(user_recipe)">
                    Delete
                  </button>
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
            <form action="/api/user_recipes" enctype="multipart/form-data" v-on:submit.prevent="createUserRecipe()">
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
              Description:
              <input type="text" v-model="description" />
              New Ingredients:
              <input type="text" v-model="new_ingredients" />
              Parent Recipe:
              <input type="text" v-model="parent_recipe_id" />
              Image:
              <input type="file" v-on:change="setFile($event)" ref="fileInput" />
              <input type="submit" value="Create" />
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

.up {
  border-left: 15px transparent;
  border-right: 15px transparent;
  border-bottom: 30px transparent;
  border-top: 30px transparent;
}

.down {
  border-left: 15px transparent;
  border-right: 15px transparent;
  border-top: 30px transparent;
  border-bottom: 30px transparent;
}

.delete {
  border-left: 15px transparent;
  border-right: 15px transparent;
  border-top: 30px transparent;
  border-bottom: 30px transparent;
}
</style>

<script>
import axios from "axios";
import ActionCable from "actioncable";

export default {
  data: function() {
    return {
      recipe: {},
      parent_recipe: {},
      user_recipe: {},
      user: {},
      description: "",
      new_ingredients: "",
      parent_recipe_id: "",
      vote: "",
      image_url: "",
      errors: [],
      username: null
    };
  },
  created: function() {
    axios.get("/api/parent_recipes/" + this.$route.params.id).then(response => {
      this.parent_recipe = response.data;
    });
    this.username = localStorage.getItem("username");
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image_url = event.target.files[0];
      }
    },
    upvote: function(user_recipe) {
      var params = {
        vote: user_recipe.vote
      };
      axios.patch("/api/user_recipes/" + user_recipe.id, params).then(response => {
        user_recipe.vote += 1;
        console.log("Successful update", response.data);
        this.vote = response.data.vote;
      });
    },
    downvote: function(user_recipe) {
      var params = {
        vote: user_recipe.vote
      };
      axios.patch("/api/user_recipes/" + user_recipe.id, params).then(response => {
        user_recipe.vote -= 1;
        console.log("Successful update", response.data);
        this.vote = response.data.vote;
      });
    },
    destroyUserRecipe: function(user_recipe) {
      axios.delete("/api/user_recipes/" + user_recipe.id).then(response => {
        this.$router.do;
      });
    },
    createUserRecipe: function() {
      var formData = new FormData();
      formData.append("description", this.description);
      formData.append("new_ingredients", this.new_ingredients);
      formData.append("parent_recipe_id", this.parent_recipe_id);
      formData.append("vote", this.vote);
      formData.append("image_url", this.image_url);
      axios
        .post("/api/user_recipes", formData)
        .then(response => {
          this.description = "";
          this.new_ingredients = "";
          this.parent_recipe_id = "";
          this.vote = "";
          this.$refs.fileInput.value = "";
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
