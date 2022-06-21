import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "../components/DashboardPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // routes are not really being implemented, but ready if required later
    {
      path: "/",
      name: "home",
      component: DashboardPage,
    },
  ],
});

export default router;
