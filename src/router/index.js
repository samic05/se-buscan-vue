import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import HomePage from "@/modules/home/pages/HomePage";
import AboutPage from "@/modules/about/pages/AboutPage";
import ContactPage from "@/modules/contact/pages/ContactPage";
import ApplicationPage from "@/modules/app/pages/ApplicationPage";
import LoginPage from "@/modules/auth/page/LoginPage";
import RegisterPage from "@/modules/auth/page/RegisterPage";
import store from "@/store";

const NOT_LOGGED_USERS = "NOT_LOGGED_USERS";

const LOGGED_USERS = "LOGGED_USERS";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
    meta: { title: "Se Buscan - Acerca de nosotros" },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
    meta: { title: "Se Buscan - Contacto" },
  },
  {
    path: "/app",
    name: "app",
    component: ApplicationPage,
    meta: { title: "Se Buscan - App" },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: { title: "Se Buscan - Conectarme", view: NOT_LOGGED_USERS },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
    meta: { title: "Se Buscan - Registrarme", view: NOT_LOGGED_USERS },
  },
  {
    path: "/people/:id",
    name: "missingPeople",
    component: () => import("@/modules/missing-people/pages/MissingPeoplePage"),

    props: (route) => {
      const id = Number(route.params.id);
      return isNaN(id) ? { id: 654 } : { id };
    },
  },
  {
    path: "/people/register",
    name: "missingPeopleRegistry",
    component: () =>
      import("@/modules/missing-people/pages/MissingPeopleRegistry"),
    meta: {
      title: "Se Buscan - Registrar desaparecido",
      view: LOGGED_USERS,
    },
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.view === NOT_LOGGED_USERS && store.getters["auth/isLogged"]) {
    next({ name: "home" });
  } else if (to.meta.view === LOGGED_USERS && !store.getters["auth/isLogged"]) {
    next({ name: "home" });
  } else next();
});
const DEFAULT_TITLE = "Se Buscan";
router.afterEach((to, from) => {
  nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
