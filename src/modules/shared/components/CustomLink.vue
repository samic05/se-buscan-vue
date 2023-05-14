<template>
  <a v-if="isExternalLink" target="_blank" :href="link.to">{{ link.name }}</a>
  <router-link v-else :to="route" class="navigation-link">
    <div>
      <div class="bullet"></div>
      {{ link.name }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
    route() {
      return this.link.id === undefined
        ? { name: this.link.to }
        : { name: this.link.to, params: { id: this.link.id } };
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

a:link {
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-weight: 500;
}
.bullet {
  width: 6px;
  height: 6px;
  background-color: #5ce3fa;
  border-radius: 50%;
  margin-right: 10px;
  display: none !important;
}
.navigation-link div {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  max-width: 100px;
  text-align: center;
}
.router-link-active .bullet {
  display: block !important ;
}
</style>
