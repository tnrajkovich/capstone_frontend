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
                  <a href="/Signup"><span class="menu-item-span">Signup</span></a>
                </li>
                <li>
                  <a href="/Login"><span class="menu-item-span">Login</span></a>
                </li>
                <li>
                  <a href="/Categories"><span class="menu-item-span">Categories</span></a>
                </li>
                <li>
                  <a href="/Logout"><span class="menu-item-span">Logout</span></a>
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
    <router-view />

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <!-- Text widget-->
            <aside class="widget widget_text">
              <div class="textwidget">
                <ul class="icon-list"></ul>
              </div>
            </aside>
          </div>
          <div class="col-md-3">
            <!-- Recent entries widget-->
            <div class="small-footer">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="copyright">
                      © 2019
                      <a href="http://2the.me/">2theme</a>
                      All Rights Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>
