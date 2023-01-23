import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});
const modules = import.meta.globEager("../views/ChildPage/*.vue");
Object.keys(modules).map((key) => {
  router.addRoute({
    path: `/${key.split("/")[3].split(".")[0]}`,
    component: modules[key].default,
  });
});
export default router;
