<template>
  <div id="app">
    <header class="header header-transparent">
      <!-- Top bar-->
      <div class="top-bar">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-6">
              <ul class="top-bar-tools">
                <li>
                  <a class="open-offcanvas" href="#"><i class="ti-menu"></i></a>
                </li>
                <li>
                  <a href="sign-in.html"><i class="ti-search"></i></a>
                </li>
                <li>
                  <a href="sign-in.html"><i class="ti-user"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="navigation navigation-center">
        <div class="container-fluid">
          <!-- Brand-->
          <div class="inner-header">
            <a class="inner-brand" href="index.html">
              <img class="brand-dark" src="assets/images/logo.png" width="74px" alt="" />
              <img class="brand-light" src="assets/images/logo-light.png" width="74px" alt="" />
            </a>
          </div>
          <!-- Navigation-->
          <div class="inner-navigation collapse">
            <div class="inner-nav onepage-nav">
              <ul>
                <li>
                  <a href="#home"><span class="menu-item-span">Home</span></a>
                </li>
                <li>
                  <a href="#story"><span class="menu-item-span">Our story</span></a>
                </li>
                <li>
                  <a href="#special"><span class="menu-item-span">Special</span></a>
                </li>
                <li>
                  <a href="#popular"><span class="menu-item-span">Popular</span></a>
                </li>
                <li>
                  <a href="#gallery"><span class="menu-item-span">Gallery</span></a>
                </li>
                <li>
                  <a href="#services"><span class="menu-item-span">Services</span></a>
                </li>
                <li>
                  <a href="#news"><span class="menu-item-span">News</span></a>
                </li>
                <!-- Pages-->
                <li class="menu-item-has-children">
                  <a href="features.html"><span class="menu-item-span">Pages</span></a>
                  <ul class="sub-menu">
                    <li class="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul class="sub-menu">
                        <li><a href="blog-1.html">Blog</a></li>
                        <li><a href="blog-single-1.html">Post Single</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Gallery</a>
                      <ul class="sub-menu">
                        <li><a href="gallery-1.html">2 Columns</a></li>
                        <li><a href="gallery-2.html">3 Columns</a></li>
                        <li><a href="gallery-3.html">4 Columns</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Menu Grid</a>
                      <ul class="sub-menu">
                        <li><a href="menu-gallery-1.html">2 Columns</a></li>
                        <li><a href="menu-gallery-2.html">3 Columns</a></li>
                        <li><a href="menu-gallery-3.html">4 Columns</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Menu Tiles</a>
                      <ul class="sub-menu">
                        <li><a href="menu-tiles-1.html">1 Column</a></li>
                        <li><a href="menu-tiles-2.html">2 Columns</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Menu Simple</a>
                      <ul class="sub-menu">
                        <li><a href="menu-simple-1.html">1 Column</a></li>
                        <li><a href="menu-simple-2.html">2 Columns</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">User Pages</a>
                      <ul class="sub-menu">
                        <li><a href="sign-in.html">Sign in</a></li>
                        <li><a href="sign-up.html">Sign up</a></li>
                        <li><a href="password-recovery.html">Recover password</a></li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Contact Us</a>
                      <ul class="sub-menu">
                        <li><a href="contact.html">Contact Us 1</a></li>
                        <li><a href="contact-2.html">Contact Us 2</a></li>
                      </ul>
                    </li>
                    <li><a href="reservations.html">Reservations</a></li>
                    <li><a href="elements.html">Elements</a></li>
                    <li><a href="icons.html">Icons</a></li>
                  </ul>
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
    <router-link to="/">Home</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/categories">Categories</router-link>
    |
    <router-link to="/logout">Logout</router-link>
    <router-view />

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <!-- Text widget-->
            <aside class="widget widget_text">
              <div class="textwidget">
                <p><img src="assets/images/logo-light.png" width="74px" alt="" /></p>
                <ul class="icon-list"></ul>
              </div>
            </aside>
          </div>
          <div class="col-md-3">
            <!-- Recent entries widget-->
            <aside class="widget widget_recent_entries">
              <div class="widget-title">
                <h5>Recent Posts</h5>
              </div>
              <ul>
                <li>
                  <a href="#">Matcha Portuguese Egg Tarts</a>
                  <span class="post-date">May 8, 2016</span>
                </li>
                <li>
                  <a href="#">Camp Cooking: One Pan Yaki Udon</a>
                  <span class="post-date">April 7, 2016</span>
                </li>
                <li>
                  <a href="#">Chicken & Spring Vegetable Lasagna</a>
                  <span class="post-date">April 7, 2016</span>
                </li>
                <li>
                  <a href="#">Mini California Sushi Cones</a>
                  <span class="post-date">April 7, 2016</span>
                </li>
              </ul>
            </aside>
          </div>
          <div class="col-md-3">
            <!-- Recent portfolio widget-->
            <aside class="widget widget_recent_works">
              <div class="widget-title">
                <h5>Instagram</h5>
              </div>
              <ul>
                <li>
                  <a href="#"><img src="assets/images/widgets/1.jpg" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="assets/images/widgets/2.jpg" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="assets/images/widgets/3.jpg" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="assets/images/widgets/4.jpg" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="assets/images/widgets/5.jpg" alt="" /></a>
                </li>
                <li>
                  <a href="#"><img src="assets/images/widgets/6.jpg" alt="" /></a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
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
            <div class="col-md-6">
              <ul class="social-links">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-vimeo"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>
