<template>
  <CustomLink v-for="link in links" :key="link.to" :link="link" />
  <CustomLink
    v-if="isLogged"
    :link="{ to: 'missingPeopleRegistry', name: 'Registrar \n Desaparecido' }"
  />
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  data() {
    return {
      links: [
        { to: "home", name: "inicio" },
        { to: "about", name: "acerca de" },
        { to: "app", name: "app" },
        { to: "contact", name: "contacto" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
  computed: { ...mapGetters("auth", ["isLogged"]) },
};
</script>

<style scoped>
div {
  padding: 0 30px;
}
div a {
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  margin: 0 60px;
}
</style>
