<template>
  <div class="info">
    <h2 class="title">¿Por qué Se Buscan es importante?</h2>
  </div>
  <div class="card-container">
    <InformationCard
      v-for="card in cards"
      :key="card.title"
      :information="card"
    />
  </div>
</template>

<script>
import InformationCard from "./InformationCard.vue";

export default {
  components: {
    InformationCard,
  },
  data() {
    return {
      cards: [
        {
          image: require("@/assets/about-icons/social-network.svg"),
          title: "Red Social",
          content:
            "Para la comunidad de desaparecidos en el mundo. Sus familiares o amigos podrán vincularse todas las entidades involucradas en la problemática de desaparición. SE BUSCAN será el nodo mundial de información dedesaparecidos.",
        },
        {
          image: require("@/assets/about-icons/thanks.svg"),
          title: "Gratuita",
          content:
            "El acceso a la página WEB y a las aplicaciones en Android y Apple es totalmente gratuita y  a través de estos medios se podrán registrar las personas desaparecidas o enviar pistas.",
        },
        {
          image: require("@/assets/about-icons/worldwide.svg"),
          title: "Cubrimiento Mundial",
          content:
            "SE BUSCAN tiene cubrimiento mundial, es decir, que desde cualquier lugar del planeta con acceso a internet, se podrán registrar desaparecidos.",
        },
      ],
    };
  },
};
</script>

<style scoped>
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
