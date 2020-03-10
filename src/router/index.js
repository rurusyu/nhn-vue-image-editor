import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/chart",
    name: "Chart",
    component: () =>
      import(/* webpackChunkName: "chart" */ "../views/Chart.vue")
  },
  {
    path: "/amChart",
    name: "AmChart",
    component: () =>
      import(/* webpackChunkName: "am-chart" */ "../views/AmChart.vue")
  },
  {
    path: "/grid",
    name: "Grid",
    component: () =>
      import(/* webpackChunkName: "am-chart" */ "../views/Grid.vue")
  },
  {
    path: "/text",
    name: "TextEditor",
    component: () =>
      import(/* webpackChunkName: "text-editor" */ "../views/TextEditor.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
