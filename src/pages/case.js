import { cases } from "../data.js";

export function casePage(id) {
  const c = cases.find((x) => x.id === id);
  if (!c) return `<h1>Case not found</h1><p><a href="#/">Back to your cases</a></p>`;
  return `<h1>${c.id}</h1>
  <dl><dt>Title</dt><dd>${c.title}</dd><dt>Category</dt><dd>${c.category}</dd><dt>Status</dt><dd>${c.status}</dd><dt>Submitted</dt><dd>${c.submitted}</dd></dl>
  <form id="reply"><label>Add information to your case<textarea name="message" rows="4"></textarea></label><button>Send</button></form>`;
}
