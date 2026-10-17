import { cases } from "../data.js";

export function casesPage() {
  const rows = cases
    .map(
      (c) =>
        `<tr><td><a href="#/case/${c.id}">${c.id}</a></td><td>${c.title}</td><td>${c.category}</td><td><span class="status">${c.status}</span></td><td>${c.submitted}</td></tr>`,
    )
    .join("");
  return `<h1>Your cases</h1>
  <p>Mock cases for the pretend resident “Test Person”.</p>
  <table><thead><tr><th>Case</th><th>Title</th><th>Category</th><th>Status</th><th>Submitted</th></tr></thead><tbody>${rows}</tbody></table>`;
}
