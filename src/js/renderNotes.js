import { displayDeleteModal } from "./deleteNotes.js";
import { enterEditMode } from "./editNotes.js";

const renderNotes = () => {
  const notesList = JSON.parse(localStorage.getItem("notes"));
  const notesContainer = document.querySelector(".notes-container");
  const submitButton = document.querySelector(".form__submit-button");

  if (notesList) {
    notesContainer.innerHTML = "";
    const reverseNotesArray = notesList.slice().reverse();

    reverseNotesArray.forEach((note) => {
      // create element
      const noteCard = document.createElement("div");
      const noteSubject = document.createElement("span");
      const noteDate = document.createElement("span");
      const detailsToolsContainer = document.createElement("div");
      const dateSubjectContainer = document.createElement("div");
      const deleteButton = document.createElement("button");
      const editButton = document.createElement("button");
      const editDeletContainer = document.createElement("div");
      const noteText = document.createElement("p");

      // Append elements
      notesContainer.append(noteCard);
      noteCard.append(detailsToolsContainer);
      detailsToolsContainer.append(dateSubjectContainer, editDeletContainer);
      noteCard.append(noteText);
      dateSubjectContainer.append(noteSubject, noteDate);
      editDeletContainer.append(deleteButton, editButton);

      // Inserting note's data
      noteSubject.textContent = note.subject;
      noteDate.textContent = note.date;
      noteText.textContent = note.text;
      deleteButton.textContent = "❌";
      editButton.textContent = "✍️";

      // Add classes
      noteCard.classList.add("note-card");
      detailsToolsContainer.classList.add("note-card__details-tools-container");
      dateSubjectContainer.classList.add("note-card__details-container");
      editDeletContainer.classList.add("note-card__tools-container");
      deleteButton.classList.add("note-card__delete-button");
      editButton.classList.add("note-card__edit-button");
      noteText.classList.add("note-card__text");

      noteCard.style.transform = `rotate(${note.rotation}deg)`;

      // Adding event listeners
      deleteButton.addEventListener("click", () => {
        displayDeleteModal(note.subject, note.id);
      });

      editButton.addEventListener("click", () => {
        enterEditMode(note.id);
        document.querySelectorAll(".note-card").forEach((card) => {
          card.classList.remove("note-card--edited");
        });
        noteCard.classList.add("note-card--edited");
        submitButton.textContent = "Confirm Edit";
        submitButton.classList.add("note-card--edited");
      });

      noteCard.addEventListener("click", () => {
        document.querySelectorAll(".note-card").forEach((card) => {
          card.style.zIndex = 0;
        });
        noteCard.style.zIndex = 1;
      });
    });
  }
};

export default renderNotes;
