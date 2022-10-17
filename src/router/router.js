import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../view/pages/home"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../view/pages/register"),
    meta: { layout: "auth" },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
