function initCalendar() {
  renderCalenderDays();
  calenderInfo();
}

/** Creates an object with the current date, year, month and day. */
let calendar = {
  date: new Date(),
  year: null,
  month: null,
  day: null,
};

calendar.year = calendar.date.getFullYear();
calendar.month = calendar.date.getMonth();
calendar.day = calendar.date.getDate();

/** Array with the months of the year.*/
const months = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December",
];

/**Array with the weekdays */
// const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

async function getHolidayAPI() {
  const url = `https://sholiday.faboul.se/dagar/v2.1/${calendar.year}/${
    calendar.month + 1
  }`;
  const response = await fetch(url);
  const result = await response.json();

  const days = result.dagar;

  const fetchedHolidays = [];
  for (let i = 0; i < days.length; i++) {
    if (days[i].helgdag) {
      fetchedHolidays.push(days[i]);
    }
  }
  return fetchedHolidays;
}

async function renderCalenderDays() {
  let calenderDiv = document.querySelector(".calendar");
  calenderDiv.innerHTML = "";

  let firstWeekDayOfMonth = new Date(
    calendar.year,
    calendar.month,
    1,
    -1
  ).getDay(); // Getting first weekday of mounth
  let lastDateOfMonth = new Date(
    calendar.year,
    calendar.month + 1,
    0
  ).getDate(); // Getting last date of month
  let lastDayOfMonth = new Date(
    calendar.year,
    calendar.month,
    lastDateOfMonth - 1
  ).getDay(); // Getting last date of month
  let lastDateOfPrevMonth = new Date(
    calendar.year,
    calendar.month,
    0
  ).getDate(); // Getting last date of prev month

  const now = new Date();

  getHolidayAPI().then((holidays) => {
    let dayDivs = [];

    // loop for padding days of previous month
    for (let i = firstWeekDayOfMonth; i > 0; i--) {
      const div = document.createElement("div");
      div.className = "padding-days";
      div.textContent = lastDateOfPrevMonth - i + 1;
      dayDivs.push(div);
    }

    // Itterates the current month and adds the days to the calendar
    for (let i = 1; i <= lastDateOfMonth; i++) {
      //Tar fram dagens datum med 0,or om det inte finns tex: 2022-12-"0"2
      const currentDate =
        calendar.year +
        "-" +
        ("" + (calendar.month + 1)).padStart(2, "0") +
        "-" +
        ("" + i).padStart(2, "0");

      //Sätter klassen "activeDay" på diven som har samma datum som dagens datum.
      let isToday =
        i === calendar.day &&
        calendar.month === now.getMonth() &&
        calendar.year === now.getFullYear()
          ? "activeDay"
          : "";

      /**Kollar om en helgdags datum matchar med dagens datum, lägger helgdagens namn i en variabel. */
      let holidayString = "";
      const xx = holidays.filter((h) => {
        return h.datum === currentDate;
      });
      if (xx[0]) {
        holidayString = xx[0].helgdag;
      }

      /**Kollar om en todos datum matchar något av kalenderns datum, lägger till antal todos i en variabel.
       * "todos" arrayen kommer från "todos.js"
       */
      let todoNumber = 0;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].date === currentDate) {
          todoNumber++;
        }
      }

      const divTag = document.createElement("div");
      divTag.className = isToday;
      divTag.textContent = i;

      if (todoNumber) {
        const div2 = document.createElement("div");
        div2.className = "todo-number";
        div2.textContent = todoNumber;
        divTag.append(div2);
      }
      dayDivs.push(divTag);

      if (holidayString) {
        const p = document.createElement("p");
        p.className = "helgdag-p-tag";
        p.textContent = holidayString;
        divTag.append(p);
      }
      dayDivs.push(divTag);

      // dayTag += `<div class="${isToday}">${i}   <p class="helgdag-p-tag">${holidayString}</p>    ${todoNumber?'<div class="todo-number">'+todoNumber+'</div>':""}</div>`;
    }
    // Creating li of next month first days
    for (let i = lastDayOfMonth; i < 6; i++) {
      const div = document.createElement("div");
      div.className = "padding-days";
      div.textContent = i - lastDayOfMonth + 1;
      dayDivs.push(div);
    }

    calenderDiv.append(...dayDivs);
  });
}

/**
 * Gets the current year, month and day and displays the current month in the calendar.
 */

function calenderInfo() {
  changeMonths();

  drawCurrentMonth();
}

/**
 * Adds event listeners to the buttons that changes the month.
 */
function changeMonths() {
  document
    .getElementById("monthBackArrow")
    .addEventListener("click", monthBack);
  document
    .getElementById("monthForwardArrow")
    .addEventListener("click", monthForward);
}

/**
 * If the month is december, the month will be set to january and the year will be increased by one.
 */
function monthForward() {
  if (calendar.month === 11) {
    calendar.month = 0;
    calendar.year++;
  } else {
    calendar.month++;
  }
  renderCalenderDays();

  drawCurrentMonth();
}

/**
 * If the month is january, the month will be set to december and the year will be decreased by one.
 */
function monthBack() {
  if (calendar.month === 0) {
    calendar.month = 11;
    calendar.year--;
  } else {
    calendar.month--;
  }
  renderCalenderDays();

  drawCurrentMonth();
}
/**
 * Displays the current month and year in the calendar.
 */
function drawCurrentMonth() {
  document.getElementById("displayCurrentMonth").innerText =
    months[calendar.month] + " " + +calendar.year;
}
