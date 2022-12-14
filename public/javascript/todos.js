window.addEventListener("DOMContentLoaded", showPopup);

function showPopup() {
  const createTodoButton = document.getElementById("create-todo-button");
  createTodoButton.addEventListener("click", togglePopup);
  console.log("clicked");
}

function togglePopup() {
  const todoPopup = document.getElementById("todo-popup");
  todoPopup.classList.toggle("hide-popup");
}
