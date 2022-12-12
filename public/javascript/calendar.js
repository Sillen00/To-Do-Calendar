window.addEventListener("DOMContentLoaded", calenderInfo)

/**
 * Creates an object with the current date, year, month and day.
 */
let calendar = {
    date: new Date(),
    year: null,
    month: null,
    day: null,
  };
  
  /**
   * Array with the months of the year.
   */
  const months = ["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December",];



// function main() {
//     calenderInfo();
// }


/**
 * Gets the current year, month and day and displays the current month in the calendar.
 */
  function calenderInfo() {
    // addEventListeners();
    calendar.year = calendar.date.getFullYear();
    calendar.month = calendar.date.getMonth();
    calendar.day = calendar.date.getDate();
    
    let displayCurrentMonth = document.getElementById("displayCurrentMonth");
    displayCurrentMonth.innerHTML = months[calendar.month];
    drawCurrentMonth();
}

/**
 * Adds event listeners to the buttons that changes the month.
 */
function changeMonths(){
    document.getElementById("previousMonthButton").addEventListener("click", monthBack);
    document.getElementById("nextMonthButton").addEventListener("click", monthForward);
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
  drawCurrentMonth()
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
  drawCurrentMonth()

}
/**
 * Displays the current month and year in the calendar.
 */
function drawCurrentMonth() {
        document.getElementById("displayCurrentMonth").innerText =
      months[calendar.month] + " " + +calendar.year;
  
  }



