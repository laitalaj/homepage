import Vue from "vue";
import VueRouter from "vue-router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PDFs from "./pages/PDFs";
import Teapot from "./pages/Teapot";

library.add(faLinkedin, faGithubSquare, faChevronLeft, faChevronRight);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/pdfs", name: "pdfs", component: PDFs },
  { path: "/teapot", name: "teapot", component: Teapot },
  { path: "*", name: "notfound", component: NotFound },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  render: (createElement) => createElement(App),
  router,
}).$mount("#app");
