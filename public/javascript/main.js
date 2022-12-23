window.addEventListener("DOMContentLoaded", main);

/** Waiting for DOM to load and starts the main functions in JS-file's. */
function main() {
  initWelcome();
  initCalendar();
  initCalendarDaysClicked();
  initCheckedTodo();
  initTodos();
}
