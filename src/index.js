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
import Error from "./pages/Error";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PDF from "./pages/PDF";
import PDFs from "./pages/PDFs";
import Teapot from "./pages/Teapot";

import pdfs from "../assets/pdfs/*.pdf";

library.add(faLinkedin, faGithubSquare, faChevronLeft, faChevronRight);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);
const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/pdfs", name: "pdfs", component: PDFs },
  {
    path: "/pdfs/:pdf",
    beforeEnter(to, _, next) {
      if (to.params.pdf in pdfs) window.location.href = pdfs[to.params.pdf];
      else
        next({
          name: "error",
          params: {
            reason: `No PDF named ${to.params.pdf}! Try some other PDF.`,
          },
        });
      next();
    },
    name: "pdf",
    component: PDF,
  },
  { path: "/teapot", name: "teapot", component: Teapot },
  { path: "/error/:reason", name: "error", component: Error },
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
