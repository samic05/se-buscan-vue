<template>
  <div class="card">
    <img :src="information.image" class="avatar" alt="Avatar" />
    <div class="container">
      <h4>
        <b>{{ information.name }}</b>
      </h4>
      <p>
        {{ information.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    information: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://unpkg.com/css.gg@2.0.0/icons/css/arrow-right.css");
.card {
  border-radius: 20px;
  padding: 10px;
  margin: 20px;
  width: 400px;
}
.avatar {
  height: 130px;
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  font-family: "Poppins", sans-serif;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  white-space: nowrap;
  text-align: center;
}

.container h4 {
  font-weight: 600;
  font-size: 20px;
}

.container p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 202.5%;
  color: #1b8192;
  text-transform: capitalize;
}

.read {
  font-weight: 500;
  font-size: 14px;
  display: flex;
  justify-items: center;
  justify-content: flex-end;
  bottom: 25px;
  right: 30px;
}
</style>
