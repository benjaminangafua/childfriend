import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import AboutUs from "../views/AboutUs.vue";
import Services from "../views/Services.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/AboutUs",
      name: "AboutUs",
      component: AboutUs,
    },
    {
      path: "/services",
      name: "Services",
      component: Services,
    },
  ],
});

export default router;
