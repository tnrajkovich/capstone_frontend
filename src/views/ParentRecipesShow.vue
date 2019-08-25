<template>
  <div class="container show">
    <h2>{{ parent_recipe.title }}</h2>
    <h4>{{ parent_recipe.ingredients }}</h4>
    <p>{{ parent_recipe.directions }}</p>
    <img :src="parent_recipe.image_url" />
    <router-link v-bind:to="`/`">Back to all recipes</router-link>

    <div class="card" v-for="user_recipe in parent_recipe.user_recipes">
      <img :src="user_recipe.image_url" />
      {{ user_recipe.vote }}
      <h4>{{ user_recipe.description }}</h4>
      <p>{{ user_recipe.new_ingredients }}</p>
    </div>

    <section class="module" id="popular">
      <div class="container">
        <div class="row">
          <div class="col-md-6 m-auto text-center">
            <p class="subtitle">Tasty and crunchy</p>
            <h1 class="display-1">Popular Dishes</h1>
            <p class="lead">
              See how your users experience your website in realtime or view
              <br />
              trends to see any changes in performance over time.
            </p>
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
                  <h6>
                    <span>Wild Mushroom Bucatini with Kale</span>
                    <span class="pull-right">$10</span>
                  </h6>
                  <p>Cheese, Garlic, Potato, Pork</p>
                </div>
              </div>
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/2.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>Lemon and Garlic Green Beans</span>
                    <span class="pull-right">$12</span>
                  </h6>
                  <p>Pork meat, Sauces, Potato</p>
                </div>
              </div>
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/3.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>American Brunch Combo Menu</span>
                    <span class="pull-right">$21</span>
                  </h6>
                  <p>Bacon, Rice, Vegetables</p>
                </div>
              </div>
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/4.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>Smoked Paprika Hummus</span>
                    <span class="pull-right">$18</span>
                  </h6>
                  <p>Shrimp, Vegetables, Sauce</p>
                </div>
              </div>
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/5.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>Italian Source Mushroom</span>
                    <span class="pull-right">$21</span>
                  </h6>
                  <p>Steak, Spices, Sauces</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="menu-simple">
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/6.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>Lemon and Garlic Green Beans</span>
                    <span class="pull-right">$12</span>
                  </h6>
                  <p>Pork meat, Sauces, Potato</p>
                </div>
              </div>
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/1.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>American Brunch Combo Menu</span>
                    <span class="pull-right">$21</span>
                  </h6>
                  <p>Bacon, Rice, Vegetables</p>
                </div>
              </div>
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/2.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>Smoked Paprika Hummus</span>
                    <span class="pull-right">$18</span>
                  </h6>
                  <p>Shrimp, Vegetables, Sauce</p>
                </div>
              </div>
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/3.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>Italian Source Mushroom</span>
                    <span class="pull-right">$21</span>
                  </h6>
                  <p>Steak, Spices, Sauces</p>
                </div>
              </div>
              <div class="menu-simple-item">
                <div class="menu-simple-item-img"><img src="assets/images/widgets/4.jpg" alt="" /></div>
                <div class="menu-simple-item-inner">
                  <h6>
                    <span>Wild Mushroom Bucatini with Kale</span>
                    <span class="pull-right">$10</span>
                  </h6>
                  <p>Cheese, Garlic, Potato, Pork</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="space" data-mY="60px"></div>
            <p class="text-center"><a class="btn btn-black" href="#">View our menu</a></p>
          </div>
        </div>
      </div>
    </section>

    <div class="container mod">
      <h1>New Recipe Mod</h1>
      <form v-on:submit.prevent="createUserRecipe()">
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        Description:
        <input type="text" v-model="newUserRecipeDescription" />
        New Ingredients:
        <input type="text" v-model="newUserRecipeNewIngredients" />
        Parent Recipe:
        <input type="text" v-model="newUserRecipeDirections" />
        Image:
        <input type="text" v-model="newUserRecipeImageUrl" />
        <input type="submit" value="Create" />
      </form>
    </div>
  </div>
</template>

<style type="text/css">
img {
  width: 300px;
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
      newUserRecipeDescription: "",
      newUserRecipeNewIngredients: "",
      newUserRecipeDirections: "",
      newUserRecipeCategoryId: "",
      newUserRecipeImageUrl: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/parent_recipes/" + this.$route.params.id).then(response => {
      this.parent_recipe = response.data;
    });
  },
  methods: {
    createUserRecipe: function() {
      var params = {
        description: this.newUserRecipeDescription,
        new_ingredients: this.newUserRecipeNewIngredients,
        parent_recipe_id: this.newUserRecipeParentRecipeId,
        user_id: this.newUserRecipeUserId,
        vote: this.newUserRecipeVote,
        image_url: this.newUserRecipeImageUrl
      };
      axios
        .post("/api/user_recipes", params)
        .then(response => {
          this.$router.push("/user_recipes");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
