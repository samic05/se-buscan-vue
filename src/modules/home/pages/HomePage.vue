<template>
  <Jumbotron :message="jumbotronMessage" />
  <MissingPeopleCarousel />
  <InformationContainer />
</template>

<script>
import Jumbotron from "../components/Jumbotron.vue";
import MissingPeopleCarousel from "../components/MissingPeopleCarousel.vue";
import InformationContainer from "../components/InformationContainer.vue";
export default {
  components: {
    Jumbotron,
    MissingPeopleCarousel,
    InformationContainer,
  },
  data() {
    return {
      jumbotronMessage: `Una app para la
búsqueda y registro de
personas desaparecidas`,
    };
  },
};
</script>
<style scoped></style>
