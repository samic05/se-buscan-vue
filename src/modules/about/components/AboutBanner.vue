<template>
  <div class="row">
    <div class="column">
      <ul class="breadcrumb">
        <li>
          <router-link to="/" class="navigation-link">INICIO</router-link>
        </li>
        <li>ACERCA DE</li>
      </ul>
      <h3>
        La red social para la prevención del riesgo y la búsqueda de personas
        desaparecidas.
      </h3>
    </div>
    <div class="column column-two">
      <img :src="seBuscanImage" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seBuscanImage: require("@/assets/sebusca.png"),
    };
  },
};
</script>

<style scoped>
.column {
  float: left;
  width: 50%;
}

.column-two {
  display: flex;
  justify-content: center;
}

.column-two img {
  width: 500px;
}

.column h3 {
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 700;
  padding: 50px 100px 0 100px;
}

.row {
  height: 500px;
  background-color: rgba(84, 218, 241, 0.28);
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Style the list */
ul.breadcrumb {
  padding: 80px 0 0 110px;
  list-style: none;
  font-family: "Poppins", sans-serif;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 14px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li + li:before {
  padding: 8px;
  color: #848484;
  content: "\1433";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: #848484;
  text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
  color: black;
  text-decoration: underline;
}
</style>
