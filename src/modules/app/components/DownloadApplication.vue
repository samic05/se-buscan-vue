<template>
  <div class="row">
    <div class="column left"></div>
    <div class="column">
      <p>Descarga Se Buscan</p>
      <a
        target="_blank"
        href="https://apps.apple.com/us/app/se-buscan/id1251759562"
      >
        <img class="badge" :src="appstore" alt="descargar en appstore"
      /></a>
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=io.cordova.sebuscan&hl=es_US"
      >
        <img class="badge" :src="playstore" alt="descargar en playstore"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appstore: require("@/assets/appstore.svg"),
      playstore: require("@/assets/playstore.png"),
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
}

.column {
  flex: 50%;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.column p {
  font-family: "Poppins";
  font-weight: 600;
  font-size: 48px;
}
.badge {
  width: 460px;
  margin: 10px 0;
}

.badge:hover {
  cursor: pointer;
}

.left {
  background-image: url("@/assets/sebuscan-app.png");
  height: 600px;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
