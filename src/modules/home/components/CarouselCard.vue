<template>
  <div class="card">
    <img :src="defaultImage" class="avatar" alt="Avatar" />
    <div class="container">
      <h4>
        <b>{{ data.lastName }}, {{ data.name }}</b>
      </h4>
      <p>Desaparecido en {{ data.city }}</p>
      <div
        @click="
          this.$router.push({
            name: 'missingPeople',
            props: { test: 'hola', title: `${data.name} ${data.lastName}` },
            params: {
              id: this.data.code,
            },
          })
        "
        class="read"
      >
        <a>Ver mas </a><i class="gg-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultImage: require("@/assets/no-photo.svg"),
    };
  },
  mounted() {
    this.defaultImage = `http://sebuscan.com.co/resources/img/person/${this.data.code}/1.jpg`;
    console.log();
  },
};
</script>

<style scoped>
@import url("https://unpkg.com/css.gg@2.0.0/icons/css/arrow-right.css");
.gg-arrow-right {
  margin: 0 10px;
}
.card {
  border-radius: 20px;
  padding: 10px;
  margin: 20px;
}
.avatar {
  height: 200px;
  width: 200px;
  border-radius: 50px;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
  cursor: pointer;
}
</style>
