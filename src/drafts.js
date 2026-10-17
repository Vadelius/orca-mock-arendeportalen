// Drafts of a new case (MOCK). Until sign-in exists a draft lives in this browser (see docs/decisions.md);
// a draft is kept for 30 days and then removed.
const KEY = "arendeportalen.draft";
const KEEP_DAYS = 30;

export function saveDraft(fields) {
  localStorage.setItem(KEY, JSON.stringify({ fields, savedAt: Date.now() }));
}

export function loadDraft() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  const draft = JSON.parse(raw);
  if (Date.now() - draft.savedAt > KEEP_DAYS * 24 * 60 * 60 * 1000) {
    localStorage.removeItem(KEY);
    return null;
  }
  return draft.fields;
}

export function clearDraft() {
  localStorage.removeItem(KEY);
}
