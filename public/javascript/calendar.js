window.addEventListener("DOMContentLoaded", initCalendar);

function initCalendar() {
    calenderInfo();
}

/** Creates an object with the current date, year, month and day. */
let calendar = {
  date: new Date(),
  year: null,
  month: null,
  day: null,
};


const kalendar = document.querySelector('.calendar');
/** Array with the months of the year.*/
const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November",  "December"];

/**Array with the weekdays */
const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];

 
function renderCalenderDays() {
const dt = new Date();

const day = dt.getDate();
const month = dt.getMonth();
const year = dt.getFullYear();

const firstDay = new Date(year, month, 1);
const daysInMonth = new Date(year, month + 1, 0).getDate();   

console.log(firstDay)
console.log(daysInMonth)


const paddingDays = weekdays.indexOF("Tisdag"); 

console.log(paddingDays)





// const dateString = firstDay.toLocaleDateString("en-us", {
//   weekday: "long",
//   year: "numeric",
//   month: "numeric",
//   day: "numeric"
// })



}

// render the calendar days in the calendar with dates

/**
 * Gets the current year, month and day and displays the current month in the calendar.
 */
function calenderInfo() {
  changeMonths();
  renderCalenderDays();
  calendar.year = calendar.date.getFullYear();
  calendar.month = calendar.date.getMonth();
  calendar.day = calendar.date.getDate();


  drawCurrentMonth();
  
}

/**
 * Adds event listeners to the buttons that changes the month.
 */
function changeMonths() {
  document.getElementById("monthBackArrow").addEventListener("click", monthBack);
  document.getElementById("monthForwardArrow").addEventListener("click", monthForward);
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
  calendar.date = new Date(calendar.year, calendar.month, 1);
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
  calendar.date = new Date(calendar.year, calendar.month, 1);
  drawCurrentMonth();
}
/**
 * Displays the current month and year in the calendar.
 */
function drawCurrentMonth() {
  document.getElementById("displayCurrentMonth").innerText =
    months[calendar.month] + " " + +calendar.year;
    
}
