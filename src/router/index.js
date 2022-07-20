import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/auth/SignIn.vue";
import DiscussionVue from "../views/Discussion";

const routes = [
  {
    path: "/",
    name: "Home",
    component: DiscussionVue,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
