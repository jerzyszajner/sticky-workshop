import addNotes from "./addNotes.js";
import renderNotes from "./renderNotes.js";
import validateNotes from "./validateNotes.js";

// Selecting elements
const form = document.querySelector(".form");
const subjectInput = document.querySelector(".form__subject-input");
const dateInput = document.querySelector(".form__date-input");
const noteText = document.querySelector(".form__note-input");

// Initial render
document.addEventListener("DOMContentLoaded", renderNotes);

// Add submit event to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateNotes(subjectInput, dateInput, noteText)) {
    return;
  }
  addNotes(subjectInput, dateInput, noteText);
  renderNotes();
});
