<template>
  <footer>
    <div class="row">
      <div class="column">
        <div class="footer-logo">
          <img :src="footerLogoSVG" />
          <h3 class="title">SE BUSCAN</h3>
        </div>
        <ul>
          <li>
            <a target="_blank" href="mailto:sebuscan@sebusca.co"
              ><i class="fa fa-angle-right"></i>sebuscan@sebusca.co</a
            >
          </li>
        </ul>
      </div>

      <div class="column">
        <h5>Acerca de</h5>
        <ul>
          <li>
            <router-link to="/about" class="navigation-link">
              <a href="#"><i class="fa fa-angle-right"></i>Equipo</a>
            </router-link>
          </li>
          <li>
            <router-link to="/contact#channels" class="navigation-link">
              <a href="#"><i class="fa fa-angle-right"></i>Contacto</a>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h5>Contactenos</h5>

        <ul>
          <li>
            <a><i class="fa fa-angle-right"></i>+57 3002940292</a>
          </li>
        </ul>
      </div>

      <div class="column">
        <h5>¡DESCARGUE SE BUSCAN!</h5>

        <ul class="social-icons">
          <li>
            <a href="https://www.facebook.com/sebuscan.com.co" target="_blank"
              ><i class="gg-facebook"></i
            ></a>
          </li>

          <li>
            <a href="https://www.instagram.com/sebuscan_/" target="_blank"
              ><i class="gg-instagram"></i
            ></a>
          </li>

          <li>
            <a href="https://twitter.com/sebuscan_?lang=es" target="_blank"
              ><i class="gg-twitter"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <p class="copyright">Copyright © {{ currYear }} All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currYear: new Date().getFullYear(),
      footerLogoSVG: require("@/assets/logo.svg"),
    };
  },
  methods: {},
  props: {},
  computed: {},
};
</script>

<style scoped>
@import url("https://unpkg.com/css.gg@2.0.0/icons/css/facebook.css");
@import url("https://unpkg.com/css.gg@2.0.0/icons/css/instagram.css");
@import url("https://unpkg.com/css.gg@2.0.0/icons/css/twitter.css");

* {
  padding: 0;
  font-family: "Poppins", sans-serif;
}

a {
  text-decoration: none;
}
.title {
  font-weight: 700;
}

body {
  height: 100%;
  width: 100%;
  background-color: #eceef9;
}

footer {
  color: white;
  background-color: #1d98ad;
  width: 100%;
  display: block;
}
.footer-logo {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  white-space: nowrap;
  padding-bottom: 60px;
  cursor: pointer;
}

.row {
  display: flex;
  padding: 1rem;
}

.column {
  width: calc(100% / 3);
  padding: 2rem 6rem;
  font-weight: 500;
}

h5 {
  margin-bottom: 0.9375rem;
  font-size: 1rem;
}

h3 {
  margin-bottom: 0.9375rem;
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
  line-height: 1.3rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul li {
  margin-bottom: 0.625rem;
}

ul li a {
  color: white;
  font-size: 1rem;
  font-weight: lighter;
}

ul li i {
  color: grey;
}

ul li a:hover {
  color: #54daf147;
}

ul.social-icons {
  display: flex;
  column-gap: 0.625rem;
}

.social-icons i {
  color: black;
}

ul.social-icons li {
  margin-bottom: 0rem;
}

ul.social-icons li a {
  display: grid;
  place-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  background-color: white;
}

ul.social-icons li:hover a {
  background-color: #54daf147;
}

.fa {
  font-weight: lighter;
}
.social-icons {
  padding-top: 80px;
}
.gg-facebook {
  color: #dc7000 !important;
}
.gg-twitter {
  color: #dc7000 !important;
}
.gg-instagram {
  color: #dc7000 !important;
}
.copyright {
  margin: 0;
  text-align: center;
  color: #fff;
  background-color: #1d98ad;
  padding: 0.6rem 0;
  border: solid white;
  border-width: 0.5px 0 0 0;
  font-weight: 100;
}

/* Responsive adjustments */

@media screen and (max-width: 768px) {
  .column {
    margin: 0.4rem 0;
    width: 100%;
    padding: 0;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  h4 {
    font-size: 1.3125rem;
  }

  p {
    font-size: 0.9375rem;
  }

  ul li a {
    font-size: 0.9375rem;
  }

  ul.social-icons li a {
    width: 1.875rem;
    height: 1.875rem;
  }
}
</style>
