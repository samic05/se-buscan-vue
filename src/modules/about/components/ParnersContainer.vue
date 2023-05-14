<template>
  <div class="partner-container">
    <img
      class="partner-image"
      v-for="partner in partners"
      :key="partner.pathShort"
      :src="partner.pathLong"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [],
    };
  },
  mounted() {
    this.importAll(require.context("@/assets/partners/", true, /\.png$/));
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.partners.push({ pathLong: r(key), pathShort: key })
      );
    },
  },
};
</script>

<style scoped>
.partner-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.partner-image {
  margin: 40px;
}
</style>
