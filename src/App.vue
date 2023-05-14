<template>
  <Header />
  <router-view />
  <Newsletter />
  <Footer />
</template>

<script>
import Header from "@/modules/shared/components/Header.vue";
import Footer from "@/modules/shared/components/Footer.vue";
import Newsletter from "@/modules/shared/components/Newsletter.vue";
export default {
  components: {
    Header,
    Footer,
    Newsletter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap");
</style>
