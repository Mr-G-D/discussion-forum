import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/auth/SignIn.vue";
import DiscussionVue from "../views/Discussion";
import CommentVue from "../views/Discussion/Comments";

const routes = [
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/",
    name: "Home",
    component: DiscussionVue,
  },
  {
    path: "/discussion/:id",
    name: "Discussion",
    component: CommentVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
