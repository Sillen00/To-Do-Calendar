window.addEventListener("DOMContentLoaded", initTodos);

let todos = [];
console.log(todos);

/** Startar funktionerna för skapandet av Todo.*/
function initTodos() {
  addEventListeners();
}

/** Aktiverar funktionen togglePopup vid klick av knappen på Skapa Todo.  */
function addEventListeners() {
  const createTodoButton = document.getElementById("createTodoButton");
  createTodoButton.addEventListener("click", togglePopup);

  const saveTodoButton = document.getElementById("saveButton");
  saveTodoButton.addEventListener("click", addTodoFormEventListener);
}

// /** Visar / döljer popup fönstret för att skapa Todo. */
function togglePopup() {
  const todoPopup = document.getElementById("todoPopup");
  todoPopup.classList.toggle("show-popup");
}

function addTodoFormEventListener() {
  const form = document.querySelector("#add-todo-form");
  form.addEventListener("submit", createNewTodo);
}

function createNewTodo(event) {
  event.preventDefault();

  const todo = {
    id: Date.now().toLocaleString(),
    content: event.target.elements.text.value,
    completed: false,
    date: new Date().toLocaleDateString(),
  };
  console.log("Funkar?");

  todos.push(todo);

  event.target.reset();

  showTodos();
}

function showTodos() {
  const allTodo = document.querySelector("#allTodo");
  allTodo.innerHTML = "";

  for (const todo of todos) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo");

    const todoContent = document.createElement("div");
    const todoTitle = document.createElement("p");
    const todoDate = document.createElement("p");
    const todoButtons = document.createElement("div");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    todoContent.classList.add("todo-content");
    todoTitle.classList.add("todo-title");
    todoDate.classList.add("todo-date");
    todoButtons.classList.add("todo-buttons");
    editButton.classList.add("todo-button-change");
    deleteButton.classList.add("todo-button-delete");

    todoContent.innerHTML = `${todo.content}`;
    editButton.innerHTML = "Ändra";
    deleteButton.innerHTML = "Ta bort";

    todoContent.appendChild(todoTitle);
    todoContent.appendChild(todoDate);
    todoButtons.appendChild(editButton);
    todoButtons.appendChild(deleteButton);
    todoItem.appendChild(todoContent);
    todoItem.appendChild(todoContent);
    todoItem.appendChild(todoButtons);

    allTodo.appendChild(todoItem);
  }
}

// function createNewTodo(event) {
//   event.preventDefault();

//   const todo = {
//     id: Date.now().toLocaleString(),
//     content: e.target.elements.content.value,
//     completed: false,
//     date: new Date().toLocaleDateString(),
//   };

//   todos.push(todo);

//   event.target.reset();
// }

// function createNewTodo(event) {
//   event.preventDefault();
//   const form = event.target;
//   const formData = new FormData(form);
//   const todoData = Object.fromEntries(formData.entries());

//   const todo = {
//     id: Date.now().toLocaleString(),
//     completed: false,
//     ...todoData,
//     date: new Date(todoData.date),
//   };

//   todos.push(todo);
//   renderTodos();
// }

// function renderTodos() {
//   console.log(todos);
//   const ul = document.querySelector("#allTodo");
//   if (ul) return;

//   ul.innerHTML = "";

//   for (const todo of todos) {
//     const todoItem = createTodoItem(todo);
//     ul.append(todoItem);
//   }
// }

// function createTodoItem(todo) {
//   const li = document.createElement("li");
//   li.textContent = todo.text;
//   li.className = "flex";

//   const deleteButton = document.createElement("button");
//   deleteButton.id = todo.id;
//   deleteButton.textContent = "🗑️";
//   deleteButton.addEventListener("click", function () {
//     deleteTodo(todo);
//   });
//   li.append(deleteButton);

//   return li;
//   document.getElementById("todoInput").value = "";
//   document.getElementById("dateInput").value = "";
// }

/** Skapar en ny Todo. (Just nu  läggs alla Todos till i Dagens Todo.) */
// function createNewTodo() {
//   let newTodo = document.createElement("div");
//   newTodo.classList.add("todo");

//   let todoInput = document.getElementById("todoInput").value;
//   let dateInput = document.getElementById("dateInput").value;

//   let date = new Date();
//   todaysDate = date.toLocaleString("sv-SE");

//   if (todoInput === "" || dateInput === "") {
//     alert("Var vänlig skriv en Todo och fyll i ett datum.");
//   } else if (todaysDate.includes(dateInput)) {
//     newTodo.innerHTML = `
//     <div class="todo-content">
//         <p class="todo-title">${todoInput}</p>
//         <p class="todo-date">${dateInput}</p>
//     </div>
//     <div class="todo-buttons">
//         <button class="todo-button-change">Ändra</button>
//         <button class="todo-button-delete">Ta bort</button>
//     </div>
//     `;
//     const todaysTodo = document.getElementById("todaysTodo");
//     todaysTodo.appendChild(newTodo);

//     const allTodo = document.getElementById("allTodo");
//     allTodo.appendChild(newTodo.cloneNode(true));

//     togglePopup("click");
//   } else {
//     newTodo.innerHTML = `
//     <div class="todo-content">
//         <p class="todo-title">${todoInput}</p>
//         <p class="todo-date">${dateInput}</p>
//     </div>
//     <div class="todo-buttons">
//         <button class="todo-button-change">Ändra</button>
//         <button class="todo-button-delete">Ta bort</button>
//     </div>
//     `;
//     allTodo.appendChild(newTodo);

//     togglePopup("click");
//   }
//   document.getElementById("todoInput").value = "";
//   document.getElementById("dateInput").value = "";
// }
