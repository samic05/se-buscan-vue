<template>
  <MissingPeopleInformationVue :id="id" />
  <MissingPeopleCommentsVue :id="id" />
</template>

<script>
import MissingPeopleCommentsVue from "../components/MissingPeopleComments.vue";
import MissingPeopleInformationVue from "../components/MissingPeopleInformation.vue";

export default {
  props: {
    id: Number,
  },
  components: { MissingPeopleInformationVue, MissingPeopleCommentsVue },
};
</script>

<style scoped></style>
