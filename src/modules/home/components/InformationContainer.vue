<template>
  <div class="row">
    <div class="column" style="display: flex; justify-content: center">
      <img :src="image" />
    </div>
    <div class="column">
      <h3>{{ title }}</h3>
      <ol>
        <li>Registrar la persona en la aplicación SEBUSCAN.</li>
        <li>
          Recuerde que no existe un plazo mínimo de tiempo que haya que esperar
          para denunciar/ comunicar la desaparición (sobre todo la de un menor).
        </li>
        <li>
          Recuerde que no existe un plazo mínimo de tiempo que haya que esperar
          para denunciar/ comunicar la desaparición (sobre todo la de un menor).
        </li>
        <li>Hacerse una primera hipótesis de lo que puede haber pasado.</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jumbotronMessage: `Una app para la
búsqueda y registro de
personas desaparecidas`,
      title: "¿Qué hacer ante una desaparición?",
      image: require("@/assets/information-missing-people.svg"),
    };
  },
};
</script>

<style scoped>
.column {
  float: left;
  width: 50%;
}

.column h3 {
  color: #1d98ad;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.column h3 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 30px;
}

.column ol li {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 17px;
  padding: 15px 0;
}

.column ol {
  width: 600px;
}

.column button {
  margin: 50px 0 0 0;
  background-color: black;
  color: white;
  text-decoration: none;
  border: 1px solid #000000;
  text-align: center;
  display: inline-block;
  padding: 13px 60px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

.column button:hover {
  cursor: pointer;
}
.row {
  background-color: rgba(84, 218, 241, 0.28);
  padding: 100px;
}
</style>
