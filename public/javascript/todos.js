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
  todoPopup.classList.toggle("hide-popup");
}

function addTodo() {
  const saveTodoButton = document.getElementById("saveButton");
  saveTodoButton.addEventListener("click", createNewTodo);
}

function createNewTodo() {
  let todo = document.createElement("div");
  todo.classList.add("todo");
  let inputValue = document.getElementById("todoInput").value;
  let todoTitle = document.createTextNode(inputValue);

  todo.appendChild(todoTitle);
  if (inputValue === "") {
    alert("Du måste skriva någonting...");
  } else {
    document.getElementById("todaysTodo").appendChild(todo);
  }
  document.getElementById("todoInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  todo.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      //   div.style.display = "none";
    };
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
