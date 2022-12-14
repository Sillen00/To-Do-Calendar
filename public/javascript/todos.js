window.addEventListener("DOMContentLoaded", createTodo);

/** Startar funktionerna för skapandet av Todo.*/
function createTodo() {
  addEventListeners();
}

/** Aktiverar funktionen togglePopup vid klick av knappen på Skapa Todo.  */
function addEventListeners() {
  const createTodoButton = document.getElementById("createTodoButton");
  createTodoButton.addEventListener("click", togglePopup);

  const saveTodoButton = document.getElementById("saveButton");
  saveTodoButton.addEventListener("click", createNewTodo);
}

/** Visar / döljer popup fönstret för att skapa Todo. */
function togglePopup() {
  const todoPopup = document.getElementById("todoPopup");
  todoPopup.classList.toggle("show-popup");
}

/** Skapar en ny Todo. (Just nu  läggs alla Todos till i Dagens Todo.) */
function createNewTodo() {
  let newTodo = document.createElement("div");
  newTodo.classList.add("todo");

  let todoInput = document.getElementById("todoInput").value;
  let dateInput = document.getElementById("dateInput").value;

  let date = new Date();
  todaysDate = date.toLocaleString("sv-SE");

  if (todoInput === "" || dateInput === "") {
    alert("Var vänlig skriv en Todo och fyll i ett datum.");
  } else if (todaysDate.includes(dateInput)) {
    newTodo.innerHTML = `
    <div class="todo-content">
        <p class="todo-title">${todoInput}</p>
        <p class="todo-date">${dateInput}</p>
    </div>
    <div class="todo-buttons">
        <button class="todo-button-change">Ändra</button>
        <button class="todo-button-delete">Ta bort</button>
    </div>
    `;
    const todaysTodo = document.getElementById("todaysTodo");
    todaysTodo.appendChild(newTodo);

    const allTodo = document.getElementById("allTodo");
    allTodo.appendChild(newTodo.cloneNode(true));

    togglePopup("click");
  } else {
    newTodo.innerHTML = `
    <div class="todo-content">
        <p class="todo-title">${todoInput}</p>
        <p class="todo-date">${dateInput}</p>
    </div>
    <div class="todo-buttons">
        <button class="todo-button-change">Ändra</button>
        <button class="todo-button-delete">Ta bort</button>
    </div>
    `;
    allTodo.appendChild(newTodo);

    togglePopup("click");
  }
  document.getElementById("todoInput").value = "";
  document.getElementById("dateInput").value = "";
}
