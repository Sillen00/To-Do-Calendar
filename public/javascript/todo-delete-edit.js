window.addEventListener("DOMContentLoaded", main);

function main() {
  addEventListeners();
  let todo = document.querySelector(".todo");

  todo.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo-button-delete")) {
      e.target.parentElement.parentElement.remove();
    }
  });
}

// function addEventListeners() {
//   let deleteButton = document.querySelector(".todo-button-delete");
//   deleteButton = addEventListener("click", deleteTodoFromList);
// }

// function deleteTodoFromList(e) {
//   console.log("click");
//   let deleteTodo = document.querySelector(".todo");
//   //   deleteTodo.parentNode.removeChild(deleteTodo);

//   if (e.target.classList.contains("todo-button-delete")) {
//     e.target.parentElement.parentElement.remove();
//   }
//   addEventListeners();
// }
