<template>
  <div class="info">
    <h2 class="title">Nuestro equipo</h2>
  </div>
  <div class="card-container">
    <TeamCard v-for="card in cards" :key="card.title" :information="card" />
  </div>
  <hr class="separator" />
</template>

<script>
import TeamCard from "./TeamCard.vue";

export default {
  components: {
    TeamCard,
  },
  data() {
    return {
      cards: [
        {
          image: require("@/assets/team/michael.svg"),
          name: "Michael Barbosa",
          title: "CEO",
        },
        {
          image: require("@/assets/team/julio.svg"),
          name: "Julio Bobadilla",
          title: "CTO",
        },
        {
          image: require("@/assets/team/kelly.svg"),
          name: "Kelly Barbosa",
          title: "CFO",
        },
      ],
    };
  },
};
</script>

<style scoped>
.separator {
  width: 75%;
  height: 0px;
  left: 148px;
  border: 1px solid #dc7000;
}
.info {
  padding: 50px;
  margin-left: 100px;
}

.title {
  font-family: "Poppins", sans-serif;
  margin: 0 0 10px;
  color: #1d98ad;
}
.card-container {
  display: flex;
  justify-content: center;
  padding: 50px;
}
</style>
