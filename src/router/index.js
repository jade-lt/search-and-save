import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // route is ready if required later
      // path: "/about",
      // name: "about",
      // component: () => import("../components/AboutPage.vue"),
    },
  ],
});

export default router;
