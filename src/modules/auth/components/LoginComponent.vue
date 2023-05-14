<template>
  <div class="container">
    <form @submit="normalLogin">
      <div class="row">
        <h2 style="text-align: center">Conectacte</h2>
        <div class="col">
          <router-link to="/register">
            <a class="register btn">
              <i class="fa gg-user-add fa-fw"></i> Registrarme
            </a>
          </router-link>

          <a @click="loginwithFacebook" class="fb btn">
            <i class="fa gg-facebook fa-fw"></i> Conectar con Facebook
          </a>
          <a @click="loginWithGoogle" class="google btn">
            <i class="fa gg-google fa-fw"></i> Conectar con Google
          </a>
        </div>

        <div class="col">
          <input
            type="text"
            name="username"
            v-model="user.username"
            placeholder="Usuario"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="contraseña"
            v-model="user.password"
            required
          />
          <input type="submit" value="Login" />
          <div class="remember">
            <input
              class="style"
              type="checkbox"
              checked="checked"
              name="remember"
              v-model="remember"
              style="width: auto; margin: 0 10px"
            />
            Recuerdame
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        username: null,
        password: null,
      },
      remember: false,
    };
  },
  methods: {
    normalLogin(event) {
      event.preventDefault();
      this.loginWithEmail(this.user);
    },
    ...mapActions("auth", [
      "loginwithFacebook",
      "loginWithGoogle",
      "loginWithEmail",
    ]),
  },
};
</script>

<style scoped>
@import url("https://unpkg.com/css.gg@2.0.0/icons/css/google.css");
@import url("https://unpkg.com/css.gg@2.0.0/icons/css/facebook.css");
@import url("https://unpkg.com/css.gg@2.0.0/icons/css/user-add.css");
* {
  box-sizing: border-box;
}

/* style the container */
.container {
  position: relative;
  border-radius: 5px;
  padding: 20px 0 30px 0;
}
.row {
  font-family: "Poppins";
}
a:link {
  text-decoration: none;
}
.remember {
  display: flex;
}
/* style inputs and link buttons */
input,
.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: flex;
  font-size: 17px;
  line-height: 20px;
  text-decoration: none; /* remove underline from anchors */
  font-family: "Poppins";
  justify-content: center;
}
.fa {
  margin: 0 10px;
}

input:hover,
.btn:hover {
  opacity: 1;
  cursor: pointer;
}

/* add appropriate colors to fb, twitter and google buttons */
.fb {
  background-color: #3b5998;
  color: white;
}
.register {
  background-color: #007e94;
  color: white;
  cursor: pointer;
}
.google {
  background-color: #dd4b39;
  color: white;
}

/* style the submit button */
input[type="submit"] {
  background-color: #007e94;
  color: white;
  cursor: pointer;
}
input[type="checkbox"] {
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #55acee;
}

/* Two-column layout */
.col {
  float: left;
  width: 50%;
  margin: auto;
  padding: 0 50px;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* vertical line */
.vl {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border: 2px solid #ddd;
  height: 175px;
}

/* text inside the vertical line */
.inner {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 8px 10px;
}

/* hide some text on medium and large screens */
.hide-md-lg {
  display: none;
}

/* bottom container */
.bottom-container {
  text-align: center;
  background-color: #666;
  border-radius: 0px 0px 4px 4px;
}

/* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 650px) {
  .col {
    width: 100%;
    margin-top: 0;
  }
  /* hide the vertical line */
  .vl {
    display: none;
  }
  /* show the hidden text on small screens */
  .hide-md-lg {
    display: block;
    text-align: center;
  }
}
</style>
