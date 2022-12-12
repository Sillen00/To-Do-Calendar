window.addEventListener("DOMContentLoaded", main);

/** Adds a start and flow to the functions. */
function main() {
  addEventListeners();
}

/** */
function addEventListeners() {
  const days = document.querySelectorAll(".calendar div");
  console.log(days);
  for (const day of days) {
    day.addEventListener("click", toggleDay);
  }
}

/**
 *
 * @param {MouseEvent} event
 */
function toggleDay(event) {
  const day = event.currentTarget;
  day.classList.toggle("active");

  if (day.c) {
  }
  //   const dayClicked = document.querySelectorAll(".day");
  //   dayClicked.classList.toggle("active");
}
