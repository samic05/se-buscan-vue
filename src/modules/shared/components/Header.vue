<template>
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img :src="logoSVG" />
        <p>Se buscan</p>
      </div>
    </router-link>
    <div class="navigation">
      <Navbar />
      <template v-if="isLogged"
        ><h3>Hola, {{ this.userName }}!</h3></template
      >
      <template v-else>
        <router-link to="/login" class="navigation-link">
          <button class="login">Acceder</button>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "./Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      logoSVG: require("@/assets/logo.svg"),
    };
  },
  methods: {
    ...mapActions("auth", ["validateIfIsLogged"]),
  },
  computed: { ...mapGetters("auth", ["isLogged", "userName"]) },
  mounted() {
    if (!this.isLogged) {
      this.validateIfIsLogged();
    }
  },
};
</script>

<style scoped>
.header {
  z-index: 3;
  background-color: #1d98ad;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #000000;
}
.logo {
  display: flex;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  align-items: center;
  column-gap: 15px;
  font-weight: 700;
}
.header a {
  text-decoration: none;
  color: white;
}
.logo p {
  font-size: 26px;
}
.logo:hover {
  cursor: pointer;
}
.login {
  text-transform: uppercase;
  background-color: #1d98ad;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 26px;
  text-align: center;
  display: inline-block;
  padding: 13px 60px;
  font-weight: 700;
  color: white;
}

.login:hover {
  background-color: #fff;
  cursor: pointer;
  color: #1d98ad;
}
.navigation {
  display: flex;
  align-items: center;
}
h3 {
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  font-style: normal;
  font-size: 15px;
  line-height: 19px;
  text-transform: uppercase;
  color: #fff;
}
</style>
