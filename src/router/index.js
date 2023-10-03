import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ListView from "@/views/ListView.vue";
import HistoryView from "@/views/HistoryView.vue";
import GsapAnimationView from "@/views/GsapAnimationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/lists",
      name: "lists",
      component: ListView,
    },
    {
      path: "/history",
      name: "history",
      component: HistoryView,
    },
    {
      path: "/gsap-animation",
      name: "gsap",
      component: GsapAnimationView,
    },
  ],
});

export default router;
