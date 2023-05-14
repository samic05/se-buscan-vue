<template>
  <div class="card">
    <img :src="information.image" class="avatar" alt="Avatar" />
    <div class="container">
      <h4>
        <b>{{ information.title }}</b>
      </h4>
      <p>
        {{ information.content }}
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
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
}

.container h4 {
  font-weight: 600;
  font-size: 20px;
}
.container p {
  font-weight: 400;
  font-size: 14px;
  color: #525252;
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
