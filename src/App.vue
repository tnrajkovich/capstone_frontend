<template>
  <div id="app">
    <header class="header header-transparent">
      <!-- Top bar-->

      <div class="navigation navigation-center">
        <div class="container-fluid">
          <!-- Navigation-->
          <div class="inner-navigation collapse">
            <div class="inner-nav onepage-nav">
              <ul>
                <li>
                  <a href="/"><span class="menu-item-span">Home</span></a>
                </li>
                <li>
                  <a href="/Categories"><span class="menu-item-span">Take a trip around the world!</span></a>
                </li>
                <li v-if="!jwt">
                  <a href="/Signup"><span class="menu-item-span" v-if="!jwt">Signup</span></a>
                </li>
                <li v-if="!jwt">
                  <a href="/Login"><span class="menu-item-span" v-if="!jwt">Login</span></a>
                </li>
                <!--                 <li>
                  <a href="/Categories"><span class="menu-item-span">Categories</span></a>
                </li> -->
                <li>
                  <a href="/Logout"><span class="menu-item-span" v-if="jwt">Logout</span></a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Extra-nav - will be hidden on mobile-->
          <div class="extra-nav"></div>
          <!-- Mobile menu-->
          <div class="nav-toggle">
            <a href="#" data-toggle="collapse" data-target=".inner-navigation">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
    <router-view v-on:changeJwt="setJwt()" />

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <!-- Text widget-->
          </div>
          <div class="col-md-3">
            <!-- Recent entries widget-->
            <div class="small-footer">
              <div class="container"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>

<script>
import Vue from "vue";
import Vue2Filters from "vue2-filters";

Vue.use(Vue2Filters);

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      jwt: null
    };
  },
  created: function() {
    this.setJwt();
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.getItem("jwt");
    }
  }
};
</script>
