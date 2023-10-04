import refs from "./refs.js";
import { items } from "./app.js";

const { paragraphEl, listEl } = refs;

export function randerMarkup(data) {
  const markup = data.map((student) => createStudentCard(student)).join("");
  listEl.innerHTML = markup;

  items.length === 0
    ? paragraphEl.classList.remove("is-hidden")
    : paragraphEl.classList.add("is-hidden");
}
