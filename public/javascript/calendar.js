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

function renderCalenderDays() {
  let calenderUL = document.querySelector(".calendar")


  
  let firstWeekDayOfMonth = new Date(calendar.year, calendar.month, 1, - 1).getDay();   

  let daysInMonth = new Date(calendar.year, calendar.month + 1, 0).getDate();
  let paddingDays = new Date (calendar.year, calendar.month, 0).getDate();
// console.log(paddingDays)
  let liTag = "";


  for (let i = firstWeekDayOfMonth; i > 0; i--) {
    liTag += `<li class="padding-days">${paddingDays - i + 1}</li>`;
    
  }



  for (let i = 1; i <= daysInMonth; i++) {
    liTag += `<li>${i}</li>`;
  };

  calenderUL.innerHTML= liTag;

}

  

  // const dateString = firstDay.toLocaleDateString("en-us", {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "numeric",
  //   day: "numeric"
  // })

  // const paddingDays = weekdays.indexOf(dateString.split(', ')[0]) -1;

  // const dt = new Date();
  // const day = dt.getDate();
  // const month = dt.getMonth();
  // const year = dt.getFullYear();


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
