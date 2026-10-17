export function contactPage() {
  return `<h1>Contact the municipality</h1>
  <form id="contact">
    <label>Your name<input name="name" /></label>
    <label>Message<textarea name="message" rows="5" required></textarea></label>
    <button>Send message</button>
  </form>`;
}
