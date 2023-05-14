<template>
  <form @submit="normalRegister">
    <div class="container">
      <h1>Registro de desaparecido</h1>
      <p>
        Porfavor ingresa los siguientes para reportar a alguien en nuestra red.
      </p>
      <hr />

      <label for="text"><b>Nombre</b></label>
      <input
        type="text"
        v-model="prospect.name"
        name="nombre"
        id="name"
        required
      />

      <label for="text"><b>Apellido</b></label>
      <input
        type="text"
        v-model="prospect.lastName"
        name="nombre"
        id="name"
        required
      />
      <label for="text"><b>Ciudad</b></label>
      <input
        type="text"
        v-model="prospect.city"
        name="nombre"
        id="name"
        required
      />

      <label for="text"><b>Fecha de nacimiento</b></label>
      <input
        type="date"
        v-model="prospect.dateOfBirth"
        name="nombre"
        id="name"
        required
      />

      <label for="text"><b>Fecha de desaparicion</b></label>
      <input
        type="date"
        v-model="prospect.dateOfDisappearance"
        name="nombre"
        id="name"
        required
      />
      <label for="text"><b>Genero</b></label>
      <select id="genders">
        <option selected value="Otro">Otro</option>
        <option v-for="(gender, index) in genders" :key="index" :value="gender">
          {{ gender }}
        </option>
      </select>
      <label for="text"><b>Estatura</b></label>
      <input
        type="text"
        v-model="prospect.height"
        name="nombre"
        id="name"
        required
      />
      <label for="text"><b>Raza</b></label>
      <select id="races">
        <option selected value="Sin Información">Sin Información</option>
        <option v-for="(race, index) in races" :key="index" :value="race">
          {{ race }}
        </option>
      </select>
      <label for="text"><b>Contextura</b></label>
      <select id="builds">
        <option selected value="Sin Información">Sin Información</option>
        <option v-for="(build, index) in builds" :key="index" :value="build">
          {{ build }}
        </option>
      </select>
      <label for="text"><b>Comentarios</b></label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <p>
        Creando tu cuenta aceptas nuestros
        <a>Terminos y condiciones</a>.
      </p>
      <button type="submit" class="registerbtn">Registrar Desaparecido</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      prospect: {
        name: null,
        lastName: null,
        city: null,
      },
      races: [
        "Afrodescendiente",
        "Blanca o caucásica",
        "Asiática o mongoloide",
        "Indígena o americana",
        "Parda o malaya",
      ],
      builds: ["Delgada", "Normal", "Gruesa"],
      genders: ["Masculino", "Femenino"],
    };
  },
  methods: {},
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
  width: 50%;
}
.sign-in {
  cursor: pointer;
}

/* Full-width input fields */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="date"],
#races,
#genders,
#builds,
textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  resize: vertical;
}
input[type="date"] {
  resize: none;
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
form {
  display: flex;
  justify-content: center;
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
