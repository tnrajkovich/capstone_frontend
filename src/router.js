import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UserRecipesIndex from "./views/UserRecipesIndex.vue";
import ParentRecipesNew from "./views/ParentRecipesNew.vue";
import UserRecipesNew from "./views/UserRecipesNew.vue";
import ParentRecipesShow from "./views/ParentRecipesShow.vue";
import ParentRecipesEdit from "./views/ParentRecipesEdit.vue";
import UserRecipesEdit from "./views/UserRecipesEdit.vue";
import Categories from "./views/Categories.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/user_recipes/index",
      name: "user_recipes-index",
      component: UserRecipesIndex
    },
    {
      path: "/parent_recipes/new",
      name: "parent_recipes-new",
      component: ParentRecipesNew
    },
    {
      path: "/user_recipes/new",
      name: "user_recipes-new",
      component: UserRecipesNew
    },
    {
      path: "/parent_recipes/:id",
      name: "parent_recipes-show",
      component: ParentRecipesShow
    },
    {
      path: "/parent_recipes/:id/edit",
      name: "parent_recipes-edit",
      component: ParentRecipesEdit
    },
    {
      path: "/user_recipes/:id/edit",
      name: "user_recipes-edit",
      component: UserRecipesEdit
    },
    {
      path: "/categories",
      name: "categories",
      component: Categories
    }
  ]
});
