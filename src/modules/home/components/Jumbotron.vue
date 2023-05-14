<template>
  <div class="principal-jumbotron">
    <div class="content">
      <pre>{{ this.message }}</pre>
      <ul>
        <li>Disponible en App Store y Google Play.</li>
      </ul>
      <router-link to="/app">
        <button class="get-information">Conocer más...</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "No message",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.principal-jumbotron {
  background-image: url("@/assets/jumbotron-image.svg");
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 160px;
}

.content pre {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 155.2%;
  margin: 0;
  padding: 0 0 0 100px;
}

.content * {
  margin: 0;

  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
.content ul {
  padding: 30px 0 0 100px;
  list-style: none;
}

.content ul li::before {
  content: "\2022";
  color: #9ab1ec;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
  font-size: 16px;
}
.get-information {
  margin: 100px;
  background-color: #1d98ad;
  color: white;
  text-decoration: none;
  border: 1px solid #000000;
  border-radius: 26px;
  text-align: center;
  display: inline-block;
  padding: 13px 60px;
  font-size: 16px;
}

.get-information:hover {
  cursor: pointer;
}
</style>
