import { CATEGORIES } from "../data.js";
import { clearDraft, loadDraft, saveDraft } from "../drafts.js";

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
    <button type="button" id="save-draft">Save as draft</button>
    <p id="draft-status" role="status"></p>
  </form>`;
}

export function bindNewCase(root) {
  const form = root.querySelector("#new-case");
  const draft = loadDraft();
  if (draft) for (const [name, value] of Object.entries(draft)) if (form.elements[name] && name !== "attachment") form.elements[name].value = value;
  root.querySelector("#save-draft")?.addEventListener("click", () => {
    const fields = Object.fromEntries([...new FormData(form)].filter(([name]) => name !== "attachment"));
    saveDraft(fields);
    root.querySelector("#draft-status").textContent = "Draft saved. It's kept for 7 days.";
  });
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    clearDraft();
    const number = `MOCK-2026-${String(Math.floor(Math.random() * 9000) + 1000)}`;
    root.innerHTML = `<div class="notice" role="status"><h1>Case received</h1><p>Your case number is <strong>${number}</strong>. A receipt is on its way (mock: nothing is sent).</p></div>`;
  });
}
