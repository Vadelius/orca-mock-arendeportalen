import { casePage } from "./pages/case.js";
import { casesPage } from "./pages/cases.js";
import { contactPage } from "./pages/contact.js";
import { bindNewCase, newCasePage } from "./pages/new-case.js";
import { queuePage } from "./pages/queue.js";

const app = document.getElementById("app");

function render() {
  const route = location.hash.replace(/^#/, "") || "/";
  if (route === "/new") {
    app.innerHTML = newCasePage();
    bindNewCase(app);
  } else if (route === "/contact") app.innerHTML = contactPage();
  else if (route.startsWith("/queue")) {
    app.innerHTML = queuePage(new URLSearchParams(route.split("?")[1] ?? ""));
    app.querySelector("#queue-filter")?.addEventListener("submit", (event) => {
      event.preventDefault();
      location.hash = `/queue?${new URLSearchParams(new FormData(event.target))}`;
    });
  }
  else if (route.startsWith("/case/")) app.innerHTML = casePage(decodeURIComponent(route.slice(6)));
  else app.innerHTML = casesPage();
  app.focus();
}

window.addEventListener("hashchange", render);
render();
