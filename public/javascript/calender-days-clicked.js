window.addEventListener("DOMContentLoaded", main);

/** Adds a start and flow to the functions. */
function main() {
  selectDay();
}

/** Ger användaren möjligheten att välja önskad dag i kalendern. */
function selectDay() {
  const days = document.querySelectorAll(".calendar div");
  for (const day of days) {
    day.addEventListener("click", activateDay);
  }
}

/**
 * Tar bort och lägger klassen "active" på den valda dagen i kalendern.
 * Ser till att endast en dag kan vara markerad åt gången.
 * @param {MouseEvent} event
 */
function activateDay(event) {
  const activeDay = document.querySelector(".calendar div.active");
  activeDay?.classList.remove("active");
  const day = event.currentTarget;
  day.classList.add("active");
}
