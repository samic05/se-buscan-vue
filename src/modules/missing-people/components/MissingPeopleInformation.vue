<template>
  <template v-if="isLoading">
    <div class="loader"></div>
  </template>
  <template v-else>
    <div class="page-container">
      <div class="profile">
        <h1>{{ missing.name }} {{ missing.lastName }}</h1>
        <h3>Desaparecido en {{ missing.city }}</h3>
        <img class="people-image" :src="missing.image" />
      </div>
      <div class="information">
        <div class="info-item">
          <h3>Fecha de desaparecido:</h3>
          <p>{{ missing.dateOfDisappearance }}</p>
        </div>
        <div class="info-item">
          <h3>Tiempo Desaparecido:</h3>
          <p>{{ this.timeDissapeared }}</p>
        </div>
        <div class="info-item">
          <h3>Descripción Desaparecido:</h3>
          <p>{{ missing.comment }}</p>
        </div>
        <div class="info-item">
          <h3>Edad:</h3>
          <p>{{ this.currentAge }}</p>
        </div>
        <div class="info-item">
          <h3>Sexo:</h3>
          <p>{{ missing.gender }}</p>
        </div>
        <div class="info-item">
          <h3>Estatura:</h3>
          <p>{{ missing.height }}</p>
        </div>
        <div class="info-item">
          <h3>Raza:</h3>
          <p>{{ missing.race }}</p>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import missingPeopleApi from "@/api/MissingPeople";

export default {
  props: {
    id: Number,
  },
  data() {
    return {
      missing: {
        name: "Name",
        lastName: "Last Name",
        city: "City",
        dateOfBirth: "2000-01-01",
        dateOfDisappearance: "2000-01-01",
        gender: "Masculino",
        height: "0",
        build: "Sin información",
        race: "Sin Información",
        comment: "Sin información adicional",
      },
      isLoading: false,
    };
  },
  methods: {
    async getPerson() {
      this.isLoading = true;
      const { data } = await missingPeopleApi.get(`/person/${this.id}`, {
        headers: {
          // remove headers
        },
      });
      this.missing = {
        ...data,
        image: `http://sebuscan.com.co/resources/img/person/${this.id}/1.jpg`,
      };
      this.isLoading = false;
    },

    getDifference(date) {
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      var years = Math.floor(diffDays / 365);
      var months = Math.floor((diffDays % 365) / 30);
      var days = Math.floor((diffDays % 365) % 30);
      return { years, months, days };
    },
  },
  mounted() {
    this.getPerson();
  },
  computed: {
    timeDissapeared() {
      const { years, months, days } = this.getDifference(
        new Date(
          Date.parse(this.missing.dateOfDisappearance) + 3600 * 1000 * 24
        )
      );

      const yearDescription = years == 1 ? "Año" : "Años";
      const monthDescription = months == 1 ? "Mes" : "Meses";
      const dayescription = days == 1 ? "Dia" : "Dias";

      return `${years} ${yearDescription}, ${months} ${monthDescription}, ${days} ${dayescription}`;
    },
    currentAge() {
      const { years, months, days } = this.getDifference(
        new Date(Date.parse(this.missing.dateOfBirth) + 3600 * 1000 * 24)
      );
      const yearDescription = years == 1 ? "Año" : "Años";
      const monthDescription = months == 1 ? "Mes" : "Meses";
      const dayescription = days == 1 ? "Dia" : "Dias";

      return `${years} ${yearDescription}, ${months} ${monthDescription}, ${days} ${dayescription}`;
    },
  },
};
</script>

<style scoped>
.people-image {
  height: 400px;
  width: 400px;
}

p {
  display: inline;
  font-family: "Poppins", sans-serif;
}

h3 {
  display: inline;
  font-family: "Poppins", sans-serif;
  padding-right: 1%;
}
h1 {
  font-family: "Poppins", sans-serif;
}

.page-container {
  padding: 5% 5%;
  background-color: #cff5fb;
  margin: 5% 10% 0% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile {
  justify-content: center;
  margin-bottom: 5%;
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* Center horizontally*/
}
.information {
  max-width: 50%;
}
</style>
