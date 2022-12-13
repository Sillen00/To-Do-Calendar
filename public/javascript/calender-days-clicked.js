window.addEventListener("DOMContentLoaded", main);

/** Adds a start and flow to the functions. */
function main() {
  addEventListeners();
}

// FUNKADE FÖR ATT MARKERA DAGAR
function addEventListeners() {
  const days = document.querySelectorAll(".calendar div");
  for (const day of days) {
    day.addEventListener("click", toggleDay);
  }
}

/**
 *
 * @param {MouseEvent} event
 */
function toggleDay(event) {
  const activeDay = document.querySelector(".calendar div.active");
  activeDay?.classList.remove("active");
  const day = event.currentTarget;
  day.classList.add("active");

  // const day = event.currentTarget;
  // day.classList.toggle("active");

  // clearClickedDay(event);
}

// function clearClickedDay(event) {
//   const daysClicked = document.querySelectorAll(".active");

//   for (const dayClicked of daysClicked) {
//     if (dayClicked) dayClicked.classList.remove("active");
//     dayClicked.classList.add("active");
//   }
// }
