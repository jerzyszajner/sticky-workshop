const validateNotes = (subject, date, text) => {
  const errorParagraph = document.querySelector(".form__error-text");
  const formatedSubject = subject.value.trim();
  const formatedDate = date.value.trim();
  const formatedText = text.value.trim();

  //Validate subject
  if (!formatedSubject) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Please enter a subject";
    return false;
  }
  //Validate date
  if (!formatedDate) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Please enter a date";
    return false;
  }
  //Validate note's text
  if (!formatedText) {
    errorParagraph.style.visibility = "visible";
    errorParagraph.textContent = "Please enter a note";
    return false;
  }
  //If validation passed, provide a success message
  errorParagraph.style.visibility = "visible";
  errorParagraph.textContent = "Note submitted successfully";

  // Hide the success message after 2 seconds
  setTimeout(() => {
    errorParagraph.style.visibility = "hidden";
  }, 2000);
  return true;
};

export default validateNotes;
