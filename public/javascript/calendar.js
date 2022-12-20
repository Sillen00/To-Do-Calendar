// window.addEventListener("DOMContentLoaded", initCalendar);

function initCalendar() {
  renderCalenderDays();
  calenderInfo();
  getHolidayAPI();
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
// let fullDateTime = calendar.date.toLocaleString();
// const fullDate = fullDateTime.split(" ")
// console.log(fullDate[0])

async function getHolidayAPI() {
  const url = `https://sholiday.faboul.se/dagar/v2.1/${calendar.year}`;
  const response = await fetch(url);
  const result = await response.json();

  const days = result.dagar;
  console.log(days)

  
  const holidays = [];
  for (let i = 0; i < days.length; i++) {
    if (days[i].helgdag) {
      holidays.push(days[i]);
    }
  }
  
  for (let holiday of holidays) {
    let str = holiday.datum;
    let holidayName = holiday.helgdag;
    let splittedStr = str.split("-");
    let holidayDates = splittedStr[2];
    let holidayParagraph = document.createElement("p");
    holidayParagraph.classList.add("helgdag");
    holidayParagraph.textContent = holidayName;
  
    /** If cell contains holidayname stop loop. If not, puts correct data in cell */
    const calendarDays = document.querySelectorAll(".calendar li");
    // console.log(calendarDays)
  
  for (let i = 0; i < 35; i++) {
  if (calendarDays[i].innerHTML.includes(`${holidayName}`)) {
    break;
  } else if (calendarDays[i].innerHTML.includes(`${holidayDates}`)) {
    calendarDays[i].append(holidayParagraph);
  
  }
  }
  
}
return holidays;

}




// for (const day of days) {
//   const daysInYear = day.datum;

// }
// for (const holiday of holidays) {
//   // console.log(holiday.datum);
//   const holidaysInYear = holiday.datum;
//   if (holidaysInYear === daysInYear) {

//     // Use the holidays array to add the holidays to the calendar

//     const calendarDays = document.querySelectorAll(".calendar li");
//     // console.log(calendarDays.length)

//     for (const li of calendarDays) {
//       const p = document.createElement("p");
//       p.classList.add("helgdag");
//       p.innerHTML = holiday.helgdag;
//       li.appendChild(p);

//     }
//   }
// }

// for (const day of result.dagar) {
//   if (day.helgdag === day.helgdag /*&& day.datum === fullDate[0]*/) {
//     const p = document.createElement("p");
//     p.classList.add("helgdag");

//     p.innerHTML = day.helgdag;
//     const calendarDays = document.querySelectorAll(".calendar li");

//     for (const li of calendarDays) {
//       li.appendChild(p);
//     }
// console.log(calendarDays)
//   }
// }

function renderCalenderDays() {
  let calenderUL = document.querySelector(".calendar");

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

  let liTag = "";

  // loop for padding days of previous month
  for (let i = firstWeekDayOfMonth; i > 0; i--) {
    liTag += `<li class="padding-days">${lastDateOfPrevMonth - i + 1}</li>`;
  }

  // Itterates the current month and adds the days to the calendar
  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === calendar.date.getDate() &&
      calendar.month === new Date().getMonth() &&
      calendar.year === new Date().getFullYear()
        ? "activeDay"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  // Creating li of next month first days
  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="padding-days">${i - lastDayOfMonth + 1}</li>`;
  }

  calenderUL.innerHTML = liTag;
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
