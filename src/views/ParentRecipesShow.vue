<template>
  <div class="wrapper">
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
                  <iframe width="500" height="300" :src="parent_recipe.video"></iframe>
                  <h4>
                    Ingredients:
                    <span>{{ parent_recipe.ingredients }}</span>
                    <span class="pull-right"></span>
                  </h4>
                  <p>Directions: {{ parent_recipe.directions }}</p>
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
                        <button class="up" v-on:click="upvote(user_recipe)">
                          △
                        </button>
                      </div>
                      <div>
                        <button class="down" v-on:click="downvote(user_recipe)">
                          ▽
                        </button>
                      </div>
                    </span>
                  </h6>
                  <p>Ingredient variation: {{ user_recipe.new_ingredients }}</p>
                  <button class="edit" type="submit">
                    <router-link v-bind:to="`/user_recipes/${user_recipe.id}/edit`">
                      Edit
                    </router-link>
                  </button>
                  <!--                   <router-link v-bind:to="`/user_recipes/${user_recipe.id}/edit`">
                    Edit
                  </router-link> -->
                  <button class="delete" type="submit" v-on:click="destroyUserRecipe(user_recipe)">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <router-link v-bind:to="`/`">Back to all recipes</router-link>

        <div class="text-center">
          <div class="up-as">
            <h5>New Recipe Mod</h5>
          </div>
          <div class="up-form">
            <!--         <div class="row">
          <div class="col-md-12">
            <div class="space" data-mY="60px"></div>
            <h3>New Recipe Mod</h3> -->
            <form
              method="POST"
              action="/api/user_recipes"
              enctype="multipart/form-data"
              v-on:submit.prevent="createUserRecipe()"
            >
              <div class="form-group">
                <ul>
                  <li v-for="error in errors">{{ error }}</li>
                </ul>

                What did you do differently?
                <input class="form-control" type="text" v-model="description" placeholder="Description" />
              </div>
              <div class="form-group">
                Ingredient variations:
                <input class="form-control" type="text" v-model="new_ingredients" placeholder="Ingredient variations" />
              </div>
              <div class="form-group">
                Recipe name:
                <input
                  class="form-control"
                  type="text"
                  v-model="parent_recipe_id"
                  list="parent-recipe-names"
                  placeholder="Recipe name"
                />

                <datalist id="parent-recipe-names" v-for="parent_recipe in parent_recipes">
                  <option>{{ parent_recipe.title }}</option>
                </datalist>
              </div>
              <div class="form-group">
                Image:
                <input class="form-control" type="file" v-on:change="setFile($event)" ref="fileInput" />
              </div>
              <div class="form-group">
                <button class="btn btn-block btn-round btn-brand" type="submit" value="Create">
                  Create New Recipe
                </button>
              </div>
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
  padding-bottom: 40px;
  align-content: center;
}

.menu-simple-item-img {
  width: 100px;
  height: 100px;
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
  padding: 7px;
  border: 10px;
}

.edit {
  padding: 7px;
  border: 10px;
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
      user_recipe.vote += 1;
      var params = {
        vote: user_recipe.vote
      };
      axios.patch("/api/user_recipes/" + user_recipe.id, params).then(response => {
        console.log("Successful update", response.data);
        this.vote = response.data.vote;
      });
    },
    downvote: function(user_recipe) {
      user_recipe.vote -= 1;
      var params = {
        vote: user_recipe.vote
      };
      axios.patch("/api/user_recipes/" + user_recipe.id, params).then(response => {
        console.log("Successful update", response.data);
        this.vote = response.data.vote;
      });
    },
    destroyUserRecipe: function(user_recipe) {
      axios.delete("/api/user_recipes/" + user_recipe.id).then(response => {
        this.user_recipe = response.data;
        this.$router.go(0);
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
          this.$router.go(0);
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
