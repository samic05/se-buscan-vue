<template>
  <template v-if="isLoading">
    <div class="loader"></div>
  </template>
  <template v-else>
    <div style="padding: 100px 0">
      <div class="carousel-info">
        <h2 class="carousel-title">Ultimos desaparecidos registrados...</h2>
      </div>
      <Carousel
        :wrap-around="true"
        :settings="settings"
        :breakpoints="breakpoints"
      >
        <Slide v-for="slide in entries" :key="slide.code">
          <CarouselCard :data="slide" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </template>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import CarouselCard from "./CarouselCard.vue";
import missingPeopleApi from "@/api/MissingPeople";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
    CarouselCard,
  },
  methods: {
    async getRandomEntries() {
      this.isLoading = true;
      const { data } = await missingPeopleApi.get("/random/15", {
        headers: {
          // remove headers
        },
      });
      this.entries = data;
      this.isLoading = false;
    },
  },
  data: () => ({
    isLoading: false,
    entries: [],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    },
  }),
  mounted() {
    this.getRandomEntries();
  },
});
</script>

<style>
.loader {
  margin: 100px auto;
  width: 50%;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 220px;
  height: 220px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.carousel {
  position: relative;
  text-align: center;
  box-sizing: border-box;
}
.carousel-info {
  margin-left: 100px;
}

.carousel-title {
  font-family: "Poppins", sans-serif;
  margin: 0 0 10px;
  color: #1d98ad;
}
.carousel-text {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
}

.carousel * {
  box-sizing: border-box;
}

.carousel__track {
  display: flex;
  padding: 0 !important;
  position: relative;
  touch-action: none;
  overscroll-behavior: none;
}

.carousel__viewport {
  overflow: hidden;
}

.carousel__sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
:root {
  /* Color */
  --vc-clr-primary: #000;
  --vc-clr-secondary: #090f207f;
  --vc-clr-white: #ffffff;

  /* Icon */
  --vc-icn-width: 1.2em;

  /* Navigation */
  --vc-nav-width: 30px;
  --vc-nav-height: 30px;
  --vc-nav-border-radius: 0;
  --vc-nav-color: var(--vc-clr-primary);
  --vc-nav-color-hover: var(--vc-clr-secondary);
  --vc-nav-background: transparent;

  /* Pagination */
  --vc-pgn-width: 12px;
  --vc-pgn-height: 4px;
  --vc-pgn-margin: 4px;
  --vc-pgn-border-radius: 0;
  --vc-pgn-background-color: var(--vc-clr-secondary);
  --vc-pgn-active-color: var(--vc-clr-primary);
}
.carousel__icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: currentColor;
}
.carousel__pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  line-height: 0;
  margin: 10px 0 0;
}

.carousel__pagination-button {
  display: block;
  border: 0;
  margin: 0;
  cursor: pointer;
  padding: var(--vc-pgn-margin);
  background: transparent;
}

.carousel__pagination-button::after {
  display: block;
  content: "";
  width: var(--vc-pgn-width);
  height: var(--vc-pgn-height);
  border-radius: var(--vc-pgn-border-radius);
  background-color: var(--vc-pgn-background-color);
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: var(--vc-pgn-active-color);
}
.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background: var(--vc-nav-background);
  border-radius: var(--vc-nav-border-radius);
  width: var(--vc-nav-width);
  height: var(--vc-nav-height);
  text-align: center;
  font-size: var(--vc-nav-height);
  padding: 0;
  color: var(--vc-nav-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  cursor: pointer;
  margin: 0 10px;
  top: 50%;
  transform: translateY(-50%);
}

.carousel__prev:hover,
.carousel__next:hover {
  color: var(--vc-nav-color-hover);
}

.carousel__next--disabled,
.carousel__prev--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.carousel__prev {
  left: 0;
}

.carousel__next {
  right: 0;
}

.carousel--rtl .carousel__prev {
  left: auto;
  right: 0;
}

.carousel--rtl .carousel__next {
  right: auto;
  left: 0;
}
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Fix iOS scrolling #22 */
  transform: translateZ(0);
}
</style>
