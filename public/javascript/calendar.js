// window.addEventListener("DOMContentLoaded", initCalendar);

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
    let dayTag = "";
    let dayDiv = [];
    // loop for padding days of previous month
    for (let i = firstWeekDayOfMonth; i > 0; i--) {

      const div = document.createElement("div")
      div.className = "padding-days";
      div.textContent= lastDateOfPrevMonth - i + 1;
      dayDiv.push(div);
      // dayTag += `<div class="padding-days">${lastDateOfPrevMonth - i + 1}</div>`;
    }

    // Itterates the current month and adds the days to the calendar
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const currentDate =
        calendar.year +
        "-" +
        ("" + (calendar.month + 1)).padStart(2, "0") +
        "-" +
        ("" + i).padStart(2, "0");

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


      /**Kollar om en todos datum matchar något av kalenderns datum, lägger till antal todos i en variabel. */
      let todoNumber = 0;
      for (let i = 0; i < todos.length; i++) {
        if(todos[i].date === currentDate){
          todoNumber ++;
        }
      }

      const div = document.createElement("div")
      div.className = isToday;
      div.textContent= i;
      if(todoNumber){
      const div2 = document.createElement("div")
      div2.className = "todo-number";
      div2.textContent = todoNumber;
      div.append(div2)
      }
      dayDiv.push(div);
      
      
      dayTag += `<div class="${isToday}">${i}${todoNumber?'<div class="todo-number">'+todoNumber+'</div>':""}</div>`;

    }
    // Creating li of next month first days
    for (let i = lastDayOfMonth; i < 6; i++) {
      // dayTag += `<div class="padding-days">${i - lastDayOfMonth + 1}</div>`;

      const div = document.createElement("div")
      div.className = "padding-days";
      div.textContent= i - lastDayOfMonth + 1;
      dayDiv.push(div);
    }

    calenderDiv.append(...dayDiv);
    // calenderDiv.innerHTML = dayTag;
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
