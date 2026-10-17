import { CATEGORIES, cases } from "../data.js";

const STATUSES = ["Received", "In progress", "Decided"];

// The case handler's queue (MOCK): new cases, filtered by category and status.
export function queuePage(params) {
  const category = params.get("category") ?? "";
  const status = params.get("status") ?? "";
  const rows = cases
    .filter((c) => (!category || c.category === category) && (!status || c.status === status))
    .map((c) => `<tr><td>${c.id}</td><td>${c.title}</td><td>${c.category}</td><td>${c.status}</td></tr>`)
    .join("");
  const option = (value, current) => `<option${value === current ? " selected" : ""}>${value}</option>`;
  return `<h1>Case queue</h1>
  <form id="queue-filter">
    <label>Category<select name="category"><option value="">All categories</option>${CATEGORIES.map((c) => option(c, category)).join("")}</select></label>
    <label>Status<select name="status"><option value="">All statuses</option>${STATUSES.map((s) => option(s, status)).join("")}</select></label>
    <button>Filter</button>
  </form>
  <table><thead><tr><th>Case</th><th>Title</th><th>Category</th><th>Status</th></tr></thead><tbody>${rows || '<tr><td colspan="4">No cases match.</td></tr>'}</tbody></table>`;
}
