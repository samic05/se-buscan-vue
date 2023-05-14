<template>
  <div>
    <div>
      <h1>Contacto Se Buscan</h1>
      <p>¿Tienes alguna duda o sugerencia? ¡Escribenos!</p>
    </div>
    <div>
      <h3>Correo Electronico</h3>
      <a href="mailto:sebuscan@sebusca.co" target="_blank" class="email"
        >sebuscan@sebusca.co</a
      >
    </div>
    <div>
      <h3>Redes Sociales</h3>
      <ul>
        <li>
          <a
            href="https://twitter.com/sebuscan_?lang=es"
            target="_blank"
            class="social-link"
            >Twitter</a
          >
        </li>
        <li>
          <a
            href="https://www.instagram.com/sebuscan_/"
            target="_blank"
            class="social-link"
            >Instagram</a
          >
        </li>
        <li>
          <a
            href="https://www.facebook.com/sebuscan.com.co"
            target="_blank"
            class="social-link"
            >Facebook</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Fragment } from "vue";

export default { components: { Fragment } };
</script>

<style scoped>
.social-link {
  text-decoration: none !important;
}
ul {
  padding: 0;
}
li {
  list-style-type: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  padding: 10px 0;
  cursor: pointer;
}
h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 75px;
  color: #c88e68;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
}
h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  /* identical to box height */

  color: #c88e68;
}
.email {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin: 0;
}
</style>
