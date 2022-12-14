window.addEventListener("DOMContentLoaded", createTodo);

function createTodo() {
  showPopup();
  addTodo();
}

function showPopup() {
  const createTodoButton = document.getElementById("createTodoButton");
  createTodoButton.addEventListener("click", togglePopup);
}

function togglePopup() {
  const todoPopup = document.getElementById("todoPopup");
  todoPopup.classList.toggle("show-popup");
}

function addTodo() {
  const saveTodoButton = document.getElementById("saveButton");
  saveTodoButton.addEventListener("click", createNewTodo);
}

// FUNKADE EJ!!
// function createNewTodo() {
//   let input = document.getElementById("todoInput").value;
//   let todo = document.getElementById("todaysTodo");

//   if (input.value.trim() !== 0) {
//     let newTodo = document.createElement("div");
//     newTodo.classList.add("todo");
// newTodo.innerHTML = `
// <div class="todo-content">
//               <p class="todo-title">${input.value}</p>
//               <p class="todo-date">2022-12-10</p>
//             </div>
//             <div class="todo-buttons">
//               <button class="todo-button-change">Ändra</button>
//               <button class="todo-button-delete">Ta bort</button>
//             </div>
// `;
//     todo.appendChild(newTodo);
//     input.value = "";
//   } else {
//     alert("Var vänlig skriv en Todo.");
//   }
// }

function createNewTodo() {
  let newTodo = document.createElement("div");
  newTodo.classList.add("todo");

  let todoInput = document.getElementById("todoInput").value;

  let dateInput = document.getElementById("dateInput").value;

  if (todoInput === "" || dateInput === "") {
    alert("Var vänlig skriv en Todo och fyll i ett datum.");
  } else {
    document.getElementById("todaysTodo").appendChild(newTodo);
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
  }
  document.getElementById("todoInput").value = "";
  document.getElementById("dateInput").value = "";

  //   let span = document.createElement("SPAN");
  //   let txt = document.createTextNode("\u00D7");
  //   span.className = "close";
  //   span.appendChild(txt);
  //   todo.appendChild(span);

  //   for (i = 0; i < close.length; i++) {
  //     close[i].onclick = function () {
  //       let div = this.parentElement;
  //       //   div.style.display = "none";
  //     };
  //   }
}

// Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }
