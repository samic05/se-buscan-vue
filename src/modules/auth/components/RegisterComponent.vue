<template>
  <form @submit="normalRegister">
    <div class="container">
      <h1>Registro</h1>
      <p>Porfavor ingresa los siguientes datos para crear una cuenta</p>
      <hr />

      <label for="text"><b>Nombre</b></label>
      <input
        type="text"
        v-model="prospect.fullName"
        name="nombre"
        id="name"
        required
      />

      <label for="email"><b>Email</b></label>
      <input
        type="email"
        v-model="prospect.email"
        name="email"
        id="email"
        required
      />

      <label for="psw"><b>Contraseña</b></label>
      <input
        type="password"
        v-model="prospect.password"
        name="psw"
        id="psw"
        required
      />

      <label for="psw-repeat"><b>Repite tu contraseña</b></label>
      <input
        type="password"
        v-model="prospect.confirmedPassword"
        name="psw-repeat"
        id="psw-repeat"
        required
      />
      <hr />

      <p>
        Creando tu cuenta aceptas nuestros
        <a>Terminos y condiciones</a>.
      </p>
      <button type="submit" class="registerbtn">Registrarme</button>
    </div>

    <div class="container signin">
      <p>
        ¿Ya tienes cuenta?
        <router-link to="/login">
          <a class="sign-in">Conectate</a>.
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      prospect: {
        fullName: null,
        email: null,
        password: null,
        confirmedPassword: null,
      },
    };
  },
  methods: {
    normalRegister(event) {
      event.preventDefault();
      this.registerWithEmail(this.prospect);
    },
    ...mapActions("auth", ["registerWithEmail"]),
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  position: relative;
  border-radius: 5px;
  padding: 20px 0 30px 0;
  padding: 16px;
  font-family: "Poppins";
}
.sign-in {
  cursor: pointer;
}

/* Full-width input fields */
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit/register button */
.registerbtn {
  background-color: #007e94;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  text-align: center;
}
</style>
