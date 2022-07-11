import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/auth/SignIn.vue";
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
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
