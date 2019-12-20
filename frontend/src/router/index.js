import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home";
import New from "@/views/New";
import Article from "@/views/Article";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/new", name: "new-article", component: New },
    { path: "/:id", name: "view-article", component: Article }
  ]
});

export default router;
