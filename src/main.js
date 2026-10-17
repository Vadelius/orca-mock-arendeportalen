import { casePage } from "./pages/case.js";
import { casesPage } from "./pages/cases.js";
import { contactPage } from "./pages/contact.js";
import { bindNewCase, newCasePage } from "./pages/new-case.js";

const app = document.getElementById("app");

function render() {
  const route = location.hash.replace(/^#/, "") || "/";
  if (route === "/new") {
    app.innerHTML = newCasePage();
    bindNewCase(app);
  } else if (route === "/contact") app.innerHTML = contactPage();
  else if (route.startsWith("/case/")) app.innerHTML = casePage(decodeURIComponent(route.slice(6)));
  else app.innerHTML = casesPage();
  app.focus();
}

window.addEventListener("hashchange", render);
render();
