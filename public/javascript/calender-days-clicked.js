// DEN HÄR FUNKTIONEN ÄR INTE AKTIV JUST NU, MEN VI SPARAR DEN FÖR FRAMTIDA REDIGERING

/** Startar och ger ett flyt till funktionerna. */
function initCalendarDaysClicked() {
  selectDay();
}

/** Loopar över alla månadens dagar och ger användaren möjligheten att välja önskad dag i kalendern. */
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
