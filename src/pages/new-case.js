import { CATEGORIES } from "../data.js";

export function newCasePage() {
  const options = CATEGORIES.map((c) => `<option>${c}</option>`).join("");
  return `<h1>New case</h1>
  <form id="new-case">
    <label>Category<select name="category" required>${options}</select></label>
    <label>Title<input name="title" required maxlength="80" /></label>
    <label>Describe your case<textarea name="description" rows="6" required></textarea></label>
    <label>Attachment (optional)<input type="file" name="attachment" /></label>
    <label>Email for the receipt<input type="email" name="email" required /></label>
    <button>Submit case</button>
  </form>`;
}

export function bindNewCase(root) {
  const form = root.querySelector("#new-case");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const number = `MOCK-2026-${String(Math.floor(Math.random() * 9000) + 1000)}`;
    root.innerHTML = `<div class="notice" role="status"><h1>Case received</h1><p>Your case number is <strong>${number}</strong>. A receipt is on its way (mock: nothing is sent).</p></div>`;
  });
}
