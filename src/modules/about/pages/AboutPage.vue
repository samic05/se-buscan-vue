<template>
  <AboutBanner />
  <InformationCardContainer />
  <TeamCardContainer />
  <ParnersContainer />
</template>

<script>
import AboutBanner from "../components/AboutBanner.vue";
import InformationCardContainer from "../components/InformationCardContainer.vue";
import TeamCardContainer from "../components/TeamCardContainer.vue";
import ParnersContainer from "../components/ParnersContainer.vue";
export default {
  components: {
    AboutBanner,
    InformationCardContainer,
    TeamCardContainer,
    ParnersContainer,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
